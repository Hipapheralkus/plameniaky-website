// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import { Analytics } from "@vercel/analytics/react"

// Import nových a premenovaných stránok
import Home from './pages/Home';
import Ponuka from './pages/Ponuka';
import PonukaDetail from './pages/PonukaDetail'; // Detail ponuky
import ONas from './pages/ONas';
import CoNasCaka from './pages/CoNasCaka';
import ArchivPodujati from './pages/ArchivPodujati';
import Odkazy from './pages/Odkazy';
import Kontakt from './pages/Kontakt';
//import PodporteNas from './pages/PodporteNas';

import './styles/index.css'; // Hlavný CSS súbor

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ponuka" element={<Ponuka />} />
        {/* Príklad trasy pre detail ponuky - môžete upraviť podľa potreby */}
        <Route path="/ponuka/:kategoriaSlug" element={<PonukaDetail />} /> 
        <Route path="/o-nas" element={<ONas />} />
        <Route path="/co-nas-caka" element={<CoNasCaka />} />
        <Route path="/archiv-podujati" element={<ArchivPodujati />} />
        <Route path="/odkazy" element={<Odkazy />} />
        <Route path="/kontakt" element={<Kontakt />} />
          {/*<Route path="/podporte-nas" element={<PodporteNas />} />*/}
        {/* Môžete pridať aj trasu pre 404 Not Found */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router>
  );
}

export default App;