import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import HeroSection from './Components/HeroSection';
import TimelineSection from './Components/TimelineSection';
import SkillsSection from './Components/SkillsSection';
import ProjectsSection from './Components/ProjectsSection';
import ContactSection from './Components/ContactSection';
import FooterSection from './Components/FooterSection';
// import AchievementsSection from './Components/AchievementsSection';
import CustomCursor from './Components/CustomCursor';
import NotFoundPage from './Components/NotFoundPage'; 
import AboutSection from './Components/AboutSection'; // Import the About Page

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

        {/* About Page Route */}
        <Route path="/about" element={<AboutSection />} />

        {/* Achievements Section */}
        {/* <Route path="/achievements" element={<AchievementsSection />} /> */}

        {/* Catch-all 404 Page */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default App;
