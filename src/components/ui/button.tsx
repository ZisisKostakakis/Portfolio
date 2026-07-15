import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/cn';

type Variant = 'primary' | 'outline' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

const variants: Record<Variant, string> = {
  primary: 'bg-accent text-[#0b0d0e] font-semibold hover:brightness-110',
  outline:
    'border border-line text-ink hover:border-accent/60 hover:text-accent hover:bg-accent/5',
  ghost: 'text-muted hover:text-ink hover:bg-white/5',
};

const sizes: Record<Size, string> = {
  sm: 'h-9 px-4 text-sm',
  md: 'h-11 px-6 text-sm',
  lg: 'h-13 px-8 text-base',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:pointer-events-none disabled:opacity-50 cursor-pointer',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    />
  )
);
Button.displayName = 'Button';

/** Anchor styled identically to Button, for links. */
export function ButtonLink({
  className,
  variant = 'primary',
  size = 'md',
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement> & { variant?: Variant; size?: Size }) {
  return (
    <a
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    />
  );
}
