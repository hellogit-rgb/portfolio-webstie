import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';
import { faqItems } from '@/data/portfolio';
import SectionLabel from './ui/SectionLabel';
import Reveal from './ui/Reveal';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-padding section-padding-y">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-4">
            <SectionLabel className="mb-8">FAQ</SectionLabel>
            <Reveal>
              <h2 className="font-display font-bold text-ink-50 text-3xl md:text-4xl tracking-tight">
                Common Questions
              </h2>
            </Reveal>
          </div>

          <div className="lg:col-span-8">
            <div className="border-t border-ink-700/60">
              {faqItems.map((item, i) => (
                <Reveal key={i} delay={i * 0.05}>
                  <div className="border-b border-ink-700/60">
                    <button
                      onClick={() => setOpenIndex(openIndex === i ? null : i)}
                      className="w-full flex items-center justify-between gap-4 py-6 md:py-8 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm group"
                      aria-expanded={openIndex === i}
                    >
                      <h3
                        className={`font-display text-xl md:text-2xl lg:text-3xl font-medium tracking-tight transition-colors duration-300 ${
                          openIndex === i ? 'text-accent' : 'text-ink-100 group-hover:text-ink-50'
                        }`}
                      >
                        {item.question}
                      </h3>
                      <motion.span
                        animate={{ rotate: openIndex === i ? 45 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="shrink-0 text-ink-400"
                      >
                        <Plus size={22} />
                      </motion.span>
                    </button>
                    <AnimatePresence>
                      {openIndex === i && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <p className="pb-6 md:pb-8 text-base md:text-lg text-ink-300 leading-relaxed font-body font-light max-w-2xl">
                            {item.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
