# 🛰️ Future Digital Technology — Etapa 1 + Etapa 2

> Proiect universitar — Tehnici Web 2026
> **Student:** Chiriac Ciprian-Mihai | **Grupă:** 211 | **FMI UniBuc**

---

## 📋 Descriere

Site web pentru un magazin de electronică, sisteme satelit și infrastructură IT.
Implementat în **HTML5 + CSS3 + JavaScript vanilla**, fără framework-uri externe.

---

## 🗂️ Structura proiectului

```
proiect/
├── index.html
└── resurse/
    ├── css/
    │   ├── resetare.css     ← CSS Reset Meyer (bonus Etapa 2)
    │   ├── general.css      ← stiluri principale, variabile, layout grid
    │   └── nav.css          ← navigare, burger menu, dropdown
    ├── js/
    │   └── script.js        ← interactivitate: coș, burger, smooth scroll
    ├── ico/
    │   └── favicon.svg      ← favicon SVG custom (antenă satelit)
    ├── imagini/             ← 11 imagini responsive (desktop/tablet/mobile)
    ├── video/
    │   └── prezentare.mp4
    └── documente/
        └── catalog-fdt-2026.pdf
```

---

## ✅ Cerințe implementate

### Etapa 1 — HTML5
- Structură semantică: `<header>`, `<main>`, `<footer>`, `<nav>`, `<section>`, `<article>`, `<aside>`
- `<hgroup>` cu `<h1>` + subtitlu `<p>` (spec HTML5 corectă)
- Navigare cu `<ul>` imbricate și subopțiuni dropdown
- Imagine responsivă cu `<picture>` + `<source>` (desktop / tabletă / mobil)
- `<figure>` + `<figcaption>` cu atribut `title`
- Tabel cu `<thead>`, `<tbody>`, `<tfoot>`, `rowspan`, `colspan`, `<caption>`
- Liste `<ol>` cu `<time datetime>` și `<meter>` (valoare mică + valoare mare)
- `<details>` / `<summary>` — 5 întrebări FAQ
- Taguri text: `<b>`, `<i>`, `<strong>`, `<em>`, `<s>`, `<ins>`, `<abbr>`, `<dfn>`, `<q>`, `<cite>`
- Linkuri: extern în tab nou, `<wbr>`, `download`, click pe imagine, `tel:`, `mailto:`
- `<iframe>` YouTube cu `target` pentru 3 taburi
- `<video>` local cu `<source>`
- `<address>` în footer cu `<small>`, `&copy;`, `<time>`
- `<meta>`: charset, author, keywords, description, theme-color, msapplication-TileColor
- Favicon SVG custom

### 🎁 Etapa 1 — Bonusuri
- **MathML** — formule tehnice satelit (Friis, câștig antenă parabolică)
- **PDF embed** — `<embed>` cu descărcare
- **Hartă imagine interactivă** — `<map>` + `<area>` (rect + circle)
- **Google Maps iframe** — locația showroom-ului

### Etapa 2 — CSS
- Schemă cromatică: 7 culori în armonie analogă, toate definite ca variabile CSS în `:root`
- Layout responsiv cu **CSS Grid** (`grid-template-areas`) — 3 breakpoints (desktop / tabletă / mobil)
- Font-size scalabil cu tranziție între breakpoints (16px → 15px → 13px)
- Fonturi externe: **Google Fonts** (Inter + Orbitron)
- **FontAwesome**: icon static + animat (`fa-spin`, `fa-beat`)
- CSS Reset Meyer complet în `resetare.css` separat
- Animații dezactivate pe ecran mic (`animation: none !important`)
- Print stylesheet

### 🎁 Etapa 2 — Cerințe individuale
- **stilizare-taburi** — flexbox: iframe stânga + taburi coloană dreapta, hover cu scale
- **stilizare-tabel** — box-shadow alternant c1/c2, tranziție 0.75s, font +20% la hover, scrollbar orizontal pe container
- **link-top** — diamant CSS rotit, triunghi CSS fără imagini, semi-transparent, tooltip dedesubt
- **schema-cromatica** — albastru tech (#0ea5e9), schema analogă, psihologia culorilor documentată

### 🎁 Etapa 2 — Bonus
- **Stilizare MathML** — variabile de culoare per tip de element (`mi`, `mo`, `mn`, `msup`)

---

## 🎨 Schema cromatică

| Culoare | Hex | Rol |
|---------|-----|-----|
| Albastru principal | `#0ea5e9` | Titluri, butoane CTA, accente |
| Albastru închis | `#0284c7` | Hover states, elemente active |
| Cyan | `#06b6d4` | Accente secundare, highlights |
| Verde | `#10b981` | Stoc, confirmări, success |
| Portocaliu | `#f59e0b` | Prețuri, badge-uri oferte |
| Roșu | `#ef4444` | Erori, prețuri tăiate |
| Bleumarin | `#0a0e27` | Background pagină |

---

## 🔍 Validare

✅ **validator.w3.org** — `Document checking completed. No errors or warnings to show.`

---

## 🚀 Cum rulezi local

```bash
# Clonează repo-ul
git clone https://github.com/hanssick/Future---Digital---Technology.git

# Deschide în browser
cd proiect
# deschide index.html direct în browser
# SAU folosește Live Server în VS Code
```

---

## 🛠️ Tehnologii folosite

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

---

*Chiriac Ciprian-Mihai — FMI UniBuc — Tehnici Web 2026*
