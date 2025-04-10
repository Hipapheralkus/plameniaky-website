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
        (Na tejto časti stránky sa ešte pracuje...)
        <br></br><br></br>
        Aktuálne navštevujeme ročný kurz muzikoterapie, takže táto ponuka sa ešte len formuje.<br></br>
        Zatiaľ vieme ponúknuť hudobné zážitkové programy či už ako príjemca alebo aj skúšanie hudobných nástrojov a práca s rytmom v skupine.
        </p>
        {/* Add more specific content, images, details here */}
      </Section>
      <RelatedPonukaNav currentItemId="vzdelavanie-hudba" />
    </PageLayout>
  );
};

export default VzdelavanieHudba;