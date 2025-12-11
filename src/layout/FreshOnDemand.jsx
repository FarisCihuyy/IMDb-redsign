import { useEffect, useState, useRef } from 'react';
import Tabs from '../components/Tabs';
import Card from '../components/Card';
import { fetchData } from '../services/fetchData';
import CardSkeleton from '../components/CardSkeleton';
import ScrollButton from '../components/ScrollButton';

const FreshOnDemand = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [freshList, setFreshList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);

  const abortControllerRef = useRef(null);

  useEffect(() => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
    abortControllerRef.current = new AbortController();

    const endpoint =
      activeTab === 'movies'
        ? '/movie/now_playing'
        : activeTab === 'tv shows'
        ? '/tv/on_the_air'
        : '/trending/all/day';

    async function getFresh() {
      try {
        const data = await fetchData(endpoint, {
          signal: abortControllerRef.current.signal,
        });

        setFreshList(data?.results || []);

        if (!hasLoaded) {
          setTimeout(() => {
            setLoading(false);
            setHasLoaded(true);
          }, 1000);
        } else {
          setLoading(false);
        }
      } catch (err) {
        if (err.name === 'AbortError') return;
        setError(true);
        setLoading(false);
      }
    }

    getFresh();

    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, [activeTab, hasLoaded]);

  return (
    <section className="my-20 px-12">
      <h1 className="text-accent mb-8 text-2xl font-bold">Fresh On Demand</h1>

      <div className="space-y-10">
        <p className="relative px-4 py-1 font-medium before:absolute before:top-0 before:left-0 before:bottom-0 before:w-1 before:bg-accent before:rounded-full">
          Latest Movies & TV Shows
        </p>

        <Tabs active={activeTab} onChange={setActiveTab} />

        {/* LIST CARD */}
        <ScrollButton>
          {!hasLoaded && loading ? (
            <>
              <CardSkeleton />
              <CardSkeleton />
              <CardSkeleton />
            </>
          ) : error ? (
            <p className="text-gray-300">Error loading data</p>
          ) : freshList.length > 0 ? (
            freshList.map((item) => <Card key={item.id} data={item} />)
          ) : null}
        </ScrollButton>
      </div>
    </section>
  );
};

export default FreshOnDemand;
