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
<h3>aktuálna ponuka kurzov:</h3>
<br></br>
Cirkusový krúžok v škôlke (3-6r)
Pondelky 8:15-9:00
Súkromná MŠ M. Montessori
Cena: 105 €


Cirkus pre rodičov s deťmi (3-6r)
Piatky 14:30-15:30
Playroom (OD Kocka)
Cena: 190 € (pre rodiča s jedným dieťaťom. pri viacerých deťoch je možná zľava)


Adaptovaný cirkus (7-20r)
Štvrtky 14:30-15:30
Telocvičňa Obchodnej akadémie
Cena: 190 €
Tieto kurzy sú vhodné pre klientov s akýmikoľvek špeciálnymi potrebami


Úvod do cirkusu (7-20r)
Štvrtky 15:30-17:00
Telocvičňa Obchodnej akadémie
Cena: 240 €

Pokročilá cirkusová družina (Na pozvánku)
Štvrtky 17:00-17:30
Telocvičňa Obchodnej akadémie
Cena: 0 €

Cirkus pre dospelých (15-99r)
Piatky 18:30-20:00
Telocvičňa Obchodnej akadémie
Cena: 240 €

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