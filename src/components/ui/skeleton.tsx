import { cn } from '@/lib/utils/cn';

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Skeleton({ className, ...props }: SkeletonProps) {
  return (
    <div className={cn('animate-pulse rounded-md bg-primary-gray-dark/20', className)} {...props} />
  );
}

export function SkeletonCard() {
  return (
    <div className="rounded-xl overflow-hidden bg-white border border-primary-gray-dark shadow-custom p-6 space-y-4">
      <Skeleton className="h-4 w-20" />
      <Skeleton className="h-8 w-3/4" />
      <Skeleton className="h-20 w-full" />
      <div className="flex gap-2">
        <Skeleton className="h-6 w-16" />
        <Skeleton className="h-6 w-16" />
        <Skeleton className="h-6 w-16" />
      </div>
      <Skeleton className="h-10 w-32" />
    </div>
  );
}

export function SkeletonText({ lines = 3 }: { lines?: number }) {
  return (
    <div className="space-y-2">
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton key={i} className={cn('h-4', i === lines - 1 ? 'w-3/4' : 'w-full')} />
      ))}
    </div>
  );
}
