import { Linkedin, Youtube, Instagram, Facebook } from "lucide-react";
import { PROFILE } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="px-5 sm:px-10 py-8 flex flex-col sm:flex-row items-center justify-between gap-5" style={{ maxWidth: "var(--content-w)", margin: "0 auto" }}>
      <span className="text-[12px] text-[var(--ivory-500)]">
        © {year} {PROFILE.name}. Based in {PROFILE.location}.
      </span>
      <div className="flex items-center gap-5 text-[var(--ivory-500)]">
        <a href={PROFILE.socials.linkedin} aria-label="LinkedIn" className="hover:text-[var(--ivory-100)] transition-colors"><Linkedin className="w-4 h-4" /></a>
        <a href={PROFILE.socials.youtube} aria-label="YouTube" className="hover:text-[var(--ivory-100)] transition-colors"><Youtube className="w-4 h-4" /></a>
        <a href={PROFILE.socials.instagram} aria-label="Instagram" className="hover:text-[var(--ivory-100)] transition-colors"><Instagram className="w-4 h-4" /></a>
        <a href={PROFILE.socials.facebook} aria-label="Facebook" className="hover:text-[var(--ivory-100)] transition-colors"><Facebook className="w-4 h-4" /></a>
        <a href={PROFILE.socials.imdb} aria-label="IMDb" className="text-[12px] font-semibold tracking-wide hover:text-[var(--ivory-100)] transition-colors">IMDb</a>
      </div>
    </footer>
  );
}
