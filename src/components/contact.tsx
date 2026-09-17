import { Linkedin, Youtube, Instagram, Facebook } from "lucide-react";
import { PROFILE } from "@/lib/data";

export function Contact() {
  return (
    <section id="contact" className="px-5 sm:px-10 py-24 border-t border-[var(--clay-line)]" style={{ maxWidth: "var(--content-w)", margin: "0 auto" }}>
      <h2 className="text-[36px] sm:text-[52px] font-medium leading-tight" style={{ fontFamily: "var(--font-display)" }}>
        Let&apos;s create<br /><span className="italic text-[var(--ivory-300)]">together.</span>
      </h2>
      <a href={`mailto:${PROFILE.email}`} className="inline-block mt-8 text-[18px] sm:text-[22px] underline decoration-[var(--accent)] underline-offset-8 hover:text-[var(--accent)] transition-colors">
        {PROFILE.email}
      </a>
      <div className="flex items-center gap-5 mt-10 text-[var(--ivory-300)]">
        <a href={PROFILE.socials.linkedin} aria-label="LinkedIn" className="hover:text-[var(--ivory-100)]"><Linkedin className="w-5 h-5" /></a>
        <a href={PROFILE.socials.youtube} aria-label="YouTube" className="hover:text-[var(--ivory-100)]"><Youtube className="w-5 h-5" /></a>
        <a href={PROFILE.socials.instagram} aria-label="Instagram" className="hover:text-[var(--ivory-100)]"><Instagram className="w-5 h-5" /></a>
        <a href={PROFILE.socials.facebook} aria-label="Facebook" className="hover:text-[var(--ivory-100)]"><Facebook className="w-5 h-5" /></a>
        <a href={PROFILE.socials.imdb} aria-label="IMDb" className="text-[13px] font-semibold tracking-wide hover:text-[var(--ivory-100)]">IMDb</a>
      </div>
    </section>
  );
}
