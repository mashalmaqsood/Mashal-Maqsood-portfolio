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
      'Tailwind CSS',
      'Redux Toolkit',
      'React Query (TanStack)',
      'Framer Motion',
      'Context API',
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
      'NestJS',
      'FastAPI',
      'Python',
      'RESTful APIs',
      'GraphQL',
      'JWT Authentication',
      'OAuth 2.0',
      'Middleware Design',
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
      'SOLID Principles',
      'Agile / Scrum',
      'Code Reviews',
      'Jest',
      'React Testing Library',
      'TDD Basics',
      'API Documentation',
      'Postman',
    ],
  },
  {
    title: 'DevOps & Tooling',
    highlight: 'Docker, Git, AWS S3, Vercel',
    description:
      'Comfortable with containerised deployments, version control workflows, cloud hosting, and developer tooling to ship reliable software consistently.',
    icon: Zap,
    technologies: [
      'Docker (basics)',
      'Git',
      'GitHub',
      'Vercel',
      'Jira',
      'Trello',
      'ClickUp',
      'AWS S3',
      'Cursor AI',
    ],
  },
  {
    title: 'AI & Automation',
    highlight: 'n8n, OpenAI, Claude, LangGraph',
    description:
      'Integrating AI tools and building automation workflows to enhance product capabilities — from OpenAI- and Claude-powered features to no-code n8n automation pipelines.',
    icon: Code,
    technologies: [
      'n8n Automation',
      'OpenAI API',
      'Anthropic Claude API',
      'LangGraph',
      'Prompt Engineering',
      'AI Tool Integrations',
      'Webhook Automation',
      'API Chaining',
    ],
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
    href: 'https://github.com/mashalmaqsood',
    color: 'hsl(var(--accent))',
  },
] as const;

export const SOCIAL_LINKS = [
  {
    icon: Github,
    href: 'https://github.com/mashalmaqsood',
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
  github: 'https://github.com/mashalmaqsood',
} as const;
