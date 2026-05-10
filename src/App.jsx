// src/App.jsx
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import { Analytics } from "@vercel/analytics/react"

// Each page becomes its own chunk so the initial bundle only ships the
// shell + the page the visitor actually lands on. Cuts ~50–70% off the
// first JS download for users who only visit a single page.
const Home = lazy(() => import('./pages/Home'));
const Ponuka = lazy(() => import('./pages/Ponuka'));
const PonukaDetail = lazy(() => import('./pages/PonukaDetail'));
const ONas = lazy(() => import('./pages/ONas'));
const CoNasCaka = lazy(() => import('./pages/CoNasCaka'));
const CoMameZaSebou = lazy(() => import('./pages/CoMameZaSebou'));
const Kontakt = lazy(() => import('./pages/Kontakt'));
const VzdelavanieCirkus = lazy(() => import('./pages/VzdelavanieCirkus'));
const VzdelavanieHudba = lazy(() => import('./pages/VzdelavanieHudba'));
const VystupeniaCirkus = lazy(() => import('./pages/VystupeniaCirkus'));
const VystupeniaHudba = lazy(() => import('./pages/VystupeniaHudba'));
const Tabor = lazy(() => import('./pages/Tabor'));

import './styles/index.css'; // Hlavný CSS súbor

const RouteFallback = () => (
  <div className="route-loading">
    <span className="loading-spinner" aria-label="Načítavam"></span>
  </div>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Analytics />
      <Suspense fallback={<RouteFallback />}>
        <Routes>
          {/* --- Base and Other Page Routes --- */}
          <Route path="/" element={<Home />} />
          <Route path="/ponuka" element={<Ponuka />} />
          <Route path="/o-nas" element={<ONas />} />
          <Route path="/tabor" element={<Tabor />} />
          <Route path="/co-nas-caka" element={<CoNasCaka />} />
          <Route path="/co-mame-za-sebou" element={<CoMameZaSebou />} />
          <Route path="/kontakt" element={<Kontakt />} />

          {/* --- Specific Combination Routes (MUST COME BEFORE general /ponuka/:kategoriaSlug) --- */}
          <Route path="/ponuka/vzdelavanie-cirkus" element={<VzdelavanieCirkus />} />
          <Route path="/ponuka/vzdelavanie-hudba" element={<VzdelavanieHudba />} />
          <Route path="/ponuka/vystupenia-cirkus" element={<VystupeniaCirkus />} />
          <Route path="/ponuka/vystupenia-hudba" element={<VystupeniaHudba />} />

          {/* --- General Category Detail Route (Catches /ponuka/cirkus, /ponuka/hudba, etc.) --- */}
          <Route path="/ponuka/:kategoriaSlug" element={<PonukaDetail />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;