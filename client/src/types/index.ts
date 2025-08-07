// Frontend-only type definitions
export interface Project {
  id?: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  category: 'figma' | 'frontend' | 'full-stack' | 'animation';
  featured: number;
}

export interface Experience {
  id?: number;
  title: string;
  company: string;
  startDate: string;
  endDate: string | null;
  description: string;
  technologies: string[];
  current: boolean;
}

export interface Contact {
  id?: number;
  name: string;
  email: string;
  message: string;
  createdAt?: string;
}

export interface Testimonial {
  id?: number;
  name: string;
  title: string;
  company: string;
  content: string;
  rating: number;
  image?: string;
  facebookId?: string;
}