import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <p className="text-xs uppercase tracking-[0.4em] text-primary/80 opacity-0 animate-fade-in font-medium">
            — The Universe Awaits —
          </p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
            <span className="opacity-0 animate-fade-in block">We Are</span>
            <span className="text-gradient opacity-0 animate-fade-in-delay-1 block">
              Made of Stars
            </span>
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto opacity-0 animate-fade-in-delay-3 leading-relaxed">
            Every atom in your body was forged in the heart of a dying star.
            Explore the cosmos — from nebulae and black holes to distant
            galaxies billions of light-years away.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#about" className="cosmic-button">
              Begin Exploring
            </a>
            <a
              href="#gallery"
              className="px-6 py-2 rounded-full border border-primary/50 text-primary hover:bg-primary/10 transition-colors duration-300"
            >
              View Gallery
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-xs text-muted-foreground mb-2 tracking-widest uppercase">Scroll</span>
        <ArrowDown className="h-4 w-4 text-primary" />
      </div>
    </section>
  );
};