# DevRay Lab — Site Upgrade Implementation Guide

Step-by-step plan to evolve `devray.qzz.io` from a monochrome single-pager into a modern,
motion-rich agency site with the **Forest-Ink & Gold-Ochre** identity, tiered services with
proof links, a signature project showcase, and 3D/motion features.

**Stack today:** Next.js 16.1.3 · React 19 · Tailwind CSS v4 · TypeScript · deployed on Vercel.

Work through the phases in order — each phase leaves the site shippable.

---

## Phase 0 — Baseline & Asset Audit

Fix what's broken before building on top of it.

- [ ] **0.1 Create `public/projects/` and add real screenshots.**
      `src/data/index.ts` references `/projects/tutalearn.png` etc., but the folder does not
      exist and `Projects.tsx` renders a placeholder icon instead. Capture 1200×630 (16:9-ish)
      screenshots of each live project:
      - `tutalearn.png`, `codebase-genius.png`, `weatherwise.png`, `ai-health-chat.png`,
        `serenity-ai.png`, `weru-digital.png`
      - plus the three new ones (Phase 2): `luminae.png`, `kazi-connect.png`, `movie-recommender.png`
- [ ] **0.2 Add an Open Graph image.** `layout.tsx` metadata has no `images` entry.
      Create `public/og-image.png` (1200×630, Forest-Ink background + gold DevRay wordmark)
      and reference it in `openGraph.images`.
- [ ] **0.3 Verify env & build.** Confirm `GROQ_API_KEY` is set locally (`.env.local`) and on
      Vercel, then run `npm run build` to establish a green baseline.

---

## Phase 1 — Design System: Forest-Ink & Gold-Ochre Theme

Replace the generic black/gray/white palette with branded tokens. Everything downstream uses
these tokens, so do this first.

### 1.1 Define tokens in `src/app/globals.css`

Tailwind v4 uses CSS-first config via `@theme`. Replace the current `:root`/`@theme` block:

```css
@import "tailwindcss";

@theme {
  /* Forest-Ink — backgrounds (deep green-black, replaces pure black) */
  --color-ink-950: #070d0a;   /* page background */
  --color-ink-900: #0b1f17;   /* section background */
  --color-ink-800: #123024;   /* cards */
  --color-ink-700: #1b4332;   /* borders, hovers */

  /* Gold-Ochre — accents (replaces white accents) */
  --color-ochre-300: #e8c87a; /* light gold, hover text */
  --color-ochre-400: #d4a24e; /* primary accent, CTAs */
  --color-ochre-500: #c89b3c; /* pressed / borders */
  --color-ochre-600: #a67c2e; /* deep ochre */

  /* Parchment — text (replaces gray-300/400) */
  --color-parchment-100: #f5f1e8; /* headings */
  --color-parchment-300: #d9d2c0; /* body */
  --color-parchment-500: #a39b85; /* muted */

  --font-display: var(--font-fraunces);
  --font-sans: var(--font-inter);
}

html { scroll-behavior: smooth; scroll-padding-top: 80px; }

body {
  background: var(--color-ink-950);
  color: var(--color-parchment-300);
  font-family: var(--font-sans), system-ui, sans-serif;
}

h1, h2, h3, h4 { font-family: var(--font-display), Georgia, serif; }

@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

### 1.2 Typography hierarchy with `next/font` in `src/app/layout.tsx`

```tsx
import { Fraunces, Inter } from "next/font/google";

const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces", display: "swap" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

