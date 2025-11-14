'use client';

import React, { useEffect, useState, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { navItems } from '@/lib/data/personal';
import { cn } from '@/lib/utils/cn';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Handle scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Handle Escape key to close mobile menu
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
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
          'fixed w-full top-0 z-50 transition-all duration-300',
          isScrolled ? 'bg-primary-black/95 backdrop-blur-md shadow-custom-lg' : 'bg-primary-black'
        )}
      >
        <div className="max-w-screen-xl flex items-center justify-between mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20">
          {/* Logo / Brand */}
          <Link href="/" className="flex items-center group" aria-label="Zisis Kostakakis - Home">
            <span className="text-xl sm:text-2xl font-semibold text-primary-white transition-colors duration-300 group-hover:text-primary-gold">
              <span className="inline-block transform transition-transform duration-300 group-hover:scale-105">
                ZK
              </span>
              <span className="hidden sm:inline-block ml-1"> · Zisis Kostakakis</span>
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
                        'relative px-4 py-2 text-base lg:text-lg font-medium transition-colors duration-300',
                        isActive
                          ? 'text-primary-gold'
                          : 'text-primary-white hover:text-primary-gold'
                      )}
                    >
                      {item.label}
                      {isActive && (
                        <motion.div
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-gold"
                          layoutId="navbar-indicator"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{
                            type: 'spring',
                            stiffness: 380,
                            damping: 30,
                          }}
                        />
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
            className="inline-flex items-center justify-center p-2 rounded-lg md:hidden text-primary-white hover:bg-primary-navy/50 transition-colors duration-300"
            aria-controls="mobile-menu"
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <span className="sr-only">
              {isMobileMenuOpen ? 'Close main menu' : 'Open main menu'}
            </span>
            {/* Animated Hamburger Icon */}
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span
                className={cn(
                  'block w-6 h-0.5 bg-current transition-all duration-300',
                  isMobileMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'
                )}
              />
              <span
                className={cn(
                  'block w-6 h-0.5 bg-current transition-all duration-300',
                  isMobileMenuOpen ? 'opacity-0' : 'opacity-100 my-1'
                )}
              />
              <span
                className={cn(
                  'block w-6 h-0.5 bg-current transition-all duration-300',
                  isMobileMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'
                )}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Mobile Menu */}
            <motion.div
              id="mobile-menu"
              className="fixed top-16 sm:top-20 right-0 bottom-0 w-64 bg-primary-black border-l border-primary-navy z-40 md:hidden"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
              <nav className="flex flex-col p-6 space-y-2" aria-label="Mobile navigation">
                {navItems.map((item, index) => {
                  const isActive = isActiveRoute(item.href);
                  return (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        className={cn(
                          'block px-4 py-3 rounded-lg text-lg font-medium transition-all duration-300',
                          isActive
                            ? 'bg-primary-gold text-white'
                            : 'text-primary-white hover:bg-primary-navy hover:text-primary-gold'
                        )}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default React.memo(Navbar);
