import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { FilmGrid } from "@/components/film-grid";

export const metadata = { title: "Films & Documentary — Arif Sonnet" };

export default function WorkPage() {
  return (
    <>
      <Nav />
      <main className="rise-in pt-16">
        <div className="px-5 sm:px-10" style={{ maxWidth: "var(--content-w)", margin: "0 auto" }}>
          <span className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">Films &amp; Documentary</span>
          <h1 className="mt-3 text-[40px] sm:text-[68px] font-medium leading-[1.02] tracking-[-0.02em] max-w-[18ch]" style={{ fontFamily: "var(--font-display)" }}>
            The directorial portfolio.
          </h1>
        </div>
        <FilmGrid />
      </main>
      <Footer />
    </>
  );
}
