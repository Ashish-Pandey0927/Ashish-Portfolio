import React from 'react';

// --- Your Achievements Data ---
// You can customize this list with your own achievements.
// gridSpan: Use Tailwind CSS grid classes like 'md:col-span-2' or 'md:row-span-2' to control the size of each box.
const achievementsList = [
  {
    title: "Innovator's Award 2024",
    description: "Lead developer for a project that won the annual award for tech innovation.",
    image: "/hackathon-winner.jpg",
    gridSpan: "md:col-span-2", // This item will be wider on medium screens and up
  },
  {
    title: "Open Source Contributor",
    description: "Recognized as a top contributor to a popular JavaScript framework.",
    image: "/git.jpeg",
  },
  {
    title: "Community Speaker",
    description: "Presented on modern web architecture at three international conferences.",
    image: "/speaker.jpg",
  },
  {
    title: "First Place Hackathon",
    description: "Won the 'CodeStorm' hackathon with a real-time data visualization app.",
    image: "/hack.jpg",
    gridSpan: "md:col-span-2", // This item will also be wider
  },

];

// --- Bento Item Component ---
// This is a smaller component to keep our code clean. It represents one "item" in our bento box.
const BentoItem = ({ title, description, image, gridSpan }) => {
  return (
    <div
      className={`
        relative group flex flex-col justify-end 
        bg-gray-200 rounded-2xl overflow-hidden 
        transform-gpu transition-all duration-500 ease-in-out
        hover:scale-[1.03] hover:shadow-xl
        ${gridSpan}
      `}
      // Set a minimum height for smaller items to look good
      style={{ minHeight: '250px' }}
    >
      {/* Background Image */}
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover 
                   transition-transform duration-500 ease-in-out 
                   group-hover:scale-110"
      />
      
      {/* Gradient Overlay for text readability */}
      <div 
        className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"
      />
      
      {/* Content */}
      <div className="relative p-5 z-10 text-white
                     transform-gpu transition-all duration-500 ease-in-out
                     group-hover:translate-y-[-10px]">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-sm mt-1 opacity-80">{description}</p>
      </div>
    </div>
  );
};


// --- Main Achievements Component ---
const Achivments = () => {
  return (
    <section className="w-full pb-12 xl:pb-24 bg-[#efeeec]">
      <div className="w-full px-4 md:px-7">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="flex items-center gap-4 text-[6vw] font-bold text-black">
            My
            <span className="inline-block rounded-[20%] overflow-hidden w-20 h-20 align-middle">
              <img
                src="/achievement.jpg"
                alt="Trophy Icon"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </span>
            Achievements
          </h2>
          {/* <a
            href="#"
            className="group bg-white px-8 py-3 rounded-full text-black font-medium text-sm shadow transition hover:shadow-lg flex items-center gap-2 overflow-hidden relative"
          >
            <div className="relative overflow-hidden h-7 flex items-center">
              <div className="transition-transform duration-300 ease-in-out group-hover:-translate-y-7">
                <span>View All Achievements</span>
                <span className="text-base ml-2">↗</span>
              </div>
              <div className="transition-transform duration-300 ease-in-out absolute top-0 left-0 group-hover:translate-y-0 translate-y-7">
                <span>View All Achievements</span>
                <span className="text-base ml-2">↗</span>
              </div>
            </div>
          </a> */}
        </div>
        <hr className="border-gray-300 mb-12" />

        {/* Bento Box Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievementsList.map((item, index) => (
            <BentoItem
              key={index}
              title={item.title}
              description={item.description}
              image={item.image}
              gridSpan={item.gridSpan || ''} // Pass the grid span class
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achivments;
