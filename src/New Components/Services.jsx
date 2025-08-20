import React from "react";
import ServiceItem from "./ServiceItem"; // Make sure to import the new component

const servicesList = [
  { title: "Web development", img: "/public/webdev.jpg" },
  { title: "UI/UX", img: "/digitalwerk.png" },
  { title: "Game Development", img: "/Unity.png" },
  { title: "Cloud Solutions", img: "/services.jpg" },
  { title: "Branding", img: "/NFT.png" },
  { title: "Onsite SEO", img: "/SEO.jpg" },
];

const Services = () => {
  // We no longer need useState for hover!
  const leftServices = servicesList.slice(0, 3);
  const rightServices = servicesList.slice(3, 6);

  return (
    <section className="w-full pb-12 xl:pb-24 bg-[#efeeec]">
      <div className="w-full px-4 md:px-7">
        <div className="flex items-center justify-between mb-6">
          <h2 className="flex items-center gap-4 text-[6vw] font-bold text-black">
            Our
            <span className="inline-block rounded-[20%] overflow-hidden w-20 h-20 align-middle">
              <img
                src="/services.jpg"
                alt=""
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </span>
            Services
          </h2>
          <a
            href="#"
            className="group bg-white px-8 py-3 rounded-full text-black font-medium text-sm shadow transition hover:shadow-lg flex items-center gap-2 overflow-hidden relative"
          >
            <div className="relative overflow-hidden h-7 flex items-center">
              <div className="transition-transform duration-300 ease-in-out group-hover:-translate-y-7">
                <span>View All Services</span>
                <span className="text-base ml-2">↗</span>
              </div>
              <div className="transition-transform duration-300 ease-in-out absolute top-0 left-0 group-hover:translate-y-0 translate-y-7">
                <span>View All Services</span>
                <span className="text-base ml-2">↗</span>
              </div>
            </div>
          </a>
        </div>
        <hr className="border-gray-300 mb-6" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
          {/* Left Column */}
          <div>
            {leftServices.map((service, idx) => (
              <ServiceItem
                key={service.title}
                service={service}
                isLast={idx === leftServices.length - 1}
              />
            ))}
          </div>
          {/* Right Column */}
          <div>
            {rightServices.map((service, idx) => (
              <ServiceItem
                key={service.title}
                service={service}
                isLast={idx === rightServices.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;