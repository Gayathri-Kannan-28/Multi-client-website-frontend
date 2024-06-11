import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import './Navbar.css';

const Navbar = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">VendorSite</Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/home">Home</Link>
          <Link to="/"></Link>
        </li>
        {isAuthenticated ? (
          <>
            <li>
              <Link to="/vendor-upload">Upload Product</Link>
            </li>
            <li>
              <Link to="/vendor">Dashboard</Link>
            </li>
            <li>
              <button className="navbar-button" onClick={handleLogout}>
                Logout
              </button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
