'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { skillSections } from '@/lib/data/skills';
import { personalInfo } from '@/lib/data/personal';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import SkillAccordion from '@/components/skill-accordion';

export default function AboutContent() {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});

  const toggleSection = (sectionId: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };

  const expandAll = () => {
    const allOpen = skillSections.reduce(
      (acc, section) => ({
        ...acc,
        [section.id]: true,
      }),
      {}
    );
    setOpenSections(allOpen);
  };

  const collapseAll = () => {
    setOpenSections({});
  };

  const hasOpenSections = Object.values(openSections).some((isOpen) => isOpen);

  return (
    <main className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 bg-primary-gray">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-primary-charcoal mb-6">
            About{' '}
            <span className="text-gradient bg-gradient-gold bg-[length:200%_100%] animate-gradient">
              Me
            </span>
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-primary-slate max-w-3xl mx-auto leading-relaxed">
            {personalInfo.title} specializing in back end development on AWS cloud with Python.
            Hands on experience in start-up company environment.
          </p>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          className="grid sm:grid-cols-3 gap-6 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="p-6 text-center hover:shadow-glow transition-shadow duration-300">
            <div className="text-4xl font-bold text-primary-gold mb-2">
              {personalInfo.yearsOfExperience}+
            </div>
            <div className="text-sm text-primary-slate">Years Experience</div>
          </Card>
          <Card className="p-6 text-center hover:shadow-glow transition-shadow duration-300">
            <div className="text-4xl font-bold text-primary-gold mb-2">
              {skillSections.reduce((acc, section) => acc + section.skills.length, 0)}+
            </div>
            <div className="text-sm text-primary-slate">Technologies</div>
          </Card>
          <Card className="p-6 text-center hover:shadow-glow transition-shadow duration-300">
            <div className="text-4xl font-bold text-primary-gold mb-2">3+</div>
            <div className="text-sm text-primary-slate">Projects Completed</div>
          </Card>
        </motion.div>

        {/* About Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-12"
        >
          <Card className="p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary-charcoal mb-4">
              My Journey
            </h2>
            <div className="space-y-4 text-primary-slate leading-relaxed">
              <p>
                I&apos;m a passionate {personalInfo.title} with expertise in building scalable,
                cloud-native applications. My journey in software development has been driven by
                curiosity and a desire to solve complex problems with elegant solutions.
              </p>
              <p>
                With hands-on experience in start-up environments, I&apos;ve learned to adapt
                quickly, wear multiple hats, and deliver high-quality code under pressure. I
                specialize in backend development with Python and AWS, but I&apos;m always eager to
                learn new technologies and expand my skill set.
              </p>
              <p>
                When I&apos;m not coding, you&apos;ll find me exploring new technologies,
                contributing to open-source projects, or learning about the latest trends in cloud
                computing and DevOps.
              </p>
            </div>
          </Card>
        </motion.div>

        {/* Technical Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-primary-charcoal mb-2">
                Technical Skills
              </h2>
              <p className="text-primary-slate">Technologies and tools I work with</p>
            </div>
            <div className="flex gap-2">
              {hasOpenSections ? (
                <Button variant="ghost" size="sm" onClick={collapseAll} className="text-sm">
                  Collapse All
                </Button>
              ) : (
                <Button variant="ghost" size="sm" onClick={expandAll} className="text-sm">
                  Expand All
                </Button>
              )}
            </div>
          </div>

          <div className="space-y-4">
            {skillSections.map((section, index) => (
              <SkillAccordion
                key={section.id}
                section={section}
                isOpen={openSections[section.id] || false}
                onToggle={() => toggleSection(section.id)}
                index={index}
              />
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Card className="p-8 sm:p-12 bg-gradient-to-br from-primary-navy to-primary-navy-dark text-white">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Interested in working together?</h2>
            <p className="text-white/80 mb-6 max-w-2xl mx-auto">
              I&apos;m always open to discussing new projects, creative ideas, or opportunities to
              be part of your vision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/Contact">
                <Button variant="primary" size="lg">
                  Get In Touch
                </Button>
              </a>
              <a href="/">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-primary-navy"
                >
                  View Projects
                </Button>
              </a>
            </div>
          </Card>
        </motion.div>
      </div>
    </main>
  );
}
