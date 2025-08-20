import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaMagnifyingGlass, FaChartLine } from "react-icons/fa6";

// --- Data for your projects ---
// You can easily add, remove, or edit projects here.
const featuredWorks = [
  {
    id: 1,
    title: "RAPL",
    date: "2024-2025",
    category: "Clothing Brand",
    imageUrl: "/public/RAPL.png",
    description: "An extra 3m clicks regionally through SEO.",
    color: "#3b82f6", // blue-500
  },
  {
    id: 2,
    title: "Project Two",
    date: "2023",
    category: "Web Application",
    imageUrl: "/public/adayam.png",
    description: "Developed a high-performance e-commerce platform.",
    color: "#ef4444", // red-500
  },
  {
    id: 3,
    title: "Game Dev",
    date: "2022-2023",
    category: "Indie Game",
    imageUrl: "/public/digitalwerk.png",
    description: "Created a 2D platformer with a custom physics engine.",
    color: "#22c55e", // green-500
  },
  {
    id: 4,
    title: "Portfolio",
    date: "2024",
    category: "Personal Website",
    imageUrl: "/public/hackathon.png",
    description: "Designed and built a personal portfolio with Next.js.",
    color: "#f97316", // orange-500
  },
];

const Works = () => {
  const targetRef = useRef(null);
  const [activeProject, setActiveProject] = useState(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  // This calculates the percentage the text column needs to move up.
  // It's based on the number of projects to ensure all items are shown.
  const yTransformText = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", `-${(1 - 1 / featuredWorks.length) * 100}%`]
  );

  // This calculates the movement for the image column.
  // It moves the column up by the height of N-1 images.
  const yTransformImages = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", `-${(featuredWorks.length - 1) * 100}%`]
  );

  return (
    // The height of this section determines how long the pinning effect lasts.
    // It's proportional to the number of projects.
    <section
      ref={targetRef}
      className="relative w-full scroll-smooth"
      style={{ height: `${featuredWorks.length * 100}vh` }}
    >
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="w-[95%] h-[70vh] bg-[#111212] rounded-3xl grid grid-cols-1 lg:grid-cols-12 px-5 lg:pl-8 lg:pr-8 xl:pl-10 xl:pr-10">
          {/* --- Left Column (Project Titles) --- */}
          <div className="relative col-span-12 lg:col-span-5 h-full flex flex-col justify-center mt-10">
            <h2 className="absolute top-1 text-lg font-bold text-[#eefeee] uppercase tracking-widest">
              Featured Work
            </h2>
            <div
              className="relative h-[40vh] overflow-hidden" // Viewport for the text
              onMouseLeave={() => setActiveProject(null)}
            >
              <div className="absolute top-0 left-0 w-full h-1/4 z-10 bg-gradient-to-b from-[#111212] to-transparent" />
              <div className="absolute bottom-0 left-0 w-full h-1/4 z-10" />
              <motion.div
                style={{ y: yTransformText }}
                className="absolute inset-0 mt-24"
                initial={{ y: 40 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                {featuredWorks.map((work) => (
                  <div
                    key={work.id}
                    className="w-full h-[10vh] flex flex-col justify-center group"
                    onMouseEnter={() => setActiveProject(work.id)}
                  >
                    <div className="relative inline-block">
                      <motion.h3
                        className="text-4xl md:text-6xl font-bold text-[#eefeee]"
                        initial={false}
                        animate={{
                          marginLeft: activeProject === work.id ? 20 : 0,
                        }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                      >
                        {work.title}
                      </motion.h3>
                      <motion.p
                        className="absolute top-0 left-full -translate-x-48 w-full -translate-y-1 text-sm font-medium mt-0 text-[#eefeee]"
                        initial={false}
                        animate={{
                          marginLeft: activeProject === work.id ? 20 : 0,
                        }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                      >
                        [{work.date}]
                      </motion.p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* --- Right Column (Scrolling Project Images) --- */}
          <div className="hidden lg:block relative col-span-7 h-full">
            <div className="w-full h-[70vh] flex items-center justify-center">
              <div className="w-[80%] h-full overflow-hidden">
                <motion.div
                  style={{ y: yTransformImages }}
                  className="h-[60vh] w-full rounded-2xl pb-10"
                  initial={{ y: 40 }} // Start a bit lower
                  animate={{ y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  {featuredWorks.map((work) => (
                    <div
                      key={work.id}
                      className="w-full h-full relative group mb-6 last:mb-0 rounded-2xl"
                       onMouseEnter={() => setActiveProject(work.id)}
    onMouseLeave={() => setActiveProject(null)}
                    >
                      <img
                        src={work.imageUrl}
                        alt={work.title}
                        className="w-full h-full object-cover rounded-2xl mt-8"
                      />

                      {/* Default overlay */}
                      <div className="absolute inset-0 bg-black/20 p-6 flex justify-end items-end rounded-2xl">
                        <div className="shrink-0 inline-flex items-center rounded-full font-medium text-white bg-white/20 backdrop-blur-sm text-sm gap-x-3 py-2.5 px-3.5 rounded-2xl">
                          <FaMagnifyingGlass />
                          <span>{work.category}</span>
                          <FaChartLine />
                        </div>
                      </div>

                      {/* Hover overlay with details */}
                      <motion.div
                        className="absolute inset-0 flex flex-col justify-between p-6 rounded-2xl"
                        style={{
                          backgroundColor: work.color,
                          color: "#FFFFFF",
                        }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: activeProject === work.id ? 1 : 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                      >
                        <p className="text-2xl xl:text-5xl font-medium tracking-tight text-white/90">
                          {work.description}
                        </p>
                        <div className="w-full flex items-end justify-between">
                          <div />
                          <div className="shrink-0 inline-flex items-center rounded-full font-medium bg-white/15 backdrop-blur-sm text-sm gap-x-3 py-2.5 px-3.5">
                            <span>{work.category}</span>
                          </div>
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
