// Word list generator - downloads and caches a word list on first run,
// or falls back to a built-in set. Uses a Set for O(1) lookups.

const fs = require('fs');
const path = require('path');
const https = require('https');

const WORD_LIST_PATH = path.join(__dirname, 'words.txt');
const WORD_LIST_URL = 'https://raw.githubusercontent.com/dwyl/english-words/master/words_alpha.txt';

let wordSet = null;

function loadBuiltInWords() {
  // A reasonable built-in fallback with ~5000 common English words
  // In practice, we download a full list on first run
  return new Set([
    'the', 'be', 'to', 'of', 'and', 'a', 'in', 'that', 'have', 'i',
    'it', 'for', 'not', 'on', 'with', 'he', 'as', 'you', 'do', 'at',
    // This is just a tiny fallback - the downloaded list is much better
  ]);
}

async function downloadWordList() {
  return new Promise((resolve, reject) => {
    console.log('📥 Downloading word list (first run only)...');
    const file = fs.createWriteStream(WORD_LIST_PATH);
    https.get(WORD_LIST_URL, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        https.get(response.headers.location, (res) => {
          res.pipe(file);
          file.on('finish', () => { file.close(); resolve(); });
        }).on('error', reject);
      } else {
        response.pipe(file);
        file.on('finish', () => { file.close(); resolve(); });
      }
    }).on('error', reject);
  });
}

async function initWordList() {
  if (wordSet) return wordSet;

  // Try to load cached word list
  if (fs.existsSync(WORD_LIST_PATH)) {
    const content = fs.readFileSync(WORD_LIST_PATH, 'utf-8');
    wordSet = new Set(
      content.split(/\r?\n/)
        .map(w => w.trim().toLowerCase())
        .filter(w => w.length >= 2)
    );
    console.log(`📚 Loaded ${wordSet.size} words from cache`);
    return wordSet;
  }

  // Try to download
  try {
    await downloadWordList();
    const content = fs.readFileSync(WORD_LIST_PATH, 'utf-8');
    wordSet = new Set(
      content.split(/\r?\n/)
        .map(w => w.trim().toLowerCase())
        .filter(w => w.length >= 2)
    );
    console.log(`📚 Downloaded and loaded ${wordSet.size} words`);
    return wordSet;
  } catch (err) {
    console.warn('⚠️ Could not download word list, using built-in fallback');
    wordSet = loadBuiltInWords();
    return wordSet;
  }
}

function isValidWord(word) {
  if (!wordSet) throw new Error('Word list not initialized');
  return wordSet.has(word.toLowerCase().trim());
}

function containsSyllable(word, syllable) {
  return word.toLowerCase().includes(syllable.toLowerCase());
}

module.exports = { initWordList, isValidWord, containsSyllable };
