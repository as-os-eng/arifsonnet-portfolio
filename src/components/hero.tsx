import { PROFILE, FILM_PROJECTS } from "@/lib/data";

// Real still from the Prem Puran (Chorki) shoot — same anatomy as the
// full-bleed video-hero on the reference sites this design follows
// (johngrooters.com, andrewcussens.com), just an image instead of an mp4
// since nothing here is self-hosted video yet.
const HERO_STILL = FILM_PROJECTS.find((p) => p.slug === "prem-puran")!.poster;

export function Hero() {
  return (
    <section className="rise-in relative flex flex-col justify-end px-5 sm:px-10 pb-14" style={{ minHeight: "92vh" }}>
      <div className="absolute inset-0 -z-10">
        {/* eslint-disable-next-line @next/next/no-img-element -- real production still, self-hosted */}
        <img src={HERO_STILL} alt="" className="w-full h-full object-cover" />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(180deg, rgba(10,10,10,0.15) 0%, rgba(10,10,10,0.55) 55%, rgba(10,10,10,0.96) 100%)" }}
        />
      </div>

      <div style={{ maxWidth: "var(--content-w)", margin: "0 auto", width: "100%" }}>
        <span className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">{PROFILE.location}</span>
        <h1 className="mt-4 text-[64px] sm:text-[128px] font-medium leading-[0.92] tracking-[-0.02em]" style={{ fontFamily: "var(--font-display)" }}>
          Visual
          <br />
          <span className="italic text-[var(--ivory-300)]">Storyteller.</span>
        </h1>
        <div className="mt-8 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <p className="max-w-[46ch] text-[16px] sm:text-[18px] text-[var(--ivory-300)] leading-relaxed">
            {PROFILE.name} — {PROFILE.role}. Documentary, commercial, and narrative work built on a decade of directing for broadcast and brand.
          </p>
          <a href="/film" className="shrink-0 inline-block px-6 py-3 rounded-full border border-[var(--clay-line)] text-[13px] font-medium hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors w-fit">
            View the work
          </a>
        </div>
      </div>
    </section>
  );
}
