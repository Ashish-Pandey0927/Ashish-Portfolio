import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { FaMagnifyingGlass, FaChartLine } from "react-icons/fa6";

const featuredWorks = [
  {
    id: 1,
    title: "RAPL",
    date: "2024-2025",
    category: "Clothing Brand",
    videoUrl: "/Videos/rapl.mp4",
    imageUrl: "Services/RAPL.png",
    siteUrl: "https://raisedapparels.com",
    description: "An extra 3m clicks regionally through SEO.",
    color: "#3b82f6",
  },
  {
    id: 2,
    title: "Voice To Notes",
    date: "2023",
    category: "Web Application",
    videoUrl: "/Videos/voice.mp4",
    imageUrl: "/Services/image.png",
    siteUrl: "https://voicetonotes.ai/",
    description:
      "A real-time voice-to-text product needed a landing page that communicates value instantly. Built a clean, conversion-focused landing page that helped the product gain 800+ signups within 2 weeks of launch.",
    color: "#ef4444",
  },
  {
    id: 3,
    title: "Nuero NFT",
    date: "2022-2023",
    category: "NFT Website",
    videoUrl: "/Videos/nft.mp4",
    imageUrl: "Services/NFT.png",
    siteUrl: "https://nft-main-mauve.vercel.app/",
    description:
      "A personal project exploring Web3 UI patterns. Built a clean, mobile-first NFT marketplace interface with streamlined minting and trading flows. High-end visuals without sacrificing performance.",
    color: "#22c55e",
  },
  {
    id: 4,
    title: "Dextrix 4.0",
    date: "2024",
    category: "Hackathon Website",
    videoUrl: "/Videos/dextrix.mp4",
    imageUrl: "Services/hackathon.png",
    siteUrl: "https://dexterix.technojam.in/",
    description: "Designed and built a Hackathon website with Next.js.",
    color: "#f97316",
  },
];

