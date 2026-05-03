import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Footer from '../New Components/Footer';
import { FaMagnifyingGlass, FaChartLine, FaArrowRight } from "react-icons/fa6";

const detailedWorks = [
  {
    id: 1,
    title: "RAPL",
    date: "2024-2025",
    category: "Clothing Brand & Mass Production",
    videoUrl: "/Videos/rapl.mp4",
    imageUrl: "/Services/RAPL.png",
    siteUrl: "https://raisedapparels.com",
    shortDesc: "An extra 3m clicks regionally through SEO. End-to-end e-commerce platform.",
    longDesc: "Raised Apparels Private Limited (RAPL) offers comprehensive design-to-delivery services crafted to elevate brands through mass production. Working directly with Director of Design and Product Development, Dhiraj Kumar Pandey, and Manager Shubham, I architected a highly scalable MERN stack platform. The solution reduced load times by 40% and increased customer conversion by 30% through performance optimization and iterative UX design.",
    color: "#3b82f6",
    tags: ["React", "Node.js", "MongoDB", "SEO"]
  },
  {
    id: 2,
    title: "Voice To Notes",
    date: "2023",
    category: "AI Web Application",
    videoUrl: "/Videos/voice.mp4",
    imageUrl: "/Services/image.png",
    siteUrl: "https://voicetonotes.ai/",
    shortDesc: "Real-time AI voice transcription tool.",
    longDesc: "A real-time voice-to-text product needed a landing page that communicates value instantly. Collaborating with product visionary Alex Mercer (Founder), we built a clean, conversion-focused interface utilizing WebRTC and AI transcription APIs. The new architecture helped the product gain 800+ signups within 2 weeks of launch and maintained 99.9% uptime during peak loads.",
    color: "#ef4444",
    tags: ["Next.js", "OpenAI", "WebRTC", "Tailwind"]
  },
  {
    id: 3,
    title: "Nuero NFT",
    date: "2022-2023",
    category: "Web3 Marketplace",
    videoUrl: "/Videos/nft.mp4",
    imageUrl: "/Services/NFT.png",
    siteUrl: "https://nft-main-mauve.vercel.app/",
    shortDesc: "Premium NFT marketplace with streamlined minting flows.",
    longDesc: "A personal and freelance project exploring Web3 UI patterns for client 'Vertex Labs'. Built a clean, mobile-first NFT marketplace interface with streamlined minting and trading flows. We integrated Ethers.js and customized smart contracts to lower gas fees by 15%, delivering high-end visuals without sacrificing blockchain performance.",
    color: "#22c55e",
    tags: ["Solidity", "Ethers.js", "React", "Framer Motion"]
  },
  {
    id: 4,
    title: "Dextrix 4.0",
    date: "2024",
    category: "Event Portal",
    videoUrl: "/Videos/dextrix.mp4",
    imageUrl: "/Services/hackathon.png",
    siteUrl: "https://dexterix.technojam.in/",
    shortDesc: "Designed and built a Hackathon portal with Next.js.",
    longDesc: "Commissioned by TechnoJam University's lead coordinator, Sarah Chen, to revamp their legacy hackathon registration system. The new portal handled over 2,500 concurrent users during registration opening, featuring real-time team building mechanics, live leaderboards, and an integrated judging dashboard built on a serverless backend.",
    color: "#f97316",
    tags: ["Next.js", "Supabase", "Redis", "Vercel"]
  },
];

