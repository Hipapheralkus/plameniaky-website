// src/pages/CoNasCaka.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import Section from '../components/Section';
import LazyImage from '../components/LazyImage';
import './CoNasCaka.css';

const CoNasCaka = () => {
  // Vzorové dáta pre nadchádzajúce akcie - nahraďte reálnymi dátami
  const nadchadzajuceAkcie = [
    {
      id: 1,
      title: 'Krúžok nového cirkusu',
      date: 'každý štvrtok od 14:00 do 16:00',
      location: 'Obchodná akadémia, Dolný Kubín',
      image: '/images/kruzok_2.jpg',
      description: 'Prídťe sa zabaviť a naučiť sa niečo nové!',
      infoUcastnici: 'Otvorené pre všetkých od 10 rokov vyššie. Žiadne predošlé zručnosti neočakávame.',
      infoRodicia: 'Prosíme zabezpečiť vhodné oblečenie na pohyb a intertiérovú obuv. Aktivita je bezplatná.',
      link: null // Príklad linku
    },
    {
      id: 2,
      title: 'Svetový deň cirkusu',
      date: '11. - 13. apríl 2025',
      location: 'Bratislava',
      image: '/images/sdc_2024.jpg',
      description: 'Komunitný festival nového cirkusu .',
      infoUcastnici: 'Naši študenti sa chystajú odprezentovať svoje nové vystúpenie, skúsiť si rôzne workshopy a popri tom aj trochu dobrovolníčiť.',
      infoRodicia: 'Zabezpečená strava, doprava aj ubytovanie.',
      link: 'https://www.cirkuskus.sk/festival-sdc' // Príklad linku
    },
    {
      id: 3,
      title: 'Nehejtujem, dávam lajk',
      date: '30. apríl 2025',
      location: 'Mestské kultúrne stredisko Dolný Kubín',
      image: '/images/nehejt_2024.jpg',
      description: 'Preventívno-osvetové podujatie pre školy.',
      infoUcastnici: 'Prezentácia predstavenia Odchod neistý + následný workshop pre divákov.',
      infoRodicia: null, // Nie je relevantné
      link: null // Príklad linku
    },
    {
      id: 4,
      title: 'Míľa pre mamu',
      date: '10. máj 2025',
      location: 'Námestovo',
      image: '/images/mila_2022.jpg',
      description: 'Zábavné podujatie pre celú rodinu pri príležitosti najväčšej oslavy Dňa matiek na Slovensku.',
      infoUcastnici: 'Medzi bohatý program podujatia je zaradený aj náš cirkusový workshop.',
      link: null
    },
    {
      id: 5,
      title: 'Summer Time Music',
      date: '3.-8. august 2025',
      location: 'Hotel Orava, Srňacie, Dolný Kubín',
      image: '/images/eventy/stm_2024_1.jpg',
      description: 'Interpretačné kurzy pre študentov hudby v lone prírody.',
      infoUcastnici: 'Individuálne hodiny s lektorom každý deň, skupinové workshopy, ansámble aj záverečný koncert.',
      link: 'www.summertimemusic.sk'
    },
    // Pridajte ďalšie akcie
  ];

  return (
    <PageLayout title="Čo nás čaká" subtitle="prehľad plánovaných podujatí">
      <Section width="wide">
        {nadchadzajuceAkcie.length > 0 ? (
          // Add a class that indicates how many items are in the grid
          <div className={`section-content items-${nadchadzajuceAkcie.length}`}>
            {nadchadzajuceAkcie.map(akcia => (
              <div key={akcia.id} className="event-tile">
                <div className="event-image-container aspect-16-9">
                  <LazyImage src={akcia.image} alt={akcia.title} className="event-image"/>
                </div>
                <div className="event-content">
                  <h2>{akcia.title}</h2>
                  <div className="event-meta">
                    <span><i className="far fa-calendar-alt"></i> {akcia.date}</span>
                    <span><i className="fas fa-map-marker-alt"></i> {akcia.location}</span>
                  </div>
                  <p className="event-description">{akcia.description}</p>
                  
                  {/* Informácie pre účastníkov / rodičov */}
                  <div className="event-info-sections">
                    {akcia.infoUcastnici && (
                      <div className="event-info">
                        <h4>Informácie pre účastníkov:</h4>
                        <p>{akcia.infoUcastnici}</p>
                      </div>
                    )}
                    {akcia.infoRodicia && (
                      <div className="event-info">
                        <h4>Informácie pre rodičov:</h4>
                        <p>{akcia.infoRodicia}</p>
                      </div>
                    )}
                  </div>

                  {/* Odkaz na viac info / registráciu */}
                  {akcia.link && (
                    <div className="event-link">
                      {/* Rozlíšenie interného a externého linku */}
                      {akcia.link.startsWith('/') ? (
                        <Link to={akcia.link} className="btn">Viac info / Registrácia</Link>
                      ) : (
                        <a href={akcia.link} target="_blank" rel="noopener noreferrer" className="btn">Navštíviť stránku podujatia</a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center">
            <p>Momentálne nemáme naplánované žiadne verejné akcie. Sledujte nás pre aktuálne informácie!</p>
            <Link to="/kontakt" className="btn mt-2">Kontaktujte nás pre súkromnú akciu</Link>
          </div>
        )}
      </Section>
    </PageLayout>
  );
};

export default CoNasCaka;