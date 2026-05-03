import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Lottie from "lottie-react";
import waveAnimation from "../assets/lottie/wave.json";
import { FaBriefcase, FaListUl, FaUser, FaUsers, FaEnvelope, FaHouse } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const works = [
  { title: "RAPL", img: "Services/RAPL.png" },
  { title: "Voice To Notes", img: "/Services/image.png" },
  { title: "NFT Website", img: "/Services/NFT.png" },
  { title: "Hackathon", img: "Services/hackathon.png" },
];

const services = [
  {
    title: "Web development",
    img: "/webdev.jpg",
  },
  {
    title: "UI/UX",
    img: "/digitalwerk.png",
  },
  {
    title: "Game Development",
    img: "/Unity.png",
  },
  {
    title: "Cloud Solutions",
    img: "/services.jpg",
  },
  {
    title: "Branding",
    img: "/NFT.png",
  },
  {
    title: "Onsite SEO",
    img: "/SEO.jpg",
  },
];

const DropdownOverlay = ({ items, title, onClose, onMouseEnter }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Check if this is the services dropdown to apply the special layout
  const isServicesLayout = title === "Core Services";

  // Split items into two columns only if it's the services layout
  const splitIndex = isServicesLayout ? Math.ceil(items.length / 2) : 0;
  const column1Items = isServicesLayout ? items.slice(0, splitIndex) : [];
  const column2Items = isServicesLayout ? items.slice(splitIndex) : [];

  // Helper function to render a single link to avoid repeating code
  const renderLinkItem = (item, index) => (
    <div
      key={item.title}
      className="relative h-8 cursor-pointer overflow-hidden"
      onMouseEnter={() => setActiveIndex(index)}
    >
      <div
        className={`transition-transform duration-300 ${activeIndex === index ? "-translate-y-8" : "translate-y-0"}`}
      >
        <span className="text-xl font-semibold text-gray-900">
          {item.title}
        </span>
      </div>
      <div
        className={`transition-transform duration-300 absolute top-0 left-0 ${activeIndex === index ? "translate-y-0" : "translate-y-8"}`}
      >
        <span className="text-xl font-semibold">{item.title}</span>
      </div>
    </div>
  );

  return createPortal(
    <>
      <div className="fixed inset-0 bg-white/60 backdrop-blur-lg z-[60] pointer-events-none transition-all duration-300" />
      <div
        // 1. Conditionally set a wider width for the services dropdown
        className={`fixed left-1/2 top-24 -translate-x-1/2 ${isServicesLayout ? "w-[750px]" : "w-[600px]"} h-[260px] bg-white rounded-3xl shadow-xl z-[70] flex overflow-hidden`}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onClose}
        style={{ pointerEvents: "auto" }}
      >
        {/* Left: Animated Dropdown Links */}
        <div className="w-2/3 p-10 flex flex-col justify-center">
          <div className="text-gray-500 text-base mb-4">{title}</div>

          {isServicesLayout ? (
            // 2. If it's services, render the two-column layout
            <div className="flex flex-row gap-12">
              <div className="flex flex-col gap-2">
                {column1Items.map((item, idx) => renderLinkItem(item, idx))}
              </div>
              <div className="flex flex-col gap-2">
                {column2Items.map((item, idx) =>
                  renderLinkItem(item, splitIndex + idx),
                )}
              </div>
            </div>
          ) : (
            // 3. Otherwise, render the original single-column layout
            <div className="flex flex-col gap-2">
              {items.map((item, idx) => renderLinkItem(item, idx))}
            </div>
          )}
        </div>

        {/* Right: Active image display */}
        <div className="w-1/3 m-4 flex flex-col justify-center items-center relative">
          {items[activeIndex] && (
            <>
              <img
                src={items[activeIndex].img}
                alt={items[activeIndex].title}
                className="absolute inset-0 h-full w-full object-cover rounded-xl"
              />
              <Link
                to={isServicesLayout ? "/services" : "/works"}
                className="absolute bottom-4 left-4 text-white text-sm z-10"
              >
                View All {isServicesLayout ? "Services" : title} →
              </Link>
            </>
          )}
        </div>
      </div>
    </>,
    document.body,
  );
};

