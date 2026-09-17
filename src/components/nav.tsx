"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { PROFILE } from "@/lib/data";

const LINKS = [
  { label: "Work", href: "/#work" },
  { label: "Frame", href: "/frame" },
  { label: "Journal", href: "/journal" },
  { label: "Services", href: "/#services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <div className="nav-sticky">
      <div className="flex items-center justify-between gap-4 py-5 px-5 sm:px-10" style={{ maxWidth: "var(--content-w)", margin: "0 auto" }}>
        <a href="/" className="text-[17px] font-semibold tracking-[-0.01em]" style={{ fontFamily: "var(--font-display)" }}>
          {PROFILE.name}
        </a>
        <nav className="hidden sm:flex items-center gap-9">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="text-[13px] font-medium uppercase tracking-[0.08em] text-[var(--ivory-300)] hover:text-[var(--ivory-100)] transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <button onClick={() => setOpen(true)} aria-label="Menu" className="sm:hidden">
          <Menu className="w-5 h-5" />
        </button>
      </div>
      {open && (
        <div className="fixed inset-0 z-50 bg-[var(--clay-950)] flex flex-col">
          <div className="flex justify-end p-5">
            <button onClick={() => setOpen(false)} aria-label="Close"><X className="w-6 h-6" /></button>
          </div>
          <nav className="flex flex-col px-8 gap-6">
            {LINKS.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-[28px] font-medium" style={{ fontFamily: "var(--font-display)" }}>
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
}
