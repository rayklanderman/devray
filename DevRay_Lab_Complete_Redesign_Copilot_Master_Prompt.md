# DevRay Lab — Complete Website Transformation Master Prompt

**Target website:** https://devray.qzz.io/  
**Business:** DevRay / DevRay Lab, founder-led software and applied-AI engineering services  
**Canonical personal portfolio:** https://rayklanderman.is-a.dev/  
**Founder:** Raymond (DevRay) Klanderman  
**Canonical LinkedIn:** https://www.linkedin.com/in/rayklanderman/  
**GitHub:** https://github.com/rayklanderman  
**Business contact:** info@devray.site (verify against actual configuration)  
**Purpose:** Turn an attractive but generic services site into a distinctive, technically credible, high-trust website that converts qualified prospective clients into project conversations.

---

## YOUR ROLE AND EXECUTION RULES

You are the principal product designer, staff full-stack engineer, conversion-focused UX writer, accessibility engineer, technical SEO specialist, and QA engineer working **inside the EXISTING DevRay codebase**. Your assignment is to **implement** this transformation, not merely propose a redesign.

1. **Audit first.** Inspect package manager, framework, source tree, routes, data models, CMS, hosting configuration, design tokens, components, contact form, tests, CI, analytics, existing media and project metadata before editing. Do not assume a framework or deployment platform.
2. **Preserve the brand's recognizable premium dark-green/near-black and muted-gold visual identity** while significantly improving hierarchy, whitespace, contrast, imagery, motion, mobile experience, and sophistication. Do not clone the light/cream personal portfolio. Make them visually related through quality, not identical.
3. **Preserve all existing working features and legitimate content** unless there is a deliberate, documented replacement. Never break routes, external links, forms, metadata, deployment, analytics consent, or application functionality.
4. **Verify before claiming.** The existing site and even prior README texts can be outdated. Read the actual repository and current public case studies, and test live destinations where tooling allows. Do not invent client results, employment arrangements, certifications, performance metrics, testimonials, team members, awards, uptime, response-time guarantees, or technology adoption.
5. **No deceptive marketing.** DevRay is founder-led. Do not imply a staffed agency, enterprise SLAs, a guaranteed 24-hour response, 24/7 support, "certified partner" status, or dozens of customers unless verified. Use natural first-person plural only when speaking as a service brand without implying nonexistent employees; otherwise say "founder-led" or "I".
6. **Protect proprietary work.** Some GitHub repositories are private. Never treat a private repo as a missing project or expose secrets/source snippets. Give live demos, screenshots, architecture narratives, and case studies as appropriate; only show Source Code buttons when repository URLs are publicly accessible.
7. **Responsible AI language.** Never claim an AI-health application diagnoses patients, is clinically validated, guarantees zero hallucinations, or provides medical care. Use clear boundaries and safety notes. Do not describe AI as autonomously approving civic decisions or public-service eligibility.
8. **Implement in sensible, reviewable phases** and run relevant automated checks after each phase. Do not stop at a mockup, static prototype, or plan. If access is missing, document the blocker and implement safe parts without fabricating success.
9. **Avoid unnecessary dependencies, performance-heavy animations, autoplay media, or backend rewrites.** Choose maintainable patterns consistent with the repo. Preserve working deployment infrastructure.
10. **Deliver a final change report** listing files/sections changed, tests executed and outcomes, known limitations, unresolved content verification, and deployment steps. Do not claim checks passed unless you actually ran them.

---

## PHASE 0 — RECONNAISSANCE AND BASELINE

**Inspect before touching design.**

- List files, routes, package scripts and dependencies, hosting/deployment, environment-variable conventions, existing images, logos, fonts, forms, email delivery, state, component organization, tests, ESLint/TypeScript/build checks, and accessibility patterns.
- Map today's homepage sections: navigation, hero, services, about, certifications, case files, contact form, footer; identify currently broken/inert actions and duplicate content.
- Check responsive behavior from 320px mobile through tablet and desktop. Capture screenshots or browser previews if possible; document layout weaknesses, typography, contrast, horizontal overflow, scroll fatigue, and mobile taps.
- Inspect the *actual* current content used by routes/data rather than copying text from memory or stale README descriptions.
- Compare the existing site with the independent engineering portfolio at https://rayklanderman.is-a.dev/ for accurate project names, status, links, architecture and contribution statements. The personal site is evidence and a cross-link, not a visual template.
- Locate repository instructions and CI conventions; understand which APIs are safe to exercise. Never submit real inquiry forms or expose credentials during verification.

