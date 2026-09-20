export interface ProjectData {
  number: string;
  title: string;
  projectLink: string;
  bannerUrl: string;
  category: string[];
  technologies: string[];
  description: string;
  overview: string;
  whatItDoes: string;
  role: string;
  keyFunctionality: string[];
  projectType: string;
  visualSide: 'left' | 'right';
}

export const projects: ProjectData[] = [
  {
    number: '01',
    title: 'Enterprise AI Intelligence Copilot',
    projectLink: '',
    bannerUrl: '',
    category: ['AI', 'Full Stack', 'Cloud'],
    technologies: ['Agentic RAG', 'GenAI', 'React.js', 'Node.js', 'Python', 'GCP', 'BigQuery'],
    description:
      'An AI powered intelligence platform designed around intelligent retrieval and interaction with enterprise knowledge.',
    overview:
      'An AI powered intelligence platform built around Agentic RAG architecture, enabling intelligent retrieval and interaction with enterprise knowledge.',
    whatItDoes:
      'Connects to enterprise knowledge sources and provides intelligent, context-aware responses through conversational interaction powered by retrieval-augmented generation.',
    role: 'Full Stack Development, AI Integration, Cloud Architecture',
    keyFunctionality: [
      'Agentic RAG for intelligent knowledge retrieval',
      'GenAI powered conversational interface',
      'Full stack architecture with React.js and Node.js',
      'Python backend for AI and retrieval workflows',
      'Google Cloud and BigQuery for data infrastructure',
    ],
    projectType: 'AI Platform / Full Stack Application',
    visualSide: 'left',
  },
  {
    number: '02',
    title: 'AI WhatsApp Shipping Intelligence Bot',
    projectLink: '',
    bannerUrl: '',
    category: ['AI', 'Automation', 'Cloud'],
    technologies: ['Google Cloud', 'BigQuery', 'Apps Script', 'Cloud Run', 'WhatsApp', 'WasenderAPI'],
    description:
      'An AI powered WhatsApp assistant for querying shipping market information and receiving contextual responses from connected data sources.',
    overview:
      'An AI powered WhatsApp assistant for querying shipping market information, built with connected data sources, sanitization workflows, and cloud infrastructure.',
    whatItDoes:
      'Enables users to query shipping market information through WhatsApp and receive contextual responses from connected data sources, with data processing and sanitization workflows running in the background.',
    role: 'AI Integration, Cloud Infrastructure, Automation',
    keyFunctionality: [
      'Conversational interaction through WhatsApp',
      'Connected data sources for shipping market information',
      'Data processing and sanitization workflows',
      'Cloud Run for scalable service infrastructure',
      'Google Apps Script for workflow automation',
    ],
    projectType: 'AI Assistant / Cloud Automation',
    visualSide: 'right',
  },
  {
    number: '03',
    title: 'Bareilly Marathon Platform',
    projectLink: '',
    bannerUrl: '',
    category: ['Web Application', 'Full Stack'],
    technologies: ['Full Stack', 'Registration', 'Event Management', 'QR Verification'],
    description:
      'A modern marathon registration and event management platform with personalized participant tickets and QR based event verification.',
    overview:
      'A modern marathon registration and event management platform built for a smooth participant experience.',
    whatItDoes:
      'Handles marathon registration, participant management, personalized tickets, and QR based event verification — providing a complete registration and event management flow.',
    role: 'Full Stack Development, Product Design',
    keyFunctionality: [
      'Marathon registration and participant management',
      'Personalized participant tickets',
      'QR based event verification',
      'Event management and participant interaction',
      'Complete registration flow and product experience',
    ],
    projectType: 'Web Application / Full Stack Platform',
    visualSide: 'left',
  },
];

export interface ServiceData {
  number: string;
  title: string;
  description: string;
  technologies: string[];
}

export const services: ServiceData[] = [
  {
    number: '01',
    title: 'AI Development',
    description:
      'Building AI powered applications, intelligent interfaces, retrieval systems, and practical AI integrations.',
    technologies: ['GenAI', 'RAG', 'Python', 'LangChain'],
  },
  {
    number: '02',
    title: 'Full Stack Development',
    description:
      'Building responsive web applications across frontend, backend, APIs, databases, and application architecture.',
    technologies: ['React.js', 'Node.js', 'Express.js', 'REST APIs'],
  },
  {
    number: '03',
    title: 'Cloud and Automation',
    description:
      'Building cloud based workflows, data pipelines, automation systems, and connected applications.',
    technologies: ['Google Cloud', 'Cloud Run', 'BigQuery', 'Apps Script'],
  },
];

export interface BuildOption {
  label: string;
  description: string;
}

export const buildOptions: BuildOption[] = [
  {
    label: 'Web Experience',
    description: 'Modern responsive websites focused on strong user experience and visual identity.',
  },
  {
    label: 'Web Application',
    description: 'Custom applications with frontend, backend, APIs, databases, and authentication.',
  },
  {
    label: 'AI Product',
    description: 'AI powered applications using modern models, retrieval workflows, and intelligent interfaces.',
  },
  {
    label: 'Automation',
    description: 'Connected workflows that reduce repetitive manual processes.',
  },
  {
    label: 'Cloud System',
    description: 'Cloud based infrastructure, data workflows, and application services.',
  },
];

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Understand',
    description: 'Understand the problem, users, requirements, and desired outcome.',
  },
  {
    number: '02',
    title: 'Design',
    description: 'Define the structure, experience, architecture, and technical direction.',
  },
  {
    number: '03',
    title: 'Build',
    description: 'Develop the product with clean, practical, maintainable technology.',
  },
  {
    number: '04',
    title: 'Refine',
    description: 'Test, improve, optimize, and prepare the product for real use.',
  },
];

export interface FAQItem {
  question: string;
  answer: string;
}

export const faqItems: FAQItem[] = [
  {
    question: 'Can you build a complete web application from scratch?',
    answer:
      'Yes. From frontend and backend to APIs, databases, and deployment, I build complete web applications end to end.',
  },
  {
    question: 'Can you integrate AI into an existing product?',
    answer:
      'Yes. I work with retrieval systems, GenAI, and conversational interfaces to add practical AI features to existing applications.',
  },
  {
    question: 'Can you work with cloud based systems and automation?',
    answer:
      'Yes. I build cloud workflows, data pipelines, and automation systems using Google Cloud, BigQuery, Cloud Run, and related tools.',
  },
  {
    question: 'How does a project usually start?',
    answer:
      'It starts with a conversation. I learn about what you are building, the constraints, and the outcome you need, then define the structure and direction from there.',
  },
];

export const technologies: string[] = [
  'JavaScript',
  'TypeScript',
  'React.js',
  'Node.js',
  'Express.js',
  'Python',
  'C',
  'C++',
  'Java',
  'Google Cloud',
  'BigQuery',
  'Cloud Run',
  'Google Apps Script',
  'REST APIs',
  'SQL',
  'Git',
  'GitHub',
];
