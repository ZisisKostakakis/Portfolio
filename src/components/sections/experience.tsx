'use client';

import { experiences } from '@/lib/data/experience';
import { Badge } from '@/components/ui/badge';

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-primary-white mb-16">
          Work <span className="text-gradient">Experience</span>
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-primary-gray-dark md:-translate-x-px" />

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div key={exp.id} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 w-3 h-3 rounded-full bg-primary-gold border-2 border-primary-navy -translate-x-[5px] md:-translate-x-[7px] top-8" />

                  <div
                    className={`md:w-1/2 pl-8 md:pl-0 ${isLeft ? 'md:pr-12' : 'md:ml-auto md:pl-12'}`}
                  >
                    <div className="p-6 rounded-xl bg-primary-navy-light border border-primary-gray-dark hover:border-primary-gold/30 transition-colors duration-200">
                      <p className="text-sm text-primary-slate mb-1">{exp.duration}</p>
                      <h3 className="text-xl font-bold text-primary-white">{exp.company}</h3>
                      <p className="text-primary-gold font-medium mb-3">{exp.position}</p>
                      {exp.location && (
                        <p className="text-sm text-primary-slate mb-3">{exp.location}</p>
                      )}
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
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
