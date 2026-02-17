'use client';

import { projects } from '@/lib/data/projects';
import ProjectCard from '@/components/project-card';

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-primary-white mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-lg text-primary-slate max-w-2xl">
            Explore my recent work and side projects
          </p>
        </div>

        <div className="grid gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
