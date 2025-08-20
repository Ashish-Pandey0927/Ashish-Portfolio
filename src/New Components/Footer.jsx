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
              <h2 className="text-2xl lg:text-3xl font-medium tracking-tight">Stay updated with my news</h2>
              <form className="w-full relative">
                <input 
                  type="email" 
                  placeholder="Your Email Address"
                  className="appearance-none transition bg-gray-700 rounded-full w-full text-white font-medium tracking-tight text-lg px-5 py-4 lg:text-xl lg:px-6 lg:py-5 placeholder:text-white/50 focus:outline-none focus:ring-3 focus:ring-white/15"
                />
                <div className="absolute top-0 right-0 p-2">
                  <button type="submit" className="group w-10 h-10 lg:w-12 lg:h-12 bg-teal-400 text-black rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 lg:w-6 lg:h-6 transition-transform duration-300 group-hover:rotate-90">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                  </button>
                </div>
              </form>
              <div className="flex flex-wrap gap-1.5">
                <SocialIcon href="#"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.59 0 0 .59 0 1.325v21.35C0 23.41.59 24 1.325 24H12.82v-9.29H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h5.713c.735 0 1.325-.59 1.325-1.325V1.325C24 .59 23.41 0 22.675 0z" /></svg></SocialIcon>
                <SocialIcon href="#"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg></SocialIcon>
                <SocialIcon href="#"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.012 3.584-.07 4.85c-.148 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.85s.012-3.584.07-4.85C2.289 3.856 3.746 2.31 6.999 2.163 8.264 2.105 8.644 2.093 12 2.093m0-2.093c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.947s-.014-3.667-.072-4.947c-.196-4.354-2.617-6.78-6.979-6.98C15.667.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z"/></svg></SocialIcon>
              </div>
            </div>
            
            {/* Link Columns */}
            <div className="col-span-12 lg:col-span-6 lg:col-start-6 flex flex-wrap justify-between gap-y-10">
              <div className="flex flex-col items-start gap-y-1.5 border-l border-white/20 pl-3 w-1/2 md:w-auto"><AnimatedLink href="#">Services</AnimatedLink><AnimatedLink href="#">Work</AnimatedLink><AnimatedLink href="#">About</AnimatedLink><AnimatedLink href="#">Culture</AnimatedLink><AnimatedLink href="#">Meet The Risers</AnimatedLink></div>
              <div className="flex flex-col items-start gap-y-1.5 border-l border-white/20 pl-3 w-1/2 md:w-auto"><AnimatedLink href="#">Testimonials</AnimatedLink><AnimatedLink href="#">Blog</AnimatedLink><AnimatedLink href="#">Webinars</AnimatedLink><AnimatedLink href="#">Careers</AnimatedLink></div>
              <div className="flex flex-col items-start gap-y-1.5 border-l border-white/20 pl-3 w-1/2 md:w-auto"><AnimatedLink href="#">Sheffield</AnimatedLink><AnimatedLink href="#">Manchester</AnimatedLink><AnimatedLink href="#">London</AnimatedLink><AnimatedLink href="#">New York</AnimatedLink><AnimatedLink href="#">Contact</AnimatedLink></div>
            </div>
          </div>

          {/* Middle Section: Large Logo Text */}
          <div className="col-span-12 mt-10 lg:mt-32 text-center">
            <h1 className="text-8xl md:text-9xl font-bold tracking-tighter text-white">
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