**Output:** Brief audit and implementation checklist saved to `docs/DEVRAY_REDESIGN_AUDIT.md` (or equivalent), including existing architecture, issues, priorities and verification needs. Continue directly to implementation.

## PHASE 1 — DEFINE THE PRODUCT POSITIONING

**DevRay is a client-acquisition services site, not another résumé or a technology-logo directory.**

**Primary audience:** Entrepreneurs, SMEs, startups, NGOs, education organizations, public-interest initiatives, and teams seeking a practical engineering partner for custom software or applied AI. Speak plainly to business owners and technical buyers alike.

**Core promise:** Founder-led, end-to-end software and applied AI engineering, from discovery and architecture to secure implementation, testing, deployment and iteration.

**Positioning differentiation:** Hands-on engineering ownership; demonstrable live systems across health, education, accessibility, research and civic domains; attention to privacy, testing, usability, integration and context-appropriate implementation.

**Business objectives in order:**
1. Qualified inquiries / project discovery calls.
2. Click-throughs to relevant proof of work and live demos.
3. Clear comprehension of what services DevRay offers and the engagement process.
4. Trust via grounded engineering evidence, accurate qualifications and a transparent founder identity.

**Do NOT:** lead with lists of every model/vendor, empty "cutting edge" claims, generic agency language, inflated guarantees, or dense biography text.

## PHASE 2 — BUILD A PREMIUM VISUAL SYSTEM

Preserve a **near-black / deep forest green foundation with restrained warm gold highlights**, but bring visual quality closer to premium, modern software consultancies.

- Create/normalize CSS variables or existing design tokens for background layers, text, borders, accent, success, focus, spacing, type scale, container widths, radii and shadow. Use accessible contrast; gold shouldn't be the primary small-body-text color on dark green.
- Establish a clear typographic hierarchy: expressive but readable headline, confident section titles, readable body text (avoid tiny type), consistent line heights, 60–75ch content measures, restrained uppercase labels.
- Introduce breathing room between sections. Avoid endless same-looking dark cards, cramped stacks, glowing gimmicks, excessively nested boxes or repeated decorative icons.
- Hero with high-impact editorial composition and optionally an authentic, optimized product mosaic of **real screenshots**; no generated fake UI falsely presented as a working product. The existing DevRay logo can be retained/refined if suitable.
- Use professional product screenshots, browser/device mockups and compact architecture illustrations where assets exist. Preserve alt text, aspect ratio, legibility and responsive cropping. If authentic assets aren't available, keep clean designed placeholders and track missing assets; do not fabricate client interfaces.
- Subtle micro-interactions: motion only where useful; honor `prefers-reduced-motion`; no scroll-jacking or autoplay video.
- Ensure mobile hero, cards, nav, form and footers work flawlessly at 320/360/390/768px and desktop. Sticky or mobile nav should not obscure anchors.
- Continue the brand as a distinctly **engineering-first services studio**, not a generic digital marketing agency.

## PHASE 3 — REBUILD THE HOMEPAGE INFORMATION ARCHITECTURE

Build a clear, persuasive flow. Reuse current components when good; restructure them where necessary:

1. **Navigation:** DevRay wordmark | Services | Work | Process | About | FAQ | Contact; clear primary "Discuss a Project" CTA; link to founder's technical portfolio unobtrusively. Mobile nav fully keyboard- and screen-reader-operable.
2. **Hero:** outcome-oriented headline, one tight supporting paragraph, two purposeful actions (primary: Discuss Your Project; secondary: See Selected Work), restrained proof row (verified live apps, founder-led, supported tech). No unverifiable badge numbers.
3. **Audience/problem strip:** "Need an AI feature that works reliably? Replacing spreadsheets? Building a portal? Modernizing a mobile workflow?" Keep 3–4 concrete pain points and services fit.
4. **Four core services:** AI Applications & Automation; Web Platforms & SaaS; Mobile Application Development; Data Analytics & Applied ML. Each has buyer problem, deliverables, relevant technologies only as secondary detail, evidence link and "Discuss this service" CTA.
5. **Selected work / case studies:** 4–6 real projects in a visually engaging grid, each framed by problem → built solution → engineering decisions → outcome/status → live demo/case study. Explain independent prototypes vs client contracts and avoid mislabeling work as a paying client engagement.
6. **Why work with DevRay:** founder-led accountable ownership; software engineering and AI in one workflow; privacy and accessibility; pragmatic technology decisions; measured testing when verified. Avoid unverifiable client testimonials.
7. **How we work:** Discover → Scope and propose → Prototype → Build/integrate → Validate and launch → Support/iterate. Explain clear expectations, decision points, deliverables and how collaboration happens remotely.
8. **About founder:** short authentic intro, link to https://rayklanderman.is-a.dev/ and exact https://www.linkedin.com/in/rayklanderman/; relevant cross-sector background including Pan-African Parliament engineering work. Not a pasted résumé.
9. **FAQs:** project scope, timelines are quoted after discovery, remote work, IP/private source code, integrations, testing/maintenance, AI privacy, project fit. No made-up price ranges or service guarantees.
10. **Conversion-focused contact:** brief inviting copy, short validated form, email fallback, privacy notice, meaningful success/error states and bot protection where appropriate.
11. **Footer:** exact links, service navigation, relevant legal/privacy pages, live social destinations, brand and copyright.

