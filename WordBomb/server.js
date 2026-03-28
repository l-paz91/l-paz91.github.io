const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const path = require('path');
const os = require('os');
const SYLLABLES = require('./syllables');
const { initWordList, isValidWord, containsSyllable } = require('./words');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static(path.join(__dirname, 'public')));

// ─── Game State ──────────────────────────────────────────────
const rooms = new Map();

function createRoom(code) {
  return {
    code,
    players: [],         // [{ id, name, lives, socket }]
    currentTurn: 0,      // index into players[]
    currentSyllable: '',
    usedWords: new Set(),
    timerHandle: null,
    timerSeconds: 12,
    state: 'waiting',    // waiting | playing | gameover
    difficulty: 'easy',
    roundCount: 0,
  };
}

function generateRoomCode() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let code = '';
  for (let i = 0; i < 4; i++) code += chars[Math.floor(Math.random() * chars.length)];
  return code;
}

function pickSyllable(room) {
  // Ramp difficulty every 10 rounds
  if (room.roundCount > 20) room.difficulty = 'hard';
  else if (room.roundCount > 10) room.difficulty = 'medium';

  const pool = SYLLABLES[room.difficulty] || SYLLABLES.easy;
  return pool[Math.floor(Math.random() * pool.length)].toUpperCase();
}

function getTimerDuration(room) {
  // Shorter timer as game progresses
  if (room.roundCount > 20) return 7;
  if (room.roundCount > 10) return 9;
  return 12;
}

function broadcastState(room) {
  const state = {
    code: room.code,
    players: room.players.map(p => ({ name: p.name, lives: p.lives })),
    currentTurn: room.currentTurn,
    currentSyllable: room.currentSyllable,
    state: room.state,
    timerSeconds: room.timerSeconds,
    roundCount: room.roundCount,
    difficulty: room.difficulty,
  };
  room.players.forEach(p => p.socket.emit('gameState', state));
}

function startTurn(room) {
  room.currentSyllable = pickSyllable(room);
  room.timerSeconds = getTimerDuration(room);
  broadcastState(room);

  // Start countdown
  if (room.timerHandle) clearInterval(room.timerHandle);

  let remaining = room.timerSeconds;
  room.timerHandle = setInterval(() => {
    remaining--;
    room.players.forEach(p => p.socket.emit('tick', remaining));

    if (remaining <= 0) {
      clearInterval(room.timerHandle);
      room.timerHandle = null;

      // Current player loses a life
      const player = room.players[room.currentTurn];
      player.lives--;

      room.players.forEach(p => p.socket.emit('explosion', {
        player: player.name,
        lives: player.lives,
      }));

      // Check for game over
      const alive = room.players.filter(p => p.lives > 0);
      if (alive.length <= 1) {
        room.state = 'gameover';
        const winner = alive[0];
        room.players.forEach(p => p.socket.emit('gameOver', {
          winner: winner ? winner.name : 'Nobody',
        }));
        return;
      }

      // Next turn (skip dead players)
      advanceTurn(room);
      startTurn(room);
    }
  }, 1000);
}

function advanceTurn(room) {
  do {
    room.currentTurn = (room.currentTurn + 1) % room.players.length;
  } while (room.players[room.currentTurn].lives <= 0);
  room.roundCount++;
}

