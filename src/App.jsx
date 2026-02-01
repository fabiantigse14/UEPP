import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import HomePage from './pages/HomePage';
import AdmissionsPage from './pages/AdmissionsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import EjeTransversalPage from './pages/EjeTransversalPage';
import ClubsPage from './pages/ClubsPage'; // New import
import NuestraHistoriaPage from './pages/NuestraHistoriaPage'; // New import

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/admisiones" element={<AdmissionsPage />} />
          <Route path="/nosotros" element={<AboutPage />} />
          <Route path="/contacto" element={<ContactPage />} />
          <Route path="/ejetransversal" element={<EjeTransversalPage />} />
          <Route path="/clubs" element={<ClubsPage />} /> {/* New route */}
          <Route path="/nuestrahistoria" element={<NuestraHistoriaPage />} /> {/* New route */}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
