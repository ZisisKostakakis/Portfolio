'use client';

import { useRef, useEffect, memo } from 'react';
import Image from 'next/image';
import { SkillSection } from '@/lib/types';
import { cn } from '@/lib/utils/cn';

interface SkillAccordionProps {
  section: SkillSection;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}

function SkillAccordion({ section, isOpen, onToggle }: SkillAccordionProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current && innerRef.current) {
      if (isOpen) {
        const height = innerRef.current.offsetHeight;
        contentRef.current.style.maxHeight = `${height}px`;
      } else {
        contentRef.current.style.maxHeight = '0px';
      }
    }
  }, [isOpen]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onToggle();
    }
  };

  return (
    <div
      className={cn(
        'rounded-lg overflow-hidden transition-all duration-200',
        'bg-white/5 hover:bg-white/10 border border-white/10'
      )}
    >
      <button
        onClick={onToggle}
        onKeyDown={handleKeyDown}
        className="w-full p-4 sm:p-5 text-left flex justify-between items-center transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-orange focus-visible:ring-offset-2 focus-visible:ring-offset-primary-gray"
        aria-expanded={isOpen}
        aria-controls={`section-${section.id}`}
      >
        <div className="flex items-center gap-3">
          <div
            className={cn(
              'w-10 h-10 rounded-lg bg-primary-orange/10 flex items-center justify-center',
              'transition-transform duration-200',
              isOpen && 'rotate-90'
            )}
          >
            <svg
              className="w-5 h-5 text-primary-orange"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
          <h3 className="text-lg sm:text-xl font-semibold">
            {section.title}
            <span className="ml-2 text-sm text-primary-navy/60">({section.skills.length})</span>
          </h3>
        </div>
        <span
          className={cn(
            'text-2xl font-light text-primary-orange',
            'transition-transform duration-200',
            isOpen && 'rotate-45'
          )}
        >
          +
        </span>
      </button>

      <div
        id={`section-${section.id}`}
        ref={contentRef}
        className="overflow-hidden transition-all duration-200 ease-in-out"
        style={{ maxHeight: '0px' }}
      >
        <div ref={innerRef} className="p-4 sm:p-5 pt-0 grid grid-cols-1 sm:grid-cols-2 gap-3">
          {section.skills.map((skill) => (
            <div
              key={skill.name}
              className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-primary-orange/5 transition-all duration-200 group"
            >
              <div className="relative w-10 h-10 flex-shrink-0">
                <Image
                  src={skill.src}
                  width={40}
                  height={40}
                  alt={skill.name}
                  className="object-contain group-hover:scale-110 transition-transform duration-200"
                />
              </div>
              <span className="font-medium text-sm sm:text-base group-hover:text-primary-orange transition-colors">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default memo(SkillAccordion);
