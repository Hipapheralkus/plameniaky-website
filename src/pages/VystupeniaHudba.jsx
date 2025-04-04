// src/pages/VystupeniaHudba.jsx
import React from 'react';
import PageLayout from '../components/PageLayout';
import Section from '../components/Section';
import RelatedPonukaNav from '../components/RelatedPonukaNav';

// Optional: Import specific CSS if you create one for this page
// import './VystupeniaHudba.css';

const VystupeniaHudba = () => {
  return (
    // Pass the unique ID of the current page to PageLayout if needed
    // or manage it internally if title/subtitle are sufficient
    <PageLayout title="Vystúpenia & Hudba" subtitle="Ohňové a svetelné show s hudobným sprievodom">
      <Section>
        <h2>Kombinácia: Vystúpenia + Hudba</h2>
        <p>
          Detailný popis vystúpení, kde hrá kľúčovú rolu hudba - ohňové a LED show s dynamickým hudobným podkladom,
          atmosférické hudobné performance, interaktívne bubnové show pre eventy. Zabezpečíme originálny zážitok
          prepojením vizuálneho umenia a hudby.
        </p>
        {/* Add more specific content, images, videos, details here */}
      </Section>

      <RelatedPonukaNav currentItemId="vystupenia-hudba" />

    </PageLayout>
  );
};

export default VystupeniaHudba;