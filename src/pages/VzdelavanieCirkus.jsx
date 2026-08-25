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
<h3>Aktuálna ponuka kurzov:</h3>
<br></br>
Cirkusový krúžok v škôlke (3-6r)<br></br>
Pondelky 8:15-9:00<br></br>
Súkromná MŠ M. Montessori<br></br>
Cena: 105 €<br></br>
<br></br>

Cirkus pre rodičov s deťmi (3-6r)<br></br>
Piatky 14:30-15:30<br></br>
Playroom (OD Kocka)<br></br>
Cena: 190 € (pre rodiča s jedným dieťaťom. pri viacerých deťoch je možná zľava)<br></br>
<br></br>

Adaptovaný cirkus (7-20r)<br></br>
Štvrtky 14:30-15:30<br></br>
Telocvičňa Obchodnej akadémie<br></br>
Cena: 190 €<br></br>
Tieto kurzy sú vhodné pre klientov s akýmikoľvek špeciálnymi potrebami<br></br>

<br></br>
Úvod do cirkusu (7-20r)<br></br>
Štvrtky 15:30-17:00<br></br>
Telocvičňa Obchodnej akadémie<br></br>
Cena: 240 €<br></br>
<br></br>
Pokročilá cirkusová družina (Na pozvánku)<br></br>
Štvrtky 17:00-17:30<br></br>
Telocvičňa Obchodnej akadémie<br></br>
Cena: 0 €<br></br>
<br></br>
Cirkus pre dospelých (15-99r)<br></br>
Piatky 18:30-20:00<br></br>
Telocvičňa Obchodnej akadémie<br></br>
Cena: 240 €<br></br>
<br></br><br></br>
          Ďalšie modely môžu byť nasledovné:<br></br>
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