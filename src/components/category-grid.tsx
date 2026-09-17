import Link from "next/link";
import type { FilmProject } from "@/lib/data";

export function CategoryGrid({ projects }: { projects: FilmProject[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-12">
      {projects.map((p) => (
        <Link key={p.slug} href={`/work/${p.slug}`} className="group block">
          <div className="relative overflow-hidden" style={{ aspectRatio: "16/10" }}>
            {/* eslint-disable-next-line @next/next/no-img-element -- real project stills, self-hosted in public/images/work */}
            <img src={p.poster} alt={p.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
          </div>
          <div className="mt-4 flex items-baseline justify-between gap-4">
            <div>
              <h3 className="text-[20px] sm:text-[24px] font-medium leading-snug" style={{ fontFamily: "var(--font-display)" }}>{p.title}</h3>
              <span className="mt-1 block text-[13px] text-[var(--ivory-500)]">{p.client}</span>
            </div>
            <span className="shrink-0 text-[10px] font-semibold uppercase tracking-wide text-[var(--accent)]">{p.category}</span>
          </div>
        </Link>
      ))}
    </div>
  );
}
