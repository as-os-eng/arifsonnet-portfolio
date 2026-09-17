"use client";

import { useState } from "react";
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {items.map((p) => (
          <a
            key={p.slug}
            href={p.videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-[14px] overflow-hidden bg-[var(--clay-900)] border border-[var(--clay-line)]"
          >
            <div className="relative overflow-hidden" style={{ aspectRatio: "16/10" }}>
              {/* eslint-disable-next-line @next/next/no-img-element -- real project stills, hotlinked from arifsonnet.com for now */}
              <img src={p.poster} alt={p.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
            <div className="p-4">
              <span className="text-[10px] font-semibold uppercase tracking-wide text-[var(--accent)]">{p.category}</span>
              <h3 className="mt-1 text-[15px] font-medium leading-snug">{p.title}</h3>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
