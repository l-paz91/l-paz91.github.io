// --- Data: edit these to plan Saturday's menu -------------------------------
// Add/remove entries freely — everything here is vegan by default, so there's
// no separate "vegan" tag on each item.

const cocktails = [
  {
    name: "Tropical Trouble",
    base: ["Rum", "Aloha 65"],
    vibe: ["Tropical", "Refreshing"],
    description: "Malibu and Aloha 65 tangled with pineapple and lemonade.",
  },
  {
    name: "Raspberry Sunset",
    base: ["Vodka", "Passionfruit"],
    vibe: ["Bright", "Sweet"],
    description: "Passoa and raspberry liqueur with strawberry–lemon spritz.",
  },
  {
    name: "Turkish",
    base: ["Tequila"],
    vibe: ["Citrus", "Aromatic"],
    description: "Tequila and Aloha 65 with a yuzu–strawberry gin accent.",
  },
  {
    name: "Lavender Lemon Drop",
    base: ["Vanilla Vodka"],
    vibe: ["Citrus", "Aromatic"],
    description: "Vanilla vodka, lavender syrup, lemon juice and orange liquer.",
  },
  {
    name: "Rosé Peach Fizz",
    base: ["Rose Prosecco", "Archers Peach Liqueur"],
    vibe: ["Sparkling", "Fruity"],
    description: "Archers peach liqueur topped with rosé prosecco and a splash of orange juice.",
  },
  {
    name: "Blueberry Bramble",
    base: ["Vanilla Vodka"],
    vibe: ["Tart", "Fruity"],
    description: "Vanilla vodka shaken with Belvoir blueberry & blackcurrant cordial and lime juice, topped with slimline ginger ale.",
  },
  {
    name: "Cherry Cola Old Fashioned",
    base: ["Napolean Brandy"],
    vibe: ["Rich", "Warming"],
    description: "Napolean brandy and Kraken Cherry & Vanilla stirred with Sainsbury's cherry, plum & raspberry cordial, topped with Coke Zero.",
  },
  {
    name: "Coconut Rhubarb Colada",
    base: ["Lambs Spiced Rum", "Malibu"],
    vibe: ["Tropical", "Creamy"],
    description: "Lambs spiced rum and Malibu shaken with Don Simon pineapple & coconut juice and a swirl of rhubarb & apple cordial.",
  },
  {
    name: "Pink Lady",
    base: ["Strawberry & Yuzu Gin"],
    vibe: ["Refreshing", "Tart"],
    description: "Strawberry & Yuzu gin with grenadine and apple juice.",
  },
  {
    name: "Rum Runner",
    base: ["Lamb's Spiced Rum"],
    vibe: ["Tropical", "Sweet"],
    description: "Rum, banana liqueur, raspberry liqueur, pineapple juice, lime juice and grenadine.",
  },
  {
    name: "Classic Margarita",
    base: ["Blanco Tequila"],
    vibe: ["Tart", "Aromatic"],
    description: "Blanco Tequila, lime juice, orange liqueur and agave syrup.",
  },
  {
    name: "Cotton Candy Margarita",
    base: ["Blanco Tequila"],
    vibe: ["Sweet", "Aromatic"],
    description: "Blanco Tequila, lime juice, orange liqueur, grenadine and agave syrup mixed with cream soda and topped with cotton candy.",
  },
  {
    name: "Valentina",
    base: ["Lamb's Spiced Rum"],
    vibe: ["Sweet", "Fruity"],
    description: "Spiced rum, peach liqueur, rose prosecco, strawberry juice.",
  },
  {
    name: "Nutty Bellini",
    base: ["Amaretto"],
    vibe: ["Sweet", "Tart"],
    description: "Amaretto mixed with peach juice and rose prosecco.",
  },
  {
    name: "Amaretto Aloha",
    base: ["Amaretto"],
    vibe: ["Sweet", "Fruity"],
    description: "Amaretto and Malibu Coconut liqueur mixed with pineapple & coconut juice and a raspberry liqueur.",
  },
];

