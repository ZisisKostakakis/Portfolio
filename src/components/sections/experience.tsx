'use client';

import { experiences } from '@/lib/data/experience';
import { Badge } from '@/components/ui/badge';
import Reveal from '@/components/reveal';
import SectionHeading from '@/components/section-heading';

function ExperienceCard({ exp }: { exp: (typeof experiences)[number] }) {
  return (
    <div className="relative p-6 rounded-xl bg-primary-navy-light border border-primary-gray-dark hover:border-primary-gold/30 hover:shadow-glow-sm transition-all duration-200 before:absolute before:left-0 before:top-6 before:bottom-6 before:w-0.5 before:rounded-full before:bg-gradient-to-b before:from-primary-gold/60 before:to-transparent">
      <p className="font-mono text-sm text-primary-slate mb-1">{exp.duration}</p>
      <h3 className="text-xl font-bold text-primary-white">{exp.company}</h3>
      <p className="text-primary-gold font-medium mb-3">{exp.position}</p>
      {exp.location && <p className="text-sm text-primary-slate mb-3">{exp.location}</p>}
      <ul className="space-y-2 mb-4">
        {exp.description.map((item, i) => (
          <li key={i} className="text-sm text-primary-slate flex items-start gap-2">
            <span className="text-primary-gold mt-1.5 flex-shrink-0">&#8226;</span>
            {item}
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-2">
        {exp.technologies.map((tech) => (
          <Badge key={tech} variant="secondary" size="sm">
            {tech}
          </Badge>
        ))}
      </div>
    </div>
  );
}

export default function ExperienceSection() {
  const permanent = experiences.filter((e) => e.type === 'permanent');
  const contracts = experiences.filter((e) => e.type === 'contract');

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <SectionHeading index="02" eyebrow="where I've been">
          Work <span className="text-gradient">Experience</span>
        </SectionHeading>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Permanent column */}
          <div>
            <p className="font-mono text-xs font-semibold tracking-widest uppercase text-primary-gold/70 mb-6">
              Permanent
            </p>
            <div className="flex flex-col gap-6">
              {permanent.map((exp, i) => (
                <Reveal key={exp.id} delay={i * 0.08}>
                  <ExperienceCard exp={exp} />
                </Reveal>
              ))}
            </div>
          </div>

          {/* Contract column */}
          <div>
            <p className="font-mono text-xs font-semibold tracking-widest uppercase text-primary-gold/70 mb-6">
              Contract
            </p>
            <div className="flex flex-col gap-6">
              {contracts.map((exp, i) => (
                <Reveal key={exp.id} delay={i * 0.08}>
                  <ExperienceCard exp={exp} />
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
