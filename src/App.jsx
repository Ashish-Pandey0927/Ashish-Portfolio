import React, { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Your Component Imports
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

const App = () => {

  // This useEffect hook initializes Lenis for smooth scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothTouch: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cleanup function to destroy Lenis instance on component unmount
    return () => {
      lenis.destroy();
    };
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <Router>
      <Routes>
        {/* Home Page */}
        <Route 
          path="/" 
          element={
            <>
              <Navbar />
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

        {/* Other Page Routes */}
        <Route path="/about" element={<AboutSection />} />
        <Route path="/projects" element={<ProjectsSection />} />

        {/* Catch-all 404 Page */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default App;
