import Link from "next/link";
import { Linkedin, Youtube, Instagram, Facebook } from "lucide-react";
import { PROFILE } from "@/lib/data";

// Link list and tagline below match the real footer widget on
// arifsonnet.com (Home / Works / Services / Blog Post / Framegrab /
// About / Contact), remapped to this site's actual routes.
const LINKS = [
  { label: "Film", href: "/film" },
  { label: "Documentary", href: "/documentary" },
  { label: "Commercial", href: "/commercial" },
  { label: "Services", href: "/services" },
  { label: "Frame", href: "/frame" },
  { label: "Journal", href: "/journal" },
  { label: "Bio", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-[var(--clay-line)]">
      <div className="px-5 sm:px-10 py-16 grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-10" style={{ maxWidth: "var(--content-w)", margin: "0 auto" }}>
        <div>
          <span className="text-[17px] font-semibold" style={{ fontFamily: "var(--font-display)" }}>{PROFILE.name}</span>
          <p className="mt-3 text-[14px] text-[var(--ivory-500)] leading-relaxed max-w-[46ch]">{PROFILE.bio}</p>
        </div>
        <nav className="flex flex-col gap-2 sm:items-end">
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} className="text-[13px] text-[var(--ivory-300)] hover:text-[var(--accent)] transition-colors">
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
      <div
        className="px-5 sm:px-10 py-6 border-t border-[var(--clay-line)] flex flex-col sm:flex-row items-center justify-between gap-5"
        style={{ maxWidth: "var(--content-w)", margin: "0 auto" }}
      >
        <span className="text-[12px] text-[var(--ivory-500)]">
          © {PROFILE.name} | Freelance Filmmaker | {year}
        </span>
        <div className="flex items-center gap-5 text-[var(--ivory-500)]">
          <a href={PROFILE.socials.imdb} aria-label="IMDb" className="text-[12px] font-semibold tracking-wide hover:text-[var(--ivory-100)] transition-colors">IMDb</a>
          <a href={PROFILE.socials.linkedin} aria-label="LinkedIn" className="hover:text-[var(--ivory-100)] transition-colors"><Linkedin className="w-4 h-4" /></a>
          <a href={PROFILE.socials.youtube} aria-label="YouTube" className="hover:text-[var(--ivory-100)] transition-colors"><Youtube className="w-4 h-4" /></a>
          <a href={PROFILE.socials.facebook} aria-label="Facebook" className="hover:text-[var(--ivory-100)] transition-colors"><Facebook className="w-4 h-4" /></a>
          <a href={PROFILE.socials.instagram} aria-label="Instagram" className="hover:text-[var(--ivory-100)] transition-colors"><Instagram className="w-4 h-4" /></a>
        </div>
      </div>
    </footer>
  );
}
