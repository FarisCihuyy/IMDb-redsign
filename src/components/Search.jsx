import { useEffect, useState } from "react";

export default function Search() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const apiKey = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    if (query === "") {
      setResults([]);
      return;
    }

    const fetchSearch = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${apiKey}`
        );
        const data = await res.json();
        setResults(data.results || []);
      } catch (error) {
        console.error("Search error:", error);
      } finally {
        setLoading(false);
      }
    };

    const delay = setTimeout(fetchSearch, 500); 
    return () => clearTimeout(delay);
  }, [query]);

  return (
    <section className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Search Movie</h2>

      <input
        type="text"
        placeholder="Cari film..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full p-3 rounded bg-zinc-800 text-white mb-6 outline-none"
      />

      {loading && <p className="text-gray-400">Loading...</p>}

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
        {results.map((movie) => (
          <div key={movie.id} className="bg-zinc-900 rounded overflow-hidden">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
            <div className="p-2 text-sm text-white">
              {movie.title}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
