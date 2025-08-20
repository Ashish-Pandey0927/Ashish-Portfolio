import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// --- Your Testimonials Data ---
// Added a 'color' property to each testimonial for unique card backgrounds.
const testimonials = [
  {
    name: "Priya Sharma",
    title: "Marketing Head, Digital India",
    quote: "Working with them was a game-changer. Their insights and dedication doubled our engagement in just one quarter. Truly remarkable results!",
    image: "https://placehold.co/100x100/f7d1d1/333?text=PS",
    color: "#fff0f0", // Soft Pink
  },
  {
    name: "Rohan Mehta",
    title: "Founder, StartUp Solutions",
    quote: "The level of professionalism and creativity is unmatched. They took our vision and brought it to life with a polish we hadn't thought possible.",
    image: "https://placehold.co/100x100/d1d4f7/333?text=RM",
    color: "#f0f2ff", // Soft Blue
  },
  {
    name: "Anjali Verma",
    title: "CEO, Creative Minds",
    quote: "From start to finish, the process was seamless. They are not just a vendor, but a true partner in our success. Highly recommended!",
    image: "https://placehold.co/100x100/d1f7d4/333?text=AV",
    color: "#f0fff2", // Soft Green
  },
    {
    name: "Vikram Singh",
    title: "Product Lead, Tech Innovators",
    quote: "Their data-driven approach provided clarity and direction. We are now on a clear path to market leadership thanks to their expert guidance.",
    image: "https://placehold.co/100x100/f7f3d1/333?text=VS",
    color: "#fffdef", // Soft Yellow
  },
];

// --- Main Testimonials Component ---
const Testomonials = () => {
  const scrollContainerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: scrollContainerRef,
    // The animation now starts when the top of the container reaches the center of the screen
    offset: ['start center', 'end end'],
  });

  return (
    <section className="w-full pb-12 xl:pb-24 bg-[#efeeec]">
      {/* Added relative and z-10 to ensure the header stays above the sticky cards */}
      <div className="relative z-10 w-full px-4">
         {/* Section Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="flex items-center gap-4 text-[6vw] font-bold text-black">
            What
             <span className="inline-block rounded-[20%] overflow-hidden w-20 h-20 align-middle">
              <img
                src="https://placehold.co/100x100/d1d4f7/333?text=💬"
                alt="Quote Icon"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </span>
            Clients Say
          </h2>
        </div>
        <hr className="border-gray-300 mb-12" />
      </div>

      {/* Increased height for a longer scroll animation duration */}
      <div ref={scrollContainerRef} className="relative h-[300vh]">
        {/* The sticky container is now positioned lower and aligns cards to the top */}
        <div className="sticky top-[30vh] left-0 right-0 flex justify-center items-start">
          {testimonials.map((testimonial, i) => {
            // Define the start and end points for this card's main animation
            const animationStart = i / testimonials.length;
            const animationEnd = (i + 1) / testimonials.length;
            
            return (
              <Card
                key={i}
                i={i}
                {...testimonial}
                progress={scrollYProgress}
                range={[animationStart, animationEnd]}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};


// --- Card Sub-Component ---
const Card = ({ i, name, title, quote, image, progress, range, color }) => {
  // Each card's animation is now tied to its specific segment of the scroll
  const y = useTransform(progress, range, [0, -300]);
  const rotate = useTransform(progress, range, [0, -15]);
  const scale = useTransform(progress, range, [1, 0.9]);
  const opacity = useTransform(progress, [range[0], (range[0] + range[1]) / 2, range[1]], [1, 1, 0]);

  return (
    <motion.div
      style={{
        y,
        rotate,
        scale,
        opacity,
        zIndex: testimonials.length - i, // Ensure cards stack correctly
        backgroundColor: color, // Apply the unique color here
      }}
      // Removed bg-white to allow the dynamic color to show
      className="absolute w-96 h-96 md:w-[500px] md:h-[500px] p-8 rounded-2xl shadow-2xl flex flex-col justify-center items-center text-center"
    >
      <img src={image} alt={name} className="w-24 h-24 rounded-full mb-6 border-4 border-gray-100/50" />
      <p className="text-xl md:text-2xl font-normal text-gray-700 italic mb-6">"{quote}"</p>
      <div className="mt-auto">
        <h3 className="text-xl font-bold text-gray-800">{name}</h3>
        <p className="text-md text-gray-600">{title}</p>
      </div>
    </motion.div>
  );
};

export default Testomonials;
