'use client';

import { Suspense } from 'react';
import Link from 'next/link';
import { projects } from '@/lib/data/projects';
import { personalInfo } from '@/lib/data/personal';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { SkeletonCard } from '@/components/ui/skeleton';
import ProjectCard from '@/components/project-card';

export default function HomeContent() {
  return (
    <main className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 bg-primary-gray relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-orange/10 rounded-full blur-3xl animate-blob" />
        <div className="absolute top-40 right-10 w-96 h-96 bg-primary-navy/10 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-primary-orange/10 rounded-full blur-3xl animate-blob animation-delay-4000" />
      </div>

      {/* Hero Section */}
      <section className="max-w-5xl mx-auto mb-32 relative z-10">
        <div className="text-center space-y-8">
          {/* Greeting with wave animation */}
          <div className="animate-fade-in">
            <span className="inline-block text-6xl sm:text-7xl animate-float">👋</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-primary-black animate-slide-up">
            Hi, I&apos;m{' '}
            <span className="text-gradient bg-gradient-orange bg-[length:200%_100%] animate-gradient">
              {personalInfo.name.split(' ')[0]}
            </span>
          </h1>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-primary-navy animate-slide-up delay-[100ms]">
            {personalInfo.title}
          </h2>

          <p className="text-lg sm:text-xl lg:text-2xl text-primary-navy/80 max-w-3xl mx-auto leading-relaxed animate-slide-up delay-[200ms]">
            {personalInfo.tagline}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4 animate-scale-in delay-[300ms]">
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

          {/* Quick Stats */}
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8 pt-8 animate-fade-in delay-[400ms]">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-primary-orange">
                {projects.length}+
              </div>
              <div className="text-sm sm:text-base text-primary-navy/70">Projects</div>
            </div>
            <div className="w-px bg-primary-navy/20" />
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-primary-orange">
                {personalInfo.yearsOfExperience}+
              </div>
              <div className="text-sm sm:text-base text-primary-navy/70">Years Exp</div>
            </div>
            <div className="w-px bg-primary-navy/20" />
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-primary-orange">10+</div>
              <div className="text-sm sm:text-base text-primary-navy/70">Technologies</div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Marquee */}
      <section className="mb-24 relative z-10">
        <div className="relative overflow-hidden bg-primary-navy/5 py-6 backdrop-blur-sm">
          <div className="flex gap-8 animate-marquee whitespace-nowrap">
            {['Python', 'TypeScript', 'AWS', 'React', 'Next.js', 'Docker', 'Terraform', 'Flask'].map(
              (tech, i) => (
                <Badge key={`${tech}-${i}`} variant="secondary" size="lg" className="shrink-0">
                  {tech}
                </Badge>
              )
            )}
            {/* Duplicate for seamless loop */}
            {['Python', 'TypeScript', 'AWS', 'React', 'Next.js', 'Docker', 'Terraform', 'Flask'].map(
              (tech, i) => (
                <Badge
                  key={`${tech}-duplicate-${i}`}
                  variant="secondary"
                  size="lg"
                  className="shrink-0"
                >
                  {tech}
                </Badge>
              )
            )}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-black mb-4 animate-fade-in">
            Featured Projects
          </h2>
          <p className="text-lg sm:text-xl text-primary-navy/70 max-w-2xl mx-auto animate-fade-in delay-[100ms]">
            Explore my recent work and side projects
          </p>
        </div>

        <div className="grid gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="animate-scale-in"
              style={{ animationDelay: `${index * 100 + 200}ms` }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {/* View All Projects CTA */}
        <div className="text-center mt-12 animate-fade-in delay-[500ms]">
          <p className="text-primary-navy/70 mb-4">Interested in seeing more of my work?</p>
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
