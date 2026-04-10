import { useEffect, useState } from "react";
import { ExternalLink, X } from "lucide-react";

const NASA_API_KEY = "DEMO_KEY";
const COUNT = 6;

export const GallerySection = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}&count=${COUNT}`)
      .then((res) => res.json())
      .then((data) => {
        const images = data.filter((item) => item.media_type === "image");
        setPhotos(images);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <section id="gallery" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Cosmic <span className="text-primary">Gallery</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Real photographs from NASA's Astronomy Picture of the Day. Click any
          image to learn more about what you're seeing.
        </p>

        {loading ? (
          <div className="flex flex-col justify-center items-center h-64 gap-4">
            <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
            <p className="text-muted-foreground text-sm tracking-widest animate-pulse">
              Loading from deep space...
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {photos.map((photo, key) => (
              <div
                key={key}
                className="group bg-card rounded-xl overflow-hidden shadow-sm card-hover cursor-pointer border border-border/50"
                onClick={() => setSelected(photo)}
              >
                <div className="h-52 overflow-hidden relative">
                  <img
                    src={photo.url}
                    alt={photo.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white text-xs">Click to explore →</span>
                  </div>
                </div>
                <div className="p-4 text-left">
                  <h3 className="font-semibold text-sm leading-snug line-clamp-1">
                    {photo.title}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1">{photo.date}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Modal */}
        {selected && (
          <div
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <div
              className="bg-card rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl border border-border/50"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={selected.url}
                  alt={selected.title}
                  className="w-full max-h-80 object-cover"
                />
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-3 right-3 p-1.5 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                >
                  <X size={16} />
                </button>
              </div>
              <div className="p-6 text-left">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-bold text-lg leading-snug">{selected.title}</h3>
                  <span className="text-xs text-muted-foreground ml-4 shrink-0 mt-1">
                    {selected.date}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-4">
                  {selected.explanation}
                </p>
                <a
                  href={selected.hdurl || selected.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-primary text-sm hover:underline mt-4"
                >
                  <ExternalLink size={14} /> View full resolution
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};