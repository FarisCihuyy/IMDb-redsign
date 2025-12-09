import { Routes, Route, Link } from 'react-router-dom';
import Hero from './layout/Hero';
import Navbar from './layout/Navbar';
import WatchPage from './layout/WatchPage';
import Login from './layout/Login';
import Register from './layout/Register';
import Home from './pages/home';
import Detail from './pages/detail';
import './index.css';
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/detail/:id" element={<Detail />} />
    </Routes>
  );
}
