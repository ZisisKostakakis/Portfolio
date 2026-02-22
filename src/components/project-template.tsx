'use client';

import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { Project } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';

const MermaidDiagram = dynamic(() => import('@/components/mermaid-diagram'), { ssr: false });

interface ProjectTemplateProps {
  project: Project & {
    additionalRepos?: { label: string; url: string }[];
    demoVideos?: { title: string; src: string }[];
    screenshots?: { src: string; alt: string; caption?: string }[];
    architectureSections?: { title: string; description: string; mermaid?: string }[];
    pypiUrl?: string;
  };
}

export default function ProjectTemplate({ project }: ProjectTemplateProps) {
  return (
    <main className="min-h-screen bg-primary-navy py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Back Button */}
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" size="sm" className="group">
              <svg
                className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to Projects
            </Button>
          </Link>
        </div>

        {/* Header Section */}
        <div className="mb-12">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            {project.category && <Badge variant="outline">{project.category}</Badge>}
            {project.date && (
              <Badge variant="secondary" size="sm">
                {project.date}
              </Badge>
            )}
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-white mb-6">
            {project.title}
          </h1>

          {/* Repository Links */}
          <div className="flex flex-wrap gap-4 mb-8">
            {project.githubUrl && (
              <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="md" className="group">
                  <svg
                    className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  GitHub Repository
                </Button>
              </Link>
            )}
            {project.additionalRepos?.map((repo) => (
              <Link key={repo.url} href={repo.url} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="md" className="group">
                  <svg
                    className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  {repo.label}
                </Button>
              </Link>
            ))}
            {project.liveUrl && (
              <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="gradient" size="md" className="group">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                  View Live Site
                </Button>
              </Link>
            )}
            {project.pypiUrl && (
              <Link href={project.pypiUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="md" className="group">
                  <svg
                    className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12.001 0C5.926 0 6.241 2.676 6.241 2.676l.007 2.771h5.87v.832H3.904S0 5.789 0 11.978c0 6.19 3.403 5.967 3.403 5.967h2.031v-2.87s-.109-3.403 3.347-3.403h5.764s3.236.052 3.236-3.127V3.16S18.28 0 12.001 0zm-3.21 1.818a1.04 1.04 0 1 1 0 2.082 1.04 1.04 0 0 1 0-2.082zM12 24c6.075 0 5.76-2.676 5.76-2.676l-.008-2.771h-5.87v-.832h8.214S24 18.211 24 12.022c0-6.19-3.403-5.967-3.403-5.967h-2.031v2.87s.109 3.403-3.347 3.403H9.455s-3.236-.052-3.236 3.127v5.385S5.72 24 12 24zm3.21-1.818a1.04 1.04 0 1 1 0-2.082 1.04 1.04 0 0 1 0 2.082z" />
                  </svg>
                  PyPI Package
                </Button>
              </Link>
            )}
          </div>
        </div>

        {/* Description */}
        <div className="mb-12">
          <Card className="p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary-white mb-4">Overview</h2>
            <p className="text-lg text-primary-slate leading-relaxed whitespace-pre-line">
              {project.longDescription || project.description}
            </p>
          </Card>
        </div>

        {/* Tech Stack */}
        {project.technologies && project.technologies.length > 0 && (
          <div className="mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-primary-white mb-6">Tech Stack</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {project.technologies.map((tech) => (
                <Card key={tech} hover className="p-4 text-center cursor-default">
                  <span className="text-primary-charcoal font-medium">{tech}</span>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Features */}
        {project.features && project.features.length > 0 && (
          <div className="mb-12">
            <Card className="p-6 sm:p-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-primary-white mb-6">
                Key Features
              </h3>
              <ul className="space-y-3">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 text-primary-gold flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-primary-slate">{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        )}

        {/* Architecture */}
        {project.architectureSections && project.architectureSections.length > 0 && (
          <div className="mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-primary-white mb-6">Architecture</h3>
            <div className="space-y-8">
              {project.architectureSections.map((section, index) => (
                <Card key={index} className="p-6 sm:p-8">
                  <h4 className="text-xl font-bold text-primary-white mb-3">{section.title}</h4>
                  <p className="text-primary-slate leading-relaxed mb-4">{section.description}</p>
                  {section.mermaid && <MermaidDiagram chart={section.mermaid} />}
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Demo Videos */}
        {project.demoVideos && project.demoVideos.length > 0 && (
          <div className="mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-primary-white mb-6 text-center">
              Demo Videos
            </h3>
            <div className="grid sm:grid-cols-2 gap-8">
              {project.demoVideos.map((video, index) => (
                <div key={index} className="space-y-4">
                  <h4 className="text-xl text-primary-charcoal text-center font-semibold">
                    {video.title}
                  </h4>
                  <div className="rounded-xl overflow-hidden shadow-custom-lg">
                    <video className="w-full" controls preload="metadata">
                      <source src={video.src} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Screenshots */}
        {project.screenshots && project.screenshots.length > 0 && (
          <div className="mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-primary-white mb-6 text-center">
              Screenshots
            </h3>
            <div className="grid gap-8">
              {project.screenshots.map((screenshot, index) => (
                <div key={index} className="space-y-4">
                  {screenshot.caption && (
                    <h4 className="text-xl text-primary-charcoal text-center font-semibold">
                      {screenshot.caption}
                    </h4>
                  )}
                  <div className="relative rounded-xl overflow-hidden shadow-custom-lg">
                    <Image
                      src={screenshot.src}
                      width={1200}
                      height={800}
                      alt={screenshot.alt}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Navigation Footer */}
        <div className="mt-16 pt-8 border-t border-primary-gray-dark">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <Link href="/">
              <Button variant="ghost">&larr; View All Projects</Button>
            </Link>
            <Link href="/#contact">
              <Button variant="primary">Interested? Let&apos;s Talk &rarr;</Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
