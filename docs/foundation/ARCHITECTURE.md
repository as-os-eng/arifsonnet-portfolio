# ARCHITECTURE — Arif Sonnet Portfolio

Real, verified shape.

## Stack

Next.js, static export (`output: 'export'` via `wrangler.jsonc`'s
`assets.directory: "./out"`), deployed to Cloudflare Workers Assets —
not a server-rendered Next.js deploy. Real, minimal dependency surface:
`lucide-react`, `next`, `react`, `react-dom` only (`package.json`,
4 real deps).

## Real deploy config (`wrangler.jsonc`)

```json
{
  "name": "arifsonnet-portfolio",
  "compatibility_date": "2026-09-17",
  "assets": { "directory": "./out", "not_found_handling": "404-page" }
}
```

Real account ID (reusable): `a8ff3c0aef0a9becdf765a5706018ec6`. Deploy
token creation genuinely needs a Cloudflare Custom Token scoped to
exactly `Account / Workers Scripts / Edit` — real history: 3 mobile-
created tokens all failed differently before a 4th, laptop-created,
precisely-scoped token worked (2026-09-21). Real lesson: prefer
desktop/laptop for Cloudflare token creation, don't iterate mobile
attempts.

## Real data model

One file, `src/lib/data.ts` — `FilmProject[]`, `Service[]`,
`BrandClient[]`, `FrameStill[]`, `JournalPost[]`, and the `PROFILE`
object (name/role/bio/quote/footerTagline/bioParagraphs/socials). No
CMS, no database — content is committed directly to the repo.

## Real, live identity copy (2026-09-20, verified against git log)

`PROFILE.role`: "Solo Entrepreneur · Venture-Automation Architect ·
Filmmaker · Policy Advocacy Researcher." `bioParagraphs` cover all four
pillars with real specifics: Zen Tea/Authentic Tea Ltd (entrepreneur),
AS-SP as "a real, self-hosted multi-agent automation system... a live
system he personally engineers and operates" (venture-automation —
this is the site's own real, public definition of AS-SP, worth citing
back into `agentos/docs/as-sp-identity/foundation/`), real film credits
(filmmaker), Bangladesh Cholochitro Songskar Roadmap / 300+ community
(policy advocacy).

## Real, honest gap this pass found

The repo's own README still claims `data.ts` is "all placeholder" —
stale since the 2026-09-20 identity rewrite and the 2026-09-17
WordPress content pull. Not fixed in this pass (a doc-accuracy fix, not
architecture); flagged in `TASKS.md`.
