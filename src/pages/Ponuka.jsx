// src/pages/Ponuka.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Link na detail
import PageLayout from '../components/PageLayout';
import Section from '../components/Section';
import Grid from '../components/Grid';
import LazyImage from '../components/LazyImage';
import './Ponuka.css'; 

const Ponuka = () => {

  // Vzorové dáta pre dlaždice ponuky
  const ponukaItems = [
    { 
      id: 1, 
      title: 'Cirkusové umenie', 
      image: '/images/ponuka/cirkus.jpg', 
      description: 'Žonglovanie, akrobacia, jednokolky, chodúle a oveľa viac pre všetky vekové kategórie.',
      link: '/ponuka/cirkus' // Slug pre detailnú stránku
    },
    { 
      id: 2, 
      title: 'Hudba a Muzikoterapia', 
      image: '/images/ponuka/hudba.jpg', 
      description: 'Objavte liečivú silu hudby a rytmu prostredníctvom interaktívnych workshopov a relaxácií.',
      link: '/ponuka/hudba' 
    },
    { 
      id: 3, 
      title: 'Vzdelávanie a Workshopy', 
      image: '/images/ponuka/vzdelavanie.jpg', 
      description: 'Ponúkame akreditované kurzy, zážitkové workshopy a teambuildingy pre školy aj firmy.',
      link: '/ponuka/vzdelavanie' 
    },
    { 
      id: 4, 
      title: 'Vystúpenia a Show', 
      image: '/images/ponuka/vystupenia.jpg', 
      description: 'Profesionálne ohňové, LED a cirkusové vystúpenia pre vaše podujatia, oslavy a festivaly.',
      link: '/ponuka/vystupenia' 
    },
  ];

  return (
    <PageLayout title="Čo ponúkame">
      <Section>
        <div className="intro-text">
          <p>
            Preskúmajte našu pestrú ponuku aktivít, workshopov a vystúpení. 
            Kliknite na dlaždicu pre viac informácií o konkrétnej kategórii.
          </p>
        </div>

        <Grid type="fixed" columns={2} gap="medium" className="ponuka-grid">
          {ponukaItems.map(item => (
            <Link to={item.link} key={item.id} className="ponuka-tile">
              <div className="ponuka-image-container aspect-16-9">
                <LazyImage src={item.image} alt={item.title} className="ponuka-image" />
                <div className="ponuka-overlay">
                  <p>{item.description}</p>
                </div>
              </div>
              <h3 className="ponuka-title">{item.title}</h3>
            </Link>
          ))}
        </Grid>
      </Section>
      
      {/* Sekcia s odkazom na všetky kategórie (ak máte detailnú stránku) */}
       <Section padding="small" width="narrow">
           <div className="text-center">
               <p>Pre detailný prehľad všetkých našich aktivít navštívte:</p>
               {/* Toto by mohlo viesť na /ponuka/vsetko alebo špeciálnu stránku */}
               <Link to="/ponuka/vsetko" className="btn mt-1">Detailná ponuka aktivít</Link> 
           </div>
       </Section>
    </PageLayout>
  );
};

export default Ponuka;