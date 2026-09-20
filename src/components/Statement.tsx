import { useRef } from 'react';
import { motion } from 'framer-motion';

export default function Statement() {
  const ref = useRef<HTMLDivElement>(null);
  const words = ['Ideas', 'become', 'products.'];

  return (
    <section
      ref={ref}
      className="section-padding section-padding-y relative overflow-hidden"
    >
      <div className="container-max">
        <div className="flex flex-col items-center text-center">
          <h2 className="font-display font-bold text-ink-50 text-[clamp(3rem,12vw,11rem)] leading-[0.9] tracking-tightest">
            {words.map((word, i) => (
              <span key={i} className="block overflow-hidden">
                <motion.span
                  className="inline-block"
                  initial={{ y: '100%' }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true, margin: '-15%' }}
                  transition={{
                    duration: 1,
                    delay: i * 0.15,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {word === 'become' ? (
                    <span className="text-ink-400 italic font-light">{word}</span>
                  ) : (
                    word
                  )}
                </motion.span>
              </span>
            ))}
          </h2>
        </div>
      </div>
    </section>
  );
}
