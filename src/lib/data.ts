// PLACEHOLDER content — mirrors the real site's category structure
// (arifsonnet.com: All / Animation / Corporate / Documentary / Narrative
// Fiction) so the grid/filter logic is real, but every title, video URL,
// and poster below needs to be replaced with actual project data.

export type FilmCategory = "Animation" | "Corporate" | "Documentary" | "Narrative Fiction";

export interface FilmProject {
  slug: string;
  title: string; // PLACEHOLDER — replace with real project title
  category: FilmCategory;
  year: string; // PLACEHOLDER
  poster: string; // PLACEHOLDER — real poster/still image path
  videoUrl?: string; // PLACEHOLDER — real YouTube/Vimeo embed or file
  client?: string; // PLACEHOLDER
}

export const FILM_PROJECTS: FilmProject[] = [
  { slug: "project-1", title: "Add your project title", category: "Narrative Fiction", year: "2026", poster: "/placeholder/poster-1.jpg" },
  { slug: "project-2", title: "Add your project title", category: "Corporate", year: "2026", poster: "/placeholder/poster-2.jpg" },
  { slug: "project-3", title: "Add your project title", category: "Documentary", year: "2026", poster: "/placeholder/poster-3.jpg" },
  { slug: "project-4", title: "Add your project title", category: "Animation", year: "2026", poster: "/placeholder/poster-4.jpg" },
  { slug: "project-5", title: "Add your project title", category: "Narrative Fiction", year: "2026", poster: "/placeholder/poster-5.jpg" },
  { slug: "project-6", title: "Add your project title", category: "Corporate", year: "2026", poster: "/placeholder/poster-6.jpg" },
];

export interface Service {
  title: string;
  description: string; // PLACEHOLDER
}

// Real service names from arifsonnet.com — copy still needs your own words.
export const SERVICES: Service[] = [
  { title: "Documentary", description: "PLACEHOLDER — one line on how you approach documentary work." },
  { title: "Corporate Film", description: "PLACEHOLDER" },
  { title: "Commercial", description: "PLACEHOLDER" },
  { title: "Social Experiment", description: "PLACEHOLDER" },
  { title: "Post Event Movie", description: "PLACEHOLDER" },
  { title: "Narrative Fiction", description: "PLACEHOLDER" },
];

export interface BrandClient {
  name: string; // PLACEHOLDER — real client/brand name
  logo: string; // PLACEHOLDER — real logo path
}

export const BRAND_CLIENTS: BrandClient[] = [
  { name: "Client name", logo: "/placeholder/logo-1.svg" },
  { name: "Client name", logo: "/placeholder/logo-2.svg" },
  { name: "Client name", logo: "/placeholder/logo-3.svg" },
  { name: "Client name", logo: "/placeholder/logo-4.svg" },
];

export const PROFILE = {
  name: "Arif Sonnet",
  role: "Visual Storyteller — Director & Producer",
  location: "Dhaka, Bangladesh",
  bio: "PLACEHOLDER — port your real bio paragraph from arifsonnet.com here.",
  email: "PLACEHOLDER@arifsonnet.com",
  socials: {
    linkedin: "https://linkedin.com/in/PLACEHOLDER",
    youtube: "https://youtube.com/@PLACEHOLDER",
    instagram: "https://instagram.com/PLACEHOLDER",
    facebook: "https://facebook.com/PLACEHOLDER",
  },
};
