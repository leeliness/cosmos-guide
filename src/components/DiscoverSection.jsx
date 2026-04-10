import { ArrowRight, ExternalLink, BookOpen } from "lucide-react";

const discoveries = [
  {
    id: 1,
    title: "James Webb Space Telescope",
    description:
      "Launched in 2021, Webb peers back over 13.5 billion years to capture light from the universe's very first galaxies — images no human eye has ever seen before.",
    image:
      "https://science.nasa.gov/wp-content/uploads/2024/05/jwst_artist_concept_0.png?w=1041",
    tags: ["Infrared", "NASA", "Deep Field"],
    learnUrl: "https://webb.nasa.gov",
    sourceUrl: "https://en.wikipedia.org/wiki/James_Webb_Space_Telescope",
  },
  {
    id: 2,
    title: "Pillars of Creation",
    description:
      "Towering columns of gas and dust inside the Eagle Nebula, 6,500 light-years away. These cosmic pillars are stellar nurseries — new stars are being born inside them right now.",
    image:
      "https://assets.science.nasa.gov/dynamicimage/assets/science/missions/webb/science/2022/10/STScI-01GFNTMWWHDRP245V1A4D9HZ34.png?w=1280&h=720&fit=clip&crop=faces%2Cfocalpoint",
    tags: ["Nebula", "Hubble", "Star Formation"],
    learnUrl: "https://hubblesite.org",
    sourceUrl: "https://en.wikipedia.org/wiki/Pillars_of_Creation",
  },
  {
    id: 3,
    title: "Sagittarius A*",
    description:
      "The supermassive black hole at the center of our Milky Way, 4 million times the mass of our Sun. First imaged by the Event Horizon Telescope collaboration in 2022.",
    image: "https://www.nasa.gov/wp-content/uploads/2023/03/sgr_lg.jpg?w=864",
    tags: ["Black Hole", "EHT", "Milky Way"],
    learnUrl: "https://eventhorizontelescope.org",
    sourceUrl: "https://en.wikipedia.org/wiki/Sagittarius_A*",
  },
];

export const DiscoverSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Key <span className="text-primary">Discoveries</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Milestones that redefined our understanding of the cosmos — moments
          when humanity saw the universe with new eyes.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {discoveries.map((item) => (
            <div
              key={item.id}
              className="group bg-card rounded-xl overflow-hidden shadow-sm card-hover border border-border/50 flex flex-col"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-5 flex flex-col flex-1">
                <div className="flex flex-wrap gap-2 mb-3">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-xs font-medium border border-primary/30 rounded-full bg-primary/10 text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed flex-1">
                  {item.description}
                </p>
                <div className="flex items-center gap-3 mt-auto">
                  <a
                    href={item.learnUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-foreground/60 hover:text-primary transition-colors duration-300"
                  >
                    <ExternalLink size={18} />
                  </a>
                  <a
                    href={item.sourceUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-foreground/60 hover:text-primary transition-colors duration-300"
                  >
                    <BookOpen size={18} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noreferrer"
            href="https://nasa.gov"
          >
            Explore NASA <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};