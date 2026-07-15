'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { personalInfo } from '@/lib/data/personal';
import { ArrowIcon } from '@/components/icons';
import { ButtonLink } from '@/components/ui/button';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] as const },
  },
};

export default function HeroSection() {
  const prefersReducedMotion = useReducedMotion();
  const [firstName, ...restName] = personalInfo.name.split(' ');

  return (
    <section className="relative flex min-h-screen flex-col justify-center overflow-hidden px-4 sm:px-6">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-1/4 left-[8%] h-[34rem] w-[34rem] rounded-full bg-accent/[0.08] blur-[130px]" />
        <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_75%_60%_at_50%_40%,black_25%,transparent_100%)]" />
      </div>

      <div className="relative mx-auto grid w-full max-w-6xl gap-14 pt-32 pb-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        {/* Left */}
        <motion.div
          className="flex flex-col justify-center"
          variants={container}
          initial={prefersReducedMotion ? false : 'hidden'}
          animate="show"
        >
          <motion.div variants={item} className="mb-7">
            <span className="font-mono text-sm text-muted">{personalInfo.location}</span>
          </motion.div>

          <motion.h1
            variants={item}
            className="font-display text-[13vw] leading-[0.95] font-bold tracking-tight text-ink sm:text-7xl lg:text-[5.2rem]"
          >
            {firstName}
            <br />
            <span className="text-accent">{restName.join(' ')}</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 font-display text-xl font-semibold text-ink-soft sm:text-2xl"
          >
            {personalInfo.title}
          </motion.p>

          <motion.p variants={item} className="mt-4 max-w-xl text-lg leading-relaxed text-muted">
            {personalInfo.tagline}
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-4">
            <ButtonLink href="#projects" size="lg">
              Explore my work
              <ArrowIcon className="rotate-90" />
            </ButtonLink>
            <ButtonLink href="#contact" variant="outline" size="lg">
              Get in touch
            </ButtonLink>
          </motion.div>
        </motion.div>

        {/* Right: summary card */}
        <motion.div
          className="hidden items-center lg:flex"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <div className="glass w-full rounded-2xl p-8">
            <h2 className="font-mono text-xs tracking-[0.2em] text-muted uppercase">
              At a glance
            </h2>
            <dl className="mt-6 space-y-5">
              <div>
                <dt className="font-mono text-xs text-muted">Role</dt>
                <dd className="mt-1 text-sm text-ink-soft">{personalInfo.title}</dd>
              </div>
              <div>
                <dt className="font-mono text-xs text-muted">Location</dt>
                <dd className="mt-1 text-sm text-ink-soft">{personalInfo.location}</dd>
              </div>
              <div>
                <dt className="font-mono text-xs text-muted">Stack</dt>
                <dd className="mt-1 text-sm text-ink-soft">
                  Python, AWS, Terraform, TypeScript, Docker
                </dd>
              </div>
              <div>
                <dt className="font-mono text-xs text-muted">Focus</dt>
                <dd className="mt-1 text-sm text-ink-soft">
                  Cloud architecture, automation, AI/LLM
                </dd>
              </div>
            </dl>
          </div>
        </motion.div>
      </div>

    </section>
  );
}
