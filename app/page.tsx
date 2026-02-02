import Hero from "@/components/Hero";
import About from "@/components/About";
import GalleryPreview from "@/components/GalleryPreview";
import BooksSection from "@/components/BooksSection";
import ShadowWorkIntro from "@/components/ShadowWorkIntro";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <GalleryPreview />
      <BooksSection />
      <ShadowWorkIntro />
      <Testimonials />
      <Newsletter />
      <Footer />
    </main>
  );
}
