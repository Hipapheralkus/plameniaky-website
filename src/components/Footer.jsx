import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-content">
          <div className="footer-logo">
            <Link to="/">
              <img src="/images/logo-white.png" alt="Plameniaky Logo" />
            </Link>
          </div>
          
          <div className="footer-links">
            <div className="footer-column">
              <h3>Menu</h3>
              <ul>
                <li>
                  <Link to="/">Domov</Link>
                </li>
                <li>
                  <Link to="/o-nas">O nás</Link>
                </li>
                <li>
                  <Link to="/aktivity">Aktivity</Link>
                </li>
                <li>
                  <Link to="/podporte-nas">Podporte nás</Link>
                </li>
                <li>
                  <Link to="/kontakt">Kontakt</Link>
                </li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h3>Kontakt</h3>
              <ul>
                <li>
                  <a href="mailto:info@plameniaky.sk" className="footer-contact-link">
                    <i className="far fa-envelope"></i>
                    <span>info@plameniaky.sk</span>
                  </a>
                </li>
                <li>
                  <a href="tel:+421918488525" className="footer-contact-link">
                    <i className="fas fa-phone-alt"></i>
                    <span>+421 918 488 525</span>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/plameniaky_oz" target="_blank" rel="noopener noreferrer" className="footer-contact-link">
                    <i className="fab fa-instagram"></i>
                    <span>Instagram</span>
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/plameniaky" target="_blank" rel="noopener noreferrer" className="footer-contact-link">
                    <i className="fab fa-facebook"></i>
                    <span>Facebook</span>
                  </a>
                </li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h3>Adresa</h3>
              <address className="footer-address">
                <p>Plameniaky oz</p>
                <p>Bratislava</p>
                <p>Slovensko</p>
              </address>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Plameniaky oz. Všetky práva vyhradené.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;