**Hero copy, suggested starting point (improve if implementation context suggests better):**
- Eyebrow: `DEVRAY LAB · FOUNDER-LED SOFTWARE & AI ENGINEERING`
- H1: `Your business problem. A software solution that works.`
- Subhead: `Custom AI applications, intelligent automation, web platforms and mobile solutions—designed, engineered and deployed around real operational needs.`
- Primary CTA: `Discuss Your Project`
- Secondary CTA: `Explore Selected Work`
- Supporting microcopy: `Led by Raymond (DevRay) Klanderman · Available for remote collaborations`

Use professional, economical copy; no emoji in primary marketing copy. Client value must precede tool names.

## PHASE 4 — SERVICE OFFERINGS: REPLACE TECHNOLOGY LISTS WITH BUYABLE OUTCOMES

Build reusable, structured service content and optionally /services/:slug pages if consistent with the site's architecture. Each service should answer: *Who is this for? What problem do we solve? What is delivered? What integrations or constraints matter? How do we begin?*

**A. AI Applications & Intelligent Automation**
- Custom AI assistants, knowledge search/RAG when suitable, document processing, workflow automation, agents, multimodal integration, human-in-the-loop review, evaluation and safety controls.
- Deliverables: discovery scope, proof of concept, production-oriented web integration/API, handover docs and test strategy as agreed per project.
- Evidence: AI Health Chat, Luminae, AutoResearcher, PostShifterPro if verified.

**B. Web Platforms & Custom Software**
- Business portals, dashboards, forms, internal tools, content platforms, SaaS MVPs, database/API integrations, auth and role-based permissions.
- Evidence: TutaLearn, Sauti Mtaani, Kazi Connect.

**C. Mobile Applications**
- Flutter mobile applications, accessible design, offline features when appropriate, device APIs, API integration, testing and Android/iOS deliverable scope. Do **not** imply public App Store availability without validation.
- Evidence: EyeSense, UrbanSpark AI, institutional Pan-African Parliament Flutter app (accurately positioned as experience, with public screenshots only where permissions permit).

**D. Data Analytics & Applied ML**
- Cleaning, dashboards, forecasting/recommendation prototypes, model evaluation, decision-support workflows and clear limitations.
- Evidence: hybrid SVD/LightGBM movie recommender (~10M ratings; public leaderboard RMSE 1.21 → 0.82). Explain public-leaderboard context; do not extrapolate to customer KPIs.

**Additional capabilities** as smaller secondary section: livestreaming and videography, technical content and documentation, WordPress, social-media/digital-communications support. Keep available for cross-selling; do not let them dilute the engineering lead.

Use technology tags sparingly and based on actual evidence. Eliminate vendor-name stuffing that describes familiarity as production usage.

## PHASE 5 — CASE STUDIES AND PROJECT SOURCE OF TRUTH

Create a type-safe, editable canonical project catalogue (JSON/TS/MDX/CMS based on stack) with fields where applicable:

`slug, title, productType, projectStatus, engagementType, role, problem, audience, solution, technicalHighlights, responsibilities, constraintsAndTradeoffs, privacyAccessibility, verifiedEvidence, limitations, tech, screenshot, screenshotAlt, liveUrl, demoUrl, caseStudyUrl, repositoryUrl, isRepositoryPublic, featured, updatedAt`.

