import React, { useMemo, useRef } from "react";
import { InlineWidget } from "react-calendly";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
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
    <>
      {/* ── Section 1: Spiral / Email ── */}
      <section
        ref={sectionRef}
        className="relative w-full h-[400vh] overflow-hidden"
      >
        {/* Spiral background */}
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

        {/* Center email link */}
        <div className="fixed inset-0 flex items-center justify-center z-10 px-4">
          <a
            href="mailto:ashish09274377@gmail.com"
            className="text-2xl sm:text-4xl md:text-[3rem] font-bold text-center break-all sm:break-normal"
          >
            mailto: ashish09274377@gmail.com
          </a>
        </div>
      </section>

      {/* ── Section 2: Calendly Inline Embed ── */}
      <section className="relative w-full bg-black py-20 px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-3xl mx-auto text-center mb-10"
        >
          <span className="inline-block text-xs font-semibold tracking-[0.25em] uppercase text-teal-400 mb-3">
            Book a Meeting
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight">
            Let's Talk
          </h2>
          <p className="mt-4 text-white/50 text-lg">
            Pick a time that works for you — I'd love to chat.
          </p>
        </motion.div>

        {/* Calendly Widget */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          className="max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl shadow-teal-500/10 border border-white/10"
          style={{ minHeight: "700px" }}
        >
          <InlineWidget
            url="https://calendly.com/ashish09274377/30min"
            styles={{ height: "700px", width: "100%" }}
            pageSettings={{
              backgroundColor: "0a0a0a",
              hideEventTypeDetails: false,
              hideLandingPageDetails: false,
              primaryColor: "2dd4bf",
              textColor: "ffffff",
            }}
          />
        </motion.div>
      </section>
    </>
  );
};

export default GetInTouch;