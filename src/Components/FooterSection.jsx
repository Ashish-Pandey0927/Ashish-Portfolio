import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation

const FooterSection = () => {
  return (
    <footer className="bg-gray-800 text-gray-400 py-8 px-6 md:px-[400px]">
      <div className="container mx-auto">
        {/* Upper Section */}
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-700 pb-6 mb-6">
          {/* Logo and Tagline */}
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h2 className="text-2xl font-bold text-white">Ashish Pandey</h2>
            <p className="text-sm text-gray-400">
              Crafting modern solutions, one line of code at a time.
            </p>
          </div>
          {/* Social Media Links */}
          <div className="flex space-x-4">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              <i className="fab fa-github text-xl"></i>
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              <i className="fab fa-linkedin text-xl"></i>
            </a>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              <i className="fab fa-twitter text-xl"></i>
            </a>
            <a
              href="mailto:ashish09274377@gmail.com"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              <i className="fas fa-envelope text-xl"></i>
            </a>
          </div>
        </div>

        {/* Game Button */}
        <div className="flex justify-center mb-4">
          <a
            href="https://js-2d-pokemon-game.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-300">
              Play Pokémon Game
            </button>
          </a>
        </div>

        {/* Lower Section */}
        <div className="text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Ashish Pandey. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
