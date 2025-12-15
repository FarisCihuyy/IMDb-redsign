import { useEffect, useState } from 'react';
import {
  BookmarkIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  UserCircleIcon,
} from '@heroicons/react/16/solid';
import {
  ArrowRightEndOnRectangleIcon,
  ArrowRightStartOnRectangleIcon,
} from '@heroicons/react/24/outline';
import { getAvatarColor } from '../utils/avatar';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const [query, setQuery] = useState('');
  const [data, setData] = useState([]);
  const [isFocused, setIsFocused] = useState(false);

  const apiKey = import.meta.env.VITE_TMDB_API_KEY;

  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleWatchlistClick = () => {
    if (location.pathname === '/') {
      // ✅ sudah di home → scroll langsung
      const el = document.getElementById('watchlist');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // ✅ bukan di home → pindah dulu
      navigate('/', { state: { scrollTo: 'watchlist' } });
    }
  };

  const [openProfile, setOpenProfile] = useState(false);

  const handleLogout = () => {
    logout();
    setOpenProfile(false);
    navigate('/');
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    if (query === '') return;

    const getData = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/search/multi?query=${query}`,
          {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: `Bearer ${apiKey}`,
            },
          }
        );
        const data = await res.json();
        setData(data.results);
        console.log('HASIL SEARCH:', data.results);
      } catch (err) {
        console.log('Search Error:', err);
      }
    };
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return (
    <>
      <nav className="absolute z-20 top-0 left-0 right-0 flex justify-between items-center px-8 py-4 bg-gradient-to-t from-transparent to-black/80">
        <div className="flex gap-12 items-center">
          <Link to="/">
            <h1 className="px-2 py-1 bg-accent text-2xl text-black font-black rounded">
              IMDb
            </h1>
          </Link>
          <ul className="flex gap-8">
            <li className="transition-colors hover:underline">
              <a href="#">Movies</a>
            </li>
            <li className="transition-colors hover:underline">
              <a href="#">TV Shows</a>
            </li>
            <li className="transition-colors hover:underline">
              <a href="#">Celebs</a>
            </li>
            <li className="transition-colors hover:underline">
              <a href="#">News & Events</a>
            </li>
          </ul>
        </div>

        <div className="flex gap-8 items-center">
          <div className="relative">
            <label className="border border-gray-200 p-1 rounded-full flex gap-2">
              <MagnifyingGlassIcon className="h-6 w-6 cursor-pointer opacity-70 pointer-events-none" />
              <input
                placeholder="search..."
                type="text"
                id="search"
                autoComplete="off"
                value={query}
                onChange={handleChange}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setTimeout(() => setIsFocused(false), 150)} // delay kecil supaya klik Link tercatat
                className="outline-0 text-sm placeholder:opacity-70"
              />
            </label>

            {isFocused && data.length > 0 && (
              <ul className="bg-foreground/80 rounded-xl text-sm absolute z-10 top-[calc(100%+0.5rem)] w-full max-h-72 overflow-y-auto">
                {data.map((title) => (
                  <li
                    key={title.id}
                    className="border-b border-gray-300/30 cursor-pointer transition-colors hover:bg-background/80 capitalize"
                  >
                    <Link
                      to={`/detail/${title.media_type}/${title.id}`}
                      className="py-4 px-2 block"
                      onMouseDown={(e) => e.preventDefault()} // cegah blur sebelum klik
                    >
                      {title.name || title.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <button
            onClick={handleWatchlistClick}
            className="flex gap-1 items-center hover:text-accent transition"
          >
            <BookmarkIcon className="h-6 w-6" />
            <span>Watchlist</span>
          </button>

          <div className="relative">
            {!user ? (
              // ================= BELUM LOGIN =================
              <Link
                to="/login"
                className="flex gap-1 items-center hover:opacity-80 transition"
              >
                <UserCircleIcon className="h-6 w-6" />
                <span className="text-sm">Login</span>
              </Link>
            ) : (
              // ================= SUDAH LOGIN =================
              <>
                <button
                  onClick={() => setOpenProfile(!openProfile)}
                  className="flex gap-2 items-center hover:opacity-80 transition"
                >
                  {/* AVATAR HURUF */}
                  <div
                    style={{ backgroundColor: getAvatarColor(user.username) }}
                    className="w-8 h-8 rounded-full ${getAvatarColor(user.username)} text-white font-bold flex items-center justify-center uppercase"
                  >
                    {user.username.charAt(0)}
                  </div>

                  {/* USERNAME */}
                  <span className="text-sm">{user.username}</span>

                  <ChevronDownIcon className="h-4 w-4" />
                </button>

                {/* DROPDOWN */}
                {openProfile && (
                  <div className="absolute right-0 mt-2 w-30 bg-black/90 backdrop-blur rounded-xl shadow-lg overflow-hidden text-sm">
                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center gap-2 px-4 py-2 hover:bg-white/10 text-white hover:text-red-500 transition"
                    >
                      <ArrowRightStartOnRectangleIcon className="h-5 w-5" />
                      Logout
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
