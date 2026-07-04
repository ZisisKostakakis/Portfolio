import Image from 'next/image';
import { ProjectThumbSpec } from '@/lib/types';

function ChromeDots() {
  return (
    <div className="flex items-center gap-1.5">
      <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
      <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
      <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
    </div>
  );
}

export default function ProjectThumb({ thumb, alt }: { thumb: ProjectThumbSpec; alt: string }) {
  return (
    <div className="flex h-full flex-col bg-primary-navy-dark">
      <div className="flex items-center gap-2 px-3 py-2 bg-primary-gray/50 border-b border-primary-gray-dark shrink-0">
        <ChromeDots />
        {thumb.kind === 'browser' ? (
          <span className="mx-auto max-w-[75%] truncate rounded bg-primary-navy/60 px-2 py-0.5 font-mono text-[10px] text-primary-slate">
            {thumb.domain}
          </span>
        ) : (
          <span className="ml-1 truncate font-mono text-[10px] text-primary-slate">
            {thumb.title}
          </span>
        )}
      </div>

      {thumb.kind === 'terminal' ? (
        <pre className="flex-1 overflow-hidden p-4 font-mono text-xs leading-relaxed">
          {thumb.lines.map((line, i) => (
            <div key={i} className="truncate">
              {line.prompt && <span className="text-primary-gold">$ </span>}
              <span className={line.accent ? 'text-green-400' : 'text-primary-charcoal'}>
                {line.text}
              </span>
            </div>
          ))}
        </pre>
      ) : (
        <div className="relative flex-1">
          <Image
            src={thumb.src}
            alt={alt}
            fill
            className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
    </div>
  );
}
