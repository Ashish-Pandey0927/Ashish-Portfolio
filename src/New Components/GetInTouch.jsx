import React, { useMemo, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
} from "framer-motion";

const GetInTouch = () => {
  const sectionRef = useRef(null);

  const { scrollY } = useScroll();

  // Smooth scroll motion
  const smoothScroll = useSpring(scrollY, {
    stiffness: 50,
    damping: 20,
  });

  // Infinite looping effect using modulo
  const rotate = useTransform(smoothScroll, (v) => (v * 0.05) % 360);
  const scale = useTransform(smoothScroll, (v) => 2 - (v % 2000) / 2000);
  const x = useTransform(smoothScroll, (v) => `-${(v * 0.02) % 40}vw`);
  const y = useTransform(smoothScroll, (v) => `-${(v * 0.02) % 40}vh`);

  const spiralPath = useMemo(() => {
    let path = "";
    const centerX = 400;
    const centerY = 400;
    const points = 1400;

    for (let i = 0; i < points; i++) {
      const angle = 0.15 * i;
      const radius = 0.6 * angle * 30;

      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);

      path += i === 0 ? `M ${x} ${y}` : ` L ${x} ${y}`;
    }

    return path;
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-[400vh] overflow-hidden"
    >
      {/* Spiral */}
      <motion.div
        style={{ rotate, scale, x, y }}
        className="fixed inset-0 flex items-center justify-center pointer-events-none"
      >
        <svg viewBox="0 0 800 800" className="w-[1400px] h-[1400px]">
          <defs>
            <path id="spiralPath" d={spiralPath} />
          </defs>

          <text
            fill="rgba(0,0,0,0.15)"
            fontSize="28"
            fontWeight="800"
            letterSpacing="3"
          >
            <textPath href="#spiralPath">
              {"ASHISH KUMAR PANDEY • ".repeat(30)}
            </textPath>
          </text>
        </svg>
      </motion.div>

      {/* Center Content (ALWAYS CENTERED) */}
      <div className="fixed inset-0 flex items-center justify-center z-10">
        <a
          href="mailto:ashish09274377@gmail.com"
          className="text-[3rem] font-bold"
        >
          mailto: ashish09274377@gmail.com
        </a>
      </div>
    </section>
  );
};

export default GetInTouch;