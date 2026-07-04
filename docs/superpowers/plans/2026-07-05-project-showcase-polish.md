# Project Showcase Polish Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace AI-art project thumbnails with a consistent framed-screenshot/terminal-cover system, add a featured-project spotlight, add a no-JS reveal fallback, and clean up token naming.

**Architecture:** A new `ProjectThumb` client component renders one of three variants (`browser`, `window`, `terminal`) selected by a new `thumb` field on `Project`. `ProjectCard` gains a `featured` variant used by `ProjectsSection` to render the top two projects as full-width horizontal cards above the grid.

**Tech Stack:** Next.js 15 (App Router), React 19, Tailwind 3, framer-motion, next/image.

## Global Constraints

- No new dependencies.
- No test framework exists in this repo; verification is `npm run build`, `npm run lint`, and a Playwright visual pass of the built site.
- Site is dark-only; all colors come from Tailwind tokens in `tailwind.config.js`.
- Screenshots live in `public/images/thumbs/` as PNG, captured at 1440×900.

---

### Task 1: Capture live-app screenshots

**Files:**
- Create: `public/images/thumbs/transport-info.png`
- Create: `public/images/thumbs/date-calculator.png`
- Create: `public/images/thumbs/stackfordev.png`
- Create: `public/images/thumbs/property-pal.png`

**Interfaces:**
- Produces: the four PNG paths above, consumed by Task 2 data entries.

- [ ] **Step 1: Capture each live app** with Playwright (browser tools in the main session) at viewport 1440×900, after page settle:
  - `https://transportinfo.zisiskostakakis.com` → `public/images/thumbs/transport-info.png`
  - `https://date-calc.zisiskostakakis.com` → `public/images/thumbs/date-calculator.png`
  - `https://stackfordev.zisiskostakakis.com` → `public/images/thumbs/stackfordev.png`
  - `https://property-pal-analyser.zisiskostakakis.com/` → `public/images/thumbs/property-pal.png`

  Viewport screenshot only (not fullPage). If a site shows a cookie banner or loading state, wait/dismiss before capturing.

- [ ] **Step 2: Verify** all four files exist and are non-trivial size:

Run: `ls -la public/images/thumbs/`
Expected: 4 PNGs, each > 20 KB.

- [ ] **Step 3: Commit**

```bash
git add public/images/thumbs
git commit -m "feat(projects): add live-app screenshots for card thumbnails"
```

---

### Task 2: Thumb types and project data

**Files:**
- Modify: `src/lib/types/index.ts` (Project interface)
- Modify: `src/lib/data/projects.ts` (all 8 entries)

**Interfaces:**
- Produces: `ProjectThumbSpec`, `TerminalLine` types and `Project.thumb` / `Project.featured` fields consumed by Tasks 3–4.

- [ ] **Step 1: Add types.** In `src/lib/types/index.ts`, replace the `image?: string;` line in `Project` with `thumb?: ProjectThumbSpec;` and `featured?: boolean;`, and add above the interface:

```ts
export interface TerminalLine {
  prompt?: boolean; // render with leading "$"
  accent?: boolean; // success/green styling
  text: string;
}

export type ProjectThumbSpec =
  | { kind: 'browser'; src: string; domain: string }
  | { kind: 'window'; src: string; title: string }
  | { kind: 'terminal'; title: string; lines: TerminalLine[] };
```

- [ ] **Step 2: Update data.** In `src/lib/data/projects.ts`, delete every `image:` line and add per project:

