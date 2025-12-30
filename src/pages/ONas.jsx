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
      bio: 'Janko je dušou Plameniakov...',
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
      bio: 'Slovensko-ukrajinský cirkusový umelec...',
      social: [
        { icon: 'instagram', url: 'https://www.instagram.com/vesel0v0d' }
      ]
    },
    {
      id: 3,
      name: 'Nicolette Záhorová',
      position: 'Asistujúca lektorka a akrobatka',
      photo: '/images/niki_1.webp',
      bio: 'Aj keď cirkusový krúžok navštevuje jako študentka...',
      social: []
    },
    {
      id: 4,
      name: 'Miro Laššák',
      position: 'Asistent lektora',
      photo: '/images/miro_1.webp',
      bio: 'Prvý a zároveň najvernejší člen kubínskeho cirkusového krúžku.',
      social: []
    }
  ];

  // 🔹 DONORI
  const donors = [
    {
      id: 1,
      name: 'Medzinárodný vyšehradský fond',
      description: 'Podpora projektu Summer Time Music 2025',
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
              Plameniaky sú skupina nadšencov, umelcov a organizátorov...
            </p>
            <p>
              Našou filozofiou je vytvárať bezpečný a podporujúci priestor...
            </p>
            <p>
              Naším poslaním je šíriť pozitívnu energiu...
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

      {/* NAŠI PARTNERI */}
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