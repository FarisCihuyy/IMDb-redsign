import { useWatchlist } from '../context/WatchlistContext';
import Card from '../components/Card';
import ScrollButton from '../components/ScrollButton';

const WatchList = () => {
  const { watchlist } = useWatchlist();

  return (
    <section className="my-28 px-12">
      {/* WATCHLIST SECTION */}
      <div className="mt-24 space-y-10">
        <p className="relative px-4 py-1 font-medium before:absolute before:top-0 before:left-0 before:bottom-0 before:w-1 before:bg-accent before:rounded-full">
          From your watchlist
        </p>

        {/* Jika kosong */}
        {watchlist.length === 0 ? (
          <h1 className="font-medium text-2xl text-center text-gray-400/70 min-h-72 flex items-center justify-center">
            Your watchlist is empty.
          </h1>
        ) : (
          // === PAKAI REUSABLE SCROLLER ===
          <ScrollButton>
            {watchlist.map((movie) => (
              <Card key={movie.id} data={movie} />
            ))}
          </ScrollButton>
        )}
      </div>
    </section>
  );
};

export default WatchList;
