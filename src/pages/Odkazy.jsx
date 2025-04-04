// src/pages/Odkazy.jsx
import React from 'react';
import PageLayout from '../components/PageLayout';
import Section from '../components/Section';
import Grid from '../components/Grid';
import LazyImage from '../components/LazyImage';
import './Odkazy.css'; // Import CSS

const Odkazy = () => {

  // --- SAMPLE DATA STRUCTURE ---
  // You can copy and modify these arrays
  const priateliaVzdelavanie = [
    {
      id: 'knb',
      name: 'Komunitná nadácia Bratislava',
      logo: '/images/partners/knb.png', // Keep existing or add new images
      url: 'https://knb.sk'
    },
    {
      id: 'cirqueon',
      name: 'Cirqueon Praha',
      logo: '/images/friends/cirqueon_logo.png', // << EXAMPLE: ADD ACTUAL IMAGE PATH
      url: 'https://cirqueon.cz'
    },
    // Add more friends in "Vzdelávanie" category here
    // { id: 'friend3', name: 'Názov Priateľa 3', logo: '/images/friends/friend3.png', url: 'https://...' },
  ];

  const priateliaVystupujuci = [
     {
      id: 'dreamdancers',
      name: 'Dreamdancers',
      logo: '/images/friends/dreamdancers_logo.jpg', // << EXAMPLE: ADD ACTUAL IMAGE PATH
      url: 'https://www.dreamdancers.sk/'
     },
     {
      id: 'mimi',
      name: 'Mimi Fortunae',
      logo: '/images/friends/mimi_logo.jpg', // << EXAMPLE: ADD ACTUAL IMAGE PATH
      url: 'https://www.facebook.com/mimi.fortunae/'
     },
    // Add more friends in "Vystupujúci" category here
    // { id: 'friend4', name: 'Názov Priateľa 4', logo: '/images/friends/friend4.png', url: 'https://...' },
  ];
  // --- END SAMPLE DATA ---


  // Vzorové dáta pre odkazy (ponechané bez zmeny)
  const odkazy = [
    { id: 1, title: 'Článok o našom letnom tábore v Denníku N', url: '#', type: 'Článok' },
    { id: 2, title: 'Podcast o novom cirkuse s naším lektorom Mišom', url: '#', type: 'Podcast' },
    // ... other links
  ];

  // Pôvodní partneri (môžete ich nechať alebo presunúť do nových kategórií)
  const legacyPartneri = [
     { id: 1, name: 'Mesto Bratislava', logo: '/images/partners/bratislava.png', url: 'https://bratislava.sk' },
     { id: 2, name: 'Fond na podporu umenia', logo: '/images/partners/fpu.png', url: 'https://fpu.sk' },
     { id: 3, name: 'Nadácia ZSE', logo: '/images/partners/nadacia-zse.png', url: 'https://nadaciazse.sk' },
     // Remove KNB if moved above { id: 4, name: 'Komunitná nadácia Bratislava', logo: '/images/partners/knb.png', url: 'https://knb.sk' },
   ];


  return (
    <PageLayout title="Odkazy, partneri a priatelia" subtitle="Spolupráce, zaujímavé zdroje a ľudia, ktorých máme radi">

        {/* --- Sekcia Priatelia / Spolupráce --- */}
        <Section title="Priatelia a Spolupráce">
            <div className="priatelia-kategorie-grid"> {/* Main grid for categories */}

                {/* --- Kategória Vzdelávanie --- */}
                <div className="priatelia-kategoria">
                    <h3>Vzdelávanie</h3>
                    <Grid type="fluid" minWidth="180px" gap="medium">
                        {priateliaVzdelavanie.map(item => (
                            <div key={item.id} className="priatel-tile">
                                <a href={item.url} target="_blank" rel="noopener noreferrer" className="priatel-tile-link">
                                    <div className="priatel-tile-image-wrapper">
                                        <LazyImage src={item.logo} alt={item.name} />
                                    </div>
                                </a>
                                <p className="priatel-tile-name">{item.name}</p>
                            </div>
                        ))}
                    </Grid>
                </div>

                {/* --- Kategória Vystupujúci --- */}
                 <div className="priatelia-kategoria">
                    <h3>Vystupujúci</h3>
                    <Grid type="fluid" minWidth="180px" gap="medium">
                         {priateliaVystupujuci.map(item => (
                             <div key={item.id} className="priatel-tile">
                                 <a href={item.url} target="_blank" rel="noopener noreferrer" className="priatel-tile-link">
                                     <div className="priatel-tile-image-wrapper">
                                        <LazyImage src={item.logo} alt={item.name} />
                                    </div>
                                 </a>
                                 <p className="priatel-tile-name">{item.name}</p>
                             </div>
                         ))}
                     </Grid>
                </div>

            </div>
        </Section>
        {/* --- Koniec Sekcie Priatelia --- */}


       {/* Sekcia Oficiálni Partneri (Pôvodná) - ak ju chcete nechať */}
       <Section title="Oficiálni Partneri" background="alt" width="wide">
         <p className="text-center mb-3">Ďakujeme našim partnerom za oficiálnu podporu!</p>
         {/* Použitie pôvodného gridu pre logá partnerov */}
         <Grid type="fluid" minWidth="150px" gap="medium" alignment="center" className="partners-grid">
           {legacyPartneri.map(partner => (
             <a
               key={partner.id}
               href={partner.url}
               target="_blank"
               rel="noopener noreferrer"
               className="partner-logo-link" // Použitie pôvodného štýlu pre túto sekciu
               aria-label={`Navštíviť stránku partnera ${partner.name}`}
             >
               <LazyImage src={partner.logo} alt={partner.name} />
             </a>
           ))}
         </Grid>
       </Section>

      {/* Sekcia Odkazy (Ponechaná bez zmeny) */}
      <Section title="Zaujímavé odkazy" width="normal">
         <ul className="link-list">
            {odkazy.map(odkaz => (
                <li key={odkaz.id} className="link-item">
                    <span className="link-type">{odkaz.type}</span>
                    <a href={odkaz.url} target="_blank" rel="noopener noreferrer" className="link-title">
                       {odkaz.title}
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