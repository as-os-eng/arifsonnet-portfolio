import Link from "next/link";
import { SERVICES, PROFILE } from "@/lib/data";

export function Services() {
  return (
    <section className="px-5 sm:px-10 py-24 border-t border-[var(--clay-line)]" style={{ maxWidth: "var(--content-w)", margin: "0 auto" }}>
      <p className="text-[22px] sm:text-[32px] leading-snug max-w-[42ch]" style={{ fontFamily: "var(--font-display)" }}>
        &ldquo;{PROFILE.quote}&rdquo;
      </p>
      <Link href="/about" className="mt-4 inline-block text-[13px] font-medium text-[var(--ivory-300)] hover:text-[var(--accent)] transition-colors">
        More about {PROFILE.name} →
      </Link>

      <div id="services" className="mt-20">
        <h2 className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[var(--ivory-500)] mb-2">What I Direct</h2>
        <div className="flex flex-col">
          {SERVICES.map((s, i) => (
            <div key={s.title} className="group flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-8 py-7 border-t border-[var(--clay-line)] last:border-b">
              <span className="text-[13px] text-[var(--ivory-500)] tabular-nums w-8 shrink-0">{String(i + 1).padStart(2, "0")}</span>
              <h3
                className="text-[28px] sm:text-[42px] font-medium leading-none shrink-0 sm:w-[13ch] transition-colors group-hover:text-[var(--accent)]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {s.title}
              </h3>
              <p className="text-[14px] sm:text-[15px] text-[var(--ivory-500)] leading-relaxed max-w-[46ch]">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
