// Real content pulled live from arifsonnet.com (2026-09-17) — project data,
// bio, email, socials, brand logos (pulled via the WP REST media API), and
// service copy below are all real or originally authored for this site.

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
// per-service copy — descriptions below are original copy grounded in the
// real project roster above.
export const SERVICES: Service[] = [
  { title: "Documentary", description: "Long-form, character-led stories for broadcast and social impact — built with organizations like Ekattor TV, HSBC, and BRAC." },
  { title: "Corporate Film", description: "Process and people films that make a company's real work visible — for DBL Pharmaceuticals, Noize Jeans, and SFML." },
  { title: "Commercial", description: "Brand and OVC campaigns built for reach — from PUBG Mobile Bangladesh to Mentors' British Council and Deligram." },
  { title: "Social Experiment", description: "Unscripted, real-reaction formats designed to spark conversation and share." },
  { title: "Post Event Movie", description: "Recap films that turn a single day's footage into a story worth watching twice." },
  { title: "Narrative Fiction", description: "Short films built on character and craft — including Prem Puran, produced for Chorki." },
];

export interface BrandClient {
  name: string;
  logo: string;
}

// Real logo files, pulled directly from the WordPress REST media API
// (arifsonnet.com/wp-json/wp/v2/media) — the live "Brand's Realm" carousel
// itself never finished rendering during the content pull.
export const BRAND_CLIENTS: BrandClient[] = [
  { name: "Grameenphone", logo: "https://arifsonnet.com/wp-content/uploads/2022/12/client-logo-gp.png" },
  { name: "Robi Axiata", logo: "https://arifsonnet.com/wp-content/uploads/2022/12/client-logo-robi.png" },
  { name: "bKash", logo: "https://arifsonnet.com/wp-content/uploads/2022/12/client-logo-bkash.png" },
  { name: "HSBC", logo: "https://arifsonnet.com/wp-content/uploads/2022/12/client-logo-hsbc.png" },
  { name: "Unilever Bangladesh", logo: "https://arifsonnet.com/wp-content/uploads/2022/12/client-logo-unilever.png" },
  { name: "PUBG Mobile Bangladesh", logo: "https://arifsonnet.com/wp-content/uploads/2022/12/client-logo-pubg.png" },
  { name: "UNDP", logo: "https://arifsonnet.com/wp-content/uploads/2022/12/client-logo-undp.png" },
  { name: "Young Bangla", logo: "https://arifsonnet.com/wp-content/uploads/2022/12/client-logo-young-bangla.png" },
  { name: "DBL Group", logo: "https://arifsonnet.com/wp-content/uploads/2022/12/client-logo-dbll.png" },
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
