import Link from 'next/link';
import { ButtonLink } from '@/components/ui/button';

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 text-center">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/3 left-1/2 h-[24rem] w-[24rem] -translate-x-1/2 rounded-full bg-accent/[0.06] blur-[120px]" />
        <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black_20%,transparent_100%)]" />
      </div>
      <div className="relative">
        <p className="font-mono text-sm text-accent">error 404</p>
        <h1 className="mt-4 font-display text-7xl font-bold text-ink sm:text-8xl">
          Page not found
        </h1>
        <p className="mx-auto mt-6 max-w-md text-lg text-muted">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="mt-10">
          <ButtonLink href="/" size="lg">
            Back to home
          </ButtonLink>
        </div>
        <p className="mt-8 font-mono text-xs text-faint">
          or check out{' '}
          <Link href="/#projects" className="text-accent hover:underline">
            my projects
          </Link>
        </p>
      </div>
    </main>
  );
}
