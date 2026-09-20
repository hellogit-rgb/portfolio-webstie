import { FormEvent, useState } from 'react';
import { ArrowLeft, ExternalLink, Plus, Save, Trash2 } from 'lucide-react';
import { projects as defaultProjects, type ProjectData } from '@/data/portfolio';
import { getProjects, getResumeUrl, resetPortfolioContent, saveProjects, saveResumeUrl } from '@/data/portfolioStore';

const ADMIN_EMAIL = 'madhav@gmail.com';
const ADMIN_PASSWORD = 'Maably@2803';

const emptyProject = (): ProjectData => ({
  number: String(getProjects().length + 1).padStart(2, '0'),
  title: '',
  projectLink: '',
  bannerUrl: '',
  category: ['Web Application'],
  technologies: [],
  description: '',
  overview: '',
  whatItDoes: '',
  role: '',
  keyFunctionality: [],
  projectType: 'Web Application',
  visualSide: 'left',
});

export default function AdminPanel() {
  const [authenticated, setAuthenticated] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [projects, setProjects] = useState(getProjects);
  const [resumeUrl, setResumeUrl] = useState(getResumeUrl);
  const [message, setMessage] = useState('');

  const login = (event: FormEvent) => {
    event.preventDefault();
    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      setAuthenticated(true);
      setMessage('');
    } else {
      setMessage('Email or password is incorrect.');
    }
  };

  if (!authenticated) {
    return (
      <main className="min-h-screen bg-ink-950 text-ink-50 flex items-center justify-center px-6">
        <form onSubmit={login} className="w-full max-w-md border border-ink-700/60 p-8 md:p-10 bg-ink-900/60">
          <a href="#top" className="inline-flex items-center gap-2 text-sm text-ink-400 hover:text-ink-50 mb-12">
            <ArrowLeft size={16} /> Back to portfolio
          </a>
          <p className="label mb-4">Private area</p>
          <h1 className="font-display text-3xl font-semibold mb-8">Portfolio admin</h1>
          <label className="label block mb-2" htmlFor="admin-email">Email</label>
          <input id="admin-email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} className="admin-input mb-5" required />
          <label className="label block mb-2" htmlFor="admin-password">Password</label>
          <input id="admin-password" type="password" value={password} onChange={(event) => setPassword(event.target.value)} className="admin-input mb-5" required />
          {message && <p className="text-sm text-red-300 mb-4">{message}</p>}
          <button type="submit" className="admin-button w-full">Log in</button>
          <p className="mt-5 text-xs text-ink-500 leading-relaxed">Changes are stored in this browser. Connect a hosted database before using this as a multi-device CMS.</p>
        </form>
      </main>
    );
  }

  const updateProject = (index: number, field: keyof ProjectData, value: string) => {
    setProjects((current) => current.map((project, projectIndex) => projectIndex === index ? { ...project, [field]: value } : project));
  };

  const save = () => {
    const validProjects = projects.filter((project) => project.title.trim());
    saveProjects(validProjects.map((project, index) => ({ ...project, number: String(index + 1).padStart(2, '0') })));
    saveResumeUrl(resumeUrl.trim());
    setProjects(getProjects());
    setMessage('Saved. The public portfolio is updated in this browser.');
  };

  const restoreDefaults = () => {
    resetPortfolioContent();
    setProjects(defaultProjects);
    setResumeUrl('');
    setMessage('Default content restored.');
  };

  return (
    <main className="min-h-screen bg-ink-950 text-ink-50 px-6 py-10 md:px-12 lg:px-20">
      <div className="max-w-5xl mx-auto">
        <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 border-b border-ink-700/60 pb-8 mb-10">
          <div>
            <a href="#top" className="inline-flex items-center gap-2 text-sm text-ink-400 hover:text-ink-50 mb-5"><ArrowLeft size={16} /> View portfolio</a>
            <p className="label mb-2">Content manager</p>
            <h1 className="font-display text-3xl md:text-4xl font-semibold">Update your work</h1>
          </div>
          <button onClick={save} className="admin-button inline-flex items-center justify-center gap-2"><Save size={16} /> Save changes</button>
        </header>

        <section className="border-b border-ink-700/60 pb-10 mb-10">
          <label className="label block mb-3" htmlFor="resume-url">Resume URL</label>
          <input id="resume-url" type="url" value={resumeUrl} onChange={(event) => setResumeUrl(event.target.value)} placeholder="https://.../resume.pdf" className="admin-input" />
          <p className="text-xs text-ink-500 mt-3">Paste a public PDF link. It will appear in the About section.</p>
        </section>

        <section>
          <div className="flex items-center justify-between gap-4 mb-6"><h2 className="font-display text-2xl font-medium">Projects</h2><button onClick={() => setProjects((current) => [...current, emptyProject()])} className="admin-button inline-flex items-center gap-2"><Plus size={16} /> Add project</button></div>
          <div className="flex flex-col gap-8">
            {projects.map((project, index) => (
              <article key={`${project.number}-${index}`} className="border border-ink-700/60 p-6 md:p-8">
                <div className="flex items-center justify-between gap-4 mb-6"><span className="label">Project {String(index + 1).padStart(2, '0')}</span><button onClick={() => setProjects((current) => current.filter((_, projectIndex) => projectIndex !== index))} className="text-ink-500 hover:text-red-300" aria-label={`Delete ${project.title || 'project'}`}><Trash2 size={17} /></button></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <AdminField label="Title" value={project.title} onChange={(value) => updateProject(index, 'title', value)} />
                  <AdminField label="Project link" value={project.projectLink} onChange={(value) => updateProject(index, 'projectLink', value)} placeholder="https://..." />
                  <AdminField label="Banner image URL" value={project.bannerUrl} onChange={(value) => updateProject(index, 'bannerUrl', value)} placeholder="https://.../image.jpg" />
                  <AdminField label="Description" value={project.description} onChange={(value) => updateProject(index, 'description', value)} />
                </div>
                {project.projectLink && <a href={project.projectLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-5 text-sm text-accent hover:text-ink-50">Test link <ExternalLink size={14} /></a>}
              </article>
            ))}
          </div>
        </section>

        <footer className="flex flex-wrap items-center gap-5 mt-10 pt-8 border-t border-ink-700/60"><button onClick={save} className="admin-button inline-flex items-center gap-2"><Save size={16} /> Save changes</button><button onClick={restoreDefaults} className="text-sm text-ink-400 hover:text-ink-50">Restore defaults</button>{message && <span className="text-sm text-accent">{message}</span>}</footer>
      </div>
    </main>
  );
}

function AdminField({ label, value, onChange, placeholder }: { label: string; value: string; onChange: (value: string) => void; placeholder?: string }) {
  return <label className="block"><span className="label block mb-2">{label}</span><input value={value} placeholder={placeholder} onChange={(event) => onChange(event.target.value)} className="admin-input" /></label>;
}