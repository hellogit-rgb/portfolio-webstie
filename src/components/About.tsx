import Reveal from './ui/Reveal';
import SectionLabel from './ui/SectionLabel';
import { ArrowUpRight } from 'lucide-react';

export default function About({ resumeUrl }: { resumeUrl: string }) {
  return (
    <section id="about" className="section-padding section-padding-y">
      <div className="container-max">
        <SectionLabel className="mb-16 md:mb-24">About</SectionLabel>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="font-display text-2xl md:text-3xl lg:text-4xl font-light text-ink-100 leading-[1.3] tracking-tight">
                I'm Madhav, a developer focused on building practical digital products across web
                development, artificial intelligence, cloud infrastructure, and automation.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="mt-8 md:mt-10 text-lg md:text-xl text-ink-300 leading-relaxed max-w-2xl font-body font-light">
                I enjoy turning ambiguous ideas into clear, functional systems that people can
                actually use.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-4 lg:col-start-9 flex flex-col gap-8 mt-8 lg:mt-2">
            <Reveal delay={0.2}>
              <div>
                <span className="label block mb-3">Focus</span>
                <div className="flex flex-col gap-2">
                  {['Web Development', 'AI Integrations', 'Cloud Systems', 'Automation'].map((f) => (
                    <span
                      key={f}
                      className="font-display text-base text-ink-200 font-medium"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <div>
                <span className="label block mb-3">Based in</span>
                <span className="font-display text-base text-ink-200 font-medium">
                  India — Working Worldwide
                </span>
              </div>
            </Reveal>
            {resumeUrl && (
              <Reveal delay={0.4}>
                <a
                  href={resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-display text-sm font-medium text-ink-100 hover:text-accent transition-colors"
                >
                  View resume <ArrowUpRight size={16} />
                </a>
              </Reveal>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
