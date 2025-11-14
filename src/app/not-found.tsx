'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-primary-gray px-4">
      <div className="text-center max-w-2xl mx-auto">
        {/* Animated 404 */}
        <div className="mb-8">
          <h1 className="text-9xl sm:text-[12rem] font-bold text-gradient bg-gradient-orange bg-[length:200%_100%] animate-gradient">
            404
          </h1>
        </div>

        {/* Content */}
        <div className="space-y-6 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-black">
            Page Not Found
          </h2>
          <p className="text-lg sm:text-xl text-primary-navy/70 max-w-md mx-auto">
            Oops! The page you&apos;re looking for seems to have wandered off into the digital
            void.
          </p>

          {/* Navigation Options */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link href="/">
              <Button variant="gradient" size="lg">
                ← Back to Home
              </Button>
            </Link>
            <Link href="/Contact">
              <Button variant="outline" size="lg">
                Contact Me
              </Button>
            </Link>
          </div>

          {/* Helpful Links */}
          <div className="pt-8 border-t border-primary-gray-dark mt-8">
            <p className="text-sm text-primary-navy/60 mb-4">You might be interested in:</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                href="/About"
                className="text-primary-navy hover:text-primary-orange transition-colors duration-300 text-sm"
              >
                About Me
              </Link>
              <span className="text-primary-navy/40">•</span>
              <Link
                href="/Transport-Info"
                className="text-primary-navy hover:text-primary-orange transition-colors duration-300 text-sm"
              >
                Transport Info Project
              </Link>
              <span className="text-primary-navy/40">•</span>
              <Link
                href="/Camera-OCR"
                className="text-primary-navy hover:text-primary-orange transition-colors duration-300 text-sm"
              >
                Camera OCR Project
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-orange/10 rounded-full blur-3xl animate-blob" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary-navy/10 rounded-full blur-3xl animate-blob animation-delay-2000" />
        </div>
      </div>
    </main>
  );
}
