import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { CategoryGrid } from "@/components/category-grid";
import { FILM_PROJECTS } from "@/lib/data";

export const metadata = { title: "Commercial — Arif Sonnet" };

export default function CommercialPage() {
  const projects = FILM_PROJECTS.filter((p) => p.category === "Commercial");
  return (
    <>
      <Nav />
      <main className="rise-in px-5 sm:px-10 pt-16 pb-24" style={{ maxWidth: "var(--content-w)", margin: "0 auto" }}>
        <span className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">Commercial</span>
        <h1 className="mt-3 text-[40px] sm:text-[68px] font-medium leading-[1.02] tracking-[-0.02em] max-w-[18ch]" style={{ fontFamily: "var(--font-display)" }}>
          Brand &amp; OVC campaigns.
        </h1>
        <div className="mt-16">
          <CategoryGrid projects={projects} />
        </div>
      </main>
      <Footer />
    </>
  );
}
