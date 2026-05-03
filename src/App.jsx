import React, { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Components
import PixelTransition from './Components/PixelTransition';
import Navbar from './New Components/Navbar';
import Hero from './New Components/Hero';
import Skills from './New Components/Skills';
import About from './New Components/About';
import Works from './New Components/Works';
import Services from './New Components/Services';
import Achivments from './New Components/Achivments';
import Testomonials from './New Components/Testomonials';
import Footer from './New Components/Footer';
import NotFoundPage from './Components/NotFoundPage';
import GetInTouch from './New Components/GetInTouch';

// Pages
import AboutPage from './Pages/AboutPage';
import WorksPage from './Pages/WorksPage';
import ServicesPage from './Pages/ServicesPage';
import ClientsPage from './Pages/ClientsPage';

const AppContent = () => {

  useEffect(() => {
  const lenis = new Lenis({ lerp: 0.08 });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  // 🔥 SYNC FRAMER WITH LENIS
  lenis.on("scroll", () => {
    window.dispatchEvent(new Event("scroll"));
  });

  return () => {
    lenis.destroy();
  };
}, []);

  const location = useLocation();

  return (
    <>
      {/* Navbar ALWAYS visible */}
      <Navbar />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route 
            path="/" 
            element={
              <PixelTransition>
                <>
                  <Hero />
                  <Skills />
                  <About />
                  <Works />
                  <Services />
                  <Achivments />
                  <Testomonials />
                  <Footer />
                </>
              </PixelTransition>
            } 
          />
          <Route path="/about" element={<PixelTransition><AboutPage /></PixelTransition>} />
          <Route path="/works" element={<PixelTransition><WorksPage /></PixelTransition>} />
          <Route path="/services" element={<PixelTransition><ServicesPage /></PixelTransition>} />
          <Route path="/clients" element={<PixelTransition><ClientsPage /></PixelTransition>} />
          <Route path="/contact" element={<PixelTransition><GetInTouch /></PixelTransition>} />
          <Route path="*" element={<PixelTransition><NotFoundPage /></PixelTransition>} />
        </Routes>
      </AnimatePresence>
    </>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;