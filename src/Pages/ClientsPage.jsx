import React from 'react';
import { motion } from 'framer-motion';
import Footer from '../New Components/Footer';
import Testomonials from '../New Components/Testomonials';
import Achivments from '../New Components/Achivments';
import { FaQuoteLeft } from 'react-icons/fa6';

const ClientsPage = () => {
  return (
    <div className="bg-[#efeeec] min-h-screen pt-32 font-sans-primary text-gray-900">
       <div className="max-w-7xl mx-auto px-6 mb-20 text-center relative z-10">
         <motion.h1 
           initial={{ opacity: 0, y: 50 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           className="text-6xl md:text-8xl font-bold tracking-tighter"
         >
           Client Success
         </motion.h1>
         <motion.p
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 0.2, duration: 0.8 }}
           className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto"
         >
           Case studies, testimonials, and the stories behind the products we've built together.
         </motion.p>
       </div>

       {/* Featured Case Study: RAPL */}
       <div className="max-w-7xl mx-auto px-6 mb-32">
         <motion.div 
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="bg-white rounded-[3rem] p-8 md:p-16 shadow-2xl border border-gray-100 flex flex-col lg:flex-row gap-12 items-center"
         >
           <div className="w-full lg:w-1/2 space-y-8">
             <div className="inline-flex items-center rounded-full font-bold text-blue-600 bg-blue-50 px-4 py-2 uppercase tracking-wider text-sm">
               Featured Case Study
             </div>
             <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Raised Apparels Private Limited (RAPL)</h2>
             <p className="text-xl text-gray-600 leading-relaxed">
               RAPL offers comprehensive design-to-delivery services crafted to elevate brands. As a mass production powerhouse for other clothing brands, they required an enterprise-grade platform to manage B2B interactions, bulk orders, and complex supply chain data.
             </p>
             
             <div className="bg-gray-50 rounded-3xl p-8 relative overflow-hidden">
               <FaQuoteLeft className="text-6xl absolute top-4 left-4 text-gray-200 opacity-50 z-0" />
               <p className="relative z-10 text-lg md:text-xl font-medium italic text-gray-700 mb-6">
                 "Ashish completely transformed our digital infrastructure. The MERN stack solution he architected allowed us to handle a 40% increase in bulk orders without a single hiccup. His attention to both the frontend UX and backend scalability is unmatched."
               </p>
               <div className="relative z-10">
                 <p className="font-bold text-gray-900">Dhiraj Kumar Pandey</p>
                 <p className="text-sm text-gray-500">Director of Design and Product Development, RAPL</p>
                 <p className="font-bold text-gray-900 mt-2">Shubham</p>
                 <p className="text-sm text-gray-500">Manager, RAPL</p>
               </div>
             </div>
           </div>
           
           <div className="w-full lg:w-1/2 relative h-[400px] md:h-[600px] rounded-3xl overflow-hidden shadow-lg">
             <img src="/Services/RAPL.png" alt="RAPL Platform" className="absolute inset-0 w-full h-full object-cover" />
             <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
             <div className="absolute bottom-8 left-8 right-8 flex gap-4 flex-wrap">
                <span className="px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-white font-medium">B2B E-commerce</span>
                <span className="px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-white font-medium">React & Node.js</span>
                <span className="px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-white font-medium">Supply Chain</span>
             </div>
           </div>
         </motion.div>
       </div>

       {/* Include existing components to fill out the page */}
       <div className="pt-20 border-t border-gray-200">
         <Testomonials />
       </div>
       
       <div className="pt-20">
         <Achivments />
       </div>

       <Footer />
    </div>
  );
};

export default ClientsPage;
