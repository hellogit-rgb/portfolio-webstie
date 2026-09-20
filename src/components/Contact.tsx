import { type FormEvent, useState } from 'react';
import { Github, Linkedin, ArrowUpRight, Send } from 'lucide-react';
import SectionLabel from './ui/SectionLabel';
import Reveal from './ui/Reveal';

const GITHUB_URL = 'https://github.com/madhavpathakk';
const LINKEDIN_URL = 'https://www.linkedin.com/in/madhavpathakk/';
const WEB3FORMS_URL = 'https://api.web3forms.com/submit';
const WEB3FORMS_ACCESS_KEY = 'd2d2a3a9-a860-4835-be00-05daecfe4adc';

export default function Contact() {
  const [result, setResult] = useState('');
  const [sending, setSending] = useState(false);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSending(true);
    setResult('');

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append('access_key', WEB3FORMS_ACCESS_KEY);
    formData.append('subject', 'New portfolio contact from Madhav Pathak');
    formData.append('from_name', 'Madhav Pathak portfolio');

    try {
      const response = await fetch(WEB3FORMS_URL, {
        method: 'POST',
        body: formData,
      });
      const data = (await response.json()) as { success?: boolean };

      if (data.success) {
        setResult('Thanks for reaching out. I will get back to you soon.');
        form.reset();
      } else {
        setResult('Something went wrong. Please try again or use LinkedIn.');
      }
    } catch {
      setResult('Something went wrong. Please try again or use LinkedIn.');
    } finally {
      setSending(false);
    }
  };

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
                <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-accent text-ink-950 px-5 py-3 font-display text-sm font-medium hover:bg-ink-50 transition-colors">
                  LinkedIn <ArrowUpRight size={16} />
                </a>
                <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 border border-ink-600 text-ink-100 px-5 py-3 font-display text-sm font-medium hover:border-accent hover:text-accent transition-colors">
                  GitHub <ArrowUpRight size={16} />
                </a>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-8 mt-8 lg:mt-2">
            <Reveal delay={0.2}>
              <form onSubmit={onSubmit} className="border border-ink-700/60 p-6 md:p-8">
                <div className="mb-6">
                  <span className="label block mb-2">Let's connect</span>
                  <p className="text-sm text-ink-300 leading-relaxed">Tell me a little about what you are building.</p>
                </div>
                <div className="flex flex-col gap-4">
                  <label className="block">
                    <span className="label block mb-2">Name</span>
                    <input type="text" name="name" required autoComplete="name" className="contact-input" />
                  </label>
                  <label className="block">
                    <span className="label block mb-2">Email</span>
                    <input type="email" name="email" required autoComplete="email" className="contact-input" />
                  </label>
                  <label className="block">
                    <span className="label block mb-2">Message</span>
                    <textarea name="message" required rows={5} className="contact-input resize-y" />
                  </label>
                  <button type="submit" disabled={sending} className="inline-flex items-center justify-center gap-2 bg-accent text-ink-950 px-5 py-3 font-display text-sm font-medium hover:bg-ink-50 disabled:cursor-wait disabled:opacity-60 transition-colors">
                    <Send size={16} /> {sending ? 'Sending...' : 'Send message'}
                  </button>
                  {result && <p aria-live="polite" className="text-sm text-ink-300 leading-relaxed">{result}</p>}
                </div>
              </form>
            </Reveal>

            <Reveal delay={0.2}>
              <div>
                <span className="label block mb-4">Connect</span>
                <div className="flex flex-col gap-4">
                  <a
                    href={GITHUB_URL}
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
                    href={LINKEDIN_URL}
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
