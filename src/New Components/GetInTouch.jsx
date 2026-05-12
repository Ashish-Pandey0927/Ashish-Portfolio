import React from "react";
import { InlineWidget } from "react-calendly";
import { motion } from "framer-motion";

const GetInTouch = () => {
  return (
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
  );
};

export default GetInTouch;