// on <html>:  className={`${fraunces.variable} ${inter.variable}`}
```

Hierarchy convention (matches the personal portfolio):
- **Display serif (Fraunces):** h1–h3, project titles, "Client Case Files" labels
- **Sans (Inter):** body, buttons, tags, nav

### 1.3 Sweep components onto the tokens

Mechanical find-and-replace across `Header`, `Hero`, `Services`, `About`, `Projects`,
`Contact`, `Footer`, `DevRayChat`:

| Old class | New class |
|---|---|
| `bg-black` | `bg-ink-950` |
| `bg-gray-900` | `bg-ink-900` |
| `bg-gray-800` | `bg-ink-800` |
| `border-gray-800` / `border-gray-700` | `border-ink-700` |
| `text-white` (headings) | `text-parchment-100` |
| `text-gray-300` / `text-gray-400` | `text-parchment-300` / `text-parchment-500` |
| `bg-white text-black` (CTA buttons) | `bg-ochre-400 text-ink-950 hover:bg-ochre-300` |
| `hover:text-white` | `hover:text-ochre-300` |

- [ ] Update all seven components + the `/chat` page.
- [ ] Reframe section copy: Projects heading becomes **"Client Case Files & Solutions"**.
- [ ] Verify contrast: ochre-400 on ink-950 and parchment-300 on ink-900 both pass WCAG AA.

---

## Phase 2 — Data Model & Content Restructure

All content lives in `src/data/index.ts` + `src/types/index.ts`, so restructure data before UI.

### 2.1 Extend types (`src/types/index.ts`)

```ts
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  technologies?: string[];
  tier: 'core' | 'additional';                    // NEW
  proof?: { label: string; url: string };          // NEW — deep link to live demo
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
  tier: 'signature' | 'secondary';                 // NEW
  award?: string;                                  // NEW — e.g. "🏆 Hackathon Winner"
}
```

### 2.2 Services: core vs. additional + proof links

Tag in `src/data/index.ts`:

- **Core (`tier: 'core'`)** — primary billing:
  1. `ai-development` → `proof: { label: 'See it live: AI Health Chat', url: 'https://aihealthchat.qzz.io/' }`
  2. `machine-learning` → `proof: { label: 'See it live: Movie Recommendation Engine', url: '<MOVIE_REC_URL>' }` (or Luminae)
  3. `web-development` → `proof: { label: 'See it live: TutaLearn', url: 'https://www.tutalearn.study/' }`
- **Additional (`tier: 'additional'`)**: `data-analysis`, `content-creation`, `live-streaming`,
  `mobile-development`, `wordpress-development`, `digital-media`.

Reorder the array: core first (AI Development, Machine Learning, Web Development), then additional.

### 2.3 Projects: signature showcase + secondary grid

- [ ] **Signature (`tier: 'signature'`)** — top row, in order:
  1. **AI Health Chat** — add `award: '🏆 Hackathon Winner'` *(fill in the actual hackathon name)*
  2. **TutaLearn**
  3. **Luminae** — NEW entry, needs description/tags/liveUrl *(placeholder below)*
- [ ] **Secondary (`tier: 'secondary'`)**: Codebase Genius, WeatherWise Planner, SerenityAI,
      Weru Digital, **Kazi Connect** (NEW), **Movie Recommendation Engine** (NEW).
- [ ] Add the three missing projects — template (fill real URLs/descriptions):

```ts
{
  id: 'luminae',
  title: 'Luminae',
  description: '<REAL DESCRIPTION — ML/AI product summary>',
  image: '/projects/luminae.png',
  tags: ['<tags>'],
  liveUrl: '<LIVE_URL>',
  featured: true,
  tier: 'signature',
},
{
  id: 'kazi-connect',
  title: 'Kazi Connect',
  description: '<REAL DESCRIPTION>',
  image: '/projects/kazi-connect.png',
  tags: ['<tags>'],
  liveUrl: '<LIVE_URL>',
  featured: false,
  tier: 'secondary',
},
{
  id: 'movie-recommender',
  title: 'Movie Recommendation Engine',
  description: '<REAL DESCRIPTION — collaborative filtering / content-based ML>',
  image: '/projects/movie-recommender.png',
  tags: ['Python', 'Scikit-learn', '<tags>'],
  liveUrl: '<LIVE_URL>',
  githubUrl: '<GITHUB_URL>',
  featured: false,
  tier: 'secondary',
},
```

### 2.4 Founder cross-link + named certifications

- [ ] Add to `professionalProfile`:

```ts
founderLink: {
  label: 'Engineered by Raymond Klanderman — View Full Engineering Profile →',
  url: 'https://rayklanderman.is-a.dev/',
},
```

- [ ] Add a `namedCredentials` export (replaces aggregate badge counts in the UI):

```ts
export const namedCredentials = [
  { title: 'Oracle OCI 2025 Certified AI Foundations Associate', issuer: 'Oracle',
    url: 'https://catalog-education.oracle.com/pls/certview/badgehandle?code=NPROD-PMV-OCI-AI-2025' },
  { title: 'MLOps for Generative AI', issuer: 'Google Cloud',
    url: 'https://www.cloudskillsboost.google/public_profiles/raymond-klanderman' },
  { title: 'Vector Search and Embeddings', issuer: 'Google Cloud',
    url: 'https://www.cloudskillsboost.google/public_profiles/raymond-klanderman' },
  { title: 'AWS Educate Machine Learning Foundations', issuer: 'AWS',
    url: 'https://www.credly.com/users/raymond-klanderman' },
];
```

---

## Phase 3 — Motion Foundation (Motion library)

Scroll reveals, staggered grids, and micro-interactions across every section.

### 3.1 Install

```bash
npm install motion
```

(`motion` is the successor to framer-motion; React 19 compatible. Import from `motion/react`.)

### 3.2 Reusable primitives — `src/components/motion/Reveal.tsx`

```tsx
'use client';

