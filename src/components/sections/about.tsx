'use client';

import { personalInfo } from '@/lib/data/personal';

export default function AboutSection() {
  const stats = [
    { label: 'Based in', value: 'UK' },
    { label: 'Status', value: 'Open to work' },
  ];

  const highlights = [
    {
      title: 'Cloud Native',
      description:
        'Architecting scalable AWS solutions with Lambda, EC2, Terraform, and CloudFormation',
    },
    {
      title: 'DevSecOps',
      description:
        'System hardening, penetration testing, CI/CD pipelines, and private LLM/AI integration',
    },
    {
      title: 'Automation',
      description:
        'Self-healing infrastructure, monitoring tools, and engineering overhead elimination',
    },
    {
      title: 'Technical Leadership',
      description:
        'Leading cross-functional teams to MVP, conducting interviews, and translating business needs into architecture',
    },
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-primary-white mb-16">
          About <span className="text-gradient">Me</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left - Bio */}
          <div className="space-y-6">
            <p className="text-lg text-primary-slate leading-relaxed">
              I&apos;m a {personalInfo.title} with extensive expertise in backend development,
              infrastructure automation, and technical leadership. I architect scalable AWS
              solutions using Terraform and Python, and have a proven track record of reducing
              engineering overhead by 100% through strategic automation.
            </p>
            <p className="text-lg text-primary-slate leading-relaxed">
              Skilled in DevSecOps practices including system hardening, penetration testing, and
              private AI/LLM integration. I bridge the gap between development and operations with
              advanced knowledge of virtualisation (Proxmox), disaster recovery, and self-healing
              infrastructure.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="px-5 py-3 rounded-lg bg-primary-gray-light border border-primary-gray-dark"
                >
                  <p className="text-xl font-bold text-primary-gold">{stat.value}</p>
                  <p className="text-sm text-primary-slate">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Highlight cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="p-5 rounded-xl bg-primary-navy-light border border-primary-gray-dark hover:border-primary-gold/30 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-primary-white mb-2">{item.title}</h3>
                <p className="text-sm text-primary-slate">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
