import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Register() {
  const navigate = useNavigate();
  const { register } = useAuth();

  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleRegister = (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      register({ name, username, password });
      alert('Registrasi berhasil, silakan login');
      navigate('/login');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1503264116251-35a269479413')",
      }}
    >
      <div className="w-full max-w-sm bg-white/20 backdrop-blur-xl p-6 rounded-2xl shadow-2xl border border-white/30">
        <h2 className="text-2xl font-bold text-center mb-6 text-white">
          Daftar
        </h2>

        <form onSubmit={handleRegister} className="space-y-4">
          <input
            type="text"
            placeholder="Nama"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-white bg-white/10 text-white p-2 rounded-lg"
            required
          />

          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full border border-white bg-white/10 text-white p-2 rounded-lg"
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-white bg-white/10 text-white p-2 rounded-lg"
            required
          />

          {error && <p className="text-sm text-red-300 text-center">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-600 text-white p-2 rounded-lg hover:bg-green-700 disabled:opacity-50"
          >
            {loading ? 'Loading...' : 'Daftar'}
          </button>
        </form>

        <p className="text-center text-sm mt-4 text-white">
          Sudah punya akun?{' '}
          <Link to="/login" className="text-blue-200 hover:underline">
            Login di sini
          </Link>
        </p>
      </div>
    </div>
  );
}
