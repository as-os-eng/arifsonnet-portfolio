import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { FilmGrid } from "@/components/film-grid";
import { Services } from "@/components/services";
import { BrandCarousel } from "@/components/brand-carousel";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <FilmGrid />
      <Services />
      <BrandCarousel />
      <Contact />
      <Footer />
    </>
  );
}
