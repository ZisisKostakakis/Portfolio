'use client';

import { useRef, useState, ReactNode, MouseEvent } from 'react';
import { cn } from '@/lib/cn';

interface SpotlightCardProps {
  children: ReactNode;
  className?: string;
  /** CSS color for the spotlight radial highlight. */
  glow?: string;
}

/** Card with a mouse-tracking radial highlight and hover border shift. */
export default function SpotlightCard({
  children,
  className,
  glow = 'rgba(124, 107, 255, 0.14)',
}: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: -999, y: -999 });
  const [hovering, setHovering] = useState(false);

  const onMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      className={cn(
        'relative overflow-hidden rounded-2xl border border-line-soft bg-surface transition-colors duration-300 hover:border-line',
        className
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: hovering ? 1 : 0,
          background: `radial-gradient(480px circle at ${pos.x}px ${pos.y}px, ${glow}, transparent 65%)`,
        }}
      />
      <div className="relative h-full">{children}</div>
    </div>
  );
}