- `repositoryUrl` is shown only if it is actually accessible publicly; otherwise show `Private source` as neutral text or omit.
- Do not use "client", "customer", "commissioned" or institutional approval when the work is independent or an academic/hackathon project.
- Do not infer adoption, usage, reliability, throughput, security compliance, code coverage or completed release from existence of a demo.
- Add reusable case-study pages with: context; problem; role and scope; architecture at a suitable level; difficult engineering decisions; verified result; limitations/status; relevant image/demo; clear client relevance; and soft CTA.

### Initial candidate catalogue — verify all details in repo and current portfolio

| Project | Starting information | Main public destination |
|---|---|---|
| **AI Health Chat** | Independent multilingual health-information platform; web + WhatsApp, multimodal images, tracking, structured reports, privacy controls, multiple LLM providers. Public beta. PLP Class of 2024 graduate hackathon first place. Not a medical diagnosis tool. **Do not reuse outdated xAI-only + Docker-only copy.** | https://aihealthchat.qzz.io/ |
| **TutaLearn** | Kenya CBC platform with lessons, assessments, progress tracking and AI tutor. Modern Next.js/React/Supabase architecture. **User confirms automated tests and CI/CD now exist.** WhatsApp/M-Pesa feature activation must be verified; do not market as fully operating if only configured/integrated experimentally. | https://tutalearn.qzz.io/ |
| **Luminae** | Five-agent research-paper intelligence built for a Mistral hackathon; OCR, methodology critique, dataset audit, experiments, research synthesis and grant drafting. **Not a generic product-intelligence platform.** | https://luminae.qzz.io/ |
| **Sauti Mtaani Nairobi** | Bilingual resident feedback; human-reviewed advisory AI, privacy, PII safeguards and aggregation; no automated eligibility decisions. Avoid political persuasion framing. | https://www.sautimtaani.site/ |
| **EyeSense** | Flutter accessibility-focused Android prototype; offline OCR, speech and vision; Cloudflare Worker; privacy and consent. Do not claim it is a validated navigation aid. | Founder portfolio case study / confirmed public source or APK if available |
| **Movie Recommendation Project** | 50-factor SVD + LightGBM; ~10M ratings; public-leaderboard RMSE 1.21 → 0.82 in eight submissions; ALX optional final competition project. | Portfolio case study / verified repository |
| **AutoResearcher** | Seven-agent research workflow capstone, Google ADK/Vertex AI; cite sources accurately, not "zero hallucinations". | https://github.com/rayklanderman/CapstoneProject-Autoresearcher |
| **PostShifterPro** | Live application converting source material to platform-ready drafts; inspect exact repo behavior, integrations, use cases before marketing. | https://postshifterpro.qzz.io/ |
| **Live Interviewer** | Live interview-related application; inspect functionality before expanding description. | https://liveinterviewer.vercel.app/ |
| **SerenityAI** | AI-assisted mental-wellness support; do not imply licensed therapeutic treatment or zero retention without verification. | https://serenityai.qzz.io/ |
| **Kazi Connect** | Job-matching software; verify current live URL and features. | https://kazi-connect.vercel.app/ |
| **Codebase Genius / WeatherWise / Weru Digital** | Existing projects; preserve them as relevant additional projects once current links and statuses are verified. | Use verified live URLs only |

**Accuracy corrections found on the current site:**
- AI Health Chat currently has stale xAI-only technical descriptions.
- TutaLearn currently links to `www.tutalearn.study`; update to confirmed `https://tutalearn.qzz.io/` unless a successful redirect and ownership are verified.
- Luminae is mislabeled as product-intelligence, rather than research-paper analysis.
- Check Kazi Connect links and project statuses.
- Current project cards include generic "GitHub" links; do not route visitors to private or broken repos.

Decide which 4–6 projects offer strongest client-service evidence, not just newest or biggest. Do not pack all 13 into an enormous homepage grid; keep "More Work" or a separate work page with filters if useful.

## PHASE 6 — ENGINEERING PROOF AND CREDIBILITY

Replace vague claims with grounded indicators:

