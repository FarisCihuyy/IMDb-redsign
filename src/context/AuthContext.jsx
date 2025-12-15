import { createContext, useContext, useEffect, useState } from 'react';
import { getUsers, saveUsers } from '../utils/authStorage';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem('currentUser'));
    if (savedUser) setUser(savedUser);
  }, []);

  // ================= REGISTER =================
  const register = (newUser) => {
    const users = getUsers();

    const exists = users.find((u) => u.username === newUser.username);

    if (exists) {
      throw new Error('Username sudah terdaftar');
    }

    users.push(newUser);
    saveUsers(users);
  };

  // ================= LOGIN =================
  const login = (username, password) => {
    const users = getUsers();

    const found = users.find(
      (u) => u.username === username && u.password === password
    );

    if (!found) {
      throw new Error('Username atau password salah');
    }

    setUser(found);
    localStorage.setItem('currentUser', JSON.stringify(found));
  };

  // ================= LOGOUT =================
  const logout = () => {
    setUser(null);
    localStorage.removeItem('currentUser');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
