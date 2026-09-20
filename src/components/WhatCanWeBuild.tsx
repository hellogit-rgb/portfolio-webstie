import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { buildOptions } from '@/data/portfolio';
import SectionLabel from './ui/SectionLabel';
import Reveal from './ui/Reveal';

export default function WhatCanWeBuild() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="section-padding section-padding-y">
      <div className="container-max">
        <div className="mb-16 md:mb-24">
          <SectionLabel className="mb-8">Possibilities</SectionLabel>
          <Reveal>
            <h2 className="font-display font-bold text-ink-50 text-section">
              What Can We Build?
            </h2>
          </Reveal>
        </div>

        <div className="border-t border-ink-700/60">
          {buildOptions.map((option, i) => (
            <Reveal key={option.label} delay={i * 0.06}>
              <div
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group border-b border-ink-700/60 py-8 md:py-10 cursor-default relative"
              >
                <div className="flex items-center justify-between gap-4">
                  <motion.h3
                    animate={{
                      color: hoveredIndex === i ? '#3b82f6' : '#ece7dc',
                      x: hoveredIndex === i ? 12 : 0,
                    }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="font-display text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight"
                  >
                    {option.label}
                  </motion.h3>

                  <motion.span
                    animate={{
                      opacity: hoveredIndex === i ? 1 : 0.3,
                    }}
                    className="font-display text-sm text-ink-400 tabular-nums hidden md:block"
                  >
                    0{i + 1}
                  </motion.span>
                </div>

                <AnimatePresence>
                  {hoveredIndex === i && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden text-base md:text-lg text-ink-300 font-body font-light mt-4 max-w-2xl"
                    >
                      {option.description}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
