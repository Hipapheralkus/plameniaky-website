// src/pages/PonukaDetail.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom'; // useParams na získanie slug z URL
import PageLayout from '../components/PageLayout';
import Section from '../components/Section';
import Grid from '../components/Grid';
import LazyImage from '../components/LazyImage';
import Hashtag from '../components/Hashtag';
import './PonukaDetail.css'; 

const PonukaDetail = () => {
  const { kategoriaSlug } = useParams(); // Získa slug z URL, napr. 'cirkus'

  // --- Vzorové dáta - Nahraďte reálnymi dátami alebo načítaním ---
  const kategorieInfo = {
    'cirkus': {
      title: 'Cirkusové umenie',
      description: 'Ponorte sa do sveta žonglovania, akrobacie, jednokoliek a chodúľov. Naše kurzy a workshopy sú vhodné pre začiatočníkov aj pokročilých, deti aj dospelých.',
      aktivity: [
        { id: 'zonglovanie', title: 'Žonglovanie', img: '/images/ponuka/detail/zonglovanie.jpg', tags: ['#žonglovanie', '#workshop', '#deti', '#dospelí'] },
        { id: 'akrobacia', title: 'Akrobacia a ľudské pyramídy', img: '/images/ponuka/detail/akrobacia.jpg', tags: ['#akrobacia', '#pyramídy', '#párová_akrobacia', '#workshop'] },
        { id: 'jednokolky', title: 'Jednokolky a chodúle', img: '/images/ponuka/detail/jednokolky.jpg', tags: ['#jednokolka', '#chodúle', '#balans', '#kurz'] },
        { id: 'novy-cirkus', title: 'Nový cirkus', img: '/images/ponuka/detail/novy-cirkus.jpg', tags: ['#nový_cirkus', '#divadlo', '#pohyb'] },
      ]
    },
    'hudba': {
        title: 'Hudba a Muzikoterapia',
        description: 'Objavte relaxačné a terapeutické účinky hudby. Ponúkame muzikoterapeutické stretnutia, workshopy hry na etnické nástroje a spoločné bubnovanie.',
        aktivity: [
           { id: 'muzikoterapia', title: 'Muzikoterapia', img: '/images/ponuka/detail/muzikoterapia.jpg', tags: ['#muzikoterapia', '#relaxácia', '#hudba', '#terapia'] },
           { id: 'bubnovanie', title: 'Bubnovanie', img: '/images/ponuka/detail/bubnovanie.jpg', tags: ['#bubny', '#rytmus', '#workshop', '#djembe'] },
           // ... ďalšie aktivity
        ]
    },
    'vzdelavanie': {
        title: 'Vzdelávanie a Workshopy',
        description: 'Rozvíjajte svoje zručnosti s našimi akreditovanými kurzami a zážitkovými workshopmi. Ideálne pre školy, firmy aj jednotlivcov.',
        aktivity: [
            { id: 'akreditovane', title: 'Akreditované kurzy', img: '/images/ponuka/detail/kurzy.jpg', tags: ['#vzdelávanie', '#kurz', '#certifikát', '#pedagogika'] },
            { id: 'teambuilding', title: 'Teambuilding', img: '/images/ponuka/detail/teambuilding.jpg', tags: ['#teambuilding', '#firemné_akcie', '#hry', '#spolupráca'] },
            { id: 'tabory', title: 'Tábory', img: '/images/ponuka/detail/tabory.jpg', tags: ['#tábor', '#deti', '#leto', '#prázdniny', '#cirkus', '#hudba'] },
           // ... ďalšie aktivity
        ]
    },
     'vystupenia': {
        title: 'Vystúpenia a Show',
        description: 'Dodajte vášmu podujatiu iskru s našimi profesionálnymi vystúpeniami. Ponúkame ohňové show, moderné LED show, klauniády a pouličné divadlo.',
        aktivity: [
            { id: 'ohnovky', title: 'Ohňovky a Fire Show', img: '/images/ponuka/detail/ohnovky.jpg', tags: ['#ohňová_show', '#fire_show', '#vystúpenie', '#svadba', '#festival'] },
            { id: 'led-show', title: 'LED Show', img: '/images/ponuka/detail/led-show.jpg', tags: ['#led_show', '#svetelná_show', '#moderné', '#vystúpenie', '#event'] },
            { id: 'klauni', title: 'Klauni, šašovia, komédia', img: '/images/ponuka/detail/klauni.jpg', tags: ['#klaun', '#šašo', '#komédia', '#deti', '#zábava'] },
            { id: 'poulicne', title: 'Pouličné vystúpenia a divadlo', img: '/images/ponuka/detail/poulicne.jpg', tags: ['#pouličné_divadlo', '#busking', '#festival', '#interaktívne'] },
           // ... ďalšie aktivity
        ]
    },
    'vsetko': { // Špeciálna kategória pre zobrazenie všetkého
        title: 'Detailná ponuka aktivít',
        description: 'Prehľad všetkých našich aktivít naprieč kategóriami.',
        // Spojte aktivity zo všetkých ostatných kategórií (odstráňte duplicity podľa id)
        aktivity: [ /* Tu by bol spojený zoznam aktivít */
            { id: 'zonglovanie', title: 'Žonglovanie', img: '/images/ponuka/detail/zonglovanie.jpg', tags: ['#žonglovanie', '#workshop', '#deti', '#dospelí'] },
            { id: 'akrobacia', title: 'Akrobacia', img: '/images/ponuka/detail/akrobacia.jpg', tags: ['#akrobacia', '#pyramídy', '#workshop'] },
            { id: 'jednokolky', title: 'Jednokolky', img: '/images/ponuka/detail/jednokolky.jpg', tags: ['#jednokolka', '#chodúle', '#kurz'] },
            { id: 'ohnovky', title: 'Ohňovky', img: '/images/ponuka/detail/ohnovky.jpg', tags: ['#ohňová_show', '#vystúpenie'] },
            { id: 'led-show', title: 'LED Show', img: '/images/ponuka/detail/led-show.jpg', tags: ['#led_show', '#vystúpenie'] },
            { id: 'muzikoterapia', title: 'Muzikoterapia', img: '/images/ponuka/detail/muzikoterapia.jpg', tags: ['#muzikoterapia', '#relaxácia'] },
             { id: 'tabory', title: 'Tábory', img: '/images/ponuka/detail/tabory.jpg', tags: ['#tábor', '#deti', '#leto'] },
            // ... pridajte ostatné unikátne aktivity
        ]
    }
    // ... pridajte ďalšie kategórie podľa potreby
  };
  // --- Koniec vzorových dát ---

  const currentKategoria = kategorieInfo[kategoriaSlug] || kategorieInfo['vsetko']; 

  const handleTagClick = (tag) => {
      console.log("Filtrovať podľa tagu:", tag);
      // TODO: Implement filtering logic if needed on this page
  }

  return (
    <PageLayout title={currentKategoria.title} subtitle="Detail našich aktivít">
      <Section width="wide">
          <div className="intro-text">
              <p>{currentKategoria.description}</p>
              <Link to="/ponuka" className="btn btn-outline mt-2">&larr; Späť na prehľad ponuky</Link>
          </div>

          <Grid type="fluid" minWidth="280px" gap="medium" className="ponuka-detail-grid">
              {currentKategoria.aktivity.map(aktivita => (
                  <div key={aktivita.id} className="aktivita-card">
                      <LazyImage src={aktivita.img} alt={aktivita.title} className="aktivita-image aspect-16-9"/>
                      <div className="aktivita-content">
                          <h4>{aktivita.title}</h4>
                          {/* --- Replace tag buttons with Hashtag component --- */}
                          <div className="aktivita-tags">
                              {aktivita.tags.map(tag => {
                                  const tagName = tag.startsWith('#') ? tag.substring(1) : tag;
                                  return (
                                      <Hashtag 
                                        key={tagName} 
                                        tag={tagName} 
                                        onClick={() => handleTagClick(tag)} // Pass original tag with #
                                        // You might want to add 'to' prop if clicking tags should navigate
                                        // to={ `/archiv-podujati?filter=${tagName}` } 
                                      />
                                  );
                              })}
                          </div>
                      </div>
                  </div>
              ))}
          </Grid>

      </Section>
    </PageLayout>
  );
};

export default PonukaDetail;