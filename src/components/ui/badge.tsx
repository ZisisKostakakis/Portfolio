import { HTMLAttributes } from 'react';
import { cn } from '@/lib/cn';

type Variant = 'accent' | 'neutral' | 'outline';

const variants: Record<Variant, string> = {
  accent: 'bg-accent/15 text-accent-soft border border-accent/40',
  neutral: 'bg-white/5 text-ink-soft border border-line-soft',
  outline: 'border border-line text-muted',
};

export function Badge({
  className,
  variant = 'neutral',
  ...props
}: HTMLAttributes<HTMLSpanElement> & { variant?: Variant }) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-3 py-1 font-mono text-xs tracking-wide whitespace-nowrap',
        variants[variant],
        className
      )}
      {...props}
    />
  );
}
