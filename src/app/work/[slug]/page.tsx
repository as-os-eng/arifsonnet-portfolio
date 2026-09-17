import Link from "next/link";
import { notFound } from "next/navigation";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { FILM_PROJECTS } from "@/lib/data";

export function generateStaticParams() {
  return FILM_PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = FILM_PROJECTS.find((p) => p.slug === slug);
  if (!project) return {};
  return { title: `${project.title} — Arif Sonnet` };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = FILM_PROJECTS.find((p) => p.slug === slug);
  if (!project) notFound();

  const index = FILM_PROJECTS.findIndex((p) => p.slug === slug);
  const next = FILM_PROJECTS[(index + 1) % FILM_PROJECTS.length];

  return (
    <>
      <Nav />
      <main className="rise-in">
        <header className="px-5 sm:px-10 pt-8" style={{ maxWidth: "var(--content-w)", margin: "0 auto" }}>
          <Link href="/work" className="text-[13px] font-medium text-[var(--ivory-300)] hover:text-[var(--accent)] transition-colors">
            ← Directorial Portfolio
          </Link>
        </header>

      <section className="px-5 sm:px-10 pt-6" style={{ maxWidth: "var(--content-w)", margin: "0 auto" }}>
        <span className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
          {project.category} · {project.client}
        </span>
        <h1
          className="mt-3 text-[36px] sm:text-[64px] font-medium leading-[1.02] tracking-[-0.02em] max-w-[16ch]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {project.title}
        </h1>
      </section>

      <section className="px-5 sm:px-10 mt-8" style={{ maxWidth: "var(--content-w)", margin: "0 auto" }}>
        <div className="relative w-full overflow-hidden rounded-[4px] bg-[var(--clay-900)]" style={{ aspectRatio: "16/9" }}>
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${project.youtubeId}`}
            title={project.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        </div>
      </section>

      <section className="px-5 sm:px-10 mt-14 grid grid-cols-1 md:grid-cols-[1fr_320px] gap-12" style={{ maxWidth: "var(--content-w)", margin: "0 auto" }}>
        <p className="text-[18px] sm:text-[20px] leading-relaxed text-[var(--ivory-300)] max-w-[62ch]">
          {project.synopsis}
        </p>

        <div>
          <h2 className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[var(--ivory-500)] mb-4">Credits</h2>
          <dl className="space-y-3 border-t border-[var(--clay-line)] pt-4">
            {project.credits.map((c) => (
              <div key={c.role} className="flex justify-between gap-4 text-[14px]">
                <dt className="text-[var(--ivory-500)]">{c.role}</dt>
                <dd className="text-right font-medium">{c.name}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section
        className="px-5 sm:px-10 mt-20 py-16 border-t border-[var(--clay-line)] flex items-center justify-between gap-6"
        style={{ maxWidth: "var(--content-w)", margin: "0 auto" }}
      >
        <div>
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--ivory-500)]">Next project</span>
          <h3 className="mt-1 text-[22px] sm:text-[28px] font-medium" style={{ fontFamily: "var(--font-display)" }}>
            {next.title}
          </h3>
        </div>
        <Link
          href={`/work/${next.slug}`}
          className="shrink-0 px-6 py-3 rounded-full border border-[var(--clay-line)] text-[13px] font-medium hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
        >
          View →
        </Link>
      </section>
      </main>
      <Footer />
    </>
  );
}
