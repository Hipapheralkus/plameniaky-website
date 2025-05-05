// src/pages/Tabor.jsx
import React from 'react';
import PageLayout from '../components/PageLayout';
import Section from '../components/Section';
import Grid from '../components/Grid';
import LazyImage from '../components/LazyImage';
import './ONas.css'; // Zachovať existujúce alebo aktualizovať štýly

const Tabor = () => {
  // Vzorové dáta pre členov tímu - nahraďte reálnymi
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
      bio: 'Slovensko-ukrajinský cirkusový umelec, klaun , mím, hudobník aj technicky smerovaný chlap. Člen Asociácie profesionálnych mímov Slovenska a slovenského Cirkonetu, od roku 2023 pôsobí ako lektor na cirkusovom krúžku v Dolnom Kubine. Od malička sa pohybuje v umení a má za sebou veľa rôznych umeleckých festivalov a podujatí. Je žiakom slovenského míma Miroslava Kasprzyka, Theatru DEREVO a ďalších.',
       social: [
        { icon: 'instagram', url: 'https://www.instagram.com/vesel0v0d' }
      ]
    },
    
    {
      id: 3,
      name: 'Nicolette Záhorová',
      position: 'Asistujúca lektorka a akrobatka',
      photo: '/images/niki_1.webp',
      bio: 'Aj keď cirkusový krúžok navštevuje ako študentka, aktívne sa zapája do učenia workshopov a má za sebou aj niekoľko vystúpení po celom Slovensku.  ',
       social: [
         
      ]
    },
    {
      id: 4,
      name: 'Miro Laššák',
      position: 'Asistent lektora',
      photo: '/images/miro_1.webp',
      bio: 'Prvý a zároveň najvernejší člen kubínskeho cirkusového krúžku. Vo svojich zručnostiach sa zdokonalil tak rýchlo, že už pomáha učiť krúžok v škôlke. ',
       social: [
         
      ]
    },
      
    // Pridajte ďalších členov tímu
  ];

  return (
    <PageLayout title="Tábor">
      {/* História a Poslanie */}
      <Section>
        <div className="mission-section"> {/* Môžete použiť existujúci štýl */}
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
            {/* Použite charakteristickú fotku tímu alebo spoločnej aktivity */}
            <LazyImage 
              src="/images/plameniaky.webp" 
              alt="Tím Plameniakov v akcii" 
            />
          </div>
        </div>
      </Section>

{/* Môžete sem pridať ďalšie sekcie, napr. Hodnoty, História (ako bola v predch. verzii) */}
        <div style={{textAlign: 'center', marginTop: '20px'}}>
            <a href="https://forms.gle/6CEcNi2UW95emzVf6" class="btn" target="_blank" rel="noopener noreferrer">
                Prihláška
            </a>
        </div>
        
{/* Tím */}
<Section title="Náš tím" background="alt" width="wide">
         <Grid type="fluid" minWidth="280px" gap="medium" centered={true}>
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


    </PageLayout>
  );
};

export default Tabor;