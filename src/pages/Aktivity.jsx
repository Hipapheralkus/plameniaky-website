// src/pages/Aktivity.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import Section from '../components/Section';
import Grid from '../components/Grid';
import Card from '../components/Card';
import LazyImage from '../components/LazyImage';
import './Aktivity.css';

const Aktivity = () => {
  // State for image lightbox
  const [lightbox, setLightbox] = useState({
    isOpen: false,
    currentImage: '',
    alt: ''
  });

  // Sample data for programs
  const programs = [
    {
      id: 1,
      title: 'Kreatívne workshopy',
      description: 'Séria workshopov zameraných na rozvoj kreativity a umeleckých zručností detí a mladých ľudí. Účastníci majú možnosť vyskúšať si rôzne techniky a materiály pod vedením skúsených lektorov.',
      image: '/images/activities/creative-workshop.jpg',
      details: {
        age: '8-15 rokov',
        schedule: 'Soboty, 10:00 - 12:00',
        location: 'Kultúrny dom, Bratislava'
      }
    },
    {
      id: 2,
      title: 'Letné tábory',
      description: 'Týždňové tábory počas letných prázdnin, ktoré kombinujú zábavné aktivity, vzdelávanie a pobyt v prírode. Program je navrhnutý tak, aby podporoval spoluprácu, kreativitu a samostatnosť detí.',
      image: '/images/activities/summer-camp.jpg',
      details: {
        age: '6-15 rokov',
        schedule: 'Júl - August',
        location: 'Rôzne lokality pri Bratislave'
      }
    },
    {
      id: 3,
      title: 'Mentorský program',
      description: 'Dlhodobý program zameraný na podporu detí a mladých ľudí prostredníctvom individuálneho mentoringu. Každé dieťa je spárované s mentorom, ktorý mu poskytuje podporu a poradenstvo.',
      image: '/images/activities/mentoring.jpg',
      details: {
        age: '12-18 rokov',
        schedule: 'Celoročne',
        location: 'Online a osobné stretnutia'
      }
    }
  ];

  // Sample data for events
  const events = [
    {
      id: 1,
      title: 'Deň detí s Plameniakmi',
      date: { day: '1', month: 'JÚN', year: '2024' },
      location: 'Park Janka Kráľa, Bratislava',
      description: 'Oslavujte s nami Medzinárodný deň detí! Pripravili sme bohatý program s hrami, súťažami a tvorivými aktivitami pre celú rodinu.',
    },
    {
      id: 2,
      title: 'Víkendový workshop: Upcyklácia',
      date: { day: '15', month: 'JÚL', year: '2024' },
      location: 'EkoCentrum, Bratislava',
      description: 'Naučte sa vytvárať nové užitočné predmety z materiálov, ktoré by inak skončili v odpade. Workshop je vhodný pre deti od 10 rokov v sprievode dospelej osoby.',
    },
    {
      id: 3,
      title: 'Prednáška: Ako podporiť sebavedomie detí',
      date: { day: '5', month: 'SEP', year: '2024' },
      location: 'Online (Zoom)',
      description: 'Prednáška pre rodičov, učiteľov a všetkých, ktorí pracujú s deťmi. Diskutovať budeme o praktických tipoch a stratégiách, ako podporiť zdravé sebavedomie detí.',
    }
  ];

  // Sample data for projects
  const projects = [
    {
      id: 1,
      title: 'Čítame spolu',
      status: 'ongoing',
      description: 'Projekt zameraný na podporu čitateľskej gramotnosti detí zo sociálne znevýhodneného prostredia. Dobrovoľníci sa pravidelne stretávajú s deťmi a čítajú s nimi knihy, diskutujú o prečítanom a pomáhajú im rozvíjať lásku k čítaniu.',
      image: '/images/activities/reading-project.jpg'
    },
    {
      id: 2,
      title: 'Bezpečne online',
      status: 'completed',
      description: 'Séria workshopov a prednášok zameraných na digitálnu gramotnosť a bezpečnosť detí a mladých ľudí na internete. Projekt bol realizovaný v spolupráci s miestnymi školami a zahŕňal aktivity pre deti, rodičov aj učiteľov.',
      image: '/images/activities/online-safety.jpg'
    },
    {
      id: 3,
      title: 'Zelené školy',
      status: 'planned',
      description: 'Pripravovaný projekt zameraný na environmentálnu výchovu a vzdelávanie. Cieľom je podporiť školy pri zavádzaní ekologických opatrení a vzdelávať deti o dôležitosti ochrany životného prostredia prostredníctvom praktických aktivít.',
      image: '/images/activities/green-schools.jpg'
    }
  ];

  // Gallery images
  const galleryImages = Array.from({ length: 8 }).map((_, index) => 
    `/images/gallery/activity${index + 1}.jpg`
  );

  // Open lightbox
  const openLightbox = (image, alt) => {
    setLightbox({
      isOpen: true,
      currentImage: image,
      alt: alt
    });
    document.body.style.overflow = 'hidden';
  };

  // Close lightbox
  const closeLightbox = () => {
    setLightbox({
      ...lightbox,
      isOpen: false
    });
    document.body.style.overflow = 'auto';
  };

  return (
    <Layout title="Aktivity">
      <Section>
        <div className="intro-text">
          <p>
            V Plameniaky oz organizujeme široké spektrum aktivít zameraných na rozvoj detí a mladých ľudí. 
            Od pravidelných workshopov, cez letné tábory, až po dlhodobé projekty a komunitné podujatia - 
            naším cieľom je vytvárať zmysluplné príležitosti pre osobnostný rast, vzdelávanie a zábavu.
          </p>
        </div>
      </Section>
      
      <Section title="Naše programy">
        <Grid columns="auto">
          {programs.map(program => (
            <div className="program-card" key={program.id}>
              <div className="program-image aspect-16-9">
                <LazyImage 
                  src={program.image} 
                  alt={program.title} 
                />
              </div>
              <div className="program-content">
                <h3>{program.title}</h3>
                <p>{program.description}</p>
                <div className="program-details">
                  <div className="program-detail">
                    <i className="fas fa-child"></i>
                    <span>{program.details.age}</span>
                  </div>
                  <div className="program-detail">
                    <i className="far fa-calendar-alt"></i>
                    <span>{program.details.schedule}</span>
                  </div>
                  <div className="program-detail">
                    <i className="fas fa-map-marker-alt"></i>
                    <span>{program.details.location}</span>
                  </div>
                </div>
                <Link to="/kontakt" className="btn">Mám záujem</Link>
              </div>
            </div>
          ))}
        </Grid>
      </Section>
      
      <Section title="Pripravované podujatia" background="alt">
        <div className="events-timeline">
          {events.map(event => (
            <div className="event-card" key={event.id}>
              <div className="event-date">
                <div className="event-month">{event.date.month}</div>
                <div className="event-day">{event.date.day}</div>
                <div className="event-year">{event.date.year}</div>
              </div>
              <div className="event-info">
                <h3>{event.title}</h3>
                <div className="event-location">
                  <i className="fas fa-map-marker-alt"></i>
                  <span>{event.location}</span>
                </div>
                <p>{event.description}</p>
                <Link to="/kontakt" className="btn">Prihlásiť sa</Link>
              </div>
            </div>
          ))}
        </div>
      </Section>
      
      <Section title="Naše projekty">
        <div className="projects-list">
          {projects.map(project => (
            <div className="project-item" key={project.id}>
              <div className="project-image aspect-16-9">
                <LazyImage 
                  src={project.image} 
                  alt={project.title} 
                />
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <div className={`project-status ${project.status}`}>
                  {project.status === 'ongoing' ? 'Prebiehajúci' : 
                  project.status === 'completed' ? 'Ukončený' : 'Pripravovaný'}
                </div>
                <p>{project.description}</p>
                <Link to="/kontakt" className="btn">Viac informácií</Link>
              </div>
            </div>
          ))}
        </div>
      </Section>
      
      <Section title="Fotogaléria" background="alt">
        <Grid columns={4} className="gallery-grid">
          {galleryImages.map((image, index) => (
            <div 
              className="gallery-item aspect-1-1" 
              key={index}
              onClick={() => openLightbox(image, `Aktivita ${index + 1}`)}
            >
              <LazyImage 
                src={image} 
                alt={`Aktivita ${index + 1}`} 
                className="gallery-image"
              />
            </div>
          ))}
        </Grid>
      </Section>
      
      {/* Lightbox */}
      {lightbox.isOpen && (
        <div className="lightbox" onClick={closeLightbox}>
          <button className="close-button" onClick={closeLightbox} aria-label="Zatvoriť">
            &times;
          </button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img 
              src={lightbox.currentImage} 
              alt={lightbox.alt} 
              className="lightbox-image"
            />
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Aktivity;