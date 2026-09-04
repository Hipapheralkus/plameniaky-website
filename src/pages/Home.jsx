// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router';
import PageLayout from '../components/PageLayout';
import Section from '../components/Section';
import Slideshow from '../components/Slideshow'; // Import Slideshow component
import './Home.css'; // Make sure Home.css is imported

const Home = () => {

  // --- Original Slideshow Images (Keep these) ---
  const originalSlideshowImages = [
    { url: '/images/carousel_1.webp', alt: 'Deti na workshope', caption: 'Rozvíjame kreativitu detí' },
    { url: '/images/carousel_2.webp', alt: 'Vystúpenia', caption: 'Prinášame radosť, kde sa dá' },
    { url: '/images/carousel_3.webp', alt: 'Jednokolky', caption: 'Pracujeme s rovnováhou a koordináciou' },
    { url: '/images/carousel_4.webp', alt: 'Pojky', caption: 'Ponúkame pohybové programy aj pre dospelých' },
  ];

  // --- New Slideshow Images for Cirkusove kurzy ---
  const kruzokSlideshowImages = [
    { url: '/images/kruzok/kurzy_s_rodicom.webp', alt: 'Cirkus pre rodičov s deťmi' }, // Captions optional here
    { url: '/images/kruzok/kurzy_dospeli.webp', alt: 'Cirkus pre dospelých' },
    { url: '/images/kruzok/kurzy_uvod.webp', alt: 'Úvod do cirkusu' },
    { url: '/images/kruzok/kurzy_adaptovany.webp', alt: 'Adaptovaný cirkus' },
    { url: '/images/kruzok/kurzy_zadok.webp', alt: 'Rozvíjame radosťou' },
  ];

  return (
    <PageLayout type="hero">
      {/* --- Original Slideshow (Top) --- */}
      <Slideshow images={originalSlideshowImages} interval={4000} />

      {/* --- Uvítacia sekcia --- */}
      <Section
        padding="large"
        width="narrow"
      >
         <div className="intro-text text-center">
           <h2>Vitajte medzi Plameniakmi!</h2>
           <p className="home-slogan">Centrum hravého rozvoja</p>
           <p>
              Sme tu, aby sme prinášali radosť, umenie a nové zručnosti do vášho života prostredníctvom cirkusu, hudby a vzdelávania.
              Zažite s nami čaro pohybu a kreativity!
           </p>
           <div className="home-cta-stack">
             <Link to="/ponuka" className="btn">
               Objavte našu ponuku
             </Link>
             <a
               href="https://forms.gle/EwDeAoeHNMhPYEJS7"
               className="btn large-btn"
               target="_blank"
               rel="noopener noreferrer"
             >
               Prihláška na kurzy
             </a>
           </div>
         </div>
      </Section>

      {/* --- Section for Cirkusovy Kruzok Slideshow Tile --- */}
      <Section
        title="Aktuálne: Cirkusové kurzy"
        padding="normal"
        width="normal" // Keep section width normal or narrow
        background="alt"
      >
          {/* --- Add wrapper div for square tile styling --- */}
          <div className="kruzok-slideshow-tile">
              <Slideshow images={kruzokSlideshowImages} interval={5000} />
          </div>
          {/* --- End wrapper div --- */}

          <div className="text-center mt-3">
              <Link to="/kontakt" className="btn">Viac informácií</Link>
          </div>
      </Section>
      {/* --- End NEW Section --- */}

    </PageLayout>
  );
};

export default Home;