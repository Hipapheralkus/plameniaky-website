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
      title: 'Míľa pre mamu',
      date: '10.5.2025',
      description: 'Oslava dňa matiek v Námestove.',
      gallery: [
        '/images/eventy/mila_25_1.jpg',
        '/images/eventy/mila_25_2.jpg',
        '/images/eventy/mila_25_3.jpg',  
        '/images/eventy/mila_25_4.jpg',
        '/images/eventy/mila_25_5.jpg',
      ],
      tags: ['#workshop','#eventy']
    },
    {
      id: 1,
      title: 'Svetový deň cirkusu 2025',
      date: '11.-13.4.2025',
      description: 'Medzinárodný komunitný festival nového cirkusu v Bratislave.',
      gallery: [
        '/images/eventy/sdc_25_1.webp',
        '/images/eventy/sdc_25_2.webp',
        '/images/eventy/sdc_25_3.webp',
        '/images/eventy/sdc_25_4.webp',
        '/images/eventy/sdc_25_5.webp',
        '/images/eventy/sdc_25_6.webp',
        '/images/eventy/sdc_25_7.webp',
        '/images/eventy/sdc_25_8.webp',
        '/images/eventy/sdc_25_9.webp',
        '/images/eventy/sdc_25_10.webp',
        '/images/eventy/sdc_25_11.webp',
        '/images/eventy/sdc_25_12.webp',
        '/images/eventy/sdc_25_13.webp',
        '/images/eventy/sdc_25_14.webp',
        '/images/eventy/sdc_25_15.webp',
        '/images/eventy/sdc_25_16.webp',
        '/images/eventy/sdc_25_17.webp',
        '/images/eventy/sdc_25_18.webp',
        '/images/eventy/sdc_25_19.webp',
        '/images/eventy/sdc_25_20.webp',
        '/images/eventy/sdc_25_21.webp',
        '/images/eventy/sdc_25_22.webp',
        '/images/eventy/sdc_25_23.webp',
        '/images/eventy/sdc_25_24.webp',
        '/images/eventy/sdc_25_25.webp',
        '/images/eventy/sdc_25_26.webp',
        '/images/eventy/sdc_25_27.webp',
        '/images/eventy/sdc_25_28.webp',
     
      ],
      tags: ['#festival', '#workshop', '#showka', '#deti','#zájazd' ]
    },
    {
      id: 2,
      title: 'Pojkový workshop pre Orientalico',
      date: '1.4.2025',
      description: 'Intenzívny workshop zameraný na točenie s pojkami pre tanečnú skupinu.',
      gallery: [
        '/images/eventy/orient_1.webp',
        '/images/eventy/orient_2.webp',
        '/images/eventy/orient_3.webp',
        '/images/eventy/orient_4.webp',
        '/images/eventy/orient_5.webp',
        '/images/eventy/orient_6.webp',
        '/images/eventy/orient_7.webp',
      ],
      tags: ['#pojky', '#workshop', '#intensive', '#dospelí']
    },
    {
      id: 3,
      title: 'Eniki beniki',
      date: '30.3.2025',
      description: 'Interaktívny program pre deti v regionálnom kole súťaže folklórnych súborov.',
      gallery: [
        '/images/eventy/eniki_25_1.webp',
        '/images/eventy/eniki_25_2.webp',
        '/images/eventy/eniki_25_3.webp',
        '/images/eventy/eniki_25_4.webp',
        '/images/eventy/eniki_25_5.webp',
      ],
      tags: ['#žonglovanie', '#workshop', '#eventy', '#deti']
    },
    {
      id: 4,
      title: 'Oravské javisko',
      date: '25.3.2025',
      description: 'Premiéra nášho nového predstavenia a zároveň interaktívny program pre deti v regionálnom kole divadelnej súťaže.',
      gallery: [
        '/images/eventy/oj_1.webp',
        '/images/eventy/oj_2.webp',
        '/images/eventy/oj_3.webp',
        '/images/eventy/oj_4.webp',
        '/images/eventy/oj_5.webp',
        '/images/eventy/oj_6.webp',
        '/images/eventy/oj_7.webp',
        '/images/eventy/oj_8.webp',
        '/images/eventy/oj_9.webp',
        '/images/eventy/oj_10.webp',
        '/images/eventy/oj_11.webp',
       
      ],
      tags: ['#žonglovanie', '#workshop', '#eventy', '#deti', '#showka']
    },
    {
      id: 5,
      title: 'Zájazd za Trapiti',
      date: '13.3.2025',
      description: 'Mládežnícka výmena v Nových Zámkoch, po ktorej nasledovalo neplánované stretnutie s Adriánom Ohrádkom v jeho "rodnom" divadle.',
      gallery: [
        '/images/eventy/trapiti_1.webp',
        '/images/eventy/trapiti_2.webp',
        '/images/eventy/trapiti_3.webp',
        '/images/eventy/trapiti_4.webp',
        '/images/eventy/trapiti_5.webp',
        '/images/eventy/trapiti_6.webp',
        '/images/eventy/trapiti_7.webp',
        '/images/eventy/trapiti_8.webp',
        '/images/eventy/trapiti_9.webp',
        '/images/eventy/trapiti_10.webp',
        '/images/eventy/trapiti_11.webp',
        '/images/eventy/trapiti_12.webp',
        '/images/eventy/trapiti_13.webp',
      
      ],
      tags: ['#workshop', '#akrobacia', '#deti', '#výmena', '#zájazd']
    },
    {
      id: 6,
      title: 'Masterclass s Kaukliarom',
      date: '12.3.2025',
      description: 'Špeciálny tréning s hosťujúcim lektorom Filipom Hajdukom.',
      gallery: [
        '/images/eventy/kaukliar_1.webp',
        '/images/eventy/kaukliar_2.webp',
        '/images/eventy/kaukliar_3.webp',
        '/images/eventy/kaukliar_4.webp',
  
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
      
      {/* --- Premiestnená kachlička "Dialog" na spodok stránky --- */}
      <Section width="narrow" padding="small">
        <div className="dialog-tile">
          <a href="https://dialog.plameniaky.sk/" target="_blank" rel="noopener noreferrer">
             <LazyImage src="/images/dialog_1.webp" alt="Dialóg Plameniaky" className="dialog-tile-image aspect-16-9"/>
             <span className="dialog-tile-text">Rozbehli sme arménsky Dialóg!</span>
          </a>
        </div>
      </Section>
    </PageLayout>
  );
};

export default CoMameZaSebou;