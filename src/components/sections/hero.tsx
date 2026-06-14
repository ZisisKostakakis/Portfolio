'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { personalInfo, socialLinks } from '@/lib/data/personal';
import { Button } from '@/components/ui/button';

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] as const },
  },
};

export default function HeroSection() {
  const prefersReducedMotion = useReducedMotion();
  const [firstName, ...restName] = personalInfo.name.split(' ');

  return (
    <section className="relative min-h-screen flex items-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-mesh pointer-events-none" />
      <div
        className="absolute inset-0 bg-grid-lines bg-grid pointer-events-none [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,black_30%,transparent_100%)]"
        aria-hidden="true"
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-16 py-24">
        {/* Left column */}
        <motion.div
          className="flex flex-col justify-center space-y-8"
          variants={container}
          initial={prefersReducedMotion ? false : 'hidden'}
          animate="show"
        >
          <motion.div variants={item} className="flex items-center gap-2">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
            </span>
            <span className="font-mono text-sm text-green-400">Available for work</span>
          </motion.div>

          <motion.div variants={item}>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 tracking-tight">
              <span className="text-primary-white">{firstName}</span>{' '}
              <span className="text-gradient">{restName.join(' ')}</span>
            </h1>
            <p className="text-2xl sm:text-3xl font-display font-semibold text-primary-white-soft mb-6">
              {personalInfo.title}
            </p>
            <p className="text-lg text-primary-slate max-w-xl leading-relaxed">
              {personalInfo.tagline}
            </p>
          </motion.div>

          <motion.div variants={item} className="flex flex-col sm:flex-row gap-4">
            <a href="#projects">
              <Button variant="gradient" size="lg">
                View Work
              </Button>
            </a>
            <a href="#contact">
              <Button variant="outline" size="lg">
                Get In Touch
              </Button>
            </a>
          </motion.div>

          <motion.div variants={item} className="flex items-center gap-4 pt-2">
            {socialLinks.map((social) => (
              <Link
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-slate hover:text-primary-gold hover:-translate-y-0.5 transition-all duration-200"
                aria-label={social.ariaLabel}
              >
                {social.name === 'LinkedIn' && (
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                )}
                {social.name === 'GitHub' && (
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                )}
              </Link>
            ))}
          </motion.div>
        </motion.div>

        {/* Right column - Code block */}
        <motion.div
          className="hidden lg:flex items-center justify-center"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 32, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <div className="relative w-full max-w-lg group">
            {/* Glow behind terminal */}
            <div className="absolute -inset-1 bg-gradient-gold rounded-xl opacity-15 blur-lg group-hover:opacity-25 transition-opacity duration-500 pointer-events-none" />

            <div className="relative bg-primary-navy-light/90 backdrop-blur-sm border border-primary-gray-dark rounded-xl overflow-hidden shadow-custom-lg">
              <div className="flex items-center gap-2 px-4 py-3 bg-primary-gray/50 border-b border-primary-gray-dark">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="ml-2 font-mono text-xs text-primary-slate">engineer.ts</span>
              </div>
              <pre className="p-6 text-sm font-mono leading-relaxed overflow-x-auto">
                <code>
                  <span className="text-primary-gold">const</span>{' '}
                  <span className="text-blue-400">engineer</span>{' '}
                  <span className="text-primary-charcoal">=</span> {'{'}
                  {'\n'} <span className="text-green-400">name</span>:{' '}
                  <span className="text-amber-300">&quot;{personalInfo.name}&quot;</span>,{'\n'}{' '}
                  <span className="text-green-400">role</span>:{' '}
                  <span className="text-amber-300">&quot;{personalInfo.title}&quot;</span>,{'\n'}{' '}
                  <span className="text-green-400">location</span>:{' '}
                  <span className="text-amber-300">&quot;{personalInfo.location}&quot;</span>,{'\n'}{' '}
                  <span className="text-green-400">skills</span>: [{'\n'}{' '}
                  <span className="text-amber-300">&quot;Python&quot;</span>,{' '}
                  <span className="text-amber-300">&quot;AWS&quot;</span>,{' '}
                  <span className="text-amber-300">&quot;Terraform&quot;</span>,{'\n'}{' '}
                  <span className="text-amber-300">&quot;TypeScript&quot;</span>,{' '}
                  <span className="text-amber-300">&quot;Docker&quot;</span>,{'\n'} ],
                  {'\n'} <span className="text-green-400">available</span>:{' '}
                  <span className="text-primary-gold">true</span>,{'\n'}
                  {'}'};
                  <span className="inline-block w-2 h-4 ml-1 align-middle bg-primary-gold animate-blink" />
                </code>
              </pre>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 text-primary-slate hover:text-primary-gold transition-colors duration-200"
        initial={prefersReducedMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        aria-label="Scroll to about section"
      >
        <span className="font-mono text-xs tracking-widest uppercase">Scroll</span>
        <span className="block w-px h-8 bg-gradient-to-b from-primary-gold to-transparent" />
      </motion.a>
    </section>
  );
}
