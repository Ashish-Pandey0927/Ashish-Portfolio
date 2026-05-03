import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Footer from '../New Components/Footer';

const lifeEvents = [
  { year: "2018", title: "The Spark", description: "Wrote my first line of code and instantly fell in love with building things from scratch." },
  { year: "2020", title: "Diving Deep", description: "Began exploring Web3 and Game Development, discovering the infinite possibilities of immersive digital worlds." },
  { year: "2022", title: "First Big Project", description: "Built Nuero NFT, merging my design aesthetic with complex smart contract integrations." },
  { year: "2024", title: "Scaling Up", description: "Joined forces with RAPL to architect enterprise-level e-commerce systems, blending performance with beautiful UI." },
  { year: "Present", title: "What's Next?", description: "Continuing to push the boundaries of creative frontend development and interactive 3D web experiences." }
];

const AboutPage = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <div className="bg-[#111212] min-h-screen text-[#eefeee] pt-32 font-sans-primary">
       <div className="max-w-7xl mx-auto px-6 mb-10 text-center relative z-10">
         <motion.h1 
           initial={{ opacity: 0, y: 50 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           className="text-6xl md:text-8xl lg:text-[10rem] font-bold tracking-tighter"
         >
           My Story
         </motion.h1>
         <motion.p
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 0.4, duration: 1 }}
           className="mt-6 text-xl text-white/50"
         >
           Scroll to dive into the journey.
         </motion.p>
       </div>
       
       <div ref={containerRef} className="relative h-[500vh]">
         {/* Perspective container to enable 3D transforms */}
         <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden" style={{ perspective: '1000px' }}>
           
           {/* Background gradient that shifts with scroll */}
           <motion.div 
             className="absolute inset-0 bg-gradient-to-b from-[#111212] via-teal-900/10 to-[#111212]"
             style={{
               opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0.2, 0.8, 0.2])
             }}
           />

           {lifeEvents.map((event, index) => {
             // Calculate staggered scroll ranges for each event
             const sectionLength = 1 / lifeEvents.length;
             const start = index * sectionLength;
             const peak = start + (sectionLength / 2);
             const end = start + sectionLength;
             
             // 3D Transforms: Start small and far away, come to the screen, then fade out
             const zIndex = lifeEvents.length - index;
             
             const scale = useTransform(
               scrollYProgress, 
               [start - 0.2, peak, end], 
               [0.2, 1, 1.5]
             );
             
             const opacity = useTransform(
               scrollYProgress, 
               [start - 0.1, peak, end - 0.05], 
               [0, 1, 0]
             );
             
             const z = useTransform(
               scrollYProgress, 
               [start - 0.2, peak, end], 
               [-800, 0, 400]
             );
             
             const y = useTransform(
               scrollYProgress, 
               [start - 0.2, peak, end], 
               [300, 0, -200]
             );

             return (
               <motion.div
                 key={index}
                 style={{ scale, opacity, z, y, zIndex }}
                 className="absolute w-full max-w-4xl px-6 flex flex-col items-center text-center"
               >
                 <span className="text-9xl md:text-[200px] font-bold text-white/5 absolute -top-16 md:-top-32 z-0 pointer-events-none select-none">
                   {event.year}
                 </span>
                 <div className="relative z-10 bg-white/5 backdrop-blur-2xl border border-white/10 p-10 md:p-20 rounded-[3rem] shadow-2xl w-full">
                   <h2 className="text-4xl md:text-7xl font-bold mb-6 tracking-tight text-white">{event.title}</h2>
                   <p className="text-xl md:text-3xl text-white/70 leading-relaxed font-light">
                     {event.description}
                   </p>
                 </div>
               </motion.div>
             );
           })}
         </div>
       </div>

       <div className="relative z-10 bg-[#efeeec]">
          <Footer />
       </div>
    </div>
  );
};

export default AboutPage;
