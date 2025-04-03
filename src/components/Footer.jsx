// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-container">
        {/* --- Updated Footer Content --- */}
        <div className="footer-content-simple">

          <div className="footer-column">
            <h3>Menu</h3>
            <ul>
              <li><Link to="/">Domov</Link></li>
              {/* --- Sublinks for Ponuka (Optional but good practice) --- */}
              <li>
                <Link to="/ponuka">Ponuka</Link>
                <ul className="footer-submenu"> {/* Optional submenu styling */}
                    <li><Link to="/ponuka/vzdelavanie-cirkus"> - Vzdelávanie Cirkus</Link></li>
                    <li><Link to="/ponuka/vzdelavanie-hudba"> - Vzdelávanie Hudba</Link></li>
                    <li><Link to="/ponuka/vystupenia-cirkus"> - Vystúpenia Cirkus</Link></li>
                    <li><Link to="/ponuka/vystupenia-hudba"> - Vystúpenia Hudba</Link></li>
                </ul>
              </li>
              {/* --- End Sublinks --- */}
              <li><Link to="/o-nas">O nás</Link></li>
              <li><Link to="/co-nas-caka">Čo nás čaká</Link></li>
              <li><Link to="/co-mame-za-sebou">Čo máme za sebou</Link></li>
              <li><Link to="/odkazy">Odkazy</Link></li>
              <li><Link to="/kontakt">Kontakt</Link></li>
              {/* Add Podporte nas if/when uncommented */}
              {/* <li><Link to="/podporte-nas">Podporte nás</Link></li> */}
            </ul>
          </div>

          <div className="footer-column">
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

        </div>
        {/* --- End Updated Footer Content --- */}

        <div className="footer-bottom">
          <p>&copy; {currentYear} Plameniaky.sk. Všetky práva vyhradené.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;