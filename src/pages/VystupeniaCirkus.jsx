// src/pages/VystupeniaCirkus.jsx
import React from 'react';
import PageLayout from '../components/PageLayout';
import Section from '../components/Section';
// import './VystupeniaCirkus.css';

const VystupeniaCirkus = () => {
  return (
    <PageLayout title="Vystúpenia & Cirkus" subtitle="Profesionálne cirkusové a žonglérske show">
      <Section>
        <h2>Kombinácia: Vystúpenia + Cirkus</h2>
        <p>
          Popis našich vystúpení, ktoré primárne využívajú cirkusové umenie - žonglovanie (loptičky, kužele, kruhy),
          akrobaciu, jednokolky, chodúle, klauniády a ďalšie. Vhodné pre festivaly, firemné akcie, mestské slávnosti,
          súkromné oslavy.
        </p>
        {/* Add more specific content, images, videos, details here */}
      </Section>
    </PageLayout>
  );
};

export default VystupeniaCirkus;