import type { MetadataRoute } from "next";
import { FILM_PROJECTS, JOURNAL_POSTS } from "@/lib/data";

// No custom domain yet — this is the real live Cloudflare Workers URL.
// Update once arifsonnet.com points here.
const BASE_URL = "https://arifsonnet-portfolio.arifsonnet-webid.workers.dev";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/film", "/documentary", "/commercial", "/frame", "/journal", "/about", "/contact"].map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
  }));

  const workRoutes = FILM_PROJECTS.map((p) => ({
    url: `${BASE_URL}/work/${p.slug}`,
    lastModified: new Date(),
  }));

  const journalRoutes = JOURNAL_POSTS.map((p) => ({
    url: `${BASE_URL}/journal/${p.slug}`,
    lastModified: new Date(p.date),
  }));

  return [...staticRoutes, ...workRoutes, ...journalRoutes];
}
