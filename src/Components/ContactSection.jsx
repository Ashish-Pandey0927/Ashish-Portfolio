import React, { useEffect } from "react";
import gsap from "gsap";

const ContactSection = () => {

    useEffect(() => {
        gsap.from(".contact-form", {
          opacity: 0,
          y: 50,
          duration: 1.2,
          ease: "power2.out",
        });
      }, []);
  return (
    <section className="py-10 px-6 md:px-[400px] text-white" id="contact">
      <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
      <div className="bg-gray-800 p-6 md:p-8 rounded-lg shadow-md contact-form">
        {/* Intro */}
        <p className="mb-6 text-gray-300">
          Have a question, want to collaborate, or just want to say hi? Feel free to reach out!
        </p>
        {/* Contact Form */}
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-400">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              className="w-full mt-1 p-3 bg-gray-700 text-gray-100 rounded-lg focus:outline-none focus:ring focus:ring-gray-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-400">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Your Email"
              className="w-full mt-1 p-3 bg-gray-700 text-gray-100 rounded-lg focus:outline-none focus:ring focus:ring-gray-500"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-400">
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              placeholder="Your Message"
              className="w-full mt-1 p-3 bg-gray-700 text-gray-100 rounded-lg focus:outline-none focus:ring focus:ring-gray-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-bold transition duration-300"
          >
            Send Message
          </button>
        </form>
        {/* Contact Info */}
        <div className="mt-6">
          <p className="text-gray-400">
            You can also reach me directly at:{" "}
            <a href="mailto:ashish09274377@gmail.com" className="text-blue-500 hover:underline">
              ashish09274377@gmail.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
