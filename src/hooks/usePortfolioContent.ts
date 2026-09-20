import { useEffect, useState } from 'react';
import { getProjects, getResumeUrl } from '@/data/portfolioStore';
import type { ProjectData } from '@/data/portfolio';

export function usePortfolioContent() {
  const [projects, setProjects] = useState<ProjectData[]>(getProjects);
  const [resumeUrl, setResumeUrl] = useState(getResumeUrl);

  useEffect(() => {
    const refresh = () => {
      setProjects(getProjects());
      setResumeUrl(getResumeUrl());
    };

    window.addEventListener('portfolio-content-updated', refresh);
    return () => window.removeEventListener('portfolio-content-updated', refresh);
  }, []);

  return { projects, resumeUrl };
}