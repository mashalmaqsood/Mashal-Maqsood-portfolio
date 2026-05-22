// Portfolio Constants

import {
  Code,
  Database,
  Mail,
  Linkedin,
  Github,
  Cpu,
  Globe,
  Zap,
} from 'lucide-react';

export const NAV_ITEMS = [
  { name: 'home', href: '#home' },
  { name: 'expertise', href: '#expertise' },
  { name: 'work', href: '#work' },
  { name: 'contact', href: '#contact' },
] as const;

export const EXPERTISE_DATA = [
  {
    title: 'Frontend Development',
    highlight: 'React, Next.js, TypeScript',
    description:
      'Building responsive, component-driven interfaces with a strong focus on performance, clean UX, and accessible design using the modern React ecosystem.',
    icon: Code,
    technologies: [
      'React.js',
      'Next.js',
      'TypeScript',
      'JavaScript (ES6+)',
      'Material UI (MUI)',
      'Tailwind CSS',
      'ShadCN UI',
      'Redux Toolkit',
      'React Query (TanStack)',
      'Zustand',
      'Framer Motion',
      'HTML5 / CSS3',
      'Responsive Design',
      'Accessibility (a11y)',
    ],
  },
  {
    title: 'Backend Development',
    highlight: 'Node.js, Express, FastAPI',
    description:
      'Designing and building secure, scalable server-side applications and APIs using Node.js, Express.js, and FastAPI for high-performance, production-ready services.',
    icon: Database,
    technologies: [
      'Node.js',
      'Express.js',
      'FastAPI',
      'REST APIs',
      'GraphQL',
      'JWT Authentication',
      'OAuth 2.0',
      'Middleware Design',
      'WebSockets',
      'API Rate Limiting',
      'Background Jobs',
      'Swagger / OpenAPI',
    ],
  },
  {
    title: 'Databases & ORMs',
    highlight: 'MySQL, PostgreSQL, MongoDB',
    description:
      'Hands-on experience with relational and NoSQL databases — from schema design and migrations to query optimisation and production-grade ORM usage.',
    icon: Globe,
    technologies: [
      'MySQL',
      'PostgreSQL',
      'MongoDB',
      'Redis',
      'Sequelize',
      'Prisma',
      'TypeORM',
      'Mongoose',
      'Database Design',
      'Query Optimisation',
      'Indexing',
      'Migrations',
    ],
  },
  {
    title: 'Architecture & Practices',
    highlight: 'MERN, Clean Architecture, Agile',
    description:
      'Delivering maintainable, production-ready full-stack systems using clean architecture principles, modular patterns, and collaborative Agile/Scrum workflows.',
    icon: Cpu,
    technologies: [
      'MERN Stack',
      'Clean Architecture',
      'MVC Pattern',
      'Repository Pattern',
      'Microservices',
      'Event-Driven Architecture',
      'SOLID Principles',
      'Agile / Scrum',
      'Code Reviews',
      'TDD Basics',
      'API Documentation',
      'Postman / Insomnia',
    ],
  },
  {
    title: 'DevOps & Tooling',
    highlight: 'Docker, Git, CI/CD, Cloud',
    description:
      'Comfortable with containerised deployments, version control workflows, cloud hosting, and developer tooling to ship reliable software consistently.',
    icon: Zap,
    technologies: [
      'Docker',
      'Git',
      'GitHub',
      'GitHub Actions',
      'CI/CD Pipelines',
      'Vercel',
      'Netlify',
      'AWS (basics)',
      'Linux / Bash',
      'VS Code',
      'Figma',
      'Jira',
    ],
  },
  {
    title: 'AI & Automation',
    highlight: 'n8n, OpenAI, LangChain',
    description:
      'Integrating AI tools and building automation workflows to enhance product capabilities — from OpenAI-powered features to no-code n8n automation pipelines.',
    icon: Code,
    technologies: [
      'n8n Automation',
      'OpenAI API',
      'LangChain',
      'Prompt Engineering',
      'AI Tool Integrations',
      'Webhook Automation',
      'RAG Pipelines',
      'Hugging Face',
      'Zapier',
      'API Chaining',
    ],
  },
] as const;

