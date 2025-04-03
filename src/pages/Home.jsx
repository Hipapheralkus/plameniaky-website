// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import Section from '../components/Section';
import Slideshow from '../components/Slideshow'; // Import nového komponentu
import './Home.css';

const Home = () => {

  // Vzorové obrázky pre slideshow
  const slideshowImages = [
    { url: '/images/carousel_1.webp', alt: 'Deti na workshope', caption: 'Rozvíjame kreativitu detí' },
    { url: '/images/carousel_2.webp', alt: 'Dospelí žonglujúci', caption: 'Kurzy pre dospelých' },
    { url: '/images/carousel_3.webp', alt: 'Ohňová show', caption: 'Nechajte sa očariť ohňom' },
  ];

  return (
    <PageLayout type="hero">
      {/* Slideshow namiesto statického hero obrázku */}
      <Slideshow images={slideshowImages} interval={4000} />

      {/* Uvítacia sekcia */}
      <Section
        padding="large"
        width="narrow" // Užší kontajner pre text
      >
         <div className="intro-text text-center"> {/* Centrovaný text */}
           <h2>Vitajte medzi Plameniakmi!</h2>
           <p className="slogan" style={{fontSize: '1.2rem', fontWeight: '500', fontStyle: 'italic', color: 'var(--color-primary)', marginBottom: '1.5rem'}}>Rozvíjame radosťou</p> {/* <-- Pridaný slogan */}
           <p>
              Sme tu, aby sme prinášali radosť, umenie a nové zručnosti do vášho života prostredníctvom cirkusu, hudby a vzdelávania.
              Zažite s nami čaro pohybu a kreativity!
           </p>
           <Link to="/ponuka" className="btn mt-2">
               Objavte našu ponuku
           </Link>
         </div>
      </Section>

      {/* Môžete sem pridať ďalšie sekcie podľa potreby, napr.: */}
      {/* - Sekcia s rýchlym prehľadom ponuky (napr. 3 karty) */}
      {/* - Sekcia s najbližšou akciou */}
      {/* - Sekcia s krátkym predstavením O nás */}

    </PageLayout>
  );
};

export default Home;