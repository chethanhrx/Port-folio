import { SkillCategory } from '../types';

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Core Languages & Backend',
    skills: [
      { name: 'Java 21', iconName: 'Coffee' },
      { name: 'Spring Boot 3', iconName: 'Server' },
      { name: 'Microservices', iconName: 'Network' },
      { name: 'RESTful APIs', iconName: 'Globe' },
      { name: 'Python', iconName: 'Code' },
      { name: 'PHP', iconName: 'Terminal' }
    ]
  },
  {
    title: 'Frontend & Architecture',
    skills: [
      { name: 'React 18', iconName: 'Layout' },
      { name: 'Next.js', iconName: 'Zap' },
      { name: 'TypeScript', iconName: 'FileCode' },
      { name: 'Tailwind CSS', iconName: 'Palette' },
      { name: 'System Design', iconName: 'Cpu' },
      { name: 'Clean Architecture', iconName: 'Layers' }
    ]
  },
  {
    title: 'Databases & Messaging',
    skills: [
      { name: 'PostgreSQL', iconName: 'Database' },
      { name: 'MySQL', iconName: 'HardDrive' },
      { name: 'Apache Kafka', iconName: 'Activity' },
      { name: 'Redis Cache', iconName: 'Clock' },
      { name: 'Elasticsearch', iconName: 'Search' },
      { name: 'WebSockets', iconName: 'Radio' }
    ]
  },
  {
    title: 'DevOps & AI Workflow Tools',
    skills: [
      { name: 'Docker', iconName: 'Box' },
      { name: 'Git & GitHub', iconName: 'GitBranch' },
      { name: 'Linux / Ubuntu', iconName: 'Terminal' },
      { name: 'Claude Code', iconName: 'Sparkles' },
      { name: 'Antigravity AI', iconName: 'Rocket' },
      { name: 'Gemini CLI', iconName: 'Bot' }
    ]
  }
];

export const AI_TOOLS_LIST = [
  'Claude Code',
  'Antigravity',
  'Gemini CLI',
  'Codex',
  'OpenCode',
  'Mimo Code'
];

export const CURRENTLY_LEARNING = [
  'Advanced System Design',
  'Distributed Consensus Algorithms',
  'Event-Driven Clean Architecture'
];