const Works = () => {
  const targetRef = useRef(null);
  const [activeProject, setActiveProject] = useState(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const yTransformText = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", `-${(1 - 1 / featuredWorks.length) * 100}%`]
  );

  const yTransformImages = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", `-${(featuredWorks.length - 1) * 100}%`]
  );

  const xTransformMobile = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", `-${(featuredWorks.length - 1) * 100}vw`]
  );

  return (
    <section
      ref={targetRef}
      className="relative w-full scroll-smooth"
      style={{ height: `${featuredWorks.length * 100}vh` }}
    >
      {/* DESKTOP VIEW */}
      <div className="hidden lg:flex sticky top-0 h-screen w-full items-center justify-center overflow-hidden">
        <div className="w-[95%] h-[70vh] bg-[#111212] rounded-3xl grid grid-cols-1 lg:grid-cols-12 px-5 lg:px-10">

          {/* LEFT COLUMN */}
          <div className="relative col-span-12 lg:col-span-5 h-full flex flex-col justify-center mt-10">
            <h2 className="absolute top-1 text-lg font-bold text-[#eefeee] uppercase tracking-widest flex items-center justify-between w-[95%]">
              <span>Featured Work</span>
              <Link to="/works" className="text-xs font-medium border border-white/20 px-4 py-1.5 rounded-full hover:bg-white hover:text-black transition-colors">
                View All
              </Link>
            </h2>

            <div
              className="relative h-[40vh] overflow-hidden"
              onMouseLeave={() => setActiveProject(null)}
            >
              <div className="absolute top-0 left-0 w-full h-1/4 z-10 bg-gradient-to-b from-[#111212] to-transparent" />

              <motion.div
                style={{ y: yTransformText }}
                className="absolute inset-0 mt-24"
              >
                {featuredWorks.map((work) => (
                  <div
                    key={work.id}
                    className="w-full h-[10vh] flex flex-col justify-center"
                    onMouseEnter={() => setActiveProject(work.id)}
                  >
                    <div className="relative inline-block">
                      <motion.h3
                        className="text-4xl md:text-6xl font-bold text-[#eefeee]"
                        animate={{
                          marginLeft: activeProject === work.id ? 20 : 0,
                        }}
                        transition={{ duration: 0.4 }}
                      >
                        {work.title}
                      </motion.h3>

                      <motion.p
                        className="absolute top-0 left-full -translate-x-48 w-full -translate-y-1 text-sm text-[#eefeee]"
                        animate={{
                          marginLeft: activeProject === work.id ? 20 : 0,
                        }}
                        transition={{ duration: 0.4 }}
                      >
                        [{work.date}]
                      </motion.p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="hidden lg:block relative col-span-7 h-full">
            <div className="w-full h-[70vh] flex items-center justify-center">
              <div className="w-[80%] h-full overflow-hidden">
                <motion.div
                  style={{ y: yTransformImages }}
                  className="h-[60vh] w-full rounded-2xl pb-10"
                >
                  {featuredWorks.map((work) => (
                    <div
                      key={work.id}
                      className="w-full h-full relative group mb-6 last:mb-0 rounded-2xl"
                      onMouseEnter={() => setActiveProject(work.id)}
                      onMouseLeave={() => setActiveProject(null)}
                    >
                      {/* IMAGE + VIDEO CONTAINER */}
                      <div className="relative w-full h-full mt-8 rounded-2xl overflow-hidden bg-black/20">

                        {/* Thumbnail */}
                        <img
                          src={work.imageUrl}
                          alt={work.title}
                          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                            activeProject === work.id
                              ? "opacity-0"
                              : "opacity-100"
                          }`}
                        />

                        {/* Video (Mounted only when active) */}
                        {activeProject === work.id && (
                          <video
                            src={work.videoUrl}
                            muted
                            loop
                            playsInline
                            autoPlay
                            className="absolute inset-0 w-full h-full object-cover"
                          />
                        )}
                      </div>

                      {/* Default Tag Overlay */}
                      <div className="absolute inset-0 bg-black/20 p-6 flex justify-end items-end rounded-2xl">
                        <div className="inline-flex items-center rounded-full font-medium text-white bg-white/20 backdrop-blur-sm text-sm gap-x-3 py-2.5 px-3.5">
                          <FaMagnifyingGlass />
                          <span>{work.category}</span>
                          <FaChartLine />
                        </div>
                      </div>

                      {/* Hover Overlay */}
                      <motion.div
                        className="absolute inset-0 flex flex-col justify-between p-6 rounded-2xl backdrop-blur-sm bg-black/40"
                        initial={{ opacity: 0 }}
                        animate={{
                          opacity: activeProject === work.id ? 1 : 0,
                        }}
                        transition={{ duration: 0.4 }}
                      >
                        <p className="text-xl xl:text-3xl font-medium text-white">
                          {work.description}
                        </p>

                        <div className="flex justify-between items-end">
                          <span className="text-white/80 text-sm">
                            {work.category}
                          </span>

                          <a
                            href={work.siteUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-5 py-2 rounded-full bg-white text-black text-sm font-semibold hover:scale-105 transition"
                          >
                            Visit Site →
                          </a>
                        </div>
                      </motion.div>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE / TABLET HORIZONTAL VIEW */}
      <div className="flex lg:hidden sticky top-0 h-screen w-full items-center overflow-hidden bg-[#111212]">
        <h2 className="absolute top-10 left-5 right-5 text-lg font-bold text-[#eefeee] uppercase tracking-widest z-10 flex justify-between items-center">
          <span>Featured Work</span>
          <Link to="/works" className="text-xs font-medium border border-white/20 px-3 py-1.5 rounded-full hover:bg-white hover:text-black transition-colors">
            View All
          </Link>
        </h2>
        <motion.div
          style={{ x: xTransformMobile }}
          className="flex h-[70vh] items-center"
          // We set the width to (N * 100vw) so it holds all cards side by side
          // Actually each card will just be w-screen flex-shrink-0
        >
          {featuredWorks.map((work) => (
            <div
              key={work.id}
              className="w-screen h-full flex flex-col justify-center px-5 flex-shrink-0"
            >
              <div className="w-full h-[60vh] relative rounded-3xl overflow-hidden bg-gray-800">
                {/* Image */}
                <img
                  src={work.imageUrl}
                  alt={work.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                
                {/* Dark overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40" />

                <div className="absolute inset-0 p-6 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <h3 className="text-3xl font-bold text-white leading-tight">
                      {work.title}
                    </h3>
                    <span className="text-white/70 text-sm">
                      [{work.date}]
                    </span>
                  </div>

                  <div>
                    <div className="inline-flex items-center rounded-full font-medium text-white bg-white/20 backdrop-blur-sm text-xs gap-x-2 py-1.5 px-3 mb-4">
                      <FaMagnifyingGlass className="text-[10px]" />
                      <span>{work.category}</span>
                    </div>
                    <p className="text-white/90 text-sm mb-6">
                      {work.description}
                    </p>
                    <a
                      href={work.siteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-5 py-2.5 rounded-full bg-white text-black text-sm font-semibold hover:scale-105 transition"
                    >
                      Visit Site →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Works;
