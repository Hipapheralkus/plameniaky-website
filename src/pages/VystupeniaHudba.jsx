// src/pages/VystupeniaHudba.jsx
import React from 'react';
import PageLayout from '../components/PageLayout';
import Section from '../components/Section';
// import './VystupeniaHudba.css';

const VystupeniaHudba = () => {
  return (
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
    </PageLayout>
  );
};

export default VystupeniaHudba;