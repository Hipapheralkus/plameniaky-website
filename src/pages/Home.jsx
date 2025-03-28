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
    { url: '/images/hero/deti.jpg', alt: 'Deti na workshope', caption: 'Rozvíjame kreativitu detí' },
    { url: '/images/hero/dospeli.jpg', alt: 'Dospelí žonglujúci', caption: 'Kurzy pre dospelých' },
    { url: '/images/hero/ohen.jpg', alt: 'Ohňová show', caption: 'Nechajte sa očariť ohňom' },
    { url: '/images/hero/led.jpg', alt: 'LED show artistka', caption: 'Moderné LED vystúpenia' },
    { url: '/images/hero/historia.jpg', alt: 'Historická fotka vystúpenia', caption: 'Roky skúseností' },
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
           <h2>Vitajte v Plameniakoch!</h2>
           <p>
              Sme tu, aby sme prinášali radosť, umenie a nové zručnosti do vášho života prostredníctvom cirkusu, hudby a vzdelávania. 
              Objavte s nami čaro pohybu a kreativity!
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