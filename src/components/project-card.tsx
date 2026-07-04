'use client';

import Link from 'next/link';
import { Project } from '@/lib/types';
import ProjectThumb from '@/components/project-thumb';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils/cn';

interface ProjectCardProps {
  project: Project;
  className?: string;
  featured?: boolean;
}

export default function ProjectCard({ project, className, featured = false }: ProjectCardProps) {
  const maxBadges = featured ? 6 : 3;
  return (
    <Link href={project.href} className="block h-full group">
      <div
        className={cn(
          'relative h-full rounded-xl overflow-hidden',
          'bg-primary-navy-light border border-primary-gray-dark shadow-custom',
          'transition-all duration-200',
          'hover:shadow-glow hover:border-primary-gold/30 hover:-translate-y-2',
          featured && 'md:grid md:grid-cols-[6fr_5fr]',
          className
        )}
      >
        {/* Thumbnail */}
        <div
          className={cn(
            'relative overflow-hidden border-primary-gray-dark',
            featured ? 'h-56 md:h-full border-b md:border-b-0 md:border-r' : 'h-44 border-b'
          )}
        >
          {project.thumb ? (
            <ProjectThumb thumb={project.thumb} alt={project.title} />
          ) : (
            <div className="absolute inset-0 bg-dot-grid bg-dots flex flex-col items-center justify-center gap-3">
              <span className="text-4xl font-display font-bold text-primary-gold/40">
                {project.title
                  .split(' ')
                  .map((w) => w[0])
                  .join('')
                  .slice(0, 2)}
              </span>
              <span className="font-mono text-xs text-primary-slate/60">~/{project.id}</span>
            </div>
          )}
          {/* Legibility gradient + category on image */}
          {project.thumb?.kind !== 'terminal' && (
            <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-primary-navy-light to-transparent pointer-events-none" />
          )}
          {project.category && (
            <div className="absolute bottom-3 left-4">
              <Badge
                variant="outline"
                size="sm"
                className="bg-primary-navy/70 backdrop-blur-sm border font-mono"
              >
                {project.category}
              </Badge>
            </div>
          )}
        </div>

        <div className="relative p-6 flex flex-col">
          <h3 className="text-xl sm:text-2xl font-bold text-primary-white mb-3 group-hover:text-primary-gold transition-colors duration-300">
            {project.title}
          </h3>

          <p
            className={cn(
              'text-primary-slate mb-4 flex-grow',
              featured ? 'line-clamp-4' : 'line-clamp-3'
            )}
          >
            {project.description}
          </p>

          {project.technologies && project.technologies.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.slice(0, maxBadges).map((tech) => (
                <Badge key={tech} variant="secondary" size="sm">
                  {tech}
                </Badge>
              ))}
              {project.technologies.length > maxBadges && (
                <Badge variant="secondary" size="sm">
                  +{project.technologies.length - maxBadges}
                </Badge>
              )}
            </div>
          )}

          <div className="flex items-center text-primary-gold font-medium mt-auto pt-4">
            <span className="mr-2">View Project</span>
            <svg
              className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-150"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}
