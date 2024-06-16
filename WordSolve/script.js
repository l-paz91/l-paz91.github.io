/* -------------------------------------------------------------- */

let wordList = [];
let maxWordLength = 20;
let minWordLength = 3;

/* -------------------------------------------------------------- */

document.addEventListener('DOMContentLoaded', () => {
    fetch('dict.txt')
        .then(response => response.text())
        .then(text => {
            wordList = text.split('\n').map(word => word.trim());
        });
});

/* -------------------------------------------------------------- */

function findAnagrams() 
{
    const letters = document.getElementById('letters').value.toLowerCase();
    const results = document.getElementById('results');
    results.innerHTML = '';

    if (letters.length < minWordLength || letters.length > maxWordLength) 
    {
        results.innerHTML = '<p>Enter at least 3 letters...</p>';
        return;
    }

    const anagrams = wordList.filter(word => isAnagram(letters, word) && word.length >= minWordLength && word.length <= letters.length);

    if (anagrams.length === 0) 
    {
        results.innerHTML = '<p>No anagrams found.</p>';
    } 
    else 
    {
        const groupedAnagrams = groupByLength(anagrams);
        for (const length in groupedAnagrams) 
        {
            const group = document.createElement('div');
            group.innerHTML = `<h3>Length: ${length}</h3><p>${groupedAnagrams[length].join(', ')}</p>`;
            results.appendChild(group);
        }
    }
}

/* -------------------------------------------------------------- */

function isAnagram(letters, word) 
{
    const lettersCount = getLetterCount(letters);
    const wordCount = getLetterCount(word);

    for (const letter in wordCount) 
    {
        if (!lettersCount[letter] || wordCount[letter] > lettersCount[letter]) 
        {
            return false;
        }
    }

    return true;
}

/* -------------------------------------------------------------- */

function getLetterCount(str) 
{
    const count = {};
    for (const char of str) 
    {
        count[char] = (count[char] || 0) + 1;
    }
    return count;
}

/* -------------------------------------------------------------- */

function groupByLength(words) 
{
    return words.reduce((groups, word) => 
        {
            const length = word.length;

            if (!groups[length]) 
            {
                groups[length] = [];
            }

            groups[length].push(word);
            return groups;
        }, {}
    );
}

/* -------------------------------------------------------------- */