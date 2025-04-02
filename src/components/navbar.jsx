// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const navbar = document.querySelector('.navbar-container');
      // Check if click is outside the navbar container AND outside the menu icon
      if (isOpen && navbar && !navbar.contains(event.target) && !event.target.closest('.menu-icon')) {
        setIsOpen(false);
      }
    };

    // Add event listener when menu is open
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    // Cleanup
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto'; // Ensure overflow is reset on component unmount
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Helper function to close menu on link click
  const closeMobileMenu = () => {
      if (window.innerWidth <= 960) { // Only close if in mobile view
          setIsOpen(false);
      }
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          {/* Použite vaše logo */}
          <img src="/images/logo.webp" alt="Plameniaky Logo" />
        </Link>

        <div
          className="menu-icon"
          onClick={toggleMenu}
          role="button"
          aria-label={isOpen ? "Zatvoriť menu" : "Otvoriť menu"}
          aria-expanded={isOpen}
          tabIndex={0}
        >
          <span className={isOpen ? 'menu-icon-bar open' : 'menu-icon-bar'}></span>
          <span className={isOpen ? 'menu-icon-bar open' : 'menu-icon-bar'}></span>
          <span className={isOpen ? 'menu-icon-bar open' : 'menu-icon-bar'}></span>
        </div>

        {/* Nové položky menu */}
        <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} onClick={closeMobileMenu}>
              Domov
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/ponuka" className={`nav-link ${location.pathname.startsWith('/ponuka') ? 'active' : ''}`} onClick={closeMobileMenu}>
              Ponuka
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/o-nas" className={`nav-link ${location.pathname === '/o-nas' ? 'active' : ''}`} onClick={closeMobileMenu}>
              O nás
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/co-nas-caka" className={`nav-link ${location.pathname === '/co-nas-caka' ? 'active' : ''}`} onClick={closeMobileMenu}>
              Čo nás čaká
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/co-mame-za-sebou" className={`nav-link ${location.pathname === '/co-mame-za-sebou' ? 'active' : ''}`} onClick={closeMobileMenu}> {/* <-- Zmena cesty a textu */}
              Čo máme za sebou
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/odkazy" className={`nav-link ${location.pathname === '/odkazy' ? 'active' : ''}`} onClick={closeMobileMenu}>
              Odkazy
            </Link>
          </li>
          {/*
          <li className="nav-item">
            <Link to="/podporte-nas" className={`nav-link ${location.pathname === '/podporte-nas' ? 'active' : ''}`} onClick={closeMobileMenu}>
              Podporte nás
            </Link>
          </li>
          */}
          <li className="nav-item">
            <Link to="/kontakt" className={`nav-link ${location.pathname === '/kontakt' ? 'active' : ''}`} onClick={closeMobileMenu}>
              Kontakt
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;