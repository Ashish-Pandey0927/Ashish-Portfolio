import React from 'react';

// --- Animated Link Component ---
// Replicates the slide-up text effect on hover.
const AnimatedLink = ({ href, children }) => (
  <a href={href} className="group inline-flex text-white font-medium tracking-tight leading-tight text-lg lg:text-xl hover:text-teal-400 transition-colors duration-300">
    <div className="relative overflow-hidden h-7">
      <div className="transition-transform duration-300 ease-in-out group-hover:-translate-y-7">
        {children}
      </div>
      <div className="absolute top-0 left-0 transition-transform duration-300 ease-in-out translate-y-7 group-hover:translate-y-0">
        {children}
      </div>
    </div>
  </a>
);


// --- Social Icon Component ---
// Styled to match the reference: white background with icon and arrow.
const SocialIcon = ({ href, children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-x-2 rounded-xl text-xs px-2 py-1 transition-all duration-300 bg-white text-black hover:rounded-md">
    {children}
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-3 h-3 transition-transform duration-300 group-hover:rotate-45">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
    </svg>
  </a>
);

// --- Main Footer Component ---
const Footer = () => {
  return (
    <footer className=" text-white font-sans rounded-t-3xl p-2">
      <div className="bg-black rounded-2xl w-full h-full px-4 md:px-7 py-14 lg:py-10">
        <div className="max-w-7xl mx-auto">
          
          {/* Top Section: Newsletter and Links */}
          <div className="grid grid-cols-12 gap-x-5 gap-y-10">
            
            {/* Column 1: Newsletter & Socials */}
            <div className="col-span-12 lg:col-span-4 flex flex-col gap-y-5">
              <h2 className="text-2xl lg:text-3xl font-medium tracking-tight">Have a project in mind? Let's build it.</h2>
              <div className="flex flex-col gap-y-1">
                <p className="text-white/40 text-sm tracking-wide">Drop me a line anytime</p>
                <a
                  href="mailto:ashish09274377@gmail.com"
                  className="group inline-flex items-center gap-x-2 text-teal-400 font-semibold text-base lg:text-lg hover:text-white transition-colors duration-300 break-all"
                >
                  ashish09274377@gmail.com
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 flex-shrink-0 transition-transform duration-300 group-hover:translate-x-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </a>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {/* LinkedIn */}
                <SocialIcon href="https://www.linkedin.com/in/ashish-pandey0927/"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0H5C2.239 0 0 2.239 0 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5V5c0-2.761-2.238-5-5-5zM8 19H5V8h3v11zM6.5 6.732A1.732 1.732 0 114.768 5 1.732 1.732 0 016.5 6.732zM20 19h-3v-5.604c0-3.368-4-3.113-4 0V19h-3V8h3v1.765C14.396 7.179 20 6.988 20 12.476V19z"/></svg></SocialIcon>
                {/* Instagram */}
                <SocialIcon href="https://www.instagram.com/ashish_4377/"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.012 3.584-.07 4.85c-.148 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.85s.012-3.584.07-4.85C2.289 3.856 3.746 2.31 6.999 2.163 8.264 2.105 8.644 2.093 12 2.093m0-2.093c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.947s-.014-3.667-.072-4.947c-.196-4.354-2.617-6.78-6.979-6.98C15.667.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z"/></svg></SocialIcon>
                {/* GitHub */}
                <SocialIcon href="https://github.com/Ashish-Pandey0927"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg></SocialIcon>
              </div>

            </div>
            
            {/* Link Columns */}
            <div className="col-span-12 lg:col-span-6 lg:col-start-6 flex flex-wrap justify-between gap-y-10">
              <div className="flex flex-col items-start gap-y-1.5 border-l border-white/20 pl-3 w-1/2 md:w-auto"><AnimatedLink href="#">Services</AnimatedLink><AnimatedLink href="#">Work</AnimatedLink><AnimatedLink href="#">About</AnimatedLink></div>
              <div className="flex flex-col items-start gap-y-1.5 border-l border-white/20 pl-3 w-1/2 md:w-auto"><AnimatedLink href="#">Testimonials</AnimatedLink><AnimatedLink href="#">Blog</AnimatedLink><AnimatedLink href="#">Webinars</AnimatedLink></div>
              <div className="flex flex-col items-start gap-y-1.5 border-l border-white/20 pl-3 w-1/2 md:w-auto"><AnimatedLink href="/contact">Contact</AnimatedLink></div>
            </div>
          </div>

          {/* Middle Section: Large Logo Text */}
          <div className="col-span-12 mt-10 lg:mt-32 text-center">
            <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-white break-words">
              Ashish Pandey
            </h1>
          </div>
          
          {/* Bottom Section: Copyright */}
          <div className="col-span-12 flex justify-between flex-col mt-10 items-end md:flex-row lg:items-center lg:mt-0">
            <div className="flex gap-x-3 gap-y-2 flex-wrap items-center text-xs text-white/70">
              <span>© 2025 Ashish Pandey. All rights reserved</span>
              <div className="w-1 h-1 rounded-full bg-white/70"></div>
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <div className="w-1 h-1 rounded-full bg-white/70"></div>
              <a href="#" className="hover:text-white">Terms & conditions</a>
            </div>
            <div className="w-full mt-4 md:ml-auto md:text-right lg:mt-0 lg:w-auto">
              <a href="#" className="text-xs text-white/70 hover:text-white">Website MadeByME</a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
