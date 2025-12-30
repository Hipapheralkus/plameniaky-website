// src/pages/ONas.jsx
import React from 'react';
import PageLayout from '../components/PageLayout';
import Section from '../components/Section';
import Grid from '../components/Grid';
import LazyImage from '../components/LazyImage';
import './ONas.css';

const ONas = () => {
  // 🔹 TÍM
  const teamMembers = [
    {
      id: 1,
      name: 'Janko Šimko',
      position: 'Zakladateľ a hlavný lektor',
      photo: '/images/janko_1.webp',
      bio: 'Janko je dušou Plameniakov. S rokmi skúseností v hudbe, cirkusovom umení a pedagogike vedie väčšinu kurzov a vystúpení. Hudbe sa venuje od 7 rokov a aktuálne študuje ročný kurz muzikoterapie v Ostrave. Zároveň pôsobil ako lektor v najväčšej cirkusovej škole v Austrálii a svoje nadobudnuté skúsenosti teraz pretavuje do organizovania a učenia mnohých podujatí naprieč Slovenskom. V minulom roku bol menovaný aj za ambasádora Česko-Slovenskej skupiny pre mladý a sociálny cirkus Cirkonet.',
      social: [
        { icon: 'envelope', url: 'mailto:info@plameniaky.sk' },
        { icon: 'instagram', url: 'https://www.instagram.com/janko.showman' },
        { icon: 'facebook', url: 'https://www.facebook.com/Janko.Showman' }
      ]
    },
    {
      id: 2,
      name: 'Vsevolod Petrov',
      position: 'Lektor nového cirkusu a klaun',
      photo: '/images/seva_4.webp',
      bio: 'Slovensko-ukrajinský cirkusový umelec, klaun, mím, hudobník aj technicky smerovaný chlap. Člen Asociácie profesionálnych mímov Slovenska a slovenského Cirkonetu, od roku 2023 pôsobí ako lektor na cirkusovom krúžku v Dolnom Kubine. Od malička sa pohybuje v umení a má za sebou veľa rôznych umeleckých festivalov a podujatí. Je žiakom slovenského míma Miroslava Kasprzyka, Theatru DEREVO a ďalších.',
      social: [
        { icon: 'instagram', url: 'https://www.instagram.com/vesel0v0d' }
      ]
    },

  ];

  // 🔹 DONORI
  const donors = [
    {
      id: 1,
      name: 'Medzinárodný vyšehradský fond',
      description: (
        
        <>
        Podpora projektu {' '}
         <a
        href="https://www.summertimemusic.sk/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Summer Time Music 2025
        </a>
        </>
      ),
      logo: '/images/visegrad2.webp',
      url: 'https://www.visegradfund.org/'
    },
    {
      id: 2,
      name: 'Fond na podporu umenia',
      description: 'Podpora letného tábora 2025',
      logo: '/images/fpu.webp',
      url: 'https://www.fpu.sk/'
    },
    {
      id: 3,
      name: 'Mesto Dolný Kubín',
      description: 'Podpora našej činnosti v roku 2025',
      logo: '/images/mesto_dk3.webp',
      url: 'https://www.dolnykubin.sk/'
    },

  ];

  // 🔹 PARTNERI
  const partners = [
    
    {
      id: 1,   
      logo: '/images/logo/edukos_logo.webp',
      url: 'https://www.edukos.sk/'
    },
    {
      id: 2,   
      logo: '/images/ckk.webp',
      url: 'https://www.cirkuskus.sk/'
    },
     {
      id: 3,   
      logo: '/images/logo/trapiti_logo.webp',
      url: 'https://www.trapiti.eu/'
    },
         {
      id: 4,   
      logo: '/images/logo/kaukliar_logo.webp',
      url: 'https://www.kaukliar.sk/'
    },
             {
      id: 5,   
      logo: '/images/logo/divadelny_svet_logo.webp',
      url: 'https://www.divadelnysvet.com/'
    }
  ];

  return (
    <PageLayout title="O nás">
      {/* Kto sme */}
      <Section>
        <div className="mission-section">
          <div className="mission-text">
            <h2>Kto sme?</h2>
            <p>
             Plameniaky sú skupina nadšencov, umelcov a organizátorov, ktorých spája láska k novému cirkusu, hudbe a práci s ľuďmi. Od roku 2020 prinášame radosť z pohybu, kreativity a spoločných zážitkov deťom, mladým aj dospelým.
            </p>
            <p>
              Našou filozofiou je vytvárať bezpečný a podporujúci priestor, kde môže každý objaviť a rozvíjať svoj skrytý potenciál, či už ide o žonglovanie, akrobaciu, hudbu alebo jednoducho radosť zo spoločného tvorenia. Veríme v silu zážitku a neformálneho vzdelávania.
            </p>
            <p>
               Naším poslaním je šíriť pozitívnu energiu, podporovať kreativitu, fyzické a duševné zdravie prostredníctvom umenia a hry. Chceme byť miestom, kde sa ľudia stretávajú, učia sa nové veci a spoločne rastú.
            </p>
          </div>
          <div className="mission-image aspect-4-3">
            <LazyImage src="/images/plameniaky.webp" alt="Tím Plameniakov v akcii" />
          </div>
        </div>
      </Section>

      {/* NÁŠ TÍM */}
      <Section title="Náš tím" background="alt" width="wide">
        <Grid type="fluid" minWidth="280px" gap="medium" centered>
          {teamMembers.map(member => (
            <div className="team-member" key={member.id}>
              <div className="member-photo aspect-1-1">
                <LazyImage src={member.photo} alt={member.name} />
              </div>
              <div className="member-info">
                <h3>{member.name}</h3>
                <p className="member-position">{member.position}</p>
                <p className="member-bio">{member.bio}</p>
              </div>
            </div>
          ))}
        </Grid>
      </Section>

      {/* DONORI */}
      <Section title="Donori" width="wide">
        <Grid type="fluid" minWidth="220px" gap="medium" centered>
          {donors.map(donor => (
            <div className="partner-card" key={donor.id}>
              <a
                href={donor.url}
                target="_blank"
                rel="noopener noreferrer"
                className="partner-logo aspect-16-9"
              >
                <LazyImage src={donor.logo} alt={donor.name} />
              </a>
              <div className="partner-info">
                <h5>{donor.name}</h5>
                <p>{donor.description}</p>
              </div>
            </div>
          ))}
        </Grid>
      </Section>

      {/* PARTNERI */}
      <Section title="Partneri" width="wide">
        <Grid type="fluid" minWidth="220px" gap="medium" centered>
          {partners.map(partner => (
            <div className="partner-card" key={partner.id}>
              <a
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="partner-logo aspect-16-9"
              >
                <LazyImage src={partner.logo} alt={partner.name} />
              </a>
              <div className="partner-info">
                <h5>{partner.name}</h5>
                <p>{partner.description}</p>
              </div>
            </div>
          ))}
        </Grid>
      </Section>
    </PageLayout>
  );
};

export default ONas;