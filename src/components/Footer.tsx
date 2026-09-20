import { Github, Linkedin } from 'lucide-react';
import Reveal from './ui/Reveal';

export default function Footer() {
  return (
    <footer className="section-padding pt-16 pb-10 border-t border-ink-700/60">
      <div className="container-max">
        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
            <div className="md:col-span-6">
              <h3 className="font-display text-2xl md:text-3xl font-medium text-ink-50 tracking-tight">
                Madhav Pathak
              </h3>
              <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2">
                <span className="label">Full Stack Developer</span>
                <span className="label">AI Engineer</span>
                <span className="label">Cloud Developer</span>
              </div>
            </div>

            <div className="md:col-span-3">
              <span className="label block mb-4">Links</span>
              <div className="flex flex-col gap-2">
                <a
                  href="#work"
                  className="font-display text-sm text-ink-200 hover:text-ink-50 transition-colors"
                >
                  Work
                </a>
                <a
                  href="#about"
                  className="font-display text-sm text-ink-200 hover:text-ink-50 transition-colors"
                >
                  About
                </a>
                <a
                  href="#services"
                  className="font-display text-sm text-ink-200 hover:text-ink-50 transition-colors"
                >
                  Services
                </a>
                <a
                  href="#contact"
                  className="font-display text-sm text-ink-200 hover:text-ink-50 transition-colors"
                >
                  Contact
                </a>
              </div>
            </div>

            <a
              href="#admin"
              className="fixed bottom-3 right-3 z-40 text-[9px] text-ink-700 hover:text-ink-400 transition-colors"
              aria-label="Open admin panel"
            >
              •
            </a>

            <div className="md:col-span-3">
              <span className="label block mb-4">Social</span>
              <div className="flex flex-col gap-2">
                <a
                  href="https://github.com/madhavpathakk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-display text-sm text-ink-200 hover:text-ink-50 transition-colors"
                >
                  <Github size={15} /> GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/madhavpathakk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-display text-sm text-ink-200 hover:text-ink-50 transition-colors"
                >
                  <Linkedin size={15} /> LinkedIn
                </a>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="pt-8 border-t border-ink-700/40 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-display text-xs text-ink-400">
            &copy; {new Date().getFullYear()} Madhav Pathak. All rights reserved.
          </p>
          <p className="font-display text-xs text-ink-400">
            Designed and built by Madhav Pathak.
          </p>
        </div>
      </div>
    </footer>
  );
}
