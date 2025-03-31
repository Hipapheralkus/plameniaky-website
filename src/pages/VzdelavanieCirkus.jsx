// src/pages/VzdelavanieCirkus.jsx
import React from 'react';
import PageLayout from '../components/PageLayout';
import Section from '../components/Section';
// Optional: Import specific CSS if you create one for this page
// import './VzdelavanieCirkus.css';

const VzdelavanieCirkus = () => {
  return (
    <PageLayout title="Vzdelávanie & Cirkus" subtitle="Spojenie edukačných programov s cirkusovým umením">
      <Section>
        <h2>Kombinácia: Vzdelávanie + Cirkus</h2>
        <p>
          Tu bude detailný popis ponuky, ktorá spája vzdelávacie metódy s prvkami cirkusového umenia.
          Môže zahŕňať workshopy pre školy, teambuildingy zamerané na spoluprácu cez žonglovanie,
          alebo akreditované kurzy využívajúce cirkusovú pedagogiku.
        </p>
        {/* Add more specific content, images, details here */}
      </Section>
    </PageLayout>
  );
};

export default VzdelavanieCirkus;