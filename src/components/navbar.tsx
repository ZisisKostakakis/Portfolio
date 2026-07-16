'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, useScroll, useSpring } from 'framer-motion';
import { navItems, personalInfo } from '@/lib/data/personal';
import { cn } from '@/lib/cn';

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 28, mass: 0.4 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Scroll-spy over the homepage sections
  useEffect(() => {
    if (!isHome) return;
    const ids = navItems.map((n) => n.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        }
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [isHome]);

  const initials = personalInfo.name
    .split(' ')
    .map((w) => w[0])
    .join('')
    .toLowerCase();

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Scroll progress */}
      <motion.div
        className="absolute top-0 left-0 h-[2px] w-full origin-left bg-accent"
        style={{ scaleX: progress }}
        aria-hidden
      />

      <nav
        className={cn(
          'mx-auto mt-4 flex max-w-6xl items-center justify-between rounded-full px-5 py-2.5 transition-all duration-300 sm:px-6',
          scrolled ? 'glass mx-4 shadow-[0_8px_40px_rgba(0,0,0,0.45)] sm:mx-auto' : 'bg-transparent'
        )}
      >
        <Link
          href="/"
          className="group flex items-center gap-2 font-mono text-lg font-bold text-ink"
          aria-label="Back to homepage"
        >
          <span className="text-accent transition-transform duration-300 group-hover:rotate-90">
            ✦
          </span>
          {initials}
          <span className="text-accent">.</span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const href = isHome ? item.href : `/${item.href}`;
            const isActive = isHome && active === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={href}
                  className={cn(
                    'relative rounded-full px-4 py-2 text-sm transition-colors duration-200',
                    isActive ? 'text-accent' : 'text-muted hover:text-ink'
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-accent/10"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="relative">{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>

        <a
          href={isHome ? '#contact' : '/#contact'}
          className="hidden rounded-full border border-accent/40 px-4 py-1.5 font-mono text-xs text-accent transition-all duration-200 hover:bg-accent hover:text-[#0b0d0e] md:block"
        >
          hire me
        </a>

        {/* Mobile toggle */}
        <button
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span
            className={cn(
              'h-px w-5 bg-ink transition-transform duration-200',
              menuOpen && 'translate-y-[3.5px] rotate-45'
            )}
          />
          <span
            className={cn(
              'h-px w-5 bg-ink transition-transform duration-200',
              menuOpen && '-translate-y-[3.5px] -rotate-45'
            )}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="glass mx-4 mt-2 rounded-2xl p-4 md:hidden">
          <ul className="flex flex-col gap-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={isHome ? item.href : `/${item.href}`}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-xl px-4 py-3 text-ink-soft transition-colors hover:bg-white/5 hover:text-accent"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
