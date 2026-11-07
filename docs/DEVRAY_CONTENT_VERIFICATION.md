# DevRay Lab — Content Verification

**Date:** 6 November 2026
**Method:** Direct HTTP fetch of public URLs and the founder's public technical portfolio (`https://rayklanderman.is-a.dev/`). Anything not directly verified is marked unverified, not passed.

## 1. Project destinations

| Project | Public destination | Status | Notes |
|---|---|---|---|
| AI Health Chat | https://aihealthchat.qzz.io/ | Verified 200 | Public beta; educational triage only; not clinical validation |
| TutaLearn | https://tutalearn.qzz.io/ | Verified 200 | KICD-aligned CBC platform; tests/CI reported by owner |
| Luminae | https://luminae.qzz.io/ | Verified 200 | Mistral hackathon build; five agents; budget middleware |
| Sauti Mtaani Nairobi | https://www.sautimtaani.site/ | Verified 200 | Human-reviewed AI; PII scrubbing; no automated eligibility decisions |
| EyeSense | https://github.com/RealDevRay/eyesense | Verified 200 (source) | Prototype, not a validated navigation aid; no public demo claimed |
| Movie Recommendation Project | https://github.com/rayklanderman/mrp-2026 | Verified 200 (source) | Competition project; public-leaderboard RMSE only |
| AutoResearcher | https://github.com/rayklanderman/CapstoneProject-Autoresearcher | Verified 200 (source) | Course capstone; no zero-hallucination claim |
| PostShifterPro | https://postshifterpro.qzz.io/ | Verified 200 | Live independent tool; exact use-case depth not audited |
| Live Interviewer | https://liveinterviewer.vercel.app/ | Verified 200 | Live independent tool; not a validated hiring assessment |
| SerenityAI | https://serenityai.qzz.io/ | Verified 200 | Wellness support only; not licensed therapy |
| Codebase Genius | https://geniuscodebase.streamlit.app/ | Verified 200 | Source: https://github.com/rayklanderman/jaseci-proj (200) |
| WeatherWise Planner | No link | **Removed** | Domain expired and listed for sale on 2026-11-06; marked "Demo offline" |
| Weru Digital | https://werudigital.co.ke/ | Verified 200 | Client-facing multimedia site |
| Kazi Connect | https://kazi-connect.vercel.app/ | Verified 200 | Old `kaziconnect.qzz.io` link replaced |
| UrbanSpark AI | No public link | In development | Listed on owner portfolio as in development; no demo claimed |

## 2. GitHub repositories

| Repository | URL | Status |
|---|---|---|
| EyeSense | https://github.com/RealDevRay/eyesense | Verified 200 |
| Luminae | https://github.com/RealDevRay/luminae | Verified 200 |
| Movie Recommendation Project | https://github.com/rayklanderman/mrp-2026 | Verified 200 |
| AutoResearcher | https://github.com/rayklanderman/CapstoneProject-Autoresearcher | Verified 200 |
| Codebase Genius | https://github.com/rayklanderman/jaseci-proj | Verified 200 |

Only these public repositories render a Source button.

## 3. Founder and brand links

| Link | URL | Status |
|---|---|---|
| Technical portfolio | https://rayklanderman.is-a.dev/ | Verified by fetch; content used to correct project descriptions |
| LinkedIn | https://www.linkedin.com/in/rayklanderman/ | Exact spelling confirmed; not fetched in the final sweep |
| GitHub | https://github.com/rayklanderman | Verified |
| YouTube | https://www.youtube.com/@RealDevRay | Listed on owner portfolio; not fetched |
| Instagram | https://www.instagram.com/rayklanderman/ | Preserved from the existing site; not fetched |
| Business email | info@devray.qzz.io | Mailto only; delivery not tested |

## 4. Credentials

| Credential | Issuer | URL status |
|---|---|---|
| Professional Cloud Architect | Google Cloud | Verified 200; expires 15 July 2028 |
| 2025 Certified AI Foundations Associate | Oracle | Verified 200; expires 30 October 2027 |
| Kubernetes and Cloud Native Associate (KCNA) | Linux Foundation | Verified 200 |
| Foundation Certificate in Generative AI | BCS | Verified 200 |
| Google Cloud/AI skill badges | Google Skills | Profile verified 200 |
| Azure/cloud learning profile | Microsoft Learn | Verified 200 |
| AWS/IBM/cybersecurity badges | Credly | Generic `credly.com/users/...` profile returned 404; profile URL removed, individual verified badges retained |

No cloud-partner status is claimed from individual certifications.

## 5. Claims requiring qualification

| Claim | Handling |
|---|---|
| AI Health Chat "144 passing tests" | Written as README-reported, not re-run |
| AI Health Chat award | "PLP Hackathon Winner"; evidence notes 1st place at the Power Learn Project Class of 2024 graduate hackathon (December 2024) |
| TutaLearn tests/CI | Described as reported by the owner |
| Movie RMSE 1.21 → 0.82 | Explicitly public-leaderboard context; not a customer KPI |
| Luminae ~$0.05/paper | Described as a README estimate |
| Sauti AI | Human-reviewed only; no automated eligibility decisions |
| EyeSense | Prototype; not a validated navigation aid |
| UrbanSpark AI | In development; no launch or impact claim |
| WeatherWise | Demo offline; domain expired |

## 6. Screenshot and media needs

All 15 project visuals are clean branded placeholders (1200×630). They are not fabricated product UI; replacement needs are tracked here.

Replace with authentic 1200×630 captures when available:

- ai-health-chat.png, tutalearn.png, luminae.png, sauti-mtaani.png, eyesense.png, movie-recommender.png
- autoresearcher.png, postshifterpro.png, live-interviewer.png, serenity-ai.png, codebase-genius.png
- weatherwise.png, weru-digital.png, kazi-connect.png, urbanspark-ai.png

`public/og-image.png` is a generated branded card (1200×630). Replace only if a stronger authentic brand asset is available.

## 7. Privacy and legal copy

- Added `/privacy` describing the inquiry form, Formspree processing, AI chat/Groq processing, retention and contact.
- The notice describes current behaviour and is not presented as legal advice.
- No analytics or advertising trackers are currently included.
- No fabricated response-time guarantee, SLA, address or organisation size is used.

## 8. Environment and deployment

- `GROQ_API_KEY`: required for `/api/chat` in production; absent locally, so live chat was not tested.
- `FORMSPREE_ENDPOINT`: optional override; default is `https://formspree.io/f/mqeebboy`.
- Canonical host: `https://devray.qzz.io` (used by metadata, sitemap and robots).
- Sitemap contains 19 URLs: home, work, 15 case studies, chat and privacy.
- `public/sitemap.xml` and `public/robots.txt` were replaced by generated App Router routes.
- Deployment target: Vercel, auto-deploy from GitHub `master`.

## 9. Summary

| Category | Verified | Unverified / corrected |
|---|---|---|
| Project live destinations | 10 live + 4 public source links | WeatherWise removed (expired); UrbanSpark in development |
| GitHub repositories | 5 | — |
| Founder/brand links | Portfolio, GitHub | LinkedIn/YouTube not fetched; email delivery not tested |
| Credentials | 4 named credentials + 2 learning profiles | Generic Credly profile 404 removed |
| Screenshots | 0 authentic project captures | 15 branded placeholders |
| Provider delivery | Validation and failure paths tested | Live Formspree/Groq not tested |
