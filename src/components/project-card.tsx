'use client';

import Link from 'next/link';
import { Project } from '@/lib/types';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils/cn';

interface ProjectCardProps {
  project: Project;
  className?: string;
}

export default function ProjectCard({ project, className }: ProjectCardProps) {
  return (
    <Link href={project.href} className="block h-full group">
      <div
        className={cn(
          'relative h-full rounded-xl overflow-hidden',
          'bg-white border border-primary-gray-dark shadow-custom',
          'transition-all duration-200',
          'hover:shadow-glow hover:border-primary-gold/30 hover:-translate-y-2',
          className
        )}
      >
        {/* Content */}
        <div className="relative p-6 h-full flex flex-col">
          {/* Category Badge */}
          {project.category && (
            <div className="mb-3">
              <Badge variant="outline" size="sm">
                {project.category}
              </Badge>
            </div>
          )}

          {/* Title */}
          <h3 className="text-xl sm:text-2xl font-bold text-primary-charcoal mb-3 group-hover:text-primary-gold transition-colors duration-300">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-primary-slate mb-4 flex-grow line-clamp-3">{project.description}</p>

          {/* Technologies */}
          {project.technologies && project.technologies.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.slice(0, 3).map((tech) => (
                <Badge key={tech} variant="secondary" size="sm">
                  {tech}
                </Badge>
              ))}
              {project.technologies.length > 3 && (
                <Badge variant="secondary" size="sm">
                  +{project.technologies.length - 3}
                </Badge>
              )}
            </div>
          )}

          {/* Arrow Indicator */}
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