const mocktails = [
  {
    name: "Rhubarb Fizz",
    base: ["Rhubarb & Apple cordial"],
    vibe: ["Crisp", "Light"],
    description: "Belvoir rhubarb & apple cordial topped with slimline ginger ale and a squeeze of lime.",
  },
  {
    name: "Elderflower Spritz",
    base: ["Elderflower & Rose cordial"],
    vibe: ["Floral", "Refreshing"],
    description: "Elderflower & rose cordial over ice with lemonade and fresh strawberries.",
  },
  {
    name: "Nojito",
    base: ["Lime & Mint cordial"],
    vibe: ["Refreshing", "Zingy"],
    description: "Bottle Green Lime & Mint cordial with lemonade. Garnished with pineapple, mint and lime.",
  },
  {
    name: "Pineapple & Coconut Nojito",
    base: ["Lime & Mint cordial"],
    vibe: ["Refreshing", "Zingy"],
    description: "Bottle Green Lime & Mint cordial with pineapple & coconut juice and a dash of lemonade. Garnished with pineapple, mint and lime.",
  },
  {
    name: "0% Lavender Lemon Drop",
    base: ["Lemon Juice", "Lavender Syrup"],
    vibe: ["Refreshing", "Zingy"],
    description: "Lavender syrup mixed with lemon juice, orange juice and lemononade.",
  },
  {
    name: "0% Blueberry Bramble",
    base: ["Blueberry & Blackcurrant Cordial"],
    vibe: ["Refreshing", "Fruity"],
    description: "Blueberry & Blackcurrant cordial mixed with lime juice and topped with giner ale.",
  },
  {
    name: "0% Peach Fizz",
    base: ["Peach Juice"],
    vibe: ["Refreshing", "Fruity"],
    description: "Peach juice and grenadine mixed with lemonade.",
  },
  {
    name: "0% Margarita",
    base: ["Orange Juice"],
    vibe: ["Refreshing", "Fruity"],
    description: "Orange juice, lime juice and agave syrup topped with soda water.",
  },
];

const shots = [
  {
    name: "Sunset Layer",
    base: ["Passoa", "Aloha 65"],
    description: "Passoa poured slow over Aloha 65 for a layered orange-to-pink sunset shot.",
  },
  {
    name: "Espresso Snap",
    base: ["Tia Maria"],
    description: "Chilled Tia Maria with a dash of raspberry syrup — quick, bitter-sweet kick.",
  },
  {
    name: "Yuzu Zinger",
    base: ["Whitley Neill Yuzu & Strawberry Gin"],
    description: "Yuzu & strawberry gin over crushed ice with a splash of lime — sharp and bright.",
  },
  {
    name: "Blue Hawaiian",
    base: ["Blue Curacao", "Triple Sec"],
    description: "Blue curaçao and triple sec shaken hard with lemon juice — sharp, citrus and electric blue.",
  },
  {
    name: "Amaretto Stone Sour",
    base: ["Amaretto"],
    description: "Amaretto with orange juice and a drop of grenadine for a mini stone sour.",
  },
  {
    name: "Kraken Cherry Bomb",
    base: ["Kraken Cherry & Madagascan Vanilla Rum"],
    description: "Kraken cherry & vanilla rum with raspberry syrup and a dash of lime juice.",
  },
  {
    name: "Brandy Snap",
    base: ["Napolean Brandy"],
    description: "Napolean brandy topped with cream soda and a touch of sugar syrup — dessert in a shot glass.",
  },
  {
    name: "Malibu Sunrise",
    base: ["Malibu"],
    description: "Malibu layered over grenadine and pineapple juice for a mini sunrise.",
  },
  {
    name: "Mini Cherry Mimosa",
    base: ["Prosecco"],
    description: "Rosè Prosecco topped with a cherry liqueur and orange juice.",
  },
  {
    name: "Turkish Delight",
    base: ["Tequila"],
    description: "Blanco Tequila mixed with elderflower & rose cordial and a touch of grenadine & sugar syrup in a sugar rimmed glass.",
  },
];

