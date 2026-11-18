# XENedion — Integrated Enterprise Resource Planning Platform

> **"Your Business. Connected. Controlled. Informed."**

A complete, high-performance, responsive corporate website for **XENedion**, an integrated Enterprise Resource Planning (ERP) platform. Built with React.js (pure JavaScript and JSX), Vite, and modular component-level CSS.

---

## 🧭 Menu & Page Navigation Structure

The site implements the full 7-section navigation architecture:

1. **Home Page** (`/` or `#/home`) — Full platform overview, hero banner, the business challenge, core capabilities, and call-to-actions.
2. **About** (`#/about`) — Verbatim company narrative (*Enterprise Technology Designed Around the Way Businesses Work*), core principles (*Because Every Part of Your Business Matters*), and implementation methodology (*Understand. Connect. Control. Improve.*).
3. **Solutions** (`#/solutions`) — Detailed deep dive into all 9 enterprise functions with interactive spotlights and capability breakdowns.
4. **Industries** (`#/industries`) — Tailored operational workflows for **Retail**, **Distribution**, **Manufacturing**, **Garments**, and **Automotive**.
5. **Partners** (`#/partners`) — Comprehensive Partner Program pathways (Implementation, Advisory, and Technology integration).
6. **Resources** (`#/resources`) — Executive briefings, operational playbooks, and ERP evaluation FAQs.
7. **Contact** (`#/contact`) — Full interactive enquiry form with all 10 designated fields and submission states.

---

## 📂 Modular Component Directory Architecture

Every section is organized into its own dedicated directory containing its `.jsx` and `.css` files:

```text
src/components/
├── Navbar/
│   ├── Navbar.jsx
│   └── Navbar.css
├── Home/
│   ├── Home.jsx
│   └── Home.css
├── About/
│   ├── About.jsx
│   └── About.css
├── Solutions/
│   ├── Solutions.jsx
│   └── Solutions.css
├── Industries/
│   ├── Industries.jsx
│   └── Industries.css
├── Partners/
│   ├── Partners.jsx
│   └── Partners.css
├── Resources/
│   ├── Resources.jsx
│   └── Resources.css
├── Contact/
│   ├── Contact.jsx
│   └── Contact.css
└── Footer/
    ├── Footer.jsx
    └── Footer.css
```

---

## 🚀 Getting Started

### Installation

```bash
npm install
```

### Local Development Server

```bash
npm run dev
```

### Production Build

```bash
npm run build
```

The build compiles into the `dist/` directory with zero errors and zero warnings.

To preview the build locally:

```bash
npm run preview
```

---

## 🔒 Strict Compliance & Verification

- **100% Verbatim Content**: Every heading, sentence, bullet, and field from the official PDF documents is preserved word-for-word.
- **Zero TypeScript**: Pure JavaScript (`.jsx` and `.js`) only.
- **Original Logo**: Unaltered original logo (`public/assets/xenedion-logo.png`) preserved with high-contrast framing.
- **Attribution & Footer**: Powered by **Astrion Digital Private Limited**, © 2026 XENedion. All Rights Reserved.
