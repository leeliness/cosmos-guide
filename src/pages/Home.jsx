import { StarBackground } from "@/components/StarBackground";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { GallerySection } from "../components/GallerySection";
import { DiscoverSection } from "../components/DiscoverSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";


export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <StarBackground />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <GallerySection />
        <DiscoverSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};