import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

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
      if (isOpen && navbar && !navbar.contains(event.target)) {
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
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src="/images/logo.png" alt="Plameniaky Logo" />
        </Link>
        
        <div 
          className="menu-icon" 
          onClick={toggleMenu}
          role="button"
          aria-label={isOpen ? "Zatvoriť menu" : "Otvoriť menu"}
          tabIndex={0}
        >
          <span className={isOpen ? 'menu-icon-bar open' : 'menu-icon-bar'}></span>
          <span className={isOpen ? 'menu-icon-bar open' : 'menu-icon-bar'}></span>
          <span className={isOpen ? 'menu-icon-bar open' : 'menu-icon-bar'}></span>
        </div>
        
        <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>
              Domov
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/o-nas" className={`nav-link ${location.pathname === '/o-nas' ? 'active' : ''}`}>
              O nás
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/aktivity" className={`nav-link ${location.pathname === '/aktivity' ? 'active' : ''}`}>
              Aktivity
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/podporte-nas" className={`nav-link ${location.pathname === '/podporte-nas' ? 'active' : ''}`}>
              Podporte nás
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/kontakt" className={`nav-link ${location.pathname === '/kontakt' ? 'active' : ''}`}>
              Kontakt
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;