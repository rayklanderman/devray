import {
  Service,
  Project,
  Education,
  Certification,
  NavItem,
  SocialLink,
  NamedCredential,
  PainPoint,
  Differentiator,
  ProcessStep,
  Faq,
} from '../types';

export const navItems: NavItem[] = [
  { label: 'Services', href: '/#services' },
  { label: 'Work', href: '/work' },
  { label: 'Process', href: '/#process' },
  { label: 'About', href: '/#about' },
  { label: 'FAQ', href: '/#faq' },
  { label: 'AI Chat', href: '/chat' },
  { label: 'Contact', href: '/#contact' },
];

export const socialLinks: SocialLink[] = [
  { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/rayklanderman/', icon: 'linkedin' },
  { platform: 'GitHub', url: 'https://github.com/rayklanderman', icon: 'github' },
  { platform: 'YouTube', url: 'https://www.youtube.com/@RealDevRay', icon: 'youtube' },
  { platform: 'Instagram', url: 'https://www.instagram.com/rayklanderman/', icon: 'instagram' },
  { platform: 'CoderLegion', url: 'https://coderlegion.com/user/DevRay', icon: 'code' },
];

/* ------------------------------------------------------------------ */
/*  Services — buyable outcomes, four core offers first               */
/*  Technology tags are sparse and evidence-based only.               */
/* ------------------------------------------------------------------ */

export const services: Service[] = [
  {
    id: 'ai-applications',
    title: 'AI Applications & Intelligent Automation',
    tagline: 'Custom AI assistants, RAG, document processing and workflow automation.',
    description:
      'Production-grade generative AI and agentic systems built with strict guardrails, human-in-the-loop oversight, and rigorous evaluation before deployment.',
    for: 'Teams and founders who want to deploy AI in production, not just experiment with it.',
    problem:
      'Generative AI is easy to prototype but hard to operate safely: prompts drift, data leaks, and demos rarely survive contact with real users and edge cases.',
    delivered:
      'A discovery scope, a proof of concept, a production-oriented web integration or API, handover documentation, and an agreed test strategy — with human-in-the-loop review and safety controls built in.',
    integrations:
      'LLM providers (Groq, Mistral, Gemini, OpenAI, Anthropic, Ollama), vector search, and existing APIs and databases where access is available.',
    howToBegin:
      'Start with a discovery call to define the task, the success metric, and the human review boundaries before any build begins.',
    evidence: 'AI Health Chat, Luminae, AutoResearcher, PostShifterPro.',
    icon: 'sparkles',
    tier: 'core',
    tech: ['LLM applications', 'RAG', 'Agents', 'Multimodal', 'Evaluation'],
    proof: { label: 'See it live: AI Health Chat', url: 'https://aihealthchat.qzz.io/' },
    relatedProjects: ['ai-health-chat', 'luminae', 'autoresearcher'],
  },
  {
    id: 'web-platforms',
    title: 'Web Platforms & Custom Software',
    tagline: 'Business portals, dashboards, forms, internal tools and SaaS MVPs.',
    description:
      'Robust, scalable web applications and internal tools designed to eliminate operational bottlenecks, with clean data models and role-based security.',
    for: 'Organisations needing a secure, role-based web platform or an internal tool to replace spreadsheets and manual processes.',
    problem:
      'Off-the-shelf SaaS rarely fits an organisation’s actual workflow, and custom builds often stall because requirements were never captured rigorously.',
    delivered:
      'A scoped web platform or internal tool with database design, API integration, authentication and role-based permissions, and a clear handover.',
    integrations:
      'REST and GraphQL APIs, relational databases, authentication providers, and third-party services agreed during discovery.',
    howToBegin:
      'Begin with a discovery scope defining users, roles, data model, and the primary workflow to automate.',
    evidence: 'TutaLearn, Sauti Mtaani Nairobi, Kazi Connect.',
    icon: 'globe',
    tier: 'core',
    tech: ['Next.js', 'React', 'TypeScript', 'Supabase', 'PostgreSQL'],
    proof: { label: 'See it live: TutaLearn', url: 'https://tutalearn.qzz.io/' },
    relatedProjects: ['tutalearn', 'sauti-mtaani', 'kazi-connect'],
  },
  {
    id: 'mobile-applications',
    title: 'Mobile Applications',
    tagline: 'Flutter cross-platform Android and iOS apps with offline and device capabilities.',
    description:
      'Accessible, high-performance Flutter mobile apps engineered from a single codebase, featuring offline-first data sync, native device integrations and structured test coverage.',
    for: 'Clients who need a cross-platform mobile app from a single codebase, including offline-capable or accessibility-focused experiences.',
    problem:
      'Building separate native Android and iOS apps doubles cost and maintenance; cross-platform work needs careful offline and performance design to feel native.',
    delivered:
      'A Flutter Android and iOS application, API integration, offline support where appropriate, accessibility review, and an agreed store and deployment scope. Public App Store availability is not implied without validation.',
    integrations:
      'Device APIs (camera, storage, sensors), backend APIs, and cloud services as agreed.',
    howToBegin:
      'Define the target platforms, offline requirements, and device APIs needed before estimating scope.',
    evidence:
      'EyeSense accessibility prototype; UrbanSpark AI in development; institutional Pan-African Parliament Flutter/Dart experience (no official endorsement implied).',
    icon: 'smartphone',
    tier: 'core',
    tech: ['Flutter', 'Dart', 'Offline-first', 'Accessibility'],
    proof: { label: 'Read the EyeSense case study', url: '/work/eyesense' },
    relatedProjects: ['eyesense', 'urbanspark-ai'],
  },
  {
    id: 'data-analytics-ml',
    title: 'Data Analytics & Applied ML',
    tagline: 'Cleaning, dashboards, forecasting, recommendation prototypes and model evaluation.',
    description:
      'Practical data engineering and predictive machine learning models with honest performance bounds, designed to guide concrete business decisions.',
    for: 'Teams sitting on data who want dashboards, forecasts or recommendations, and who need honest boundaries on what the model can and cannot promise.',
    problem:
      'Analytics projects often over-promise on accuracy or adoption; a model’s public-leaderboard score does not translate directly to a customer KPI.',
    delivered:
      'Cleaned data, dashboards, forecasting and recommendation prototypes, model evaluation, documented limitations, and a decision-support workflow.',
    integrations:
      'CSV, SQL or warehouse data sources, visualisation tooling, and a deployment target agreed with the client.',
    howToBegin:
      'Start with the data you already have, a clear decision to support, and an agreed success metric — not a target accuracy.',
    evidence:
      'Movie Recommendation Project: about 10 million ratings, public-leaderboard RMSE 1.21 → 0.82 across eight submissions. Public-leaderboard context only; not a customer KPI.',
    icon: 'chart',
    tier: 'core',
    tech: ['Python', 'LightGBM', 'SVD', 'scikit-learn', 'Pandas'],
    proof: { label: 'Read the recommender case study', url: '/work/movie-recommender' },
    relatedProjects: ['movie-recommender', 'weatherwise', 'codebase-genius'],
  },
  /* Additional capabilities — cross-selling, not the engineering lead. */
  {
    id: 'livestreaming-videography',
    title: 'Livestreaming & Videography',
    tagline: 'Live radio and TV streaming, scheduled programming and post-production.',
    description:
      'Multimedia live streaming and video production: live radio and TV streaming, scheduled programming, SEO-friendly publishing, RSS news feeds and PWA support.',
    icon: 'video',
    tier: 'additional',
    features: [
      'Multi-platform live streaming setup',
      'Professional video production',
      'Technical live streams and tutorials',
      'Custom overlays and graphics',
      'Post-production and editing',
      'Streaming infrastructure setup',
    ],
  },
  {
    id: 'technical-content',
    title: 'Technical Content & Documentation',
    tagline: 'Tutorials, docs and demos that help teams adopt complex systems.',
    description:
      'Clear technical content — tutorials, documentation and demos — that helps teams adopt and extend complex systems with confidence.',
    icon: 'pen',
    tier: 'additional',
    features: [
      'Technical tutorials and guides',
      'API and product documentation',
      'Demo and screencast production',
      'Developer onboarding content',
    ],
  },
  {
    id: 'wordpress',
    title: 'WordPress Development',
    tagline: 'SEO-optimised WordPress sites with fast performance and easy content management.',
    description:
      'Custom WordPress solutions: theme customisation, page builders, SEO optimisation, plugin integration, WooCommerce, speed and security hardening, and maintenance.',
    icon: 'wordpress',
    tier: 'additional',
    features: [
      'Custom theme development',
      'Page-builder customisation (Divi / Elementor)',
      'SEO optimisation and strategy',
      'Plugin development and integration',
      'WooCommerce e-commerce',
      'Speed optimisation and security',
      'Website maintenance and support',
    ],
  },
  {
    id: 'digital-media',
    title: 'Digital Media & Social Media Management',
    tagline: 'Social strategy, content creation and community management.',
    description:
      'Social media strategy, content creation and curation, community management, analytics and reporting, brand awareness, and paid advertising management.',
    icon: 'social',
    tier: 'additional',
    features: [
      'Social media strategy development',
      'Content creation and curation',
      'Community management and engagement',
      'Social media analytics and reporting',
      'Brand awareness campaigns',
      'Paid advertising management',
      'Online reputation management',
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  Projects — canonical, verified catalogue                          */
/*  repositoryUrl is set only where the repo is publicly accessible.   */
/* ------------------------------------------------------------------ */

export const projects: Project[] = [
  {
    id: 'ai-health-chat',
    slug: 'ai-health-chat',
    title: 'AI Health Chat',
    productType: 'Multilingual health-information assistant on web and WhatsApp',
    projectStatus: 'Public beta',
    engagementType: 'Independent product',
    role: 'Founder · full-stack & AI engineer',
    problem:
      'Multilingual health information is hard to access reliably, especially on low-bandwidth connections and messaging platforms.',
    audience:
      'People seeking educational health information in English, Kiswahili, French, Spanish or Dutch via web or WhatsApp.',
    solution:
      'A live multilingual AI health-information assistant on the web and Meta WhatsApp Cloud API, offering educational triage support, multimodal image understanding, vital-sign tracking and physician-ready consultation summaries.',
    architecture:
      'A React and TypeScript client backed by Supabase for data and access control, with server-side LLM provider integration and a WhatsApp Cloud API delivery path. Privacy controls and a published medical disclaimer sit around the AI workflow.',
    technicalHighlights: [
      'Multilingual LLM pipeline across 5 languages',
      'Web and WhatsApp (Meta Cloud API) delivery',
      'Multimodal image understanding',
      'Longitudinal vital-sign tracking',
      'Structured physician-ready consultation summaries',
      'README-reported 144 passing tests',
    ],
    responsibilities: ['Product design', 'Full-stack implementation', 'LLM integration', 'Testing and safety copy'],
    constraintsAndTradeoffs:
      'Educational triage support only — not a medical diagnosis tool; no clinical validation is claimed; safety boundaries are stated on the platform.',
    privacyAccessibility:
      'Privacy controls and a published medical disclaimer; not a substitute for professional medical diagnosis or emergency treatment.',
    verifiedEvidence:
      'Live at aihealthchat.qzz.io. The project README reports 144 passing tests (README-reported, not re-run for this site). 1st place at the Power Learn Project Class of 2024 graduate hackathon (December 2024).',
    limitations:
      'Not clinically validated; does not diagnose patients; hackathon-originated independent work, not commissioned or institutionally approved. Test counts are README-reported.',
    clientRelevance:
      'Shows how a sensitive AI workflow can ship with explicit safety boundaries, multilingual UX, messaging-channel delivery and human-readable outputs.',
    tech: ['React', 'TypeScript', 'Supabase', 'Multimodal AI', 'WhatsApp Cloud API'],
    screenshot: '/projects/ai-health-chat.png',
    screenshotAlt: 'AI Health Chat multilingual health-information platform',
    liveUrl: 'https://aihealthchat.qzz.io/',
    caseStudyUrl: '/work/ai-health-chat',
    featured: true,
    tier: 'signature',
    award: 'PLP Hackathon Winner',
    updatedAt: '2026-11-06',
  },
  {
    id: 'tutalearn',
    slug: 'tutalearn',
    title: 'TutaLearn',
    productType: 'Kenya CBC educational platform and AI tutor',
    projectStatus: 'Live · active development',
    engagementType: 'Independent product',
    role: 'Founder · full-stack & AI engineer',
    problem:
      'Kenyan learners need curriculum-aligned lessons, assessments and affordable access that works on mobile and low-cost connectivity.',
    audience:
      'Kenyan students from Grade 1 to Grade 12, parents and teachers following the KICD Competency-Based Curriculum.',
    solution:
      'A KICD-aligned CBC platform with strand lessons, term assessments, an AI tutor, WhatsApp reminders and quizzes, and bilingual English/Kiswahili narration.',
    architecture:
      'A Next.js, React, TypeScript and Supabase application with structured curriculum content, assessments and an AI tutoring layer. The platform is installable as a PWA and designed for mobile-first access.',
    technicalHighlights: [
      'KICD-aligned curriculum across CBC grades',
      '3,200+ lessons and 14,900+ exam questions reported on the public site',
      'Grade-aware AI tutor',
      'PWA installable on Android, iOS and laptop',
      'WhatsApp reminders and quizzes',
      'Bilingual English and Kiswahili narration',
    ],
    responsibilities: ['Product design', 'Full-stack implementation', 'Curriculum data modelling', 'AI tutor integration'],
    constraintsAndTradeoffs:
      'WhatsApp and payment feature activation must be verified before being marketed as fully operational. Automated tests and CI/CD are reported by the owner, not independently re-run for this site.',
    privacyAccessibility:
      'Child-safe, ad-free environment; learner data handled per platform policy.',
    verifiedEvidence:
      'Live at tutalearn.qzz.io. The public site reports a KICD-aligned curriculum, 3,200+ lessons and 14,900+ exam questions. Automated tests and CI/CD are reported by the owner.',
    limitations:
      'Independent product; adoption, usage and reliability metrics are not independently verified. Messaging and payment activation should be confirmed before promotion.',
    clientRelevance:
      'Demonstrates full-stack delivery of a content-heavy, mobile-first platform with structured data, assessment workflows and AI assistance.',
    tech: ['Next.js', 'React', 'TypeScript', 'Supabase', 'AI tutoring', 'PWA'],
    screenshot: '/projects/tutalearn.png',
    screenshotAlt: 'TutaLearn Kenya CBC educational platform',
    liveUrl: 'https://tutalearn.qzz.io/',
    caseStudyUrl: '/work/tutalearn',
    featured: true,
    tier: 'signature',
    updatedAt: '2026-11-06',
  },
  {
    id: 'luminae',
    slug: 'luminae',
    title: 'Luminae',
    productType: 'Five-agent research-paper analysis platform',
    projectStatus: 'Live hackathon build',
    engagementType: 'Mistral hackathon project',
    role: 'Full-stack & AI engineer',
    problem:
      'Researchers spend hours manually critiquing methodology, auditing datasets and drafting grant proposals from academic papers.',
    audience: 'Academic researchers and research teams.',
    solution:
      'A five-agent research-paper intelligence platform — OCR, vision, critics, synthesis and grant — that critiques methodology, audits datasets, proposes experiments and drafts NSF/NIH-style grant outlines using Mistral models.',
    architecture:
      'A FastAPI service orchestrates five specialised agents over uploaded PDFs, with Mistral OCR and vision models feeding critique and synthesis steps. Budget middleware caps model spend, and a Next.js interface presents results.',
    technicalHighlights: [
      'Five specialised agents: OCR, vision, critics, synthesis, grant',
      'PDF upload with OCR and vision analysis',
      'Methodology critique with severity ratings',
      'Dataset auditing and bias detection',
      'NSF/NIH-style grant outline generation',
      'Budget middleware capping model spend',
    ],
    responsibilities: ['Product design', 'Full-stack implementation', 'Multi-agent orchestration', 'Budget controls'],
    constraintsAndTradeoffs:
      'Built for a Mistral hackathon; it is not a generic product-intelligence platform. Cost guards keep analysis within a small budget.',
    privacyAccessibility:
      'Uploaded PDFs are processed by third-party LLM providers; review the platform privacy policy before submitting sensitive documents.',
    verifiedEvidence:
      'Live at luminae.qzz.io and described as built by DevRay Labs. The owner portfolio reports five agents, grant generation and a README-estimated cost of roughly $0.05 per paper with budget middleware.',
    limitations:
      'Hackathon-built; accuracy of critiques and grant output are not independently verified; do not claim zero hallucinations.',
    clientRelevance:
      'Shows multi-agent orchestration, document processing and cost controls for an AI workflow with real budget constraints.',
    tech: ['Mistral OCR', 'Multi-agent', 'FastAPI', 'Next.js', 'TypeScript'],
    screenshot: '/projects/luminae.png',
    screenshotAlt: 'Luminae research-paper analysis platform',
    liveUrl: 'https://luminae.qzz.io/',
    repositoryUrl: 'https://github.com/RealDevRay/luminae',
    isRepositoryPublic: true,
    caseStudyUrl: '/work/luminae',
    featured: true,
    tier: 'signature',
    updatedAt: '2026-11-06',
  },
  {
    id: 'sauti-mtaani',
    slug: 'sauti-mtaani',
    title: 'Sauti Mtaani Nairobi',
    productType: 'Bilingual civic feedback platform with human-reviewed AI',
    projectStatus: 'Live web app',
    engagementType: 'Civic platform for the Office of the Nairobi Woman Representative',
    role: 'Full-stack & AI engineer',
    problem:
      'Residents need a clear way to submit structured feedback, and a constituency office needs aggregated insight without automating decisions that require human judgement.',
    audience: 'Nairobi residents and constituency office staff reviewing feedback themes.',
    solution:
      'A bilingual resident-feedback platform that aggregates submissions and uses AI to suggest themes, with every AI suggestion reviewed by staff. PII is scrubbed before any AI call, and there are no automated eligibility decisions.',
    architecture:
      'A Next.js and TypeScript application on Supabase, with consent and access controls, a PII-scrubbing step before Groq model calls, and a staff review queue for AI-generated suggestions.',
    technicalHighlights: [
      'Human review of every AI suggestion',
      'PII scrubbed before model calls',
      'Bilingual resident feedback',
      'Aggregation and theme support for staff',
      'No automated eligibility decisions',
    ],
    responsibilities: ['Full-stack implementation', 'AI workflow design', 'Privacy safeguards', 'Staff review flow'],
    constraintsAndTradeoffs:
      'Advisory AI only; staff approve suggestions. The platform is not an eligibility or benefits determination system, and no political persuasion framing is used.',
    privacyAccessibility:
      'Consent flows, PII scrubbing before AI calls, and staff approval of AI suggestions. No claim of formal security certification.',
    verifiedEvidence:
      'Live at sautimtaani.site and described on the owner portfolio as using human-reviewed AI and PII scrubbing. Not independently security-audited for this site.',
    limitations:
      'No public usage, adoption or decision-quality metrics. Civic context only; no endorsement or official determination implied.',
    clientRelevance:
      'Shows privacy-aware AI in a civic workflow where human judgement and resident trust are central.',
    tech: ['Next.js', 'TypeScript', 'Supabase', 'Groq', 'AI'],
    screenshot: '/projects/sauti-mtaani.png',
    screenshotAlt: 'Sauti Mtaani Nairobi civic feedback platform',
    liveUrl: 'https://www.sautimtaani.site/',
    caseStudyUrl: '/work/sauti-mtaani',
    featured: true,
    tier: 'signature',
    updatedAt: '2026-11-06',
  },
  {
    id: 'eyesense',
    slug: 'eyesense',
    title: 'EyeSense',
    productType: 'Accessibility-focused Android visual assistant',
    projectStatus: 'Mobile prototype',
    engagementType: 'Innovation showcase project',
    role: 'Full-stack & AI engineer',
    problem:
      'Blind and low-vision users need practical visual assistance that respects privacy and works when connectivity is limited.',
    audience: 'Blind and low-vision Android users.',
    solution:
      'A Flutter Android prototype with offline OCR, speech and vision assistance, a Cloudflare Worker backend, and a TalkBack-first design that asks for consent before any image leaves the phone.',
    architecture:
      'Flutter and Dart on Android with on-device OCR and speech, plus a Cloudflare Worker for optional cloud vision calls. Consent is requested before any image is sent off-device.',
    technicalHighlights: [
      'Offline OCR and speech assistance',
      'TalkBack-first Android design',
      'Consent before images leave the device',
      'Cloudflare Worker for optional vision calls',
    ],
    responsibilities: ['Mobile implementation', 'Accessibility design', 'On-device OCR integration', 'Consent flow'],
    constraintsAndTradeoffs:
      'A prototype, not a validated navigation aid. Performance and accuracy depend on device capabilities and the quality of captured images.',
    privacyAccessibility:
      'Consent before any image leaves the phone; TalkBack-first interaction. No claim of formal accessibility certification.',
    verifiedEvidence:
      'Public source at github.com/RealDevRay/eyesense. Described on the owner portfolio as an accessibility prototype with offline OCR and consent-gated image handling.',
    limitations:
      'Prototype scope; not a validated navigation aid and not a substitute for existing mobility tools. No App Store availability claimed.',
    clientRelevance:
      'Shows accessibility-first mobile engineering and privacy-aware handling of camera data.',
    tech: ['Flutter', 'Dart', 'Offline OCR', 'Cloudflare Workers', 'Vision AI'],
    screenshot: '/projects/eyesense.png',
    screenshotAlt: 'EyeSense accessibility Android visual assistant',
    repositoryUrl: 'https://github.com/RealDevRay/eyesense',
    isRepositoryPublic: true,
    caseStudyUrl: '/work/eyesense',
    featured: true,
    tier: 'signature',
    updatedAt: '2026-11-06',
  },
  {
    id: 'movie-recommender',
    slug: 'movie-recommender',
    title: 'Movie Recommendation Project',
    productType: 'Hybrid recommender system and competition project',
    projectStatus: 'Competition entry',
    engagementType: 'Programme final project (optional)',
    role: 'Sole ML engineer',
    problem:
      'Viewers need personalised movie recommendations, and public-leaderboard scores do not translate directly to real-world KPIs.',
    audience: 'Portfolio and competition demonstration; not a commercial product.',
    solution:
      'A hybrid content-based and collaborative-filtering recommender built on about 10 million ratings, using SVD matrix factorisation and LightGBM. Public-leaderboard RMSE improved from 1.21 to 0.82 across eight submissions.',
    architecture:
      'Python data preparation and feature engineering over roughly 10 million ratings, a 50-factor SVD representation, LightGBM prediction, and offline evaluation against the competition’s public leaderboard.',
    technicalHighlights: [
      '50-factor SVD matrix factorisation',
      'LightGBM prediction layer',
      'About 10 million ratings',
      'Public-leaderboard RMSE 1.21 → 0.82 across eight submissions',
    ],
    responsibilities: ['Data preparation', 'Feature engineering', 'Model training', 'Evaluation and submissions'],
    constraintsAndTradeoffs:
      'Public-leaderboard metric only; do not extrapolate to customer KPIs or production adoption.',
    privacyAccessibility: 'Uses a public movie-rating dataset; no personal user data.',
    verifiedEvidence:
      'Public source at github.com/rayklanderman/mrp-2026. Public-leaderboard RMSE 1.21 → 0.82 across eight submissions, as reported on the owner portfolio.',
    limitations:
      'Competition and prototype scope; not a production recommender; leaderboard context only.',
    clientRelevance:
      'Shows measured model iteration and honest evaluation boundaries for a data/ML engagement.',
    tech: ['Python', 'LightGBM', 'SVD', 'scikit-learn', 'Pandas'],
    screenshot: '/projects/movie-recommender.png',
    screenshotAlt: 'Movie Recommendation Project evaluation visual',
    repositoryUrl: 'https://github.com/rayklanderman/mrp-2026',
    isRepositoryPublic: true,
    caseStudyUrl: '/work/movie-recommender',
    featured: true,
    tier: 'signature',
    updatedAt: '2026-11-06',
  },
  {
    id: 'autoresearcher',
    slug: 'autoresearcher',
    title: 'AutoResearcher',
    productType: 'Seven-agent research-report workflow',
    projectStatus: 'Course capstone',
    engagementType: 'Course capstone',
    role: 'Full-stack & AI engineer',
    problem:
      'Building a single citation-rich research report still takes many hours of manual searching, writing and formatting.',
    audience: 'Professionals and students who need structured research reports.',
    solution:
      'A seven-agent research workflow built on Google ADK and Vertex AI that transforms a prompt into a print-ready LaTeX PDF with sources, charts and citations.',
    architecture:
      'A hierarchical seven-agent system on Vertex AI ADK using Gemini 2.5 Pro and Flash, with Tavily web sources, claim fact-checking, Matplotlib charts and Pandoc/LaTeX export.',
    technicalHighlights: [
      'Seven-agent hierarchical system (Vertex AI ADK)',
      'Gemini 2.5 Pro and Flash models',
      'Tavily web sources and claim fact-checking',
      'Matplotlib charts and Pandoc LaTeX PDF export',
    ],
    responsibilities: ['System design', 'Agent orchestration', 'Notebook implementation'],
    constraintsAndTradeoffs:
      'Educational and capstone submission purposes; sources must be cited accurately and zero hallucinations are not claimed.',
    privacyAccessibility: 'Runs on Kaggle or Colab with user-supplied API keys; no personal data is stored by DevRay.',
    verifiedEvidence:
      'Public repository at github.com/rayklanderman/CapstoneProject-Autoresearcher. Described on the owner portfolio as a seven-agent Vertex AI ADK capstone.',
    limitations:
      'Capstone scope; not a production service; accuracy depends on the underlying models and search tools.',
    clientRelevance:
      'Shows agent orchestration, source grounding and document generation in a constrained research workflow.',
    tech: ['Vertex AI ADK', 'Gemini 2.5 Pro', 'Gemini 2.5 Flash', 'Tavily', 'Python', 'LaTeX'],
    screenshot: '/projects/autoresearcher.png',
    screenshotAlt: 'AutoResearcher seven-agent research workflow',
    repositoryUrl: 'https://github.com/rayklanderman/CapstoneProject-Autoresearcher',
    isRepositoryPublic: true,
    caseStudyUrl: '/work/autoresearcher',
    featured: false,
    tier: 'secondary',
    updatedAt: '2026-11-06',
  },
  {
    id: 'postshifterpro',
    slug: 'postshifterpro',
    title: 'PostShifterPro',
    productType: 'AI content repurposing tool',
    projectStatus: 'Live web app',
    engagementType: 'Independent project',
    role: 'Full-stack & AI engineer',
    problem:
      'Turning an article or link into platform-appropriate social posts and newsletters takes repetitive manual rewriting.',
    audience: 'Creators, marketers and small teams repurposing source material.',
    solution:
      'A live tool that turns a link or article into platform-ready social and newsletter drafts.',
    technicalHighlights: ['Source-to-draft workflow', 'Platform-ready output formats', 'LLM-assisted rewriting'],
    responsibilities: ['Full-stack implementation', 'AI workflow design', 'Interface'],
    constraintsAndTradeoffs:
      'Output still requires human review for accuracy and tone. Exact integrations and use cases should be confirmed before promotion.',
    privacyAccessibility: 'Source material is processed by LLM providers; review the platform privacy policy before submitting sensitive content.',
    verifiedEvidence:
      'Live at postshifterpro.qzz.io and listed on the owner portfolio as an independent live web app using Next.js, TypeScript, Tailwind and Groq.',
    limitations:
      'Independent tool; usage and output quality are not independently measured. No guarantee of publish-ready accuracy.',
    clientRelevance:
      'Shows a focused LLM product that automates a repetitive content workflow.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Groq', 'AI'],
    screenshot: '/projects/postshifterpro.png',
    screenshotAlt: 'PostShifterPro content repurposing tool',
    liveUrl: 'https://postshifterpro.qzz.io/',
    caseStudyUrl: '/work/postshifterpro',
    featured: false,
    tier: 'secondary',
    updatedAt: '2026-11-06',
  },
  {
    id: 'live-interviewer',
    slug: 'live-interviewer',
    title: 'Live Interviewer',
    productType: 'AI interview-question generator',
    projectStatus: 'Live web app',
    engagementType: 'Independent project',
    role: 'Full-stack & AI engineer',
    problem:
      'Hiring teams need role-relevant, scenario-based interview questions without starting from a blank page.',
    audience: 'Hiring managers and interviewers preparing role-specific interviews.',
    solution: 'A live tool that generates scenario-based interview questions for any role.',
    technicalHighlights: ['Role-aware question generation', 'Scenario-based prompts', 'Browser interface'],
    responsibilities: ['Full-stack implementation', 'Prompt design', 'Interface'],
    constraintsAndTradeoffs:
      'Generated questions require human review and are not a validated hiring assessment.',
    privacyAccessibility: 'Role text is sent to an LLM provider; avoid entering sensitive personal data.',
    verifiedEvidence:
      'Live at liveinterviewer.vercel.app and listed on the owner portfolio as using Next.js, TypeScript, Tailwind and Mistral.',
    limitations:
      'Independent tool; no claim of predictive hiring validity. Exact feature depth should be confirmed before marketing.',
    clientRelevance: 'Shows a small, focused AI workflow for a common team task.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Mistral', 'AI'],
    screenshot: '/projects/live-interviewer.png',
    screenshotAlt: 'Live Interviewer AI question generator',
    liveUrl: 'https://liveinterviewer.vercel.app/',
    caseStudyUrl: '/work/live-interviewer',
    featured: false,
    tier: 'secondary',
    updatedAt: '2026-11-06',
  },
  {
    id: 'serenity-ai',
    slug: 'serenity-ai',
    title: 'SerenityAI',
    productType: 'AI-assisted wellness companion',
    projectStatus: 'Live web app',
    engagementType: 'Independent project',
    role: 'Full-stack & AI engineer',
    problem:
      'People want structured mood tracking, journaling insights and pattern analysis to support wellbeing without a clinical commitment.',
    audience: 'Individuals seeking self-guided wellness support.',
    solution:
      'An AI wellness companion for reflection, mood tracking and pattern analysis — wellness support, not therapy.',
    technicalHighlights: ['Reflection prompts', 'Mood tracking', 'Journaling insights', 'Pattern analysis'],
    responsibilities: ['Product design', 'Full-stack implementation', 'AI integration'],
    constraintsAndTradeoffs:
      'Not a licensed therapeutic treatment; no claim of clinical efficacy or zero data retention without verification.',
    privacyAccessibility:
      'Wellness data is sensitive; review the platform privacy and retention policy before use.',
    verifiedEvidence:
      'Live at serenityai.qzz.io and listed on the owner portfolio as an AI wellness companion using React, TypeScript, JacLang and Groq.',
    limitations:
      'Not clinically validated; does not provide licensed therapy; retention and efficacy claims are unverified.',
    clientRelevance: 'Shows sensitive-domain AI UX with clear non-clinical boundaries.',
    tech: ['React', 'TypeScript', 'JacLang', 'Groq'],
    screenshot: '/projects/serenity-ai.png',
    screenshotAlt: 'SerenityAI wellness companion',
    liveUrl: 'https://serenityai.qzz.io/',
    caseStudyUrl: '/work/serenity-ai',
    featured: false,
    tier: 'secondary',
    updatedAt: '2026-11-06',
  },
  {
    id: 'codebase-genius',
    slug: 'codebase-genius',
    title: 'Codebase Genius',
    productType: 'AI documentation generator',
    projectStatus: 'Live demo',
    engagementType: 'Independent project',
    role: 'Full-stack & AI engineer',
    problem:
      'GitHub repositories often lack comprehensive, up-to-date documentation, making onboarding and maintenance slow.',
    audience: 'Development teams and open-source maintainers.',
    solution: 'A tool that generates documentation from a GitHub repository using LLM analysis.',
    technicalHighlights: [
      'Repository analysis with Google Gemini',
      'Automated documentation generation',
      'Graph-based code relationships (NetworkX)',
    ],
    responsibilities: ['Product design', 'Full-stack implementation'],
    constraintsAndTradeoffs:
      'Demo application; output quality depends on repository structure and the LLM provider.',
    privacyAccessibility:
      'Reads public repository code; does not store private source unless explicitly provided.',
    verifiedEvidence:
      'Live demo at geniuscodebase.streamlit.app; public source at github.com/rayklanderman/jaseci-proj.',
    limitations: 'Demo scope; not a production documentation pipeline.',
    clientRelevance: 'Shows code analysis, graph modelling and LLM-assisted documentation.',
    tech: ['Python', 'Google Gemini', 'Streamlit', 'NetworkX'],
    screenshot: '/projects/codebase-genius.png',
    screenshotAlt: 'Codebase Genius AI documentation generator',
    liveUrl: 'https://geniuscodebase.streamlit.app/',
    repositoryUrl: 'https://github.com/rayklanderman/jaseci-proj',
    isRepositoryPublic: true,
    caseStudyUrl: '/work/codebase-genius',
    featured: false,
    tier: 'secondary',
    updatedAt: '2026-11-06',
  },
  {
    id: 'weatherwise',
    slug: 'weatherwise',
    title: 'WeatherWise Planner',
    productType: 'Global climate planning tool',
    projectStatus: 'Demo offline',
    engagementType: 'Independent project',
    role: 'Full-stack & AI engineer',
    problem:
      'Climate and Earth data is publicly available from NASA but difficult to visualise and act on for planning purposes.',
    audience: 'Planners, researchers and climate-curious users.',
    solution:
      'A global climate planning tool using NASA Earth data with interactive visualisations and AI-assisted insights.',
    technicalHighlights: ['NASA GIBS Earth data', 'Interactive visualisations (Plotly.js)', 'AI-assisted insights', 'PWA'],
    responsibilities: ['Product design', 'Full-stack implementation'],
    constraintsAndTradeoffs: 'Relies on public NASA Earth data availability and terms of use.',
    privacyAccessibility: 'Uses public Earth observation data; no personal data required.',
    verifiedEvidence:
      'Previously demonstrated at weatherwise.earth. On 2026-11-06 the domain was expired and listed for sale, so no working public demo is linked.',
    limitations:
      'Public demo is offline and the previous domain has expired. Project details describe the prior build; no live URL is claimed.',
    clientRelevance: 'Shows data visualisation and public-data integration.',
    tech: ['TypeScript', 'Python', 'React', 'FastAPI', 'NASA GIBS', 'Plotly.js', 'PWA'],
    screenshot: '/projects/weatherwise.png',
    screenshotAlt: 'WeatherWise climate planning tool',
    caseStudyUrl: '/work/weatherwise',
    featured: false,
    tier: 'secondary',
    updatedAt: '2026-11-06',
  },
  {
    id: 'weru-digital',
    slug: 'weru-digital',
    title: 'Weru Digital',
    productType: 'Multimedia site for TV and radio streaming',
    projectStatus: 'Live',
    engagementType: 'Client project — Weru TV and FM',
    role: 'Full-stack & AI engineer',
    problem:
      'A TV and FM station needed a web presence for live radio and TV streaming, scheduled programming and SEO-friendly news.',
    audience: 'Viewers and listeners of Weru TV and FM.',
    solution:
      'A multimedia site featuring live radio and TV streaming, scheduled programming, SEO-friendly publishing, auto-updating RSS news feeds and PWA support.',
    technicalHighlights: ['Live radio and TV streaming', 'Scheduled programming', 'RSS news feeds and SEO', 'PWA support'],
    responsibilities: ['Full-stack implementation', 'Streaming infrastructure', 'SEO'],
    constraintsAndTradeoffs: 'Streaming reliability depends on upstream broadcast feeds and client bandwidth.',
    privacyAccessibility: 'Public streaming content; standard web analytics may apply.',
    verifiedEvidence: 'Live at werudigital.co.ke; verified during the redesign audit.',
    limitations: 'Client-facing project; adoption and uptime metrics are not independently verified.',
    clientRelevance: 'Shows streaming integration, content publishing and SEO for a media organisation.',
    tech: ['WordPress', 'PWA', 'Live Streaming', 'AI', 'SEO', 'RSS'],
    screenshot: '/projects/weru-digital.png',
    screenshotAlt: 'Weru Digital multimedia streaming site',
    liveUrl: 'https://werudigital.co.ke/',
    caseStudyUrl: '/work/weru-digital',
    featured: false,
    tier: 'secondary',
    updatedAt: '2026-11-06',
  },
  {
    id: 'kazi-connect',
    slug: 'kazi-connect',
    title: 'Kazi Connect',
    productType: 'AI-assisted job-matching platform',
    projectStatus: 'Live web app',
    engagementType: 'Independent project',
    role: 'Full-stack & AI engineer',
    problem:
      'Job seekers need a clearer way to connect with relevant opportunities and present their skills.',
    audience: 'Job seekers and hiring teams.',
    solution: 'An AI-assisted job-matching platform with profiles and matching support.',
    technicalHighlights: ['Profiles', 'AI-assisted matching', 'Web application'],
    responsibilities: ['Product design', 'Full-stack implementation', 'AI matching'],
    constraintsAndTradeoffs:
      'Current live URL and feature depth were re-verified as reachable; detailed matching behaviour should be confirmed before promotion.',
    privacyAccessibility: 'User profile data handled per platform policy.',
    verifiedEvidence:
      'Live at kazi-connect.vercel.app (HTTP 200 on 2026-11-06) and listed on the owner portfolio as using Next.js, TypeScript, Firebase and OpenAI.',
    limitations:
      'Independent project; adoption and matching quality are not independently measured. No guarantee of placements.',
    clientRelevance: 'Shows profile-based matching and an AI-assisted workflow for a two-sided use case.',
    tech: ['Next.js', 'TypeScript', 'Firebase', 'OpenAI'],
    screenshot: '/projects/kazi-connect.png',
    screenshotAlt: 'Kazi Connect job-matching platform',
    liveUrl: 'https://kazi-connect.vercel.app/',
    caseStudyUrl: '/work/kazi-connect',
    featured: false,
    tier: 'secondary',
    updatedAt: '2026-11-06',
  },
  {
    id: 'urbanspark-ai',
    slug: 'urbanspark-ai',
    title: 'UrbanSpark AI',
    productType: 'Sheng-English creative assistant for young entrepreneurs',
    projectStatus: 'In development',
    engagementType: 'Independent project',
    role: 'Full-stack & AI engineer',
    problem:
      'Young Kenyan entrepreneurs need approachable creative and business support in the language they actually use day to day.',
    audience: 'Young Kenyan entrepreneurs and small creative businesses.',
    solution:
      'A Sheng-English creative assistant designed to help young entrepreneurs develop and refine ideas. In development; no public demo is claimed.',
    technicalHighlights: ['Sheng-English interaction', 'Flutter mobile client', 'Supabase backend'],
    responsibilities: ['Product design', 'Mobile implementation', 'AI interaction design'],
    constraintsAndTradeoffs:
      'In development. Do not present as launched or as a validated business-advice tool.',
    privacyAccessibility: 'No public privacy policy reviewed for this site; treat as in-development.',
    verifiedEvidence:
      'Listed on the owner portfolio as an in-development project using Flutter, Dart, Riverpod, Supabase and AI.',
    limitations:
      'No public demo, usage data or impact evidence. Development status only.',
    clientRelevance:
      'Shows mobile-first, locally relevant product thinking and bilingual interaction design.',
    tech: ['Flutter', 'Dart', 'Riverpod', 'Supabase', 'AI'],
    screenshot: '/projects/urbanspark-ai.png',
    screenshotAlt: 'UrbanSpark AI Sheng-English creative assistant',
    caseStudyUrl: '/work/urbanspark-ai',
    featured: false,
    tier: 'secondary',
    updatedAt: '2026-11-06',
  },
];

/* ------------------------------------------------------------------ */
/*  Homepage supporting content                                       */
/* ------------------------------------------------------------------ */

export const painPoints: PainPoint[] = [
  {
    title: 'Need an AI feature that works reliably?',
    description: 'Move from a promising demo to a scoped workflow with evaluation, guardrails and human review.',
    serviceId: 'ai-applications',
  },
  {
    title: 'Still running operations on spreadsheets?',
    description: 'Replace manual tracking with a focused internal tool, dashboard or role-based portal.',
    serviceId: 'web-platforms',
  },
  {
    title: 'Modernising a mobile workflow?',
    description: 'Design a Flutter app around offline use, device APIs and accessibility from the start.',
    serviceId: 'mobile-applications',
  },
  {
    title: 'Sitting on data without clear decisions?',
    description: 'Turn messy records into decision-support dashboards, recommender prototypes and evaluated ML models.',
    serviceId: 'data-analytics-ml',
  },
];

export const differentiators: Differentiator[] = [
  {
    title: 'Founder-led, accountable ownership',
    description:
      'You work directly with the engineer doing the work. Discovery, architecture, implementation and handover stay in one accountable thread.',
  },
  {
    title: 'Software and AI in one workflow',
    description:
      'Product engineering and applied AI are designed together, so the model, data and interface are not bolted together at the end.',
  },
  {
    title: 'Privacy and accessibility built in',
    description:
      'Consent, data minimisation, human review and accessible interaction patterns are considered part of the product, not a later patch.',
  },
  {
    title: 'Pragmatic technology decisions',
    description:
      'Tools are chosen for the job and the maintenance budget. Technology names are evidence of work, not a shopping list.',
  },
  {
    title: 'Validation proportionate to risk',
    description:
      'Testing, evaluation and monitoring are scoped to the impact of failure. Claims are qualified when they are not independently verified.',
  },
  {
    title: 'Clear scope, previews and handover',
    description:
      'Decision points, deliverables and change control are written down, with iterative previews and documentation at handover.',
  },
];

export const processSteps: ProcessStep[] = [
  {
    step: '01',
    title: 'Discover',
    description:
      'Understand users, constraints, the business decision behind the build, and what success actually looks like.',
    deliverables: 'Discovery notes, open questions and a recommended scope.',
  },
  {
    step: '02',
    title: 'Scope and propose',
    description:
      'Turn discovery into a concrete scope with deliverables, assumptions, risks and a written proposal.',
    deliverables: 'Scoped proposal, milestones and change-control approach.',
  },
  {
    step: '03',
    title: 'Prototype',
    description:
      'Validate the riskiest workflow early — the model behaviour, the core interaction or the integration.',
    deliverables: 'Working prototype or technical spike with findings.',
  },
  {
    step: '04',
    title: 'Build and integrate',
    description:
      'Implement the product in reviewable increments, with previews and decisions documented as the work progresses.',
    deliverables: 'Iterative builds, preview links and implementation notes.',
  },
  {
    step: '05',
    title: 'Validate and launch',
    description:
      'Test the workflows that matter, check accessibility and security basics, and prepare deployment.',
    deliverables: 'Test results, deployment checklist and launch build.',
  },
  {
    step: '06',
    title: 'Support and iterate',
    description:
      'After launch, agree what maintenance or iteration is useful rather than assuming an ongoing retainer.',
    deliverables: 'Handover documentation and an agreed support path.',
  },
];

export const faqs: Faq[] = [
  {
    question: 'What kinds of projects do you take on?',
    answer:
      'AI applications and automation, web platforms and internal tools, Flutter mobile apps, and data analytics or applied ML work. Smaller supporting capabilities include technical documentation, WordPress, livestreaming and digital media. If a request is outside that range, I will say so and suggest a better fit where I can.',
  },
  {
    question: 'How long does a project take?',
    answer:
      'Timelines are quoted after discovery, because they depend on scope, integrations, data access and review cycles. A focused prototype is a different commitment from a production platform. I do not publish guaranteed timelines before understanding the work.',
  },
  {
    question: 'How is work priced?',
    answer:
      'Pricing is agreed from a written scope after discovery. Smaller prototypes and larger builds are structured differently, and assumptions are stated in the proposal. There are no hidden price ranges on this site because a credible number depends on the actual work.',
  },
  {
    question: 'Do you work remotely?',
    answer:
      'Yes. DevRay is based in Nairobi, Kenya, and works remotely with clients and collaborators. Calls can be scheduled, and most collaboration happens asynchronously through shared previews, written updates and review points.',
  },
  {
    question: 'Who owns the code and intellectual property?',
    answer:
      'Ownership and licensing are agreed in the project contract. Client deliverables and any reusable internal tooling are treated separately, and private source code is never published. The exact position is written down before work starts.',
  },
  {
    question: 'Can you work with an existing codebase?',
    answer:
      'Often, yes — after a review of the architecture, dependencies, tests and deployment path. I will tell you if the existing system makes the requested change risky or uneconomic, rather than pretending a rewrite is always the answer.',
  },
  {
    question: 'How is data handled when an AI feature is involved?',
    answer:
      'The aim is to minimise data sent to model providers, avoid unnecessary personal data, use consent where required, and keep a human review step for consequential decisions. Provider data policies still apply. I do not claim formal security certification unless one has actually been obtained.',
  },
  {
    question: 'Do you provide testing and maintenance?',
    answer:
      'Testing and maintenance can be scoped with the build. The depth should match the risk: critical flows need more evidence than a marketing page. Ongoing support is agreed explicitly; there is no implied 24/7 support or service-level guarantee.',
  },
  {
    question: 'What if my project is not a good fit?',
    answer:
      'I will say so early. Where possible I will point you toward a more suitable approach or type of specialist. A short discovery conversation should leave you clearer about the next step even if we do not work together.',
  },
];

/* ------------------------------------------------------------------ */
/*  Education, certifications, profile, credentials                   */
/* ------------------------------------------------------------------ */

export const education: Education[] = [
  {
    id: 'bachelors-cs',
    institution: 'University of the People (UoPeople)',
    degree: 'Bachelor of Science in Computer Science',
    period: '2025 – 2028 (expected)',
    status: 'ongoing',
    description:
      'Cumulative GPA 3.98 and President’s List recognition as of September 2026. Focus on software engineering, algorithms and modern computing.',
    skills: ['Software Engineering', 'Algorithms', 'Data Structures'],
  },
  {
    id: 'diploma-ict',
    institution: 'Management University of Africa (MUA)',
    degree: 'Diploma in Information Communication Technology',
    period: '2021 – 2024',
    status: 'completed',
    description: 'Graduated with Distinction. Focus on software development and IT infrastructure.',
    skills: ['Software Development', 'IT Infrastructure', 'Project Management'],
  },
  {
    id: 'data-science-alx',
    institution: 'ALX Africa',
    degree: 'Data Science Programme',
    period: '2025 – April 2026',
    status: 'completed',
    description:
      'Practical training in Python, SQL, machine learning, analytics and model evaluation, following the completed ALX Data Analytics programme.',
    skills: ['Python', 'SQL', 'Machine Learning', 'Model Evaluation', 'Power BI', 'Tableau'],
  },
  {
    id: 'plp-software',
    institution: 'Power Learn Project (PLP) Africa',
    degree: 'Software Development Programme',
    period: 'December 2024',
    status: 'completed',
    description:
      'Completed a 16-week intensive programme in software development. 1st place at the Class of 2024 graduate hackathon with the AI health assistant that grew into AI Health Chat.',
    skills: ['Python', 'Web Development', 'Database Management', 'Dart', 'Flutter'],
  },
  {
    id: 'wqu-deep-learning',
    institution: 'WorldQuant University',
    degree: 'Applied AI Lab: Deep Learning for Computer Vision',
    period: '2025 – Present',
    status: 'ongoing',
    description: 'Deep learning and computer-vision techniques with applied projects.',
    skills: ['Deep Learning', 'Computer Vision', 'AI'],
  },
  {
    id: 'wqu-data-science',
    institution: 'WorldQuant University',
    degree: 'Applied Data Science Lab',
    period: 'January 2026',
    status: 'completed',
    description: 'Advanced data analysis and machine learning with real-world project implementation.',
    skills: ['Data Science', 'Machine Learning', 'Analytics'],
  },
  {
    id: 'stanford-python',
    institution: 'Stanford University',
    degree: 'Code in Place: Introduction to Programming with Python',
    period: '2024',
    status: 'completed',
    description: 'Intensive Python programming course; completed the diagnostic assessment and final project.',
    skills: ['Python', 'Programming Fundamentals'],
  },
];

export const certifications: Certification[] = [
  {
    id: 'google-cloud-architect',
    platform: 'Google Cloud',
    title: 'Professional Cloud Architect',
    badges: 1,
    highlights: ['Cloud Architecture', 'Cloud Security', 'Google Cloud Platform', 'GKE'],
    expiry: 'July 15, 2028',
    url: 'https://www.credly.com/badges/1eb3782a-a4cf-42b9-859c-80ab36498448',
  },
  {
    id: 'oracle-cloud',
    platform: 'Oracle Cloud Infrastructure',
    title: '2025 Certified AI Foundations Associate',
    badges: 1,
    highlights: [
      'AI and ML fundamentals',
      'Deep learning: CNNs, RNNs, LSTMs',
      'OCI AI tools and services',
      'Generative AI and large language models',
      'Oracle 23ai and Select AI',
    ],
    expiry: 'October 30, 2027',
    url: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=7418DAC9DB558E4572B75960D015FF4F8AC815414D000F75011C3391E0103A33',
  },
  {
    id: 'kcna',
    platform: 'Linux Foundation',
    title: 'Kubernetes and Cloud Native Associate (KCNA)',
    badges: 1,
    highlights: ['Application containers', 'Cloud native architecture', 'Clusters', 'GitOps'],
    url: 'https://www.credly.com/badges/565da7e7-3a27-4327-a1d8-af11b3e62362',
  },
  {
    id: 'bcs-generative-ai',
    platform: 'BCS, The Chartered Institute for IT',
    title: 'Foundation Certificate in Generative AI',
    badges: 1,
    highlights: ['Generative AI principles', 'AI ethics', 'AI applications'],
    url: 'https://somas.ouk.ac.ke/mod/customcert/verify_certificate.php?code=ICaIFl00uF&qrcode=1&contextid=236583',
  },
  {
    id: 'google-skills',
    platform: 'Google Skills',
    title: 'Google Cloud and AI/ML skill badges',
    badges: 18,
    highlights: [
      'MLOps for Generative AI',
      'Vector Search and Embeddings',
      'Responsible AI for Developers',
      'Introduction to Vertex AI Studio',
      'Generative AI Fundamentals',
      'Prompt Design in Vertex AI',
    ],
    url: 'https://www.cloudskillsboost.google/public_profiles/raymond-klanderman',
  },
  {
    id: 'credly',
    platform: 'Credly',
    title: 'AWS, IBM and cybersecurity badges',
    badges: 5,
    highlights: [
      'AWS Educate Introduction to Generative AI',
      'Code Generation and Optimization Using IBM Granite',
      'AWS Educate Machine Learning Foundations',
      'Data Fundamentals — IBM SkillsBuild',
      'Cybersecurity Fundamentals — IBM SkillsBuild',
    ],
  },
  {
    id: 'microsoft-learn',
    platform: 'Microsoft Learn',
    title: 'Azure and cloud development profile',
    badges: 0,
    highlights: ['Learning profile showing completed paths in Azure, AI and cloud development.'],
    url: 'https://learn.microsoft.com/users/raymond-klanderman',
  },
];

export const professionalProfile = {
  name: 'Raymond (DevRay) Klanderman',
  title: 'Software & AI Engineer',
  subtitle: 'Founder-led software and applied-AI engineering',
  tagline: 'DevRay',
  location: 'Nairobi, Kenya — available for remote collaborations',
  founderLink: {
    label: 'Meet the Engineer — View Full Technical Portfolio →',
    url: 'https://rayklanderman.is-a.dev/',
  },
  linkedIn: 'https://www.linkedin.com/in/rayklanderman/',
  github: 'https://github.com/rayklanderman',
  bio: 'I’m Raymond (DevRay) Klanderman, a software and AI engineer based in Nairobi. I build practical systems for healthcare, education, accessibility, civic technology and machine learning — working end to end from data and models to interface, testing and deployment.',
  extendedBio:
    'On my projects I work as both the full-stack engineer and the AI engineer: data models, APIs, interfaces, testing and deployment, as well as model selection, prompt and agent design, evaluation and guardrails. My work combines LLM applications, machine learning, agentic workflows, web and mobile engineering, and cloud infrastructure, with close attention to data privacy and reliable deployment. I aim to make emerging technology useful to people and communities. Beyond engineering, I create clear technical content — tutorials, docs and demos — that helps teams adopt and extend complex systems with confidence. My mission is simple: build tools that understand people, and empower people to build even better tools. I am open to client projects and collaborations on human-centred AI.',
  keyTechnologies: [
    'Python', 'TypeScript', 'React', 'Next.js', 'FastAPI', 'Flutter', 'Dart',
    'Supabase', 'PostgreSQL', 'SQL', 'Google Cloud', 'Cloudflare Workers',
    'Groq', 'Mistral', 'Gemini', 'OpenAI', 'LLM applications', 'RAG', 'Agents',
    'LightGBM', 'scikit-learn', 'SVD',
  ],
  institutionalExperience: [
    {
      organisation: 'Pan-African Parliament',
      year: '2025',
      role: 'Media Specialist (contract)',
      description:
        'Contract work included building a Flutter/Dart cross-platform Android and iOS application, integrating livestreamed Pan-African Parliament sessions, and structuring official Pan-African Parliament content for mobile — working with delegates and multidisciplinary teams. This is described as institutional experience only; it does not imply official Pan-African Parliament product endorsement, production rollout or authorization.',
    },
  ],
};

export const namedCredentials: NamedCredential[] = [
  {
    title: 'Google Cloud Professional Cloud Architect',
    issuer: 'Google Cloud',
    url: 'https://www.credly.com/badges/1eb3782a-a4cf-42b9-859c-80ab36498448',
  },
  {
    title: 'Oracle OCI 2025 Certified AI Foundations Associate',
    issuer: 'Oracle',
    url: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=7418DAC9DB558E4572B75960D015FF4F8AC815414D000F75011C3391E0103A33',
  },
  {
    title: 'Kubernetes and Cloud Native Associate (KCNA)',
    issuer: 'Linux Foundation',
    url: 'https://www.credly.com/badges/565da7e7-3a27-4327-a1d8-af11b3e62362',
  },
  {
    title: 'Foundation Certificate in Generative AI',
    issuer: 'BCS, The Chartered Institute for IT',
    url: 'https://somas.ouk.ac.ke/mod/customcert/verify_certificate.php?code=ICaIFl00uF&qrcode=1&contextid=236583',
  },
];
