// Navbar.tsx

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar: React.FC = () => {
  const location = useLocation();
  const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');

  return (
    <div className="navbar">
      <div className="navbar-links">
        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
          Home
        </Link>
        {!currentUser.email && (
          <>
            <Link to="/signup" className={location.pathname === '/signup' ? 'active' : ''}>
              Sign Up
            </Link>
            <Link to="/signin" className={location.pathname === '/signin' ? 'active' : ''}>
              Sign In
            </Link>
          </>
        )}
        {currentUser.email && (
          <>
            <Link to="/profiles" className={location.pathname === '/profiles' ? 'active' : ''}>
              Profiles
            </Link>
            <Link to="/movies" className={location.pathname.includes('/movies') ? 'active' : ''}>
              Movies
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
