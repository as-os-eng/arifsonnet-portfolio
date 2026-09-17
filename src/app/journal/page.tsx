import Link from "next/link";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { JOURNAL_POSTS } from "@/lib/data";

export const metadata = { title: "Journal — Arif Sonnet" };

export default function JournalIndex() {
  return (
    <>
      <Nav />
      <main className="rise-in px-5 sm:px-10 pt-16 pb-24" style={{ maxWidth: "var(--content-w)", margin: "0 auto" }}>
        <span className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">Journal</span>
        <h1 className="mt-3 text-[44px] sm:text-[72px] font-medium leading-[0.98] tracking-[-0.02em] max-w-[16ch]" style={{ fontFamily: "var(--font-display)" }}>
          Notes on the craft.
        </h1>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-14">
          {JOURNAL_POSTS.map((post) => (
            <Link key={post.slug} href={`/journal/${post.slug}`} target="_blank" rel="noopener noreferrer" className="group block">
              <div className="relative overflow-hidden" style={{ aspectRatio: "16/10" }}>
                {/* eslint-disable-next-line @next/next/no-img-element -- real project still, self-hosted */}
                <img src={post.cover} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
              </div>
              <time className="mt-4 block text-[12px] uppercase tracking-wide text-[var(--ivory-500)]">
                {new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
              </time>
              <h2 className="mt-2 text-[24px] sm:text-[28px] font-medium leading-snug" style={{ fontFamily: "var(--font-display)" }}>
                {post.title}
              </h2>
              <p className="mt-2 text-[14px] text-[var(--ivory-300)] leading-relaxed max-w-[52ch]">{post.dek}</p>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
