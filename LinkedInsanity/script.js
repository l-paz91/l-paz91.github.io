/* ----------------------------------------------------------------------------------- */

// Opening line
const openings = [
    "Just wanted to share a quick thought...",
    "Incredible how one moment can change everything...",
    "Today, I learned something amazing...",
    "Something happened today that I just have to share...",
];

/* ----------------------------------------------------------------------------------- */

// Context or situation
const contexts = [
    "while working on a challenging project for a client",
    "during a routine team meeting",
    "while reflecting on my career journey so far",
    "after reading an inspiring book",
];

/* ----------------------------------------------------------------------------------- */

// Challenge or problem
const challenges = [
    "we faced an unexpected setback",
    "I realized we were looking at the problem all wrong",
    "our main strategy was failing",
    "I found myself struggling with self-doubt",
];

/* ----------------------------------------------------------------------------------- */

// Insight or lesson learned
const insights = [
    "but then I realized that every failure is a stepping stone to success.",
    "and it hit me: true innovation requires stepping out of your comfort zone.",
    "which taught me the importance of resilience in the face of adversity.",
    "reminding me that patience and persistence often pay off in the end.",
];

/* ----------------------------------------------------------------------------------- */

// Call to action or closing statement
const closings = [
    "Let's embrace our challenges and grow from them.",
    "Always keep pushing the boundaries.",
    "Never forget: tough times lead to greater achievements.",
    "Keep striving, keep learning, and never give up.",
];

/* ----------------------------------------------------------------------------------- */

function getRandomElement(arr) 
{
    return arr[Math.floor(Math.random() * arr.length)];
}

/* ----------------------------------------------------------------------------------- */

function generatePost() 
{
    const post = `${getRandomElement(openings)} ${getRandomElement(contexts)}, ${getRandomElement(challenges)}, ${getRandomElement(insights)} ${getRandomElement(closings)}`;
   // console.log(post); // Or display it in your HTML
   document.getElementById('post-content').innerText = post;
}

/* ----------------------------------------------------------------------------------- */

// Event listener for the generate button
document.getElementById('generate-btn').addEventListener('click', generatePost);

/* ----------------------------------------------------------------------------------- */