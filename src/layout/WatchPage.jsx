import { useEffect, useState, useRef } from 'react';
import Tabs from '../components/Tabs';
import Card from '../components/Card';
import { fetchData } from '../services/fetchData';
import CardSkeleton from '../components/CardSkeleton';
import ScrollButton from '../components/ScrollButton';

const WatchPage = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [watchList, setWatchList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);

  const abortControllerRef = useRef(null);

  // === FETCH DATA ===
  useEffect(() => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
    abortControllerRef.current = new AbortController();

    const type =
      activeTab === 'movies'
        ? 'movie'
        : activeTab === 'tv shows'
        ? 'tv'
        : 'all';

    async function getTrending() {
      try {
        const data = await fetchData(`/trending/${type}/day`, {
          signal: abortControllerRef.current.signal,
        });

        setWatchList(data?.results || []);

        if (!hasLoaded) {
          setTimeout(() => {
            setLoading(false);
            setHasLoaded(true);
          }, 1200);
        } else {
          setLoading(false);
        }
      } catch (err) {
        if (err.name === 'AbortError') return;

        console.error(err);
        setError(true);
        setLoading(false);
      }
    }

    getTrending();

    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, [activeTab, hasLoaded]);

  return (
    <section className="my-28 px-12">
      <h1 className="text-accent mb-8 text-2xl font-bold">What to watch</h1>

      <div className="space-y-10">
        <p className="relative px-4 py-1 font-medium before:absolute before:top-0 before:left-0 before:bottom-0 before:w-1 before:bg-accent before:rounded-full">
          Top picks just for you
        </p>

        <Tabs active={activeTab} onChange={setActiveTab} />

        {/* === REUSABLE SCROLLER === */}
        <ScrollButton>
          {!hasLoaded && loading ? (
            <>
              <CardSkeleton />
              <CardSkeleton />
              <CardSkeleton />
            </>
          ) : error ? (
            <p className="text-gray-300">Error loading data</p>
          ) : watchList.length > 0 ? (
            watchList.map((item) => <Card key={item.id} data={item} />)
          ) : null}
        </ScrollButton>
      </div>
    </section>
  );
};

export default WatchPage;