- Link to live demos, authentic screenshots, short videos and technical case studies.
- Use measured evidence only when verifiable. Example: AI Health Chat README-reported 144 passing tests (must confirm current test run or qualify as README-reported); EyeSense test results as verified; Movie Recommendation Project's public-leaderboard metric; hackathon first place (state precise event); validated CI checks.
- Display relevant processes (API security, auth, RLS, consent, human review, accessibility, testing) **in context**, not as generic shields or security-compliance logos.
- Add a candid "What to expect" block: founder-led delivery, scope definition, iterative previews, secure handling, documentation and clear change control; qualify commitments instead of inventing guaranteed timelines.
- Only show testimonials with permission and authentic attribution. If none, use "Selected work" and "Engineering approach" instead.
- Founder section: Raymond (DevRay) Klanderman, Software & AI Engineer. Cross-link **exact** portfolio and LinkedIn; short account of independently built products and institutional collaboration.
- Important founder institutional experience: **Pan-African Parliament 2025 contract Media Specialist work also included building a Flutter/Dart cross-platform Android/iOS application, integrating livestreamed PAP sessions and structuring official PAP content for mobile**, plus working with delegates and multidisciplinary teams. Do not reduce the experience to videography. Avoid implying official PAP product endorsement, production rollout or authorization unless established.
- Certifications only when named accurately and verifiable, and don't dominate the services homepage. Never claim cloud partner status solely from individual certifications.

## PHASE 7 — TRUSTWORTHY CLIENT CONVERSION SYSTEM

Build an actual, working project inquiry experience. Don't add decorative forms with no handler.

**Primary CTA:** `Discuss Your Project` / `Request a Project Consultation` (select one consistent label). **Secondary:** `See Case Studies`.

**Inquiry form fields:**
- Name (required)
- Email (required)
- Organization (optional)
- Service category (optional but helpful: AI, Web, Mobile, Data/ML, Other)
- Short project description (required)
- Budget range (optional; include `Not sure yet` and `Prefer to discuss`; never force unrealistic amounts)
- Desired start timeframe (optional)
- Privacy consent acknowledgement when required by data handling configuration

Form UX:
- Clear, accessible labels; validation messages; no excessive dropdowns; inline error states; keyboard operation; logical focus; accessible success message.
- Client-side validation **and** server-side validation and length limits, safe escaping, CSRF protections where applicable, anti-spam honeypot/rate limit/captcha only if necessary.
- Keep email/notification API credentials on server; don't expose tokens in browser bundle; check sender domain configuration. Never log full PII or secrets in analytics.
- Confirm message storage/dispatch and fallback; if provider not configured, do **not** display a fake success message. Offer `mailto:info@devray.site` as a fallback if verified deliverable.
- No fabricated reply-time guarantee. Instead `I'll review your inquiry and follow up to discuss next steps.`
- Thank-you or success panel should explain next step and avoid exposing form contents via query strings.
- Implement a minimal and truthful privacy statement with actual processing/purpose/retention/contact, respecting applicable rules; use current behavior, not a legal-fiction template.
- Optionally offer a meeting-booking link **only if the owner supplies a working account URL**. Do not invent Calendly links.

**Contextual CTAs:** each service and case study should pass source/service identifier into contact form without exposing personal data in URLs. Add a floating CTA only if it improves UX and doesn't obscure mobile content.

## PHASE 8 — COPYWRITING AND MICROCOPY

Write production-ready, natural, human copy throughout:

- Specific problems and outcomes > generic "premium solutions" or "cutting-edge innovation".
- Do not promise revenue growth or reduced costs without actual evidence.
- Define complex terms briefly for nontechnical buyers, while leaving substantive technical details in case studies.
- Explain what clients actually receive from discovery and engagement; avoid ambiguous "Get Quote" if there is no quote workflow.
- Keep concise skimmable service descriptions, not walls of vendor technologies.
- Use consistent DevRay vs DevRay Lab terminology, CTA labels and contact identity.
- Use a polished professional tone without unnecessary emojis, inflated superlatives, buzzword repetition, or pseudo-testimonials.
- Founder identity should reinforce accountability and expertise; personal portfolio should be linked without pulling visitors away prematurely.

## PHASE 9 — ACCESSIBILITY, SEO, PERFORMANCE AND SECURITY

Implement and verify:

**Accessibility**
- Semantic heading hierarchy, descriptive landmarks and buttons, visible keyboard focus, appropriate link text, labels, validation, accessible dialogs, high enough contrast, alt text, tab order, reduced-motion support.
- Mobile menu and forms should support keyboard and screen readers.
- Target WCAG 2.2 AA practices where feasible; report any remaining defects honestly.

