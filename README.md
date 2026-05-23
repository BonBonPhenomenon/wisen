# Wisen — Marketing Intelligence NZ & AU

Static website. No build tools, no dependencies. Open `index.html` in a browser or serve via MAMP.

---

## Folder structure

```
wisen/
├── index.html              ← Home page (report directory)
├── css/
│   └── style.css           ← All styles. Edit here for visual changes.
├── js/
│   └── main.js             ← Tab switching, currency toggle, active nav
├── pages/
│   ├── social-media.html   ← Report 01
│   ├── website-costs.html  ← Report 02
│   ├── paid-ads.html       ← Report 03
│   └── disclaimer.html     ← Data sources & legal disclaimer
└── images/                 ← Drop images here when needed
```

---

## Running locally with MAMP

1. Copy the `wisen/` folder into your MAMP `htdocs` directory:
   ```
   /Applications/MAMP/htdocs/wisen/
   ```
2. Start MAMP and open:
   ```
   http://localhost:8888/wisen/
   ```

---

## Adding a new report page

1. Duplicate `pages/website-costs.html` (or any report page) and rename it.
2. Update the `<title>` tag and hero content.
3. Add a link to it in the header nav inside `index.html` **and** in all existing `pages/*.html` headers.
4. Add a card for it on `index.html`.

The header nav block in every page looks like this — add your new link here:

```html
<a class="site-nav-link" href="your-new-page.html" data-page="your-new-page">Label</a>
```

The `data-page` attribute must match the filename without `.html` — this is how `main.js` highlights the active nav link.

---

## Deploying to GitHub Pages

1. Create a new repo on github.com (e.g. `wisen-intelligence`).
2. In Terminal, from inside the `wisen/` folder:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/wisen-intelligence.git
   git push -u origin main
   ```
3. In the repo on GitHub: **Settings → Pages → Source → Deploy from branch → main / root**.
4. Your site will be live at:
   ```
   https://YOUR_USERNAME.github.io/wisen-intelligence/
   ```

---

## Brand tokens (quick reference)

| Token         | Hex       | Use                        |
|---------------|-----------|----------------------------|
| `--parchment` | `#F5F1EB` | Page background            |
| `--linen`     | `#EDE8E0` | Hover states, metric cards |
| `--ink`       | `#2C2820` | Primary text               |
| `--mauve`     | `#8E6B7E` | NZD data, primary accent   |
| `--olive`     | `#6B7A45` | AUD data, secondary accent |
| `--rule`      | `#D5CDBE` | Dividers, borders          |

Fonts: **Lora** (headings) · **Poppins** (body, UI) — loaded from Google Fonts in `style.css`.

---

Version 1.0 · May 2026
