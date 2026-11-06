# DevRay

Founder-led software and applied-AI engineering services site for DevRay Lab.

**Live target:** https://devray.qzz.io  
**Stack:** Next.js 16 (App Router, Turbopack) · React 19 · Tailwind CSS v4 · TypeScript · Motion · React Three Fiber

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Scripts

| Script | Purpose |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Production build (includes TypeScript checking) |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

## Routes

| Route | Description |
|---|---|
| `/` | Home: hero, audience strip, four core services, selected work, why DevRay, process, founder, FAQ, contact |
| `/work` | Full case-study index (signature + additional work) |
| `/work/[slug]` | Prerendered case study per project |
| `/privacy` | Privacy notice for the inquiry form and AI chat |
| `/chat` | AI assistant (dynamic; requires `GROQ_API_KEY`) |
| `/api/chat` | Server-side Groq proxy with validation and rate limiting |
| `/api/contact` | Server-side inquiry validation and Formspree delivery |
| `/sitemap.xml` | Generated from the project catalogue |
| `/robots.txt` | Generated with the canonical sitemap URL |

## Content and data

- `src/data/index.ts` is the canonical source for navigation, services, the 15-project case-study catalogue, homepage supporting content, FAQs, process steps, education, certifications and founder profile.
- `src/types/index.ts` defines the content model.
- `src/app/work/[slug]/page.tsx` prerenders every project in the catalogue via `generateStaticParams`.
- `public/projects/` currently contains branded placeholder visuals, not authentic product captures. Replace them with real screenshots when available; the placeholders are explicitly labelled as pending rather than fabricating product UI.

## Design system

- Tokens: `src/app/globals.css` (`ink-*` forest backgrounds, `ochre-*` accents, `parchment-*` text, Fraunces + Inter).
- Motion primitives: `src/components/motion/` (`Reveal`, `StaggerGrid`, `TiltCard`, `MagneticButton`), all honouring `prefers-reduced-motion`.
- 3D hero: `src/components/three/HeroScene.tsx`, lazy-loaded with `StaticHeroCard` fallback and gated for reduced motion / low-core devices.
- Shared UI: `ServiceIcon`, `ProjectCard`, section components under `src/components/`.

## Contact form behaviour

1. The browser validates required fields and length limits, then posts JSON to `/api/contact`.
2. The API route performs the same validation server-side, checks the request origin, enforces a best-effort per-instance rate limit, and rejects the hidden honeypot field.
3. Valid inquiries are forwarded server-side to Formspree. No fake success state is shown: if Formspree is unavailable, the form returns an error and offers `mailto:info@devray.site`.
4. Contextual CTAs pass a service or source identifier through the URL (for example `/?service=ai-applications#contact`); the form reads it after paint and includes it in the delivery payload.

The default Formspree endpoint is `https://formspree.io/f/mqeebboy`. Set `FORMSPREE_ENDPOINT` to override it.

## Environment variables

| Variable | Required | Purpose |
|---|---|---|
| `GROQ_API_KEY` | Production for `/api/chat` | Server-side Groq key. If absent, the chat returns a clear "not configured" message. |
| `FORMSPREE_ENDPOINT` | Optional | Override the Formspree form endpoint used by `/api/contact`. |

No secrets are exposed to the browser. The chat and contact endpoints run on the server.

## Deployment

Deploy to Vercel (the existing project auto-deploys from the GitHub `master` branch).

- Build command: `npm run build`
- Output: Next.js App Router
- Confirm `GROQ_API_KEY` is set in the production environment
- Confirm the Formspree form is active and delivering to the intended inbox

## Documentation

- `docs/DEVRAY_REDESIGN_AUDIT.md` — baseline and implementation audit
- `docs/DEVRAY_REDESIGN_QA.md` — checks run and pass/fail/not-tested status
- `docs/DEVRAY_CONTENT_VERIFICATION.md` — link and claim verification status
- `docs/DEVRAY_REDESIGN_SUMMARY.md` — final implementation summary
- `DevRay_Lab_Complete_Redesign_Copilot_Master_Prompt.md` — source specification
