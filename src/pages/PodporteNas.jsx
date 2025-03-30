// src/pages/PodporteNas.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout'; // Assuming you use PageLayout now
import Section from '../components/Section';
import Grid from '../components/Grid';
import Card from '../components/Card'; // Assuming standard Card component usage
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
        // Optionally provide user feedback about the error
      });
  };

  return (
    // Use PageLayout for consistency
    <PageLayout title="Podporte nás">
      <Section>
        {/* Add className to the intro paragraph */}
        <div className="support-intro-text">
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

        {/* Use Grid for the cards */}
        <Grid type="fixed" columns={3} gap="medium" className="support-options">
          {/* Card 1: Finančná podpora */}
          <Card className="support-option-card">
            {/* Add Icon */}
            <div className="card-icon">
              <i className="fas fa-donate"></i>
            </div>
            {/* Title */}
            <h3 className="card-title">Finančná podpora</h3>
            {/* Content */}
            <p>
              Finančné dary nám umožňujú realizovať naše aktivity a projekty. Môžete nás podporiť
              jednorazovým príspevkom alebo pravidelnou podporou.
            </p>
            <ul className="support-option-list">
              <li>Prispejte na náš transparentný účet</li>
              <li>Venujte 2% z dane</li>
              <li>Staňte sa pravidelným darcom</li>
            </ul>
            {/* Footer Button */}
            <Link to="#bank-info" className="btn">Bankové údaje</Link>
          </Card>

          {/* Card 2: Materiálna pomoc */}
          <Card className="support-option-card">
             {/* Add Icon */}
            <div className="card-icon">
              <i className="fas fa-box-open"></i>
            </div>
            {/* Title */}
            <h3 className="card-title">Materiálna pomoc</h3>
            {/* Content */}
            <p>
              Pre naše aktivity potrebujeme rôzne materiály a vybavenie. Ak môžete poskytnúť
              niektoré z položiek, ktoré aktuálne potrebujeme, budeme vám veľmi vďační.
            </p>
            <ul className="support-option-list">
              <li>Výtvarné potreby pre kreatívne workshopy</li>
              <li>Knihy pre projekt Čítame spolu</li>
              <li>Športové vybavenie pre letné tábory</li>
            </ul>
            {/* Footer Button */}
            <Link to="/kontakt" className="btn">Kontaktujte nás</Link>
          </Card>

          {/* Card 3: Dobrovoľníctvo */}
          <Card className="support-option-card">
             {/* Add Icon */}
            <div className="card-icon">
              <i className="fas fa-hands-helping"></i>
            </div>
            {/* Title */}
            <h3 className="card-title">Dobrovoľníctvo</h3>
            {/* Content */}
            <p>
              Staňte sa súčasťou nášho tímu a venujte svoj čas a zručnosti deťom a mladým ľuďom.
              Hľadáme dobrovoľníkov pre rôzne aktivity a projekty.
            </p>
            <ul className="support-option-list">
              <li>Lektori pre vzdelávacie aktivity</li>
              <li>Mentori pre deti a mladých ľudí</li>
              <li>Pomoc pri organizácii podujatí</li>
            </ul>
            {/* Footer Button */}
            <Link to="/kontakt" className="btn">Mám záujem</Link>
          </Card>
        </Grid>
      </Section>

      {/* Bank info Section */}
      <Section id="bank-info" title="Bankové údaje" background="alt">
        <p className="section-intro"> {/* Reusing intro style or create a specific one */}
          Všetky finančné príspevky sú prijímané na náš transparentný účet. Vďaka tomu môžete
          sledovať, ako sú vaše peniaze využívané na podporu našich aktivít a projektov.
        </p>

        <div className="bank-details">
          <div className="bank-detail">
            <h3>Číslo účtu (IBAN)</h3>
            <p>
              SK12 1100 0000 0029 4507 8654 {/* Replace with actual IBAN */}
              <button
                className="copy-btn"
                onClick={() => copyToClipboard('SK1211000000002945078654', 'iban')} // Ensure no spaces for copying
                aria-label="Kopírovať IBAN do schránky"
              >
                {copyText.iban}
              </button>
            </p>
          </div>
          <div className="bank-detail">
            <h3>SWIFT/BIC</h3>
            <p>
              TATRSKBX {/* Replace with actual SWIFT/BIC */}
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
      </Section>

      {/* 2% Tax Section */}
      <Section title="2% z dane">
        <p className="section-intro"> {/* Reusing intro style or create a specific one */}
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
                <strong>IČO:</strong> 12345678 {/* Replace with actual IČO */} <br />
                <strong>Sídlo:</strong> Dolný Kubín {/* Replace with actual Sídlo */}
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
      </Section>

      {/* Partners Section */}
      <Section title="Naši partneri" background="alt">
         <Grid type="fluid" minWidth="150px" gap="medium" alignment="center" className="sponsors-grid"> {/* Changed Grid type and added minWidth */}
          {/* Replace with actual sponsor data and logos */}
          <div className="sponsor-logo">
            <LazyImage
              src="/images/sponsors/sponsor1.png" /* Placeholder path */
              alt="Logo partnera 1"
            />
          </div>
          <div className="sponsor-logo">
            <LazyImage
              src="/images/sponsors/sponsor2.png" /* Placeholder path */
              alt="Logo partnera 2"
            />
          </div>
          <div className="sponsor-logo">
            <LazyImage
              src="/images/sponsors/sponsor3.png" /* Placeholder path */
              alt="Logo partnera 3"
            />
          </div>
          <div className="sponsor-logo">
            <LazyImage
              src="/images/sponsors/sponsor4.png" /* Placeholder path */
              alt="Logo partnera 4"
            />
          </div>
        </Grid>
      </Section>

      {/* CTA Section */}
      <Section background="primary" className="cta-section" padding="large">
         <div className="text-center" style={{color: 'white'}}> {/* Inline style for example, better in CSS */}
            <h2 style={{color: 'white'}}>Pomôžte nám robiť zmenu</h2>
            <p style={{color: 'rgba(255, 255, 255, 0.9)', maxWidth: '600px', margin: '0 auto 1.5rem auto'}}>
                Každá forma podpory nám pomáha vytvárať lepšie príležitosti pre deti a mladých ľudí.
                Pridajte sa k nám a buďte súčasťou pozitívnej zmeny!
            </p>
            <div className="d-flex justify-center gap-2 mt-3"> {/* Assuming flex utilities from variables.css or similar */}
                <Link to="/kontakt" className="btn btn-white">Kontaktujte nás</Link>
                <a href="#bank-info" className="btn btn-outline-white">Bankové údaje</a>
            </div>
         </div>
      </Section>

    </PageLayout> // Closing PageLayout
  );
};

export default PodporteNas;