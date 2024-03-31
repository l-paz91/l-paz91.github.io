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
    "but then I realized that every failure is a stepping stone to success.\n\n",
    "and it hit me: true innovation requires stepping out of your comfort zone.\n\n",
    "which taught me the importance of resilience in the face of adversity.\n\n",
    "reminding me that patience and persistence often pay off in the end.\n\n",
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

// hashtag and emoji
const hashtags = [
    "\n#MondayMotivation #CareerGrowth #Innovation 🔥🙌💹",
    "\n#GrowthMindset #Innovation #Success 💪🚀🌟",
    "\n#Resilience #Success #CareerJourney 🌈🚀🌟",
    "\n#CareerGrowth #Innovation #Success 🚀🌟🙌",
    "\n#bossbabe #CareerGrowth #Innovation 💅🚀🌟🙌",
];

/* ----------------------------------------------------------------------------------- */

function getRandomElement(arr) 
{
    return arr[Math.floor(Math.random() * arr.length)];
}

/* ----------------------------------------------------------------------------------- */

function generatePost() 
{
    const opening = getRandomElement(openings);
    const context = getRandomElement(contexts);
    const challenge = getRandomElement(challenges);
    const insight = getRandomElement(insights);
    const closing = getRandomElement(closings);
    const hashtag = getRandomElement(hashtags);

    // Combine the random elements into a post
    const post = `${opening} ${context}, ${challenge}, ${insight}${closing}${hashtag}`;

   // console.log(post); // Or display it in your HTML
   document.getElementById('post-content').innerText = post;
}

/* ----------------------------------------------------------------------------------- */

// Event listener for the generate button
document.getElementById('generate-btn').addEventListener('click', generatePost);

/* ----------------------------------------------------------------------------------- */