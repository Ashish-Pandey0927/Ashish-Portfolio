import { section } from 'framer-motion/m';
import React, { useState, useEffect } from 'react';

const Hero = () => {
  // State to control when the animations should start.
  const [animate, setAnimate] = useState(false);
  
  // An array of image URLs to be chosen from randomly.
  // Replace these placeholders with your actual image paths.
  const images = [
    '/20250813_152437~2.jpg',
    '/20240701_141938_remastered.jpg',
    '/45b700f8e20068c07b2478cfa49e5c74.jpg',
  ];

  // State to hold the randomly selected image for the current render.
  const [selectedImage, setSelectedImage] = useState('');

  // This effect runs once after the component is first rendered.
  useEffect(() => {
    // Select a random image from the array on component mount.
    const randomImage = images[Math.floor(Math.random() * images.length)];
    setSelectedImage(randomImage);

    // We use a short timeout to ensure the component is in the DOM before
    // we apply the animation classes. This makes the transition visible.
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 100); // 100ms delay before starting the animation.

    // Cleanup function to clear the timeout if the component unmounts.
    return () => clearTimeout(timer);
  }, []); // Empty dependency array ensures this effect runs only once.

  return (
    <section className='w-full py-0'>
 <div className='w-full h-screen relative p-2'>
      {/* Bottom text sections for additional information */}
      <div className='items-end justify-between absolute bottom-0 left-0 z-30 w-full p-7 flex'>
        <div className='hidden flex-shrink-0 md:inline'>
          <div className='w-full text-left'>
            <p className='text-sm font-sans-primary leading-normal text-pretty text-white lg:text-base'>
              Build user-friendly products that solve <br /> <strong className='font-medium'>real-world problems</strong>
            </p>
          </div>
        </div>
        <div className='w-full text-center md:text-right'>
          <p className='text-sm font-sans-primary leading-normal text-pretty text-white lg:text-base'>
            <strong className='font-medium'>Full-Stack & Game Developer</strong><br />passionate about crafting seamless experiences.
          </p>
        </div>
      </div>

      {/* Main content area with background image and animated text */}
      <div className='w-full h-full relative overflow-hidden rounded-3xl'>
        <div className='w-full h-full overflow-hidden grid bg-gray-900 rounded-3xl'>
          {/* Background Image Layer */}
          <div className='col-start-1 row-start-1 relative z-0 overflow-hidden blur-sm lg:blur-md'>
            {/* The src is now dynamically set from the selectedImage state */}
            <img 
              src={selectedImage} 
              alt="Abstract background" 
              className='w-full h-full object-cover absolute inset-0' 
            />
          </div>

          {/* Overlay and Centered Content Layer */}
          <div className='col-start-1 row-start-1 z-20 relative flex justify-center items-center bg-gray-900/40'>
            <div className='flex flex-col items-center'>
              {/* Increased font size and adjusted tracking for a cooler look */}
              <h1 className='flex flex-col text-center justify-center text-white text-7xl md:text-8xl lg:text-9xl font-sans-primary font-bold tracking-tighter'>
                
                {/* "Namaste" Animation */}
                <div className='overflow-hidden pb-2'>
                  <div 
                    className={`transition-transform duration-1000 ease-out ${animate ? 'translate-y-0' : 'translate-y-full'}`}
                  >
                    Namaste
                  </div>
                </div>

                {/* "Ashish Pandey" Animation */}
                <div className='flex flex-wrap items-center justify-center'>
                  {/* "Ashish" animates from the left */}
                  <div className='overflow-hidden'>
                     <div 
                       className={`relative transition-transform duration-1000 ease-out delay-300 ${animate ? 'translate-x-0' : '-translate-x-full'} pl-12 pt-4`}
                     >
                        <span className='absolute top-0 left-0 text-3xl font-light tracking-normal opacity-80'>I&apos;m</span>
                       Ashish
                     </div>
                  </div>

                  {/* Small image in the middle */}
                  <div className='inline-block w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-2xl overflow-hidden mx-4 shrink-0 bg-black/20'>
                    {/* The src is also dynamically set from the selectedImage state */}
                    <img 
                      src={selectedImage} 
                      alt="Profile" 
                      className='w-full h-full object-cover'
                    />
                  </div>
                  
                  {/* "Pandey" animates from the right */}
                  <div className='overflow-hidden'>
                    <div 
                      className={`py-4 transition-transform duration-1000 ease-out delay-500 ${animate ? 'translate-x-0' : 'translate-x-full'} pr-12 pt-4`}
                    >
                      Pandey
                    </div>
                  </div>
                </div>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
    // The main container for the Hero section. It takes up the full screen height.
   
  );
};
export default Hero
