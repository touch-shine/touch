"use client";
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  const imageVariants = {
    hidden: { opacity: 0, x: "-100%" },
    visible: { opacity: 1, x: "0%", transition: { duration: 1 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: "-100%" },
    visible: {
      opacity: 1,
      x: "0%",
      transition: { duration: 1, delay: 1 }, // Delay the second card swipe
    },
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto p-8 md:p-16 pb-32">
      {/* Image Section */}
      <div className="relative w-full md:w-1/2 flex justify-center md:justify-start mb-8 md:mb-0">
        {/* Main Image */}
        <motion.div
          className="w-56 h-64 md:w-64 md:h-72 rounded-lg overflow-hidden shadow-lg"
          initial="hidden"
          animate="visible"
          variants={imageVariants}
        >
          <img
            src="/images/3.jpg"
            alt="Car Image"
            className="w-full h-full object-cover rounded-lg"
          />
        </motion.div>

        {/* Card Replacing the Second Image */}
        <motion.div
          className="w-56 h-56 md:w-64 md:h-64 rounded-lg shadow-lg -mt-[-10rem] -ml-[2rem] md:-mt-[-14rem] md:-ml-[5rem] flex items-center justify-center bg-[#2A82AD] text-white text-center p-4"
          initial="hidden"
          animate="visible"
          variants={cardVariants}
        >
          <div>
            <h3 className="text-xl font-bold mb-2">Our Mission</h3>
            <p className="text-sm leading-relaxed">
              To help Tracy car owners protect & preserve their vehicle's "NEW
              LOOK" for years..
            </p>
          </div>
        </motion.div>
      </div>

      {/* Text Section */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h4 className="text-sm font-semibold text-[#2A82AD] uppercase mb-2">
          About Us
        </h4>
        <h2 className="text-1xl md:text-2xl font-bold text-gray-900 mb-4">
          Transforming Your Ride with Superior Car Detailing!
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Welcome to Touch & Shine Auto Detail, where our passion for cars and
          dedication to exceptional service combine to create an unparalleled
          experience. We believe your vehicle deserves nothing less than the
          best, which is why we take pride in delivering meticulous care and
          attention to every detail. From restoring your car's shine to
          protecting its finish, our expert team goes above and beyond to ensure
          outstanding results. At the heart of what we do is a commitment to
          excellence, driven by a genuine love for automobiles and a desire to
          exceed your expectations. Trust us to treat your car as if it were our
          own, because at Touch & Shine, your satisfaction fuels our passion!
        </p>
      </div>
    </div>
  );
};

export default About;
