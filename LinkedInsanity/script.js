/* ----------------------------------------------------------------------------------- */

// Opening line
const openings = [
    "Just wanted to share a quick thought... ",
    "Incredible how one moment can change everything... ",
    "Today, I learned something amazing... ",
    "Something happened today that I just have to share... ",
    "You won't believe this, but yesterday,",
    "In an extraordinary twist of fate, ",
    "So there I was, minding my own business, ",
    "Have you ever had one of those days... ",
    "I rejected a CV from a fresh graduate with a 4.0 GPA twice, ",
];

/* ----------------------------------------------------------------------------------- */

// Context or situation
const contexts = [
    "while working on a challenging project for a client",
    "during a routine team meeting",
    "while reflecting on my career journey so far",
    "after reading an inspiring book",
    "while attending a conference on innovation",
    "during a conversation with a mentor",
    "while working on my side hustle",
    "after a particularly tough day at work",
    "while attending a seminar on leadership",
    "after a long day of interviews",
];

/* ----------------------------------------------------------------------------------- */

// Challenge or problem
const challenges = [
    " we faced an unexpected setback,",
    " I realized we were looking at the problem all wrong,",
    " our main strategy was failing,",
    " I found myself struggling with self-doubt,",
    " I took an online IQ test and scored 119, which falls on the cusp of 'High Average' and 'Superior' level,",
    " guess what? We got nothing done because we are too busy talking about how we are going to get it done,",
    " the WiFi went out, and I had to send my emails via carrier pigeon,",
];

/* ----------------------------------------------------------------------------------- */

// Insight or lesson learned
const insights = [
    " but then I realized that every failure is a stepping stone to success.\n\n",
    " and it hit me: true innovation requires stepping out of your comfort zone.\n\n",
    " which taught me the importance of resilience in the face of adversity.\n\n",
    " reminding me that patience and persistence often pay off in the end.\n\n",
    " it was refreshing putting myself to a time crunching and adrenaline pumping exercise.\n\n",
    " the lesson I learnt from this: do not always judge a person soley on their CV.\n\n",
    " and that's when it hit me: leadership lessons can come from talking to plants.\n\n",
    " which taught me the true meaning of teamwork: it’s like herding cats, but more rewarding.\n\n",
    " and in that moment, I learned the importance of always carrying a banana for scale.\n\n",
    " reminding me that sometimes, the best business strategy is a well-timed knock-knock joke.\n\n",
];

/* ----------------------------------------------------------------------------------- */

// Call to action or closing statement
const closings = [
    "Let's embrace our challenges and grow from them.\nAgree?",
    "Always keep pushing the boundaries.",
    "Never forget: tough times lead to greater achievements.",
    "Keep striving, keep learning, and never give up.",
    "Remember: the only way out is through.",
    "I recommend everyone to give it a try.",
    "Let's keep pushing the boundaries of what's possible.",
    "Agree?",
    "So remember, the next time life gives you lemons, start a lemonade tech startup.",
    "So, what's your story?", 
];

/* ----------------------------------------------------------------------------------- */

// hashtag and emoji
const hashtags = [
    "\n#MondayMotivation #CareerGrowth #Innovation 🔥🙌💹",
    "\n#GrowthMindset #Innovation #Success 💪🚀🌟",
    "\n#Resilience #Success #CareerJourney 🌈🚀🌟",
    "\n#CareerGrowth #Innovation #Success 🚀🌟🙌",
    "\n#bossbabe #CareerGrowth #Innovation 💅🚀🌟🙌",
    "\n#copied #hrcommunity",
    "\n#resilience #wontStop #cantStop 🏃‍♂️👟",
    "\n#UnexpectedJourney #LifeLessons 🚀✨🗺️",
    "\n#JustAnotherManicMonday #OutOfTheBox 📦😜🌞",
    "\n#TeamworkMakesTheDreamWork #SquadGoals 🤝🐾🌟",
    "\n#FailForward #LearningCurve 📈💡🔙",
    "\n#FutureLeaders #BeTheChange 🌱🔮👣",
    "\n#HustleHard #SuccessMindset 💼💪🚀",
    "\n#ThinkDifferent #InnovateOrDie 💭👽🔄",
    "\n#PlantConversations #GreenLeadership 🌿🗣️👑",
    "\n#BananaForScale #Perspective 🍌📏",
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
    const post = `${opening}${context}${challenge}${insight}${closing}${hashtag}`;

   // console.log(post); // Or display it in your HTML
   document.getElementById('post-content').innerText = post;
}

/* ----------------------------------------------------------------------------------- */

// Event listener for the generate button
document.getElementById('generate-btn').addEventListener('click', generatePost);

/* ----------------------------------------------------------------------------------- */