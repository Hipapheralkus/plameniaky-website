// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './navbar.css'; // Ensure CSS is imported

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
      if (isOpen && navbar && !navbar.contains(event.target) && !event.target.closest('.menu-icon')) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

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

  const closeMobileMenu = () => {
      if (window.innerWidth <= 960) {
          setIsOpen(false);
      }
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
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

        <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} onClick={closeMobileMenu}>
              Domov
            </Link>
          </li>
          {/* --- Ponuka Dropdown --- */}
          <li className="nav-item dropdown"> {/* Added 'dropdown' class */}
            {/* Link to main /ponuka page for accessibility/fallback */}
            <Link
                to="/ponuka"
                className={`nav-link ${location.pathname.startsWith('/ponuka') ? 'active' : ''}`}
                onClick={(e) => {
                    // On mobile, allow the main link click to close menu if it's just the base /ponuka
                    if (location.pathname === '/ponuka') closeMobileMenu();
                    // On desktop, prevent direct navigation if hovering dropdown is intended
                    if (window.innerWidth > 960) {
                        // Optional: if you want ONLY dropdown links to navigate, prevent default here
                        // e.preventDefault();
                    }
                }}
                // Add aria-haspopup for accessibility
                aria-haspopup="true"
            >
                Ponuka <i className="fas fa-caret-down dropdown-caret"></i> {/* Optional caret icon */}
            </Link>
            <ul className="dropdown-menu">
                <li><Link to="/ponuka/vzdelavanie-cirkus" onClick={closeMobileMenu}>Vzdelávanie v novom cirkuse</Link></li>
                <li><Link to="/ponuka/vzdelavanie-hudba" onClick={closeMobileMenu}>Vzdelávanie v hudbe</Link></li>
                <li><Link to="/ponuka/vystupenia-cirkus" onClick={closeMobileMenu}>Cirkusové vystúpenia</Link></li>
                <li><Link to="/ponuka/vystupenia-hudba" onClick={closeMobileMenu}>Hudobné vystúpenia</Link></li>
                 {/* Optional: Link back to the main Ponuka page */}
                 <li><hr className="dropdown-divider" /></li>
                 <li><Link to="/ponuka" onClick={closeMobileMenu}>Prehľad ponuky</Link></li>
            </ul>
          </li>
          {/* --- End Ponuka Dropdown --- */}
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
            <Link to="/co-mame-za-sebou" className={`nav-link ${location.pathname === '/co-mame-za-sebou' ? 'active' : ''}`} onClick={closeMobileMenu}>
              Čo máme za sebou
            </Link>
          </li>
          {/* Removed the "Odkazy" navigation item */}
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