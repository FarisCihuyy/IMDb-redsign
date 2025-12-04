import { useEffect, useRef, useState } from "react";
import GenreBadge from "./GenreBadge";
import { getGenres } from "../utils/getGenres";

export default function Carousel({ items = ["Item 1", "Item 2", "Item 3"] }) {
  const [index, setIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const trackRef = useRef(null);

  // Extended array: [last, ...items, first]
  const extended = [items[items.length - 1], ...items, items[0]];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setIndex((prev) => prev + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Handle infinite loop (jump tanpa animasi)
  useEffect(() => {
    if (!isTransitioning) return;

    const timer = setTimeout(() => {
      // Jika di clone kanan (index terakhir)
      if (index === extended.length - 1) {
        setIsTransitioning(false);
        setIndex(1);
      }
      // Jika di clone kiri (index 0)
      else if (index === 0) {
        setIsTransitioning(false);
        setIndex(items.length);
      }
    }, 700); // Sesuai durasi transition

    return () => clearTimeout(timer);
  }, [index, isTransitioning, extended.length, items.length]);

  // Hitung index dots yang aktif
  const getActiveDot = () => {
    if (index === 0) return items.length - 1; // clone kiri = item terakhir
    if (index === extended.length - 1) return 0; // clone kanan = item pertama
    return index - 1; // index asli
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* TRACK CONTAINER - Transform ditaruh di sini */}
      <div
        ref={trackRef}
        className={`flex h-full ${
          isTransitioning ? "transition-transform duration-700 ease-in-out" : ""
        }`}
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {/* SLIDES - Jangan taruh transform di sini */}
        {extended.map((item, i) => {
          const genres = getGenres(
            item.genre_ids,
            item.media_type === "movie" ? "movie" : "tv"
          );

          return (
            <div
              key={i}
              className="relative flex items-center w-full h-full px-12 bg-cover bg-center flex-shrink-0"
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
              }}
            >
              {/* Gradient overlays untuk fade effect */}
              <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black via-black/60 to-transparent pointer-events-none"></div>
              <div className="absolute left-0 top-0 w-1/2 h-full bg-gradient-to-r from-black/90 via-black/50 to-transparent pointer-events-none"></div>

              {/* Content */}
              <div className="relative z-10 space-y-6 max-w-md">
                <h1 className="font-bold text-5xl text-white drop-shadow-2xl">
                  {item.title ||
                    item.original_title ||
                    item.original_name ||
                    item.name}
                </h1>
                <div className="flex gap-2.5 text-xs">
                  <GenreBadge genres={genres} />
                </div>
                <p className="text-sm text-white/95 leading-relaxed drop-shadow-lg">
                  {item.overview ||
                    "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family."}
                </p>
                <h3 className="uppercase font-bold text-sm text-white/90">
                  {item.media_type}
                </h3>
              </div>
            </div>
          );
        })}
      </div>

      {/* DOTS INDICATOR */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 bg-[#25252578] px-4 py-2 rounded-full">
        {items.map((_, i) => (
          <div
            key={i}
            className={`rounded-full transition-all duration-300 ${
              getActiveDot() === i ? "bg-white size-2" : "bg-white/40 size-2"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
