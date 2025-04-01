// src/pages/Ponuka.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import Section from '../components/Section';
import LazyImage from '../components/LazyImage';
import './Ponuka.css';

const Ponuka = () => {

  // --- Data for the 3x3 Matrix Grid ---
  // Links now point to the new combination subpages.
  // === ACTION REQUIRED: ===
  // Replace the placeholder image paths below with your actual image files.
  // =======================
  const matrixItems = [
    {
      id: 'foto1', // Vzdelávanie + Cirkus
      image: '/images/Tiles/cirkus_vzdelavanie.webp', // <<< REPLACE
      alt: 'Vzdelávanie - Cirkus',
      description: 'Rozvíjame zručnosti a spoluprácu cez cirkusové techniky v školách aj firmách.',
      link: '/ponuka/vzdelavanie-cirkus' // <-- Updated Link
    },
    {
      id: 'foto2', // Vzdelávanie + Hudba
      image: '/images/tiles/hudba_vzdelavanie.webp', // <<< REPLACE
      alt: 'Vzdelávanie - Hudba',
      description: 'Objavujeme rytmus a harmóniu v edukačných programoch a muzikoterapii.',
      link: '/ponuka/vzdelavanie-hudba' // <-- Updated Link
    },
    {
      id: 'foto3', // Vystúpenia + Cirkus
      image: '/images/tiles/cirkus_vystupka.webp', // <<< REPLACE
      alt: 'Vystúpenia - Cirkus',
      description: 'Pútavé cirkusové show a žonglérske vystúpenia pre vaše eventy.',
      link: '/ponuka/vystupenia-cirkus' // <-- Updated Link
    },
    {
      id: 'foto4', // Vystúpenia + Hudba
      image: '/images/tiles/hudba_vystupka.webp', // <<< REPLACE
      alt: 'Vystúpenia - Hudba',
      description: 'Atmosférické hudobné performance a ohňové show s live hudbou.',
      link: '/ponuka/vystupenia-hudba' // <-- Updated Link
    }
  ];

  // Helper to find matrix item by ID
  const getMatrixItem = (id) => matrixItems.find(item => item.id === id);

  return (
    <PageLayout title="Čo ponúkame">
      <Section>
         <div className="intro-text text-center" style={{ maxWidth: '800px', margin: '0 auto 30px auto' }}>
           <p>
             Naša ponuka kombinuje rôzne oblasti. Pozrite si príklady prepojenia našich hlavných zameraní. Kliknite na obrázok pre viac detailov.
           </p>
         </div>

        {/* --- The 3x3 Matrix Grid --- */}
        <div className="ponuka-matrix-grid">
          {/* Row 1: Headers */}
          <div className="matrix-cell matrix-header empty"></div> {/* A1 */}
          <div className="matrix-cell matrix-header col-header">Cirkus</div> {/* B1 */}
          <div className="matrix-cell matrix-header col-header">Hudba</div> {/* C1 */}

          {/* Row 2: Vzdelavanie */}
          <div className="matrix-cell matrix-header row-header">Vzdelávanie</div> {/* A2 */}
          <div className="matrix-cell matrix-image"> {/* B2 - Foto 1 */}
            {/* Use updated link */}
            <Link to={getMatrixItem('foto1').link} className="matrix-image-link">
              <LazyImage src={getMatrixItem('foto1').image} alt={getMatrixItem('foto1').alt} className="aspect-1-1 matrix-actual-image"/>
              <div className="matrix-image-overlay">
                <p>{getMatrixItem('foto1').description}</p>
              </div>
            </Link>
          </div>
          <div className="matrix-cell matrix-image"> {/* C2 - Foto 2 */}
             {/* Use updated link */}
            <Link to={getMatrixItem('foto2').link} className="matrix-image-link">
              <LazyImage src={getMatrixItem('foto2').image} alt={getMatrixItem('foto2').alt} className="aspect-1-1 matrix-actual-image"/>
              <div className="matrix-image-overlay">
                 <p>{getMatrixItem('foto2').description}</p>
              </div>
            </Link>
          </div>

          {/* Row 3: Vystupenia */}
          <div className="matrix-cell matrix-header row-header">Vystúpenia</div> {/* A3 */}
           <div className="matrix-cell matrix-image"> {/* B3 - Foto 3 */}
              {/* Use updated link */}
             <Link to={getMatrixItem('foto3').link} className="matrix-image-link">
               <LazyImage src={getMatrixItem('foto3').image} alt={getMatrixItem('foto3').alt} className="aspect-1-1 matrix-actual-image"/>
               <div className="matrix-image-overlay">
                 <p>{getMatrixItem('foto3').description}</p>
               </div>
            </Link>
          </div>
          <div className="matrix-cell matrix-image"> {/* C3 - Foto 4 */}
              {/* Use updated link */}
             <Link to={getMatrixItem('foto4').link} className="matrix-image-link">
               <LazyImage src={getMatrixItem('foto4').image} alt={getMatrixItem('foto4').alt} className="aspect-1-1 matrix-actual-image"/>
               <div className="matrix-image-overlay">
                  <p>{getMatrixItem('foto4').description}</p>
               </div>
            </Link>
          </div>
        </div>
      </Section>

    </PageLayout>
  );
};

export default Ponuka;