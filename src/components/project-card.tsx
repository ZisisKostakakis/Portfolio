'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
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
      <motion.div
        className={cn(
          'relative h-full rounded-xl overflow-hidden',
          'bg-white border border-primary-gray-dark shadow-custom',
          'transition-all duration-300',
          'hover:shadow-glow hover:border-primary-gold/30',
          className
        )}
        whileHover={{ y: -8 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-gold/0 via-primary-gold/0 to-primary-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

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
            <span className="mr-2 group-hover:mr-4 transition-all duration-300">View Project</span>
            <svg
              className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300"
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

        {/* Shine Effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
        </div>
      </motion.div>
    </Link>
  );
}
