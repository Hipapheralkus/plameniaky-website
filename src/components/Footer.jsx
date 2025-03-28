// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-content-simple"> {/* Použitie jednoduchšieho layoutu pre menej stĺpcov */}
          
          <div className="footer-column footer-column-center">
            <h3>Menu</h3>
            <ul>
              <li>
                <Link to="/">Domov</Link>
              </li>
              <li>
                <Link to="/ponuka">Ponuka</Link>
              </li>
              <li>
                <Link to="/kontakt">Kontakt</Link>
              </li>
              {/* Môžete pridať aj ďalšie dôležité linky */}
            </ul>
          </div>
            
          <div className="footer-column footer-column-center">
            <h3>Sociálne siete</h3>
            <div className="footer-social-icons">
               <a href="https://www.instagram.com/plameniaky_oz" target="_blank" rel="noopener noreferrer" aria-label="Instagram Plameniaky OZ">
                   <i className="fab fa-instagram"></i>
               </a>
               <a href="https://www.facebook.com/plameniaky" target="_blank" rel="noopener noreferrer" aria-label="Facebook Plameniaky OZ">
                   <i className="fab fa-facebook"></i>
               </a>
               {/* Pridajte ďalšie ikony podľa potreby */}
            </div>
          </div>
                      
        </div>
        
        <div className="footer-bottom">
          {/* Použite názov vašej stránky */}
          <p>&copy; {currentYear} Plameniaky.sk. Všetky práva vyhradené.</p> 
        </div>
      </div>
    </footer>
  );
};

export default Footer;