import { PROFILE } from "@/lib/data";

export function Contact() {
  return (
    <section id="contact" className="border-t border-[var(--clay-line)] bg-[var(--clay-900)]">
      <div className="px-5 sm:px-10 py-28 sm:py-40" style={{ maxWidth: "var(--content-w)", margin: "0 auto" }}>
        <span className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">Available for new work</span>
        <h2 className="mt-4 text-[52px] sm:text-[104px] font-medium leading-[0.95] tracking-[-0.02em]" style={{ fontFamily: "var(--font-display)" }}>
          Let&apos;s create
          <br />
          <span className="italic text-[var(--ivory-300)]">together.</span>
        </h2>
        <a
          href={`mailto:${PROFILE.email}`}
          className="inline-block mt-10 text-[20px] sm:text-[28px] underline decoration-[var(--accent)] underline-offset-8 decoration-2 hover:text-[var(--accent)] transition-colors"
        >
          {PROFILE.email}
        </a>
      </div>
    </section>
  );
}
