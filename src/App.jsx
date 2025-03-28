import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import ONas from './pages/ONas.jsx';
import Aktivity from './pages/Aktivity.jsx';
import PodporteNas from './pages/PodporteNas.jsx';
import Kontakt from './pages/Kontakt.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import './App.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/o-nas" element={<ONas />} />
            <Route path="/aktivity" element={<Aktivity />} />
            <Route path="/podporte-nas" element={<PodporteNas />} />
            <Route path="/kontakt" element={<Kontakt />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;