import { Routes, Route, Link } from 'react-router-dom';
import Hero from './layout/Hero';
import Navbar from './layout/Navbar';
import WatchPage from './layout/WatchPage';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/home';
import Detail from './pages/detail';
import './index.css';
import { WatchlistProvider } from './context/WatchlistContext';

export default function App() {
  return (
    <WatchlistProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </WatchlistProvider>
  );
}
