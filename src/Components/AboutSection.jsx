import React from "react";
import { Link } from "react-scroll"; // Import for smooth scrolling

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Ashish Pandey</h1>
        <div className="space-x-6">
          {/* Other navbar items */}
          <Link
            to="about" // Scroll to the About section
            smooth={true}
            duration={500}
            className="text-white hover:text-blue-500 cursor-pointer"
          >
            About
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
