import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import type { ProjectData } from '@/data/portfolio';
import SectionLabel from './ui/SectionLabel';
import Reveal from './ui/Reveal';

export default function SelectedWork({ projects }: { projects: ProjectData[] }) {
  return (
    <section id="work" className="section-padding section-padding-y">
      <div className="container-max">
        <div className="mb-16 md:mb-24">
          <SectionLabel className="mb-8">Selected Work</SectionLabel>
          <Reveal>
            <h2 className="font-display font-bold text-ink-50 text-section">
              Projects
            </h2>
          </Reveal>
        </div>

        <div className="flex flex-col gap-20 md:gap-32">
          {projects.map((project, i) => (
            <Reveal key={project.number} delay={i * 0.05}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: ProjectData }) {
  const [expanded, setExpanded] = useState(false);
  const visualLeft = project.visualSide === 'left';

  return (
    <article className="group">
      <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center`}>
        {/* Visual */}
        <motion.div
          className={`lg:col-span-7 ${visualLeft ? 'lg:order-1' : 'lg:order-2'}`}
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <ProjectVisual project={project} />
        </motion.div>

        {/* Info */}
        <div className={`lg:col-span-5 ${visualLeft ? 'lg:order-2' : 'lg:order-1'}`}>
          <div className="flex items-center gap-3 mb-4">
            <span className="font-display text-sm text-ink-400 tabular-nums">{project.number}</span>
            <span className="w-6 h-px bg-ink-600" />
            <div className="flex flex-wrap gap-2">
              {project.category.map((cat) => (
                <span key={cat} className="label">
                  {cat}
                </span>
              ))}
            </div>
          </div>

          <h3 className="font-display text-2xl md:text-3xl lg:text-4xl font-medium text-ink-50 tracking-tight leading-[1.1]">
            {project.title}
          </h3>

          {project.projectLink && (
            <a
              href={project.projectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block font-display text-sm text-accent hover:text-ink-50 transition-colors"
            >
              Visit project ↗
            </a>
          )}

          <p className="mt-5 text-base md:text-lg text-ink-300 leading-relaxed font-body font-light">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mt-6">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="font-display text-[11px] uppercase tracking-wide-label text-ink-400 border border-ink-700/60 px-3 py-1.5 rounded-sm"
              >
                {tech}
              </span>
            ))}
          </div>

          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-8 inline-flex items-center gap-2 font-display text-sm font-medium text-ink-100 hover:text-accent transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
            aria-expanded={expanded}
          >
            {expanded ? (
              <>
                <Minus size={16} /> Close
              </>
            ) : (
              <>
                <Plus size={16} /> View Project
              </>
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mt-12 pt-12 border-t border-ink-700/60">
              <div>
                <span className="label block mb-3">Overview</span>
                <p className="text-base text-ink-200 leading-relaxed font-body font-light">
                  {project.overview}
                </p>
              </div>

              <div>
                <span className="label block mb-3">What It Does</span>
                <p className="text-base text-ink-200 leading-relaxed font-body font-light">
                  {project.whatItDoes}
                </p>
              </div>

              <div>
                <span className="label block mb-3">Role</span>
                <p className="text-base text-ink-200 leading-relaxed font-body font-light">
                  {project.role}
                </p>
              </div>

              <div className="md:col-span-2 lg:col-span-3">
                <span className="label block mb-4">Key Functionality</span>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {project.keyFunctionality.map((func) => (
                    <div
                      key={func}
                      className="flex items-start gap-3 text-base text-ink-200 font-body font-light"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 shrink-0" />
                      {func}
                    </div>
                  ))}
                </div>
              </div>

              <div className="md:col-span-2 lg:col-span-3">
                <span className="label block mb-3">Project Type</span>
                <p className="font-display text-lg text-ink-100 font-medium">
                  {project.projectType}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  );
}

function ProjectVisual({ project }: { project: ProjectData }) {
  return (
    <div className="relative aspect-[16/10] rounded-lg overflow-hidden bg-ink-800 border border-ink-700/60">
      {project.bannerUrl && (
        <img
          src={project.bannerUrl}
          alt={`${project.title} banner`}
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}
      {/* Abstract interface preview */}
      <div className={`absolute inset-0 flex flex-col ${project.bannerUrl ? 'bg-ink-950/35' : ''}`}>
        {/* Top bar */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-ink-700/40 bg-ink-900/50">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-ink-600" />
            <div className="w-2.5 h-2.5 rounded-full bg-ink-600" />
            <div className="w-2.5 h-2.5 rounded-full bg-ink-600" />
          </div>
          <div className="flex-1 mx-3 h-5 rounded-sm bg-ink-700/40 max-w-xs" />
        </div>

        {/* Content area */}
        <div className="flex-1 flex p-4 gap-3">
          {/* Sidebar */}
          <div className="hidden md:flex flex-col gap-2 w-1/4">
            <div className="h-3 rounded-sm bg-ink-600/50 w-full" />
            <div className="h-3 rounded-sm bg-ink-600/30 w-3/4" />
            <div className="h-3 rounded-sm bg-ink-600/30 w-2/3" />
            <div className="h-3 rounded-sm bg-accent/40 w-1/2 mt-2" />
          </div>

          {/* Main content */}
          <div className="flex-1 flex flex-col gap-3">
            <div className="h-6 rounded-sm bg-ink-600/40 w-1/2" />
            <div className="grid grid-cols-3 gap-3 mt-2">
              <div className="aspect-square rounded-md bg-ink-700/30 border border-ink-700/40" />
              <div className="aspect-square rounded-md bg-ink-700/30 border border-ink-700/40" />
              <div className="aspect-square rounded-md bg-accent/10 border border-accent/30" />
            </div>
            <div className="h-3 rounded-sm bg-ink-600/30 w-full mt-2" />
            <div className="h-3 rounded-sm bg-ink-600/20 w-4/5" />
            <div className="h-3 rounded-sm bg-ink-600/20 w-3/5" />
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex items-center justify-between px-4 py-2.5 border-t border-ink-700/40 bg-ink-900/50">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-accent" />
            <div className="h-2.5 rounded-sm bg-ink-600/40 w-20" />
          </div>
          <div className="h-2.5 rounded-sm bg-ink-600/30 w-12" />
        </div>
      </div>

      {/* Project number overlay */}
      <div className="absolute top-4 right-4 font-display text-5xl md:text-7xl font-bold text-ink-50/10 tabular-nums pointer-events-none">
        {project.number}
      </div>
    </div>
  );
}
