# Portfolio

Personal site at https://www.zisiskostakakis.com/. A ground-up rebuild of the previous portfolio with the same content and data and a new visual identity.

## Stack

- Next.js 15 (App Router, static generation for all pages)
- React 19 + TypeScript
- Tailwind CSS v4 (CSS-first `@theme` config, no `tailwind.config.js`)
- Framer Motion for reveal/stagger animations (respects `prefers-reduced-motion`)
- Mermaid for architecture diagrams on project case-study pages
- Resend for contact form email delivery

## Structure

- `src/lib/data/` holds all content: personal info, projects, experience, skills, and project case studies. Everything on screen derives from these files.
- `src/components/sections/` contains the homepage sections (hero, marquee, about, experience, projects, contact).
- `src/components/project-detail.tsx` is the case-study page template: sticky sidebar, features grid, Mermaid architecture diagrams, demos, screenshots, and prev/next navigation.
- `src/app/projects/[slug]/` are the statically generated case-study routes.

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
