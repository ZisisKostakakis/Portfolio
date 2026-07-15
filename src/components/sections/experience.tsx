import { sortedExperiences } from '@/lib/data/experience';
import SectionHeading from '@/components/section-heading';
import Reveal from '@/components/reveal';
import { Badge } from '@/components/ui/badge';

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative px-4 py-28 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading index="02" eyebrow="experience">
          Where I&apos;ve worked
        </SectionHeading>

        <ol className="relative before:absolute before:top-2 before:bottom-2 before:left-[7px] before:w-px before:bg-gradient-to-b before:from-accent/70 before:via-line before:to-transparent">
          {sortedExperiences.map((exp, i) => (
            <li
              key={exp.id}
              className="relative mb-12 border-b border-line-soft pb-12 pl-10 last:mb-0 last:border-b-0 last:pb-0 sm:pl-14"
            >
              {/* Timeline node */}
              <span
                aria-hidden
                className="absolute top-2 left-0 flex h-[15px] w-[15px] items-center justify-center"
              >
                <span className="absolute h-full w-full rounded-full border border-accent/60 bg-void" />
                <span className="relative h-[5px] w-[5px] rounded-full bg-accent" />
              </span>

              <Reveal delay={i * 0.05}>
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="font-display text-xl font-bold text-ink sm:text-2xl">
                      {exp.position}
                    </h3>
                    <p className="mt-1 text-lg text-accent-soft">{exp.company}</p>
                  </div>
                  <div className="flex flex-col items-start gap-2 sm:items-end">
                    <span className="font-mono text-sm text-muted">{exp.duration}</span>
                    <div className="flex gap-2">
                      <Badge variant={exp.type === 'contract' ? 'accent' : 'neutral'}>
                        {exp.type}
                      </Badge>
                      {exp.location && <Badge variant="outline">{exp.location}</Badge>}
                    </div>
                  </div>
                </div>

                {exp.description.length > 0 && (
                  <ul className="mt-6 space-y-2.5">
                    {exp.description.map((point, j) => (
                      <li key={j} className="flex items-start gap-3 text-[15px] leading-relaxed text-muted">
                        <span aria-hidden className="mt-2 h-1 w-4 shrink-0 rounded-full bg-accent/50" />
                        {point}
                      </li>
                    ))}
                  </ul>
                )}

                {exp.technologies.length > 0 && (
                  <div className="mt-6 flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md bg-white/[0.04] px-2.5 py-1 font-mono text-xs text-ink-soft"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
