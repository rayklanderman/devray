This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Configuration

This is a Next.js 16 (App Router), React 19, Tailwind CSS v4, TypeScript project.

- Design tokens: `src/app/globals.css` (Forest-Ink backgrounds, Gold-Ochre accents, Parchment text; Fraunces + Inter via `next/font`)
- Data layer: `src/data/index.ts` (services, projects, education, certifications, profile, credentials)
- Types: `src/types/index.ts`
- Motion primitives: `src/components/motion/` (Reveal, StaggerGrid, TiltCard, MagneticButton)
- 3D hero: `src/components/three/HeroScene.tsx` (React Three Fiber), lazy-loaded with `StaticHeroCard` fallback; gated off for `prefers-reduced-motion` and low CPU

### Environment variables

| Variable | Required | Purpose |
|---|---|---|
| `GROQ_API_KEY` | Production only (`/api/chat`) | Groq API key for the AI chat route. `.env.local` does not exist locally; must be set on Vercel for `/api/chat` to function. |

No secrets are exposed to the frontend.

### Contact form

The Contact section submits to Formspree (`https://formspree.io/f/mqeebboy`) on submit. States: idle → submitting → success/error. A success state is only set when Formspree responds OK; errors fall back to suggesting `mailto:info@devray.site`. No fake confirmation is shown.

### Scripts

- `npm run dev` — start dev server
- `npm run build` — production build (includes TypeScript typecheck)
- `npm run start` — start production server
- `npm run lint` — run ESLint

### Routes

- `/` — Home (Hero, Services, About, Projects, Contact)
- `/work` — Work index (signature + additional projects)
- `/work/[slug]` — Per-project case study
- `/chat` — AI chat (dynamic, requires `GROQ_API_KEY`)
- `/api/chat` — Chat API route (dynamic, requires `GROQ_API_KEY`)