```ts
// connect-5
thumb: { kind: 'window', src: '/images/Connect-5-two.png', title: 'Connect-5' },

// camera-ocr
thumb: {
  kind: 'terminal',
  title: 'xcodebuild — CameraOCR',
  lines: [
    { prompt: true, text: 'xcodebuild -scheme CameraOCR build' },
    { text: '▸ Linking Vision.framework' },
    { text: '▸ Compiling EmotionClassifier.mlmodel' },
    { accent: true, text: '** BUILD SUCCEEDED **' },
  ],
},

// transport-info
thumb: { kind: 'browser', src: '/images/thumbs/transport-info.png', domain: 'transportinfo.zisiskostakakis.com' },

// date-calculator
thumb: { kind: 'browser', src: '/images/thumbs/date-calculator.png', domain: 'date-calc.zisiskostakakis.com' },

// student-loan-checker
thumb: {
  kind: 'terminal',
  title: 'python — student-loan-checker',
  lines: [
    { prompt: true, text: 'python check_loan.py --headless' },
    { text: '✓ Logged in · 2FA passed' },
    { text: '✓ Scraped balance, repayments, interest' },
    { accent: true, text: 'Done in 14.2s' },
  ],
},

// homelab-media  (also add: featured: true)
thumb: {
  kind: 'terminal',
  title: 'docker compose ps',
  lines: [
    { prompt: true, text: 'docker compose ps --format table' },
    { text: 'gluetun       Up 9 days (healthy)' },
    { text: 'plex          Up 9 days (healthy)' },
    { text: 'sonarr        Up 9 days (healthy)  via vpn' },
    { accent: true, text: '24/24 services healthy · 0 manual restarts' },
  ],
},

// stackfordev  (also add: featured: true)
thumb: { kind: 'browser', src: '/images/thumbs/stackfordev.png', domain: 'stackfordev.zisiskostakakis.com' },

// property-pal-scraper
thumb: { kind: 'browser', src: '/images/thumbs/property-pal.png', domain: 'property-pal-analyser.zisiskostakakis.com' },
```

- [ ] **Step 3: Typecheck**

Run: `npx tsc --noEmit`
Expected: only an error in `src/components/project-card.tsx` about `project.image` no longer existing (fixed in Task 3). No errors in data/types files.

- [ ] **Step 4: Commit** (allowed with the known card error pending Task 3 only if committing both tasks together; otherwise defer commit to Task 3.)

---

### Task 3: ProjectThumb component wired into ProjectCard

**Files:**
- Create: `src/components/project-thumb.tsx`
- Modify: `src/components/project-card.tsx:26-60` (thumbnail block)

**Interfaces:**
- Consumes: `ProjectThumbSpec`, `TerminalLine` from `@/lib/types`.
- Produces: `default export ProjectThumb({ thumb, alt }: { thumb: ProjectThumbSpec; alt: string })`.

- [ ] **Step 1: Create `src/components/project-thumb.tsx`:**

```tsx
import Image from 'next/image';
import { ProjectThumbSpec } from '@/lib/types';

function ChromeDots() {
  return (
    <div className="flex items-center gap-1.5">
      <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
      <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
      <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
    </div>
  );
}

export default function ProjectThumb({
  thumb,
  alt,
}: {
  thumb: ProjectThumbSpec;
  alt: string;
}) {
  return (
    <div className="flex h-full flex-col bg-primary-navy-dark">
      <div className="flex items-center gap-2 px-3 py-2 bg-primary-gray/50 border-b border-primary-gray-dark shrink-0">
        <ChromeDots />
        {thumb.kind === 'browser' && (
          <span className="mx-auto max-w-[75%] truncate rounded bg-primary-navy/60 px-2 py-0.5 font-mono text-[10px] text-primary-slate">
            {thumb.domain}
          </span>
        )}
        {thumb.kind !== 'browser' && (
          <span className="ml-1 truncate font-mono text-[10px] text-primary-slate">
            {thumb.title}
          </span>
        )}
      </div>

      {thumb.kind === 'terminal' ? (
        <pre className="flex-1 overflow-hidden p-4 font-mono text-xs leading-relaxed">
          {thumb.lines.map((line, i) => (
            <div key={i} className="truncate">
              {line.prompt && <span className="text-primary-gold">$ </span>}
              <span className={line.accent ? 'text-green-400' : 'text-primary-charcoal'}>
                {line.text}
              </span>
            </div>
          ))}
        </pre>
      ) : (
        <div className="relative flex-1">
          <Image
            src={thumb.src}
            alt={alt}
            fill
            className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
    </div>
  );
}
```

Note: `text-primary-gold` here is renamed to `text-primary-violet` by Task 6's sed; write it as `primary-gold` so the file matches the codebase state at this task.

