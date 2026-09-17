import Link from "next/link";
import { notFound } from "next/navigation";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { JOURNAL_POSTS, PROFILE } from "@/lib/data";

export function generateStaticParams() {
  return JOURNAL_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = JOURNAL_POSTS.find((p) => p.slug === slug);
  if (!post) return {};
  return { title: `${post.title} — Arif Sonnet` };
}

export default async function JournalPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = JOURNAL_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <>
      <Nav />
      <main className="rise-in">
        <header className="px-5 sm:px-10 pt-8" style={{ maxWidth: "var(--content-w)", margin: "0 auto" }}>
          <Link href="/journal" className="text-[13px] font-medium text-[var(--ivory-300)] hover:text-[var(--accent)] transition-colors">
            ← Journal
          </Link>
        </header>

        <article className="px-5 sm:px-10 pt-6" style={{ maxWidth: "var(--content-w)", margin: "0 auto" }}>
          <time className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
            {new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })} · {PROFILE.name}
          </time>
          <h1 className="mt-3 text-[36px] sm:text-[64px] font-medium leading-[1.02] tracking-[-0.02em] max-w-[18ch]" style={{ fontFamily: "var(--font-display)" }}>
            {post.title}
          </h1>
          <p className="mt-6 text-[18px] sm:text-[20px] text-[var(--ivory-300)] leading-relaxed max-w-[56ch]">{post.dek}</p>

          <div className="mt-10 relative w-full overflow-hidden rounded-[4px]" style={{ aspectRatio: "16/9" }}>
            {/* eslint-disable-next-line @next/next/no-img-element -- real production still, self-hosted */}
            <img src={post.cover} alt={post.title} className="w-full h-full object-cover" />
          </div>

          <div className="mt-12 max-w-[62ch]">
            {post.sections.map((section, i) => (
              <section key={i} className="mb-14">
                {section.heading && (
                  <h2 className="text-[22px] sm:text-[26px] font-medium mb-5" style={{ fontFamily: "var(--font-display)" }}>
                    {section.heading}
                  </h2>
                )}
                {section.image && (
                  <figure className="mb-6 -mx-5 sm:mx-0">
                    {/* eslint-disable-next-line @next/next/no-img-element -- real production stills, self-hosted */}
                    <img src={section.image.src} alt={section.image.caption ?? ""} className="w-full object-cover rounded-[4px]" style={{ maxHeight: "480px" }} />
                    {section.image.caption && (
                      <figcaption className="mt-2 text-[12px] text-[var(--ivory-500)]">{section.image.caption}</figcaption>
                    )}
                  </figure>
                )}
                {section.paragraphs.map((para, j) => (
                  <p key={j} className="text-[17px] sm:text-[19px] leading-relaxed text-[var(--ivory-100)] mb-6">
                    {para}
                  </p>
                ))}
              </section>
            ))}
          </div>
        </article>

        <div className="px-5 sm:px-10 mt-20 py-16 border-t border-[var(--clay-line)]" style={{ maxWidth: "var(--content-w)", margin: "0 auto" }}>
          <Link href="/#work" className="text-[13px] font-medium text-[var(--ivory-300)] hover:text-[var(--accent)] transition-colors">
            ← Back to the directorial portfolio
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
