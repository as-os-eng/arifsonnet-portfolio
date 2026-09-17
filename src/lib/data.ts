// Real content pulled live from arifsonnet.com (2026-09-17) — project data,
// bio, email, and socials below are real. Two things still need manual
// input: per-service one-line descriptions (the live site only lists service
// names, no descriptions to pull) and brand-client logos (that section is a
// JS slider that never finished rendering during the pull — grab the real
// logo files from WordPress media library directly).

export type FilmCategory = "Commercial" | "Corporate Film" | "Documentary" | "Narrative Fiction";

export interface FilmProject {
  slug: string;
  title: string;
  category: FilmCategory;
  poster: string;
  videoUrl: string; // links to the real /works/ page on arifsonnet.com for now
}

export const FILM_PROJECTS: FilmProject[] = [
  {
    slug: "squad-up-with-the-legends",
    title: "Squad Up with The Legends! — OVC — PUBGM Bangladesh",
    category: "Commercial",
    poster: "https://arifsonnet.com/wp-content/uploads/2023/08/maxresdefault-1-jpg.webp",
    videoUrl: "https://arifsonnet.com/works/squad-up-with-the-legends-ii-ovc-ii-pubgm-bangladesh/",
  },
  {
    slug: "shopno-jabe-bari",
    title: "Shopno Jabe Bari — Documentary — Ekattor TV",
    category: "Documentary",
    poster: "https://arifsonnet.com/wp-content/uploads/2023/08/GHORE-FERAR-GAAN-DOCUMENTARY-FOR-71-TV-BY-ARIF-SONNET.jpg",
    videoUrl: "https://arifsonnet.com/works/shopno-jabe-bari-barir-maya-ii-documentary-ii-ekattor-media-ltd/",
  },
  {
    slug: "sfml-corporate-film",
    title: "Safe, Clean & Sustainable Business — SFML — Corporate Film",
    category: "Corporate Film",
    poster: "https://arifsonnet.com/wp-content/uploads/2023/09/MAKING-BUSINESS-SAFE-CLEAN-AND-SUSTAINABLE-SFML-CORPORATE-FILM-BY-ARIF-SONNET-1-jpg.webp",
    videoUrl: "https://arifsonnet.com/works/making-business-safe-clean-sustainable-s-f-m-l-corporate-film/",
  },
  {
    slug: "prem-puran",
    title: "Prem Puran — Short Film — Chorki",
    category: "Narrative Fiction",
    poster: "https://arifsonnet.com/wp-content/uploads/2023/01/prem-puran-1.jpg",
    videoUrl: "https://arifsonnet.com/works/prem-puran-ii-short-film-ii-chorki/",
  },
  {
    slug: "passion-for-precision",
    title: "Passion for Precision — Corporate Film — DBL Pharmaceuticals Ltd.",
    category: "Corporate Film",
    poster: "https://arifsonnet.com/wp-content/uploads/2023/09/PASSION-FOR-PRECISION-CORPORATE-FILM-DBL-PHARMA-BY-ARIF-SONNET.jpg",
    videoUrl: "https://arifsonnet.com/works/passion-for-precision-corporate-film-dbl-pharmaceuticals-ltd/",
  },
  {
    slug: "mentors-british-council",
    title: "Mentors' British Council IELTS Test Centre",
    category: "Commercial",
    poster: "https://arifsonnet.com/wp-content/uploads/2023/08/MENTORS-BRITISH-COUNCIL-IELTS-TEST-CENTRE-FOR-MENTORS-BY-ARIF-SONNET.jpg",
    videoUrl: "https://arifsonnet.com/works/mentors-british-council-ielts-test-centre-ii-mentors/",
  },
  {
    slug: "sustainable-denim",
    title: "Making Sustainable Denim — Corporate Film — Noize Jeans Ltd.",
    category: "Corporate Film",
    poster: "https://arifsonnet.com/wp-content/uploads/2023/09/MAKING-SUSTAINABLE-DENIM-NOIZE-JENS-CORPORATE-DOCUMENTARY-BY-ARIF-SONNET.jpg",
    videoUrl: "https://arifsonnet.com/works/making-sustainable-denim-corporate-film-noize-jeans-ltd/",
  },
  {
    slug: "joy-of-giving",
    title: "Joy of Giving — Spreading Happiness — OVC — HSBC Bank Bangladesh",
    category: "Documentary",
    poster: "https://arifsonnet.com/wp-content/uploads/2023/08/JOY-OF-GIVING-SPREADING-HAPPINESS-DOCUMENTARY-FOR-HSBC-BY-ARIF-SONNET.jpg",
    videoUrl: "https://arifsonnet.com/works/joy-of-giving-ii-spreading-happiness-ii-ovc-ii-hsbc-bank-bangladesh/",
  },
  {
    slug: "introducing-deligram",
    title: "Introducing Deligram — OVC — deligram.com",
    category: "Commercial",
    poster: "https://arifsonnet.com/wp-content/uploads/2023/08/INTRODUCING-DELIGRAM-OVC-FOR-DELIGRAM-BY-ARIF-SONNET.jpg",
    videoUrl: "https://arifsonnet.com/works/introducing-deligram-ii-ovc-ii-deligram-com/",
  },
];

export interface Service {
  title: string;
  description: string;
}

// Real service names from arifsonnet.com. The live site lists names only, no
// per-service description text — those one-liners below are still
// PLACEHOLDER and need your own words.
export const SERVICES: Service[] = [
  { title: "Documentary", description: "PLACEHOLDER — one line on how you approach documentary work." },
  { title: "Corporate Film", description: "PLACEHOLDER" },
  { title: "Commercial", description: "PLACEHOLDER" },
  { title: "Social Experiment", description: "PLACEHOLDER" },
  { title: "Post Event Movie", description: "PLACEHOLDER" },
  { title: "Narrative Fiction", description: "PLACEHOLDER" },
];

export interface BrandClient {
  name: string;
  logo: string;
}

// PLACEHOLDER — the live site's "Brand's Realm" carousel is a JS slider that
// never finished rendering during the content pull, so these logos couldn't
// be captured. Pull the real files from the WordPress media library instead.
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
  bio: "ARIF SONNET is a Bangladeshi Visual Storyteller who has been creating captivating stories for over a decade. He is a director, producer, and entrepreneur who has worked with prestigious organizations like the BBC, Ekattor TV, mvrk.tv, and major media outlets in Bangladesh. His work spans across various genres and formats, from documentaries to commercials, from short films to television shows.",
  email: "arifsonnet.pro@gmail.com",
  socials: {
    linkedin: "https://www.linkedin.com/in/arifsonnetst/",
    youtube: "https://www.youtube.com/@arifsonnet",
    instagram: "https://www.instagram.com/sonnet.babai/",
    facebook: "https://www.facebook.com/arif.sonnet.st",
    imdb: "https://www.imdb.com/name/nm10921118/",
  },
};
