// Real content pulled live from arifsonnet.com (2026-09-17) — project data,
// bio, email, socials, brand logos (pulled via the WP REST media API), and
// service copy below are all real or originally authored for this site.

export type FilmCategory = "Commercial" | "Corporate Film" | "Documentary" | "Narrative Fiction";

export interface Credit {
  role: string;
  name: string;
}

export interface FilmProject {
  slug: string;
  title: string;
  category: FilmCategory;
  client: string;
  poster: string;
  youtubeId: string;
  synopsis: string;
  credits: Credit[];
}

// Synopsis and credits are real, pulled and hand-cleaned from each project's
// arifsonnet.com /works/ page (2026-09-17) — that WordPress site is slated
// for removal once this site ships, so this is the last live pull from it.
export const FILM_PROJECTS: FilmProject[] = [
  {
    slug: "squad-up-with-the-legends",
    title: "Squad Up with The Legends!",
    category: "Commercial",
    client: "PUBG Mobile Bangladesh",
    poster: "/images/work/squad-up-with-the-legends.webp",
    youtubeId: "19gVLcBzyss",
    synopsis: "An adrenaline-pumping PUBG Mobile commercial built around the heart of battle-royale excitement — stunning visuals, heart-pounding moments, and tactical gameplay showcasing the true essence of PUBG.",
    credits: [
      { role: "Director", name: "Arif Sonnet" },
      { role: "Producer", name: "Ami Sayeed" },
      { role: "Cinematographer", name: "L C Rafiq" },
      { role: "Editor", name: "Alif Islam Mukut" },
      { role: "Studio", name: "MVRK Studios Ltd" },
    ],
  },
  {
    slug: "shopno-jabe-bari",
    title: "Shopno Jabe Bari",
    category: "Documentary",
    client: "Ekattor TV",
    poster: "/images/work/shopno-jabe-bari.jpg",
    youtubeId: "L3kdQ0sKeYk",
    synopsis: "A captivating documentary for Ekattor TV that delves into the dreams and aspirations of individuals and their relentless pursuit of a better life — a journey through hope, resilience, and the human spirit.",
    credits: [
      { role: "Director", name: "Arif Sonnet" },
      { role: "Cinematographer", name: "Robin Gazi" },
      { role: "Editor", name: "Arefin Badal Mamun" },
      { role: "Line Producer", name: "Sayed Konok" },
      { role: "Produced by", name: "Ekattor Television" },
    ],
  },
  {
    slug: "sfml-corporate-film",
    title: "Safe, Clean & Sustainable Business",
    category: "Corporate Film",
    client: "Sublime Facilities Management Ltd.",
    poster: "/images/work/sfml-corporate-film.webp",
    youtubeId: "oOPP7VVra98",
    synopsis: "Exploring the world of Facilities Management in Bangladesh — the key principles of a top-notch facilities management company, and how they align with a commitment to quality, professionalism, and respect for all.",
    credits: [
      { role: "Director", name: "Arif Sonnet" },
      { role: "Cinematographer", name: "Anowar Hossain" },
      { role: "Editor", name: "Alif Islam Mukut" },
      { role: "Line Producer", name: "Sayed Konok" },
      { role: "Studio", name: "MVRK Studios Ltd" },
    ],
  },
  {
    slug: "prem-puran",
    title: "Prem Puran",
    category: "Narrative Fiction",
    client: "Chorki",
    poster: "/images/work/prem-puran.jpg",
    youtubeId: "bTJmG2hXvhY",
    synopsis: "A heartwarming short film — Shanu, a young woman from a life of privilege, follows her heart and her love for the idealistic Tajul, abandoning her opulent lifestyle to build a new reality with him.",
    credits: [
      { role: "Director", name: "Zahid Gogon" },
      { role: "Producer", name: "Arif Sonnet" },
      { role: "DOP", name: "Kamrul Hasan Khosru" },
      { role: "Production", name: "Filmmistri Production" },
      { role: "Release", name: "Chorki, Lagvelki" },
    ],
  },
  {
    slug: "passion-for-precision",
    title: "Passion for Precision",
    category: "Corporate Film",
    client: "DBL Pharmaceuticals Ltd.",
    poster: "/images/work/passion-for-precision.webp",
    youtubeId: "9VHKHVPkso0",
    synopsis: "DBL Pharma, a rising star in Bangladesh's pharmaceutical industry, on its mission for healthier living through precision manufacturing and quality control — meeting first-world regulatory standards on the path to becoming a trusted global pharmaceutical company.",
    credits: [
      { role: "Director", name: "Arif Sonnet" },
      { role: "Producer", name: "Ami Sayeed" },
      { role: "Cinematographer", name: "Saddat Hossain" },
      { role: "Editor", name: "Alif Islam Mukut" },
      { role: "Studio", name: "MVRK Studios Ltd" },
    ],
  },
  {
    slug: "mentors-british-council",
    title: "Mentors' British Council IELTS Test Centre",
    category: "Commercial",
    client: "Mentors'",
    poster: "/images/work/mentors-british-council.jpg",
    youtubeId: "RTzgHxNNFX0",
    synopsis: "Mentors' British Council IELTS Test Centre — a dedicated destination for IELTS excellence, with personalized training and expert guidance from experienced instructors in a nurturing environment.",
    credits: [
      { role: "Direction", name: "Arif Sonnet" },
      { role: "Producer", name: "Ami Sayeed" },
      { role: "Cinematographer", name: "Robin Gazi" },
      { role: "Project Manager", name: "Ireen Akter Elora" },
      { role: "Production Manager", name: "Md Ershad Khan" },
    ],
  },
  {
    slug: "sustainable-denim",
    title: "Making Sustainable Denim",
    category: "Corporate Film",
    client: "Noize Jeans Ltd. — Denim Asia",
    poster: "/images/work/sustainable-denim.jpg",
    youtubeId: "zYYQlcwMjvs",
    synopsis: "The success story of Noize, a trailblazing supply-chain partner in fast fashion and value retailing — product development, sourcing, and sustainable production processes told through the synergy of business innovation and creative storytelling.",
    credits: [
      { role: "Director", name: "Arif Sonnet" },
      { role: "Cinematographer", name: "Anuwar Anu" },
      { role: "Editor", name: "Uday Hasan" },
      { role: "Line Producer", name: "Sayed Konok" },
      { role: "Studio", name: "MVRK Studios Ltd" },
    ],
  },
  {
    slug: "joy-of-giving",
    title: "Joy of Giving — Spreading Happiness",
    category: "Documentary",
    client: "HSBC Bank Bangladesh",
    poster: "/images/work/joy-of-giving.jpg",
    youtubeId: "2BUuCgUJnXw",
    synopsis: "A heartwarming OVC for HSBC Bank Bangladesh celebrating the beauty of spreading happiness — a reminder that even small acts of generosity and compassion can create ripples of joy that touch lives.",
    credits: [
      { role: "Director", name: "Arif Sonnet" },
      { role: "Producer", name: "Ami Sayeed" },
      { role: "Cinematographer", name: "Saddat Hossain" },
      { role: "Narration", name: "Raisul Islam Asad" },
      { role: "Studio", name: "MVRK Studios Ltd" },
    ],
  },
  {
    slug: "introducing-deligram",
    title: "Introducing Deligram",
    category: "Commercial",
    client: "Deligram Technologies Limited",
    poster: "/images/work/introducing-deligram.jpg",
    youtubeId: "ovHhVq-yDFc",
    synopsis: "A visually stunning OVC introducing Deligram.com — how the platform is revolutionizing online shopping across groceries, fashion, electronics, and home essentials.",
    credits: [
      { role: "Director", name: "Arif Sonnet" },
      { role: "Producer", name: "Ami Sayeed" },
      { role: "Cinematographer", name: "Rajin Munir" },
      { role: "Assistant Director", name: "Nazmul Hasan Hira" },
      { role: "Studio", name: "MVRK Studios Ltd" },
    ],
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

// Real logo files, pulled from the WordPress REST media API and self-hosted
// here — arifsonnet.com is slated for removal, so nothing on this site can
// depend on it staying up.
export const BRAND_CLIENTS: BrandClient[] = [
  { name: "Grameenphone", logo: "/images/brands/grameenphone.png" },
  { name: "Robi Axiata", logo: "/images/brands/robi.png" },
  { name: "bKash", logo: "/images/brands/bkash.png" },
  { name: "HSBC", logo: "/images/brands/hsbc.png" },
  { name: "Unilever Bangladesh", logo: "/images/brands/unilever.png" },
  { name: "PUBG Mobile Bangladesh", logo: "/images/brands/pubg.png" },
  { name: "UNDP", logo: "/images/brands/undp.png" },
  { name: "Young Bangla", logo: "/images/brands/young-bangla.png" },
  { name: "DBL Group", logo: "/images/brands/dbl-group.png" },
];

export interface FrameStill {
  src: string;
  caption: string;
}

// Real production stills — pulled from the same WordPress media library as
// everything else, alt text lightly cleaned for grammar but the facts
// (project, client, subject) are exactly what's in the source. This is the
// only real "frame"/BTS photography currently available; the real
// filmgrab-style archive Arif is building will replace/extend this.
export const FRAME_STILLS: FrameStill[] = [
  { src: "/images/frame/iambrac-nilphamari.jpg", caption: "Aerial view of a Bangladeshi village — I Am BRAC (BRAC documentary series)" },
  { src: "/images/frame/iambrac-sylhet.jpg", caption: "A foggy morning over open village fields — I Am BRAC, Sylhet" },
  { src: "/images/frame/iambrac-activist.jpg", caption: "On location near Dhaka University's sculpture grounds — I Am BRAC: The Activist" },
  { src: "/images/frame/jibika-01.jpg", caption: "A child on camera — BRAC Jibika program documentary" },
  { src: "/images/frame/jibika-03.jpg", caption: "A mother and daughter at their village home — BRAC Jibika program" },
  { src: "/images/frame/bkash-01.jpg", caption: "A construction worker in safety gear — bKash commercial" },
  { src: "/images/frame/bkash-05.jpg", caption: "A village woman with her cow — bKash commercial" },
  { src: "/images/frame/dbl-ceramic-01.jpg", caption: "A worker in safety gear heading to the production floor — DBL Ceramic corporate film" },
  { src: "/images/frame/dbl-ceramic-04.jpg", caption: "On the factory floor — DBL Ceramic corporate film" },
  { src: "/images/frame/nagad-01.jpg", caption: "A village housewife — Nagad micro-finance commercial" },
  { src: "/images/frame/nagad-03.jpg", caption: "The postal runner (Dak Harkara) on his village route — Nagad commercial" },
  { src: "/images/frame/runner-auto-01.jpg", caption: "Inside a Runner Automobiles heavy-industry plant" },
  { src: "/images/frame/prothom-alo-01.jpg", caption: "Commuters reading Prothom Alo at a railway station" },
  { src: "/images/frame/isd-01.jpg", caption: "A schoolgirl on camera — ISD school commercial" },
  { src: "/images/frame/tarasima-01.jpg", caption: "Miran Ali, Managing Director, on location — Tarasima Apparels, RMG sector" },
  { src: "/images/frame/dhaka-drone-01.jpg", caption: "Aerial view over densely populated Dhaka" },
  { src: "/images/frame/voice-of-masculinity.jpg", caption: "On location for the documentary Voice of Masculinity in Bangladesh" },
  { src: "/images/frame/pubg-bts.webp", caption: "Behind the scenes — PUBG Mobile Bangladesh commercial" },
];

export interface JournalSection {
  heading?: string;
  paragraphs: string[];
  image?: { src: string; caption?: string };
}

export interface JournalPost {
  slug: string;
  title: string;
  dek: string;
  date: string; // ISO
  cover: string;
  sections: JournalSection[];
}

// Editorial "Journal" section — same long-form anatomy as the reference
// article (zoomcorp.com's creator-interview posts): cover image, dek,
// dated byline, body copy. This first entry is a craft reflection I
// (Claude) drafted grounded only in verified facts already pulled from
// arifsonnet.com — real client names, real project genres, real
// duration of the body of work — with no invented anecdotes, dialogue,
// or quotes put in Arif's mouth. Treat it as a first draft to edit into
// his own voice, not a transcript of anything he actually said.
export const JOURNAL_POSTS: JournalPost[] = [
  {
    slug: "directing-for-broadcast-and-brand",
    title: "Directing for Broadcast and Brand",
    dek: "A decade moving between documentary, corporate film, and commercial work — on why the discipline doesn't change, even when the client does.",
    date: "2026-09-17",
    cover: "/images/work/joy-of-giving.jpg",
    sections: [
      {
        heading: "Three rooms, one job",
        paragraphs: [
          "Most of the work that crosses my desk falls into one of three rooms: a broadcaster's, a boardroom's, or a brand's. Ekattor TV wants a documentary that finds the human story inside a policy issue. DBL Pharmaceuticals and Sublime Facilities Management want a corporate film that makes an invisible process — manufacturing, facilities management — visible and credible. HSBC and PUBG Mobile Bangladesh want a commercial that lands a feeling in under two minutes. Different rooms, different clients, same job: find the one true thing worth pointing a camera at, and don't flinch from it.",
        ],
      },
      {
        image: { src: "/images/frame/jibika-01.jpg", caption: "A child on camera — BRAC Jibika program documentary" },
        paragraphs: [
          "The instinct to treat these as separate disciplines is common, and I think it's a mistake. A documentary that doesn't understand pacing loses its audience the same way a commercial does. A corporate film that doesn't find a real character — a technician, a line manager, a farmer — is just a slideshow with better lighting. The tools change: a 35-minute short film like Prem Puran, produced for Chorki, earns the right to sit with a scene the way a 60-second OVC never can. But the underlying question is identical in every format: who is this actually about, and what do they want that they can't say out loud.",
        ],
      },
      {
        heading: "What's actually changed",
        image: { src: "/images/frame/dbl-ceramic-04.jpg", caption: "On the factory floor — DBL Ceramic corporate film" },
        paragraphs: [
          "What's changed over ten years isn't the craft, it's the range of rooms I get invited into. Ekattor Television, HSBC Bank Bangladesh, DBL Pharmaceuticals, Noize Jeans, Sublime Facilities Management, Mentors' British Council, Deligram, Chorki — every one of these came with its own constraints, its own audience, its own idea of what \"good\" looks like. Directing across that range means holding two things at once: a house style you can be recognized by, and enough humility to let each client's real story shape the film instead of the other way around.",
        ],
      },
    ],
  },
];

// Bio paragraphs, the pull-quote, and the footer tagline below are pulled
// directly from arifsonnet.com/bio/ and arifsonnet.com's footer widget
// (2026-09-17) — real text from the old site, not new copy.
export const PROFILE = {
  name: "Arif Sonnet",
  role: "Visual Storyteller — Director & Producer",
  location: "Dhaka, Bangladesh",
  bio: "ARIF SONNET is a Bangladeshi Visual Storyteller who has been creating captivating stories for over a decade. He is a director, producer, and entrepreneur who has worked with prestigious organizations like the BBC, Ekattor TV, mvrk.tv, and major media outlets in Bangladesh. His work spans across various genres and formats, from documentaries to commercials, from short films to television shows.",
  quote: "For me, it's all about capturing moment and sharing beautiful cinematic experiences that resonate life.",
  footerTagline: "Let's create the Magic of Visual Storytelling with ARIF SONNET and transform the Dreams into Cinematic Realities.",
  bioParagraphs: [
    "ARIF SONNET is a Bangladeshi Visual Storyteller who has been creating captivating stories for over a decade. He is a director, producer, and entrepreneur who has worked with prestigious organizations like the BBC, Ekattor TV, mvrk.tv and major media outlets in Bangladesh. His work spans across various genres and formats, from documentaries to commercials, from short films to television shows.",
    "In 2019, Arif Sonnet produced the short film “Prem Puran AKA Myth of Love,” which gained recognition and accolades at prestigious international film festivals, further solidifying his position as a talented and innovative filmmaker.",
    "Arif Sonnet's expertise extends to documentary filmmaking, showcased through collaborations with renowned organizations like the BBC. Notable works include the documentaries “Indian Frontier Railway: Maitree Express” in 2015 and “Janmashtami AKA Born Together” in 2016, the latter earning the esteemed National Award for its portrayal of a liberation war story.",
    "Throughout his career, Arif Sonnet has collaborated with prominent media outlets such as Ekattor TV, The Daily Star, The Daily Jugantor, Filmshop, and Geonics, showcasing his talents and contributing to the growth of the Bangladeshi entertainment industry.",
    "Arif Sonnet possesses extensive experience in various aspects of filmmaking, including directing, cinematography, and editing. He has worked across different genres, from narrative fiction to documentaries, commercials, and corporate films. He has successfully collaborated with both local brands and esteemed corporate clients, including UNDP, UNHCR, HSBC, Robi Axiata, Grameenphone, The City Bank, FBCCI, BRAC, Urmi Group, and DBL Group.",
  ],
  email: "arifsonnet.pro@gmail.com",
  socials: {
    linkedin: "https://www.linkedin.com/in/arifsonnetst/",
    youtube: "https://www.youtube.com/@arifsonnet",
    instagram: "https://www.instagram.com/sonnet.babai/",
    facebook: "https://www.facebook.com/arif.sonnet.st",
    imdb: "https://www.imdb.com/name/nm10921118/",
  },
};
