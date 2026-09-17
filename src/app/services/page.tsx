import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { SERVICES } from "@/lib/data";

export const metadata = { title: "Commercials & Services — Arif Sonnet" };

export default function ServicesPage() {
  return (
    <>
      <Nav />
      <main className="rise-in px-5 sm:px-10 pt-16 pb-24" style={{ maxWidth: "var(--content-w)", margin: "0 auto" }}>
        <span className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">Commercials</span>
        <h1 className="mt-3 text-[40px] sm:text-[68px] font-medium leading-[1.02] tracking-[-0.02em] max-w-[18ch]" style={{ fontFamily: "var(--font-display)" }}>
          What I direct.
        </h1>

        <div className="mt-16 flex flex-col">
          {SERVICES.map((s, i) => (
            <div key={s.title} className="group flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-8 py-8 border-t border-[var(--clay-line)] last:border-b">
              <span className="text-[13px] text-[var(--ivory-500)] tabular-nums w-8 shrink-0">{String(i + 1).padStart(2, "0")}</span>
              <h2
                className="text-[32px] sm:text-[48px] font-medium leading-none shrink-0 sm:w-[13ch] transition-colors group-hover:text-[var(--accent)]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {s.title}
              </h2>
              <p className="text-[15px] sm:text-[16px] text-[var(--ivory-500)] leading-relaxed max-w-[46ch]">{s.description}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