// ─── Socket.IO ───────────────────────────────────────────────
io.on('connection', (socket) => {
  console.log(`🔌 Connected: ${socket.id}`);

  socket.on('createRoom', (name, callback) => {
    const code = generateRoomCode();
    const room = createRoom(code);
    room.players.push({ id: socket.id, name, lives: 3, socket });
    rooms.set(code, room);
    socket.join(code);
    callback({ success: true, code });
    broadcastState(room);
    console.log(`🏠 Room ${code} created by ${name}`);
  });

  socket.on('joinRoom', ({ code, name }, callback) => {
    code = code.toUpperCase();
    const room = rooms.get(code);
    if (!room) return callback({ success: false, error: 'Room not found' });
    if (room.players.length >= 2) return callback({ success: false, error: 'Room is full' });
    if (room.state !== 'waiting') return callback({ success: false, error: 'Game already in progress' });

    room.players.push({ id: socket.id, name, lives: 3, socket });
    socket.join(code);
    callback({ success: true, code });
    broadcastState(room);
    console.log(`🚪 ${name} joined room ${code}`);
  });

  socket.on('startGame', (code) => {
    const room = rooms.get(code);
    if (!room || room.players.length < 2) return;
    room.state = 'playing';
    room.roundCount = 0;
    room.usedWords.clear();
    room.players.forEach(p => p.lives = 3);
    room.currentTurn = Math.floor(Math.random() * room.players.length);
    console.log(`🎮 Game started in room ${code}`);
    startTurn(room);
  });

  socket.on('submitWord', ({ code, word }) => {
    const room = rooms.get(code);
    if (!room || room.state !== 'playing') return;

    const player = room.players[room.currentTurn];
    if (player.id !== socket.id) {
      socket.emit('wordResult', { valid: false, reason: "It's not your turn!" });
      return;
    }

    const cleanWord = word.trim().toLowerCase();

    if (cleanWord.length < 2) {
      socket.emit('wordResult', { valid: false, reason: 'Word too short!' });
      return;
    }

    if (!containsSyllable(cleanWord, room.currentSyllable)) {
      socket.emit('wordResult', {
        valid: false,
        reason: `Word must contain "${room.currentSyllable}"!`,
      });
      return;
    }

    if (room.usedWords.has(cleanWord)) {
      socket.emit('wordResult', { valid: false, reason: 'Word already used!' });
      return;
    }

    if (!isValidWord(cleanWord)) {
      socket.emit('wordResult', { valid: false, reason: 'Not a valid English word!' });
      return;
    }

    // Valid word!
    room.usedWords.add(cleanWord);
    if (room.timerHandle) clearInterval(room.timerHandle);
    room.timerHandle = null;

    room.players.forEach(p => p.socket.emit('wordAccepted', {
      word: cleanWord,
      player: player.name,
    }));

    advanceTurn(room);
    startTurn(room);
  });

  socket.on('playAgain', (code) => {
    const room = rooms.get(code);
    if (!room) return;
    room.state = 'waiting';
    room.roundCount = 0;
    room.usedWords.clear();
    if (room.timerHandle) clearInterval(room.timerHandle);
    room.timerHandle = null;
    room.players.forEach(p => p.lives = 3);
    broadcastState(room);
  });

  socket.on('disconnect', () => {
    console.log(`🔌 Disconnected: ${socket.id}`);
    for (const [code, room] of rooms) {
      const idx = room.players.findIndex(p => p.id === socket.id);
      if (idx !== -1) {
        const name = room.players[idx].name;
        room.players.splice(idx, 1);
        if (room.timerHandle) clearInterval(room.timerHandle);

        if (room.players.length === 0) {
          rooms.delete(code);
          console.log(`🗑️ Room ${code} deleted (empty)`);
        } else {
          room.state = 'waiting';
          room.players.forEach(p => p.socket.emit('playerLeft', { name }));
          broadcastState(room);
        }
        break;
      }
    }
  });
});

// ─── Start ───────────────────────────────────────────────────
const PORT = process.env.PORT || 3000;

async function main() {
  await initWordList();
  server.listen(PORT, '0.0.0.0', () => {
    console.log('');
    console.log('💣 ═══════════════════════════════════════════');
    console.log('💣   WORD BOMB — Multiplayer Word Game');
    console.log('💣 ═══════════════════════════════════════════');
    console.log('');
    console.log(`   Local:    http://localhost:${PORT}`);

    // Show LAN IP for the other player
    const nets = os.networkInterfaces();
    for (const name of Object.keys(nets)) {
      for (const net of nets[name]) {
        if (net.family === 'IPv4' && !net.internal) {
          console.log(`   Network:  http://${net.address}:${PORT}`);
        }
      }
    }
    console.log('');
    console.log('   Share the Network URL with your colleague!');
    console.log('💣 ═══════════════════════════════════════════');
    console.log('');
  });
}

main().catch(console.error);
