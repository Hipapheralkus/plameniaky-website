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
      title: 'Letný cirkusový tábor pre deti',
      date: '15. - 19. Júl 2025',
      location: 'Rekreačné stredisko Jahodník',
      image: '/images/events/tabor.jpg',
      description: 'Zažite týždeň plný žonglovania, akrobacie, hier a zábavy v krásnom prostredí Malých Karpát.',
      infoUcastnici: 'Vek: 8-14 rokov. Trvanie: 5 dní (Po-Pi). Nie sú potrebné predchádzajúce skúsenosti.',
      infoRodicia: 'Zabezpečená strava 5x denne, pitný režim, ubytovanie a skúsení lektori. Odporúčame pribaliť športové oblečenie a fľašu na vodu.',
      link: '/registracia/letny-tabor-2025' // Príklad linku
    },
    {
      id: 2,
      title: 'Workshop párovej akrobacie pre dospelých',
      date: '28. Apríl 2025, 18:00 - 20:00',
      location: 'Tanečné štúdio Fly, Bratislava',
      image: '/images/events/parova-akro.jpg',
      description: 'Príďte si vyskúšať základy párovej akrobacie a posilniť dôveru s partnerom/kamarátom. Vhodné pre začiatočníkov.',
      infoUcastnici: 'Vek: 18+. Trvanie: 2 hodiny. Vhodné prísť v páre, ale nie je podmienkou.',
      infoRodicia: null, // Nie je relevantné
      link: '#' // Príklad linku
    },
    {
      id: 3,
      title: 'Ohňová show na festivale Atmosféra',
      date: '3. August 2025, 21:30',
      location: 'Festival Atmosféra, Hontianske Nemce',
      image: '/images/events/ohen-festival.jpg',
      description: 'Príďte sa pozrieť na naše veľkolepé ohňové vystúpenie plné tanca, žonglovania a pyrotechnických efektov.',
      infoUcastnici: 'Vhodné pre všetky vekové kategórie.',
      infoRodicia: 'Podujatie sa koná vonku vo večerných hodinách.',
      link: 'https://festivalatmosfera.sk' // Príklad linku na externú stránku
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