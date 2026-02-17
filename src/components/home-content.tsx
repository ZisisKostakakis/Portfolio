'use client';

import Link from 'next/link';
import { projects } from '@/lib/data/projects';
import { personalInfo } from '@/lib/data/personal';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import ProjectCard from '@/components/project-card';

export default function HomeContent() {
  return (
    <main className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 bg-primary-gray">
      {/* Hero Section */}
      <section className="max-w-5xl mx-auto mb-32">
        <div className="text-center space-y-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-primary-navy">
            {personalInfo.title}
          </h2>

          <p className="text-lg sm:text-xl lg:text-2xl text-primary-slate max-w-3xl mx-auto leading-relaxed">
            {personalInfo.tagline}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Link href="/Contact">
              <Button variant="gradient" size="lg">
                Get In Touch
              </Button>
            </Link>
            <Link href="/About">
              <Button variant="outline" size="lg">
                About Me
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Tech Stack Marquee */}
      <section className="mb-24 relative z-10">
        <div className="relative overflow-hidden bg-primary-navy/5 py-6 backdrop-blur-sm">
          <div className="flex gap-8 whitespace-nowrap animate-marquee will-change-transform">
            {[
              'AWS',
              'DevOps',
              'GitOps',
              'Data Pipelines',
              'Docker',
              'CI/CD',
              'Python',
              'Next.js',
              'Terraform',
              'Tailscale',
              'TypeScript',
              'PostgreSQL',
              'DynamoDB',
              'Git',
              'TailwindCSS',
            ].map((tech, i) => (
              <Badge key={`${tech}-${i}`} variant="secondary" size="lg" className="shrink-0">
                {tech}
              </Badge>
            ))}
            {/* Duplicate for seamless loop */}
            {[
              'AWS',
              'DevOps',
              'GitOps',
              'Data Pipelines',
              'Docker',
              'CI/CD',
              'Python',
              'Next.js',
              'Terraform',
              'Tailscale',
              'TypeScript',
              'PostgreSQL',
              'DynamoDB',
              'Git',
              'TailwindCSS',
            ].map((tech, i) => (
              <Badge
                key={`${tech}-duplicate-${i}`}
                variant="secondary"
                size="lg"
                className="shrink-0"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-charcoal mb-4">
            Featured Projects
          </h2>
          <p className="text-lg sm:text-xl text-primary-slate max-w-2xl mx-auto">
            Explore my recent work and side projects
          </p>
        </div>

        <div className="grid gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* View All Projects CTA */}
        <div className="text-center mt-12">
          <p className="text-primary-slate mb-4">Interested in seeing more of my work?</p>
          <Link href="/Contact">
            <Button variant="ghost" size="lg">
              Let&apos;s Connect →
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
