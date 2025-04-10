// src/pages/VystupeniaCirkus.jsx
import React from 'react';
import PageLayout from '../components/PageLayout';
import Section from '../components/Section';
import RelatedPonukaNav from '../components/RelatedPonukaNav';
// import './VystupeniaCirkus.css';

const VystupeniaCirkus = () => {
  return (
    <PageLayout title="Vystúpenia & Cirkus" subtitle="Profesionálne cirkusové a žonglérske show">
      <Section>
        <h2>Kombinácia: Vystúpenia + Cirkus</h2>
        <p>
        (Na tejto časti stránky sa ešte pracuje...)
        <br></br><br></br>
        Ponúkame širokú škálu vystupení buď profesionálneho jednotlivca alebo neprofesionálneho kolektívu.
        <br></br><br></br>
        Modely vystúpení sú nasledovné:<br></br>
        (1) ohraničené nacvičené predstavenie<br></br>
        (2) túlavé postavy (improvizácia a interakcia ako dotvorenie atmosféry)
        (3) moderovanie podujatia so zaujímavými doplnkami
        <br></br><br></br>
        Vystúpenia vieme spraviť v rôznych kostýmoch, prípadne pridať aj oheň alebo LED svetlá.
        </p>
        {/* Add more specific content, images, videos, details here */}
      </Section>

    <RelatedPonukaNav currentItemId="vystupenia-cirkus" />
    </PageLayout>
  );
};

export default VystupeniaCirkus;