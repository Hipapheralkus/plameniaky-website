// src/pages/CoMameZaSebou.jsx
import React, { useState } from 'react';
import PageLayout from '../components/PageLayout';
import Section from '../components/Section';
import LazyImage from '../components/LazyImage';
import ArchiveEvent from '../components/ArchiveEvent'; // Import the new component
import './CoMameZaSebou.css';

const CoMameZaSebou = () => {

  // Vzorové dáta pre archív - nahraďte reálnymi dátami, zoradené od najnovšieho
  const archivData = [
    {
      id: 1,
      title: 'Pojkový workshop pre Orientalico',
      date: '1.4.2025',
      description: 'Intenzívny workshop zameraný na točenie s pojkami pre tanečnú skupinu.',
      gallery: [
        '/images/eventy/orient_1.jpg',
        '/images/eventy/orient_2.jpg',
        '/images/eventy/orient_3.jpg',
        '/images/eventy/orient_4.jpg',
        '/images/eventy/orient_5.jpg',
        '/images/eventy/orient_6.jpg',
        '/images/eventy/orient_7.jpg',
      ],
      tags: ['#pojky', '#workshop', '#intensive', '#dospelí']
    },
    {
      id: 2,
      title: 'Eniki beniki',
      date: '30.3.2025',
      description: 'Interaktívny program pre deti v regionálnom kole súťaže folklórnych súborov.',
      gallery: [
        '/images/eventy/eniki_25_1.jpg',
        '/images/eventy/eniki_25_2.jpg',
        '/images/eventy/eniki_25_3.jpg',
        '/images/eventy/eniki_25_4.jpg',
        '/images/eventy/eniki_25_5.jpg',
      ],
      tags: ['#žonglovanie', '#workshop', '#eventy', '#deti']
    },
    {
      id: 2,
      title: 'Vianočná ohňová show',
      date: 'December 2024',
      description: 'Magické vystúpenie na vianočných trhoch v Bratislave, ktoré zahrialo divákov v chladnom počasí.',
      gallery: [
        '/images/archive/vianoce2024/ohen1.jpg',
        '/images/archive/vianoce2024/ohen2.jpg',
      ],
      tags: ['#ohňovky', '#vystúpenie', '#vianoce', '#dolý_kubín', '#fire_show']
    },
    {
      id: 3,
      title: 'Letný tábor Cirkus Hravosvet',
      date: 'August 2024',
      description: 'Nezabudnuteľný týždeň plný cirkusových disciplín, hudby, hier a nových priateľstiev pre deti od 7 do 15 rokov.',
      gallery: [
        '/images/archive/leto2024/tabor1.jpg',
        '/images/archive/leto2024/tabor2.jpg',
        '/images/archive/leto2024/tabor3.jpg',
        '/images/archive/leto2024/tabor4.jpg',
      ],
      tags: ['#tábor', '#deti', '#leto', '#cirkus', '#hry', '#workshop']
    },
    // Pridajte ďalšie záznamy z archívu
  ];

  // Stav pre filtrovanie
  const [filterTag, setFilterTag] = useState(null);

  const handleTagClick = (tag) => {
      console.log("Kliknutý tag pre filter:", tag);
      setFilterTag(tag === filterTag ? null : tag);
  }

  const filteredData = filterTag
      ? archivData.filter(item => item.tags.includes(filterTag))
      : archivData;

  // Get all unique tags from all archive items
  const allTags = [...new Set(archivData.flatMap(item => item.tags.map(tag => tag.startsWith('#') ? tag.substring(1) : tag)))];

  return (
    <PageLayout title="Čo máme za sebou" subtitle="archív zorganizovaných podujatí">
      {/* --- Pridaná nová kachlička --- */}
      <Section width="narrow" padding="small">
        <div className="dialog-tile">
          <a href="https://dialog.plameniaky.sk/" target="_blank" rel="noopener noreferrer">
             <LazyImage src="/images/dialog_1.webp" alt="Dialóg Plameniaky" className="dialog-tile-image aspect-16-9"/>
             <span className="dialog-tile-text">Rozbehli sme arménsky Dialóg!</span>
          </a>
        </div>
      </Section>
      
      <Section width="wide" padding="small">
        <div className="archive-content">
          {/* Filter tags placed directly above content */}
          <div className="filter-tags-container">
            <button 
              className={`tag-button ${filterTag === null ? 'active' : ''}`}
              onClick={() => setFilterTag(null)}
            >
              #všetky
            </button>
            
            {allTags.map(tag => (
              <button
                key={tag}
                className={`tag-button ${filterTag === `#${tag}` ? 'active' : ''}`}
                onClick={() => handleTagClick(`#${tag}`)}
              >
                #{tag}
              </button>
            ))}
          </div>

          {/* Content section using the new ArchiveEvent component */}
          {filteredData.length > 0 ? (
            <div className="archive-list">
              {filteredData.map(event => (
                <ArchiveEvent 
                  key={event.id} 
                  event={event} 
                  onTagClick={handleTagClick} 
                />
              ))}
            </div>
          ) : (
            <div className="text-center no-results">
              <p>Pre zvolený filter "{filterTag}" sme nenašli žiadne záznamy.</p>
            </div>
          )}
        </div>
      </Section>
    </PageLayout>
  );
};

export default CoMameZaSebou;