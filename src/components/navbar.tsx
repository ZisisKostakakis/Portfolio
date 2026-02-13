'use client';

import React, { useEffect, useState, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navItems } from '@/lib/data/personal';
import { cn } from '@/lib/utils/cn';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMobileMenuOpen(false);
    };
    if (isMobileMenuOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
  }, []);

  const isActiveRoute = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <>
      <nav
        className={cn(
          'fixed w-full top-0 z-50 transition-all duration-200',
          isScrolled ? 'bg-primary-black/95 backdrop-blur-md shadow-custom-lg' : 'bg-primary-black'
        )}
      >
        <div className="max-w-screen-xl flex items-center justify-between mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20">
          {/* Logo / Brand */}
          <Link href="/" className="flex items-center group" aria-label="Zisis Kostakakis - Home">
            <span className="text-xl sm:text-2xl font-semibold text-primary-white transition-colors duration-150 group-hover:text-primary-gold">
              ZK
              <span className="hidden sm:inline ml-1"> · Zisis Kostakakis</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4">
            <ul className="flex items-center space-x-1 lg:space-x-2">
              {navItems.map((item) => {
                const isActive = isActiveRoute(item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        'relative px-4 py-2 text-base lg:text-lg font-medium transition-colors duration-150',
                        isActive
                          ? 'text-primary-gold'
                          : 'text-primary-white hover:text-primary-gold'
                      )}
                    >
                      {item.label}
                      {isActive && (
                        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-gold" />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={toggleMobileMenu}
            className="inline-flex items-center justify-center p-2 rounded-lg md:hidden text-primary-white hover:bg-primary-navy/50 transition-colors duration-150"
            aria-controls="mobile-menu"
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <span className="sr-only">
              {isMobileMenuOpen ? 'Close main menu' : 'Open main menu'}
            </span>
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span
                className={cn(
                  'block w-6 h-0.5 bg-current transition-all duration-200',
                  isMobileMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'
                )}
              />
              <span
                className={cn(
                  'block w-6 h-0.5 bg-current transition-all duration-200',
                  isMobileMenuOpen ? 'opacity-0' : 'opacity-100 my-1'
                )}
              />
              <span
                className={cn(
                  'block w-6 h-0.5 bg-current transition-all duration-200',
                  isMobileMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'
                )}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/60 z-40 md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Mobile Menu */}
          <div
            id="mobile-menu"
            className="fixed top-16 sm:top-20 right-0 bottom-0 w-64 bg-primary-black border-l border-primary-navy z-40 md:hidden"
          >
            <nav className="flex flex-col p-6 space-y-2" aria-label="Mobile navigation">
              {navItems.map((item) => {
                const isActive = isActiveRoute(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      'block px-4 py-3 rounded-lg text-lg font-medium transition-colors duration-150',
                      isActive
                        ? 'bg-primary-gold text-white'
                        : 'text-primary-white hover:bg-primary-navy hover:text-primary-gold'
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        </>
      )}
    </>
  );
};

export default React.memo(Navbar);
