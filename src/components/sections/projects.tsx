'use client';

import { projects } from '@/lib/data/projects';
import ProjectCard from '@/components/project-card';
import Reveal from '@/components/reveal';
import SectionHeading from '@/components/section-heading';

export default function ProjectsSection() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          index="03"
          eyebrow="what I've built"
          description="Explore my recent work and side projects"
        >
          Featured <span className="text-gradient">Projects</span>
        </SectionHeading>

        <div className="space-y-8 mb-12">
          {featured.map((project, i) => (
            <Reveal key={project.id} delay={i * 0.08}>
              <ProjectCard project={project} featured />
            </Reveal>
          ))}
        </div>

        <div className="grid gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((project, i) => (
            <Reveal key={project.id} delay={(i % 3) * 0.08} className="h-full">
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
