/* ------------------------------------------------------------------------- */

export class Drink
{
    constructor()
    {
        this.ingredients = {};
    }

    addIngredient(ingredient, amount)
    {
        if(this.ingredients[ingredient])
        {
            this.ingredients[ingredient] += amount;
        }
        else
        {
            this.ingredients[ingredient] = amount;
        }
    }

    getIngredient(ingredient)
    {
        return this.ingredients[ingredient] || 0;
    }

    getDrinkType()
    {
        for (const [drink, recipe] of Object.entries(drinkRecipes)) {
            if (this.matchesRecipe(recipe)) {
                return drink;
            }
        }

        return "Unknown Drink"; // No recipe matched
    }

    matchesRecipe(recipe) 
    {
        for (const [ingredient, requiredAmount] of Object.entries(recipe)) 
        {
            if (!this.ingredients[ingredient] || this.ingredients[ingredient] !== requiredAmount) 
            {
                return false;
            }
        }
        return true;
    }

    setMatchedRecipe(recipeName) 
    {
        this.matchedRecipe = recipeName;
    }

    getExtras(recipe) 
    {
        let extras = {};
        for (const ingredient in this.ingredients) 
        {
            if (!recipe[ingredient] || this.ingredients[ingredient] > recipe[ingredient]) 
            {
                const extraAmount = this.ingredients[ingredient] - (recipe[ingredient] || 0);
                if (extraAmount > 0) 
                {
                    extras[ingredient] = extraAmount;
                }
            }
        }
        
        return extras;
    }
}

/* ------------------------------------------------------------------------- */



/* ------------------------------------------------------------------------- */



/* ------------------------------------------------------------------------- */