- [ ] **Step 2: Rewire `project-card.tsx`.** Replace the `project.image ? <Image .../> : <fallback>` block (lines 28–46) with:

```tsx
{project.thumb ? (
  <ProjectThumb thumb={project.thumb} alt={project.title} />
) : (
  <div className="absolute inset-0 bg-dot-grid bg-dots flex flex-col items-center justify-center gap-3">
    <span className="text-4xl font-display font-bold text-primary-gold/40">
      {project.title
        .split(' ')
        .map((w) => w[0])
        .join('')
        .slice(0, 2)}
    </span>
    <span className="font-mono text-xs text-primary-slate/60">~/{project.id}</span>
  </div>
)}
```

Remove the now-unused `import Image from 'next/image';` and add `import ProjectThumb from '@/components/project-thumb';`. Keep the legibility gradient + category badge overlay, but only render the gradient for non-terminal thumbs (the gradient washes out terminal text):

```tsx
{project.thumb?.kind !== 'terminal' && (
  <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-primary-navy-light to-transparent pointer-events-none" />
)}
```

- [ ] **Step 3: Typecheck + build**

Run: `npx tsc --noEmit && npm run build`
Expected: PASS.

- [ ] **Step 4: Commit**

```bash
git add src/lib/types/index.ts src/lib/data/projects.ts src/components/project-thumb.tsx src/components/project-card.tsx
git commit -m "feat(projects): consistent thumb system (framed screenshots + terminal covers)"
```

---

### Task 4: Featured spotlight

**Files:**
- Modify: `src/components/project-card.tsx` (add `featured` prop)
- Modify: `src/components/sections/projects.tsx`

**Interfaces:**
- Consumes: `Project.featured` from Task 2, `ProjectCard` from Task 3.
- Produces: `ProjectCard({ project, className, featured }: { project: Project; className?: string; featured?: boolean })`.

- [ ] **Step 1: Add `featured` prop to `ProjectCard`.** When `featured` is true: outer layout becomes a horizontal grid on `md+`, thumb keeps chrome, description is not clamped as tightly, more badges show.

```tsx
interface ProjectCardProps {
  project: Project;
  className?: string;
  featured?: boolean;
}

export default function ProjectCard({ project, className, featured = false }: ProjectCardProps) {
  return (
    <Link href={project.href} className="block h-full group">
      <div
        className={cn(
          'relative h-full rounded-xl overflow-hidden',
          'bg-primary-navy-light border border-primary-gray-dark shadow-custom',
          'transition-all duration-200',
          'hover:shadow-glow hover:border-primary-gold/30 hover:-translate-y-2',
          featured && 'md:grid md:grid-cols-[6fr_5fr]',
          className
        )}
      >
        <div
          className={cn(
            'relative overflow-hidden border-primary-gray-dark',
            featured ? 'h-56 md:h-full border-b md:border-b-0 md:border-r' : 'h-44 border-b'
          )}
        >
          {/* thumbnail block from Task 3, unchanged */}
        </div>

        <div className="relative p-6 flex flex-col">
          {/* title/desc/badges unchanged except: */}
          {/* description: className={cn('text-primary-slate mb-4 flex-grow', featured ? 'line-clamp-4' : 'line-clamp-3')} */}
          {/* badges: project.technologies.slice(0, featured ? 6 : 3) and the "+N" badge count adjusted accordingly */}
        </div>
      </div>
    </Link>
  );
}
```

The `+N` overflow badge becomes `+{project.technologies.length - (featured ? 6 : 3)}` guarded by `project.technologies.length > (featured ? 6 : 3)`.

- [ ] **Step 2: Split the section.** Replace the grid in `src/components/sections/projects.tsx`:

```tsx
const featured = projects.filter((p) => p.featured);
const rest = projects.filter((p) => !p.featured);

// inside the max-w-7xl container, after SectionHeading:
<div className="space-y-8 mb-12">
  {featured.map((project, i) => (
    <Reveal key={project.id} delay={i * 0.08}>
      <ProjectCard project={project} featured />
    </Reveal>
  ))}
</div>

<div className="grid gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-3">
  {rest.map((project, i) => (
    <Reveal key={project.id} delay={(i % 3) * 0.08} className="h-full">
      <ProjectCard project={project} />
    </Reveal>
  ))}
</div>
```

