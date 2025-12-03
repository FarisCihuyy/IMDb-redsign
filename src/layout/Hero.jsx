import React, { useEffect, useState } from "react";
import { fetchData } from "../services/fetchData";
import GenreBadge from "../components/GenreBadge";
import Carousel from "../components/Carousel";

const Hero = () => {
  const [trending, setTrending] = useState([]);
  const [loading, setLoading] = useState(true); // ⬅️ Tambah loading state
  const [error, setError] = useState(false); // ⬅️ Tambah error state

  useEffect(() => {
    async function getTrending() {
      try {
        const data = await fetchData("/trending/all/week");

        const slicedData = data?.results.slice(0, 5);
        setTrending(slicedData);
      } catch (err) {
        console.error(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    getTrending();
  }, []);

  return (
    <section className="h-screen relative">
      {loading && (
        <div className="flex items-center justify-center h-full">
          <p className="text-gray-300">Loading...</p>
        </div>
      )}

      {!loading && !error && trending.length > 0 && (
        <Carousel items={trending} />
      )}

      {!loading && error && (
        <div className="flex items-center w-full h-full px-12 bg-[url('/assets/images/banner.png')] bg-cover overflow-hidden">
          <div className="relative z-10 space-y-6 max-w-md">
            <h1 className="font-bold text-5xl">Dune: Part Two</h1>

            <div className="flex gap-2.5 text-xs">
              <GenreBadge genres={["Action", "Adventure", "Drama"]} />
            </div>

            <p className="text-sm">
              Paul Atreides unites with Chani and the Fremen while seeking
              revenge against the conspirators who destroyed his family.
            </p>

            <h3 className="font-bold text-sm">In Theaters</h3>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
