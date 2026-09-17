import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { FRAME_STILLS } from "@/lib/data";

export const metadata = { title: "Frame — Arif Sonnet" };

export default function FramePage() {
  return (
    <>
      <Nav />
      <main className="rise-in px-5 sm:px-10 pt-16 pb-24" style={{ maxWidth: "var(--content-w)", margin: "0 auto" }}>
        <span className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">Frame</span>
        <h1 className="mt-3 text-[44px] sm:text-[72px] font-medium leading-[0.98] tracking-[-0.02em] max-w-[18ch]" style={{ fontFamily: "var(--font-display)" }}>
          Stills from the field.
        </h1>
        <p className="mt-5 text-[16px] text-[var(--ivory-300)] max-w-[54ch]">
          Production and behind-the-scenes photography from a decade of shoots. This first set is pulled from the archive — the real filmgrab-style collection is still being built.
        </p>

        <div className="mt-14 columns-1 sm:columns-2 lg:columns-3 gap-4">
          {FRAME_STILLS.map((f) => (
            <a key={f.src} href={f.src} target="_blank" rel="noopener noreferrer" className="group block mb-4 break-inside-avoid">
              {/* eslint-disable-next-line @next/next/no-img-element -- real production stills, self-hosted */}
              <img src={f.src} alt={f.caption} className="w-full object-cover rounded-[4px] transition-opacity group-hover:opacity-80" />
              <span className="mt-2 block text-[12px] text-[var(--ivory-500)] leading-snug">{f.caption}</span>
            </a>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
