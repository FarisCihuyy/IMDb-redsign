import { PlayIcon, PlusIcon, CheckIcon } from '@heroicons/react/16/solid';
import { InformationCircleIcon } from '@heroicons/react/24/outline';
import { Link, useNavigate } from 'react-router-dom';
import { useWatchlist } from '../context/WatchlistContext';

const Card = ({ data }) => {
  const navigate = useNavigate();
  const { watchlist, addToWatchlist, removeFromWatchlist } = useWatchlist();
  const {
    id,
    title,
    original_title,
    original_name,
    name,
    poster_path,
    genre,
    release_date,
    first_air_date,
  } = data;
  poster_path;

  const movieName = title || original_title || original_name || name;

  // Cek movie watchlist
  const isAdded = watchlist.some((m) => m.id === id);

  // ============================
  // 1. CEK FILM BARU (≤ 30 hari)
  // ============================
  const date = release_date || first_air_date;
  let isNew = false;

  if (date) {
    const release = new Date(date);
    const now = new Date();
    const diff = Math.abs(now - release);
    const diffDays = diff / (1000 * 60 * 60 * 24);

    if (diffDays <= 30) isNew = true;
  }

  return (
    <article className="shrink-0 relative w-48 h-[420px] min-h-full bg-foreground/80 rounded-lg space-y-4 overflow-hidden">
      {/* Bookmark */}
      <div
        onClick={() =>
          isAdded ? removeFromWatchlist(id) : addToWatchlist(data)
        }
        className={`group bookmark absolute top-0 left-0 w-10 h-14 cursor-pointer 
        ${isAdded ? 'bg-yellow-400' : 'bg-foreground/90'}`}
      >
        {isAdded ? (
          <CheckIcon className="group-hover:scale-110 h-6 w-6 absolute top-2 left-1/2 -translate-x-1/2 transition-transform bg-yellow-400 text-black" />
        ) : (
          <PlusIcon className="group-hover:scale-110 h-6 w-6 absolute top-2 left-1/2 -translate-x-1/2 transition-transform" />
        )}
      </div>

      {/* ============================
          2. BADGE NEW 🔥
          ============================ */}
      {isNew && (
        <span className="absolute top-2 right-2 bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded-md shadow">
          NEW 🔥
        </span>
      )}

      <div className="h-64">
        <Link to={`/detail/${id}`}>
          <img
            src={`https://image.tmdb.org/t/p/original${poster_path}`}
            alt=""
            className="w-full h-full object-cover"
          />
        </Link>
      </div>

      <div className="px-2 pb-4 space-y-2">
        <div className="flex justify-between items-start gap-4">
          <h2 className="font-medium leading-5 min-h-[2.5rem] line-clamp-2">
            {movieName}
          </h2>
          <InformationCircleIcon
            title="Detail"
            className="h-6 w-6 cursor-pointer"
            onClick={() => navigate(`/detail/${id}`)}
          />
        </div>

        <p className="text-sm text-gray-400">{genre}</p>

        <p className="text-xs flex items-center gap-1">
          <span className="text-sm">⭐</span> 8.2
        </p>

        <button className="px-6 py-2 text-blue-500 text-sm bg-foreground rounded-lg flex items-center gap-1 hover:bg-blue-500/10 transition mx-auto mt-4 cursor-pointer">
          <PlayIcon className="h-5 w-5" />
          <span>Watch Trailer</span>
        </button>

        <h5 className="text-[10px] font-light mx-auto text-center">
          Watch on: 🎬
        </h5>
      </div>
    </article>
  );
};

export default Card;
