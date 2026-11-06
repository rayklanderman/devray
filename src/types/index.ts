export interface Service {
  id: string;
  title: string;
  tagline?: string;
  description: string;
  for?: string;          // Who this is for
  problem?: string;      // Problem we solve
  delivered?: string;    // What is delivered
  integrations?: string; // Integrations / constraints that matter
  howToBegin?: string;   // How to begin
  evidence?: string;     // Proof pointer (project names)
  icon: string;
  features?: string[];
  tech?: string[];       // Sparse, evidence-based tags only
  tier: 'core' | 'additional';
  proof?: { label: string; url: string };
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  productType?: string;
  projectStatus?: string;
  engagementType?: string;
  role?: string;
  problem?: string;
  audience?: string;
  solution?: string;
  technicalHighlights?: string[];
  responsibilities?: string[];
  constraintsAndTradeoffs?: string;
  privacyAccessibility?: string;
  verifiedEvidence?: string;
  limitations?: string;
  description?: string;
  tech: string[];
  screenshot: string;
  screenshotAlt: string;
  liveUrl?: string;
  demoUrl?: string;
  caseStudyUrl?: string;
  repositoryUrl?: string;
  isRepositoryPublic?: boolean;
  featured: boolean;
  tier: 'signature' | 'secondary';
  award?: string;
  updatedAt: string;
  // Legacy aliases kept for existing card components during transition.
  image?: string;
  tags?: string[];
  githubUrl?: string;
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

export interface FounderLink {
  label: string;
  url: string;
}

export interface NamedCredential {
  title: string;
  issuer: string;
  url: string;
}
