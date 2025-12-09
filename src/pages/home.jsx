import Hero from '../layout/Hero';
import Navbar from '../layout/Navbar';
import WatchPage from '../layout/WatchPage';
import FreshOnDemand from '../layout/FreshOnDemand';
import Footer from '../layout/Footer';

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <WatchPage />
      <FreshOnDemand />
      <Footer />
    </>
  );
}

export default Home;
