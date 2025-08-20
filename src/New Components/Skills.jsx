import React, { useState, useEffect, useRef } from "react";

const technologies = [
  "/Tech-Stack/icons8-amazon-web-services.svg",
  "/Tech-Stack/icons8-css3-100.png",
  "/Tech-Stack/icons8-figma.svg",
  "/Tech-Stack/icons8-firebase-96.png",
  "/Tech-Stack/icons8-git.svg",
  "/Tech-Stack/icons8-html5-100.png",
  "/Tech-Stack/icons8-java-100.png",
  "/Tech-Stack/icons8-javascript-100.png",
  "/Tech-Stack/icons8-mongodb-96.png",
  "/Tech-Stack/icons8-nodejs-96.png",
  "/Tech-Stack/icons8-python.svg",
  "/Tech-Stack/icons8-tailwind-css.svg",
  "/Tech-Stack/icons8-rust-96.png",
];

const Skills = () => {
  // We need refs to track values that change frequently without causing re-renders.
  const trackRef = useRef(null); // Ref for the moving track element
  const animationFrameRef = useRef(null); // Ref for the animation frame ID
  const velocityRef = useRef(1); // Ref for the current scroll velocity (starts at a cruising speed)
  const positionRef = useRef(0); // Ref for the current scroll position
  const dragStartRef = useRef({ x: 0, position: 0 }); // Ref for drag start info
  const isDraggingRef = useRef(false); // Ref to track if the user is dragging

  // This effect sets up the continuous animation loop.
  useEffect(() => {
    const defaultVelocity = 0.5; // The constant speed when undisturbed.

    const animate = () => {
      // If not dragging, update position based on velocity.
      if (!isDraggingRef.current) {
        // If the velocity is high (from a user "fling")...
        if (Math.abs(velocityRef.current) > defaultVelocity) {
          // ...apply friction to slow it down.
          velocityRef.current *= 0.98;
        } else {
          // Otherwise, maintain the default cruising speed, preserving the last direction.
          if (velocityRef.current !== 0) {
            velocityRef.current =
              Math.sign(velocityRef.current) * defaultVelocity;
          } else {
            // This handles the initial start.
            velocityRef.current = defaultVelocity;
          }
        }
      }

      // Update position based on the final velocity.
      positionRef.current -= velocityRef.current;

      // Handle the infinite loop effect.
      // If the track has scrolled past one full set of items, reset it.
      if (trackRef.current) {
        const trackWidth = trackRef.current.scrollWidth / 2; // Width of one set of items
        if (Math.abs(positionRef.current) >= trackWidth) {
          positionRef.current %= trackWidth;
        }
        // Apply the transform to the element.
        trackRef.current.style.transform = `translateX(${positionRef.current}px)`;
      }

      // Continue the animation loop.
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    // Start the animation.
    animationFrameRef.current = requestAnimationFrame(animate);

    // Cleanup function to stop the animation when the component unmounts.
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []); // Empty array means this effect runs only once.

  // Event handler for when the user starts dragging.
  const handleMouseDown = (e) => {
  isDraggingRef.current = true;
  dragStartRef.current = {
    x: e.clientX,
    position: positionRef.current,
  };
  velocityRef.current = 0;
  document.body.style.cursor = "grabbing";
  window.addEventListener("mousemove", handleMouseMove);
  window.addEventListener("mouseup", handleMouseUp);
};

const handleMouseMove = (e) => {
  if (!isDraggingRef.current) return;
  const deltaX = e.clientX - dragStartRef.current.x;
  positionRef.current = dragStartRef.current.position + deltaX;
};

const handleMouseUp = (e) => {
  if (!isDraggingRef.current) return;
  isDraggingRef.current = false;
  const deltaX = e.clientX - dragStartRef.current.x;
  velocityRef.current = -deltaX * 0.1;
  document.body.style.cursor = "default";
  window.removeEventListener("mousemove", handleMouseMove);
  window.removeEventListener("mouseup", handleMouseUp);
};

  return (
    <section className="w-full py-12 overflow-hidden">
      <div className="w-full  mx-auto relative h-16">
        {/* <div className="absolute top-0 left-0 h-16 w-64 z-0 bg-transparent backdrop-blur-md " /> */}
        {/* Title and Left Fade Effect */}
        <div className="absolute top-0 left-0 bottom-0 flex items-center z-10 w-64 bg-gradient-to-r from-[#efeeec] to-transparent backdrop-blur-md pointer-events-none">
  <h2 className="text-left text-gray-900 text-sm font-medium tracking-tight pl-4 md:pl-7">
    Technologies I work with:
  </h2>
</div>

        {/* Carousel Container */}
        <div
          className="absolute top-0 left-0 w-full h-full cursor-grab -z-6"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp} // Stop dragging if mouse leaves the area
        >
          {/* The track that holds and moves the technology items */}
          <div
            ref={trackRef}
            className="absolute top-0 left-0 flex items-center h-full"
          >
            {/* We render the list of technologies twice for a seamless loop */}
            {[...technologies, ...technologies].map((tech, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-14 px-6 py-1 rounded-full  select-none"
              >
                <img
                  src={tech}
                  alt="tech icon"
                  className="h-12 w-12 object-contain"
                />{" "}
              </div>
            ))}
          </div>
        </div>

        {/* Right side fade effect */}
        <div className="absolute top-0 right-0 bottom-0 w-24 bg-gradient-to-l from-[#efeeec] to-[#efeeec]/30 backdrop-blur-md pointer-events-none z-10"></div>
      </div>
    </section>
  );
};

export default Skills;
