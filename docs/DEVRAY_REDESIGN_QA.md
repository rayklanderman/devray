# DevRay Lab — Redesign QA Report

**Date:** 6 November 2026
**Commands run from:** `D:\STUDENT\devray`
**Status:** Typecheck, lint, production build and HTTP/API smoke tests pass. Visual, Lighthouse, screen-reader and live-provider checks are listed as not tested.

## 1. Static checks

| Check | Command | Result | Notes |
|---|---|---|---|
| TypeScript | `npx tsc --noEmit` | **PASS** | Zero errors |
| ESLint | `npx eslint <all src ts/tsx files>` | **PASS** | Zero errors, zero warnings |
| Production build | `npm run build` | **PASS** | Compiled in ~23s; 26 static pages generated |

### Build output

- Static: `/`, `/_not-found`, `/privacy`, `/robots.txt`, `/sitemap.xml`, `/icon.png`, `/apple-icon.png`
- Dynamic: `/chat`, `/api/chat`, `/api/contact`
- SSG: `/work/[slug]` with all 15 case-study paths prerendered via `generateStaticParams`
- `/work` is static

## 2. Route and content checks (production server)

Started with `npx next start -p 3100` after the build.

| Route / check | Expected | Result |
|---|---|---|
| `/` | 200 with hero, audience strip, four core services, selected work, why, process, about, FAQ, contact | **PASS** |
| `/work` | 200 with all 15 case files, signature and additional sections | **PASS** |
| `/work/ai-health-chat` | 200 with architecture, evidence, limitations, CTA | **PASS** |
| `/work/eyesense` | 200 with public source link | **PASS** |
| `/work/does-not-exist` | 404 | **PASS** |
| `/privacy` | 200 with Formspree, AI chat and retention sections | **PASS** |
| `/chat` | 200 | **PASS** |
| `/sitemap.xml` | 200, canonical host, 19 URLs | **PASS** |
| `/robots.txt` | 200, canonical sitemap URL, `/api/` disallowed | **PASS** |
| All 19 sitemap URLs | 200 | **PASS** |
| 27 unique internal links extracted from rendered pages | 200 | **PASS** |
| Project, OG and icon assets | 200 | **PASS** |
| `X-Powered-By` header | Absent | **PASS** |
| Homepage contains no "Get A Quote" CTA | Absent | **PASS** |

## 3. Contact API checks

No valid inquiry was submitted to Formspree, to avoid sending a live message.

| Case | Expected | Result |
|---|---|---|
| Invalid fields (empty name, bad email, short message, no consent) | 422 with field errors | **PASS** |
| Honeypot field populated | 400 | **PASS** |
| Cross-origin request | 403 | **PASS** |
| Missing `GROQ_API_KEY` on `/api/chat` | 503 with safe message | **PASS** |
| Chat error body leaks key/token material | No | **PASS** |
| Client-supplied `system` message | 400 (prompt is server-side only) | **PASS** |
| Oversized chat message | 400 | **PASS** |
| Empty chat conversation | 400 | **PASS** |
| Formspree/Groq secrets in client static bundle | None found | **PASS** |

## 4. External link verification

Checked by HTTP fetch where the network permitted:

- **200:** AI Health Chat, TutaLearn, Luminae, Sauti Mtaani, PostShifterPro, Live Interviewer, SerenityAI, Kazi Connect, Codebase Genius, Weru Digital.
- **200:** GitHub repositories for EyeSense, Luminae, Movie Recommendation Project, AutoResearcher and Codebase Genius.
- **200:** Google Cloud Professional Cloud Architect badge, Oracle AI Foundations badge, KCNA badge, BCS Generative AI certificate, Google Skills profile, Microsoft Learn profile.
- **200:** Founder technical portfolio (`https://rayklanderman.is-a.dev/`).
- **Removed:** WeatherWise live URL (domain expired and listed for sale on 2026-11-06); `credly.com/users/raymond-klanderman` profile URL returned 404 and was removed.

Full details: `docs/DEVRAY_CONTENT_VERIFICATION.md`.

## 5. Accessibility review (code-level)

| Item | Status |
|---|---|
| Skip-to-content link | Present |
| Focus-visible outline | Present globally |
| Semantic headings and section `aria-labelledby` | Present |
| Mobile menu keyboard/Escape/`aria-expanded`/`aria-controls` | Present |
| Form labels, `aria-required`, `aria-invalid`, inline error IDs | Present |
| `aria-live` form status and chat log | Present |
| `aria-current` navigation | Present |
| Alt text for project/brand images | Present |
| Reduced-motion handling | Present in CSS and motion primitives; 3D hero gated |
| Screen-reader walkthrough | **NOT TESTED** |
| Automated axe/Lighthouse accessibility run | **NOT TESTED** |

## 6. Responsive and visual checks

| Item | Status |
|---|---|
| Responsive classes for 320/375/768/1024/1440 layouts | Implemented |
| Horizontal-overflow check in a real browser | **NOT TESTED** |
| Visual review at each breakpoint | **NOT TESTED** |
| Reduced-motion static fallback rendered in a browser | **NOT TESTED** |
| Lighthouse performance / LCP / CLS | **NOT TESTED** |

## 7. Not tested / blocked

1. **Live Formspree delivery** — a real submission would send an actual inquiry. The endpoint, validation and failure handling are implemented; delivery should be tested with a safe test form before launch.
2. **Live Groq response** — `GROQ_API_KEY` is not present locally. The missing-key path and input validation are tested.
3. **Visual/Lighthouse/screen-reader QA** — not available in this environment.
4. **Real project screenshots** — all 15 visuals are branded placeholders explicitly marked as pending.
5. **Email deliverability** — `info@devray.site` was not sent a test message.
6. **Full social-profile sweep** — LinkedIn and some profile destinations were not fetched due to bot/redirect behaviour; exact URLs are used.

## 8. Summary

| Item | Result |
|---|---|
| Typecheck | PASS |
| Lint | PASS |
| Production build | PASS |
| Case-study routes | PASS (previously 404) |
| Sitemap and robots | PASS |
| Internal links and assets | PASS |
| Contact API validation and abuse checks | PASS |
| Missing-key chat behaviour | PASS |
| Live provider delivery | NOT TESTED |
| Visual/Lighthouse/a11y audits | NOT TESTED |

**Overall:** The site builds cleanly and the implemented routes, APIs, internal links, sitemap, robots and content markers pass automated checks. Remaining items are visual/provider verification and real screenshot replacement.
