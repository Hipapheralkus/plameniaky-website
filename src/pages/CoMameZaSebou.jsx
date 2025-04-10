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
      id: 3,
      title: 'Oravské javisko',
      date: '25.3.2025',
      description: 'Premiéra nášho nového predstavenia a zároveň interaktívny program pre deti v regionálnom kole divadelnej súťaže.',
      gallery: [
        '/images/eventy/oj_1.jpg',
        '/images/eventy/oj_2.jpg',
        '/images/eventy/oj_3.jpg',
        '/images/eventy/oj_4.jpg',
        '/images/eventy/oj_5.jpg',
        '/images/eventy/oj_6.jpg',
        '/images/eventy/oj_7.jpg',
        '/images/eventy/oj_8.jpg',
        '/images/eventy/oj_9.jpg',
        '/images/eventy/oj_10.jpg',
        '/images/eventy/oj_11.jpg',
       
      ],
      tags: ['#žonglovanie', '#workshop', '#eventy', '#deti', '#showka']
    },
    {
      id: 4,
      title: 'Zájazd za Trapiti',
      date: '13.3.2025',
      description: 'Mládežnícka výmena v Nových Zámkoch, po ktorej nasledovalo neplánované stretnutie s Adriánom Ohrádkom v jeho "rodnom" divadle.',
      gallery: [
        '/images/eventy/trapiti_1.jpg',
        '/images/eventy/trapiti_2.jpg',
        '/images/eventy/trapiti_3.jpg',
        '/images/eventy/trapiti_4.jpg',
        '/images/eventy/trapiti_5.jpg',
        '/images/eventy/trapiti_6.jpg',
        '/images/eventy/trapiti_7.jpg',
        '/images/eventy/trapiti_8.jpg',
        '/images/eventy/trapiti_9.jpg',
        '/images/eventy/trapiti_10.jpg',
        '/images/eventy/trapiti_11.jpg',
        '/images/eventy/trapiti_12.jpg',
        '/images/eventy/trapiti_13.jpg',
      
      ],
      tags: ['#workshop', '#akrobacia', '#deti', '#výmena', '#zájazd']
    },
    {
      id: 5,
      title: 'Masterclass s Kaukliarom',
      date: '12.3.2025',
      description: 'Špeciálny tréning s hosťujúcim lektorom Filipom Hajdukom.',
      gallery: [
        '/images/eventy/kaukliar_1.jpg',
        '/images/eventy/kaukliar_2.jpg',
        '/images/eventy/kaukliar_3.jpg',
        '/images/eventy/kaukliar_4.jpg',
  
      ],
      tags: ['#workshop', '#žonglovanie', '#deti', '#passing']
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