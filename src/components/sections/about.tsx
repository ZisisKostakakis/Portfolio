'use client';

import { personalInfo } from '@/lib/data/personal';

export default function AboutSection() {
  const stats = [
    { label: 'Years Experience', value: `${personalInfo.yearsOfExperience}+` },
    { label: 'Based in', value: 'UK' },
    { label: 'Status', value: 'Open to work' },
  ];

  const highlights = [
    {
      title: 'Cloud Native',
      description: 'Building scalable services on AWS with Lambda, ECS, and Terraform',
    },
    {
      title: 'Full Stack',
      description: 'End-to-end delivery from Python backends to React/Next.js frontends',
    },
    {
      title: 'Automation',
      description: 'CI/CD pipelines, infrastructure as code, and developer tooling',
    },
    {
      title: 'Start-up Ready',
      description: 'Thrives in fast-paced environments wearing multiple hats',
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
              I&apos;m a passionate {personalInfo.title} with expertise in building scalable,
              cloud-native applications. My journey in software development has been driven by
              curiosity and a desire to solve complex problems with elegant solutions.
            </p>
            <p className="text-lg text-primary-slate leading-relaxed">
              With hands-on experience in start-up environments, I&apos;ve learned to adapt quickly,
              wear multiple hats, and deliver high-quality code under pressure. I specialize in
              backend development with Python and AWS, but I&apos;m always eager to learn new
              technologies.
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
