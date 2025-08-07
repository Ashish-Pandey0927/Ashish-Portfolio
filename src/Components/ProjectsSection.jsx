import React, { useEffect } from "react";
import gsap from "gsap";
import { title } from "framer-motion/client";

const projects = [
  {
    title: "Raised Apparels E-commerce Store",
    image: "/RAPL.png", // Replace with actual image
    description: "Architected a MERN stack e-commerce store. Reduced load times by 40% and increased customer conversion by 30% through performance optimization and iterative design.",
    link: "https://raisedapparels.com",
    // Replace with actual project link
      },
      {
        title: "digitalwerk",
        image: "/digitalwerk.png",
        description: "Designed and developed a high-fidelity clone of an award-winning website, focusing on custom UI/UX and advanced web technologies.",
        link: "https://awwwards-remake-digitalwerk-main.vercel.app/",

      },
      {
        title: "Adayam Project Website",
        image: "/adayam.png", // Replace with actual image
    description: "A modern portfolio showcasing their work and projects.",
    link: "https://adamya-project.vercel.app/",
  },
  {
    title: "Hackathon Website",
    image: "/hackathon.png", // Replace with actual image
    description: "A full-stack e-commerce app built using React and Node.js.",
    link: "https://dexterix.technojam.in/",
  },
  {
    title: "NFT Website",
    image: "/NFT.png", // Replace with actual image
    description: "A NFT platform with buy and sell support and user authentication.",
    link: "https://nft-main-mauve.vercel.app/",
  },
  {
    title: "Game Development",
    image: "/Screenshot 2024-12-06 201624.png", // Replace with actual image
    description: "A fun 3D game built using Unity and C#.",
    link: "https://example.com/game",
  },
];

const ProjectsSection = () => {

    useEffect(() => {
        gsap.from(".project-item", {
          opacity: 0,
          scale: 0.8,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
        });
      }, []);
  return (
    <section className="py-10 px-6 md:px-[400px]" id="projects">
      <h2 className="text-3xl font-bold text-white mb-6">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="relative group project-item">
            {/* Project Image */}
            <img
              src={project.image}
              alt={project.title}
              className="rounded-lg shadow-md w-full h-60 object-cover group-hover:brightness-75 transition duration-300"
            />
            {/* Overlay Description */}
            <div className="absolute inset-0 bg-black bg-opacity-75 opacity-0 group-hover:opacity-100 transition duration-300 rounded-lg flex flex-col justify-center items-center p-4">
              <h3 className="text-lg font-bold text-white">{project.title}</h3>
              <p className="text-sm text-gray-300 mt-2 mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-gray-700 transition duration-300"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;