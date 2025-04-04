// src/pages/VzdelavanieCirkus.jsx
import React from 'react';
import PageLayout from '../components/PageLayout';
import Section from '../components/Section';
import RelatedPonukaNav from '../components/RelatedPonukaNav';
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

    <RelatedPonukaNav currentItemId="vzdelavanie-cirkus" />

    </PageLayout>
  );
};

export default VzdelavanieCirkus;