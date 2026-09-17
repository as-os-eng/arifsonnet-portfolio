import { PROFILE } from "@/lib/data";

export function Hero() {
  return (
    <section className="rise-in relative flex flex-col justify-center px-5 sm:px-10 pt-20 pb-16" style={{ maxWidth: "var(--content-w)", margin: "0 auto", minHeight: "88vh" }}>
      <span className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">{PROFILE.location}</span>
      <h1 className="mt-4 text-[56px] sm:text-[96px] font-medium leading-[0.95] tracking-[-0.02em]" style={{ fontFamily: "var(--font-display)" }}>
        Visual
        <br />
        <span className="italic text-[var(--ivory-300)]">Storyteller.</span>
      </h1>
      <p className="mt-6 max-w-[52ch] text-[16px] sm:text-[18px] text-[var(--ivory-300)] leading-relaxed">
        {PROFILE.name} — {PROFILE.role}. Documentary, commercial, and narrative work built on a decade of directing for broadcast and brand.
      </p>
      <a href="#work" className="inline-block mt-8 px-6 py-3 rounded-full border border-[var(--clay-line)] text-[13px] font-medium hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors w-fit">
        View the work
      </a>
    </section>
  );
}
