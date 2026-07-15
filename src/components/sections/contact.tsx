'use client';

import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { z } from 'zod';
import { personalInfo, socialLinks } from '@/lib/data/personal';
import SectionHeading from '@/components/section-heading';
import Reveal from '@/components/reveal';
import { Button } from '@/components/ui/button';
import { GitHubIcon, LinkedInIcon, ArrowIcon, CheckIcon } from '@/components/icons';
import { cn } from '@/lib/cn';

const fieldSchemas = {
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
} as const;

type FieldKey = keyof typeof fieldSchemas;

interface Step {
  key: FieldKey;
  question: string;
  hint: string;
  placeholder: string;
  type: 'text' | 'email' | 'textarea';
}

const steps: Step[] = [
  {
    key: 'name',
    question: "What's your name?",
    hint: "So I know who I'm talking to",
    placeholder: 'Jane Doe',
    type: 'text',
  },
  {
    key: 'email',
    question: 'Where can I reach you?',
    hint: "I'll reply to this address",
    placeholder: 'jane@company.com',
    type: 'email',
  },
  {
    key: 'subject',
    question: "What's this about?",
    hint: 'A role, a contract, or a project',
    placeholder: 'e.g. Senior engineer role at Acme',
    type: 'text',
  },
  {
    key: 'message',
    question: 'Tell me more',
    hint: 'Scope, timeline, anything useful',
    placeholder: 'Tell me about the role or project',
    type: 'textarea',
  },
];

const slide = {
  enter: { opacity: 0, x: 48 },
  center: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -48 },
};

