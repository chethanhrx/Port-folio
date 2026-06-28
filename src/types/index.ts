export interface Project {
  id: string;
  title: string;
  category: 'Backend / Microservices' | 'Full Stack Apps' | 'AI / ML Integrated' | 'Tools & Automation';
  shortDescription: string;
  overview: string;
  architecture: string;
  features: string[];
  challenges: string[];
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  year: string;
  role: string;
  previewColor: string;
  stats?: {
    stars: number;
    forks: number;
    language: string;
  };
}

export interface SkillCategory {
  title: string;
  skills: { name: string; iconName: string }[];
}

export interface TimelineItem {
  year: string;
  title: string;
  company: string;
  description: string;
  type: 'experience' | 'education';
}

export interface GithubStats {
  repos: number;
  followers: number;
  stars: number;
  topLanguages: string[];
}

export interface LeetCodeStats {
  solved: number;
  easy: number;
  medium: number;
  hard: number;
  ranking: string;
}
