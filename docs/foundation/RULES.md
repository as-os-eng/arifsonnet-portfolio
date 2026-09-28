# RULES — Arif Sonnet Portfolio

1. **Never invent identity/bio copy.** The real 4-pillar positioning is
   grounded in the operator's actual Drive-folder material (resumes,
   CVs, a signed BBC reference letter) — any future change to
   `PROFILE` needs the same real-source discipline, not assumption.
2. **Cloudflare token creation: prefer laptop/desktop.** Real, repeated
   failure mode — the mobile permission-picker UI mis-scopes tokens.
   Don't burn multiple mobile attempts before switching.
3. **A real R2 Access Key ID/Secret was pasted in chat during an
   earlier deploy-troubleshooting session (unrelated to this site's
   actual Workers Assets deploy, never used).** Real, still-open
   security follow-up: confirm it's been rotated. Not verified in this
   pass.
4. **The old arifsonnet.com WordPress site is slated for removal once
   this site ships** — `data.ts`'s own comment says the 2026-09-17
   content pull was "the last live pull from it." If more real content
   is ever needed from the old site, pull it before that removal
   happens, not after.
5. **Static export, not server-rendered.** Don't add a feature that
   needs a Next.js server runtime (API routes, ISR) without first
   checking it survives `output: 'export'` + Cloudflare Workers Assets.
