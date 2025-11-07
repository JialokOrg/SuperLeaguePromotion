import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../css/navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const handleItemClick = () => {
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Left Navigation */}
        <ul className={`nav-menu nav-menu-left ${isMobileMenuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link
              to="/"
              className={`nav-link ${isActive('/') ? 'active' : ''}`}
              onClick={handleItemClick}
            >
              SERVICES
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/about"
              className={`nav-link ${isActive('/about') ? 'active' : ''}`}
              onClick={handleItemClick}
            >
              ABOUT US
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/faq"
              className={`nav-link ${isActive('/faq') ? 'active' : ''}`}
              onClick={handleItemClick}
            >
              FAQ
            </Link>
          </li>
        </ul>

        {/* Center Logo */}
        <Link to="/" className="nav-logo" onClick={handleItemClick}>
          <div className="logo-icon">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"/>
            </svg>
          </div>
        </Link>

        {/* Right Navigation */}
        <ul className={`nav-menu nav-menu-right ${isMobileMenuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link
              to="/contact"
              className="nav-link nav-link-button"
              onClick={handleItemClick}
            >
              CONTACT US
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <div
          className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;