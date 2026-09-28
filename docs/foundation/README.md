# The Foundation Set — a reusable project convention

Six files, written before code, kept current after: `PRD.md`,
`ARCHITECTURE.md`, `RULES.md`, `DESIGN.md`, `TASKS.md`, `MEMORY.md`. This
document is the generic version — copy this whole `docs/foundation/`
folder into any new project (AS-OS or otherwise) and adapt the six files
to that project's own real content. What follows is the convention
itself, not AS-OS-specific.

## Why six files, not one

One growing file (a `CLAUDE.md`-shaped everything-doc) is where this
convention came from — and where its failure mode lives. AS-OS's own
`CLAUDE.md` contains at least four explicit corrections of the form "an
earlier revision of this file said X — that's wrong." That's not a
writing problem, it's a structural one: rules, architecture, and a
running log all live in one file, so a new fact gets appended near an old
one instead of replacing it, and nobody can tell at a glance which
paragraph is still true. Splitting by *kind of fact* — a rule doesn't
change often, a memory entry is by definition dated and additive, an
architecture diagram should be replaced wholesale when it's wrong — fixes
that by construction.

## What each file owns, and how often it should change

| File | What it owns | How it changes |
|---|---|---|
| `PRD.md` | Why this exists, who it's for, what's explicitly out of scope | Rarely — a real scope change, not a status update |
| `ARCHITECTURE.md` | The real, current structure — verified against live state, not aspirational | Replaced in place when the architecture changes; old versions live in git history, not as commented-out paragraphs |
| `RULES.md` | Hard constraints, gotchas, security posture — things that must not be violated | Grows by addition when a real incident teaches a new rule; a rule is never quietly removed, only marked retired with why |
| `DESIGN.md` | The real design system (or "N/A, this is infrastructure" — don't force a square peg) | Points at the real source (a tokens file, a CSS file) rather than duplicating values that drift |
| `TASKS.md` | The current real roadmap — active initiatives only | Replaced per initiative as phases complete; not a lifetime backlog |
| `MEMORY.md` | The dated, chronological log — what happened, when, why | **Append-only.** Newest entry first. Never edited retroactively except to fix a factual error, and even then, note the correction rather than silently rewriting history |

## Folder convention

```
docs/foundation/
  README.md          — this file (the convention itself)
  PRD.md
  ARCHITECTURE.md
  RULES.md
  DESIGN.md
  TASKS.md
  MEMORY.md
```

Keep it flat and exactly these six names — the value of the convention is
that anyone (human or a fresh Claude Code session) knows exactly where to
look without guessing. Project-specific detail docs (an ADR, a migration
plan, a venture's own plan) stay in `docs/` alongside this folder, not
inside it — `docs/foundation/` is the stable core, everything else is
detail that can churn freely.

## Repo-wide folder taxonomy (added 2026-09-28, real industry comparison)

The six-file convention above is `docs/foundation/`'s own internal shape.
The question underneath it is bigger: does the whole repo's folder
taxonomy hold up against real industry practice, on both a small
single-GPU host and a real multi-service host like the DGX Spark?

**Real 2026 industry convention for a multi-service repo** (verified via
current sources, not assumed): an `apps/` directory for each deployable
service, a `packages/` (or `libs/`/`shared/`) directory for code more than
one app depends on, one-way dependency flow (`apps/` → `packages/`,
never the reverse), and feature-based (not technical-layer-based)
organization inside each app.

**How AS-OS actually maps onto that, checked directly:**

| Industry concept | AS-OS's real equivalent | Verdict |
|---|---|---|
| `apps/` (deployable services) | `brain/` (the FastAPI+LangGraph service) + `hands/*` (`studio-agent`, `neo-executor`, `claude-orchestrator`, `telegram-bot`, `mcp-bridge`, etc. — each its own deployable unit) | **Functionally equivalent already**, different name. Renaming `brain/`→`apps/brain` and `hands/`→`apps/*` would be a large, disruptive migration for a naming change alone — not worth doing retroactively. |
| `packages/` (shared code) | `hands/messaging-common` (shared bot code) is a real, existing precedent — but there's no general-purpose shared location for code more than one service needs | **Real, genuine gap.** Going forward, new shared code should get its own clearly-named location (e.g. `packages/` or `shared/`), generalizing what `messaging-common` already proves works, rather than each new service re-inventing its own copy. |
| One repo per truly separate product | Mission Control (`~/as-os-mission-control`) is a **separate repo** by deliberate choice, documented in `CLAUDE.md` as intentional, not drift | **Matches real practice** — a Next.js frontend has no reason to live inside a Python backend's monorepo; this is the industry-standard "poly-repo where products are genuinely separate" pattern, correctly applied. |
| Feature-based internal organization | `brain/`'s flat absolute-import module package (`config`, `tools`, `personas`, `agents`, `api`, …) | Reasonable for its size; revisit only if `brain/` keeps growing — not a problem today. |

**Net, honest recommendation:** don't rename the existing top-level dirs
retroactively — the disruption cost is real and the functional shape
already matches the industry pattern. Do formalize the one real gap
(a general `packages/`-equivalent location) for new shared code going
forward, on both hosts — this is a naming/discipline fix, not a rebuild.

## Git worktree best practices, for this convention specifically

AS-OS already has a real, working worktree pattern —
`hands/neo-executor` applies a patch in "an ISOLATED git worktree off
HEAD... NEVER touching the live working tree." The same shape generalizes
well beyond that one use case:

1. **The main checkout is always on the trunk branch, always clean.**
   `docs/foundation/` in the main checkout is the current truth. Never
   develop a large change directly against it.
2. **Each active `TASKS.md` initiative gets its own worktree**, not its
   own long-lived branch checked out in place:
   ```bash
   git worktree add ../agentos-cinema-studio cinema-studio-page-split
   ```
   Work happens there; `TASKS.md` in the main checkout names the worktree
   next to the initiative so anyone can find it
   (`Initiative: Cinema Studio page split — worktree: ../agentos-cinema-studio`).
3. **A worktree is throwaway by default.** If the initiative is abandoned,
   `git worktree remove` and the branch can go with it — nothing in
   `docs/foundation/` should ever exist only inside a worktree. Update
   `MEMORY.md` in the main checkout before removing a worktree that
   finished something real, so the log survives the branch.
4. **Never run two worktrees against the same mutable external state at
   once** (the same dev server port, the same database) — this is exactly
   the class of bug AS-OS's own memory-arbitration work this month had to
   solve for GPU access; the same discipline applies to any shared
   resource a worktree's dev environment touches.
5. **`MEMORY.md` entries cite the worktree/branch, not just the commit** —
   `git log` shows what changed; it doesn't show why a worktree existed or
   what it was trying to prove. That context is what `MEMORY.md` is for.

## Starting a new project with this convention

```bash
mkdir -p new-project/docs/foundation
cp agentos/docs/foundation/README.md new-project/docs/foundation/
# Write PRD.md and ARCHITECTURE.md for real first — RULES/DESIGN/TASKS/
# MEMORY start mostly empty and fill in as the project actually develops.
```

Do not template-fill the other five files with placeholder prose just to
have six files present — an empty `RULES.md` with one honest line ("no
hard constraints identified yet") is more useful than five paragraphs of
generic boilerplate nobody will ever update.
