// src/pages/VzdelavanieHudba.jsx
import React from 'react';
import PageLayout from '../components/PageLayout';
import Section from '../components/Section';
import RelatedPonukaNav from '../components/RelatedPonukaNav';
// import './VzdelavanieHudba.css';

const VzdelavanieHudba = () => {
  return (
    <PageLayout title="Vzdelávanie & Hudba" subtitle="Využitie hudby a rytmu vo vzdelávaní a terapii">
      <Section>
        <h2>Kombinácia: Vzdelávanie + Hudba</h2>
        <p>
          Detailný popis ponuky zameranej na prepojenie vzdelávacích aktivít s hudbou a muzikoterapiou.
          Príklady: hudobné workshopy pre deti, muzikoterapeutické sedenia pre školy/skupiny,
          využitie rytmiky v neformálnom vzdelávaní.
        </p>
        {/* Add more specific content, images, details here */}
      </Section>
      <RelatedPonukaNav currentItemId="vzdelavanie-hudba" />
    </PageLayout>
  );
};

export default VzdelavanieHudba;