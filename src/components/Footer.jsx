// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Rozdelenie menu položiek do dvoch zoznamov
  const menuItems1 = [
    { path: '/', label: 'Domov' },
    { path: '/ponuka', label: 'Ponuka' },
    { path: '/o-nas', label: 'O nás' },
    
  ];
  const menuItems2 = [
    { path: '/co-nas-caka', label: 'Čo nás čaká' },
    { path: '/co-mame-za-sebou', label: 'Čo máme za sebou' },
    // Removed Odkazy from the footer menu
    { path: '/kontakt', label: 'Kontakt' },
    // { path: '/podporte-nas', label: 'Podporte nás' }, // Uncomment if needed
  ];

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-content-grid"> {/* Changed class for grid layout */}

          {/* --- Menu Column --- */}
          <div className="footer-column footer-menu-column">
            <h3>Menu</h3>
            <div className="footer-menu-grid"> {/* Grid for two columns */}
              <ul>
                {menuItems1.map(item => (
                  <li key={item.path}><Link to={item.path}>{item.label}</Link></li>
                ))}
              </ul>
              <ul>
                {menuItems2.map(item => (
                    <li key={item.path}><Link to={item.path}>{item.label}</Link></li>
                ))}
              </ul>
            </div>
          </div>
          {/* --- End Menu Column --- */}


          {/* --- Contact Column --- */}
          <div className="footer-column footer-contact-column">
            <h3>Spojte sa s nami</h3>
             <div className="footer-contact-info">
                <p><i className="fas fa-envelope"></i> <a href="mailto:info@plameniaky.sk">info@plameniaky.sk</a></p>
                <p><i className="fas fa-phone-alt"></i> <a href="tel:+421918488525">+421 918 488 525</a></p>
                <p><i className="fas fa-map-marker-alt"></i> Dolný Kubín</p>
             </div>
            <div className="footer-social-icons">
               <a href="https://www.instagram.com/plameniaky_oz" target="_blank" rel="noopener noreferrer" aria-label="Instagram Plameniaky OZ">
                   <i className="fab fa-instagram"></i>
               </a>
               <a href="https://www.facebook.com/plameniaky" target="_blank" rel="noopener noreferrer" aria-label="Facebook Plameniaky OZ">
                   <i className="fab fa-facebook"></i>
               </a>
            </div>
          </div>
          {/* --- End Contact Column --- */}

        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Plameniaky.sk. Všetky práva vyhradené.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;