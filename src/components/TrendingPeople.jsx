import { useEffect, useState } from "react";

export default function TrendingPeople() {
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiKey = import.meta.env.VITE_TMDB_API_KEY;
    fetch(`https://api.themoviedb.org/3/trending/person/week?api_key=${apiKey}`)
      .then((res) => res.json())
      .then((data) => {
        setPeople(data.results || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch trending people:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="text-center py-10 text-gray-500">Loading trending people...</div>
    );
  }

  return (
    <section className="p-4">
      <h2 className="text-2xl font-semibold mb-6">Trending People</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-6">
        {people.map((person) => (
          <div
            key={person.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
            title={person.name}
          >
            {person.profile_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w300${person.profile_path}`}
                alt={person.name}
                className="w-full h-48 object-cover"
              />
            ) : (
              <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-gray-400">
                No Image
              </div>
            )}
            <div className="p-3">
              <h3 className="text-center font-medium text-gray-800 truncate">{person.name}</h3>
              <p className="text-center text-sm text-gray-500 mt-1">Known for: {person.known_for_department}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
