import { useParams, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchData } from '../services/fetchData';
import { BookmarkIcon } from '@heroicons/react/16/solid';
import Rekomendasi from './Rekomendasi';
import { useWatchlist } from '../context/WatchlistContext';

// Rating Stars
const RatingStars = ({ score }) => {
  const fullStars = Math.round(score);
  const stars = Array(5)
    .fill(0)
    .map((_, index) => (
      <span
        key={index}
        className={`text-xl ${
          index < fullStars ? 'text-yellow-500' : 'text-gray-400'
        }`}
      >
        ★
      </span>
    ));
  return <div className="flex">{stars}</div>;
};

export default function MovieDetail() {
  const { media_type: type, id } = useParams();

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getDetail() {
      setLoading(true);
      setError(false);
      try {
        const result = await fetchData(`/${type}/${id}`);
        setData(result);
      } catch (err) {
        console.error('Error fetching detail:', err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getDetail();
  }, [id, type]);

  if (loading)
    return <h1 className="text-center text-white mt-20">Loading...</h1>;
  if (error || !data)
    return (
      <h1 className="text-center text-white mt-20">Detail not available</h1>
    );

  const {
    title,
    name,
    overview,
    backdrop_path,
    poster_path,
    vote_average,
    release_date,
    first_air_date,
    runtime,
    episode_run_time,
    genres,
    status,
    budget,
    revenue,
    original_language,
  } = data;

  const displayTitle = title || name;
  const displayDate = release_date || first_air_date;
  const displayRuntime =
    runtime || (episode_run_time && episode_run_time[0]) || 'N/A';

  const { watchlist, addToWatchlist, removeFromWatchlist } = useWatchlist();
  const isBookmarked = watchlist.some((movie) => movie.id === data.id);

  const handleBookmark = () => {
    if (bookmarked) {
      removeFromWatchlist(id);
    } else {
      addToWatchlist({
        id,
        title: displayTitle,
        poster_path: poster_path, // ← WAJIB
        vote_average,
        release_date,
        first_air_date,
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      {/* Banner + Poster */}
      <div className="relative">
        {/* Backdrop */}
        {backdrop_path && (
          <div
            className="w-full h-[550px] md:h-[600px] bg-cover relative"
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/original${backdrop_path})`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
          </div>
        )}

        {/* Info utama di backdrop */}
        <div className="absolute inset-x-0 bottom-0 max-w-7xl mx-auto px-8 md:px-12 flex flex-col md:flex-row items-end gap-6 -translate-y-0 md:-translate-y-0">
          {/* Poster */}
          {poster_path && (
            <div className="w-full md:w-1/4 lg:w-1/5 flex-shrink-0">
              <img
                src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                alt={`${displayTitle} Poster`}
                className="w-full rounded-lg shadow-2xl object-cover"
              />
            </div>
          )}

          {/* Info utama: judul, rating, genre */}
          <div className="md:flex-grow md:pl-4 text-white">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-1">
              {displayTitle}
            </h1>
            <div className="flex items-center space-x-6 text-sm text-gray-300 mb-4">
              {vote_average && (
                <div className="flex items-center">
                  <RatingStars score={vote_average / 2} />
                  <span className="ml-2">({vote_average})</span>
                </div>
              )}
              <span>| Release: {displayDate}</span>
              <span>| Runtime: {displayRuntime} mins</span>
            </div>
            <div className="flex space-x-2 mb-6">
              {genres?.map((genre) => (
                <span
                  key={genre.id}
                  className="px-3 py-1 text-xs font-semibold rounded-full bg-gray-700 hover:bg-gray-600 transition cursor-pointer"
                >
                  {genre.name}
                </span>
              ))}
            </div>
            <button
              onClick={() =>
                isBookmarked
                  ? removeFromWatchlist(data.id)
                  : addToWatchlist({
                      id: data.id,
                      title: displayTitle,
                      poster_path,
                      vote_average,
                      release_date,
                      first_air_date,
                    })
              }
              className={`px-4 py-2 rounded-lg font-medium transition
    ${
      isBookmarked
        ? 'bg-yellow-400 text-black hover:bg-yellow-300'
        : 'bg-gray-700 text-white hover:bg-gray-600'
    }`}
            >
              {isBookmarked ? 'Saved to Watchlist' : 'Add to Watchlist'}
            </button>
          </div>
        </div>
      </div>

      {/* Konten bawah: poster + info tambahan + synopsis + trailer */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 p-8 pt-10 md:px-16">
        {/* Kiri: poster + info tambahan */}
        <div className="w-full md:w-1/4 lg:w-1/5 flex flex-col gap-4 -ml-4">
          {/* Poster (untuk desktop) */}
          {poster_path && (
            <img
              src={`https://image.tmdb.org/t/p/w500${poster_path}`}
              alt={`${displayTitle} Poster`}
              className="w-full rounded-lg shadow-2xl object-cover md:hidden"
            />
          )}

          {/* Info tambahan lurus dengan poster */}
          <div className="flex flex-col space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="font-semibold text-gray-400">Status:</span>
              <span>{status}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold text-gray-400">Budget:</span>
              <span>{budget || 'N/A'}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold text-gray-400">Revenue:</span>
              <span>{revenue || 'N/A'}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold text-gray-400">Language:</span>
              <span>{original_language.toUpperCase()}</span>
            </div>
          </div>
        </div>

        {/* Kanan: synopsis + trailer (lurus dengan judul) */}
        <div className="w-full md:w-3/4 lg:w-4/5 flex flex-col gap-8 pl-4">
          <div>
            <h2 className="text-2xl font-bold mb-3">Synopsis</h2>
            <p className="text-gray-300 leading-relaxed">{overview}</p>
          </div>

          <div>
            <div className="flex justify-between items-center border-b border-gray-700 pb-2 mb-4">
              <h2 className="text-2xl font-bold">Trailers</h2>
              <button className="text-sm text-yellow-500 hover:text-yellow-400 flex items-center">
                SHOW MORE
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="aspect-video bg-gray-700 rounded-lg flex items-center justify-center text-gray-400">
                Trailer 1
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ===== REKOMENDASI FILM ===== */}
      <Rekomendasi genreIds={genres?.map((g) => g.id)} />
    </div>
  );
}
