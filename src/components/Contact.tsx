import { Github, Linkedin, ArrowUpRight } from 'lucide-react';
import SectionLabel from './ui/SectionLabel';
import Reveal from './ui/Reveal';
import MagneticButton from './ui/MagneticButton';

export default function Contact() {
  return (
    <section id="contact" className="section-padding section-padding-y">
      <div className="container-max">
        <SectionLabel className="mb-12 md:mb-16">Contact</SectionLabel>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8">
            <Reveal>
              <h2 className="font-display font-bold text-ink-50 text-[clamp(3rem,9vw,7rem)] leading-[0.95] tracking-tightest">
                Have an idea?
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <h3 className="font-display font-light text-ink-400 text-[clamp(3rem,9vw,7rem)] leading-[0.95] tracking-tightest italic mt-1">
                Let's build it.
              </h3>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mt-10 md:mt-12 text-lg md:text-xl text-ink-300 max-w-2xl leading-relaxed font-body font-light">
                Have a product idea, website, AI concept, or automation problem? Let's talk about
                what you're trying to build.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4 mt-10 md:mt-12">
                <MagneticButton
                  href="https://linkedin.com/in/madhavpathak"
                  variant="primary"
                >
                  Get in Touch
                </MagneticButton>
                <MagneticButton
                  href="https://github.com/madhavpathak"
                  variant="secondary"
                >
                  View GitHub
                </MagneticButton>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-8 mt-8 lg:mt-2">
            <Reveal delay={0.2}>
              <div>
                <span className="label block mb-4">Connect</span>
                <div className="flex flex-col gap-4">
                  <a
                    href="https://github.com/madhavpathak"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between py-3 border-b border-ink-700/60 hover:border-accent transition-colors duration-300"
                  >
                    <span className="flex items-center gap-3 font-display text-base text-ink-100 group-hover:text-ink-50 transition-colors">
                      <Github size={18} className="text-ink-300" />
                      GitHub
                    </span>
                    <ArrowUpRight
                      size={16}
                      className="text-ink-400 group-hover:text-accent transition-colors"
                    />
                  </a>
                  <a
                    href="https://linkedin.com/in/madhavpathak"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between py-3 border-b border-ink-700/60 hover:border-accent transition-colors duration-300"
                  >
                    <span className="flex items-center gap-3 font-display text-base text-ink-100 group-hover:text-ink-50 transition-colors">
                      <Linkedin size={18} className="text-ink-300" />
                      LinkedIn
                    </span>
                    <ArrowUpRight
                      size={16}
                      className="text-ink-400 group-hover:text-accent transition-colors"
                    />
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
