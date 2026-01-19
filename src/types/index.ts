export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  technologies?: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  period: string;
  status: 'completed' | 'ongoing';
  description: string;
  skills?: string[];
}

export interface Certification {
  id: string;
  platform: string;
  title: string;
  badges: number;
  highlights: string[];
  url?: string;
  expiry?: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}
