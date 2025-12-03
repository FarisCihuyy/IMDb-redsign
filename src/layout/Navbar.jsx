import {
  BookmarkIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  UserCircleIcon,
} from "@heroicons/react/16/solid";

const Navbar = () => {
  return (
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
        <MagnifyingGlassIcon className="h-6 w-6" />
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
  );
};

export default Navbar;