import { motion, useReducedMotion } from 'motion/react';
import { ReactNode } from 'react';

export function Reveal({ children, delay = 0, className }: {
  children: ReactNode; delay?: number; className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerGrid({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
      variants={{ show: { transition: { staggerChildren: 0.08 } } }}
    >
      {children}
    </motion.div>
  );
}

export const staggerItem = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
```

### 3.3 Apply motion per section

- [ ] **Hero:** stagger headline lines with a spring; fade in the service chips; add a subtle
      looping float (`animate={{ y: [0, -8, 0] }}, transition: { repeat: Infinity, duration: 6 }`)
      to the two corner medallions.
- [ ] **Services / Projects grids:** wrap in `StaggerGrid`, cards use `staggerItem` variants;
      card hover: `whileHover={{ y: -6, scale: 1.015 }}` with an ochre border-glow
      (`hover:border-ochre-500/50 hover:shadow-[0_8px_40px_-12px_rgba(212,162,78,0.25)]`).
- [ ] **Header:** animate the scrolled state with `motion.header` and a `layout` background blur;
      mobile menu with `AnimatePresence` slide-down.
- [ ] **Buttons/CTAs:** `whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}`.
- [ ] **Section headings:** clip-path or y-mask text reveal via `Reveal`.
- [ ] Every animated component gets `'use client'` and honors `useReducedMotion`.

### 3.4 3D-feel micro-interactions (no WebGL cost)

- [ ] **Tilt cards** for signature projects — `src/components/motion/TiltCard.tsx` using
      `useMotionValue` + `useTransform` mapping pointer position to `rotateX`/`rotateY`
      (±8°, `transform-style: preserve-3d`, `perspective: 1000px`), spring-back on leave.
- [ ] **Magnetic CTA buttons** — translate toward cursor within ~20px radius, spring back.

---

## Phase 4 — 3D Hero (React Three Fiber)

A WebGL centerpiece replacing the static logo card in the hero's right column.

### 4.1 Install

```bash
npm install three @react-three/fiber @react-three/drei
npm install -D @types/three
```

### 4.2 Build `src/components/three/HeroScene.tsx`

Recommended scene — **a wireframe/distorted icosahedron ("digital forest crystal") with
gold-ochre material, slow rotation, float, and pointer parallax**, over ink-950:

```tsx
'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

function Crystal() {
  const mesh = useRef<THREE.Mesh>(null!);
  useFrame(({ pointer }, delta) => {
    mesh.current.rotation.y += delta * 0.15;
    // pointer parallax
    mesh.current.rotation.x = THREE.MathUtils.lerp(mesh.current.rotation.x, pointer.y * 0.2, 0.05);
  });
  return (
    <Float speed={1.5} rotationIntensity={0.4} floatIntensity={1.2}>
      <mesh ref={mesh}>
        <icosahedronGeometry args={[1.6, 1]} />
        <MeshDistortMaterial color="#d4a24e" roughness={0.25} metalness={0.85}
          distort={0.25} speed={1.5} wireframe={false} />
      </mesh>
      <mesh scale={1.02}>
        <icosahedronGeometry args={[1.6, 1]} />
        <meshBasicMaterial color="#e8c87a" wireframe transparent opacity={0.15} />
      </mesh>
    </Float>
  );
}

export default function HeroScene() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 45 }} dpr={[1, 1.75]}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}>
      <ambientLight intensity={0.4} />
      <directionalLight position={[4, 4, 4]} intensity={1.2} color="#f5f1e8" />
      <pointLight position={[-4, -2, 2]} intensity={0.6} color="#1b4332" />
      <Crystal />
    </Canvas>
  );
}
```

### 4.3 Lazy-load with graceful fallback (critical for LCP)

In `Hero.tsx`:

```tsx
'use client';

