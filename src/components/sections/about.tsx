import Image from 'next/image';
import { personalInfo } from '@/lib/data/personal';
import { skillSections } from '@/lib/data/skills';
import SectionHeading from '@/components/section-heading';
import Reveal from '@/components/reveal';
import { cn } from '@/lib/cn';

const highlights = [
  {
    title: 'Cloud',
    description: 'AWS solutions built with Lambda, EC2, Terraform, and CloudFormation',
  },
  {
    title: 'DevSecOps',
    description:
      'System hardening, penetration testing, CI/CD pipelines, and private LLM/AI integration',
  },
  {
    title: 'Automation',
    description: 'Self-healing infrastructure, monitoring tools, and removing manual toil',
  },
  {
    title: 'Technical Leadership',
    description:
      'Leading cross-functional teams to MVP, conducting interviews, and translating business needs into architecture',
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="section-band relative px-4 py-28 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading index="01" eyebrow="about">
          About me
        </SectionHeading>

        <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          {/* Bio, open text */}
          <Reveal>
            <p className="text-xl leading-relaxed text-ink sm:text-2xl sm:leading-relaxed">
              I&apos;m a {personalInfo.title} working across backend development, infrastructure
              automation, and technical leadership. I build AWS systems with Terraform and
              Python, and I automate away the manual work that slows engineering teams down.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              On the DevSecOps side I do system hardening, penetration testing, and private
              AI/LLM integration. I also work with virtualisation (Proxmox), disaster recovery,
              and self-healing infrastructure.
            </p>
          </Reveal>

          {/* Toolkit, hairline rows */}
          <Reveal delay={0.1}>
            <h3 className="font-mono text-xs tracking-[0.2em] text-accent-soft uppercase">
              Toolkit
            </h3>
            <div className="mt-3 divide-y divide-line-soft">
              {skillSections.map((section) => (
                <div key={section.id} className="py-5">
                  <p className="mb-3 text-sm font-semibold text-ink">{section.title}</p>
                  <div className="flex flex-wrap gap-2">
                    {section.skills.map((skill) => (
                      <span
                        key={skill.name}
                        className="flex items-center gap-1.5 rounded-lg border border-line-soft bg-white/[0.03] px-2.5 py-1.5 text-xs text-ink-soft"
                      >
                        <Image
                          src={skill.src}
                          alt=""
                          width={14}
                          height={14}
                          className={cn('h-3.5 w-3.5 object-contain', skill.invert && 'invert')}
                        />
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Highlights, open grid with accent rules */}
        <div className="mt-20 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.06}>
              <div className="relative pt-6 before:absolute before:top-0 before:left-0 before:h-px before:w-full before:bg-line-soft after:absolute after:top-0 after:left-0 after:h-px after:w-12 after:bg-accent">
                <h3 className="font-display text-lg font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
