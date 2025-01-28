import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import HeroSection from './Components/HeroSection';
import TimelineSection from './Components/TimelineSection';
import SkillsSection from './Components/SkillsSection';
import ProjectsSection from './Components/ProjectsSection';
import ContactSection from './Components/ContactSection';
import FooterSection from './Components/FooterSection';
import AchievementsSection from './Components/AchievementsSection';
import CustomCursor from './Components/CustomCursor';
import NotFoundPage from './Components/NotFoundPage'; // Import the 404 page
// import CanvasGame from './Components/CanvasGame'; // Import the game component

const App = () => {
  return (
    <Router>
      <CustomCursor />
      <Routes>
        {/* Home Page */}
        <Route 
          path="/" 
          element={
            <>
              <Navbar />
              <HeroSection />
              <TimelineSection />
              <SkillsSection />
              <ProjectsSection />
              <ContactSection />
              <FooterSection />
            </>
          } 
        />

        {/* Achievements Section */}
        <Route path="/achievements" element={<AchievementsSection />} />

        {/* Game Route */}
        {/* <Route path="https://js-2d-pokemon-game.netlify.app/" /> */}

        {/* Catch-all 404 Page */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default App;