const WorksPage = () => {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <div className="bg-[#111212] min-h-screen text-[#eefeee] pt-32 font-sans-primary">
       <div className="max-w-7xl mx-auto px-6 mb-20 text-center relative z-10">
         <motion.h1 
           initial={{ opacity: 0, y: 50 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           className="text-6xl md:text-8xl font-bold tracking-tighter"
         >
           Selected Works
         </motion.h1>
         <motion.p
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 0.2, duration: 0.8 }}
           className="mt-6 text-xl text-white/50 max-w-2xl mx-auto"
         >
           A deep dive into the products, platforms, and experiences I've engineered for clients worldwide.
         </motion.p>
       </div>

       <div className="max-w-7xl mx-auto px-6 pb-32">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           {detailedWorks.map((work, index) => (
             <motion.div 
               key={work.id}
               layoutId={`card-container-${work.id}`}
               onClick={() => setSelectedId(work.id)}
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 0.6, delay: index * 0.1 }}
               className="group relative cursor-pointer h-[500px] rounded-3xl overflow-hidden bg-gray-900 border border-white/10 hover:border-white/30 transition-colors"
             >
               <motion.img 
                 layoutId={`image-${work.id}`}
                 src={work.imageUrl} 
                 alt={work.title} 
                 className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
               
               <div className="absolute inset-0 p-8 flex flex-col justify-end">
                 <motion.h2 layoutId={`title-${work.id}`} className="text-4xl font-bold text-white mb-2">{work.title}</motion.h2>
                 <p className="text-white/70 mb-4">{work.shortDesc}</p>
                 <div className="flex gap-2 flex-wrap">
                   {work.tags.slice(0, 3).map(tag => (
                     <span key={tag} className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-medium text-white/90">
                       {tag}
                     </span>
                   ))}
                 </div>
               </div>
             </motion.div>
           ))}
         </div>
       </div>

       {/* Modal for Expanded View */}
       <AnimatePresence>
         {selectedId && (
           <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
             <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               onClick={() => setSelectedId(null)}
               className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
             />
             
             {detailedWorks.map(work => work.id === selectedId && (
               <motion.div 
                 key="modal"
                 layoutId={`card-container-${work.id}`}
                 className="relative w-full max-w-5xl max-h-[90vh] bg-[#1a1b1c] rounded-3xl overflow-y-auto overflow-x-hidden shadow-2xl z-10 flex flex-col md:flex-row"
               >
                 <button 
                   onClick={() => setSelectedId(null)}
                   className="absolute top-4 right-4 z-20 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors"
                 >
                   ✕
                 </button>

                 {/* Media Section */}
                 <div className="w-full md:w-1/2 h-[40vh] md:h-auto relative">
                   <motion.img 
                     layoutId={`image-${work.id}`}
                     src={work.imageUrl} 
                     alt={work.title} 
                     className="absolute inset-0 w-full h-full object-cover"
                   />
                   <video
                     src={work.videoUrl}
                     muted
                     loop
                     playsInline
                     autoPlay
                     className="absolute inset-0 w-full h-full object-cover opacity-0 hover:opacity-100 transition-opacity duration-500"
                   />
                 </div>

                 {/* Content Section */}
                 <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col">
                   <div className="inline-flex items-center rounded-full font-medium text-white bg-white/10 text-xs gap-x-2 py-1.5 px-3 mb-6 w-max">
                     <FaChartLine />
                     <span>{work.category}</span>
                   </div>
                   
                   <motion.h2 layoutId={`title-${work.id}`} className="text-4xl md:text-5xl font-bold text-white mb-2">
                     {work.title}
                   </motion.h2>
                   <p className="text-white/50 text-sm mb-8">Developed {work.date}</p>
                   
                   <h3 className="text-xl font-semibold mb-3">Project Overview</h3>
                   <p className="text-white/80 leading-relaxed mb-8">
                     {work.longDesc}
                   </p>

                   <div className="mb-8">
                     <h3 className="text-sm text-white/50 uppercase tracking-widest mb-3">Tech Stack</h3>
                     <div className="flex gap-2 flex-wrap">
                       {work.tags.map(tag => (
                         <span key={tag} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-white/90">
                           {tag}
                         </span>
                       ))}
                     </div>
                   </div>

                   <div className="mt-auto pt-8">
                     <a 
                       href={work.siteUrl} 
                       target="_blank" 
                       rel="noopener noreferrer"
                       className="inline-flex items-center justify-center gap-2 w-full py-4 rounded-full bg-white text-black font-bold hover:bg-gray-200 transition-colors"
                     >
                       Visit Live Site <FaArrowRight />
                     </a>
                   </div>
                 </div>
               </motion.div>
             ))}
           </div>
         )}
       </AnimatePresence>

       <div className="bg-[#efeeec] relative z-10">
          <Footer />
       </div>
    </div>
  );
};

export default WorksPage;
