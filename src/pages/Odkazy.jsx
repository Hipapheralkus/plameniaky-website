// src/pages/Odkazy.jsx
import React from 'react';
// import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import Section from '../components/Section';
import Grid from '../components/Grid';
import LazyImage from '../components/LazyImage';
import './Odkazy.css';

const Odkazy = () => {

  // Vzorové dáta pre partnerov - nahraďte reálnymi
  const partneri = [
    { id: 1, name: 'Mesto Bratislava', logo: '/images/partners/bratislava.png', url: 'https://bratislava.sk' },
    { id: 2, name: 'Fond na podporu umenia', logo: '/images/partners/fpu.png', url: 'https://fpu.sk' },
    { id: 3, name: 'Nadácia ZSE', logo: '/images/partners/nadacia-zse.png', url: 'https://nadaciazse.sk' },
    { id: 4, name: 'Komunitná nadácia Bratislava', logo: '/images/partners/knb.png', url: 'https://knb.sk' },
    // Pridajte ďalších partnerov
  ];

  // Vzorové dáta pre odkazy - nahraďte reálnymi
  const odkazy = [
    { id: 1, title: 'Článok o našom letnom tábore v Denníku N', url: '#', type: 'Článok' },
    { id: 2, title: 'Podcast o novom cirkuse s naším lektorom Mišom', url: '#', type: 'Podcast' },
    { id: 3, title: 'Reportáž o festivale Cirkul\'art (kde sme vystupovali)', url: '#', type: 'Video' },
    { id: 4, title: 'Webstránka European Juggling Convention', url: 'https://ejc2025.org', type: 'Webstránka' }, // Príklad externého odkazu
    // Pridajte ďalšie odkazy
  ];

  return (
    <PageLayout title="Odkazy a partneri" subtitle="Zdroje pre inšpiráciu a fungujúce partnertvá">
      
      {/* Sekcia Partneri */}
      <Section title="Partneri" background="alt" width="wide">
        <p className="text-center mb-3">Tešíme sa zo spolupráce s týmito subjektami!</p>
        
        <Grid type="fluid" minWidth="150px" gap="medium" alignment="center" className="partners-grid">
          {partneri.map(partner => (
            <a 
              key={partner.id} 
              href={partner.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="partner-logo-link"
              aria-label={`Navštíviť stránku partnera ${partner.name}`}
            >
              <LazyImage src={partner.logo} alt={partner.name} />
            </a>
          ))}
        </Grid>
      </Section>

      {/* Sekcia Odkazy */}
      <Section title="Zaujímavé odkazy" width="normal">
         <ul className="link-list">
            {odkazy.map(odkaz => (
                <li key={odkaz.id} className="link-item">
                    <span className="link-type">{odkaz.type}</span>
                    <a href={odkaz.url} target="_blank" rel="noopener noreferrer" className="link-title">
                       {odkaz.title} 
                       {/* Ikona pre externý odkaz */}
                       {!odkaz.url.startsWith('#') && !odkaz.url.startsWith('/') && ( 
                            <i className="fas fa-external-link-alt external-link-icon"></i> 
                       )}
                    </a>
                </li>
            ))}
         </ul>
      </Section>
      
    </PageLayout>
  );
};

export default Odkazy;