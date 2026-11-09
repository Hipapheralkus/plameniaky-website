// src/pages/CirkusSpajaSvety.jsx
import React, { useEffect, useState } from 'react';
import PageLayout from '../components/PageLayout';
import Section from '../components/Section';
import Grid from '../components/Grid';
import LazyImage from '../components/LazyImage';
import './ONas.css';

const CirkusSpajaSvety = () => {
  const carouselImages = [
    '/images/cirkus_01.webp',
    '/images/cirkus_02.webp',
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    if (carouselImages.length === 0) return;
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % carouselImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [carouselImages.length]);

  // Harmonogram 5 hlavných aktivít projektu (2026 – 2027)
  const activities = [
    {
      id: 1,
      title: 'Úvodné víkendové sústredenie (SK)',
      date: 'Jeseň 2026',
      location: 'Dolný Kubín (Slovensko)',
      desc: 'Zoznamovacie víkendové sústredenie so štruktúrovanými tréningami akrobacie a žonglovania. Súčasťou je otvorený cirkusový workshop pre širokú verejnosť v Parku M. Kukučína.',
      badge: 'SK Víkend'
    },
    {
      id: 2,
      title: 'Utužovacie víkendové sústredenie (CZ)',
      date: 'Jeseň / Zima 2026',
      location: 'Nový Jičín & Valašské Meziříčí (Česko)',
      desc: 'Nadviazanie na vytvorené vzťahy, nastavenie cieľov, párová akrobacia a budovanie dôvery. Otvorený workshop pre verejnosť v Tržnici vo Valašskom Meziříčí.',
      badge: 'CZ Víkend'
    },
    {
      id: 3,
      title: 'Víkendové sústredenie s ohňom (CZ)',
      date: 'Jar 2027',
      location: 'Nový Jičín & Valašské Meziříčí (Česko)',
      desc: 'Návrat k intenzívnej tvorbe. Vyhodnotenie pokroku, tréning s ohňovými rekvizitami a večerný vererejný Fire Jam prepojený so živou hudbou.',
      badge: 'CZ Víkend + Oheň'
    },
    {
      id: 4,
      title: 'Víkendové sústredenie s ohňom (SK)',
      date: 'Máj / Jún 2027',
      location: 'Dolný Kubín (Slovensko)',
      desc: 'Spoločné vytváranie vystúpenia spojené so Svätojánskou vatrou v Dolnom Kubíne. Otvorený workshop a ohňová show pre verejnosť a návštevníkov mesta.',
      badge: 'SK Víkend + Oheň'
    },
    {
      id: 5,
      title: 'Záverečný letný tábor nového cirkusu',
      date: 'Júl / August 2027 (5 dní)',
      location: 'Okolie Nového Jičína a Valašského Meziříčí',
      desc: 'Vyvrcholenie celoročného projektu. Týždenný pobytový tábor s tvorbou záverečného galapredstavenia, pobytom v prírode a hlbokým upevnením priateľstiev.',
      badge: 'Letný Tábor'
    }
  ];

  const teamMembers = [
    {
      id: 1,
      name: 'Ján Šimko, MBA',
      position: 'Hlavný manažér & Lektor (SK)',
      photo: '/images/janko_2.webp',
      bio: 'Predseda OZ Plameniaky, tréner s medzinárodnými skúsenosťami (Warehouse Circus Austrália). Venuje sa žonglovaniu, balansu a párovej akrobacii.',
      social: [
        { icon: 'envelope', url: 'mailto:info@plameniaky.sk' }
      ]
    },
    {
      id: 2,
      name: 'Bc. Monika Drobková',
      position: 'Koordinátorka & Lektorka (CZ)',
      photo: '/images/suzanne.jpg', // Upravte podľa potreby
      bio: 'Predsedníčka partnerskej organizácie Prostě Cirkus z.s., dlhoročná organizátorka voľnočasových a cirkusových aktivít v Zlínskom a Moravskosliezskom kraji.',
      social: [
        { icon: 'envelope', url: 'mailto:monikamiko@seznam.cz' }
      ]
    }
  ];

  const partners = [
    {
      name: 'Prostě Cirkus z.s.',
      role: 'Hlavný cezhraničný partner (ČR)',
      url: 'https://prostecirkus.cz/',
      logo: '/images/logo/proste_cirkus_logo.webp' // Nahraďte vlastným logom
    },
    {
      name: 'Mesto Dolný Kubín',
      role: 'Partner lokality (SR)',
      url: 'https://www.dolnykubin.sk/',
      logo: '/images/logo/mestodk_logo.webp'
    }
  ];

  return (
    <PageLayout 
      title="Cirkus spája svety" 
      subtitle="Medzinárodná cezhraničná výmena a letný tábor nového cirkusu (SK – CZ)"
    >
      {/* Sekcia 1: O projekte */}
      <Section>
        <div className="mission-section">
          <div className="mission-text">
            <h2>O projekte</h2>
            <p>
              Projekt <b>„Cirkus spája svety“</b> je séria medzinárodných stretnutí a výmen medzi obyvateľmi slovenského a českého pohraničia. Prostredníctvom nekomerčnej a inkluzívnej formy nového cirkusu spájame mladých ľudí, komunity aj širokú verejnosť bez jazykových či sociálnych bariér.
            </p>
            <p>
              Počas celého školského roka prebehnú <b>dva víkendy v Dolnom Kubíne</b> a <b>dva víkendy v Novom Jičíne</b>, ktoré vyvrcholia <b>5-dňovým pobytovým letným táborom v Českej republike</b>.
            </p>
            <p>
              <b>Hlavná cieľová skupina:</b> Mladí ľudia (8 – 19 rokov), ktorí sa už cirkusu venujú alebo chcú rozvíjať svoje zručnosti v párovej akrobacii, žonglovaní a vzdušnej akrobacii.<br />
              <b>Verejnosť:</b> Otvorené celodenné workshopy a záverečné vystúpenia pre celú komunitu v Dolnom Kubíne, Novom Jičíne a Valašskom Meziříčí.
            </p>
          </div>
          <div className="mission-image aspect-3-4">
            <LazyImage 
              src={carouselImages[currentImage] || '/images/tabor_01.webp'} 
              alt="Cirkus spája svety" 
            />
          </div>
        </div>
      </Section>

      {/* Sekcia 2: Harmonogram 5 aktivít */}
      <Section title="Harmonogram aktivít (2026 / 2027)" background="alt">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '900px', margin: '0 auto' }}>
          {activities.map((act) => (
            <div 
              key={act.id} 
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '12px',
                padding: '24px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
                borderLeft: '5px solid #e65100'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
                <span style={{ 
                  backgroundColor: '#fff3e0', 
                  color: '#e65100', 
                  fontWeight: 'bold', 
                  fontSize: '0.85rem', 
                  padding: '4px 12px', 
                  borderRadius: '20px' 
                }}>
                  {act.badge}
                </span>
                <span style={{ color: '#666', fontSize: '0.9rem', fontWeight: '500' }}>{act.date}</span>
              </div>
              <h3 style={{ marginTop: '12px', marginBottom: '6px', color: '#222' }}>{act.title}</h3>
              <p style={{ margin: '0 0 10px 0', fontSize: '0.95rem', color: '#555' }}>📍 <b>Miesto:</b> {act.location}</p>
              <p style={{ margin: 0, color: '#444', lineHeight: '1.5' }}>{act.desc}</p>
            </div>
          ))}
        </div>

        {/* Tlačidlo prihlášky */}
        <div style={{ textAlign: 'center', marginTop: '35px' }}>
          <a
            href="https://forms.gle/RZo6bke9sMPwY5nF8"
            className="btn large-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mám záujem o zapojenie / Prihláška
          </a>
        </div>
      </Section>

      {/* Sekcia 3: Realizačný tím */}
      <Section title="Projektový tím">
        <Grid type="fluid" minWidth="280px" gap="medium" centered={true}>
          {teamMembers.map(member => (
            <div className="team-member" key={member.id}>
              <div className="member-photo aspect-1-1"> 
                <LazyImage src={member.photo} alt={member.name} />
              </div>
              <div className="member-info">
                <h3>{member.name}</h3>
                <p className="member-position">{member.position}</p>
                <p className="member-bio">{member.bio}</p>
                {member.social && member.social.length > 0 && (
                  <div className="member-social">
                    {member.social.map((platform, index) => (
                      <a 
                        href={platform.url} 
                        key={index}
                        aria-label={`Kontakt ${member.name}`}
                      >
                        <i className={`fas fa-${platform.icon}`}></i> 
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </Grid>
      </Section>

      {/* Sekcia 4: Cezhraniční partneri */}
      <Section title="Cezhraničné partnerstvo" background="alt" width="wide">
        <Grid type="fluid" minWidth="200px" gap="medium" centered={true}>
          {partners.map((partner) => (
            <a
              key={partner.name}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="partner-logo-container"
              style={{ textAlign: 'center', padding: '15px' }}
            >
              <LazyImage src={partner.logo} alt={partner.name} />
              <p style={{ marginTop: '10px', fontWeight: 'bold', fontSize: '0.9rem', color: '#333' }}>{partner.name}</p>
              <span style={{ fontSize: '0.8rem', color: '#666' }}>{partner.role}</span>
            </a>
          ))}
        </Grid>
      </Section>

      {/* Sekcia 5: Povinná publicita a spolufinancovanie EÚ */}
      <Section width="wide">
        <div style={{
          backgroundColor: '#f8f9fa',
          border: '1px solid #e0e0e0',
          borderRadius: '12px',
          padding: '25px',
          textAlign: 'center',
          marginTop: '10px'
        }}>
          {/* Miesto pre Logolink Interreg SK-CZ */}
          <div style={{ marginBottom: '15px' }}>
            <img 
              src="/images/logo/interreg_logolink.webp" 
              alt="Interreg Slovensko-Česko, Spolufinancované Európskou úniou, Fond malých projektov, ER BBK" 
              style={{ maxHeight: '70px', maxWidth: '100%', height: 'auto' }}
            />
          </div>
          <h4 style={{ margin: '10px 0 5px 0', color: '#333' }}>Projekt: Cirkus spája svety</h4>
          <p style={{ fontSize: '0.85rem', color: '#555', margin: '4px 0' }}>
            <b>Kód projektu:</b> FMP/MI/03/031_SK | <b>Priorita:</b> 3.2 Miestne iniciatívy
          </p>
          <p style={{ fontSize: '0.85rem', color: '#555', margin: '4px 0' }}>
            <b>Žiadateľ:</b> Plameniaky (SR) | <b>Hlavný cezhraničný partner:</b> Prostě Cirkus z.s. (ČR)
          </p>
          <p style={{ fontSize: '0.85rem', color: '#666', marginTop: '12px', fontStyle: 'italic', maxWidth: '800px', margin: '12px auto 0 auto' }}>
            Malý projekt je spolufinancovaný Európskou úniou z Európskeho fondu regionálneho rozvoja (EFRR) vo výške 80 % v rámci programu Interreg Slovensko – Česko 2021 – 2027 (Fond malých projektov spravovaný Euroregiónom Bílé - Biele Karpaty).
          </p>
        </div>
      </Section>
    </PageLayout>
  );
};

export default CirkusSpajaSvety;