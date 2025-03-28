// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import ONas from './pages/ONas';
import Aktivity from './pages/Aktivity';
import PodporteNas from './pages/PodporteNas';
import Kontakt from './pages/Kontakt';
import './styles/index.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/o-nas" element={<ONas />} />
        <Route path="/aktivity" element={<Aktivity />} />
        <Route path="/podporte-nas" element={<PodporteNas />} />
        <Route path="/kontakt" element={<Kontakt />} />
      </Routes>
    </Router>
  );
}

export default App;