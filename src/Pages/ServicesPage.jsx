import React from 'react';
import { motion } from 'framer-motion';
import Footer from '../New Components/Footer';
import { FaCode, FaPaintbrush, FaGamepad, FaCloud, FaBullhorn, FaMagnifyingGlassChart } from "react-icons/fa6";

const detailedServices = [
  {
    id: "web-dev",
    title: "Web Development",
    icon: <FaCode />,
    shortDesc: "High-performance, scalable web applications.",
    longDesc: "I engineer full-stack web applications using modern technologies like React, Next.js, and Node.js. Focus is placed on writing clean, maintainable code that scales gracefully under heavy traffic, while delivering lightning-fast load times for end users.",
    image: "/webdev.jpg",
    tags: ["React", "Node.js", "Databases", "APIs"],
    colSpan: "md:col-span-2",
    rowSpan: "md:row-span-2",
  },
  {
    id: "ui-ux",
    title: "UI/UX Design",
    icon: <FaPaintbrush />,
    shortDesc: "Intuitive, beautiful, and user-centric interfaces.",
    longDesc: "Great code needs a great interface. I design seamless user experiences that not only look stunning but feel natural to interact with, ensuring high user retention and satisfaction.",
    image: "/digitalwerk.png",
    tags: ["Figma", "Prototyping", "Wireframing"],
    colSpan: "md:col-span-1",
    rowSpan: "md:row-span-1",
  },
  {
    id: "game-dev",
    title: "Game Development",
    icon: <FaGamepad />,
    shortDesc: "Immersive 3D worlds and interactive experiences.",
    longDesc: "Bringing imagination to life through Unity and C#. From optimized mobile games to complex 3D web environments using WebGL.",
    image: "/Unity.png",
    tags: ["Unity", "C#", "WebGL"],
    colSpan: "md:col-span-1",
    rowSpan: "md:row-span-2",
  },
  {
    id: "cloud",
    title: "Cloud Solutions",
    icon: <FaCloud />,
    shortDesc: "Robust server infrastructure and DevOps.",
    longDesc: "Deploying and managing scalable backends using AWS, Vercel, and Docker to ensure your application never goes down.",
    image: "/services.jpg",
    tags: ["AWS", "Docker", "CI/CD"],
    colSpan: "md:col-span-1",
    rowSpan: "md:row-span-1",
  },
  {
    id: "branding",
    title: "Branding",
    icon: <FaBullhorn />,
    shortDesc: "Crafting digital identities that resonate.",
    longDesc: "Establishing strong visual identities through cohesive typography, color theory, and digital storytelling.",
    image: "/NFT.png",
    tags: ["Identity", "Strategy", "Visuals"],
    colSpan: "md:col-span-1",
    rowSpan: "md:row-span-1",
  },
  {
    id: "seo",
    title: "Technical SEO",
    icon: <FaMagnifyingGlassChart />,
    shortDesc: "Optimizing visibility for search engines.",
    longDesc: "Implementing advanced technical SEO practices, optimizing Core Web Vitals, and structuring data to ensure maximum organic reach.",
    image: "/SEO.jpg",
    tags: ["Analytics", "Performance", "Optimization"],
    colSpan: "md:col-span-2",
    rowSpan: "md:row-span-1",
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
};

const ServicesPage = () => {
  return (
    <div className="bg-[#efeeec] min-h-screen pt-32 font-sans-primary text-gray-900">
       <div className="max-w-7xl mx-auto px-6 mb-20 text-center relative z-10">
         <motion.h1 
           initial={{ opacity: 0, y: 50 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           className="text-6xl md:text-8xl font-bold tracking-tighter"
         >
           Core Services
         </motion.h1>
         <motion.p
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 0.2, duration: 0.8 }}
           className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto"
         >
           End-to-end digital solutions, from foundational architecture to pixel-perfect interfaces.
         </motion.p>
       </div>

       <div className="max-w-7xl mx-auto px-6 pb-32">
         <motion.div 
           variants={containerVariants}
           initial="hidden"
           animate="show"
           className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]"
         >
           {detailedServices.map((service) => (
             <motion.div 
               key={service.id}
               variants={itemVariants}
               className={`group relative rounded-3xl overflow-hidden bg-white shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-200 p-8 flex flex-col justify-between ${service.colSpan} ${service.rowSpan}`}
             >
               {/* Background Image on Hover */}
               <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none">
                 <img src={service.image} alt="" className="w-full h-full object-cover grayscale" />
               </div>

               <div className="relative z-10">
                 <div className="w-14 h-14 rounded-2xl bg-gray-100 text-gray-900 flex items-center justify-center text-2xl mb-6 shadow-inner">
                   {service.icon}
                 </div>
                 <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-3">{service.title}</h2>
                 <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
                   {service.rowSpan === "md:row-span-2" ? service.longDesc : service.shortDesc}
                 </p>
               </div>

               <div className="relative z-10 flex gap-2 flex-wrap mt-auto">
                 {service.tags.map(tag => (
                   <span key={tag} className="px-3 py-1 bg-gray-100 rounded-full text-xs font-semibold text-gray-600">
                     {tag}
                   </span>
                 ))}
               </div>
               
               {/* Decorative Gradient Blob */}
               <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-gray-900/5 blur-3xl rounded-full group-hover:bg-gray-900/10 transition-colors duration-500" />
             </motion.div>
           ))}
         </motion.div>
       </div>

       <Footer />
    </div>
  );
};

export default ServicesPage;
