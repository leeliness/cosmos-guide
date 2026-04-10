import { Zap, Eye, Orbit } from "lucide-react";

const facts = [
  {
    icon: Zap,
    title: "Stars & Supernovae",
    description:
      "Over 100 billion stars populate our Milky Way alone. When the largest ones die, they explode with the energy of an entire galaxy.",
  },
  {
    icon: Eye,
    title: "Looking Back in Time",
    description:
      "Every time you look at a star, you're seeing the past. Light from the Andromeda galaxy takes 2.5 million years to reach your eyes.",
  },
  {
    icon: Orbit,
    title: "Exoplanets & Life",
    description:
      "Over 5,500 exoplanets have been confirmed beyond our solar system. Some orbit in the 'habitable zone' — where liquid water could exist.",
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          The <span className="text-primary">Universe</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          13.8 billion years of history stretching across 93 billion light-years —
          and we've only just begun to understand it.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6 text-left">
            <h3 className="text-2xl font-semibold leading-snug">
              You Are Stardust, <br />
              <span className="text-primary">Gazing at the Stars</span>
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              The carbon in your bones, the iron in your blood, the oxygen you
              breathe — all forged inside stars that lived and died billions of
              years before Earth existed.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              This site is a journey through the cosmos — from the first light
              after the Big Bang to the telescopes that now peer at the edge of
              the observable universe.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a href="#gallery" className="cosmic-button">
                View Gallery
              </a>
              <a
                href="#projects"
                className="px-6 py-2 rounded-full border border-primary/50 text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Key Discoveries
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5">
            {facts.map(({ icon: Icon, title, description }, key) => (
              <div key={key} className="gradient-border p-5 card-hover text-left">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 shrink-0">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};