const zeroShots = [
  {
    name: "0% Sunset Layer",
    base: ["Grenadine", "Orange Juice"],
    description: "Grenadine poured slow under orange juice for a layered sunset shot.",
  },
  {
    name: "0% Espresso Snap",
    base: ["Cherry, Plum & Raspberry cordial"],
    description: "Sainsbury's cherry, plum & raspberry cordial with a dash of coke zero.",
  },
  {
    name: "0% Yuzu Zinger",
    base: ["Lemon Juice", "Lime Juice"],
    description: "Lemon and lime juice with a touch of sugar syrup and strawberry pureè over crushed ice.",
  },
  {
    name: "0% Hawaiian Splash",
    base: ["Pineapple Juice"],
    description: "Pineapple and lemon juice.",
  },
  {
    name: "0% Stone Sour",
    base: ["Orange Juice"],
    description: "Orange juice with a drop of grenadine and a splash of lemon & lime juice for a sweet-tart snap.",
  },
  {
    name: "0% Sunrise",
    base: ["Grenadine", "Pineapple Juice"],
    description: "Grenadine layered under pineapple juice for a mini sunrise.",
  },
  {
    name: "0% Cherry Mimosa",
    base: ["Cherry, Plum & Raspberry cordial"],
    description: "Cherry, plum & raspberry cordial topped with orange juice and a splash of lemonade.",
  },
  {
    name: "0% Turkish Delight",
    base: ["Elderflower & Rose cordial"],
    description: "Elderflower & rose cordial mixed with a touch of grenadine & sugar syrup in a sugar rimmed glass.",
  },
];

const snacks = [
  { name: "Sweet & Sticky 'Wings'", description: "Roasted cauliflower 'wings' coated in garlic, ginger, soy sauce, maple syrup and sesame seeds." },
  { name: "Patatas Bravas", description: "Roasted potatoes with a creamy garlic aioli and tomato sauce." },
  { name: "Caramelised Onion & 'Pepperoni' Pizza", description: "Pizza topped with caramelised onions, vegan cheese, rocket, roasted garlic and vegan pepperoni slices, drizzled with hot maple syrup." },
  { name: "Mixed Olives", description: "Marinated olives with vegan pesto." },
  { name: "Bread & Oils", description: "Classic lightly toasted breads with balsamic vinegar and olive oil." },
  { name: "Salted Nuts", description: "Mixed roasted nuts." },
  { name: "Crisps & Hummous", description: "Tyrells sweet chilli crisps & hummous." },
  { name: "Fruit Skewers", description: "Watermelon, strawberry & mint. Pineapple, peach & plums." },
  { name: "Ice Lollies", description: "Homemade ice lollies made from cordials." },
  { name: "Caramel Blondies", description: "Lazyday caramel slices with shortbread pieces, cherries, marshmallows, caramel and coconut." },
  { name: "Sweet Bowl", description: "Vegan marshmallows, skittles, percy pigs." },
];

const spirits = [
    "Aloha 65",
    "Malibu - Coconut Liqueur",
    "Passoa - Passionfruit Liqueur",
    "Tia Maria",
    "Raspberry Liqueur",
    "Absolut Vanilla Vodka",
    "Whitley Neill Japanese Yuzu & Strawberry Gin",
    "Sierra Tequila Blanco",
    "Lambs Spiced Rum",
    "Edinburgh Gin Distillery - Rhubarb & Ginger Liqueur Gin",
    "Kraken Black Spiced Rum - Dark Caramel & Sea Salt",
    "Kraken Black Spiced Rum - Cherry & Madagascan Vanilla",
    "Kraken Black Spiced Rum - Original",
    "Napolean Brandy",
	"Rose Prosecco",
	"Amaretto",
    "Blue Curacao",
    "Cointreau",
    "Triple Sec",
    "Archers Peach Liqueur",
  ];

const cordials = [
  "Belvoir Farm - Rhubarb & Apple",
  "Belvoir Farm - Blueberry & Blackcurrant",
  "Belvoir Farm - Elderflower & Rose",
  "Belvoir Farm - Honey, Lemon & Ginger",
  "Bottle Green - Lime & Mint",
  "Sainsbury's Fruit Blend - Cherry, Plum & Raspberry",
  "Strawberry syrup",
  "Raspberry syrup",
  "Sugar Syrup",
];

const mixers = [
  "Coke Zero",
  "Slimline Ginger Ale",
  "Apple, Watermelon & Strawberry Juice Drink",
  "Don Simon - Pineapple & Coconut Juice",
  "Don Simon - Strawberry & Lemon juice",
  "Grenadine",
  "Pineapple Juice",
  "Orange Juice",
  "Lime Juice",
  "Lemon Juice",
  "Cream Soda",
  "Don Simon - Strawberry & Lemon juice",
];

