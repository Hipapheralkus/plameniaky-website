import React from 'react';
import LazyImage from '../components/LazyImage';
import './ONas.css';

const ONas = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Jana Nováková',
      position: 'Predsedníčka združenia',
      photo: '/images/team/member1.jpg',
      bio: 'Jana má dlhoročné skúsenosti s prácou s deťmi a mládežou. Vyštudovala psychológiu a má na starosti koordináciu všetkých aktivít združenia.',
      social: [
        { icon: 'linkedin', url: '#' },
        { icon: 'envelope', url: 'mailto:jana@plameniaky.sk' }
      ]
    },
    {
      id: 2,
      name: 'Peter Horváth',
      position: 'Projektový manažér',
      photo: '/images/team/member2.jpg',
      bio: 'Peter sa venuje písaniu a manažovaniu projektov, vďaka ktorým môže naše združenie realizovať rôzne aktivity na podporu detí a mládeže.',
      social: [
        { icon: 'linkedin', url: '#' },
        { icon: 'envelope', url: 'mailto:peter@plameniaky.sk' }
      ]
    },
    {
      id: 3,
      name: 'Mária Kováčová',
      position: 'Lektorka aktivít',
      photo: '/images/team/member3.jpg',
      bio: 'Mária sa špecializuje na kreatívne workshopy a vzdelávacie aktivity. Je učiteľkou na základnej škole a vo voľnom čase sa venuje práci v našom združení.',
      social: [
        { icon: 'linkedin', url: '#' },
        { icon: 'envelope', url: 'mailto:maria@plameniaky.sk' }
      ]
    }
  ];

  const values = [
    {
      id: 1,
      icon: 'heart',
      title: 'Rešpekt a dôvera',
      description: 'Vytvárame prostredie založené na vzájomnom rešpekte a dôvere, kde sa každé dieťa cíti bezpečne a prijímané.'
    },
    {
      id: 2,
      icon: 'users',
      title: 'Spolupráca',
      description: 'Veríme v silu spolupráce a komunitného prístupu pri riešení výziev, ktorým deti a mladí ľudia čelia.'
    },
    {
      id: 3,
      icon: 'bullseye',
      title: 'Profesionalita',
      description: 'Naše aktivity sú zabezpečované odborníkmi s príslušnou kvalifikáciou a skúsenosťami v práci s deťmi a mládežou.'
    },
    {
      id: 4,
      icon: 'lightbulb',
      title: 'Inovácia',
      description: 'Neustále hľadáme nové prístupy a metódy, ktoré pomáhajú deťom a mladým ľuďom rozvíjať svoj potenciál.'
    }
  ];

  return (
    <div className="onas-page">
      <div className="page-header">
        <div className="container">
          <h1>O nás</h1>
        </div>
      </div>
      
      <div className="container">
        <div className="content-container">
          <section className="mission-section">
            <div className="mission-image aspect-4-3">
              <LazyImage 
                src="/images/about/mission.jpg" 
                alt="Naša misia" 
              />
            </div>
            <div className="mission-text">
              <h2>Naša misia</h2>
              <p>
                Občianske združenie Plameniaky vzniklo v roku 2018 s cieľom vytvárať zmysluplné príležitosti 
                pre deti a mladých ľudí. Naším poslaním je podporovať ich osobnostný rozvoj, kreativitu a 
                vytvárať bezpečný priestor pre zmysluplné trávenie voľného času.
              </p>
              <p>
                Prostredníctvom rôznorodých aktivít, vzdelávacích programov a komunitných projektov sa 
                snažíme reagovať na aktuálne potreby detí a mládeže. Veríme, že každé dieťa si zaslúži 
                šancu rozvinúť svoj potenciál a stať sa sebavedomým a zodpovedným človekom.
              </p>
              <p>
                Naše združenie tvorí tím oddaných profesionálov a dobrovoľníkov, ktorí majú bohaté 
                skúsenosti s prácou s deťmi a mládežou. Spoločne sa snažíme vytvárať podnetné 
                prostredie, v ktorom môžu mladí ľudia objavovať svoje silné stránky, budovať 
                sebadôveru a získavať dôležité životné zručnosti.
              </p>
            </div>
          </section>
          
          <section className="values-section">
            <h2>Naše hodnoty</h2>
            <div className="values-grid">
              {values.map(value => (
                <div className="value-card" key={value.id}>
                  <div className="value-icon">
                    <i className={`fas fa-${value.icon}`}></i>
                  </div>
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </div>
              ))}
            </div>
          </section>
          
          <section className="team-section">
            <h2>Náš tím</h2>
            <div className="team-grid">
              {teamMembers.map(member => (
                <div className="team-member" key={member.id}>
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
                    <div className="member-social">
                      {member.social.map((platform, index) => (
                        <a 
                          href={platform.url} 
                          key={index}
                          target={platform.icon !== 'envelope' ? '_blank' : ''}
                          rel={platform.icon !== 'envelope' ? 'noopener noreferrer' : ''}
                          aria-label={`${platform.icon === 'envelope' ? 'Email' : platform.icon.charAt(0).toUpperCase() + platform.icon.slice(1)} profil - ${member.name}`}
                        >
                          <i className={`fa${platform.icon === 'envelope' ? 'r' : 'b'} fa-${platform.icon}`}></i>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
          
          <section className="history-section">
            <h2>Naša história</h2>
            <div className="history-timeline">
              <div className="timeline-item">
                <div className="timeline-year">2018</div>
                <div className="timeline-content">
                  <h3>Založenie združenia</h3>
                  <p>
                    Občianske združenie Plameniaky bolo oficiálne zaregistrované na Ministerstve vnútra SR. 
                    Začali sme s malým tímom dobrovoľníkov, ktorí mali spoločnú víziu - vytvárať zmysluplné 
                    príležitosti pre deti a mládež.
                  </p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-year">2019</div>
                <div className="timeline-content">
                  <h3>Prvé projekty</h3>
                  <p>
                    Spustili sme naše prvé vzdelávacie aktivity a komunitné projekty. V tomto roku sme 
                    nadviazali spoluprácu s miestnymi školami a zorganizovali sme prvé letné tábory 
                    pre deti zo sociálne znevýhodneného prostredia.
                  </p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-year">2020</div>
                <div className="timeline-content">
                  <h3>Prispôsobenie sa pandémii</h3>
                  <p>
                    V reakcii na pandémiu COVID-19 sme prispôsobili naše aktivity online prostrediu. 
                    Vytvorili sme sériu online workshopov a webinárov zameraných na duševné zdravie 
                    a podporu detí a mladých ľudí počas pandémie.
                  </p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-year">2022</div>
                <div className="timeline-content">
                  <h3>Rozšírenie aktivít</h3>
                  <p>
                    S rastúcou podporou sme rozšírili naše aktivity a pôsobenie. Začali sme organizovať 
                    pravidelné víkendové workshopy, mentorské programy a komunitné podujatia. Zapojili 
                    sme sa tiež do medzinárodných projektov zameraných na výmenu skúseností a dobrých 
                    praktík v práci s mládežou.
                  </p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-year">2024</div>
                <div className="timeline-content">
                  <h3>Súčasnosť</h3>
                  <p>
                    Dnes je OZ Plameniaky etablovanou organizáciou s profesionálnym tímom a širokým 
                    spektrom aktivít. Pokračujeme v našom poslaní vytvárať príležitosti pre deti a 
                    mládež, a teší nás vidieť pozitívny vplyv našej práce na životy mladých ľudí.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ONas;