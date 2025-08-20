import React from "react";

const ServiceItem = ({ service, isLast }) => {
  return (
    <div>
      {/* The "group" class on this parent div is what makes the magic happen */}
      <div className="relative group flex items-center py-6 cursor-pointer">
        
        {/* Hovered BG Image - Now controlled by group-hover */}
        <div
          className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-full rounded-[40px] overflow-hidden z-0
                     opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100
                     transition-all duration-300 ease-out"
          // This tells the browser to prepare for animation on these properties
          style={{ willChange: 'transform, opacity' }}
        >
          {/* We use an <img> tag for better performance and accessibility */}
          <img 
            src={service.img} 
            alt={`${service.title} service`} 
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gray-800/30 mix-blend-multiply"></div>
        </div>

        {/* Content - Also controlled by group-hover */}
        <div className="relative z-10 flex items-center gap-4 px-6 transition-transform duration-300 ease-out group-hover:translate-x-4">
          <span 
            className="text-white text-[4vw] font-bold transition-all duration-300 ease-out
                       opacity-0 group-hover:opacity-100"
          >
            ↗
          </span>
          <span
            className="text-[3vw] font-semibold transition-colors duration-300 ease-out
                       text-black group-hover:text-white"
          >
            {service.title}
          </span>
        </div>
      </div>

      {/* Render the divider line unless it's the last item */}
      {!isLast && <hr className="border-gray-300" />}
    </div>
  );
};

export default ServiceItem;