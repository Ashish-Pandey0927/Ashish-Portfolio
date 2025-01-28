import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 shadow-md sticky top-0 z-50">
      <div className="px-6 md:px-[400px] flex justify-between items-center py-4">
        {/* Logo */}
        <div className="text-xl font-bold text-white">
          <h1>Ashish Pandey</h1>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6 lg:gap-10">
          <a
            href="#"
            className="text-gray-400 hover:text-white transition duration-300"
          >
            Projects
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition duration-300"
          >
            About
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition duration-300"
          >
            Service
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition duration-300"
          >
            Contact
          </a>
          <a
            href="#"
            className="bg-gray-700 text-white py-2 px-4 rounded-md hover:bg-gray-600 transition duration-300"
          >
            Resume
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div
          className="md:hidden cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="w-6 h-1 bg-white mb-1"></div>
          <div className="w-6 h-1 bg-white mb-1"></div>
          <div className="w-6 h-1 bg-white"></div>
        </div>
      </div>

      {/* Mobile Links */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 shadow-md py-4 px-6">
          <div className="flex flex-col items-center gap-4">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              Projects
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              About
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              Service
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              Contact
            </a>
            <a
              href="#"
              className="bg-gray-700 text-white py-2 px-4 rounded-md hover:bg-gray-600 transition duration-300"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
