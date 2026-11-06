# DevRay Lab — Content Verification

**Branch:** `feat/master-prompt-implementation`
**Verification method:** Direct fetch of live URLs where network access exists; otherwise marked unverified (not passed).
**Date:** 2026-11-06

## 1. Project live URLs

| Project | URL | Status | Notes |
|---|---|---|---|
| AI Health Chat | https://aihealthchat.qzz.io/ | Verified | Loads; multilingual AI health platform; educational triage disclaimer present |
| TutaLearn | https://tutalearn.qzz.io/ | Verified | Loads; KICD-aligned CBC, 3,200+ lessons, 14,900+ questions observed |
| Luminae | https://luminae.qzz.io/ | Verified | Loads; Mistral hackathon build; "Built by DevRay Labs"; budget guards |
| Codebase Genius | https://geniuscodebase.streamlit.app/ | Verified | Loads (streamlit demo) |
| WeatherWise Planner | https://www.weatherwise.earth/ | Verified | Loads; NASA Earth data climate tool |
| SerenityAI | https://serenityai.qzz.io/ | Verified (partial) | Loads minimal landing only; no feature depth observable |
| Weru Digital | https://werudigital.co.ke/ | Verified | Loads; multimedia TV/radio streaming site |
| Kazi Connect | https://kaziconnect.qzz.io/ | UNVERIFIED | Fetch failed; do not present as operational |
| Movie Recommendation Engine | https://movie-recommender.qzz.io/ | UNVERIFIED | Fetch failed; competition/prototype scope only |

## 2. GitHub repositories

| Repo | URL | Status | Notes |
|---|---|---|---|
| AutoResearcher | https://github.com/rayklanderman/CapstoneProject-Autoresearcher | Verified | Public; 2 stars, 17 commits; multi-agent research report |
| rayklanderman | https://github.com/rayklanderman | Verified | Profile accessible |
| ai-health-chat | https://github.com/rayklanderman/ai-health-chat | NOT FOUND | HTTP 404; do not link as source unless confirmed elsewhere |

## 3. Founder / brand links

| Link | URL | Status | Notes |
|---|---|---|---|
| Canonical portfolio | https://rayklanderman.is-a.dev/ | Not fetched | Listed in master prompt as canonical; verify manually |
| LinkedIn | https://www.linkedin.com/in/rayklanderman/ | Not fetched | Exact spelling confirmed (not raymondklanderman) |
| Business contact | info@devray.site | Not verified | Mailto only; delivery path not tested |

## 4. Proof links referenced in Services

| Service | Proof label | URL | Status |
|---|---|---|---|
| AI Applications & Intelligent Automation | See it live: AI Health Chat | https://aihealthchat.qzz.io/ | Verified |
| Web Platforms & Custom Software | See it live: TutaLearn | https://tutalearn.qzz.io/ | Verified |

Additional services (Mobile, Data Analytics, Livestreaming, Technical Content, WordPress, Digital Media) have no proof links — cross-sell only, not engineering lead.

## 5. Credentials / certifications

| Credential | Issuer | URL | Status |
|---|---|---|---|
| Oracle OCI 2025 Certified AI Foundations Associate | Oracle | catalog-education.oracle.com badge link | Not fetched; badge URL pattern from prior data |
| MLOps for Generative AI | Google Cloud | cloudskillsboost.google profile | Not fetched |
| Vector Search and Embeddings | Google Cloud | cloudskillsboost.google profile | Not fetched |
| AWS Educate ML Foundations | AWS | credly.com profile | Not fetched |
| Google for Developers profile | Google | developers.google.com profile | Not fetched |
| Microsoft Learn profile | Microsoft | learn.microsoft.com profile | Not fetched |
| Parchment Digital Badges | Parchment | (no URL) | Credential wallet; no public URL |

## 6. Screenshot needs

All 9 project screenshots in `public/projects/` are branded placeholder PNGs (1200×630), not real captures:
- tutalearn.png, codebase-genius.png, weatherwise.png, ai-health-chat.png, serenity-ai.png, weru-digital.png, luminae.png, kazi-connect.png, movie-recommender.png

Replace with actual 1200×630 captures before production promotion. `public/og-image.png` also needs a branded card replacement.

## 7. AI Health Chat award

The 🏆 award seal currently reads generically "Hackathon Winner". Actual hackathon name for tooltip/aria-label is unconfirmed. PLP Class of 2024 graduate hackathon first place is cited in data but the exact event name must be verified before publishing.

## 8. Env / deployment

- `GROQ_API_KEY`: `.env.local` does not exist locally; must be confirmed on Vercel for `/api/chat` to function
- `public/sitemap.xml`: lastmod dates are 2026-01-19; refresh after final launch
- `public/robots.txt` sitemap host is `devray.site` while metadataBase is `devray.qzz.io` — align host after launch

## 9. Summary

| Category | Verified | Unverified | Not fetchable |
|---|---|---|---|
| Project live URLs | 7 | 2 (Kazi Connect, Movie Rec) | 0 |
| GitHub repos | 2 | 0 | 1 (ai-health-chat 404) |
| Founder/brand links | 0 | 3 | 0 |
| Proof links | 2 | 0 | 0 |
| Screenshots / OG | 0 | 9 placeholders + 1 OG | 0 |

**Rule applied:** Anything not directly verified is marked "unverified", not passed. No client results, employment arrangements, or metrics are fabricated.
