import { projects as defaultProjects, type ProjectData } from './portfolio';

const PROJECTS_KEY = 'madhav-portfolio-projects';
const RESUME_KEY = 'madhav-portfolio-resume-url';

function read<T>(key: string, fallback: T): T {
  if (typeof window === 'undefined') return fallback;

  try {
    const stored = window.localStorage.getItem(key);
    return stored ? (JSON.parse(stored) as T) : fallback;
  } catch {
    return fallback;
  }
}

export function getProjects(): ProjectData[] {
  return read<ProjectData[]>(PROJECTS_KEY, defaultProjects);
}

export function saveProjects(nextProjects: ProjectData[]) {
  window.localStorage.setItem(PROJECTS_KEY, JSON.stringify(nextProjects));
  window.dispatchEvent(new Event('portfolio-content-updated'));
}

export function getResumeUrl(): string {
  return read<string>(RESUME_KEY, '');
}

export function saveResumeUrl(resumeUrl: string) {
  window.localStorage.setItem(RESUME_KEY, JSON.stringify(resumeUrl));
  window.dispatchEvent(new Event('portfolio-content-updated'));
}

export function resetPortfolioContent() {
  window.localStorage.removeItem(PROJECTS_KEY);
  window.localStorage.removeItem(RESUME_KEY);
  window.dispatchEvent(new Event('portfolio-content-updated'));
}