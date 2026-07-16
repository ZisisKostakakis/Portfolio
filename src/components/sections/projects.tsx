import Image from 'next/image';
import Link from 'next/link';
import { featuredProjects, moreProjects } from '@/lib/data/projects';
import { Project } from '@/lib/types';
import SectionHeading from '@/components/section-heading';
import SpotlightCard from '@/components/spotlight-card';
import Reveal from '@/components/reveal';
import { Badge } from '@/components/ui/badge';
import { GitHubIcon, ExternalIcon, ArrowIcon, CheckIcon } from '@/components/icons';
import { cn } from '@/lib/cn';

function FeaturedProject({ project, index }: { project: Project; index: number }) {
  const reversed = index % 2 === 1;

  return (
    <Reveal>
      <article
        className={cn(
          'group grid items-center gap-8 lg:grid-cols-2 lg:gap-14',
          reversed && 'lg:[direction:rtl]'
        )}
      >
        {/* Framed screenshot */}
        <Link
          href={project.href}
          className="relative block [direction:ltr]"
          aria-label={`View ${project.title} case study`}
        >
          <div
            aria-hidden
            className="absolute -inset-2 rounded-3xl bg-accent/[0.12] opacity-40 blur-xl transition-opacity duration-500 group-hover:opacity-100"
          />
          <div className="relative overflow-hidden rounded-2xl border border-line-soft bg-raised shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
            <div className="flex items-center gap-1.5 border-b border-line-soft bg-white/[0.03] px-4 py-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
              <span className="ml-2 truncate font-mono text-[11px] text-faint">
                {project.liveUrl?.replace('https://', '') ?? project.title.toLowerCase()}
              </span>
            </div>
            {project.image && (
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
            )}
          </div>
        </Link>

        {/* Copy */}
        <div className="[direction:ltr]">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="accent">Featured</Badge>
            {project.category && <Badge variant="neutral">{project.category}</Badge>}
            {project.date && <Badge variant="outline">{project.date}</Badge>}
          </div>

          <h3 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            <Link href={project.href} className="transition-colors hover:text-accent">
              {project.title}
            </Link>
          </h3>

          <p className="mt-4 text-lg leading-relaxed text-muted">{project.description}</p>

          {project.features && (
            <ul className="mt-5 space-y-2">
              {project.features.slice(0, 3).map((feature) => (
                <li key={feature} className="flex items-start gap-2.5 text-sm text-ink-soft">
                  <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <span className="leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>
          )}

          <div className="mt-5 flex flex-wrap gap-2">
            {project.technologies.slice(0, 7).map((tech) => (
              <span
                key={tech}
                className="rounded-md bg-white/[0.04] px-2.5 py-1 font-mono text-xs text-ink-soft"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 7 && (
              <span className="rounded-md px-2 py-1 font-mono text-xs text-faint">
                +{project.technologies.length - 7} more
              </span>
            )}
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-5">
            <Link
              href={project.href}
              className="group/link inline-flex items-center gap-2 font-semibold text-accent"
            >
              Read case study
              <ArrowIcon className="transition-transform duration-200 group-hover/link:translate-x-1" />
            </Link>
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} on GitHub`}
                className="text-muted transition-colors hover:text-ink"
              >
                <GitHubIcon />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} live site`}
                className="text-muted transition-colors hover:text-ink"
              >
                <ExternalIcon className="h-5 w-5" />
              </a>
            )}
          </div>
        </div>
      </article>
    </Reveal>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <Reveal delay={(index % 3) * 0.07} className="h-full">
      <SpotlightCard className="flex h-full flex-col">
        {project.image && (
          <Link
            href={project.href}
            className="relative block aspect-[16/9] overflow-hidden border-b border-line-soft"
            aria-label={`View ${project.title}`}
          >
            <Image
              src={project.image}
              alt={`${project.title} screenshot`}
              fill
              sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
              className="object-cover object-top transition-transform duration-500 hover:scale-105"
            />
          </Link>
        )}
        <div className="flex flex-1 flex-col p-6">
          <div className="flex items-center gap-2">
            {project.category && <Badge variant="neutral">{project.category}</Badge>}
            {project.date && <span className="font-mono text-xs text-faint">{project.date}</span>}
          </div>
          <h3 className="mt-3 font-display text-xl font-bold text-ink">
            <Link href={project.href} className="transition-colors hover:text-accent">
              {project.title}
            </Link>
          </h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{project.description}</p>
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="rounded bg-white/[0.04] px-2 py-0.5 font-mono text-[11px] text-ink-soft"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="px-1 py-0.5 font-mono text-[11px] text-faint">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>
          <div className="mt-5 flex items-center justify-between border-t border-line-soft pt-4">
            <Link
              href={project.href}
              className="group/link inline-flex items-center gap-1.5 text-sm font-medium text-accent"
            >
              Details
              <ArrowIcon className="h-3.5 w-3.5 transition-transform duration-200 group-hover/link:translate-x-1" />
            </Link>
            <div className="flex items-center gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.title} on GitHub`}
                  className="text-muted transition-colors hover:text-ink"
                >
                  <GitHubIcon className="h-4 w-4" />
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.title} live site`}
                  className="text-muted transition-colors hover:text-ink"
                >
                  <ExternalIcon className="h-4 w-4" />
                </a>
              )}
            </div>
          </div>
        </div>
      </SpotlightCard>
    </Reveal>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative px-4 py-28 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="03"
          eyebrow="projects"
          description="A selection of production systems, tools, and experiments, each with a full case study covering architecture, features, and lessons learned."
        >
          Things I&apos;ve built
        </SectionHeading>

        <div className="space-y-24 lg:space-y-32">
          {featuredProjects.map((project, i) => (
            <FeaturedProject key={project.id} project={project} index={i} />
          ))}
        </div>

        <Reveal className="mt-28 mb-10">
          <div className="flex items-center gap-4">
            <h3 className="font-display text-2xl font-bold text-ink">More projects</h3>
            <span className="h-px flex-1 bg-line-soft" />
          </div>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {moreProjects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