const Navbar = () => {
  const lottieRef = useRef();
  const [showWave, setShowWave] = useState(false);

  const [scrolled, setScrolled] = useState(false);
  const [dropdown, setDropdown] = useState(null); // 'works' or 'services' or null
  const [isDropdownActive, setIsDropdownActive] = useState(false);
  const hoverRef = useRef(false);
  // const [playWave, setPlayWave] = useState(false);

  // Navbar hover handlers
  const handleDropdownEnter = (type) => {
    setDropdown(type);
    setIsDropdownActive(true);
    hoverRef.current = true;
  };
  const handleDropdownLeave = () => {
    hoverRef.current = false;
    setTimeout(() => {
      if (!hoverRef.current) {
        setIsDropdownActive(false);
        setDropdown(null);
      }
    }, 120); // Slightly longer delay for smoother transition
  };

  // Dropdown hover handlers
  const handleDropdownBoxEnter = () => {
    setIsDropdownActive(true);
    hoverRef.current = true;
  };
  const handleDropdownBoxLeave = () => {
    hoverRef.current = false;
    setTimeout(() => {
      if (!hoverRef.current) {
        setIsDropdownActive(false);
        setDropdown(null);
      }
    }, 120);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setShowWave(true);
      lottieRef.current?.play();

      // hide after animation finishes
      setTimeout(() => {
        lottieRef.current?.stop();
        setShowWave(false);
      }, 2500); // match animation duration
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Base classes that are always applied to the navbar.
  const baseNavbarClasses =
    "fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl hidden lg:flex items-center justify-between z-50 px-4 py-2 transition-all duration-300 ease-in-out rounded-full";

  // Classes that change based on the 'scrolled' state.
  const scrolledNavbarClasses = "bg-white/60 backdrop-blur-lg shadow-md";
  const topNavbarClasses = "bg-transparent";

  // Base classes for the navigation links.
  const baseLinkClasses =
    "group inline-flex tracking-tight leading-tight py-2 px-4 font-medium relative transition-colors duration-300";

  // Classes for links that change based on the 'scrolled' state.
  const scrolledLinkClasses = "text-gray-800 hover:text-black";
  const topLinkClasses = "text-white hover:text-gray-200";

  return (
    // We combine the base classes with the conditional classes.
    // The look of the navbar (background, text color) depends on the 'scrolled' state.
    <>
      <nav
        className={`${baseNavbarClasses} ${
          scrolled ? scrolledNavbarClasses : topNavbarClasses
        } z-[62]`}
      >
        <Link
          to="/"
          className={`text-lg font-bold ${
            scrolled ? "text-gray-900" : "text-white"
          }`}
        >
          Ashish Pandey
        </Link>
        <div className="relative group hidden lg:inline-flex items-center bg-gray-500/10 rounded-full">
          <div className="z-10 relative flex">
            <div
              className="relative"
              onMouseEnter={() => handleDropdownEnter("works")}
              onMouseLeave={handleDropdownLeave}
            >
              <Link
                to="/works"
                className={`${baseLinkClasses} ${
                  scrolled ? scrolledLinkClasses : topLinkClasses
                }`}
              >
                Work +
              </Link>
            </div>
            <div
              className="relative"
              onMouseEnter={() => handleDropdownEnter("services")}
              onMouseLeave={handleDropdownLeave}
            >
              <Link
                to="/services"
                className={`${baseLinkClasses} ${
                  scrolled ? scrolledLinkClasses : topLinkClasses
                }`}
              >
                Services +
              </Link>
            </div>
            <Link
              to="/about"
              className={`${baseLinkClasses} ${
                scrolled ? scrolledLinkClasses : topLinkClasses
              }`}
            >
              About
            </Link>
            <Link
              to="/clients"
              className={`${baseLinkClasses} ${
                scrolled ? scrolledLinkClasses : topLinkClasses
              }`}
            >
              Clients
            </Link>
          </div>
        </div>

        {/* "Get in touch" Button */}
        {/* Get in touch Button */}
        <div className="hidden lg:inline-flex">
          <Link
            onMouseEnter={() => {
              lottieRef.current?.play();
            }}
            onMouseLeave={() => {
              lottieRef.current?.stop();
            }}
            to="/contact"
            className={`relative group inline-flex items-center justify-center gap-x-2 font-medium overflow-hidden border cursor-pointer text-base px-6 py-2.5 rounded-full transition-all duration-300 ${
              scrolled ? "bg-gray-900 text-white" : "bg-white text-gray-900"
            }`}
          >
            {/* TEXT ANIMATION */}
            <div className="relative overflow-hidden z-10">
              <div className="transition-transform duration-300 group-hover:-translate-y-7">
                <div className="flex items-center gap-x-2">
                  <span>Get In Touch</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </div>

              <div className="transition-transform duration-300 absolute top-0 left-0 translate-y-7 group-hover:translate-y-0">
                <div className="flex items-center gap-x-2">
                  <span>Get In Touch</span>
                  <span>→</span>
                </div>
              </div>
            </div>

            {/* LOTTIE CHARACTER */}
            <div
              className={`absolute z-10 w-14 pointer-events-none transition-all duration-500 ${
                showWave ? "bottom-0" : "bottom-[-35px]"
              }`}
            >
              <Lottie
                lottieRef={lottieRef}
                animationData={waveAnimation}
                loop={false}
                autoplay={false}
                className="w-full h-full"
              />
            </div>
          </Link>
        </div>
      </nav>
      {dropdown === "works" && isDropdownActive && (
        <DropdownOverlay
          items={works}
          title="Works"
          onClose={handleDropdownBoxLeave}
          onMouseEnter={handleDropdownBoxEnter}
        />
      )}
      {dropdown === "services" && isDropdownActive && (
        <DropdownOverlay
          items={services}
          title="Core Services"
          onClose={handleDropdownBoxLeave}
          onMouseEnter={handleDropdownBoxEnter}
        />
      )}

      {/* Mobile Bottom Navbar */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 w-[95%] max-w-[400px] bg-white/90 backdrop-blur-lg shadow-2xl rounded-full z-[999] flex items-center justify-around py-3 px-2 sm:px-4 lg:hidden">
        <Link to="/" className="flex flex-col items-center gap-1 text-gray-700 hover:text-black w-1/6">
          <FaHouse className="text-xl" />
          <span className="text-[10px] font-medium">Home</span>
        </Link>
        <Link to="/works" className="flex flex-col items-center gap-1 text-gray-700 hover:text-black w-1/6">
          <FaBriefcase className="text-xl" />
          <span className="text-[10px] font-medium">Work</span>
        </Link>
        <Link to="/services" className="flex flex-col items-center gap-1 text-gray-700 hover:text-black w-1/6">
          <FaListUl className="text-xl" />
          <span className="text-[10px] font-medium">Services</span>
        </Link>
        <Link to="/about" className="flex flex-col items-center gap-1 text-gray-700 hover:text-black w-1/6">
          <FaUser className="text-xl" />
          <span className="text-[10px] font-medium">About</span>
        </Link>
        <Link to="/clients" className="flex flex-col items-center gap-1 text-gray-700 hover:text-black w-1/6">
          <FaUsers className="text-xl" />
          <span className="text-[10px] font-medium">Clients</span>
        </Link>
        <Link to="/contact" className="flex flex-col items-center gap-1 text-gray-700 hover:text-black w-1/6">
          <FaEnvelope className="text-xl" />
          <span className="text-[10px] font-medium">Contact</span>
        </Link>
      </div>
    </>
  );
};

export default Navbar;
