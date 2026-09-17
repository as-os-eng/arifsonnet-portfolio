import { Linkedin, Youtube, Instagram, Facebook } from "lucide-react";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { ContactForm } from "@/components/contact-form";
import { PROFILE } from "@/lib/data";

export const metadata = { title: "Contact — Arif Sonnet" };

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main className="rise-in px-5 sm:px-10 pt-16 pb-24" style={{ maxWidth: "var(--content-w)", margin: "0 auto" }}>
        <span className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">Contact / Bookings</span>
        <h1 className="mt-3 text-[40px] sm:text-[68px] font-medium leading-[1.02] tracking-[-0.02em] max-w-[18ch]" style={{ fontFamily: "var(--font-display)" }}>
          Let&apos;s talk about your project.
        </h1>
        <p className="mt-5 text-[16px] text-[var(--ivory-300)] max-w-[54ch]">
          Looking to have {PROFILE.name} direct, produce, or shoot your next documentary, corporate film, or commercial? Fill out the form below, or write directly to{" "}
          <a href={`mailto:${PROFILE.email}`} className="underline decoration-[var(--accent)] hover:text-[var(--accent)]">
            {PROFILE.email}
          </a>
          .
        </p>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-14">
          <ContactForm />

          <div>
            <h2 className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[var(--ivory-500)] mb-4">Based in</h2>
            <p className="text-[16px] mb-8">{PROFILE.location}</p>
            <h2 className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[var(--ivory-500)] mb-4">Follow</h2>
            <div className="flex items-center gap-5 text-[var(--ivory-300)]">
              <a href={PROFILE.socials.linkedin} aria-label="LinkedIn" className="hover:text-[var(--ivory-100)]"><Linkedin className="w-5 h-5" /></a>
              <a href={PROFILE.socials.youtube} aria-label="YouTube" className="hover:text-[var(--ivory-100)]"><Youtube className="w-5 h-5" /></a>
              <a href={PROFILE.socials.instagram} aria-label="Instagram" className="hover:text-[var(--ivory-100)]"><Instagram className="w-5 h-5" /></a>
              <a href={PROFILE.socials.facebook} aria-label="Facebook" className="hover:text-[var(--ivory-100)]"><Facebook className="w-5 h-5" /></a>
              <a href={PROFILE.socials.imdb} aria-label="IMDb" className="text-[13px] font-semibold tracking-wide hover:text-[var(--ivory-100)]">IMDb</a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
