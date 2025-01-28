import React from 'react';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';

const HeroSection = () => {
  return (
    <section className="text-white h-auto flex flex-col md:flex-row items-center md:px-[400px] px-8 py-5">
      {/* Text Content */}
      <div className="flex flex-col justify-center text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Ashish Pandey</h1>
        <p className="text-base md:text-lg text-gray-400 mb-8">
        Web & Game Dev <br /> Art of Development
        </p>
        <div className="flex justify-center md:justify-start gap-4 mb-8 items-center">
          <button className="border border-white text-white px-6 py-2 rounded-md hover:bg-white hover:text-black transition">
            Resume
          </button>
          <a
            href="#"
            className="text-gray-400 hover:text-white text-2xl"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white text-2xl"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white text-2xl"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
        </div>
      </div>

      {/* Profile Image on the Right */}
      <div className="mt-8 md:mt-0 md:ml-10">
        <img
          src="/public/WhatsApp Image 2025-01-24 at 22.10.31_0cf23788.jpg" // Replace with your actual profile image
          alt="Ashish Pandey"
          className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white"
        />
      </div>
    </section>
  );
};

export default HeroSection;