export default function ContactSection() {
  const prefersReducedMotion = useReducedMotion();
  const [stepIndex, setStepIndex] = useState(0);
  const [values, setValues] = useState<Record<FieldKey, string>>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [error, setError] = useState<string | null>(null);
  const [status, setStatus] = useState<'filling' | 'review' | 'sending' | 'sent' | 'failed'>(
    'filling'
  );
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement | null>(null);

  const step = steps[stepIndex];
  const atReview = status === 'review' || status === 'sending' || status === 'failed';

  // Autofocus only after the user has engaged with the wizard, focusing on
  // mount steals focus and scrolls the whole page down to this section.
  const engaged = useRef(false);

  useEffect(() => {
    if (status === 'filling' && engaged.current) inputRef.current?.focus();
  }, [stepIndex, status]);

  const validate = (key: FieldKey): boolean => {
    const result = fieldSchemas[key].safeParse(values[key].trim());
    if (!result.success) {
      setError(result.error.issues[0].message);
      return false;
    }
    setError(null);
    return true;
  };

  const next = () => {
    engaged.current = true;
    if (!validate(step.key)) return;
    if (stepIndex === steps.length - 1) {
      setStatus('review');
    } else {
      setStepIndex((i) => i + 1);
    }
  };

  const back = () => {
    engaged.current = true;
    setError(null);
    if (atReview) {
      setStatus('filling');
    } else if (stepIndex > 0) {
      setStepIndex((i) => i - 1);
    }
  };

  const jumpTo = (i: number) => {
    engaged.current = true;
    setError(null);
    setStatus('filling');
    setStepIndex(i);
  };

  const send = async () => {
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error('Request failed');
      setStatus('sent');
    } catch {
      setStatus('failed');
    }
  };

  const restart = () => {
    setValues({ name: '', email: '', subject: '', message: '' });
    setStepIndex(0);
    setError(null);
    setStatus('filling');
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && (step.type !== 'textarea' || e.metaKey || e.ctrlKey)) {
      e.preventDefault();
      next();
    }
  };

  return (
    <section id="contact" className="section-band relative overflow-hidden px-4 py-28 sm:px-6">
      {/* Background glow */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute bottom-[-30%] left-1/2 h-[30rem] w-[44rem] -translate-x-1/2 rounded-full bg-accent/[0.12] blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <SectionHeading index="04" eyebrow="contact">
          Get in touch
        </SectionHeading>

        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          {/* Left, pitch (the single home of email + socials) */}
          <Reveal>
            <p className="text-lg leading-relaxed text-muted">
              I&apos;m currently open to full-time roles, contract engagements, and interesting
              problems you think I can help with. Answer a few quick questions and I&apos;ll get
              back to you.
            </p>

            <a
              href={`mailto:${personalInfo.email}`}
              className="group mt-8 inline-flex items-center gap-3 font-mono text-lg text-accent sm:text-xl"
            >
              {personalInfo.email}
              <ArrowIcon className="transition-transform duration-200 group-hover:translate-x-1" />
            </a>

            <div className="mt-8 flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.ariaLabel}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-line text-muted transition-all duration-200 hover:-translate-y-1 hover:border-accent/50 hover:text-accent"
                >
                  {social.name === 'GitHub' ? (
                    <GitHubIcon className="h-5 w-5" />
                  ) : (
                    <LinkedInIcon className="h-5 w-5" />
                  )}
                </a>
              ))}
            </div>

            <div className="mt-10 rounded-2xl border border-mint/20 bg-mint/[0.04] p-5">
              <p className="flex items-center gap-2.5 font-mono text-sm text-mint">
                <span className="relative flex h-2 w-2">
                  <span className="relative h-2 w-2 rounded-full bg-mint" />
                </span>
                {personalInfo.availability}
              </p>
            </div>
          </Reveal>

          {/* Right, step-by-step wizard */}
          <Reveal delay={0.1}>
            <div className="glass flex min-h-[26rem] flex-col rounded-2xl p-7 sm:p-10">
              {status === 'sent' ? (
                <div className="flex flex-1 flex-col items-center justify-center text-center">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-mint/10">
                    <CheckIcon className="h-8 w-8 text-mint" />
                  </span>
                  <h3 className="mt-6 font-display text-2xl font-bold text-ink">Message sent</h3>
                  <p className="mt-2 max-w-sm text-muted">
                    Thanks {values.name.split(' ')[0]}, I&apos;ll get back to you at{' '}
                    <span className="text-ink-soft">{values.email}</span> soon.
                  </p>
                  <button
                    onClick={restart}
                    className="mt-8 font-mono text-sm text-accent hover:underline"
                  >
                    send another message
                  </button>
                </div>
              ) : atReview ? (
                <div className="flex flex-1 flex-col">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs tracking-[0.2em] text-muted uppercase">
                      Review
                    </span>
                    <span className="font-mono text-xs text-faint">ready to send</span>
                  </div>
                  <dl className="mt-6 flex-1 space-y-4">
                    {steps.map((s, i) => (
                      <div key={s.key} className="group">
                        <dt className="font-mono text-xs text-muted">{s.key}</dt>
                        <dd className="mt-1 flex items-start justify-between gap-4">
                          <span
                            className={cn(
                              'text-sm leading-relaxed text-ink',
                              s.key === 'message' && 'whitespace-pre-wrap'
                            )}
                          >
                            {values[s.key]}
                          </span>
                          <button
                            onClick={() => jumpTo(i)}
                            className="shrink-0 font-mono text-xs text-accent opacity-70 hover:underline hover:opacity-100"
                          >
                            edit
                          </button>
                        </dd>
                      </div>
                    ))}
                  </dl>
                  <div className="mt-8 flex flex-wrap items-center gap-4">
                    <Button onClick={send} size="lg" disabled={status === 'sending'}>
                      {status === 'sending' ? 'Sending…' : 'Send message'}
                      {status !== 'sending' && <ArrowIcon />}
                    </Button>
                    <button onClick={back} className="text-sm text-muted hover:text-ink">
                      ← back
                    </button>
                    {status === 'failed' && (
                      <p className="w-full text-sm text-red-400">
                        Something went wrong. Try again or email me directly.
                      </p>
                    )}
                  </div>
                </div>
              ) : (
                <div className="flex flex-1 flex-col">
                  {/* Progress */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {steps.map((s, i) => (
                        <button
                          key={s.key}
                          onClick={() => i < stepIndex && jumpTo(i)}
                          disabled={i > stepIndex}
                          aria-label={`Step ${i + 1}: ${s.key}`}
                          className={cn(
                            'h-2 rounded-full transition-all duration-300',
                            i === stepIndex
                              ? 'w-8 bg-accent'
                              : i < stepIndex
                                ? 'w-2 cursor-pointer bg-accent/50 hover:bg-accent'
                                : 'w-2 bg-line'
                          )}
                        />
                      ))}
                    </div>
                    <span className="font-mono text-xs text-faint">
                      {stepIndex + 1} / {steps.length}
                    </span>
                  </div>

                  {/* Question */}
                  <div className="relative mt-10 flex-1">
                    <AnimatePresence mode="wait" initial={false}>
                      <motion.div
                        key={step.key}
                        variants={prefersReducedMotion ? undefined : slide}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.28, ease: [0.21, 0.47, 0.32, 0.98] }}
                      >
                        <h3 className="font-display text-2xl font-bold text-ink sm:text-3xl">
                          {step.question}
                        </h3>
                        <p className="mt-2 text-sm text-muted">{step.hint}</p>

                        {step.type === 'textarea' ? (
                          <textarea
                            ref={(el) => {
                              inputRef.current = el;
                            }}
                            rows={5}
                            value={values[step.key]}
                            placeholder={step.placeholder}
                            onChange={(e) => {
                              setValues((v) => ({ ...v, [step.key]: e.target.value }));
                              setError(null);
                            }}
                            onKeyDown={onKeyDown}
                            className="mt-6 w-full resize-y border-b-2 border-line bg-transparent pb-3 text-lg text-ink placeholder:text-faint focus:border-accent focus:outline-none"
                          />
                        ) : (
                          <input
                            ref={(el) => {
                              inputRef.current = el;
                            }}
                            type={step.type}
                            value={values[step.key]}
                            placeholder={step.placeholder}
                            onChange={(e) => {
                              setValues((v) => ({ ...v, [step.key]: e.target.value }));
                              setError(null);
                            }}
                            onKeyDown={onKeyDown}
                            className="mt-6 w-full border-b-2 border-line bg-transparent pb-3 text-xl text-ink placeholder:text-faint focus:border-accent focus:outline-none"
                          />
                        )}
                        {error && <p className="mt-3 text-sm text-red-400">{error}</p>}
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* Controls */}
                  <div className="mt-8 flex items-center justify-between">
                    <button
                      onClick={back}
                      className={cn(
                        'text-sm text-muted transition-opacity hover:text-ink',
                        stepIndex === 0 && 'pointer-events-none opacity-0'
                      )}
                    >
                      ← back
                    </button>
                    <div className="flex items-center gap-4">
                      <span className="hidden font-mono text-xs text-faint sm:inline">
                        {step.type === 'textarea' ? '⌘↵ to continue' : '↵ to continue'}
                      </span>
                      <Button onClick={next}>
                        {stepIndex === steps.length - 1 ? 'Review' : 'Continue'}
                        <ArrowIcon />
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
