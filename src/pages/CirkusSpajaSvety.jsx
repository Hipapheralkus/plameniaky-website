// src/pages/CirkusSpajaSvety.jsx
import React, { useEffect, useState } from 'react';
import PageLayout from '../components/PageLayout';
import Section from '../components/Section';
import Grid from '../components/Grid';
import LazyImage from '../components/LazyImage';
import './ONas.css';

const CirkusSpajaSvety = () => {
  const carouselImages = [
    '/images/css_01.webp',
    '/images/css_02.webp',
    '/images/css_03.webp',
    '/images/css_04.webp',
    '/images/css_05.webp',
    '/images/css_06.webp',
    
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
      date: '2.-4. 10. 2026',
      location: 'Dolný Kubín (Slovensko)',
      desc: 'Zoznamovacie víkendové sústredenie so štruktúrovanými tréningami akrobacie a žonglovania. Súčasťou je otvorený cirkusový workshop pre širokú verejnosť v Parku M. Kukučína.',
      badge: 'SK Víkend'
    },
    {
      id: 2,
      title: 'Utužovacie víkendové sústredenie (CZ)',
      date: '20.-22. 11. 2026',
      location: 'Valašské Meziříčí (Česko)',
      desc: 'Nadviazanie na vytvorené vzťahy, nastavenie cieľov, párová akrobacia a budovanie dôvery. Iniciácia práce s ohňom. Otvorený workshop pre verejnosť na Tržnici vo Valašskom Meziříčí.',
      badge: 'CZ Víkend'
    },
    {
      id: 3,
      title: 'Víkendové sústredenie s ohňom (CZ)',
      date: '27.-29. 5. 2027',
      location: 'Valašské Meziříčí (Česko)',
      desc: 'Návrat k intenzívnej tvorbe. Vyhodnotenie pokroku, tréning s ohňovými rekvizitami a večerný vererejný Fire Jam prepojený so živou hudbou.',
      badge: 'CZ Víkend + Ohňovka'
    },
    {
      id: 4,
      title: 'Víkendové sústredenie s ohňom (SK)',
      date: '24.-26. 6. 2027',
      location: 'Dolný Kubín (Slovensko)',
      desc: 'Spoločné vytváranie vystúpenia spojené so Svätojánskou vatrou v Dolnom Kubíne. Otvorený workshop a ohňová show pre verejnosť a návštevníkov mesta.',
      badge: 'SK Víkend + Ohňovka'
    },
    {
      id: 5,
      title: 'Záverečný pobytový letný tábor (CZ)',
      date: '12.-16. 7. 2027 (5 dní)',
      location: 'Okolie Nového Jičína a Valašského Meziříčí',
      desc: 'Vyvrcholenie celoročného projektu. Týždenný pobytový tábor s tvorbou záverečného predstavenia, pobytom v prírode a hlbokým upevnením priateľstiev.',
      badge: 'Letný Tábor'
    }
  ];

  const teamMembers = [
    {
      id: 1,
      name: 'Janko Šimko',
      position: 'Hlavný manažér & Lektor (SK)',
      photo: '/images/janko_3.webp',
      bio: 'Predseda OZ Plameniaky, tréner s medzinárodnými skúsenosťami (Warehouse Circus Austrália). Venuje sa žonglovaniu, balansu a párovej akrobacii.',
      
    
    },
    {
      id: 2,
      name: 'Monča Drobková',
      position: 'Koordinátorka & Lektorka (CZ)',
      photo: '/images/monca.webp', // Upravte podľa potreby
      bio: 'Predsedníčka partnerskej organizácie Prostě Cirkus z.s., dlhoročná organizátorka voľnočasových a cirkusových aktivít v Zlínskom a Moravskosliezskom kraji.',
    },
        {
      id: 3,
      name: 'Suzanne Verschueren',
      position: 'Lektorka (SK)',
      photo: '/images/suzanne.jpg', // Upravte podľa potreby
      bio: 'Suzanne je certifikovaná cirkusová inštruktorka z Belgicka. Jej špecialitou sú hry a balans.',
    },
        {
      id: 4,
      name: 'Vítek Nožka',
      position: 'Lektor (CZ)',
      photo: '/images/vit.webp', // Upravte podľa potreby
    },
        {
      id: 5,
      name: 'Hanka Krumpochová',
      position: 'Lektorka (CZ)',
      photo: '/images/hanka.webp', // Upravte podľa potreby
    },
  ];

  const partners = [
    {
      name: 'Prostě Cirkus z.s.',
      role: 'Hlavný cezhraničný partner (Česko)',
      url: 'https://prostecirkus.cz/',
      logo: '/images/logo/proste_cirkus_logo.webp',
      bio: 'Česká organizácia so sídlom vo Valašskom Meziříčí, ktorá sa dlhodobo venuje rozvoju nového cirkusu, neformálnemu vzdelávaniu mládeže a tvorbe komunitných podujatí v Zlínskom a Moravskosliezskom kraji.'
    }
  ];
  

  return (
    <PageLayout 
      title="Cirkus spája svety" 
      subtitle="Medzinárodná mládežnícka výmena"
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
              Počas celého školského roka prebehnú <b>dva víkendy v Dolnom Kubíne</b> a <b>dva víkendy vo Valašskom Meziřičí</b>, ktoré vyvrcholia <b>5-dňovým pobytovým letným táborom v Českej republike</b>.
            </p>
            <p>
              <b>Hlavná cieľová skupina:</b> Mladí ľudia (8 – 19 rokov), ktorí sa už cirkusu venujú alebo chcú rozvíjať svoje zručnosti v párovej akrobacii, žonglovaní a vzdušnej akrobacii.<br /><br />
              <b>Verejnosť:</b> Otvorené celodenné workshopy a záverečné vystúpenia pre celú komunitu v Dolnom Kubíne a Valašskom Meziříčí.
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
            href="https://forms.gle/T4f7wCsTXNsdbr9a8"
            className="btn large-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Prihláška
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
      <Section title="Cezhraničné partnerstvo" background="alt">
        <div style={{ maxWidth: '850px', margin: '0 auto' }}>
          {partners.map((partner) => (
            <div 
              key={partner.name}
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '16px',
                padding: '35px',
                boxShadow: '0 6px 20px rgba(0,0,0,0.06)',
                display: 'grid',
                gridTemplateColumns: '220px 1fr',
                gap: '30px',
                alignItems: 'center'
              }}
              className="partner-card-large"
            >
              {/* Logo partnera */}
              <div style={{
                backgroundColor: '#ffffff',
                border: '1px solid #eee',
                borderRadius: '12px',
                padding: '20px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '160px'
              }}>
                <LazyImage 
                  src={partner.logo} 
                  alt={partner.name} 
                  style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }}
                />
              </div>

              {/* Informácie o partnerovi */}
              <div style={{ textAlign: 'left' }}>
                <span style={{ 
                  backgroundColor: '#e3f2fd', 
                  color: '#1565c0', 
                  fontWeight: '600', 
                  fontSize: '0.85rem', 
                  padding: '5px 14px', 
                  borderRadius: '20px',
                  display: 'inline-block',
                  marginBottom: '10px'
                }}>
                  {partner.role}
                </span>

                <h3 style={{ fontSize: '1.8rem', color: '#222', margin: '0 0 12px 0' }}>
                  {partner.name}
                </h3>

                <p style={{ color: '#555', lineHeight: '1.6', fontSize: '1rem', margin: '0 0 20px 0' }}>
                  {partner.bio}
                </p>

                <a
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '10px 20px',
                    fontSize: '0.95rem'
                  }}
                >
                  Navštíviť web Prostě Cirkus <i className="fas fa-external-link-alt"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Sekcia 5: Povinná publicita a spolufinancovanie EÚ */}
      <Section width="wide">
        <div style={{
    backgroundColor: '#f8f9fa',
    border: '1px solid #e0e0e0',
    borderRadius: '12px',
    padding: '25px',
    textAlign: 'center',
    marginTop: '10px',
    overflow: 'hidden' // Zabezpečí, že rohy obrázka nepretečú cez zaoblenie boxu
  }}>
    {/* Vycentrovaný Logolink na plnú vnútro-šírku boxu */}
    <div style={{ 
      margin: '-25px -25px 20px -25px', // Negatívny margin vynuluje padding boxu
      backgroundColor: '#ffffff', // Biely podklad pre logolink
      padding: '20px',
      borderBottom: '1px solid #e0e0e0'
    }}>
      <img 
        src="/images/logo/logolink_int.png" 
        alt="Interreg Slovensko-Česko, Spolufinancované Európskou úniou, Fond malých projektov, ER BBK" 
        style={{ 
          width: '100%', 
          maxWidth: '100%',
          height: 'auto',
          display: 'block' 
        }}
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