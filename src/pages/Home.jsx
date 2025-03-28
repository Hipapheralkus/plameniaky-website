// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import Section from '../components/Section';
import Grid from '../components/Grid';
import Card from '../components/Card';
import LazyImage from '../components/LazyImage';
import './Home.css'; // Keep page-specific styles

const Home = () => {
  return (
    <PageLayout 
      type="hero" // Use hero layout which removes the standard header
    >
      {/* Hero Section - Stays outside standard sections */}
      <div className="hero-section">
        <div className="container">
          <div className="content-container">
            <div className="hero-content">
              <h1>Plameniaky oz</h1>
              <h2>Občianske združenie z Bratislavy</h2>
              <p>Pomáhame deťom rozvíjať ich potenciál a budovať lepšiu budúcnosť</p>
              <div className="hero-buttons">
                <Link to="/o-nas" className="btn">Spoznajte nás</Link>
                <Link to="/kontakt" className="btn btn-outline-white">Kontaktujte nás</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Intro Section */}
      <Section 
        title="Vitajte na našej stránke"
        width="normal" // Standard width container
        padding="large" // More vertical padding
      >
        <div className="intro-text">
          <p>
            Sme občianske združenie Plameniaky, ktoré sa venuje podpore rozvoja detí a mládeže. 
            Naším cieľom je vytvárať bezpečný priestor pre rozvoj osobnosti, kreativity a talentu.
          </p>
          <p>
            Prostredníctvom našich aktivít a projektov prispievame k zlepšeniu kvality života 
            detí a mladých ľudí na Slovensku. Veríme, že každé dieťa má právo na šťastné detstvo 
            a príležitosti rozvíjať svoj potenciál.
          </p>
          <Link to="/o-nas" className="read-more">Chcem sa dozvedieť viac</Link>
        </div>
      </Section>

      {/* Activities Section */}
      <Section 
        title="Naše aktivity" 
        background="alt" // Alternate background color
        width="wide" // Use a wider container
        padding="large"
      >
        <Grid 
          type="fixed"
          columns={3}
          gap="medium"
          equalHeight={true}
        >
          <Card title="Komunitné projekty">
            <div className="activity-icon">
              <i className="fas fa-users"></i>
            </div>
            <p className="card-text">
              Vytvárame priestor pre komunitné aktivity a podporujeme miestne iniciatívy 
              zamerané na deti a rodiny.
            </p>
          </Card>

          <Card title="Vzdelávacie programy">
            <div className="activity-icon">
              <i className="fas fa-seedling"></i>
            </div>
            <p className="card-text">
              Organizujeme workshopy a semináre, ktoré podporujú tvorivé myslenie 
              a získavanie nových zručností.
            </p>
          </Card>

          <Card title="Sociálna pomoc">
            <div className="activity-icon">
              <i className="fas fa-hand-holding-heart"></i>
            </div>
            <p className="card-text">
              Pomáhame rodinám v núdzi a deťom, ktoré potrebujú extra podporu 
              na ceste k lepšej budúcnosti.
            </p>
          </Card>
        </Grid>
        <div className="text-center mt-3"> {/* Use margin utility from variables.css */}
          <Link to="/aktivity" className="btn">Všetky aktivity</Link>
        </div>
      </Section>

      {/* Gallery Section - Using extra-wide layout for 4K */}
      <Section 
        title="Z našich aktivít"
        width="extra-wide" // Use extra-wide container for gallery on large screens
        padding="large"
      >
        <Grid 
          type="fixed"
          columns={4} // Will adapt based on grid CSS media queries
          gap="medium"
          className="gallery-grid"
        >
          <div className="gallery-item aspect-1-1">
            <LazyImage 
              src="/images/gallery/activity1.jpg" 
              alt="Aktivita 1" 
              className="gallery-image"
            />
          </div>
          <div className="gallery-item aspect-1-1">
            <LazyImage 
              src="/images/gallery/activity2.jpg" 
              alt="Aktivita 2" 
              className="gallery-image"
            />
          </div>
          <div className="gallery-item aspect-1-1">
            <LazyImage 
              src="/images/gallery/activity3.jpg" 
              alt="Aktivita 3" 
              className="gallery-image"
            />
          </div>
          <div className="gallery-item aspect-1-1">
            <LazyImage 
              src="/images/gallery/activity4.jpg" 
              alt="Aktivita 4" 
              className="gallery-image"
            />
          </div>
        </Grid>
      </Section>

      {/* CTA Section - Full width background */}
      <Section 
        background="primary" // Primary color background
        padding="large"
        width="full" // Ensures background spans full width, content centered via container
        className="cta-section" // Keep specific class if needed for Home.css styling
        container={false} // Let the inner container handle centering
      >
        <div className="container"> {/* Standard container to center content */}
          <div className="content-container text-center"> {/* Center text */}
            <h2>Máte otázky? Kontaktujte nás</h2>
            <p>Sme tu pre vás a radi vám pomôžeme s akýmikoľvek otázkami.</p>
            <Link to="/kontakt" className="btn btn-white">Kontaktný formulár</Link>
          </div>
        </div>
      </Section>
    </PageLayout>
  );
};

export default Home;