import dynamic from 'next/dynamic';

const HeroScene = dynamic(() => import('@/components/three/HeroScene'), {
  ssr: false,
  loading: () => <StaticHeroCard />,  // extract the current logo card as the fallback
});
```

- [ ] Extract the existing logo card into `StaticHeroCard` — it stays as the fallback for
      SSR, load failures, and reduced-motion users.
- [ ] Gate WebGL: render `StaticHeroCard` when `useReducedMotion()` is true or
      `navigator.hardwareConcurrency <= 4` (low-end devices).
- [ ] Optional second scene: sparse gold particle field (`<Points>`, ~300 points) as a
      full-bleed hero background at very low opacity — skip if LCP suffers.

### 4.4 Performance guardrails

- [ ] `dpr` capped at 1.75; single canvas on the page; no shadows; no postprocessing.
- [ ] Canvas container gets a fixed height (`h-[500px]`) to prevent CLS.
- [ ] Confirm the three.js bundle loads in a separate async chunk (`npm run build` output)
      and is not in the First Load JS of `/`.

---

## Phase 5 — Section Rebuilds

### 5.1 Hero (`src/components/Hero.tsx`)

- [ ] Eyebrow: "Professional Services" → **"DevRay Lab — Client Case Files & Solutions"**
      in ochre, letter-spaced uppercase.
- [ ] Headline in Fraunces with the gold accent on the key line
      (e.g. "We Build Digital / **Solutions That** / Work" — middle line `text-ochre-400`).
- [ ] Replace the 6-chip grid with **3 core-service chips** (AI Development, Machine Learning,
      Web Development) + a "+6 more services ↓" link to `#services`.
- [ ] Right column: `HeroScene` (Phase 4).
- [ ] CTAs: primary "Get A Quote" in ochre; secondary "View Case Files" outline.

### 5.2 Services (`src/components/Services.tsx`)

Two-tier layout driven by `service.tier`:

- [ ] **Core row** — 3 large cards (`lg:grid-cols-3`), ochre icon tiles, "Primary Billing"
      styling: `border-ochre-500/40`, subtle gold gradient top edge.
- [ ] **Proof deep links** — under each core card's tech list, render `service.proof`:

```tsx
{service.proof && (
  <a href={service.proof.url} target="_blank" rel="noopener noreferrer"
     className="mt-4 inline-flex items-center gap-2 text-ochre-400 hover:text-ochre-300
                text-sm font-medium group/proof">
    <span className="w-2 h-2 rounded-full bg-ochre-400 animate-pulse" />
    {service.proof.label}
    <span className="transition-transform group-hover/proof:translate-x-1">→</span>
  </a>
)}
```

- [ ] **Additional grid** — heading "Additional Services", 6 compact cards
      (`lg:grid-cols-3`, smaller padding, features collapsed to top 3, muted styling).
- [ ] Wrap both grids in `StaggerGrid`; core cards get `TiltCard`.

### 5.3 About (`src/components/About.tsx`)

- [ ] **Founder lead block** directly under the "About DevRay" heading:

```tsx
<a href={professionalProfile.founderLink.url} target="_blank" rel="noopener noreferrer"
   className="group inline-flex items-center gap-3 px-5 py-3 bg-ink-800 border
              border-ochre-500/40 rounded-xl hover:border-ochre-400 transition-colors">
  <img src="/cropped_circle_image.png" alt="Raymond Klanderman"
       className="w-10 h-10 rounded-full object-cover" />
  <span className="text-parchment-100 font-medium group-hover:text-ochre-300 transition-colors">
    {professionalProfile.founderLink.label}
  </span>
</a>
```

- [ ] **Named certifications** — replace the `certifications.slice(0, 3)` badge-count cards
      with `namedCredentials`: one row per credential — gold seal icon, credential title
      (Fraunces), issuer (muted), "Verify →" link. No aggregate counts anywhere.
- [ ] Trim `extendedBio` rendering to ~3 sentences with the rest behind a "Read more" toggle
      (the full paragraph is currently a wall of text).

### 5.4 Projects (`src/components/Projects.tsx`)

- [ ] Heading: **"Client Case Files & Solutions"**; sub-heading keeps the current copy.
- [ ] **Signature row** (`tier === 'signature'`): 3 wide cards, real screenshots via
      `next/image` (`fill` + `object-cover`, `sizes="(max-width:768px) 100vw, 33vw"`),
      Fraunces titles, ochre "Signature" corner ribbon.
