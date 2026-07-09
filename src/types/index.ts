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
  featured?: boolean;
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
  publicRepos?: Array<{ name: string; stars: number; forks: number; language: string; description: string; url: string; updatedAt: string }>;
}

export interface LeetCodeStats {
  solved: number;
  easy: number;
  medium: number;
  hard: number;
  ranking: string;
  totalSubmissions: number;
  easySubmissions: number;
  mediumSubmissions: number;
  hardSubmissions: number;
  acceptanceRate: number;
  streak: number;
  contestRating: number;
  contestGlobalRanking: number;
  contestTopPercentage: number;
  totalProblems: number;
  recentActivity: Array<{ title: string; titleSlug: string; difficulty: string; status: string; timestamp: number }>;
}
