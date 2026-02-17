'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-primary-navy px-4">
      <div className="text-center max-w-2xl mx-auto">
        <div className="mb-8">
          <h1 className="text-9xl sm:text-[12rem] font-bold text-gradient">404</h1>
        </div>

        <div className="space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-white">Page Not Found</h2>
          <p className="text-lg sm:text-xl text-primary-slate max-w-md mx-auto">
            Oops! The page you&apos;re looking for seems to have wandered off into the digital void.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link href="/">
              <Button variant="gradient" size="lg">
                &larr; Back to Home
              </Button>
            </Link>
            <Link href="/#contact">
              <Button variant="outline" size="lg">
                Contact Me
              </Button>
            </Link>
          </div>

          <div className="pt-8 border-t border-primary-gray-dark mt-8">
            <p className="text-sm text-primary-slate mb-4">You might be interested in:</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                href="/#about"
                className="text-primary-charcoal hover:text-primary-gold transition-colors duration-200 text-sm"
              >
                About Me
              </Link>
              <span className="text-primary-gray-dark">&bull;</span>
              <Link
                href="/projects/transport-info"
                className="text-primary-charcoal hover:text-primary-gold transition-colors duration-200 text-sm"
              >
                Transport Info
              </Link>
              <span className="text-primary-gray-dark">&bull;</span>
              <Link
                href="/projects/camera-ocr"
                className="text-primary-charcoal hover:text-primary-gold transition-colors duration-200 text-sm"
              >
                Camera OCR
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-gold/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary-gold/3 rounded-full blur-3xl" />
        </div>
      </div>
    </main>
  );
}
