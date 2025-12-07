import { useState } from "react";
import { Link } from "react-router-dom";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login:", email, password);
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
        
        {/* TITLE LOGIN */}
        <h2 className="text-2xl font-bold text-center text-white mb-6">Login</h2>

        <form onSubmit={handleLogin} className="space-y-4">

          {/* EMAIL */}
          <div>
            <label className="block mb-1 text-sm font-medium text-white">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-white bg-white/10 text-white placeholder-white/80 p-2 rounded-lg focus:ring-2 focus:ring-blue-300"
              placeholder="Masukkan email"
              required
            />
          </div>

          {/* PASSWORD */}
          <div>
            <label className="block mb-1 text-sm font-medium text-white">
              Password
            </label>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-white bg-white/10 text-white placeholder-white/80 p-2 rounded-lg focus:ring-2 focus:ring-blue-300 pr-10"
                placeholder="Masukkan password"
                required
              />

              {/* ICON MATA */}
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

          {/* TOMBOL LOGIN */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>

        {/* LINK REGISTER */}
        <p className="text-center text-sm mt-4 text-white">
          Belum punya akun?{" "}
          <Link to="/register" className="text-blue-200 hover:underline">
            Daftar dulu
          </Link>
        </p>

        {/* LINK KEMBALI KE HOME */}
        <p className="text-center text-sm mt-2">
          <Link
            to="/WatchPage"
            className="text-white underline hover:text-blue-200 transition"
          >
            ← Kembali ke Home
          </Link>
        </p>

      </div>
    </div>
  );
}
