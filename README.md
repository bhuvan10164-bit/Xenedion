# XENedion — Integrated Enterprise Resource Planning Platform

> **"Enterprise Technology Designed Around the Way Businesses Work"**

A high-performance, professionally engineered, responsive corporate website for **XENedion**, an integrated Enterprise Resource Planning (ERP) platform. Built with React.js, modern vanilla CSS design tokens, and Vite.

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+ recommended, verified on v24.18.0)
- npm (v9+ recommended, verified on v11.16.0)

### 1. Installation

```bash
npm install
```

### 2. Run Local Development Server

```bash
npm run dev
```

The Vite development server will start locally (typically at `http://localhost:3000`).

### 3. Production Build & Verification

```bash
npm run build
```

This compiles optimized, production-ready assets into the `dist/` directory.

To preview the built production site locally:

```bash
npm run preview
```

---

## 🎨 Design Direction & Brand Foundations

The XENedion website design is inspired by the intersecting multi-chromatic woven ribbons of the official XENedion logo, reflecting the seamless integration of enterprise departments (Sales, Procurement, Inventory, Fulfillment, and Finance).

### Color Palette (Tokens)

- **Primary Navy**: `#091F40` — Editorial headings, contrast backgrounds, primary typography.
- **Electric Blue**: `#1264F5` — Core interactive buttons, focus states, and primary brand accents.
- **Cyan**: `#00DDFC` — Supplementary highlights, subtle badges, and energetic gradient transitions.
- **Orange**: `#FF642C` — Strategic emphasis, callouts, and key indicator dots.
- **Purple**: `#7024E8` — Process alignment markers and supplementary gradient depth.
- **Off-white**: `#F7F9FC` — Alternate section backgrounds, cards, and subtle contrast framing.
- **White**: `#FFFFFF` — Primary surfaces and clean content areas.

### Typography

- **Headings**: `Sora` (Weights: 400, 600, 700, 800) — Confident, geometric, editorial enterprise presence.
- **Body & Navigation**: `Manrope` (Weights: 400, 500, 600, 700) — Highly legible, contemporary European typographic balance.

---

## 📂 Project Architecture

```text
Xenedion/
├── public/
│   └── assets/
│       ├── xenedion-logo.png             # Original unaltered approved logo
│       └── images/
│           ├── connected-operations.jpg  # Photorealistic enterprise collaboration (Hero)
│           ├── procurement-coordination.jpg # Cross-functional procurement meeting (About)
│           └── inventory-fulfillment.jpg # Modern logistics & fulfillment operations (Why XENedion)
├── src/
│   ├── components/
│   │   ├── Navbar.jsx                    # Sticky navigation with accessible mobile drawer
│   │   ├── Hero.jsx                      # Asymmetric editorial hero with approved copy & ribbon art
│   │   ├── About.jsx                     # Verbatim company narrative in split editorial layout
│   │   ├── WhyXenedion.jsx               # Connected business functions & 5 core principles
│   │   ├── OurApproach.jsx               # Connected process flow (Desktop) & Vertical timeline (Mobile)
│   │   └── Footer.jsx                    # Dark navy minimalist footer with internal links
│   ├── styles/
│   │   ├── variables.css                 # Design tokens (colors, typography, radii, shadows)
│   │   ├── global.css                    # Modern CSS reset, typography base, a11y focus states
│   │   └── components.css                # Polished component styling & responsive breakpoints
│   ├── App.jsx                           # Root layout with accessibility landmarks
│   └── main.jsx                          # React 18 DOM mount
├── index.html                            # Semantic HTML5 entry with meta SEO & Google Fonts
├── vite.config.js                        # Vite React configuration (pure JavaScript)
├── package.json                          # Zero TypeScript dependencies
├── ASSET_PROMPTS.md                      # Full art direction prompts & specs for generated imagery
└── README.md                             # Documentation
```

---

## 📋 Strict Compliance & Content Verifications

- **100% Verbatim Copy**: Every heading, lead paragraph, callout, and bullet point from the official specification is incorporated word-for-word without summarization or embellishment.
- **Zero TypeScript**: All files are `.jsx` and `.js`. No `.ts`, `.tsx`, or TypeScript tooling.
- **Original Logo Integrity**: The approved client logo (`xenedion-logo.png`) is preserved in its original proportions, colors, and sharpness, framed on high-contrast backgrounds to protect wordmark legibility.
- **Fully Responsive**: Fluid layout verified across mobile (360px, 390px), tablet (768px), laptop (1024px), and desktop (1440px+).
- **Accessibility**: Includes a skip-to-content navigation link, visible `:focus-visible` outlines, descriptive image `alt` texts, semantic headings (`h1`–`h4`), and `prefers-reduced-motion` CSS media query protection.
