import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
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

  return (
    <section
      ref={targetRef}
      className="relative w-full scroll-smooth"
      style={{ height: `${featuredWorks.length * 100}vh` }}
    >
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="w-[95%] h-[70vh] bg-[#111212] rounded-3xl grid grid-cols-1 lg:grid-cols-12 px-5 lg:px-10">

          {/* LEFT COLUMN */}
          <div className="relative col-span-12 lg:col-span-5 h-full flex flex-col justify-center mt-10">
            <h2 className="absolute top-1 text-lg font-bold text-[#eefeee] uppercase tracking-widest">
              Featured Work
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
                      <div className="relative w-full h-full mt-8 rounded-2xl overflow-hidden">

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
    </section>
  );
};

export default Works;
