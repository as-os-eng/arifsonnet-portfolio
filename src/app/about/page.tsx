import Link from "next/link";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { PROFILE, FILM_PROJECTS } from "@/lib/data";

export const metadata = { title: "About — Arif Sonnet" };

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main className="rise-in">
        <section className="px-5 sm:px-10 pt-16" style={{ maxWidth: "var(--content-w)", margin: "0 auto" }}>
          <span className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">About</span>
          <h1 className="mt-3 text-[40px] sm:text-[68px] font-medium leading-[1.02] tracking-[-0.02em] max-w-[18ch]" style={{ fontFamily: "var(--font-display)" }}>
            {PROFILE.name}
          </h1>

          <div className="mt-14 grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-10 items-start">
            <div className="relative w-full overflow-hidden rounded-[4px] bg-[var(--clay-900)]" style={{ aspectRatio: "4/5" }}>
              {/* eslint-disable-next-line @next/next/no-img-element -- real profile photo, self-hosted from arifsonnet.com */}
              <img src="/images/arif-sonnet-profile.png" alt={PROFILE.name} className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="text-[22px] sm:text-[28px] leading-snug italic" style={{ fontFamily: "var(--font-display)" }}>
                &ldquo;{PROFILE.quote}&rdquo;
              </p>
              <div className="mt-8 space-y-5 max-w-[62ch]">
                {PROFILE.bioParagraphs.map((p, i) => (
                  <p key={i} className="text-[16px] sm:text-[17px] leading-relaxed text-[var(--ivory-300)]">
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-5 sm:px-10 mt-24 py-16 border-t border-[var(--clay-line)]" style={{ maxWidth: "var(--content-w)", margin: "0 auto" }}>
          <h2 className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[var(--ivory-500)] mb-8">Selected Work</h2>
          <div className="flex flex-col">
            {FILM_PROJECTS.map((p) => (
              <Link
                key={p.slug}
                href={`/work/${p.slug}`}
                className="group flex items-center justify-between gap-6 py-4 border-t border-[var(--clay-line)] last:border-b hover:text-[var(--accent)] transition-colors"
              >
                <span className="text-[16px] sm:text-[18px] font-medium">{p.title}</span>
                <span className="shrink-0 text-[13px] text-[var(--ivory-500)] group-hover:text-[var(--accent)]">
                  {p.client} · {p.category}
                </span>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
