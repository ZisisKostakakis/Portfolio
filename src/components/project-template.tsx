'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Project } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';

interface ProjectTemplateProps {
  project: Project & {
    additionalRepos?: { label: string; url: string }[];
    demoVideos?: { title: string; src: string }[];
    screenshots?: { src: string; alt: string; caption?: string }[];
  };
}

export default function ProjectTemplate({ project }: ProjectTemplateProps) {
  return (
    <main className="min-h-screen bg-primary-gray py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
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
        </motion.div>

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="flex flex-wrap items-center gap-3 mb-4">
            {project.category && <Badge variant="outline">{project.category}</Badge>}
            {project.date && (
              <Badge variant="secondary" size="sm">
                {project.date}
              </Badge>
            )}
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-black mb-6">
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
          </div>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12"
        >
          <Card className="p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary-black mb-4">Overview</h2>
            <p className="text-lg text-primary-navy/80 leading-relaxed whitespace-pre-line">
              {project.longDescription || project.description}
            </p>
          </Card>
        </motion.div>

        {/* Tech Stack */}
        {project.technologies && project.technologies.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-12"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-primary-black mb-6">Tech Stack</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {project.technologies.map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + index * 0.05 }}
                >
                  <Card hover className="p-4 text-center cursor-default">
                    <span className="text-primary-navy font-medium">{tech}</span>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Features */}
        {project.features && project.features.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-12"
          >
            <Card className="p-6 sm:p-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-primary-black mb-6">
                Key Features
              </h3>
              <ul className="space-y-3">
                {project.features.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <svg
                      className="w-6 h-6 text-primary-orange flex-shrink-0 mt-0.5"
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
                    <span className="text-primary-navy/80">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </Card>
          </motion.div>
        )}

        {/* Demo Videos */}
        {project.demoVideos && project.demoVideos.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-12"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-primary-black mb-6 text-center">
              Demo Videos
            </h3>
            <div className="grid sm:grid-cols-2 gap-8">
              {project.demoVideos.map((video, index) => (
                <div key={index} className="space-y-4">
                  <h4 className="text-xl text-primary-navy text-center font-semibold">
                    {video.title}
                  </h4>
                  <div className="rounded-xl overflow-hidden shadow-custom-lg">
                    <video className="w-full" controls>
                      <source src={video.src} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Screenshots */}
        {project.screenshots && project.screenshots.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-12"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-primary-black mb-6 text-center">
              Screenshots
            </h3>
            <div className="grid gap-8">
              {project.screenshots.map((screenshot, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="space-y-4"
                >
                  {screenshot.caption && (
                    <h4 className="text-xl text-primary-navy text-center font-semibold">
                      {screenshot.caption}
                    </h4>
                  )}
                  <div className="relative rounded-xl overflow-hidden shadow-custom-lg group">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-orange/0 to-primary-orange/10 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                    <Image
                      src={screenshot.src}
                      width={1200}
                      height={800}
                      alt={screenshot.alt}
                      className="w-full h-auto"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Navigation Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-16 pt-8 border-t border-primary-gray-dark"
        >
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <Link href="/">
              <Button variant="ghost">← View All Projects</Button>
            </Link>
            <Link href="/Contact">
              <Button variant="primary">Interested? Let&apos;s Talk →</Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
