// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import { Analytics } from "@vercel/analytics/react"

// Import existing pages
import Home from './pages/Home';
import Ponuka from './pages/Ponuka';
import PonukaDetail from './pages/PonukaDetail'; // Detail for main categories like /ponuka/cirkus
import ONas from './pages/ONas';
import CoNasCaka from './pages/CoNasCaka';
import CoMameZaSebou from './pages/CoMameZaSebou'; // <-- Zmena importu (ak si premenoval súbor)
// import Odkazy from './pages/Odkazy'; // Removed import for Odkazy
import Kontakt from './pages/Kontakt';
// import PodporteNas from './pages/PodporteNas'; // Still commented out

// --- Import NEW Combination Pages ---
import VzdelavanieCirkus from './pages/VzdelavanieCirkus';
import VzdelavanieHudba from './pages/VzdelavanieHudba';
import VystupeniaCirkus from './pages/VystupeniaCirkus';
import VystupeniaHudba from './pages/VystupeniaHudba';

import './styles/index.css'; // Hlavný CSS súbor

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Analytics />
      <Routes>
        {/* --- Base and Other Page Routes --- */}
        <Route path="/" element={<Home />} />
        <Route path="/ponuka" element={<Ponuka />} />
        <Route path="/o-nas" element={<ONas />} />
        <Route path="/co-nas-caka" element={<CoNasCaka />} />
        <Route path="/co-mame-za-sebou" element={<CoMameZaSebou />} /> {/* <-- Zmena cesty a elementu */}
        {/* Removed the route for Odkazy */}
        <Route path="/kontakt" element={<Kontakt />} />
        {/* <Route path="/podporte-nas" element={<PodporteNas />} /> */}

        {/* --- Specific Combination Routes (MUST COME BEFORE general /ponuka/:kategoriaSlug) --- */}
        <Route path="/ponuka/vzdelavanie-cirkus" element={<VzdelavanieCirkus />} />
        <Route path="/ponuka/vzdelavanie-hudba" element={<VzdelavanieHudba />} />
        <Route path="/ponuka/vystupenia-cirkus" element={<VystupeniaCirkus />} />
        <Route path="/ponuka/vystupenia-hudba" element={<VystupeniaHudba />} />

        {/* --- General Category Detail Route (Catches /ponuka/cirkus, /ponuka/hudba, etc.) --- */}
        {/* This route should remain if you still want pages for the main categories */}
        <Route path="/ponuka/:kategoriaSlug" element={<PonukaDetail />} />

        {/* Optional 404 Route */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router>
  );
}

export default App;