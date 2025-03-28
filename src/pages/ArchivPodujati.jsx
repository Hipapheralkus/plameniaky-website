// src/pages/ArchivPodujati.jsx
import React, { useState } from 'react';
// import { Link } from 'react-router-dom'; // Prípadne pre detail archívu
import PageLayout from '../components/PageLayout';
import Section from '../components/Section';
import Grid from '../components/Grid';
import LazyImage from '../components/LazyImage';
import HashtagGroup from '../components/HashtagGroup';
import './ArchivPodujati.css'; 

const ArchivPodujati = () => {

  // Vzorové dáta pre archív - nahraďte reálnymi dátami, zoradené od najnovšieho
  const archivData = [
    {
      id: 1,
      title: 'Zimný workshop žonglovania',
      date: 'Február 2025',
      description: 'Intenzívny víkendový workshop zameraný na techniky žonglovania s loptičkami a kužeľmi pre mierne pokročilých.',
      gallery: [
        '/images/archive/zima2025/foto1.jpg',
        '/images/archive/zima2025/foto2.jpg',
        '/images/archive/zima2025/foto3.jpg',
      ],
      tags: ['#žonglovanie', '#workshop', '#zima', '#intenzivny']
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
      tags: ['#ohňovky', '#vystúpenie', '#vianoce', '#bratislava', '#fire_show']
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

  // Stav pre filtrovanie (zatiaľ len ukážka)
  const [filterTag, setFilterTag] = useState(null);

  const handleTagClick = (tag) => {
      console.log("Kliknutý tag pre filter:", tag);
      setFilterTag(tag === filterTag ? null : tag); 
  }

  const filteredData = filterTag 
      ? archivData.filter(item => item.tags.includes(filterTag))
      : archivData;

   const allTags = [...new Set(archivData.flatMap(item => item.tags.map(tag => tag.startsWith('#') ? tag.substring(1) : tag)))]; // Clean tags for HashtagGroup

  return (
    <PageLayout title="Archív podujatí" subtitle="Spomienky na naše minulé akcie">
      <Section width="wide">
          {/* --- Replace filter buttons with HashtagGroup --- */}
          <HashtagGroup 
            tags={allTags} 
            activeTag={filterTag} 
            onTagClick={handleTagClick} 
            showAll={true} 
          />

          {filteredData.length > 0 ? (
              <Grid type="fixed" columns={1} gap="large" className="archive-list">
                {filteredData.map(item => (
                  <div key={item.id} className="archive-item">
                    <h3>{item.title} ({item.date})</h3>
                    <p>{item.description}</p>

                    {item.gallery && item.gallery.length > 0 && (
                      <div className="archive-gallery">
                        {item.gallery.map((imgSrc, index) => (
                          <div key={index} className="gallery-thumb aspect-16-9">
                            <LazyImage src={imgSrc} alt={`${item.title} - foto ${index + 1}`} />
                          </div>
                        ))}
                      </div>
                    )}

                    {/* --- Replace archive tags with HashtagGroup --- */}
                    <HashtagGroup 
                      tags={item.tags.map(tag => tag.startsWith('#') ? tag.substring(1) : tag)} // Clean tags
                      activeTag={filterTag} // Highlight if it matches the main filter
                      onTagClick={handleTagClick} 
                      showAll={false} // Don't show "All" button per item
                    />
                  </div>
                ))}
              </Grid>
          ) : (
               <div className="text-center">
                   <p>Pre zvolený filter "{filterTag}" sme nenašli žiadne záznamy.</p>
               </div>
          )}
      </Section>
    </PageLayout>
  );
};

export default ArchivPodujati;