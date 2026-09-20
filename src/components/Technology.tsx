import { technologies } from '@/data/portfolio';
import SectionLabel from './ui/SectionLabel';
import Reveal from './ui/Reveal';

export default function Technology() {
  return (
    <section className="section-padding section-padding-y">
      <div className="container-max">
        <div className="mb-16 md:mb-24">
          <SectionLabel className="mb-8">Toolkit</SectionLabel>
          <Reveal>
            <h2 className="font-display font-bold text-ink-50 text-section">
              Tools I Build With
            </h2>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="flex flex-wrap gap-x-6 gap-y-4 md:gap-x-10 md:gap-y-6">
            {technologies.map((tech, i) => (
              <span
                key={tech}
                className={`font-display font-medium tracking-tight transition-colors duration-300 hover:text-accent cursor-default ${
                  i % 3 === 0
                    ? 'text-3xl md:text-4xl lg:text-5xl text-ink-100'
                    : i % 3 === 1
                    ? 'text-2xl md:text-3xl lg:text-4xl text-ink-200'
                    : 'text-xl md:text-2xl lg:text-3xl text-ink-300'
                }`}
              >
                {tech}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
