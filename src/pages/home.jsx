import Hero from '../layout/Hero';
import Navbar from '../layout/Navbar';
import WatchPage from '../layout/WatchPage';
import WatchList from '../layout/WatchList';
import FreshOnDemand from '../layout/FreshOnDemand';
import Footer from '../layout/Footer';

function Home() {
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
