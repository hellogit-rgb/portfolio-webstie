import { motion, type Variants } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import MagneticButton from './ui/MagneticButton';

const EASE = [0.22, 1, 0.36, 1] as const;

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.4 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
};

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col justify-end section-padding pb-16 md:pb-24 pt-32"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="container-max w-full"
      >
        <motion.div variants={item} className="flex items-center gap-3 mb-8 md:mb-12">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-60 animate-ping" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
          </span>
          <span className="label">Available for Freelance Projects</span>
        </motion.div>

        <motion.h1
          variants={item}
          className="font-display font-bold text-ink-50 text-[clamp(2.75rem,9vw,8rem)] leading-[0.95] tracking-tightest"
        >
          Madhav Pathak
        </motion.h1>

        <motion.div
          variants={item}
          className="flex flex-wrap gap-x-6 gap-y-1 mt-4 md:mt-6"
        >
          {['Full Stack Developer', 'AI Engineer', 'Cloud Developer'].map((role, i) => (
            <span
              key={role}
              className={`font-display text-sm md:text-base font-medium tracking-wide-label uppercase ${
                i === 1 ? 'text-ink-300' : i === 2 ? 'text-ink-400' : 'text-ink-200'
              }`}
            >
              {role}
            </span>
          ))}
        </motion.div>

        <motion.div
          variants={item}
          className="mt-10 md:mt-16 max-w-4xl"
        >
          <p className="font-display text-2xl md:text-4xl lg:text-5xl font-light text-ink-100 leading-[1.15] tracking-tight">
            Building digital products with{' '}
            <span className="text-ink-400">code</span>, <span className="text-ink-400">AI</span>, and{' '}
            <span className="text-ink-400">cloud</span>.
          </p>
          <p className="mt-6 md:mt-8 text-base md:text-lg text-ink-300 max-w-2xl leading-relaxed font-body">
            I build modern web applications, AI powered experiences, and cloud based systems for
            ideas that need to become real products.
          </p>
        </motion.div>

        <motion.div
          variants={item}
          className="flex flex-col sm:flex-row gap-4 mt-10 md:mt-14"
        >
          <MagneticButton href="#work" variant="primary">
            View My Work
          </MagneticButton>
          <MagneticButton href="#contact" variant="secondary">
            Let's Work Together
          </MagneticButton>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="label text-[10px]">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={14} className="text-ink-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}
