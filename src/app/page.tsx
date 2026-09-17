import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { BrandCarousel } from "@/components/brand-carousel";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <BrandCarousel />
      <Contact />
      <Footer />
    </>
  );
}
