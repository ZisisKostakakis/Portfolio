# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website for Zisis Kostakakis built with Next.js 13 (using the App Router), React, TypeScript, and Tailwind CSS. The site showcases software engineering projects and technical skills, deployed at https://www.zisiskostakakis.com/

## Tech Stack

- **Framework**: Next.js 13.3.3 with App Router (`experimental.appDir` enabled)
- **Language**: TypeScript 5.0.4
- **Styling**: Tailwind CSS 3.3.2 with custom color palette and animations
- **Analytics**: Vercel Analytics
- **Deployment**: Vercel

## Common Commands

### Development
```bash
npm run dev        # Start development server (http://localhost:3000)
npm run build      # Build production bundle
npm start          # Start production server
npm run lint       # Run ESLint (next/core-web-vitals config)
```

## Architecture

### Directory Structure

- `src/app/` - Next.js 13 App Router pages
  - `layout.tsx` - Root layout with Navbar and Analytics
  - `page.tsx` - Home page with hero section and project cards
  - `About/page.tsx` - About page with collapsible technical skills sections
  - `Contact/page.tsx` - Contact page with social links
  - `[Project-Name]/page.tsx` - Individual project detail pages
  - `globals.css` - Global styles and Tailwind directives

- `src/components/` - Reusable React components
  - `navbar.tsx` - Client component with scroll effects and mobile menu
  - `cardlink.tsx` - Project card component with hover animations

- `public/` - Static assets
  - `images/` - Technology logos and icons
  - `videos/` - Video assets

### Design System

The site uses a custom Tailwind theme defined in `tailwind.config.js`:

**Color Palette** (primary namespace):
- `primary-black`: #000000 (backgrounds, text)
- `primary-navy`: #000000 (secondary backgrounds)
- `primary-orange`: #FCA311 (accent color, CTAs)
- `primary-gray`: #E5E5E5 (backgrounds, secondary text)
- `primary-white`: #FFFFFF (text on dark backgrounds)

**Custom Animations**:
- `fade-in` - 0.5s fade-in effect
- `slide-up` - 0.5s slide-up with fade
- `bounce-slow` - 50s slow bounce
- `pulse-slow` - 3s pulse

**Custom Shadows**:
- `shadow-custom` - Soft shadow with navy tint
- `shadow-custom-lg` - Larger shadow with navy tint

### Component Patterns

**Client Components**: Components using React hooks or browser APIs must have `"use client"` directive at the top (e.g., `navbar.tsx` uses scroll events and state, `About/page.tsx` uses useState for collapsible sections).

**Server Components**: Page components are server components by default unless they need client-side interactivity.

**Navigation**: The Navbar component is included in the root layout and appears on all pages with:
- Fixed positioning with scroll-based styling changes
- Mobile responsive hamburger menu
- Links to Home, About, and Contact pages

**Project Cards**: The home page uses the `CardLink` component to display project previews with hover effects and animations.

### Page Routing

Next.js 13 App Router uses file-based routing:
- `/` - Home page with project showcase
- `/About` - Skills and experience
- `/Contact` - Social links and email
- `/[Project-Name]` - Individual project pages (Connect-5, Camera-OCR, Transport-Info)

### Styling Approach

- Tailwind utility classes for all styling
- Custom animations defined in `tailwind.config.js` and applied via Tailwind utilities
- Responsive design using Tailwind breakpoints (sm:, md:, lg:)
- Dark theme with black/navy backgrounds and orange accents
- Hover effects and transitions on interactive elements
- Mobile-first responsive design

## Development Guidelines

### Adding New Pages
1. Create new directory under `src/app/[PageName]/`
2. Add `page.tsx` file in the new directory
3. Use TypeScript and follow existing patterns
4. Include responsive design (mobile-first)
5. Apply custom color palette and animations

### Adding Components
1. Place in `src/components/` directory
2. Use TypeScript with proper interfaces
3. Add `"use client"` directive if using hooks or browser APIs
4. Follow naming convention: lowercase filename, PascalCase component name
5. Export as default

### Styling
- Use Tailwind utility classes exclusively
- Reference custom colors via `primary-*` namespace
- Apply custom animations via `animate-*` classes
- Ensure responsive breakpoints for mobile/tablet/desktop
- Use `transition-*` utilities for smooth hover effects

### Images
- Place all images in `public/images/`
- Use Next.js `<Image>` component for optimization
- Specify width/height for proper aspect ratio
- Include descriptive alt text
