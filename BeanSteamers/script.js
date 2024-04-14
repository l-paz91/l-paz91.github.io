/* ------------------------------------------------------------------------- */

let money = 0;
let moneyPerOrder = 1;
let upgradeCost = 50;

let espressoPulled = 0;
let milkSteamed = 0;
let milkFoamed = 0;
let waterBoiled = 0;

/* ------------------------------------------------------------------------- */

import { drinkRecipes } from './recipeDefinitions.js';

/* ------------------------------------------------------------------------- */

function matchesRecipe(ingredients, recipe) 
{
    for (const [key, value] of Object.entries(recipe)) 
    {
        console.log(ingredients[value]);
        if (   !ingredients[key] 
            || ingredients[key].split("ml")[0].trim() !== String(value)
            || ingredients[key].split("x")[0].trim() !== String(value)) 
        {
            return false;
        }
    }
    return true;
}

/* ------------------------------------------------------------------------- */

function updateCurrentIngredientsDisplay()
{
    // do the currentDrinkIngredients match any of the drinkRecipes?
    // if so, display the drink name instead of ingredients
    // if not, display the currentDrinkIngredients
    let matchedRecipeName = null;
    let extrasDisplay = [];
    
    // Iterate through each recipe to see if it matches the current drink
    for (const [name, recipe] of Object.entries(drinkRecipes)) 
    {
        if (currentDrink.matchesRecipe(recipe)) 
        {
            currentDrink.setMatchedRecipe(name);
            matchedRecipeName = name;

            // Determine any extras added beyond the recipe
            const extras = currentDrink.getExtras(recipe);
            for (const [extra, amount] of Object.entries(extras)) 
            {
                if (extra === "espresso") 
                {
                    extrasDisplay.push(`${amount}x Espresso`);
                }
                else if (extra === "steamed milk" || extra === "foamed milk" || extra === "hot water")
                {
                    extrasDisplay.push(`${amount}ml of ${extra}`);
                }
            }
            break;
        }
    }

    let displayText = [];
    if (matchedRecipeName) 
    {
        displayText.push(matchedRecipeName);
    } 
    else 
    {
        // If no recipe matches, display the individual ingredients
        for (let ingredient in currentDrinkIngredients) 
        {
            displayText.push(currentDrinkIngredients[ingredient]);
        }
    }

    // Construct the display text
    //let displayText = matchedRecipeName ? [matchedRecipeName] : ["Custom Drink"];
    if (extrasDisplay.length > 0) 
    {
        displayText.push(`with ${extrasDisplay.join(", ")}`);
    }

    console.log(matchedRecipeName);

    document.getElementById('drinkBeingMade').innerText = displayText.join("\n ");
}

/* ------------------------------------------------------------------------- */

document.getElementById('pullEspressoBtn').addEventListener('click', function() 
{
    ++espressoPulled;
    document.getElementById('pullEspressoAmount').innerText = `${espressoPulled}ml`;
});

/* ------------------------------------------------------------------------- */

document.getElementById('steamMilkBtn').addEventListener('click', function() 
{
    ++milkSteamed;
    document.getElementById('steamMilkDone').innerText = `${milkSteamed}ml`;
});

/* ------------------------------------------------------------------------- */

document.getElementById('foamMilkBtn').addEventListener('click', function() 
{
    ++milkFoamed;
    document.getElementById('foamMilkDone').innerText = `${milkFoamed}ml`;
});

/* ------------------------------------------------------------------------- */

document.getElementById('hotWaterBtn').addEventListener('click', function() 
{
    ++waterBoiled;
    document.getElementById('hotWaterDone').innerText = `${waterBoiled}ml`;
});

/* ------------------------------------------------------------------------- */

import { Drink } from './drinkClass.js';
let currentDrink = new Drink();
let currentDrinkIngredients = {};

/* ------------------------------------------------------------------------- */

document.getElementById('addEspressoBtn').addEventListener('click', function()
{
    if(espressoPulled >= 25)
    {
        // update the drink object
        currentDrink.addIngredient("espresso", 1);

        // Retrieve the total amount of espresso added so far
        let totalEspresso = currentDrink.getIngredient("espresso");

        // Update the currentDrinkIngredients with the new total
        currentDrinkIngredients["espresso"] = totalEspresso + "x Espresso";

        // Update the text display with all current ingredients
        updateCurrentIngredientsDisplay();

        // update the espressoPulled amount
        espressoPulled -= 25;
        document.getElementById('pullEspressoAmount').innerText = `${espressoPulled}ml`;
    }
    else
    {
        alert("You need to pull at least 25ml of espresso before adding it to a drink.");
    }
});

/* ------------------------------------------------------------------------- */

document.getElementById('addSteamMilkBtn').addEventListener('click', function()
{
    if(milkSteamed > 0)
    {
        // update the drink object
        currentDrink.addIngredient("steamed milk", milkSteamed);

        // Retrieve the total amount of steamed milk added so far
        let totalMilk = currentDrink.getIngredient("steamed milk");

        // Update the currentDrinkIngredients with the new total
        currentDrinkIngredients["steamed milk"] = totalMilk + "ml of Steamed Milk";

        // Update the text display with all current ingredients
        updateCurrentIngredientsDisplay();

        // Reset the steamed milk amount
        milkSteamed = 0;
        document.getElementById('steamMilkDone').innerText = `${milkSteamed}ml`;
    } 
    else 
    {
        alert("You need to steam at least 1ml of milk before adding it to a drink.");
    }
});

/* ------------------------------------------------------------------------- */

document.getElementById('addFoamMilkBtn').addEventListener('click', function()
{
    if(milkFoamed > 0)
    {
        // update the drink object
        currentDrink.addIngredient("foamed milk", milkFoamed);

        // Retrieve the total amount of foamed milk added so far
        let totalMilk = currentDrink.getIngredient("foamed milk");

        // Update the currentDrinkIngredients with the new total
        currentDrinkIngredients["foamed milk"] = totalMilk + "ml of foamed Milk";

        // Update the text display with all current ingredients
        updateCurrentIngredientsDisplay();

        // Reset the steamed milk amount
        milkFoamed = 0;
        document.getElementById('foamMilkDone').innerText = `${milkFoamed}ml`;
    } 
    else 
    {
        alert("You need to foam at least 1ml of milk before adding it to a drink.");
    }
});

/* ------------------------------------------------------------------------- */

document.getElementById('addHotWaterBtn').addEventListener('click', function()
{
    if(waterBoiled > 0)
    {
        // update the drink object
        currentDrink.addIngredient("hot water", waterBoiled);

        // Retrieve the total amount of hot water added so far
        let totalHotWater = currentDrink.getIngredient("hot water");

        // Update the currentDrinkIngredients with the new total
        currentDrinkIngredients["hot water"] = totalHotWater + "ml of hot water";

        // Update the text display with all current ingredients
        updateCurrentIngredientsDisplay();

        // Reset the steamed milk amount
        waterBoiled = 0;
        document.getElementById('hotWaterDone').innerText = `${waterBoiled}ml`;
    } 
    else 
    {
        alert("You need to boil at least 1ml of water before adding it to a drink.");
    }
});

/* ------------------------------------------------------------------------- */

document.getElementById('serveDrinkBtn').addEventListener('click', function()
{
    // if currentDrinkIngrients.length === 0, then you need to pull espresso, steam milk, and foam milk before making a drink
    if(currentDrinkIngredients.length > 0)
    {
        alert("Drink served!");
    }
    else
    {
        alert("You need to make something before you can serve it.");
    }
});

/* ------------------------------------------------------------------------- */

