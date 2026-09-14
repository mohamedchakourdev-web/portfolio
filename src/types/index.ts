export type Project = {
  slug: string;
  name: string;
  category: string;
  description: string;
  technologies: string[];
  features: string[];
  accent: 'blue' | 'violet' | 'teal';
  featured?: boolean;
  overview: string;
  problem: string;
  solution: string;
  architecture: string;
  challenges: string[];
  learnings: string[];
};
