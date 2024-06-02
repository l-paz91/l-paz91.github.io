// boggle.js

let wordList = [];
let gridLetters = [];
let selectedCells = [];
let possibleWords = [];
let foundWords = [];

document.addEventListener('DOMContentLoaded', () => {
    fetch('words.txt')
        .then(response => response.text())
        .then(text => {
            wordList = text.split('\n').map(word => word.trim());
            generateGrid();
        });

        document.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                submitWord();
            }
        });
});

function generateGrid() {
    const grid = document.getElementById('grid');
    grid.innerHTML = '';
    gridLetters = [];
    selectedCells = [];
    foundWords = [];
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    for (let i = 0; i < 16; i++) {
        const letter = letters[Math.floor(Math.random() * letters.length)];
        gridLetters.push(letter);
        const cell = document.createElement('div');
        cell.className = 'grid-cell';
        cell.innerText = letter;
        cell.addEventListener('click', () => selectCell(cell, i));
        grid.appendChild(cell);
    }
    calculatePossibleWords();
    document.getElementById('results').innerHTML = '';
    document.getElementById('total-words').innerText = possibleWords.length;
}

function selectCell(cell, index) {
    if (selectedCells.includes(index)) {
        cell.classList.remove('selected');
        selectedCells = selectedCells.filter(i => i !== index);
    } else if (isAdjacent(index)) {
        cell.classList.add('selected');
        selectedCells.push(index);
    }
    updateSelectedWord();
}

function isAdjacent(index) {
    if (selectedCells.length === 0) return true;
    const lastSelected = selectedCells[selectedCells.length - 1];
    const row = Math.floor(lastSelected / 4);
    const col = lastSelected % 4;

    const adjacentIndices = [
        lastSelected - 1, lastSelected + 1,
        lastSelected - 4, lastSelected + 4,
        lastSelected - 5, lastSelected - 3,
        lastSelected + 3, lastSelected + 5
    ];

    return adjacentIndices.includes(index) && Math.abs(Math.floor(index / 4) - row) <= 1 && Math.abs(index % 4 - col) <= 1;
}

function updateSelectedWord() {
    const selectedWord = selectedCells.map(i => gridLetters[i]).join('');
    document.getElementById('selected-word').innerText = selectedWord;
}

function submitWord() {
    const selectedWord = selectedCells.map(i => gridLetters[i]).join('');
    const gameArea = document.querySelector('.game-area');

    if (wordList.includes(selectedWord) && selectedWord.length >= 2 && !foundWords.includes(selectedWord)) {
        foundWords.push(selectedWord);
        addWordToResults(selectedWord);
        updateWordCount();
    } else {
        gameArea.classList.add('shake');
        setTimeout(() => {
            gameArea.classList.remove('shake');
        }, 500);
    }
    clearSelection();
}

function clearSelection() {
    selectedCells.forEach(i => {
        document.querySelectorAll('.grid-cell')[i].classList.remove('selected');
    });
    selectedCells = [];
    updateSelectedWord();
}

function calculatePossibleWords() {
    possibleWords = wordList.filter(word => canBeFormedFromGrid(word) && canFormWordWithAdjacency(word));
    document.getElementById('total-words').innerText = possibleWords.length;
}

function canBeFormedFromGrid(word) {
    let letters = [...gridLetters];
    for (let char of word) {
        if (letters.includes(char)) {
            letters.splice(letters.indexOf(char), 1);
        } else {
            return false;
        }
    }
    return true;
}

function canFormWordWithAdjacency(word) {
    for (let i = 0; i < gridLetters.length; i++) {
        if (gridLetters[i] === word[0]) {
            if (dfs(word, 0, i, [])) {
                return true;
            }
        }
    }
    return false;
}

function dfs(word, index, pos, visited) {
    if (index === word.length) return true;
    if (pos < 0 || pos >= 16 || visited.includes(pos) || gridLetters[pos] !== word[index]) return false;

    visited.push(pos);

    const row = Math.floor(pos / 4);
    const col = pos % 4;
    const directions = [
        pos - 1, pos + 1,
        pos - 4, pos + 4,
        pos - 5, pos - 3,
        pos + 3, pos + 5
    ];

    for (let dir of directions) {
        if (dir >= 0 && dir < 16 && Math.abs(Math.floor(dir / 4) - row) <= 1 && Math.abs(dir % 4 - col) <= 1) {
            if (dfs(word, index + 1, dir, visited.slice())) {
                return true;
            }
        }
    }

    return false;
}

function updateWordCount() {
    document.getElementById('total-words').innerText = possibleWords.length - foundWords.length;
}

function addWordToResults(word) {
    const results = document.getElementById('results');
    const columnCount = Math.floor(foundWords.length / 10);
    let column = results.querySelector(`.column[data-column='${columnCount}']`);

    if (!column) {
        column = document.createElement('div');
        column.className = 'column';
        column.setAttribute('data-column', columnCount);
        results.appendChild(column);
    }

    const wordElement = document.createElement('p');
    wordElement.innerText = word;
    column.appendChild(wordElement);
}