// --- Helpers ---------------------------------------------------------------
const el = (sel, root = document) => root.querySelector(sel);
const els = (sel, root = document) => Array.from(root.querySelectorAll(sel));

// --- Rendering -------------------------------------------------------------
function drinkCard(item) {
  const card = document.createElement("article");
  card.className = "card";

  const bases = item.base.join(", ");
  const tags = (item.vibe || []).map((t) => `<span class="badge">${t}</span>`).join("");

  card.innerHTML = `
    <h3>${item.name}</h3>
    <p class="description">${item.description}</p>
    <div class="meta">Base: <strong>${bases}</strong></div>
    ${tags ? `<div class="badges">${tags}</div>` : ""}
  `;
  return card;
}

function snackCard(item) {
  const card = document.createElement("article");
  card.className = "card";
  card.innerHTML = `
    <h3>${item.name}</h3>
    <p class="description">${item.description}</p>
  `;
  return card;
}

function renderGrid(list, cardFn, emptyText) {
  const grid = document.createElement("section");
  grid.className = "grid";

  if (!list.length) {
    grid.innerHTML = `<div class="empty card">${emptyText}</div>`;
    return grid;
  }

  list.forEach((item) => grid.appendChild(cardFn(item)));
  return grid;
}

function renderSimpleList(items, pillLabel) {
  const section = document.createElement("section");
  section.className = "list";

  if (!items.length) {
    section.innerHTML = `<div class="empty card">Nothing here yet.</div>`;
    return section;
  }

  items.slice().sort((a, b) => a.localeCompare(b)).forEach((name) => {
    const row = document.createElement("div");
    row.className = "list-item";
    row.innerHTML = `<div>${name}</div><div class="pill">${pillLabel}</div>`;
    section.appendChild(row);
  });

  return section;
}

function setActiveTab(tab) {
  localStorage.setItem("mc-tab", tab);
  els(".tab").forEach((t) => {
    const isActive = t.dataset.tab === tab;
    t.classList.toggle("active", isActive);
    t.setAttribute("aria-selected", isActive);
  });
  render(tab);
}

function render(tab = "cocktails") {
  const app = el("#app");
  app.innerHTML = "";

  if (tab === "cocktails") {
    app.appendChild(renderGrid(cocktails, drinkCard, "No cocktails yet."));
  }

  if (tab === "mocktails") {
    app.appendChild(renderGrid(mocktails, drinkCard, "No mocktails yet."));
  }

  if (tab === "shots") {
    const title1 = document.createElement("div");
    title1.className = "section-title";
    title1.textContent = "Shots";
    app.appendChild(title1);
    app.appendChild(renderGrid(shots, drinkCard, "No shots yet."));

    const title2 = document.createElement("div");
    title2.className = "section-title";
    title2.textContent = "0% Shots";
    app.appendChild(title2);
    app.appendChild(renderGrid(zeroShots, drinkCard, "No 0% shots yet."));
  }

  if (tab === "snacks") {
    app.appendChild(renderGrid(snacks, snackCard, "No snacks yet."));
  }

  if (tab === "mixers") {
    const title1 = document.createElement("div");
    title1.className = "section-title";
    title1.textContent = "Cordials";
    app.appendChild(title1);
    app.appendChild(renderSimpleList(cordials, "Cordial"));

    const title2 = document.createElement("div");
    title2.className = "section-title";
    title2.textContent = "Mixers";
    app.appendChild(title2);
    app.appendChild(renderSimpleList(mixers, "Mixer"));
	
	const title3 = document.createElement("div");
    title3.className = "section-title";
    title3.textContent = "Spirits";
    app.appendChild(title3);
    app.appendChild(renderSimpleList(spirits, "Spirits"));
  }
}

// --- Events ------------------------------------------------------------
const savedTab = localStorage.getItem("mc-tab") || "cocktails";
render(savedTab);
els(".tab").forEach((t) => {
  if (t.dataset.tab === savedTab) {
    t.classList.add("active");
    t.setAttribute("aria-selected", "true");
  } else {
    t.classList.remove("active");
    t.setAttribute("aria-selected", "false");
  }
});

els(".tab").forEach((t) => t.addEventListener("click", () => setActiveTab(t.dataset.tab)));
