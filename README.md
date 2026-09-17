# arifsonnet-portfolio

Director/producer portfolio for arifsonnet.com — Next.js rebuild of the
existing WordPress site, keeping its real content model (genre-tagged film
grid, services, brand-client carousel, contact) with a modernized look.

Scaffolded from two evaluated GitHub templates rather than forked wholesale:
- Video-feed content model inspired by naeemsabir1/VideoGrapher-Portfolio
- Scroll/reveal animation approach inspired by ayush013/folio (Framer Motion here instead of GSAP)

## Real content still needed
Everything in `src/lib/data.ts` is placeholder — real project titles, real
video/poster URLs, real service copy, and real brand-client logos need to
replace the `// PLACEHOLDER` entries before this goes live.

## Dev

```bash
npm install
npm run dev
```