- [ ] **Step 3: Build**

Run: `npm run build`
Expected: PASS.

- [ ] **Step 4: Commit**

```bash
git add src/components/project-card.tsx src/components/sections/projects.tsx
git commit -m "feat(projects): featured spotlight cards for top projects"
```

---

### Task 5: Reveal no-JS fallback

**Files:**
- Modify: `src/components/reveal.tsx` (add `data-reveal`)
- Modify: `src/app/layout.tsx` (noscript style)

**Interfaces:** none consumed by later tasks.

- [ ] **Step 1:** In `reveal.tsx`, add `data-reveal` to the `motion.div`:

```tsx
<motion.div data-reveal className={className} ...>
```

- [ ] **Step 2:** In `src/app/layout.tsx`, inside `<body>` (top), add:

```tsx
<noscript>
  <style>{`[data-reveal]{opacity:1!important;transform:none!important}`}</style>
</noscript>
```

- [ ] **Step 3: Build**

Run: `npm run build`
Expected: PASS.

- [ ] **Step 4: Commit**

```bash
git add src/components/reveal.tsx src/app/layout.tsx
git commit -m "fix(a11y): show scroll-reveal content without JavaScript"
```

---

### Task 6: Token rename + dependency/asset cleanup

**Files:**
- Modify: `tailwind.config.js` (gold→violet keys; drop duplicate `gradient-gold`)
- Modify: all files listed by `grep -rl "primary-gold\|gradient-gold" src`
- Modify: `package.json` (remove `next-themes`)
- Delete: superseded AI-art images in `public/images`

- [ ] **Step 1: Rename usages:**

```bash
grep -rl "primary-gold\|gradient-gold" src | xargs sed -i '' 's/primary-gold/primary-violet/g; s/gradient-gold/gradient-violet/g'
```

- [ ] **Step 2: Rename tokens in `tailwind.config.js`:** `gold:` → `violet:`, `'gold-light':` → `'violet-light':`, `'gold-dark':` → `'violet-dark':`; delete the `'gradient-gold':` line (identical `'gradient-violet'` already exists). Check for any other `gold` references (e.g. `shadow-glow`, `animate-blink` keyframe colors) and update.

- [ ] **Step 3: Remove `next-themes`:**

```bash
npm uninstall next-themes
```

- [ ] **Step 4: Delete superseded images** — first verify each is unreferenced (`grep -rn "<name>" src`), then delete:

```bash
git rm public/images/Homelab-Media-banner.png public/images/Homelab-Media.png \
  public/images/Camera-OCR.png public/images/Property-Pal-Scraper.png \
  public/images/StackForDev-banner.png public/images/Student-Loan-Checker.png \
  public/images/Date-Calculator.png public/images/Transport-Info.png \
  public/images/Connect-5-one.png
```

Keep `Connect-5-two.png` (card + detail page) and `StackForDev.png` (detail page).

- [ ] **Step 5: Build + grep check**

Run: `npm run build && grep -rn "primary-gold\|gradient-gold" src tailwind.config.js`
Expected: build PASS; grep returns nothing.

- [ ] **Step 6: Commit**

```bash
git add -A
git commit -m "chore: rename gold tokens to violet, drop next-themes, remove AI-art images"
```

---

### Task 7: Visual verification

**Files:** none.

- [ ] **Step 1:** `npm run build && npm run start` (or `npm run dev`), then Playwright pass at 1440×900 and 390×844 on `http://localhost:3000`:
  - All 8 project thumbs render (4 browser-framed screenshots, 1 window screenshot, 3 terminal covers).
  - Featured cards render horizontally on desktop, stacked on mobile.
  - No console errors; no layout shift in the projects section.
- [ ] **Step 2:** Confirm noscript path: fetch page HTML, verify `[data-reveal]` noscript style present.
- [ ] **Step 3:** `npm run lint` → PASS.
