
import { Service, Project, Education, Certification, NavItem, SocialLink, NamedCredential } from '../types';

export const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/#services' },
  { label: 'About', href: '/#about' },
  { label: 'Work', href: '/#projects' },
  { label: 'AI Chat', href: '/chat' },
  { label: 'Contact', href: '/#contact' },
];

export const socialLinks: SocialLink[] = [
  { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/rayklanderman/', icon: 'linkedin' },
  { platform: 'GitHub', url: 'https://github.com/rayklanderman', icon: 'github' },
  { platform: 'Instagram', url: 'https://www.instagram.com/rayklanderman/', icon: 'instagram' },
  { platform: 'CoderLegion', url: 'https://coderlegion.com/user/DevRay', icon: 'code' },
];
/* ------------------------------------------------------------------ */
/*  Services — buyable outcomes (Phase 4 of the master prompt)        */
/*  Technology tags are sparse and evidence-based only.               */
/* ------------------------------------------------------------------ */

export const services: Service[] = [
  {
    id: 'ai-applications',
    title: 'AI Applications & Intelligent Automation',
    tagline: 'Custom AI assistants, RAG, document processing, and workflow automation.',
    description:
      'Founder-led design and delivery of AI-powered applications: custom assistants, knowledge search / RAG when suitable, document processing, workflow automation, agents, multimodal integration, human-in-the-loop review, and evaluation and safety controls.',
    for: 'Teams and founders who want to deploy AI in production, not just experiment with it.',
    problem:
      'Generative AI is easy to prototype but hard to operate safely: prompts drift, data leaks, and demos rarely survive contact with real users and edge cases.',
    delivered:
      'A discovery scope, a proof of concept, a production-oriented web integration or API, handover docs, and an agreed test strategy - with human-in-the-loop review and safety controls built in.',
    integrations:
      'LLM providers (OpenAI, Anthropic, Gemini, Groq, Ollama), vector search, and existing APIs and databases where access is available.',
    howToBegin:
      'Start with a discovery call to define the task, the success metric, and the human review boundaries before any build begins.',
    evidence: 'AI Health Chat, Luminae, AutoResearcher, PostShifterPro where verified.',
    icon: 'sparkles',
    tier: 'core',
    tech: ['LLMs', 'RAG', 'AI agents', 'Vector search'],
    proof: { label: 'See it live: AI Health Chat', url: 'https://aihealthchat.qzz.io/' },
  },
  {
    id: 'web-platforms',
    title: 'Web Platforms & Custom Software',
    tagline: 'Business portals, dashboards, forms, internal tools, and SaaS MVPs.',
    description:
      'Full-stack web platforms: business portals, dashboards, forms, internal tools, content platforms, SaaS MVPs, database/API integrations, and auth with role-based permissions.',
    for: 'Organisations needing a secure, role-based web platform or an internal tool to replace spreadsheets and manual processes.',
    problem:
      'Off-the-shelf SaaS rarely fits an organisation is actual workflow, and custom builds often stall because requirements were never captured rigorously.',
    delivered:
      'A scoped web platform or internal tool with database design, API integration, auth and role-based permissions, and a clear handover.',
    integrations:
      'REST and GraphQL APIs, databases, auth providers, and third-party services agreed during discovery.',
    howToBegin:
      'Begin with a discovery scope defining users, roles, data model, and the primary workflow to automate.',
    evidence: 'TutaLearn, Sauti Mtaani, Kazi Connect - links and status to be verified.',
    icon: 'globe',
    tier: 'core',
    tech: ['Next.js', 'React', 'TypeScript', 'Node.js', 'PostgreSQL'],
    proof: { label: 'See it live: TutaLearn', url: 'https://tutalearn.qzz.io/' },
  },
  {
    id: 'mobile-applications',
    title: 'Mobile Applications',
    tagline: 'Flutter cross-platform Android and iOS apps with offline and device capabilities.',
    description:
      'Flutter mobile applications with accessible design, offline features when appropriate, device API integration, API integration, and testing - Android and iOS deliverable scope.',
    for: 'Clients who need a cross-platform mobile app from a single codebase, including offline-capable or accessibility-focused experiences.',
    problem:
      'Building separate native Android and iOS apps doubles cost and maintenance; cross-platform needs careful offline and performance design to feel native.',
    delivered:
      'A Flutter Android and iOS application, API integration, offline support where appropriate, accessibility review, and agreed store and deploy scope. Public App Store availability is not implied without validation.',
    integrations:
      'Device APIs (camera, storage, sensors), backend APIs, and cloud services as agreed.',
    howToBegin:
      'Define the target platforms, offline requirements, and device APIs needed before estimating scope.',
    evidence:
      'EyeSense accessibility prototype; Pan-African Parliament Flutter Dart app institutional experience, positioned as experience, no official endorsement implied.',
    icon: 'smartphone',
    tier: 'additional',
    tech: ['Flutter', 'Dart'],
  },
  {
    id: 'data-analytics-ml',
    title: 'Data Analytics & Applied ML',
    tagline: 'Cleaning, dashboards, forecasting and recommendation prototypes, and model evaluation.',
    description:
      'Data cleaning, dashboards, forecasting and recommendation prototypes, model evaluation, and decision-support workflows - with clear limitations stated up front.',
    for: 'Teams sitting on data who want dashboards, forecasts, or recommendations, and who need honest boundaries on what the model can and cannot promise.',
    problem:
      'Analytics projects often over-promise on accuracy or adoption; a model is public-leaderboard score does not translate to a customer KPI.',
    delivered:
      'Cleaned data, dashboards, forecasting and recommendation prototypes, model evaluation, documented limitations, and a decision-support workflow.',
    integrations:
      'CSV, SQL, or warehouse data sources, visualisation tooling, and a deployment target agreed with the client.',
    howToBegin:
      'Start with the data you already have, a clear decision to support, and an agreed success metric - not a target accuracy.',
    evidence:
      'Movie recommender: about 10 million ratings, public leaderboard RMSE 1.21 to 0.82 across eight submissions. Public-leaderboard context only; do not extrapolate to customer KPIs.',
    icon: 'chart',
    tier: 'additional',
    tech: ['Python', 'Scikit-learn', 'Pandas', 'LightGBM', 'SVD'],
  },
  /* Additional capabilities — cross-selling, not the engineering lead. */
  {
    id: 'livestreaming-videography',
    title: 'Livestreaming & Videography',
    tagline: 'Live radio and TV streaming, scheduled programming, and post-production.',
    description:
      'Multimedia live streaming and video production: live radio and TV streaming, scheduled programming, SEO-friendly publishing, RSS news feeds, and PWA support.',
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
    tagline: 'Tutorials, docs, and demos that help teams adopt complex systems.',
    description:
      'Clear technical content - tutorials, documentation, and demos - that helps teams adopt and extend complex systems with confidence.',
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
    tagline: 'Social strategy, content creation, and community management.',
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
/*  Projects — canonical, verified catalogue (Phase 5 of the master   */
/*  prompt). repositoryUrl is set only where the repo is publicly       */
/*  accessible; otherwise it is omitted and flagged in verification.   */
/* ------------------------------------------------------------------ */

export const projects: Project[] = [
  {
    id: 'ai-health-chat',
    slug: 'ai-health-chat',
    title: 'AI Health Chat',
    productType: 'Web and WhatsApp AI health-information platform',
    projectStatus: 'Public beta',
    engagementType: 'Independent hackathon-originated project',
    role: 'Founder and sole engineer',
    problem:
      'Multilingual health information is hard to access reliably, especially on low-bandwidth connections and messaging platforms.',
    audience:
      'People seeking educational health information in English, Kiswahili, French, Spanish, or Dutch via web or WhatsApp.',
    solution:
      'A live multilingual AI health-information platform on the web and Meta WhatsApp Cloud API, offering educational triage, vital-sign tracking, and physician-ready consultation summaries.',
    technicalHighlights: [
      'Multilingual LLM pipeline across 5 languages',
      'Web and WhatsApp (Meta Cloud API) delivery',
      'Longitudinal vital-sign tracking',
      'Structured physician-ready consultation summaries',
    ],
    responsibilities: ['Product design', 'Full-stack implementation', 'LLM provider integration'],
    constraintsAndTradeoffs:
      'Educational triage only - not a medical diagnosis tool; no clinical validation claimed; safety boundaries stated on the platform.',
    privacyAccessibility:
      'Privacy controls and a published medical disclaimer; not a substitute for professional medical diagnosis or emergency treatment.',
    verifiedEvidence:
      'Live at aihealthchat.qzz.io; platform states educational triage and health wellness information only, not a substitute for professional medical diagnosis. PLP Class of 2024 graduate hackathon first place - exact event name to be confirmed.',
    limitations:
      'Not clinically validated; does not diagnose patients; hackathon-originated independent work, not commissioned or institutionally approved.',
    tech: ['Next.js', 'Supabase', 'TypeScript', 'WhatsApp Cloud API', 'LLMs'],
    screenshot: '/projects/ai-health-chat.png',
    screenshotAlt: 'AI Health Chat multilingual health platform screenshot',
    liveUrl: 'https://aihealthchat.qzz.io/',
    caseStudyUrl: '/work/ai-health-chat',
    featured: true,
    tier: 'signature',
    award: 'Hackathon Winner',
    updatedAt: '2026-01-19',
  },
  {
    id: 'tutalearn',
    slug: 'tutalearn',
    title: 'TutaLearn',
    productType: 'Kenya CBC educational PWA plus AI tutor',
    projectStatus: 'Live production',
    engagementType: 'Independent product',
    role: 'Founder and engineer',
    problem:
      'Kenyan learners need curriculum-aligned lessons, assessments, and affordable access that works on mobile and low-cost connectivity.',
    audience:
      'Kenyan students Grades 1 to 12, parents, and teachers following the KICD Competency-Based Curriculum.',
    solution:
      'A KICD-aligned CBC platform with strand lessons, term assessments opener, mid-term, and end-term, an AI tutor Mwalimu, M-Pesa instant access, WhatsApp reminders and quizzes, and audio narration.',
    technicalHighlights: [
      'PWA installable on Android, iOS, and laptop',
      'WhatsApp integration for reminders and quizzes',
      'M-Pesa instant subscription and account activation',
      'Bilingual English and Kiswahili audio narration and AI tutor',
    ],
    responsibilities: ['Product design', 'Full-stack implementation', 'Payments and WhatsApp integration'],
    constraintsAndTradeoffs:
      'WhatsApp and M-Pesa feature activation must be verified; do not market as fully operating if only configured or integrated experimentally.',
    privacyAccessibility:
      'Child-safe, ad-free environment; learner data handled per platform policy.',
    verifiedEvidence:
      'Live at tutalearn.qzz.io; KICD-aligned curriculum, 3200-plus lessons, 14900-plus exam questions observed on the public site.',
    limitations:
      'Independent product; adoption, usage, and reliability claims not independently verified.',
    tech: ['Python', 'TypeScript', 'PWA', 'WhatsApp API', 'M-Pesa'],
    screenshot: '/projects/tutalearn.png',
    screenshotAlt: 'TutaLearn Kenya CBC educational platform screenshot',
    liveUrl: 'https://tutalearn.qzz.io/',
    caseStudyUrl: '/work/tutalearn',
    featured: true,
    tier: 'signature',
    updatedAt: '2026-01-19',
  },
  {
    id: 'luminae',
    slug: 'luminae',
    title: 'Luminae',
    productType: 'Research-paper analysis platform',
    projectStatus: 'Live hackathon-built',
    engagementType: 'Mistral hackathon project',
    role: 'Founder and engineer',
    problem:
      'Researchers spend hours manually critiquing methodology, auditing datasets, and drafting grant proposals from academic papers.',
    audience: 'Academic researchers and research teams.',
    solution:
      'A five-agent research-paper intelligence platform OCR, vision, critics, synthesis, grant that critiques methodology, audits datasets, proposes experiments, and drafts NSF and NIH-style grant outlines - built with Mistral AI.',
    technicalHighlights: [
      'Five specialized agents OCR, vision, critics, synthesis, grant',
      'PDF upload with OCR and vision analysis',
      'Methodology critique with severity ratings',
      'Dataset auditing and bias detection',
      'NSF and NIH-style grant outline generation',
      'Real-time cost and budget guards',
    ],
    responsibilities: ['Product design', 'Full-stack implementation', 'Multi-agent orchestration'],
    constraintsAndTradeoffs:
      'Built for a Mistral hackathon; not a generic product-intelligence platform; cost guards keep analysis under a small budget.',
    privacyAccessibility:
      'User uploads PDFs are processed by third-party LLM providers; review the platform privacy policy before submitting sensitive documents.',
    verifiedEvidence:
      'Live at luminae.qzz.io; self-described as Built by DevRay Labs; five-agent pipeline, grant generation, and budget guards observed on the public site.',
    limitations:
      'Hackathon-built; accuracy of critique and grant output not independently verified; do not claim zero hallucinations.',
    tech: ['Mistral AI', 'OCR', 'Vision', 'Multi-agent', 'TypeScript'],
    screenshot: '/projects/luminae.png',
    screenshotAlt: 'Luminae research-paper analysis platform screenshot',
    liveUrl: 'https://luminae.qzz.io/',
    caseStudyUrl: '/work/luminae',
    featured: true,
    tier: 'signature',
    updatedAt: '2026-01-19',
  },
  {
    id: 'codebase-genius',
    slug: 'codebase-genius',
    title: 'Codebase Genius',
    productType: 'AI documentation system',
    projectStatus: 'Live demo',
    engagementType: 'Independent project',
    role: 'Founder and engineer',
    problem:
      'GitHub repositories often lack comprehensive, up-to-date documentation, making onboarding and maintenance slow.',
    audience: 'Development teams and open-source maintainers.',
    solution:
      'An AI-powered platform that generates comprehensive documentation from codebase analysis using LLMs.',
    technicalHighlights: [
      'Codebase analysis with LLMs',
      'Automated documentation generation',
      'Graph-based code relationships (NetworkX)',
    ],
    responsibilities: ['Product design', 'Full-stack implementation'],
    constraintsAndTradeoffs:
      'Demo application; output quality depends on codebase structure and LLM provider.',
    privacyAccessibility:
      'Reads public repository code; does not store private source unless explicitly provided.',
    verifiedEvidence: 'Live demo at geniuscodebase.streamlit.app.',
    limitations: 'Demo scope; not a production documentation pipeline.',
    tech: ['Python', 'TypeScript', 'Google Gemini', 'Streamlit', 'NetworkX', 'FastAPI'],
    screenshot: '/projects/codebase-genius.png',
    screenshotAlt: 'Codebase Genius AI documentation system screenshot',
    liveUrl: 'https://geniuscodebase.streamlit.app/',
    featured: true,
    tier: 'secondary',
    updatedAt: '2026-01-19',
  },
  {
    id: 'weatherwise',
    slug: 'weatherwise',
    title: 'WeatherWise Planner',
    productType: 'Global climate planning tool',
    projectStatus: 'Live demo',
    engagementType: 'Independent project',
    role: 'Founder and engineer',
    problem:
      'Climate and Earth data is publicly available from NASA but difficult to visualise and act on for planning purposes.',
    audience: 'Planners, researchers, and climate-curious users.',
    solution:
      'A global climate planning tool using NASA Earth data with interactive visualisations and AI-powered insights.',
    technicalHighlights: [
      'NASA GIBS Earth data',
      'Interactive visualisations (Plotly.js)',
      'AI-powered insights',
      'PWA',
    ],
    responsibilities: ['Product design', 'Full-stack implementation'],
    constraintsAndTradeoffs:
      'Relies on public NASA Earth data availability and terms of use.',
    privacyAccessibility:
      'Uses public Earth observation data; no personal data required.',
    verifiedEvidence: 'Live demo at weatherwise.earth.',
    limitations:
      'Demo scope; data freshness and coverage depend on NASA sources.',
    tech: ['TypeScript', 'Python', 'React', 'FastAPI', 'NASA GIBS', 'Plotly.js', 'PWA'],
    screenshot: '/projects/weatherwise.png',
    screenshotAlt: 'WeatherWise climate planning tool screenshot',
    liveUrl: 'https://www.weatherwise.earth/',
    featured: true,
    tier: 'secondary',
    updatedAt: '2026-01-19',
  },
  {
    id: 'serenity-ai',
    slug: 'serenity-ai',
    title: 'SerenityAI',
    productType: 'AI-assisted mental-wellness companion',
    projectStatus: 'Live minimal landing',
    engagementType: 'Independent project',
    role: 'Founder and engineer',
    problem:
      'People want structured mood tracking, journaling insights, and pattern analysis to support wellbeing without a clinical commitment.',
    audience: 'Individuals seeking self-guided mental-wellness support.',
    solution:
      'An AI-assisted mental-wellness companion offering emotional support, mood tracking, journaling insights, and pattern analysis - wellness before productivity.',
    technicalHighlights: ['Intelligent agents', 'Mood tracking', 'Journaling insights', 'Pattern analysis'],
    responsibilities: ['Product design', 'Full-stack implementation'],
    constraintsAndTradeoffs:
      'Not a licensed therapeutic treatment; does not imply zero data retention or clinical efficacy without verification.',
    privacyAccessibility:
      'Wellness data is sensitive; review the platform privacy and retention policy before use.',
    verifiedEvidence: 'Landing page live at serenityai.qzz.io minimal content observed.',
    limitations:
      'Not clinically validated; does not provide licensed therapy; claims of retention and efficacy unverified.',
    tech: ['React', 'TypeScript', 'Groq API', 'LLM Architecture', 'AI Agents'],
    screenshot: '/projects/serenity-ai.png',
    screenshotAlt: 'SerenityAI mental-wellness companion screenshot',
    liveUrl: 'https://serenityai.qzz.io/',
    featured: true,
    tier: 'secondary',
    updatedAt: '2026-01-19',
  },
  {
    id: 'weru-digital',
    slug: 'weru-digital',
    title: 'Weru Digital',
    productType: 'Multimedia site for TV and radio streaming',
    projectStatus: 'Live',
    engagementType: 'Client project Weru TV and FM',
    role: 'Founder and engineer',
    problem:
      'A TV and FM station needed a web presence for live radio and TV streaming, scheduled programming, and SEO-friendly news.',
    audience: 'Viewers and listeners of Weru TV and FM.',
    solution:
      'A multimedia site featuring live radio streaming, live TV streaming, scheduled programming, SEO-friendly publishing, auto-updating RSS news feeds, AI-powered optimisation, and PWA support.',
    technicalHighlights: [
      'Live radio and TV streaming',
      'Scheduled programming',
      'RSS news feeds and SEO',
      'PWA support',
    ],
    responsibilities: ['Full-stack implementation', 'Streaming infrastructure', 'SEO'],
    constraintsAndTradeoffs:
      'Streaming reliability depends on upstream broadcast feeds and client bandwidth.',
    privacyAccessibility: 'Public streaming content; standard web analytics apply.',
    verifiedEvidence: 'Live at werudigital.co.ke.',
    limitations:
      'Client-facing project; adoption and uptime metrics not independently verified.',
    tech: ['WordPress', 'PWA', 'Live Streaming', 'AI', 'SEO', 'RSS'],
    screenshot: '/projects/weru-digital.png',
    screenshotAlt: 'Weru Digital multimedia streaming site screenshot',
    liveUrl: 'https://werudigital.co.ke/',
    featured: true,
    tier: 'secondary',
    updatedAt: '2026-01-19',
  },
  {
    id: 'kazi-connect',
    slug: 'kazi-connect',
    title: 'Kazi Connect',
    productType: 'Talent-to-opportunity job-matching platform',
    projectStatus: 'Unverified',
    engagementType: 'Independent project',
    role: 'Founder and engineer',
    problem:
      'Skilled professionals need a streamlined way to connect with work opportunities and collaborate securely.',
    audience: 'Skilled professionals and hiring clients.',
    solution:
      'A talent-to-opportunity platform with streamlined profiles, smart matching, and secure collaboration tools.',
    technicalHighlights: ['Profiles', 'Smart matching', 'Secure collaboration'],
    responsibilities: ['Product design', 'Full-stack implementation'],
    constraintsAndTradeoffs: 'Live URL and feature set require re-verification.',
    privacyAccessibility: 'User profile data handled per platform policy.',
    verifiedEvidence: 'None independently confirmed at time of redesign.',
    limitations:
      'Link and status unverified; do not present as operational without confirmation.',
    tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'AI Matching'],
    screenshot: '/projects/kazi-connect.png',
    screenshotAlt: 'Kazi Connect job-matching platform screenshot',
    liveUrl: 'https://kaziconnect.qzz.io/',
    featured: false,
    tier: 'secondary',
    updatedAt: '2026-01-19',
  },
  {
    id: 'movie-recommender',
    slug: 'movie-recommender',
    title: 'Movie Recommendation Engine',
    productType: 'Recommendation prototype ALX capstone optional final competition project',
    projectStatus: 'Competition and portfolio project',
    engagementType: 'Academic and competition project',
    role: 'Founder and engineer',
    problem:
      'Viewers need personalised movie recommendations, and public-leaderboard scores do not translate to real-world KPIs.',
    audience: 'Portfolio demonstration; not a commercial product.',
    solution:
      'A content-based and collaborative-filtering recommendation system built on about 10 million ratings; public leaderboard RMSE improved 1.21 to 0.82 across eight submissions.',
    technicalHighlights: ['50-factor SVD', 'LightGBM', 'About 10 million ratings', 'Public leaderboard RMSE 1.21 to 0.82'],
    responsibilities: ['Model development', 'Evaluation', 'Competition submission'],
    constraintsAndTradeoffs:
      'Public-leaderboard metric only; do not extrapolate to customer KPIs or production adoption.',
    privacyAccessibility: 'Uses a public movie-rating dataset; no personal user data.',
    verifiedEvidence:
      'Public leaderboard RMSE 1.21 to 0.82 in eight submissions per project documentation; confirm the current repository for exact figures.',
    limitations:
      'Competition and prototype scope; not a production recommender; leaderboard context only.',
    tech: ['Python', 'Scikit-learn', 'Pandas', 'LightGBM', 'Streamlit', 'SVD'],
    screenshot: '/projects/movie-recommender.png',
    screenshotAlt: 'Movie Recommendation Engine screenshot',
    liveUrl: 'https://movie-recommender.qzz.io/',
    caseStudyUrl: '/work/movie-recommender',
    featured: false,
    tier: 'secondary',
    updatedAt: '2026-01-19',
  },
  {
    id: 'autoresearcher',
    slug: 'autoresearcher',
    title: 'AutoResearcher',
    productType: 'Multi-agent research report capstone',
    projectStatus: 'Capstone project',
    engagementType: 'Independent capstone',
    role: 'Founder and engineer',
    problem:
      'Building a single citation-rich research report still takes many hours of manual searching, writing, and formatting.',
    audience: 'Professionals and students who need structured research reports quickly.',
    solution:
      'A seven-agent research workflow built on Google ADK and Vertex AI that transforms a prompt into a print-ready LaTeX PDF with verified sources, charts, and citations.',
    technicalHighlights: [
      'Seven-agent hierarchical system (Vertex AI ADK)',
      'Gemini 2.5 Pro and Flash models',
      'Tavily web sources and claim fact-checking',
      'Matplotlib charts and Pandoc LaTeX PDF export',
    ],
    responsibilities: ['System design', 'Agent orchestration', 'Notebook implementation'],
    constraintsAndTradeoffs:
      'Educational and capstone submission purposes only; cite sources accurately, do not claim zero hallucinations.',
    privacyAccessibility: 'Runs on Kaggle or Colab with user-supplied API keys; no personal data stored by DevRay.',
    verifiedEvidence:
      'Public repository at github.com/rayklanderman/CapstoneProject-Autoresearcher 2 stars, 17 commits.',
    limitations:
      'Capstone scope; not a production service; accuracy depends on underlying models and search tools.',
    tech: ['Google ADK', 'Vertex AI', 'Gemini', 'Tavily', 'Python', 'LaTeX'],
    screenshot: '/projects/cropped_circle_image.png',
    screenshotAlt: 'AutoResearcher multi-agent research report screenshot',
    repositoryUrl: 'https://github.com/rayklanderman/CapstoneProject-Autoresearcher',
    isRepositoryPublic: true,
    featured: false,
    tier: 'secondary',
    updatedAt: '2026-01-19',
  },
];
/* ------------------------------------------------------------------ */
/*  Education, certifications, profile, credentials                   */
/* ------------------------------------------------------------------ */

export const education: Education[] = [
  {
    id: 'bachelors-cs',
    institution: 'University of the People UoPeople',
    degree: 'Bachelor of Computer Science',
    period: '2025 – 2028 Projected',
    status: 'ongoing',
    description:
      'Pursuing a comprehensive degree in Computer Science with focus on software engineering, algorithms, and modern technologies.',
  },
  {
    id: 'diploma-ict',
    institution: 'Management University of Africa MUA',
    degree: 'Diploma in Information Communication Technology',
    period: '2021 – 2024',
    status: 'completed',
    description:
      'Graduated with Distinction. Focus on modern software development and IT infrastructure.',
    skills: ['Software Development', 'IT Infrastructure', 'Project Management'],
  },
  {
    id: 'data-science-alx',
    institution: 'ALX',
    degree: 'Data Science Program',
    period: '2025 – Present',
    status: 'ongoing',
    description:
      'Advanced from completed Data Analytics Cohort 2025. Advanced expertise in data cleaning, visualization, and interpretation.',
    skills: ['SQL', 'Power BI', 'Tableau', 'Advanced Python', 'Machine Learning', 'AI', 'Agile', 'Data Science'],
  },
  {
    id: 'plp-software',
    institution: 'Power Learn Project PLP Africa',
    degree: 'Software Development Program',
    period: 'December 2024',
    status: 'completed',
    description:
      'Successfully completed a 16-week intensive program in Software Development.',
    skills: ['Python', 'Web Development', 'Database Management', 'Dart', 'Flutter', 'Soft Skills'],
  },
  {
    id: 'wqu-deep-learning',
    institution: 'WorldQuant University',
    degree: 'Applied AI Lab Deep Learning for Computer Vision',
    period: '2025 – Present',
    status: 'ongoing',
    description:
      'Mastering deep learning frameworks and computer vision techniques. Building and deploying real-world AI applications.',
    skills: ['Deep Learning', 'Computer Vision', 'AI'],
  },
  {
    id: 'wqu-data-science',
    institution: 'WorldQuant University',
    degree: 'Applied Data Science Lab',
    period: '2025 – Present',
    status: 'ongoing',
    description:
      'Advanced data analysis and machine learning techniques. Real-world data science project implementation.',
    skills: ['Data Science', 'Machine Learning', 'Analytics'],
  },
  {
    id: 'stanford-python',
    institution: 'Stanford University',
    degree: 'Code in Place Introduction to Programming with Python',
    period: '2024',
    status: 'completed',
    description:
      'Intensive Python programming course from Stanford University. Completed diagnostic assessment and final project with distinction.',
    skills: ['Python', 'Programming Fundamentals'],
  },
];

export const certifications: Certification[] = [
  {
    id: 'google-skills',
    platform: 'Google Skills',
    title: 'Google Cloud and AI ML Certifications',
    badges: 18,
    highlights: [
      'Machine Learning Operations MLOps for Generative AI',
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
    title: 'AWS, IBM and Cybersecurity Badges',
    badges: 5,
    highlights: [
      'AWS Educate Introduction to Generative AI',
      'Code Generation and Optimization Using IBM Granite',
      'AWS Educate Machine Learning Foundations',
      'Data Fundamentals - IBM SkillsBuild',
      'Cybersecurity Fundamentals - IBM SkillsBuild',
    ],
    url: 'https://www.credly.com/users/raymond-klanderman',
  },
  {
    id: 'oracle-cloud',
    platform: 'Oracle Cloud Infrastructure',
    title: '2025 Certified AI Foundations Associate',
    badges: 1,
    highlights: [
      'AI and ML Fundamentals',
      'Deep Learning CNNs, RNNs, LSTMs',
      'OCI AI Tools and Services',
      'Generative AI and Large Language Models',
      'Oracle 23ai and Select AI',
    ],
    expiry: 'October 30, 2027',
    url: 'https://catalog-education.oracle.com/pls/certview/badgehandle?code=NPROD-PMV-OCI-AI-2025',
  },
  {
    id: 'google-dev',
    platform: 'Google for Developers',
    title: 'Official Developer Profile',
    badges: 0,
    highlights: [
      'Developer profile highlighting contributions, learning paths, and skill badges in Google technologies.',
    ],
    url: 'https://developers.google.com/profile/u/raymond-klanderman',
  },
  {
    id: 'microsoft-learn',
    platform: 'Microsoft Learn',
    title: 'Azure and Cloud Development',
    badges: 0,
    highlights: [
      'Learning profile demonstrating completed paths and applied skills in Azure, AI, and cloud development.',
    ],
    url: 'https://learn.microsoft.com/users/raymond-klanderman',
  },
  {
    id: 'parchment',
    platform: 'Parchment Digital Badges',
    title: 'Verified Credentials',
    badges: 0,
    highlights: [
      'Digital credential wallet hosting verified badges from multiple issuing organizations.',
    ],
  },
];

export const professionalProfile = {
  name: 'Raymond Klanderman',
  title: 'Software and AI Engineer',
  subtitle: 'Founder-led software and applied-AI engineering',
  tagline: 'DevRay',
  founderLink: {
    label: 'Meet the Engineer — View Full Technical Portfolio →',
    url: 'https://rayklanderman.is-a.dev/',
  },
  bio: 'I build smart, scalable software and AI systems that solve real-world problems. My work spans full-stack engineering, machine learning, data analytics, cloud architecture, and automated deployment pipelines.',
  extendedBio:
    'I design and ship production-ready applications using Python FastAPI, Streamlit, Pandas, Polars, TypeScript React Next.js, Flutter, SQL NoSQL, and Google Cloud. I specialize in intelligent workflows powered by APIs, autonomous agents, vector search, and Retrieval-Augmented Generation RAG. My tooling includes Pinecone, Weaviate, Qdrant, LangChain, LlamaIndex, LangGraph, and modern LLM providers like OpenAI, Anthropic, Gemini, Groq, and Ollama. Beyond engineering, I turn data into insights and insights into features that become products people rely on. I also create clear technical content - tutorials, docs, and demos - that helps teams adopt and extend complex systems with confidence. My mission is simple: build tools that understand people, and empower people to build even better tools. Curiosity drives my work, from rapid ML prototyping to productionizing agents and automating end-to-end workflows. Always open to collaborating with teams building the next generation of human-centered AI.',
  keyTechnologies: [
    'Python', 'FastAPI', 'Streamlit', 'Pandas', 'Polars',
    'TypeScript', 'React', 'Next.js',
    'Flutter', 'SQL', 'NoSQL', 'Google Cloud',
    'Pinecone', 'Weaviate', 'Qdrant', 'LangChain', 'LlamaIndex', 'LangGraph',
    'OpenAI', 'Anthropic', 'Gemini', 'Groq', 'Ollama',
  ],
  institutionalExperience: [
    {
      organisation: 'Pan-African Parliament',
      year: '2025',
      role: 'Media Specialist',
      description:
        'Contract work included building a Flutter Dart cross-platform Android and iOS application, integrating livestreamed Pan-African Parliament sessions, and structuring official Pan-African Parliament content for mobile - working with delegates and multidisciplinary teams. This is described as institutional experience only; it does not imply official Pan-African Parliament product endorsement, production rollout, or authorization.',
    },
  ],
};

export const namedCredentials: NamedCredential[] = [
  {
    title: 'Oracle OCI 2025 Certified AI Foundations Associate',
    issuer: 'Oracle',
    url: 'https://catalog-education.oracle.com/pls/certview/badgehandle?code=NPROD-PMV-OCI-AI-2025',
  },
  {
    title: 'MLOps for Generative AI',
    issuer: 'Google Cloud',
    url: 'https://www.cloudskillsboost.google/public_profiles/raymond-klanderman',
  },
  {
    title: 'Vector Search and Embeddings',
    issuer: 'Google Cloud',
    url: 'https://www.cloudskillsboost.google/public_profiles/raymond-klanderman',
  },
  {
    title: 'AWS Educate Machine Learning Foundations',
    issuer: 'AWS',
    url: 'https://www.credly.com/users/raymond-klanderman',
  },
];
