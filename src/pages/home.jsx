import Hero from '../layout/Hero';
import Navbar from '../layout/Navbar';
import WatchPage from '../layout/WatchPage';
import WatchList from '../layout/WatchList';
import FreshOnDemand from '../layout/FreshOnDemand';
import Footer from '../layout/Footer';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo === 'watchlist') {
      const el = document.getElementById('watchlist');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <>
      <Navbar />
      <Hero />
      <WatchPage />
      <WatchList />
      <FreshOnDemand />
      <Footer />
    </>
  );
}

export default Home;
