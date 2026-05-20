# Future Digital Technology — Etapa 1 + Etapa 2

Proiect realizat pentru disciplina **Tehnici Web**. Tema site-ului este un magazin/prezentare pentru produse IT, electronică, sisteme satelit și servicii tehnice.

## Structura proiectului

```text
Future_Digital_Technology_Etapa_1_2_resurse/
├── index.html
├── README.md
├── README.txt
└── resurse/
    ├── css/
    │   ├── resetare.css
    │   ├── general.css
    │   ├── nav.css
    │   └── style-original-backup.css
    ├── js/
    │   └── script.js
    ├── ico/
    │   ├── favicon.svg
    │   └── apple-touch-icon.png
    ├── imagini/
    ├── video/
    └── documente/
```

## Rolul fișierelor principale

- `index.html` — pagina principală a site-ului; conține structura HTML.
- `resurse/css/resetare.css` — resetare CSS și reguli de bază pentru elementele HTML.
- `resurse/css/general.css` — stilizarea generală: layout, carduri, tabele, iframe, link-top, MathML, responsive.
- `resurse/css/nav.css` — stilizarea meniului și navigației.
- `resurse/js/script.js` — funcționalități JavaScript pentru interacțiuni.
- `resurse/ico/favicon.svg` — faviconul site-ului.
- `resurse/ico/apple-touch-icon.png` — icon pentru dispozitive Apple.
- `resurse/imagini/` — folder pentru imaginile proiectului.
- `resurse/video/` — folder pentru fișiere video locale.
- `resurse/documente/` — folder pentru PDF-uri și documentație.

## Cerințe Etapa 1 acoperite

- Document HTML5 cu `<!DOCTYPE html>` și `lang="ro"`.
- Meta taguri: `charset`, `author`, `keywords`, `description`, `viewport`.
- Titlu relevant pentru pagină.
- Favicon în `resurse/ico`.
- Structură semantică: `header`, `nav`, `main`, `section`, `article`, `aside`, `footer`.
- Liste, paragrafe, `blockquote`, `dl`, `dt`, `dd`.
- Evenimente cu tagul `time`.
- Imagine responsive cu `picture`, `source`, `img`.
- Imagine cu descriere prin `figure` și `figcaption`.
- Taguri de marcare text: `b`, `strong`, `i`, `em`, `s`, `ins`, `abbr`, `dfn`, `q`, `cite`.
- Linkuri interne și externe, inclusiv link lung cu `<wbr>`.
- Link de tip download.
- Iframe YouTube cu linkuri care se deschid în același iframe.
- Tabel cu `caption`, `thead`, `tbody`, `tfoot`, `rowspan`, `colspan`.
- Zone `details` și `summary`.
- Două utilizări ale tagului `meter`.
- Informații de contact cu `address`, `tel:`, `mailto:` și WhatsApp.
- Copyright cu `small`, `&copy;` și `time`.

## Bonusuri Etapa 1

- MathML pentru formule tehnice relevante temei.
- PDF afișat în pagină cu `embed`.
- Hartă de imagine cu `map` și `area`.
- Iframe Google Maps pentru locație.

## Cerințe Etapa 2 acoperite

- Schemă cromatică cu variabile CSS.
- Layout responsive cu grid și `grid-template-areas`.
- Media queries pentru ecran mare, mediu și mic.
- Spațiere laterală cu variabile CSS.
- Zone vizual separate prin background, border, border-radius, box-shadow și padding.
- Font extern prin Google Fonts.
- Iconuri Font Awesome statice și animate.
- Tabel stilizat: `caption-side: bottom`, rânduri alternate, hover, tranziții, scrollbar orizontal pe container.
- Taburi iframe stilizate cu flexbox.
- Link-top fără imagine, realizat din forme CSS, cu poziție fixă și hover.

## Bonusuri Etapa 2

- Resetare CSS.
- Stilizare MathML: variabile, operatori, numere, constante și fracții stilizate diferit.

## Validare

Pentru validarea W3C, se încarcă fișierul:

```text
index.html
```

Nu se încarcă arhiva `.zip` direct în validator.

## Observații

Proiectul este organizat astfel încât fișierele care nu sunt pagini HTML să fie puse în folderul `resurse`, împărțite pe tipuri: `css`, `js`, `ico`, `imagini`, `video`, `documente`.


## Resurse adăugate

Folderul `resurse/imagini/` conține imagini placeholder generate pentru prezentare:
- `hero-desktop.jpg`, `hero-tablet.jpg`, `hero-mobile.jpg`
- `infrastructura-desktop.jpg`, `infrastructura-tablet.jpg`, `infrastructura-mobile.jpg`
- `showroom.jpg`, `catalog-produse.jpg`
- imagini tematice pentru satelit/IT/electronică

Folderul `resurse/documente/` conține:
- `catalog-fdt-2026.pdf`

Folderul `resurse/video/` conține o notă. Videoul local MP4 nu este inclus; pentru prezentare este mai sigur iframe-ul YouTube din pagină.


## Actualizare finală pentru GitHub

Toate imaginile folosite direct în HTML au fost legate la fișiere locale din `resurse/imagini/`, nu la linkuri externe. Astfel proiectul poate fi încărcat pe GitHub împreună cu folderul `resurse/` și va afișa imaginile din repository.

Zona video folosește un singur iframe YouTube și trei linkuri/dreptunghiuri deasupra lui, conform cerinței de stilizare-taburi.
