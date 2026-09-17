import { BRAND_CLIENTS } from "@/lib/data";

export function BrandCarousel() {
  return (
    <section className="px-5 sm:px-10 py-20 border-t border-[var(--clay-line)]" style={{ maxWidth: "var(--content-w)", margin: "0 auto" }}>
      <h2 className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[var(--ivory-500)] mb-10">Brands I&apos;ve Worked With</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-px bg-[var(--clay-line)]">
        {BRAND_CLIENTS.map((c) => (
          <div key={c.name} className="flex items-center justify-center bg-[var(--clay-950)] py-10 px-6">
            {/* eslint-disable-next-line @next/next/no-img-element -- real logos, self-hosted in public/images/brands */}
            <img src={c.logo} alt={c.name} title={c.name} className="max-h-9 w-auto max-w-[110px] object-contain grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all" />
          </div>
        ))}
      </div>
    </section>
  );
}
