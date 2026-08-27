# Screen Line Printers — Frontend

React + Vite single-page application for [Screen Line Printers](https://cheerysaaru.github.io/SL-printers/), a printing shop in Pettah, Colombo 11, Sri Lanka.

## Tech Stack

- React 19
- Vite 6
- React Router 7
- Google Fonts (Fraunces, Work Sans)

## Development

```bash
npm install
npm run dev
```

Open the printed `http://localhost:5173` URL in your browser.

**Do not open `index.html` directly** — Vite's dev server handles module resolution and hot reload. The page will be blank if opened via `file://`.

## Production Build

```bash
npm run build
```

Output goes to `dist/`. To preview the production build locally:

```bash
npx serve dist
```

Then open `http://localhost:3000`.

**Do not open `dist/index.html` directly** — the homepage will load (relative asset paths are configured), but client-side routes (`/services`, `/about`, `/portfolio`, `/contact`) require a server to handle fallback routing.

## Project Structure

```
frontend/
├── index.html              # Entry HTML
├── vite.config.js          # Vite config (base: './')
├── src/
│   ├── main.jsx            # App entry + router setup
│   ├── styles.css          # Global styles + design tokens
│   ├── components/
│   │   └── Layout.jsx      # Shared header, footer, WhatsApp button
│   └── pages/
│       ├── Home.jsx         # Hero, services, process, portfolio, testimonials
│       ├── About.jsx        # Story, timeline, values
│       ├── Services.jsx     # Printing methods, materials, products
│       ├── Portfolio.jsx    # Filterable gallery + lightbox
│       └── Contact.jsx      # Form + Google Maps embed
├── dist/                   # Production build output
└── public/                 # Static assets (if any)
```

## Pages

| Route | Page |
|-------|------|
| `/` | Home — hero animation, services, process, portfolio, testimonials, CTA |
| `/about` | About — story, timeline, values |
| `/services` | Services — printing methods, materials, products |
| `/portfolio` | Portfolio — filterable gallery with lightbox |
| `/contact` | Contact — form (sends to WhatsApp), Google Maps, contact details |

## Key Features

- **Splash screen** on homepage load (2.2s)
- **Hero animation** — staggered text reveal + decorative circles
- **Scroll-reveal** — sections fade up on viewport entry, staggered children
- **WhatsApp integration** — floating "Get a Quote" button + pre-filled message links on all CTAs
- **Contact form** — submits via WhatsApp (no backend needed)
- **Portfolio lightbox** — click any piece to view details + inquire
- **Mobile-first responsive** design

## Design Tokens

| Token | Hex | Use |
|-------|-----|-----|
| Paper | `#FAF9F6` | Page background |
| Paper Deep | `#F0EDE6` | Section backgrounds |
| Ink | `#33241A` | Headings, primary text, buttons |
| Ink Soft | `#5A4636` | Body copy, secondary text |
| Brass | `#A87B3F` | Accents, dividers, eyebrow labels |
| Oxblood | `#6E2A35` | CTA hover, links |

## Deployment

Push to `main` branch — GitHub Pages deploys automatically from `dist/`.

```bash
git add .
git commit -m "your message"
git push origin main
```

## Contact

- **WhatsApp**: [+94 77 727 8833](https://wa.me/94777278833)
- **Email**: screenline_printers@yahoo.com
- **Address**: Maliban Street No. 12, Colombo 11, Pettah, Sri Lanka
