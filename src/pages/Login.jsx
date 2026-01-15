import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import { useAuth } from '../context/AuthContext';

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      await login(username, password);
      navigate('/');
    } catch (err) {
      setError('Username atau password salah');
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
        <h2 className="text-2xl font-bold text-center text-white mb-6">
          Login
        </h2>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block mb-1 text-sm font-medium text-white">
              Username
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full border border-white bg-white/10 text-white placeholder-white/80 p-2 rounded-lg focus:ring-2 focus:ring-blue-300"
              placeholder="Masukkan username"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-white">
              Password
            </label>

            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-white bg-white/10 text-white placeholder-white/80 p-2 rounded-lg focus:ring-2 focus:ring-blue-300 pr-10"
                placeholder="Masukkan password"
                required
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2 top-2"
              >
                {showPassword ? (
                  <EyeSlashIcon className="w-6 h-6 text-white" />
                ) : (
                  <EyeIcon className="w-6 h-6 text-white" />
                )}
              </button>
            </div>
          </div>

          {error && <p className="text-sm text-red-300 text-center">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
          >
            {loading ? 'Loading...' : 'Login'}
          </button>
        </form>

        <p className="text-center text-sm mt-4 text-white">
          Belum punya akun?{' '}
          <Link to="/register" className="text-blue-200 hover:underline">
            Daftar dulu
          </Link>
        </p>

        <p className="text-center text-sm mt-2">
          <Link
            to="/"
            className="text-white underline hover:text-blue-200 transition"
          >
            ← Kembali ke Home
          </Link>
        </p>
      </div>
    </div>
  );
}
