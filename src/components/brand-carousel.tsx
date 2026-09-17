import { BRAND_CLIENTS } from "@/lib/data";

export function BrandCarousel() {
  return (
    <section className="px-5 sm:px-10 py-16 border-t border-[var(--clay-line)]" style={{ maxWidth: "var(--content-w)", margin: "0 auto" }}>
      <h2 className="text-[13px] font-semibold uppercase tracking-[0.2em] text-[var(--ivory-500)] mb-8 text-center">Brand&apos;s Realm</h2>
      <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-70">
        {BRAND_CLIENTS.map((c) => (
          // eslint-disable-next-line @next/next/no-img-element -- real logos hotlinked from arifsonnet.com for now
          <img key={c.name} src={c.logo} alt={c.name} className="h-8 w-auto grayscale" />
        ))}
      </div>
    </section>
  );
}
