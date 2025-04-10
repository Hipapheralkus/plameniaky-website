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
        (Na tejto časti stránky sa ešte pracuje...)
        <br></br><br></br>
          Vieme poskytnúť programy od najmenších detí s rodičmi, cez dospelých až po seniorov, vrátane znevýhodnených skupín.<br></br>
<br></br>
          Modely môžu byť nasledovné:<br></br>
          (1) uzavretý workshop, kde je malý počet účasntíkov od začiatku do konca a vieme postupne zvyšovať náročnosť techník<br></br>
          (2) otvorený workshop na podujatí, kde účastníci rôzne prichádzajú a odchádzajú, je to skôr zážitkové ako budujúce zručnosti<br></br>
          (3) pravidelný kurz (aktuálne prebieha krúžok pre deti od 3-6 rokov v rámci MŠ; a krúžok pre deti a dospelých od 10 rokov vyššie)
          <br></br><br></br>
          
       
        </p>
        {/* Add more specific content, images, details here */}
      </Section>

    <RelatedPonukaNav currentItemId="vzdelavanie-cirkus" />

    </PageLayout>
  );
};

export default VzdelavanieCirkus;