# fable-5-portfolio

Redesigned portfolio for **https://www.zisiskostakakis.com/** — a ground-up rebuild of the original `Portfolio` project with the same content and data, and a new visual identity.

## Stack

- **Next.js 15** (App Router, static generation for all pages)
- **React 19** + TypeScript
- **Tailwind CSS v4** (CSS-first `@theme` config — no `tailwind.config.js`)
- **Framer Motion** for reveal/stagger animations (respects `prefers-reduced-motion`)
- **Mermaid** for architecture diagrams on project case-study pages
- **Resend** for the contact form email delivery

## Structure

- `src/lib/data/` — all content (personal info, projects, experience, skills, project case studies). Data is identical to the original portfolio; everything on screen derives from these files.
- `src/components/sections/` — homepage sections (hero, marquee, about, experience, projects, contact)
- `src/components/project-detail.tsx` — case-study page template with sticky sidebar, features grid, Mermaid architecture diagrams, demos, screenshots, and prev/next navigation
- `src/app/projects/[slug]/` — statically generated case-study routes

## Development

```bash
npm install
npm run dev
```

## Environment Variables

The contact form requires a [Resend](https://resend.com) API key:

```
RESEND_API_KEY=your_resend_api_key_here
```

Set it in `.env.local` for local development, or in Vercel project settings for production. Emails are sent to the address in `src/lib/data/personal.ts` (`business@zisiskostakakis.com`).
