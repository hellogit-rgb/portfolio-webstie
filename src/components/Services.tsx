import { motion } from 'framer-motion';
import { services } from '@/data/portfolio';
import SectionLabel from './ui/SectionLabel';
import Reveal from './ui/Reveal';

export default function Services() {
  return (
    <section id="services" className="section-padding section-padding-y">
      <div className="container-max">
        <div className="mb-16 md:mb-24">
          <SectionLabel className="mb-8">Services</SectionLabel>
          <Reveal>
            <h2 className="font-display font-bold text-ink-50 text-section">
              What I Do
            </h2>
          </Reveal>
        </div>

        <div className="border-t border-ink-700/60">
          {services.map((service, i) => (
            <Reveal key={service.number} delay={i * 0.1}>
              <ServiceRow service={service} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceRow({
  service,
}: {
  service: (typeof services)[0];
}) {
  return (
    <motion.div
      whileHover="hover"
      className="group border-b border-ink-700/60 py-10 md:py-14 cursor-default relative overflow-hidden"
    >
      <div className="grid grid-cols-12 gap-4 md:gap-8 items-start">
        <div className="col-span-2 md:col-span-1">
          <span className="font-display text-sm md:text-base text-ink-400 font-medium tabular-nums">
            {service.number}
          </span>
        </div>

        <div className="col-span-10 md:col-span-5">
          <motion.h3
            variants={{
              hover: { x: 8 },
            }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-2xl md:text-4xl lg:text-5xl font-medium text-ink-100 group-hover:text-ink-50 tracking-tight transition-colors duration-300"
          >
            {service.title}
          </motion.h3>
        </div>

        <div className="col-span-12 md:col-span-4 mt-2 md:mt-0">
          <p className="text-base md:text-lg text-ink-300 leading-relaxed font-body font-light">
            {service.description}
          </p>
          <div className="flex flex-wrap gap-2 mt-4 md:mt-5">
            {service.technologies.map((tech) => (
              <span
                key={tech}
                className="font-display text-[11px] uppercase tracking-wide-label text-ink-400 border border-ink-700/60 px-3 py-1.5 rounded-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="hidden md:flex col-span-2 items-center justify-end">
          <motion.div
            variants={{ hover: { scale: 1, opacity: 1 } }}
            initial={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="w-2 h-2 rounded-full bg-accent"
          />
        </div>
      </div>
    </motion.div>
  );
}
