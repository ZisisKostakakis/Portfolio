'use client';

import React, { useEffect, useState, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navItems } from '@/lib/data/personal';
import { cn } from '@/lib/utils/cn';

const sectionIds = ['about', 'experience', 'projects', 'contact'];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // IntersectionObserver for active section highlighting
  useEffect(() => {
    if (!isHomePage) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    );

    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, [isHomePage]);

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

  const isActive = (href: string) => {
    if (!isHomePage) return false;
    const id = href.replace('#', '');
    return activeSection === id;
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#') && isHomePage) {
      e.preventDefault();
      const el = document.getElementById(href.replace('#', ''));
      if (el) {
        const navHeight = window.innerWidth >= 640 ? 80 : 64;
        const top = el.getBoundingClientRect().top + window.scrollY - navHeight;
        window.scrollTo({ top, behavior: 'smooth' });
      }
      setIsMobileMenuOpen(false);
    }
  };

  const scrollToTop = (e: React.MouseEvent) => {
    if (isHomePage) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav
        className={cn(
          'fixed w-full top-0 z-50 transition-all duration-200',
          isScrolled ? 'bg-primary-navy/95 backdrop-blur-md shadow-custom-lg' : 'bg-transparent'
        )}
      >
        <div className="max-w-screen-xl flex items-center justify-between mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20">
          <Link
            href="/"
            onClick={scrollToTop}
            className="flex items-center group"
            aria-label="Zisis Kostakakis - Home"
          >
            <span className="text-xl sm:text-2xl font-semibold text-primary-white transition-colors duration-150 group-hover:text-primary-gold">
              ZK
              <span className="hidden sm:inline ml-1"> · Zisis Kostakakis</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4">
            <ul className="flex items-center space-x-1 lg:space-x-2">
              {navItems.map((item) => {
                const active = isActive(item.href);
                const linkHref = isHomePage ? item.href : `/${item.href}`;
                return (
                  <li key={item.href}>
                    <a
                      href={linkHref}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className={cn(
                        'relative px-4 py-2 text-base lg:text-lg font-medium transition-colors duration-150',
                        active ? 'text-primary-gold' : 'text-primary-white hover:text-primary-gold'
                      )}
                    >
                      {item.label}
                      {active && (
                        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-gold" />
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={toggleMobileMenu}
            className="inline-flex items-center justify-center p-2 rounded-lg md:hidden text-primary-white hover:bg-primary-gray-light transition-colors duration-150"
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
          <div
            className="fixed inset-0 bg-black/60 z-40 md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div
            id="mobile-menu"
            className="fixed top-16 sm:top-20 right-0 bottom-0 w-64 bg-primary-navy border-l border-primary-gray-dark z-40 md:hidden"
          >
            <nav className="flex flex-col p-6 space-y-2" aria-label="Mobile navigation">
              {navItems.map((item) => {
                const active = isActive(item.href);
                const linkHref = isHomePage ? item.href : `/${item.href}`;
                return (
                  <a
                    key={item.href}
                    href={linkHref}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={cn(
                      'block px-4 py-3 rounded-lg text-lg font-medium transition-colors duration-150',
                      active
                        ? 'bg-primary-gold text-white'
                        : 'text-primary-white hover:bg-primary-gray-light hover:text-primary-gold'
                    )}
                  >
                    {item.label}
                  </a>
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
