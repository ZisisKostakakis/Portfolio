'use client';

import Image from 'next/image';
import { skillSections } from '@/lib/data/skills';
import Reveal from '@/components/reveal';
import SectionHeading from '@/components/section-heading';

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeading index="04" eyebrow="what I work with">
          Technical <span className="text-gradient">Skills</span>
        </SectionHeading>

        <div className="grid md:grid-cols-2 gap-10">
          {skillSections.map((section, i) => (
            <Reveal key={section.id} delay={(i % 2) * 0.08}>
              <h3 className="text-xl font-semibold text-primary-white mb-4">{section.title}</h3>
              <div className="flex flex-wrap gap-3">
                {section.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2.5 px-4 py-2.5 rounded-lg bg-primary-navy-light border border-primary-gray-dark hover:border-primary-gold/30 hover:-translate-y-0.5 hover:shadow-glow-sm transition-all duration-200"
                  >
                    <div className="relative w-6 h-6 flex-shrink-0">
                      <Image
                        src={skill.src}
                        width={24}
                        height={24}
                        alt={skill.name}
                        className={`object-contain${skill.invert ? ' brightness-0 invert' : ''}`}
                      />
                    </div>
                    <span className="text-sm font-medium text-primary-charcoal">{skill.name}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
