// layout/RecommendedMovies.jsx
import { useEffect, useState, useRef } from 'react';
import Card from '../components/Card';
import CardSkeleton from '../components/CardSkeleton';
import { fetchData } from '../services/fetchData';

export default function RecommendedMovies({ genreIds = [] }) {
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const abortControllerRef = useRef(null);

  useEffect(() => {
    if (!genreIds || genreIds.length === 0) return;

    if (abortControllerRef.current) abortControllerRef.current.abort();
    abortControllerRef.current = new AbortController();

    async function getRecommendations() {
      setLoading(true);
      setError(false);
      try {
        // Ambil genre pertama sebagai filter sederhana
        const genre = genreIds[0];
        const data = await fetchData(`/discover/movie?with_genres=${genre}`, {
          signal: abortControllerRef.current.signal,
        });

        setRecommendations(data?.results?.slice(0, 10) || []); // Ambil 10 saja
      } catch (err) {
        if (err.name === 'AbortError') return;
        console.error(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    getRecommendations();

    return () => {
      if (abortControllerRef.current) abortControllerRef.current.abort();
    };
  }, [genreIds]);

  return (
    <section className="my-20 px-4 md:px-16">
      <h1 className="text-accent mb-8 text-2xl font-bold">
        You Might Also Like
      </h1>

      <div className="space-y-10">
        {/* Subjudul */}
        <p className="relative px-4 py-1 font-medium before:absolute before:top-0 before:left-0 before:bottom-0 before:w-1 before:bg-accent before:rounded-full">
          Recommended Based on This Title
        </p>

        {/* LIST REKOMENDASI */}
        <div className="no-scrollbar flex gap-4 items-start overflow-x-auto">
          {loading ? (
            <>
              <CardSkeleton />
              <CardSkeleton />
              <CardSkeleton />
            </>
          ) : error ? (
            <p className="text-gray-300">Failed to load recommendations</p>
          ) : recommendations.length > 0 ? (
            recommendations.map((movie) => <Card key={movie.id} data={movie} />)
          ) : (
            <p className="text-gray-300">No recommendations available</p>
          )}
        </div>
      </div>
    </section>
  );
}
