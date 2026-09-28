# PRD — Arif Sonnet Portfolio

Six-file foundation set, following the convention at
`agentos/docs/foundation/README.md`. Real candidate from the
2026-09-28 audit.

## What it is

The operator's own professional portfolio site — a Next.js rebuild of
the previous WordPress site (arifsonnet.com), real, deployed, live at
`arifsonnet-portfolio.arifsonnet-webid.workers.dev`. Not a resume-style
site — carries the real 2026-09-20 identity repositioning (see
`agentos/docs/as-sp-identity/foundation/`): **Solo Entrepreneur ·
Venture-Automation Architect · Filmmaker · Policy Advocacy Researcher**,
grounded in the operator's own real Drive-folder bio material (resumes,
CVs, a signed BBC reference letter), not invented.

## Real pages (9)

`about`, `commercial`, `contact`, `documentary`, `film`, `frame`,
`journal`, `services`, `work` — plus the root landing page.

## Real content sources

`src/lib/data.ts` (329 lines) — real film-project credits/synopsis
pulled and hand-cleaned from the old arifsonnet.com WordPress site
(2026-09-17, before that site's planned retirement), real brand-client
logos (pulled via the WP REST media API), and the real 4-pillar
`PROFILE` identity copy (2026-09-20 rewrite). Not placeholder — the
repo's own README still says "everything is placeholder," which is
stale as of the 2026-09-20 identity commits; worth a real README fix.

## Real, deployed, verified

Live and confirmed reachable (200, checked directly 2026-09-29). Deploy
history: 3 real Cloudflare token failures (mobile permission-picker
issues), resolved with a 4th laptop-created token (2026-09-21). Full
detail in `RULES.md`/`MEMORY.md`.

## Explicitly out of scope for this pass

Rewriting more content — the real identity copy is done and live; this
set documents what exists, doesn't propose new copy.
