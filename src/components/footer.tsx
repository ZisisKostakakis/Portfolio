import Link from 'next/link';
import { personalInfo, navItems } from '@/lib/data/personal';

export default function Footer() {
  return (
    <footer className="relative border-t border-line-soft bg-surface/60">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <div>
            <p className="font-display text-xl font-bold text-ink">
              {personalInfo.name}
              <span className="text-accent">.</span>
            </p>
            <p className="mt-1 text-sm text-muted">{personalInfo.title}</p>
          </div>

          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={`/${item.href}`}
                    className="text-sm text-muted transition-colors hover:text-accent"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-3 border-t border-line-soft pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-faint">
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <Link href="/privacy" className="text-xs text-faint transition-colors hover:text-accent">
              Privacy Policy
            </Link>
            <a
              href="https://icons8.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-faint transition-colors hover:text-accent"
            >
              Icons by Icons8
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
