import React, { useEffect } from "react";
import gsap from "gsap";

const SkillsSection = () => {
  useEffect(() => {
    // GSAP animation for skills items
    gsap.from(".skills-item", {
      opacity: 0,
      y: 50, // Use vertical movement instead of horizontal to prevent overlap
      duration: 1,
      stagger: 0.1,
      ease: "power2.out",
    });
  }, []);

  const skills = [
    "JavaScript",
    "TypeScript",
    "Python",
    "ReactJS",
    "NextJS",
    "MongoDB",
    "ExpressJS",
    "NodeJS",
    "SQL",
    "Unity",
    "ThreeJS",
  ];

  return (
    <section className="py-10 px-6 md:px-[400px]">
      <h2 className="text-3xl font-bold text-white mb-6">Skills</h2>
      <div className="flex flex-wrap gap-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="skills-item px-4 py-2 bg-gray-800 text-gray-300 rounded-lg shadow-sm hover:bg-gray-700 hover:text-white transition duration-300"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
