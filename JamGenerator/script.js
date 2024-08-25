/* ----------------------------------------------------------- */

// Arrays holding possible mechanics and objectives
const mechanics = [
    "Gravity Manipulation", 
    "Time Slowing", 
    "Wall Jumping", 
    "Teleportation", 
    "Resource Management",
    "Stealth",
    "Puzzle-Solving",
    "Item Crafting",
    "Platforming",
    "Fishing",
    "Dodging",
    "Base Building",
    "Endless Running",
    "Shape Shifting",
    "Memory Matching",
    "Combat Combo Chains",
    "Energy Beam Reflection",
    "Color Mixing",
    "Object Stacking",
    "Magnetism Control",
    "Walking Simulator with No Walk Animation",
    "Inventory Management with Infinite Items and No Sorting",
    "Unskippable 10-Minute Cutscenes Before Every Level",
    "Button Mashing for Every Single Action",
    "Randomly Reversing Controls Every 5 Seconds",
    "Purposefully Glitchy Physics",
    "Pixel-Perfect Jumping on Moving Platforms",
    "Permanent One-Hit Kill Mode",
    "Infinite Maze with No Exit",
    "Narrative Locked Behind Microtransactions",
    "Real-Time, 24-Hour In-Game Day/Night Cycle",
    "Constant Screen-Shaking",
    "Unresponsive Controls with Delayed Input",
    "Always-On Timed Levels",
    "Instant Game Over on Minor Mistake",
    "Invisible Enemies and Hazards",
    "Mandatory, Unsolvable Puzzles",
    "Zero-Feedback QTEs (Quick Time Events)",
    "Always Dark Mode (No Visibility)",
    "Pointless Collectibles that Do Nothing",
    "Echolocation Navigation",
    "Limited Color Palette",
    "Sound-Based Stealth",
    "Pixelated Vision",
    "Delayed Visual Feedback",
    "Reversed Sound Cues",
    "Sound Puzzle Matching",
    "Flashlight-Only Vision",
    "Echoes of the Past",
    "Silent World",
    "Color Swap",
    "Audio-Only Game",
    "Limited Frames Per Second ",
    "Distorted Reality",
    "Minimalist Line Art",
    "Rhythm-Based Movement",
    "Invert Vision",
    "Sonic Map Revealer",
    "Directional Sound Navigation",
    "Time Loop",
    "Infinite Inventory",
    "Randomized Levels",
    // Add more mechanics here
];

/* ----------------------------------------------------------- */

const objectives = [
    "Reach the End of the Level", 
    "Collect All the Coins", 
    "Survive for 5 Minutes", 
    "Rescue the Captive", 
    "Escape the Maze",
    "Defeat the Boss",
    "Find the Hidden Treasure",
    "Protect the Base",
    "Avoid All Obstacles",
    "Deliver the Package",
    "Solve the Puzzle",
    "Find the Hidden Key",
    "Complete the Race",
    "Clear All Enemies",
    "Gather Resources",
    "Build a Shelter",
    "Restore Power to the Facility",
    "Navigate to the Exit",
    "Retrieve the Stolen Item",
    "Match All Pairs",
    "Unlock the Secret Door",
    "Watch Paint Dry for 10 Real-Time Hours",
    "Collect 1 Million Identical Items",
    "Navigate an Infinite Maze with No Exit",
    "Find the Invisible Key in a Pitch-Black Room",
    "Walk 10,000 Virtual Miles with No Sprint Option",
    "Lose All Your Progress at Random Intervals",
    "Listen to an Annoying NPC Talk for 30 Minutes Straight",
    "Memorize and Recite a 100-Page In-Game Manual",
    "Balance a Feather on a Moving Platform for 1 Hour",
    "Solve a Puzzle with 1,000 Pieces That Are All the Same Color",
    "Click a Button 1 Million Times to Unlock the Next Level",
    "Survive in a World with No Food, Water, or Shelter",
    "Defeat an Unbeatable Boss with No Weapons",
    "Search an Endless Desert for a Single Grain of Sand",
    "Carry a Fragile Item Across an Unstable Bridge in a Windstorm",
    "Count to 1,000,000 with No Mistakes",
    "Fill Out a Never-Ending Series of Bureaucratic Forms",
    "Dance to a Song That Never Ends",
    "Rebuild a Tower That Collapses Every Few Seconds",
    "Match Pairs of Completely Indistinguishable Objects",
    "Navigate a Maze with No Walls or Floor",
    // Add more objectives here
];

/* ----------------------------------------------------------- */

// Function to generate a random mechanic
function generateMechanic() {
    const randomMechanic = mechanics[Math.floor(Math.random() * mechanics.length)];
    document.getElementById("mechanicOutput").innerText = randomMechanic;
    updateGameIdea();
}

/* ----------------------------------------------------------- */

// Function to generate a random objective
function generateObjective() {
    const randomObjective = objectives[Math.floor(Math.random() * objectives.length)];
    document.getElementById("objectiveOutput").innerText = randomObjective;
    updateGameIdea();
}

/* ----------------------------------------------------------- */

// Function to update the combined game idea
function updateGameIdea() {
    const mechanic = document.getElementById("mechanicOutput").innerText;
    const objective = document.getElementById("objectiveOutput").innerText;
    if (mechanic && objective) {
        document.getElementById("gameIdeaOutput").innerText = `${objective} with ${mechanic}.`;
    }
}

/* ----------------------------------------------------------- */

// Function to reset the generator
function resetGenerator() {
    document.getElementById("mechanicOutput").innerText = "";
    document.getElementById("objectiveOutput").innerText = "";
    document.getElementById("gameIdeaOutput").innerText = "Press the buttons to generate a mechanic and an objective.";
}

/* ----------------------------------------------------------- */

// Event listeners for buttons
document.getElementById("mechanicButton").addEventListener("click", generateMechanic);
document.getElementById("objectiveButton").addEventListener("click", generateObjective);
document.getElementById("resetButton").addEventListener("click", resetGenerator);

/* ----------------------------------------------------------- */