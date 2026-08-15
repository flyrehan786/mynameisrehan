# Rehan Shah — Portfolio

A simple, clean, soft, and modern personal portfolio built with **Angular 16** (standalone components).

## Requirements

- Node.js **^16.14** or **^18.10**
- npm 8+

## Get started

```bash
npm install
npm start
```

The dev server opens at http://localhost:4200.

## Build

```bash
npm run build
```

Production files are output to `dist/portfolio/`.

## Project structure

```
src/
├── app/
│   ├── components/
│   │   ├── nav/          # Sticky navigation with scroll-spy
│   │   ├── hero/         # Introduction & primary CTAs
│   │   ├── about/        # About me + at-a-glance facts
│   │   ├── skills/       # Grouped skill cards
│   │   ├── quote/        # Da Vinci quote & personal philosophy
│   │   ├── experience/   # Career timeline
│   │   ├── projects/     # Recent + past projects
│   │   ├── education/    # Academic qualifications
│   │   ├── contact/      # CTA & channels
│   │   └── footer/       # Footer
│   ├── app.component.ts  # Root layout
│   └── reveal.directive.ts # IntersectionObserver reveal animation
├── styles.scss           # Global tokens & typography
└── index.html
```

## Design system

- **Typography** — Fraunces (serif display) + Inter (sans body), loaded from Google Fonts
- **Palette** — warm neutrals (`#FAF8F4` background, `#1F2328` ink) with a calm sage accent (`#7C8D6E`)
- **Shape** — soft rounded corners, subtle 1px borders, whisper-light shadows
- **Motion** — restrained fade-and-rise transitions on scroll, honours `prefers-reduced-motion`
