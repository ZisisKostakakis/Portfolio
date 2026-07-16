import Image from 'next/image';
import Link from 'next/link';
import { ProjectDetail } from '@/lib/types';
import { Badge } from '@/components/ui/badge';
import Reveal from '@/components/reveal';
import SpotlightCard from '@/components/spotlight-card';
import MermaidDiagram from '@/components/mermaid-diagram';
import {
  GitHubIcon,
  ExternalIcon,
  ArrowIcon,
  CheckIcon,
  PyPIIcon,
} from '@/components/icons';

interface ProjectDetailPageProps {
  project: ProjectDetail;
  prev?: { title: string; href: string };
  next?: { title: string; href: string };
}

const linkClasses =
  'inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm font-medium text-ink transition-all duration-200 hover:border-accent/60 hover:text-accent hover:bg-accent/5';

export default function ProjectDetailPage({ project, prev, next }: ProjectDetailPageProps) {
  const paragraphs = (project.longDescription ?? project.description).split('\n\n');

  return (
    <main className="relative min-h-screen overflow-hidden px-4 pt-32 pb-20 sm:px-6">
      {/* Background */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/4 h-[26rem] w-[26rem] rounded-full bg-accent/[0.05] blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        {/* Breadcrumb */}
        <Reveal>
          <Link
            href="/#projects"
            className="group inline-flex items-center gap-2 font-mono text-sm text-muted transition-colors hover:text-accent"
          >
            <ArrowIcon className="rotate-180 transition-transform duration-200 group-hover:-translate-x-1" />
            all projects
          </Link>
        </Reveal>

        {/* Header */}
        <Reveal className="mt-8">
          <div className="flex flex-wrap items-center gap-2">
            {project.category && <Badge variant="accent">{project.category}</Badge>}
            {project.date && <Badge variant="outline">{project.date}</Badge>}
          </div>
          <h1 className="mt-5 max-w-4xl font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl lg:text-6xl">
            {project.title}
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted sm:text-xl">
            {project.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className={linkClasses}>
                <GitHubIcon className="h-4 w-4" />
                GitHub Repository
              </a>
            )}
            {project.additionalRepos?.map((repo) => (
              <a key={repo.url} href={repo.url} target="_blank" rel="noopener noreferrer" className={linkClasses}>
                <GitHubIcon className="h-4 w-4" />
                {repo.label}
              </a>
            ))}
            {project.pypiUrl && (
              <a href={project.pypiUrl} target="_blank" rel="noopener noreferrer" className={linkClasses}>
                <PyPIIcon className="h-4 w-4" />
                PyPI Package
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-[#0b0d0e] transition-all duration-200 hover:brightness-110"
              >
                <ExternalIcon className="h-4 w-4" />
                View Live Site
              </a>
            )}
          </div>
        </Reveal>

        {/* Hero image */}
        {project.image && (
          <Reveal className="mt-14">
            <div className="relative">
              <div
                aria-hidden
                className="absolute -inset-2 rounded-3xl bg-accent/[0.07] opacity-50 blur-xl"
              />
              <div className="relative overflow-hidden rounded-2xl border border-line-soft shadow-[0_30px_80px_rgba(0,0,0,0.55)]">
                <div className="flex items-center gap-1.5 border-b border-line-soft bg-raised px-4 py-2.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                  <span className="ml-2 truncate font-mono text-[11px] text-faint">
                    {project.liveUrl?.replace('https://', '') ?? project.githubUrl?.replace('https://', '')}
                  </span>
                </div>
                <Image
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  width={1400}
                  height={800}
                  priority
                  className="h-auto w-full bg-raised object-cover"
                />
              </div>
            </div>
          </Reveal>
        )}

        {/* Body: content + sticky sidebar */}
        <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_300px] lg:gap-16">
          <div className="min-w-0 space-y-16">
            {/* Overview */}
            <Reveal>
              <section aria-labelledby="overview">
                <h2 id="overview" className="mb-6 flex items-center gap-3 font-display text-2xl font-bold text-ink sm:text-3xl">
                  <span className="font-mono text-base text-accent">01</span> Overview
                </h2>
                <div className="space-y-4">
                  {paragraphs.map((p, i) => (
                    <p key={i} className="text-[17px] leading-relaxed text-ink-soft/90">
                      {p}
                    </p>
                  ))}
                </div>
              </section>
            </Reveal>

            {/* Features */}
            {project.features && project.features.length > 0 && (
              <Reveal>
                <section aria-labelledby="features">
                  <h2 id="features" className="mb-6 flex items-center gap-3 font-display text-2xl font-bold text-ink sm:text-3xl">
                    <span className="font-mono text-base text-accent">02</span> Key Features
                  </h2>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {project.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-start gap-3 rounded-xl border border-line-soft bg-surface p-4 transition-colors hover:border-line"
                      >
                        <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                        <span className="text-sm leading-relaxed text-ink-soft">{feature}</span>
                      </div>
                    ))}
                  </div>
                </section>
              </Reveal>
            )}

            {/* Architecture */}
            {project.architectureSections && project.architectureSections.length > 0 && (
              <section aria-labelledby="architecture">
                <Reveal>
                  <h2 id="architecture" className="mb-6 flex items-center gap-3 font-display text-2xl font-bold text-ink sm:text-3xl">
                    <span className="font-mono text-base text-accent">03</span> Architecture
                  </h2>
                </Reveal>
                <div className="space-y-10">
                  {project.architectureSections.map((section) => (
                    <Reveal key={section.title}>
                      <SpotlightCard className="p-6 sm:p-8">
                        <h3 className="font-display text-xl font-bold text-ink">{section.title}</h3>
                        <p className="mt-3 mb-6 leading-relaxed text-muted">{section.description}</p>
                        {section.mermaid && <MermaidDiagram chart={section.mermaid} />}
                      </SpotlightCard>
                    </Reveal>
                  ))}
                </div>
              </section>
            )}

            {/* Demo videos */}
            {project.demoVideos && project.demoVideos.length > 0 && (
              <Reveal>
                <section aria-labelledby="demos">
                  <h2 id="demos" className="mb-6 flex items-center gap-3 font-display text-2xl font-bold text-ink sm:text-3xl">
                    <span className="font-mono text-base text-accent">
                      {project.architectureSections?.length ? '04' : '03'}
                    </span>{' '}
                    Demos
                  </h2>
                  <div className="grid gap-6 sm:grid-cols-2">
                    {project.demoVideos.map((video) => (
                      <figure key={video.src}>
                        <div className="overflow-hidden rounded-xl border border-line-soft shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
                          <video className="w-full" controls preload="metadata">
                            <source src={video.src} type="video/mp4" />
                            Your browser does not support the video tag.
                          </video>
                        </div>
                        <figcaption className="mt-3 text-center font-mono text-sm text-muted">
                          {video.title}
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                </section>
              </Reveal>
            )}

            {/* Screenshots */}
            {project.screenshots && project.screenshots.length > 0 && (
              <Reveal>
                <section aria-labelledby="screenshots">
                  <h2 id="screenshots" className="mb-6 font-display text-2xl font-bold text-ink sm:text-3xl">
                    Screenshots
                  </h2>
                  <div className="space-y-8">
                    {project.screenshots.map((shot) => (
                      <figure key={shot.src}>
                        <div className="overflow-hidden rounded-xl border border-line-soft shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
                          <Image
                            src={shot.src}
                            alt={shot.alt}
                            width={1200}
                            height={800}
                            className="h-auto w-full"
                          />
                        </div>
                        {shot.caption && (
                          <figcaption className="mt-3 text-center font-mono text-sm text-muted">
                            {shot.caption}
                          </figcaption>
                        )}
                      </figure>
                    ))}
                  </div>
                </section>
              </Reveal>
            )}
          </div>

          {/* Sidebar */}
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <Reveal delay={0.1}>
              <div className="space-y-6">
                <div className="rounded-2xl border border-line-soft bg-surface p-6">
                  <h3 className="font-mono text-xs tracking-[0.2em] text-muted uppercase">
                    Project info
                  </h3>
                  <dl className="mt-4 space-y-3 text-sm">
                    {project.category && (
                      <div className="flex justify-between gap-4">
                        <dt className="text-muted">Category</dt>
                        <dd className="text-right text-ink">{project.category}</dd>
                      </div>
                    )}
                    {project.date && (
                      <div className="flex justify-between gap-4">
                        <dt className="text-muted">Year</dt>
                        <dd className="font-mono text-ink">{project.date}</dd>
                      </div>
                    )}
                    <div className="flex justify-between gap-4">
                      <dt className="text-muted">Stack size</dt>
                      <dd className="font-mono text-ink">{project.technologies.length} technologies</dd>
                    </div>
                  </dl>
                </div>

                <div className="rounded-2xl border border-line-soft bg-surface p-6">
                  <h3 className="font-mono text-xs tracking-[0.2em] text-muted uppercase">
                    Tech stack
                  </h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-line-soft bg-white/[0.03] px-2.5 py-1 font-mono text-xs text-ink-soft"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl border border-accent/25 bg-accent/[0.04] p-6">
                  <p className="text-sm leading-relaxed text-ink-soft">
                    Interested in this kind of work?
                  </p>
                  <Link
                    href="/#contact"
                    className="group mt-3 inline-flex items-center gap-2 text-sm font-semibold text-accent"
                  >
                    Let&apos;s talk
                    <ArrowIcon className="transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </Reveal>
          </aside>
        </div>

        {/* Prev / next navigation */}
        <nav aria-label="Project navigation" className="mt-20 border-t border-line-soft pt-8">
          <div className="grid gap-4 sm:grid-cols-2">
            {prev ? (
              <Link
                href={prev.href}
                className="group rounded-2xl border border-line-soft p-6 transition-colors hover:border-accent/40"
              >
                <span className="font-mono text-xs text-muted">← previous project</span>
                <p className="mt-2 font-display text-lg font-semibold text-ink transition-colors group-hover:text-accent">
                  {prev.title}
                </p>
              </Link>
            ) : (
              <span />
            )}
            {next && (
              <Link
                href={next.href}
                className="group rounded-2xl border border-line-soft p-6 text-right transition-colors hover:border-accent/40"
              >
                <span className="font-mono text-xs text-muted">next project →</span>
                <p className="mt-2 font-display text-lg font-semibold text-ink transition-colors group-hover:text-accent">
                  {next.title}
                </p>
              </Link>
            )}
          </div>
        </nav>
      </div>
    </main>
  );
}
