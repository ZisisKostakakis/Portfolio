'use client';

import Reveal from '@/components/reveal';

interface SectionHeadingProps {
  index: string;
  eyebrow: string;
  children: React.ReactNode;
  description?: string;
  className?: string;
}

export default function SectionHeading({
  index,
  eyebrow,
  children,
  description,
  className = 'mb-16',
}: SectionHeadingProps) {
  return (
    <Reveal className={className}>
      <p className="font-mono text-sm tracking-widest uppercase mb-4">
        <span className="text-primary-violet">{index}</span>
        <span className="text-primary-gray-dark mx-2">{'//'}</span>
        <span className="text-primary-slate">{eyebrow}</span>
      </p>
      <h2 className="text-4xl sm:text-5xl font-bold text-primary-white">{children}</h2>
      {description && (
        <p className="text-lg text-primary-slate max-w-2xl mt-4 leading-relaxed">{description}</p>
      )}
    </Reveal>
  );
}