**Technical SEO**
- Real page title/meta descriptions for homepage, services, work and case studies; canonical URLs; Open Graph/Twitter metadata with authentic assets; sitemap and robots appropriate to deployment.
- Use `Organization`/`ProfessionalService` and `Person` structured data only when supported by truthful business facts. No fabricated ratings/reviews, address or organization size.
- If app is client-rendered, assess SSR/prerendering/indexability pragmatically; don't rewrite hosting without need. Ensure indexable visible content where possible.
- Correct old URLs and avoid redirect chains; audit broken internal/external links.

**Performance**
- Compress/size genuine images, responsive image loading, lazy-load below-the-fold media, optimize fonts, avoid excessive JS/animation, remove dead dependencies and avoid layout shifts.
- Check Core Web Vitals where possible; report observed numbers, not guesses.

**Security**
- Secrets server-side; secure form validation and request limits; safe external links, dependency updates as appropriate, no sensitive telemetry; retain existing secure auth and deployment configuration.

## PHASE 10 — NAVIGATION AND CROSS-BRAND STRATEGY

- The personal engineering portfolio `https://rayklanderman.is-a.dev/` is for hiring managers and engineers; DevRay is for clients seeking services. Do not copy whole educational timeline or long certificate lists into the DevRay homepage.
- Use clear cross-links: DevRay footer/About link `Meet the Engineer` or `Technical Portfolio`; personal portfolio already links back to `Services`.
- Use **exact LinkedIn** `https://www.linkedin.com/in/rayklanderman/`—NEVER `raymondklanderman`.
- Use verified GitHub `https://github.com/rayklanderman` and genuine project demo URLs.
- Preserve the dark-green/gold DevRay design separate from the green/cream editorial personal site.

## PHASE 11 — TESTING AND RELEASE CHECKS

After making code changes, execute applicable scripts and browser checks:

1. Install dependencies with the project's own package manager without unnecessary lockfile churn.
2. Run typecheck, lint, unit/integration tests and production build. Fix issues introduced by the redesign and investigate pre-existing failures; distinguish them in report.
3. Test nav anchors and pages, primary/secondary CTAs, project details, image fallbacks, case study URLs, social links, external open-in-new-tab safety, contact validation and submission (with safe mock/test setup, not actual client spam).
4. Check at least 320px, 375px, 768px, 1024px and 1440px; verify no horizontal overflow, unreadable text or obscured controls.
5. Check form's actual request-response contract and delivery path; no false confirmation.
6. Perform basic accessibility audit (keyboard, focus, labels, headings, contrast, alt, reduced motion) and SEO/meta audit.
7. Test representative case-study routes and stable URLs; redirects where existing slugs changed.
8. Validate external links when network access exists; when not, create a verification checklist and mark unverified, not passed.
9. Verify no private project source code, API keys or sensitive project information leaked to frontend output.
10. Confirm deployment build artifacts and env var requirements.

Create `docs/DEVRAY_REDESIGN_QA.md` with explicit pass/fail/not-tested statuses and relevant commands/results.

## PHASE 12 — HANDOFF AND DEPLOYMENT

Deliver:

- All source changes in the current repo; maintainable components, consistent design tokens, centralized verified case-study/service content, responsive client-facing marketing copy.
- `docs/DEVRAY_REDESIGN_AUDIT.md`
- `docs/DEVRAY_REDESIGN_QA.md`
- `docs/DEVRAY_CONTENT_VERIFICATION.md` (broken/unverified links, project status, screenshot needs, credentials, legal copy gaps)
- Brief README updates describing configuration and contact form behavior.
- A final implementation summary: changes, verified working behavior, screens/routes, tests actually run, remaining limitations, env vars/deployment steps and next priorities.

**Completion requirements:** The site must remain recognizably DevRay, but no longer read like a generic developer services template; a prospective client should understand in seconds what DevRay does, see credible proof, understand the process, and have a trustworthy way to start a project.

---

## IMPLEMENTATION COMMAND — START HERE

> Read this specification in full and inspect the existing DevRay repository. Complete Phase 0 to establish the baseline, then implement Phases 1–12 in sequence. **Do not stop after providing a plan or create a static mockup instead of production code.** Preserve working architecture and the premium dark-green/gold identity, verify project data and all claimed evidence, and avoid breaking existing routes or contact functionality. After implementation, run relevant validation commands, review mobile and desktop states, and produce the specified documentation and final change report. If a task is blocked by missing secrets, permissions, external services or assets, implement what is safely possible and list the blocker precisely rather than making up a successful result.
