import React, { useEffect } from "react";
import gsap from "gsap";

const AboutSection = () => {
  useEffect(() => {
    gsap.from(".about-text", {
      opacity: 0,
      x: -100,
      duration: 1.5,
      ease: "power2.out",
    });
    gsap.from(".about-image", {
      opacity: 0,
      scale: 0.5,
      duration: 1.5,
      ease: "power2.out",
    });
  }, []);

  return (
    <section className="py-20 px-6 md:px-[400px] text-white">
      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Text Section */}
        <div className="about-text md:w-1/2">
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <p className="text-lg text-gray-300">
            Hello, I'm Ashish Pandey, a passionate Web and Game Developer with a
            knack for creating immersive experiences through code. I thrive in
            problem-solving and building modern, efficient applications. My
            journey in development has been driven by curiosity and a love for
            continuous learning.
          </p>
          <p className="text-lg text-gray-300 mt-4">
            Currently, I'm diving deep into the world of game development,
            exploring 3D engines like Unity and enhancing my front-end skills
            with technologies like React and NextJS. I believe in writing clean,
            maintainable code and designing intuitive, user-friendly interfaces.
          </p>
        </div>

        {/* Image Section */}
        <div className="about-image md:w-1/2">
          <img
            src="/WhatsApp Image 2025-06-16 at 12.43.54_ef05f508.jpg" // Replace with your image URL
            alt="Ashish Pandey"
            className="rounded-lg shadow-lg w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
