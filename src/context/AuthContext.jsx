import { createContext, useState, useEffect, useCallback } from 'react';

// Create AuthContext
export const AuthContext = createContext();

// Create a provider component
export const AuthProvider = ({ children }) => {
  // Load token and user from localStorage on first mount
  const [token, setToken] = useState(() => localStorage.getItem('token'));
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('user');
    try {
      return savedUser ? JSON.parse(savedUser) : null;
    } catch (error) {
      console.error('Failed to parse user from localStorage:', error);
      return null;
    }
  });

  // Synchronize token and user data with localStorage
  useEffect(() => {
    if (token && user) {
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
      console.log('Saved token and user to localStorage');
    } else {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      console.log('Cleared localStorage');
    }
  }, [token, user]);

  // Function to login and set token & user
  const login = useCallback((logintoken, userDetails) => {
    console.log('Logging in with:', logintoken, userDetails);
    setToken(logintoken);
    setUser(userDetails);
  }, []);

  // Function to logout and clear token & user
  const logout = useCallback(() => {
    console.log('Logging out');
    setToken(null);
    setUser(null);
  }, []);

  // Memoized context value to avoid unnecessary re-renders
  const value = { token, user, login, logout };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
