"use client";

import { useState } from "react";
import Link from "next/link";
import { FILM_PROJECTS, type FilmCategory } from "@/lib/data";

const CATEGORIES: (FilmCategory | "All")[] = ["All", "Documentary", "Corporate Film", "Commercial", "Narrative Fiction"];

export function FilmGrid() {
  const [active, setActive] = useState<FilmCategory | "All">("All");
  const items = active === "All" ? FILM_PROJECTS : FILM_PROJECTS.filter((p) => p.category === active);

  return (
    <section id="work" className="rise-in px-5 sm:px-10 py-20" style={{ maxWidth: "var(--content-w)", margin: "0 auto" }}>
      <h2 className="text-[13px] font-semibold uppercase tracking-[0.2em] text-[var(--ivory-500)] mb-6">Directorial Portfolio</h2>
      <div className="flex flex-wrap gap-2 mb-10">
        {CATEGORIES.map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className="px-4 py-1.5 rounded-full text-[12px] font-medium border transition-colors"
            style={{
              borderColor: active === c ? "var(--accent)" : "var(--clay-line)",
              color: active === c ? "var(--accent)" : "var(--ivory-300)",
            }}
          >
            {c}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-12">
        {items.map((p) => (
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
    </section>
  );
}
