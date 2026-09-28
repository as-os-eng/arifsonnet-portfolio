# DESIGN — Arif Sonnet Portfolio

Real tokens, verified in `src/app/globals.css` directly.

## Real, significant finding: a real, shared AS-SP visual identity exists

```css
--clay-950: #0a0a0a;
--clay-900: #141414;
--ivory-100: #f5f3ef;
--ivory-300: #b8b3a8;
--ivory-500: #7a7468;
--accent: #d17a3a;
--content-w: 1180px;
```

**These are the exact same token names, and the exact same terracotta
accent hex (`#d17a3a`), as jonoswor's own design system** — confirmed
directly against `jonoswor/src/app/globals.css`. This is real,
concrete, verified cross-property design lineage, not a coincidence or
independent convergence: mission-control's cool near-black tokens →
jonoswor's warm terracotta fork (documented in jonoswor's own comment)
→ this site's independent landing on the identical clay/ivory/
terracotta naming and hex. **This is the first real evidence of an
actual shared AS-SP visual identity system across properties** — worth
naming explicitly rather than letting it stay an unremarked coincidence
across three separate repos. Real next step, not done here: decide
whether this becomes a formal shared token package, or stays
independently-maintained-but-consistent by convention.

## Typography

`--font-sans` (Inter), `--font-display` (Fraunces) — same Fraunces
choice as jonoswor's own editorial display serif, same convention
again.

## Real, deliberate default

Dark-cinematic is the intended default look, matching the previous
arifsonnet.com theme. Tokens follow the same three-state light/dark
pattern established elsewhere in AS-SP properties, ready for an
explicit toggle if one's ever added — not built yet.
