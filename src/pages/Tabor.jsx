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
      position: 'Vedúci tábora',
      photo: '/images/janko_2.webp',
      bio: 'Hlavný tréner cirkusového krúžku, niekoľko rokov učil pre austrálsky Warehouse Circus, je to skúsený performer. Z cirkusových disciplín ho baví úplne všetko, venuje sa najmä žonglovaniu, balansu a párovej akrobacii.',
      social: [
        { icon: 'envelope', url: 'mailto:info@plameniaky.sk' },
        { icon: 'instagram', url: 'https://www.instagram.com/janko.showman' },
        { icon: 'facebook', url: 'https://www.facebook.com/Janko.Showman' }
      ]
    },
    {
      id: 2,
      name: 'cirkusový tréner',
      position: 'z partnerského Cirkuskusu',
      photo: '/images/ckk_lektor.webp',
      bio: 'Určite bude na tábore aj nejaký úžasný lektor z prvej školy nového cirkusu na Slovensku, len ešte nevieme ktorý.',
       social: [
        { icon: 'instagram', url: 'https://www.instagram.com/cirkuskus' },
        { icon: 'facebook', url: 'https://www.facebook.com/Cirkuskus' }
      ]
    },
    
    {
      id: 3,
      name: 'Hosťujúci lektori',
      position: 'z príbuzných odvetví',
      photo: '/images/unknown.webp',
      bio: 'Pracujeme aj na rôznych lektoroch tanca, kreatívneho pohybu, divadla, klaunovania a podobne, iba pred zverejnením čakáme na potvrdenie termínov. ',
       social: [
         
      ]
    },
   
      
    // Pridajte ďalších členov tímu
  ];

  return (
    <PageLayout title="Letný tábor 2025" subtitle="Denný detský tábor nového cirkusu">
      {/* História a Poslanie */}
      <Section>
        <div className="mission-section"> {/* Môžete použiť existujúci štýl */}
          <div className="mission-text">
            <h2>Základné info</h2>
            <p>
            <b>Termín:</b> 28.7. - 1.8.2025<br></br>
            <b>Čas:</b> 8:00 - 15:30<br></br>
            <b>Miesto:</b> telocvičňa Obchodnej Akadémie, Dolný Kubín<br></br>
            <b>Vek účastníkov:</b> 8-18 rokov<br></br>
            <b> Cena:</b> 140 € (pri registrácii do 31.5.2025)<br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 160 € (pri registrácii do 30.6.2025)<br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 180 € (pri registrácii od 1.7.2025)<br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <i>cena zahŕňa lektorné, materiál, priestor, stravu</i><br></br>
            </p>
            <p>Prihláste sa na týždeň plný zábavy, umenia, a pritom poctivého tréningu! Celý týždeň sa budeme deliť na rôzne menšie skupiny, ktoré budú spolu hrať hry, učiť sa žonglovať, jazdiť na jednokolke, visieť na šáloch a mnoho ďalších aktivít. Ak budú mať deti chuť, tábor by sme chceli zakončiť záverečným predstavením v piatok o 16:00. V prípade pekného počasia budeme veľa času tráviť vonku. </p>
            
            
          </div>
          <div className="mission-image aspect-3-4">
            {/* Použite charakteristickú fotku tímu alebo spoločnej aktivity */}
            <LazyImage 
              src="/images/tabor.webp" 
              alt="Skupinová pyramída" 
            />
          </div>
        </div>
      </Section>

{/* Môžete sem pridať ďalšie sekcie, napr. Hodnoty, História (ako bola v predch. verzii) */}
<div style={{ textAlign: 'center', marginTop: '20px' }}>
  <a
    href="https://forms.gle/6CEcNi2UW95emzVf6"
    className="btn large-btn"
    target="_blank"
    rel="noopener noreferrer"
  >
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