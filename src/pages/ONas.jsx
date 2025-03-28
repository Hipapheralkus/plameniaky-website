// src/pages/ONas.jsx
import React from 'react';
import PageLayout from '../components/PageLayout';
import Section from '../components/Section';
import Grid from '../components/Grid';
import LazyImage from '../components/LazyImage';
import './ONas.css'; // Zachovať existujúce alebo aktualizovať štýly

const ONas = () => {
  // Vzorové dáta pre členov tímu - nahraďte reálnymi
  const teamMembers = [
    {
      id: 1,
      name: 'Michal "Mišo" Novák',
      position: 'Zakladateľ a hlavný lektor',
      photo: '/images/team/miso.jpg', // Použite reálne cesty k fotkám
      bio: 'Mišo je dušou Plameniakov. S rokmi skúseností v cirkusovom umení a pedagogike vedie väčšinu workshopov a vystúpení. Jeho vášeň pre oheň a pohyb je nákazlivá.',
      social: [
        { icon: 'envelope', url: 'mailto:miso@plameniaky.sk' }
      ]
    },
    {
      id: 2,
      name: 'Eva "Evka" Kováčová',
      position: 'Lektorka hudby a muzikoterapie',
      photo: '/images/team/eva.jpg',
      bio: 'Evka prináša do tímu harmóniu a pokoj. Špecializuje sa na muzikoterapiu, hru na etnické nástroje a vedenie relaxačných workshopov pre deti aj dospelých.',
       social: [
        { icon: 'envelope', url: 'mailto:eva@plameniaky.sk' }
      ]
    },
    {
      id: 3,
      name: 'Jakub "Kubo" Procházka',
      position: 'Lektor akrobacie a žonglovania',
      photo: '/images/team/kubo.jpg',
      bio: 'Kubo je náš expert na akrobaciu, ľudské pyramídy a pokročilé žonglérske techniky. Jeho energia a precíznosť inšpirujú mladých aj starších.',
       social: [
        { icon: 'linkedin', url: '#' }, // Príklad odkazu
        { icon: 'instagram', url: '#' } // Príklad odkazu
      ]
    },
     {
      id: 4,
      name: 'Lenka Malá',
      position: 'Koordinátorka podujatí',
      photo: '/images/team/lenka.jpg',
      bio: 'Lenka sa stará o to, aby všetky naše podujatia, workshopy a tábory prebehli hladko. Komunikuje s klientmi a zabezpečuje organizáciu.',
       social: [
         { icon: 'envelope', url: 'mailto:lenka@plameniaky.sk' }
      ]
    }
    // Pridajte ďalších členov tímu
  ];

  return (
    <PageLayout title="O nás">
      {/* História a Poslanie */}
      <Section>
        <div className="mission-section"> {/* Môžete použiť existujúci štýl */}
          <div className="mission-text">
            <h2>Kto sme?</h2>
            <p>
              Plameniaky sú skupina nadšencov, umelcov a lektorov, ktorých spája láska k novému cirkusu, hudbe a práci s ľuďmi. Od roku [doplňte rok založenia] prinášame radosť z pohybu, kreativity a spoločných zážitkov deťom, mladým aj dospelým.
            </p>
            <p>
              Našou filozofiou je vytvárať bezpečný a podporujúci priestor, kde môže každý objaviť a rozvíjať svoj skrytý potenciál, či už ide o žonglovanie, akrobaciu, hudbu alebo jednoducho radosť zo spoločného tvorenia. Veríme v silu zážitku a neformálneho vzdelávania.
            </p>
            <p>
              Naším poslaním je šíriť pozitívnu energiu, podporovať kreativitu, fyzické a duševné zdravie prostredníctvom umenia a hry. Chceme byť miestom, kde sa ľudia stretávajú, učia sa nové veci a spoločne rastú.
            </p>
          </div>
          <div className="mission-image aspect-4-3">
            {/* Použite charakteristickú fotku tímu alebo spoločnej aktivity */}
            <LazyImage 
              src="/images/about/tim_spolu.jpg" 
              alt="Tím Plameniakov v akcii" 
            />
          </div>
        </div>
      </Section>
      
      {/* Tím */}
      <Section title="Náš tím" background="alt" width="wide">
         <Grid type="fluid" minWidth="280px" gap="medium">
          {teamMembers.map(member => (
            <div className="team-member" key={member.id}> {/* Použite existujúci štýl */}
              <div className="member-photo aspect-1-1"> 
                <LazyImage 
                  src={member.photo} 
                  alt={member.name} 
                />
              </div>
              <div className="member-info">
                <h3>{member.name}</h3>
                <p className="member-position">{member.position}</p>
                <p className="member-bio">{member.bio}</p>
                {/* Odkazy na sociálne siete, ak sú relevantné */}
                {member.social && member.social.length > 0 && (
                    <div className="member-social">
                      {member.social.map((platform, index) => (
                        <a 
                          href={platform.url} 
                          key={index}
                          target={platform.icon !== 'envelope' ? '_blank' : undefined}
                          rel={platform.icon !== 'envelope' ? 'noopener noreferrer' : undefined}
                          aria-label={`${platform.icon === 'envelope' ? 'Email' : platform.icon} - ${member.name}`}
                        >
                          {/* Použite Font Awesome ikony */}
                          <i className={`fa${platform.icon === 'envelope' ? 's' : 'b'} fa-${platform.icon}`}></i> 
                        </a>
                      ))}
                    </div>
                )}
              </div>
            </div>
          ))}
        </Grid>
      </Section>

       {/* Môžete sem pridať ďalšie sekcie, napr. Hodnoty, História (ako bola v predch. verzii) */}
       
    </PageLayout>
  );
};

export default ONas;