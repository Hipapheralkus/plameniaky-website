// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
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

  // --- New Slideshow Images for Cirkusovy Kruzok ---
  const kruzokSlideshowImages = [
    { url: '/images/kruzok/cirkusovyKruzok01.webp', alt: 'Cirkusový krúžok - Plagát 1' }, // Captions optional here
    { url: '/images/kruzok/cirkusovyKruzok02.webp', alt: 'Cirkusový krúžok - Plagát 2' },
    { url: '/images/kruzok/cirkusovyKruzok03.webp', alt: 'Cirkusový krúžok - Plagát 3' },
    { url: '/images/kruzok/cirkusovyKruzok04.webp', alt: 'Cirkusový krúžok - Plagát 4' },
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
           <p className="slogan" style={{fontSize: '1.3rem', fontWeight: '500', fontStyle: 'italic', color: 'var(--color-primary)', marginBottom: '1.5rem'}}>Rozvíjame radosťou</p>
           <p>
              Sme tu, aby sme prinášali radosť, umenie a nové zručnosti do vášho života prostredníctvom cirkusu, hudby a vzdelávania.
              Zažite s nami čaro pohybu a kreativity!
           </p>
           <Link to="/ponuka" className="btn mt-2">
               Objavte našu ponuku
           </Link>
           <br></br> <br></br>
           <p>

  <a
    href="https://forms.gle/cwaRkyBK346zsGgf7"
    className="btn large-btn"
    target="_blank"
    rel="noopener noreferrer"
  >
    Prihláška na krúžok
  </a>
  </p>

         </div>
      </Section>

      {/* --- Section for Cirkusovy Kruzok Slideshow Tile --- */}
      <Section
        title="Aktuálne: Cirkusový Krúžok"
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