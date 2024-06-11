import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [redirectPath, setRedirectPath] = useState('/');
  const navigate = useNavigate();

  const login = (userData) => {
    setIsAuthenticated(true);
    localStorage.setItem('user', JSON.stringify(userData));
    navigate(redirectPath);
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('user');
    navigate('/');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, setRedirectPath }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