- [ ] **Award seal** — when `project.award` is set, absolutely-positioned pill over the image:
      `bg-ochre-400 text-ink-950 rounded-full px-3 py-1 text-xs font-bold shadow-lg`
      → "🏆 Hackathon Winner".
- [ ] **Secondary grid** (`tier === 'secondary'`): 6 compact cards below a thin gold divider,
      current card layout but themed, screenshots instead of placeholder icons.
- [ ] Signature cards wrapped in `TiltCard`; both groups in `StaggerGrid`.

### 5.5 Header, Footer, Contact, Chat

- [ ] **Header:** ochre hover states; active-section highlight (IntersectionObserver on
      section ids); "Get A Quote" in ochre.
- [ ] **Footer:** add a "Founder" column linking to
      [rayklanderman.is-a.dev](https://rayklanderman.is-a.dev/); services column lists the
      3 core services first.
- [ ] **Contact:** reorder the service `<select>` to core-first; theme the form
      (ochre focus rings: `focus:ring-ochre-400`).
- [ ] **Chat page (`/chat`):** sweep onto ink/ochre tokens so it no longer looks like a
      separate product.

---

## Phase 6 — SEO, Metadata & Structured Data

- [ ] **Metadata** (`layout.tsx`): set `metadataBase: new URL('https://devray.qzz.io')`,
      add `openGraph.images` (Phase 0.2), `openGraph.url`, and Twitter card fields.
- [ ] **JSON-LD** in `layout.tsx`: `Organization` schema — name "DevRay",
      `founder: { "@type": "Person", name: "Raymond Klanderman", url: "https://rayklanderman.is-a.dev/" }`,
      `sameAs` for GitHub/LinkedIn.
- [ ] Update `public/sitemap.xml` lastmod dates after launch.
- [ ] All project screenshots served through `next/image` with meaningful `alt` text.

---

## Phase 7 — QA, Performance & Launch

- [ ] `npm run lint` and `npm run build` — zero errors.
- [ ] **Lighthouse (mobile) on `/`:** Performance ≥ 85 with the 3D scene lazy-loaded;
      LCP ≤ 2.5s (LCP element must be the headline text, not the canvas); CLS < 0.1.
- [ ] **Reduced motion:** with OS "reduce motion" on, verify no reveals/float/3D — static
      card renders instead.
- [ ] **Low-end check:** throttle CPU 4× in DevTools; scrolling stays smooth (tilt and
      canvas are the usual suspects — drop `dpr` to 1 if needed).
- [ ] **Keyboard/a11y:** proof links and founder link reachable by Tab with visible ochre
      focus rings; award seal has an `aria-label`.
- [ ] Cross-check every proof link and project `liveUrl` resolves (Luminae, Kazi Connect,
      Movie Rec Engine URLs filled in).
- [ ] Deploy to Vercel preview → verify → promote to production.

---

## Content You Must Supply (placeholders in Phase 2)

| Item | Needed |
|---|---|
| Luminae | Description, tags, live URL, screenshot |
| Kazi Connect | Description, tags, live URL, screenshot |
| Movie Recommendation Engine | Description, tags, live/GitHub URL, screenshot |
| AI Health Chat award | Actual hackathon name for the 🏆 seal tooltip/aria-label |
| Project screenshots | 9 images, 1200×630, into `public/projects/` |
| OG image | 1200×630 branded card, `public/og-image.png` |

## Dependency Summary

```bash
npm install motion three @react-three/fiber @react-three/drei
npm install -D @types/three
```

## Suggested Commit Sequence

1. `feat: forest-ink & gold-ochre design tokens + typography (Fraunces/Inter)`
2. `feat: data model — service tiers, proof links, project tiers, named credentials`
3. `feat: motion foundation — Reveal, StaggerGrid, TiltCard, header/CTA micro-interactions`
4. `feat: 3D hero scene with lazy load + reduced-motion fallback`
5. `feat: tiered services with proof deep links`
6. `feat: signature project showcase + hackathon award seal + secondary grid`
7. `feat: founder cross-link + named certifications in About`
8. `feat: project screenshots, OG image, JSON-LD, metadata`
9. `chore: QA fixes, perf tuning, sitemap refresh`
