import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../css/navbar.css';
import logo from '../asset/logo_slp.png';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 10) {
        // Always show navbar at the top
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        // Scrolling down - hide navbar
        setIsVisible(false);
        setIsMobileMenuOpen(false); // Close mobile menu when hiding
      } else {
        // Scrolling up - show navbar
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

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
    <nav className={`navbar ${isVisible ? 'navbar-visible' : 'navbar-hidden'}`}>
      <div className="nav-container">
        {/* Left Navigation (Desktop) */}
        <ul className="nav-menu nav-menu-left desktop-only">
          <li className="nav-item">
            <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>
              SERVICES
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className={`nav-link ${isActive('/about') ? 'active' : ''}`}>
              ABOUT US
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/faq" className={`nav-link ${isActive('/faq') ? 'active' : ''}`}>
              FAQ
            </Link>
          </li>
        </ul>

        {/* Center Logo */}
        <Link to="/" className="nav-logo" onClick={handleItemClick}>
          <img src={logo} alt="Super League Promotions" className="logo-image" />
        </Link>

        {/* Right Navigation (Desktop) */}
        <ul className="nav-menu nav-menu-right desktop-only">
          <li className="nav-item">
            <a href="https://wa.me/60193312599" className="nav-link nav-link-button" target="_blank" rel="noopener noreferrer">
              CONTACT US
            </a>
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

        {/* Mobile Sidebar */}
        <div className={`mobile-sidebar ${isMobileMenuOpen ? 'open' : ''}`}>
          <ul className="mobile-menu">
            <li className="mobile-menu-item">
              <Link to="/" className={`mobile-link ${isActive('/') ? 'active' : ''}`} onClick={handleItemClick}>
                SERVICES
              </Link>
            </li>
            <li className="mobile-menu-item">
              <Link to="/about" className={`mobile-link ${isActive('/about') ? 'active' : ''}`} onClick={handleItemClick}>
                ABOUT US
              </Link>
            </li>
            <li className="mobile-menu-item">
              <Link to="/faq" className={`mobile-link ${isActive('/faq') ? 'active' : ''}`} onClick={handleItemClick}>
                FAQ
              </Link>
            </li>
            <li className="mobile-menu-item">
              <a href="https://wa.me/60193312599" className="mobile-link mobile-link-button" target="_blank" rel="noopener noreferrer" onClick={handleItemClick}>
                CONTACT US
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Overlay */}
      {isMobileMenuOpen && <div className="mobile-overlay" onClick={handleItemClick} />}
    </nav>
  );
};

export default Navbar;