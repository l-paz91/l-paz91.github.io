// --- Data: menu-style (no measurements, no method) -------------------------
const cocktails = [
    {
      name: "Strawberry Siren",
      base: ["Gin", "Vodka"],
      vibe: ["Fruity", "Light"],
      description: "Strawberry-kissed gin and vanilla notes over a citrus lift.",
    },
    {
      name: "Tropical Trouble",
      base: ["Rum", "Aloha 65"],
      vibe: ["Tropical", "Refreshing"],
      description: "Malibu and Aloha 65 tangled with pineapple and lemonade.",
    },
    {
      name: "Midnight Espresso Twist",
      base: ["Vodka", "Coffee"],
      vibe: ["Rich", "Dessert"],
      description: "Tia Maria and vanilla vodka with a golden whisper of Licor 43.",
    },
    {
      name: "Dark Desire",
      base: ["Rum"],
      vibe: ["Dark", "Bold"],
      description: "Two black spiced rums with apple–rhubarb for a moody finish.",
    },
    {
      name: "Raspberry Sunset",
      base: ["Vodka", "Passionfruit"],
      vibe: ["Bright", "Sweet"],
      description: "Passoa and raspberry with strawberry–lemon spritz.",
    },
    {
      name: "Tequila Bloom",
      base: ["Tequila"],
      vibe: ["Citrus", "Aromatic"],
      description: "Tequila and Aloha 65 with a yuzu–strawberry gin accent.",
    },
    {
        name: "Passionfruit Martini",
        base: ["Vodka"],
        vibe: ["Bright", "Fruity"],
        description: "Vanilla Vodka and Passionfruit Liqueur shaken with lime juice.",
      },
      {
        name: "French Martini",
        base: ["Vodka"],
        vibe: ["Sweet", "Fruity"],
        description: "Vanilla Vodka and Raspberry Liqueur shaken with Pineapple & Coconut juice.",
      },
  ];
  
  const spirits = [
    "Aloha 65",
    "Malibu - Coconut Liqueur",
    "Passoa - Passionfruit Liqueur",
    "Tia Maria",
    "Raspberry Liqueur",
    "Absolut Vanilla Vodka",
    "Whitley Neill Japanese Yuzu & Strawberry Gin",
    "Tequila",
    "Lambs Spiced Rum",
    "Licor 43",
    "Kraken Black Spiced Rum - Dark Caramel & Sea Salt",
    "Kraken Black Spiced Rum - Cherry & Madagascan Vanilla",
    "Tiramisu Rum Liqueur",
    "Sticky Toffee Rum Liqueur",
    "Caramelo - Caramel Rum Liqueur",
  ];
  
  const mixers = [
    "Strawberry syrup",
    "Raspberry syrup",
    "Coke",
    "Diet Coke - Caffiene Free",
    "Lemonade",
    "Pineapple & Coconut juice",
    "Strawberry & Lemon juice",
    "Strawberry lemonade (still)",
    "Apple & Rhubarb juice",
  ];
  
  // --- Helpers ---------------------------------------------------------------
  const el = (sel, root = document) => root.querySelector(sel);
  const els = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  
  function highlight(text, query) {
    if (!query) return text;
    const re = new RegExp(`(${query.replace(/[.*+?^${}()|[\\]\\\\]/g, "\\$&")})`, "ig");
    return text.replace(re, '<mark>$1</mark>');
  }
  
  // --- Rendering -------------------------------------------------------------
  function cocktailCard(item) {
    const card = document.createElement("article");
    card.className = "card";
  
    const bases = item.base.join(", ");
    const tags = item.vibe.map((t) => `<span class="badge">${t}</span>`).join("");
  
    card.innerHTML = `
      <h3>${item.name}</h3>
      <p class="description">${item.description}</p>
      <div class="meta">Base: <strong>${bases}</strong></div>
      <div class="badges">${tags}</div>
    `;
    return card;
  }
  
  function renderCocktails(list) {
    const grid = document.createElement("section");
    grid.className = "grid";
  
    if (!list.length) {
      grid.innerHTML = `<div class="empty card">No matching cocktails. Try another spirit or flavour.</div>`;
      return grid;
    }
  
    list.forEach((c) => grid.appendChild(cocktailCard(c)));
    return grid;
  }
  
  function renderSimpleList(items, pillLabel) {
    const section = document.createElement("section");
    section.className = "list";
  
    if (!items.length) {
      section.innerHTML = `<div class="empty card">Nothing here… which is a choice.</div>`;
      return section;
    }
  
    items.forEach((name) => {
      const row = document.createElement("div");
      row.className = "list-item";
      row.innerHTML = `<div>${name}</div><div class="pill">${pillLabel}</div>`;
      section.appendChild(row);
    });
  
    return section;
  }
  
  function setActiveTab(tab) {
    localStorage.setItem("pd-tab", tab);
    els(".tab").forEach((t) => {
      const isActive = t.dataset.tab === tab;
      t.classList.toggle("active", isActive);
      t.setAttribute("aria-selected", isActive);
    });
    render(tab);
  }
  
  function render(tab = "cocktails", searchQuery = "") {
    const app = el("#app");
    app.innerHTML = "";
  
    if (tab === "cocktails") {
      let list = cocktails.map((c) => ({ ...c }));
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        list = list
          .filter(
            (c) =>
              c.name.toLowerCase().includes(q) ||
              c.base.join(" ").toLowerCase().includes(q) ||
              c.vibe.join(" ").toLowerCase().includes(q) ||
              c.description.toLowerCase().includes(q)
          )
          .map((c) => ({
            ...c,
            name: highlight(c.name, searchQuery),
          }));
      }
      app.appendChild(renderCocktails(list));
    }
  
    if (tab === "spirits") {
      const list = searchQuery
        ? spirits.filter((s) => s.toLowerCase().includes(searchQuery.toLowerCase()))
        : spirits;
      app.appendChild(renderSimpleList(list, "Spirit"));
    }
  
    if (tab === "mixers") {
      const list = searchQuery
        ? mixers.filter((m) => m.toLowerCase().includes(searchQuery.toLowerCase()))
        : mixers;
      app.appendChild(renderSimpleList(list, "Mixer"));
    }
  }
  
  // --- Toast (for QR tips copy/share fallback) -------------------------------
  function toast(message) {
    const t = document.createElement("div");
    t.textContent = message;
    Object.assign(t.style, {
      position: "fixed",
      left: "50%",
      transform: "translateX(-50%)",
      bottom: "80px",
      background: "#0f1a17",
      color: "#fff",
      padding: "10px 14px",
      borderRadius: "999px",
      fontWeight: "800",
      zIndex: 50,
      boxShadow: "0 10px 25px rgba(0,0,0,.4)",
    });
    document.body.appendChild(t);
    setTimeout(() => t.remove(), 1500);
  }
  
  function copyToClipboard(text) {
    return navigator.clipboard?.writeText(text);
  }
  
  // --- Events ----------------------------------------------------------------
  const savedTab = localStorage.getItem("pd-tab") || "cocktails";
  render(savedTab);
  
  els(".tab").forEach((t) => t.addEventListener("click", () => setActiveTab(t.dataset.tab)));
  
  const searchInput = el("#search");
  const clearBtn = el("#clearBtn");
  let searchTimer;
  searchInput.addEventListener("input", () => {
    clearTimeout(searchTimer);
    clearBtn.hidden = !searchInput.value;
    searchTimer = setTimeout(
      () => render(el(".tab.active").dataset.tab, searchInput.value.trim()),
      120
    );
  });
  clearBtn.addEventListener("click", () => {
    searchInput.value = "";
    clearBtn.hidden = true;
    render(el(".tab.active").dataset.tab, "");
    searchInput.focus();
  });
  
  // Share & QR tips
  el("#share").addEventListener("click", async () => {
    const url = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({ title: "Pre-Drinks Menu", text: "Choose your cocktail:", url });
      } catch {}
    } else {
      await copyToClipboard(url);
      toast("Link copied");
    }
  });
  
  el("#qr").addEventListener("click", () => {
    const msg = `QR tips:\n1) Enable GitHub Pages for this repo.\n2) Paste the URL into any QR generator (eg qrcode-monkey).\n3) Print and stick near the door or fridge.\n4) Bonus: custom domain for prettier codes.`;
    copyToClipboard(msg);
    toast("QR tips copied");
  });
  