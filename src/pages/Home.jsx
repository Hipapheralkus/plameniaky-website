import React from 'react';
import { Link } from 'react-router-dom';
import LazyImage from '../components/LazyImage';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <div className="hero-section">
        <div className="container">
          <div className="content-container">
            <div className="hero-content">
              <h1>Plameniaky oz</h1>
              <h2>Občianske združenie z Bratislavy</h2>
              <p>Pomáhame deťom rozvíjať ich potenciál a budovať lepšiu budúcnosť</p>
              <div className="hero-buttons">
                <Link to="/o-nas" className="btn">Spoznajte nás</Link>
                <Link to="/kontakt" className="btn btn-outline">Kontaktujte nás</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="home-intro">
        <div className="container">
          <div className="content-container">
            <h2 className="section-title">Vitajte na našej stránke</h2>
            <div className="intro-content">
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
          </div>
        </div>
      </section>

      <section className="home-activities">
        <div className="container">
          <div className="content-container">
            <h2 className="section-title">Naše aktivity</h2>
            <div className="activities-grid">
              <div className="activity-card">
                <div className="activity-icon">
                  <i className="fas fa-users"></i>
                </div>
                <h3>Komunitné projekty</h3>
                <p>Vytvárame priestor pre komunitné aktivity a podporujeme miestne iniciatívy zamerané na deti a rodiny.</p>
              </div>

              <div className="activity-card">
                <div className="activity-icon">
                  <i className="fas fa-seedling"></i>
                </div>
                <h3>Vzdelávacie programy</h3>
                <p>Organizujeme workshopy a semináre, ktoré podporujú tvorivé myslenie a získavanie nových zručností.</p>
              </div>

              <div className="activity-card">
                <div className="activity-icon">
                  <i className="fas fa-hand-holding-heart"></i>
                </div>
                <h3>Sociálna pomoc</h3>
                <p>Pomáhame rodinám v núdzi a deťom, ktoré potrebujú extra podporu na ceste k lepšej budúcnosti.</p>
              </div>
            </div>
            <div className="activities-button">
              <Link to="/aktivity" className="btn">Všetky aktivity</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="home-gallery">
        <div className="container">
          <div className="content-container">
            <h2 className="section-title">Z našich aktivít</h2>
            <div className="gallery-grid">
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
            </div>
          </div>
        </div>
      </section>

      <section className="home-contact">
        <div className="container">
          <div className="content-container">
            <h2>Máte otázky? Kontaktujte nás</h2>
            <p>Sme tu pre vás a radi vám pomôžeme s akýmikoľvek otázkami.</p>
            <Link to="/kontakt" className="btn btn-white">Kontaktný formulár</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;