import React from 'react'

const About = () => {
  return (
    <section className='w-full py-8 md:py-24 xl:py-4'>
      <div className='w-full max-w-7xl mx-8 '>
        <div className='w-full flex flex-col-reverse md:flex-row justify-around items-stretch gap-y-8 gap-x-20'>
          
          {/* Left Column: Intro Text */}
          <div className='w-full pt-4'>
            <p className='text-xl md:text-2xl lg:text-3xl font-medium text-gray-800 leading-tight'>
              I’m Ashish, a developer who turns coffee and ideas into <strong className='font-semibold text-gray-900'>websites, games, and digital experiences.</strong>
            </p>
          </div>

          {/* Right Column: Larger Text, Image, and Buttons */}
          <div className='w-full max-w-2xl flex flex-col items-start gap-8'>
            <h2 className='text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter text-left'>
              <span>...but that’s just the short version — there’s more to my </span>
              <span className="inline-flex items-center gap-x-4">
                story.
                <div className='inline-block w-16 h-16 md:w-20 md:h-20 rounded-2xl overflow-hidden bg-gray-200 shrink-0'>
                  <img 
                    src="/WhatsApp Image 2025-06-16 at 12.43.54_ef05f508.jpg" 
                    alt="Ashish Pandey"
                    className='w-full h-full object-cover'
                  />
                </div>
              </span>
            </h2>
            
            <div className='flex flex-col sm:flex-row items-start gap-4'>
              {/* Button 1: My Story */}
              <a href="#" className='group w-full sm:w-auto inline-flex items-center justify-center relative font-semibold overflow-hidden px-6 py-3 rounded-full transition-all duration-300 ease-in-out bg-white text-gray-900 ring-1 ring-gray-200 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-900/50'>
                <div className='relative h-6 overflow-hidden'>
                  <div className='transition-transform duration-300 group-hover:-translate-y-6'>
                    <div className='flex items-center gap-x-2'>
                      <span>My Story</span>
                      <span className='inline-block text-lg'>→</span>
                    </div>
                  </div>
                  <div className='absolute top-0 left-0 transition-transform duration-300 translate-y-6 group-hover:translate-y-0'>
                    <div className='flex items-center gap-x-2'>
                      <span>My Story</span>
                      <span className='inline-block text-lg'>→</span>
                    </div>
                  </div>
                </div>
              </a>
              {/* Button 2: My Services */}
              <a href="#" className='group w-full sm:w-auto inline-flex items-center justify-center relative font-semibold overflow-hidden px-6 py-3 rounded-full transition-all duration-300 ease-in-out bg-white text-gray-900 ring-1 ring-gray-200 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-900/50'>
                 <div className='relative h-6 overflow-hidden'>
                  <div className='transition-transform duration-300 group-hover:-translate-y-6'>
                    <div className='flex items-center gap-x-2'>
                      <span>My Services</span>
                      <span className='inline-block text-lg'>→</span>
                    </div>
                  </div>
                  <div className='absolute top-0 left-0 transition-transform duration-300 translate-y-6 group-hover:translate-y-0'>
                    <div className='flex items-center gap-x-2'>
                      <span>My Services</span>
                      <span className='inline-block text-lg'>→</span>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About
