import { motion } from 'framer-motion';
import { processSteps } from '@/data/portfolio';
import SectionLabel from './ui/SectionLabel';
import Reveal from './ui/Reveal';

export default function HowIWork() {
  return (
    <section className="section-padding section-padding-y">
      <div className="container-max">
        <div className="mb-16 md:mb-24">
          <SectionLabel className="mb-8">Process</SectionLabel>
          <Reveal>
            <h2 className="font-display font-bold text-ink-50 text-section">
              How I Work
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-ink-700/40 border border-ink-700/40">
          {processSteps.map((step, i) => (
            <Reveal key={step.number} delay={i * 0.1}>
              <div className="bg-ink-950 p-8 md:p-10 h-full flex flex-col group hover:bg-ink-900/50 transition-colors duration-500">
                <motion.span
                  className="font-display text-5xl md:text-6xl font-bold text-ink-600 group-hover:text-accent transition-colors duration-500 tabular-nums"
                  whileHover={{ scale: 1.05 }}
                >
                  {step.number}
                </motion.span>
                <h3 className="font-display text-xl md:text-2xl font-medium text-ink-50 mt-6 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-sm md:text-base text-ink-300 mt-3 leading-relaxed font-body font-light">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