export const EXPERIENCE_DATA = [
  {
    title: 'Associate Software Developer (Frontend)',
    company: 'Tekvaly, Phenologix',
    location: 'Canada',
    period: '04/2024 - Present',
    workType: 'Hybrid' as const,
    description:
      'Designed and optimized responsive UIs using React.js, Next.js, and SWR, ensuring seamless performance and data handling. Built and maintained management and job portal platforms with features like authentication, attendance tracking, and workflow automation.',
    technologies: [
      { name: 'React.js', level: 95, icon: Code },
      { name: 'Next.js', level: 90, icon: Globe },
      { name: 'SWR', level: 85, icon: Database },
      { name: 'TypeScript', level: 90, icon: Code },
      { name: 'Web Workers', level: 80, icon: Cpu },
    ],
    website: 'https://tekvaly.com',
    logo: 'TEK',
    expanded: true,
    achievements: [
      'Resolved critical rendering issues and revamped UIs',
      'Implemented performance optimizations (caching, Web Workers, refetching, validations)',
      'Developed role-based features for HR teams, job seekers, and company owners',
      'Ensured smooth and consistent global user experience',
    ],
    type: 'Frontend' as const,
    contact: 'Hamza Ahmed (Technical Lead) - 0322 4874405',
  },
  {
    title: 'Junior MERN Stack Developer',
    company: 'WebSouls',
    location: 'Lahore, Pakistan',
    period: '05/2023 - 12/2023',
    workType: 'On-site' as const,
    description:
      'Developed full-stack web platforms Voyage Vista (property booking) and ShopEase (e-commerce) using the MERN stack. Built key features like search, filtering, booking, cart, and checkout flows, ensuring smooth user interaction and data flow. Worked on both the front-end and back-end of the projects. Collaborated with the team to deliver on time.',
    technologies: [
      { name: 'React.js', level: 90, icon: Code },
      { name: 'Node.js', level: 85, icon: Database },
      { name: 'Express.js', level: 85, icon: Database },
      { name: 'MongoDB', level: 80, icon: Database },
      { name: 'Tailwind CSS', level: 90, icon: Code },
    ],
    website: 'https://websouls.com',
    logo: 'WS',
    expanded: false,
    achievements: [
      'Designed responsive and dynamic UIs with React.js and Tailwind CSS',
      'Integrated Node.js/Express and MongoDB for secure authentication',
      'Implemented user sessions and role-based access control',
      'Built seamless cross-device experiences',
    ],
    type: 'Full-Stack' as const,
  },
] as const;

export const CONTACT_METHODS = [
  {
    icon: Mail,
    href: 'mailto:mashal.maqsood112@gmail.com',
    color: 'hsl(var(--accent))',
  },
  {
    icon: Github,
    href: 'https://github.com/mashalmaqsood/mashalmaqsood',
    color: 'hsl(var(--accent))',
  },
] as const;

export const SOCIAL_LINKS = [
  {
    icon: Github,
    href: 'https://github.com/mashalmaqsood/mashalmaqsood',
    color: 'hsl(var(--accent))',
  },
  {
    icon: Mail,
    href: 'mailto:mashal.maqsood112@gmail.com',
    color: 'hsl(var(--accent))',
  },
] as const;

export const ANIMATION_DELAYS = {
  STAGGER: 0.1,
  INITIAL: 0.2,
  HEADER: 0.4,
  CONTENT: 0.6,
  CARDS: 0.8,
} as const;

export const BREAKPOINTS = {
  xs: '475px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

/** Set NEXT_PUBLIC_SITE_URL in .env when deployed (e.g. https://your-app.vercel.app) */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';

export const CONTACT_INFO = {
  email: 'mashal.maqsood112@gmail.com',
  phone: '',
  location: 'Lahore, Pakistan',
  linkedin: 'https://linkedin.com/in/mashalmaqsood',
  github: 'https://github.com/mashalmaqsood/mashalmaqsood',
} as const;
