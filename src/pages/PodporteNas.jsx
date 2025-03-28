import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LazyImage from '../components/LazyImage';
import './PodporteNas.css';

const PodporteNas = () => {
  // State for copy button text
  const [copyText, setCopyText] = useState({
    iban: 'Kopírovať',
    swift: 'Kopírovať'
  });

  // Function to copy text to clipboard
  const copyToClipboard = (text, field) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        // Update button text temporarily
        setCopyText(prev => ({
          ...prev,
          [field]: 'Skopírované!'
        }));
        // Reset button text after 2 seconds
        setTimeout(() => {
          setCopyText(prev => ({
            ...prev,
            [field]: 'Kopírovať'
          }));
        }, 2000);
      })
      .catch(err => {
        console.error('Failed to copy: ', err);
      });
  };

  return (
    <div className="podporte-page">
      <div className="page-header">
        <div className="container">
          <h1>Podporte nás</h1>
        </div>
      </div>
      
      <div className="container">
        <div className="content-container">
          <div className="intro-text">
            <p>
              Občianske združenie Plameniaky funguje vďaka podpore ľudí, ktorým záleží na budúcnosti 
              detí a mladých ľudí. Každý príspevok nám pomáha pokračovať v našej práci a rozširovať 
              aktivity, ktoré majú pozitívny vplyv na životy detí.
            </p>
            <p>
              Existuje viacero spôsobov, ako môžete podporiť naše združenie. Vyberte si možnosť, 
              ktorá vám najviac vyhovuje.
            </p>
          </div>
          
          <section className="support-options-section">
            <div className="support-options">
              <div className="support-option-card">
                <div className="support-option-header">
                  <h2>Finančná podpora</h2>
                </div>
                <div className="support-option-body">
                  <p>
                    Finančné dary nám umožňujú realizovať naše aktivity a projekty. Môžete nás podporiť 
                    jednorazovým príspevkom alebo pravidelnou podporou.
                  </p>
                  <ul>
                    <li>Prispejte na náš transparentný účet</li>
                    <li>Venujte 2% z dane</li>
                    <li>Staňte sa pravidelným darcom</li>
                  </ul>
                  <Link to="#bank-info" className="btn">Bankové údaje</Link>
                </div>
              </div>
              
              <div className="support-option-card">
                <div className="support-option-header">
                  <h2>Materiálna pomoc</h2>
                </div>
                <div className="support-option-body">
                  <p>
                    Pre naše aktivity potrebujeme rôzne materiály a vybavenie. Ak môžete poskytnúť 
                    niektoré z položiek, ktoré aktuálne potrebujeme, budeme vám veľmi vďační.
                  </p>
                  <ul>
                    <li>Výtvarné potreby pre kreatívne workshopy</li>
                    <li>Knihy pre projekt Čítame spolu</li>
                    <li>Športové vybavenie pre letné tábory</li>
                  </ul>
                  <Link to="/kontakt" className="btn">Kontaktujte nás</Link>
                </div>
              </div>
              
              <div className="support-option-card">
                <div className="support-option-header">
                  <h2>Dobrovoľníctvo</h2>
                </div>
                <div className="support-option-body">
                  <p>
                    Staňte sa súčasťou nášho tímu a venujte svoj čas a zručnosti deťom a mladým ľuďom. 
                    Hľadáme dobrovoľníkov pre rôzne aktivity a projekty.
                  </p>
                  <ul>
                    <li>Lektori pre vzdelávacie aktivity</li>
                    <li>Mentori pre deti a mladých ľudí</li>
                    <li>Pomoc pri organizácii podujatí</li>
                  </ul>
                  <Link to="/kontakt" className="btn">Mám záujem</Link>
                </div>
              </div>
            </div>
          </section>
          
          <section className="bank-info-section" id="bank-info">
            <h2>Bankové údaje</h2>
            <p>
              Všetky finančné príspevky sú prijímané na náš transparentný účet. Vďaka tomu môžete 
              sledovať, ako sú vaše peniaze využívané na podporu našich aktivít a projektov.
            </p>
            <div className="bank-details">
              <div className="bank-detail">
                <h3>Číslo účtu (IBAN)</h3>
                <p>
                  SK12 1100 0000 0029 4507 8654
                  <button 
                    className="copy-btn" 
                    onClick={() => copyToClipboard('SK12 1100 0000 0029 4507 8654', 'iban')}
                    aria-label="Kopírovať IBAN do schránky"
                  >
                    {copyText.iban}
                  </button>
                </p>
              </div>
              <div className="bank-detail">
                <h3>SWIFT/BIC</h3>
                <p>
                  TATRSKBX
                  <button 
                    className="copy-btn" 
                    onClick={() => copyToClipboard('TATRSKBX', 'swift')}
                    aria-label="Kopírovať SWIFT kód do schránky"
                  >
                    {copyText.swift}
                  </button>
                </p>
              </div>
            </div>
          </section>
          
          <section className="tax-info-section">
            <h2>2% z dane</h2>
            <p>
              Ako občianske združenie máme možnosť prijímať 2% z dane z príjmu. Venovaním 2% z vašej 
              dane nás môžete podporiť bez toho, aby vás to stálo čokoľvek navyše.
            </p>
            <div className="tax-info-steps">
              <div className="tax-step">
                <div className="tax-step-number">1</div>
                <div className="tax-step-content">
                  <h3>Vyplnenie daňového priznania</h3>
                  <p>
                    V daňovom priznaní vyplňte časť venovanú poukázaniu 2% z dane. Potrebujete k tomu 
                    tieto údaje o našom združení:
                  </p>
                  <p>
                    <strong>Názov:</strong> Občianske združenie Plameniaky<br />
                    <strong>Právna forma:</strong> Občianske združenie<br />
                    <strong>IČO:</strong> 12345678<br />
                    <strong>Sídlo:</strong> Hlavná 123, 811 01 Bratislava
                  </p>
                </div>
              </div>
              
              <div className="tax-step">
                <div className="tax-step-number">2</div>
                <div className="tax-step-content">
                  <h3>Podanie daňového priznania</h3>
                  <p>
                    Daňové priznanie spolu s vyhlásením o poukázaní 2% z dane podajte v lehote na 
                    podanie daňového priznania.
                  </p>
                </div>
              </div>
              
              <div className="tax-step">
                <div className="tax-step-number">3</div>
                <div className="tax-step-content">
                  <h3>Informujte nás</h3>
                  <p>
                    Ak ste sa rozhodli venovať nám svoje 2% z dane, budeme radi, ak nás o tom informujete. 
                    Môžeme vás tak zaradiť medzi našich podporovateľov a posielať vám informácie o tom, 
                    ako vaše peniaze pomáhajú.
                  </p>
                </div>
              </div>
            </div>
          </section>
          
          <section className="sponsors-section">
            <h2>Naši partneri</h2>
            <div className="sponsors-grid">
              <div className="sponsor-logo">
                <LazyImage 
                  src="/images/sponsors/sponsor1.jpg" 
                  alt="Logo partnera 1" 
                />
              </div>
              <div className="sponsor-logo">
                <LazyImage 
                  src="/images/sponsors/sponsor2.jpg" 
                  alt="Logo partnera 2" 
                />
              </div>
              <div className="sponsor-logo">
                <LazyImage 
                  src="/images/sponsors/sponsor3.jpg" 
                  alt="Logo partnera 3" 
                />
              </div>
              <div className="sponsor-logo">
                <LazyImage 
                  src="/images/sponsors/sponsor4.jpg" 
                  alt="Logo partnera 4" 
                />
              </div>
            </div>
          </section>
          
          <section className="cta-section">
            <h2>Pomôžte nám robiť zmenu</h2>
            <p>
              Každá forma podpory nám pomáha vytvárať lepšie príležitosti pre deti a mladých ľudí. 
              Pridajte sa k nám a buďte súčasťou pozitívnej zmeny!
            </p>
            <div className="cta-buttons">
              <Link to="/kontakt" className="btn btn-white">Kontaktujte nás</Link>
              <a href="#bank-info" className="btn btn-outline-white">Bankové údaje</a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PodporteNas;