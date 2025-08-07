import React, { useState, useEffect } from "react";
import gsap from "gsap";

const TimelineSection = () => {
  const [activeTab, setActiveTab] = useState("Work");

  useEffect(() => {
    gsap.from(".timeline", {
      opacity: 0,
      y: 100,
      duration: 1.5,
      ease: "power3.out",
    });
  }, []);

  const workTimeline = [
    {
      date: "Dec 2024 - Feb 2025",
      company: "Eklavya.Me",
      position: "Game Dev Intern",
      logo: "/eklavya.jpg",
    },
    {
      date: "Oct 2023 - Jul 2024",
      company: "Technojam",
      position: "Frontend Developer",
      logo: "/techno.jpg",
    },
  ];

  const educationTimeline = [
    {
      date: "2022 - 2026",
      institution: "Galgotias University",
      degree: "Bachelor of Technology, Computer Science",
      logo: "https://img.jagranjosh.com/images/2022/June/162022/Galgotias%20University.jpg",
    },
    {
      date: "2020 - 2022",
      institution: "DAV Public School",
      degree: "Higher Secondary Education",
      logo: "https://logodix.com/logo/1981257.jpg",
    },
  ];

  const timelineData =
    activeTab === "Work" ? workTimeline : educationTimeline;

  return (
    <section className="text-white py-10 px-6 md:px-[400px] timeline">
      {/* Tab Section */}
      <div className="flex justify-center mb-8">
        <div className="w-full max-w-[600px] flex border border-gray-600 rounded-md overflow-hidden">
          <button
            onClick={() => setActiveTab("Work")}
            className={`w-1/2 px-6 py-3 text-center transition ${
              activeTab === "Work"
                ? "bg-gray-700 text-white"
                : "bg-gray-800 text-gray-400 hover:bg-gray-700"
            }`}
          >
            Work
          </button>
          <button
            onClick={() => setActiveTab("Education")}
            className={`w-1/2 px-6 py-3 text-center transition ${
              activeTab === "Education"
                ? "bg-gray-700 text-white"
                : "bg-gray-800 text-gray-400 hover:bg-gray-700"
            }`}
          >
            Education
          </button>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="border-2 border-gray-600 rounded-md p-5">
        <div className="border-l border-gray-600 pl-5">
          {timelineData.map((item, index) => (
            <div key={index} className="mb-10 flex items-start">
              <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
                <img
                  src={item.logo}
                  alt="logo"
                  className="w-10 h-10 rounded-full"
                />
              </div>
              <div className="ml-5">
                <p className="text-sm text-gray-400">{item.date}</p>
                <h3 className="text-lg font-semibold">
                  {activeTab === "Work" ? item.company : item.institution}
                </h3>
                <p className="text-gray-300">
                  {activeTab === "Work" ? item.position : item.degree}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
