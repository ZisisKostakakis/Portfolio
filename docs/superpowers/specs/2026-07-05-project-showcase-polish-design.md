# Project Showcase Polish — Design

**Date:** 2026-07-05
**Status:** Approved scope (targeted polish; no full redesign)

## Problem

The site was recently design-refreshed and is in good shape. Remaining weaknesses,
found by visual audit of the live site (desktop + mobile + project detail pages):

1. Project card thumbnails are AI-generated neon images with baked-in text —
   stylistically inconsistent with the otherwise restrained dark/violet system.
2. All 8 projects render as equal cards in a flat grid; no hierarchy for the
   strongest work.
3. Sections use scroll-reveal (`opacity: 0` until in view), so content is
   invisible without JS.
4. Naming debt: `primary-gold` tokens are violet (`#7C3AED`); `next-themes` is
   an unused dependency.

Note: architecture-diagram legibility was originally in scope but
`mermaid-diagram.tsx` already implements a fullscreen zoom/pan lightbox — no
work needed.

## Design

### 1. ProjectThumb component (replaces image thumbnails)

New `src/components/project-thumb.tsx`. Variant chosen per project via a new
`thumb` field on `Project`:

```ts
type ProjectThumb =
  | { kind: 'browser'; src: string; domain: string }   // live web apps
  | { kind: 'window'; src: string; title: string }     // desktop apps
  | { kind: 'terminal'; title: string; lines: TerminalLine[] }; // no-UI projects

type TerminalLine = { prompt?: boolean; text: string; accent?: boolean };
```

- **browser** — real screenshot rendered inside CSS browser chrome (traffic-light
  dots + domain pill), full-bleed in the card thumb area. Used for: Transport
  Info, Date Calculator, StackForDev, PropertyPal Investment Analyzer.
  Screenshots captured from the live apps at 1440×900, saved to
  `public/images/thumbs/*.png`, served via `next/image`.
- **window** — same chrome without the domain pill. Used for: Connect 5
  (existing real screenshot `Connect-5-one.png`).
- **terminal** — code-rendered terminal cover: chrome bar with a mono title,
  body of 3–4 short mono lines defined in project data (e.g. `docker compose ps`
  output flavour for Homelab). Crisp at any DPI, no image asset. Used for:
  Homelab Media Stack, Student Loan Checker, CameraOCR.

The existing initials fallback in `project-card.tsx` remains for projects with
no `thumb`. Old AI-art PNGs are removed from `public/images` and `image` fields
dropped from project data.

### 2. Featured spotlight

- Add `featured: true` to Homelab Media Stack and StackForDev.
- `ProjectsSection` renders featured projects first as full-width horizontal
  cards (thumb left ~55%, content right: title, full description, up to 6 tech
  badges, View Project link), stacked vertically; remaining 6 projects keep the
  current 3-col grid below.
- On mobile the featured card collapses to the same vertical layout as a normal
  card.
- `ProjectCard` gains a `variant: 'featured' | 'default'` prop (or a separate
  `FeaturedProjectCard` if cleaner) — decision left to implementation, favouring
  least duplication.

### 3. Reveal no-JS fallback

`Reveal` adds `data-reveal` to its wrapper; `layout.tsx` gets:

```html
<noscript><style>[data-reveal]{opacity:1!important;transform:none!important}</style></noscript>
```

### 4. Hygiene

- Rename tokens in `tailwind.config.js` and all usages: `primary-gold*` →
  `primary-violet*`, `gradient-gold` → `gradient-violet`, `shadow-glow` colour
  refs unchanged. Mechanical sed across `src/`.
- Remove `next-themes` from `package.json`.

## Out of scope

Hero redesign, light mode, project detail page changes, copy changes.

## Testing / verification

- `npm run build` passes; `npm run lint` passes.
- Playwright visual pass of the live-built site (desktop 1440 + mobile 390):
  all 8 thumbs render, featured layout correct, no layout shift regressions.
- View page source (JS disabled) shows sections visible via noscript override.
