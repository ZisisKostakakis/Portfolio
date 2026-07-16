import Image from 'next/image';
import { getAllSkills } from '@/lib/data/skills';
import { cn } from '@/lib/cn';

export default function TechMarquee() {
  const skills = getAllSkills();
  // Duplicate the list so the -50% translate loops seamlessly.
  const loop = [...skills, ...skills];

  return (
    <section aria-label="Technologies" className="relative border-y border-line-soft bg-surface/40 py-6">
      <div
        className="group flex overflow-hidden"
        style={{
          maskImage: 'linear-gradient(to right, transparent, black 12%, black 88%, transparent)',
          WebkitMaskImage:
            'linear-gradient(to right, transparent, black 12%, black 88%, transparent)',
        }}
      >
        <div className="flex w-max shrink-0 animate-marquee items-center gap-14 pr-14 group-hover:[animation-play-state:paused]">
          {loop.map((skill, i) => (
            <div key={`${skill.name}-${i}`} className="flex items-center gap-3 opacity-60 transition-opacity hover:opacity-100">
              <Image
                src={skill.src}
                alt={skill.name}
                width={28}
                height={28}
                className={cn('h-7 w-7 object-contain', skill.invert && 'invert')}
              />
              <span className="font-mono text-sm whitespace-nowrap text-ink-soft">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
