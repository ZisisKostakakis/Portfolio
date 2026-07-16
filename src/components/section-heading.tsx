import { ReactNode } from 'react';
import Reveal from '@/components/reveal';

interface SectionHeadingProps {
  index: string;
  eyebrow: string;
  children: ReactNode;
  description?: string;
}

export default function SectionHeading({
  index,
  eyebrow,
  children,
  description,
}: SectionHeadingProps) {
  return (
    <Reveal className="mb-14 sm:mb-20">
      <div className="flex items-center gap-4 mb-5">
        <span className="font-mono text-sm text-accent">{index}</span>
        <span className="h-px w-16 bg-gradient-to-r from-accent to-transparent" />
        <span className="font-mono text-sm uppercase tracking-[0.25em] text-muted">{eyebrow}</span>
      </div>
      <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-ink">
        {children}
      </h2>
      {description && <p className="mt-5 max-w-2xl text-lg text-muted">{description}</p>}
    </Reveal>
  );
}
