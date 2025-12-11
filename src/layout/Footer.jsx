import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-[#0f0f0f] text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Brand */}
        <h2
          className="text-2xl font-bold text-white text-center"
          style={{ color: '#f5c518' }}
        >
          IMDb
        </h2>
        <p className="text-center text-gray-400 mt-2 max-w-xl mx-auto">
          Streaming film online gratis kualitas HD. Update setiap hari.
        </p>

        {/* Menu */}
        <div className="mt-6 flex justify-center gap-6 text-sm">
          <Link to="/" className="hover:text-white">
            Home
          </Link>
          <Link to="#" className="hover:text-white">
            Film
          </Link>
          <Link to="#" className="hover:text-white">
            Series
          </Link>
          <Link to="#" className="hover:text-white">
            Genre
          </Link>
          <Link to="#" className="hover:text-white">
            Request
          </Link>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-6"></div>

        {/* Disclaimer */}
        <p className="text-xs text-gray-500 text-center max-w-2xl mx-auto">
          Disclaimer: Website ini tidak menyimpan file film apapun di server.
          Semua konten hanya ditautkan dari pihak ketiga yang tersedia di
          internet.
        </p>

        {/* Copyright */}
        <p className="text-center text-gray-600 text-sm mt-4">
          © {new Date().getFullYear()} IMDB-Movies • All Rights Reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
