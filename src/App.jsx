import React, { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Navbar from './New Components/Navbar';
import Hero from './New Components/Hero';
import Skills from './New Components/Skills';
import About from './New Components/About';
import Works from './New Components/Works';
import Services from './New Components/Services';
import Achivments from './New Components/Achivments';
import Testomonials from './New Components/Testomonials';
import Footer from './New Components/Footer';
import AboutSection from './Components/AboutSection';
import ProjectsSection from './Components/ProjectsSection';
import NotFoundPage from './Components/NotFoundPage';
import GetInTouch from './New Components/GetInTouch';

const App = () => {

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

  return (
    <Router>
      {/* Navbar ALWAYS visible */}
      <Navbar />

      <Routes>

        <Route 
          path="/" 
          element={
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
          } 
        />

        <Route path="/about" element={<AboutSection />} />
        <Route path="/projects" element={<ProjectsSection />} />
        <Route path="/contact" element={<GetInTouch />} />
        <Route path="*" element={<NotFoundPage />} />

      </Routes>
    </Router>
  );
};

export default App;