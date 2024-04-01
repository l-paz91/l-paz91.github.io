/* -------------------------------------------------------------- */

// coffee size
const coffeeSizes = [
    "Short",
    "Tall",
    "Grande",
    "Venti"
];

/* -------------------------------------------------------------- */

// coffee temperature
const coffeeTemps = [
    "Iced",
    "Hot",
    "Warm",
    "Cold",
    "Room Temperature",
    "Extra Hot",
];

/* -------------------------------------------------------------- */

// coffee type
const coffeeTypes = [
    "Cappuccino",
    "Latte",
    "Americano",
    "Espresso",
    "Macchiato",
    "Mocha",
    "Flat White",
    "Affogato",
    "Cold Brew",
    "Long Black",
    "Ristretto",
    "Doppio",
    "Cortado",
    "Lungo",
    "Piccolo",
    "Espresso Con Panna",
    "Espresso Macchiato",
    "Latte Macchiato",
    "Barraquito",
];

/* -------------------------------------------------------------- */

// coffee blends
const coffeeBlends = [
    "Arabica",
    "Robusta",
    "Uganda",
    "Pike Place",
    "Sumatra",
    "Columbia",
    "Ethiopia",
    "Kenya",
    "Guatemala Antigua",
    "Costa Rica",
    "Jamaica Blue Mountain",
    "Brazil",
    "Blonde",
    "Dark",
    "Medium",
    "Light",
    "Decaf",
    "House Blend",
];

/* -------------------------------------------------------------- */

// coffee syrups
const coffeeSyrups = [
    "Vanilla",
    "Caramel",
    "Hazelnut",
    "Toffee Nut",
    "Cinnamon Dolce",
    "Peppermint",
    "Raspberry",
    "Gingerbread",
    "Coconut",
    "Salted Caramel",
    "Pumpkin Spice",
    "Honeycomb",
    "Butterscotch",
    "Maple",
    "Toasted Marshmallow",
];

/* -------------------------------------------------------------- */

// liqueurs
const liqueurs = [
    "Baileys",
    "Kahlua",
    "Amaretto",
    "Frangelico",
    "Grand Marnier",
    "Tia Maria",
    "Sambuca",
    "Licor 43",
    "Cointreau",
    "Disaronno",
    "Whiskey",
    "Rum",
    "Brandy",
    "Vodka",
];

/* -------------------------------------------------------------- */

// milks
const milks = [
    "Full-Fat",
    "Semi-Skimmed",
    "1% Milk",
    "Non-Fat Milk",
    "Almond Milk",
    "Soya Milk",
    "Coconut Milk",
    "Oat Milk",
    "Rice Milk",
    "Cashew Milk",
    "Macadamia Milk",
    "Hemp Milk",
    "Quinoa Milk",
    "Goat Milk",
    "Hazelnut Milk",
    "Cream",
    "Half-and-Half",
    "Condensed Milk",
    "Evaporated Milk",
    "Heavy Cream",
];

/* -------------------------------------------------------------- */

// coffee toppings
const coffeeToppings = [
    "Whipped Cream",
    "Cinnamon",
    "Nutmeg",
    "Cocoa Powder",
    "Chocolate Sprinkles",
    "Caramel Drizzle",
    "Vanilla Powder",
    "Caramel Sauce",
    "Chocolate Sauce",
    "Marshmallows",
    "Cinnamon Sugar",
    "Toffee Bits",
    "Cookie Crumbles",
    "Caramel Bits",
    "Chocolate Chips",
    "Caramel Syrup",
    "Chocolate Syrup",
    "Maple Syrup",
    "Honey",
    "Agave Syrup",
];

/* -------------------------------------------------------------- */

// coffee extras
const extras = [
    "an Extra Shot",
    "an Extra Pump of Syrup",
    "milk on the side",
    "a Dash of Cinnamon",
    "hot water on the side",
];

/* -------------------------------------------------------------- */

function getRandomElement(array) 
{
    // create a 40/60 chance of returning an empty string or an element
    if (Math.random() < 0.2)
    {
        return "";
    }

    return array[Math.floor(Math.random() * array.length)];
}

/* -------------------------------------------------------------- */

function generateCoffeeOrder() 
{
    const size = getRandomElement(coffeeSizes);
    const temp = getRandomElement(coffeeTemps);
    const type = getRandomElement(coffeeTypes);
    const blend = getRandomElement(coffeeBlends);
    const syrup = getRandomElement(coffeeSyrups);
    const liqueur = getRandomElement(liqueurs);
    const milk = getRandomElement(milks);
    const topping = getRandomElement(coffeeToppings);
    const extra = getRandomElement(extras);

    const orderSize = size ? " " + size : "";
    const orderTemp = temp ? ", " + temp : "";
    const orderType = type ? ", " + type : " coffee";
    const orderBlend = blend ? " made with the " + blend + " roast": "";
    const orderSyrup = syrup ? ", a pump of " + syrup + " syrup" : "";
    const orderLiqueur = liqueur ? ", a shot of " + liqueur : "";
    const orderMilk = milk ? " with " + milk : "";
    const orderTopping = topping ? ", topped with " + topping : "";
    const orderExtra = extra ? " and " + extra : "";

    // combine the elements, some have empty strings so we shouldn't include them in the order
    const order = "A" + orderSize + orderTemp + orderType + orderBlend + orderSyrup + orderLiqueur + orderMilk + orderTopping + orderExtra + ".";

    // Combine the random elements into a coffee order
   // const order = `A ${size} ${temp} ${type} made with ${blend} coffee, ${syrup} syrup, ${liqueur}, and ${milk}, topped with ${topping} and ${extra}.`;

    // console.log(order); // Or display it in your HTML
    document.getElementById('coffeeOrderDisplay').innerText = order;
}

/* -------------------------------------------------------------- */

// Event listener for the generate button
document.getElementById('generateButton').addEventListener('click', generateCoffeeOrder);

/* -------------------------------------------------------------- */