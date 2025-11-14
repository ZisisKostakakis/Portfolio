'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { SkillSection } from '@/lib/types';
import { cn } from '@/lib/utils/cn';

interface SkillAccordionProps {
  section: SkillSection;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}

export default function SkillAccordion({ section, isOpen, onToggle, index }: SkillAccordionProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    }
  }, [section.skills]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onToggle();
    }
  };

  return (
    <motion.div
      className={cn(
        'rounded-lg overflow-hidden transition-all duration-300',
        'bg-white/5 hover:bg-white/10 border border-white/10'
      )}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <button
        onClick={onToggle}
        onKeyDown={handleKeyDown}
        className="w-full p-4 sm:p-5 text-left flex justify-between items-center transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-orange focus-visible:ring-offset-2 focus-visible:ring-offset-primary-gray"
        aria-expanded={isOpen}
        aria-controls={`section-${section.id}`}
      >
        <div className="flex items-center gap-3">
          <motion.div
            className="w-10 h-10 rounded-lg bg-primary-orange/10 flex items-center justify-center"
            animate={{ rotate: isOpen ? 90 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <svg
              className="w-5 h-5 text-primary-orange"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </motion.div>
          <h3 className="text-lg sm:text-xl font-semibold">
            {section.title}
            <span className="ml-2 text-sm text-primary-navy/60">
              ({section.skills.length})
            </span>
          </h3>
        </div>
        <motion.span
          className="text-2xl font-light text-primary-orange"
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
        >
          +
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`section-${section.id}`}
            ref={contentRef}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: height, opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="p-4 sm:p-5 pt-0 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {section.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skill.name}
                  className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-primary-orange/5 transition-all duration-200 group"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: skillIndex * 0.05 }}
                  whileHover={{ x: 4 }}
                >
                  <div className="relative w-10 h-10 flex-shrink-0">
                    <Image
                      src={skill.src}
                      width={40}
                      height={40}
                      alt={skill.name}
                      className="object-contain transform group-hover:scale-110 transition-transform duration-200"
                    />
                  </div>
                  <span className="font-medium text-sm sm:text-base group-hover:text-primary-orange transition-colors">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
