import { useEffect, useState } from "react";
import {
  BookmarkIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  UserCircleIcon,
} from "@heroicons/react/16/solid";

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);

  const apiKey = import.meta.env.VITE_TMDB_API_KEY;

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    if (query.trim() === "") return;

    const getData = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/search/keyword?query=${query}`,
          {
            method: "GET",
            headers: {
              accept: "application/json",
              Authorization: `Bearer ${apiKey}`,
            },
          }
        );
        const data = await res.json();
        setData(data.results);
        console.log("HASIL SEARCH:", data.results);
      } catch (err) {
        console.log("Search Error:", err);
      }
    };
    getData();
  }, [query]);

  const handleSearch = async (e) => {
    e.preventDefault();

    if (query.trim() === "") return;

    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/search/keyword?query=${query}&api_key=${apiKey}`
      );
      const data = await res.json();

      console.log("HASIL SEARCH:", data.results);
    } catch (err) {
      console.log("Search Error:", err);
    }
  };

  return (
    <>
      <nav className="absolute z-20 top-0 left-0 right-0 flex justify-between items-center px-8 py-4 bg-gradient-to-t from-transparent to-black/80">
        <div className="flex gap-12 items-center">
          <h1 className="px-2 py-1 bg-accent text-2xl text-black font-black rounded">
            IMDb
          </h1>
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
          {/*  TOMBOL SEARCH */}
          {/* <button onClick={() => setShowSearch(!showSearch)}>
          </button> */}
          <div className="relative space-y-2">
            <label
              htmlFor="id"
              className=" border border-gray-200 p-1 rounded-full flex gap-2"
            >
              <MagnifyingGlassIcon className="h-6 w-6 cursor-pointer opacity-70 pointer-events-none" />
              <input
                placeholder="search..."
                type="text"
                id="search"
                value={query}
                onChange={handleChange}
                className="outline-0 text-sm placeholder:opacity-70"
              />
            </label>
            {data.length > 0 && (
              <ul className ="*:px-2 *:border-b *:border-gray-300/30 bg-foreground/80 rounded-xl text-sm *:py-4 absolute w-full *:hover:bg-foreground/50 *:cursor-pointer *:transition-colors max-h-72 overflow-y-auto" >
                {data.map((title) => (
                  <li key={title.id}> <Link to={`/detail `}></Link>  {title.name}</li>
                ))}
              </ul>
            )}
          </div>

          <div className="flex gap-1">
            <BookmarkIcon className="h-6 w-6" />
            <span>Watchlist</span>
          </div>
          <div className="flex gap-1 items-center">
            <UserCircleIcon className="h-6 w-6" />
            <ChevronDownIcon className="h-4 w-4" />
          </div>
        </div>
      </nav>

      {/* INPUT SEARCH MUNCUL DI BAWAH NAVBAR */}
      {showSearch && (
        <form
          onSubmit={handleSearch}
          className="absolute z-30 top-20 left-0 w-full px-8"
        >
          <input
            type="text"
            placeholder="Search movie..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full p-3 rounded bg-zinc-800 text-white outline-none"
          />
        </form>
      )}
    </>
  );
};

export default Navbar;
