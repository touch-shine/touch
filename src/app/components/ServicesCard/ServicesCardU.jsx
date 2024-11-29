"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const ServiceCard = ({ title, description, image, link }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="relative w-72 h-96 m-4 rounded-lg overflow-hidden bg-cover bg-center transition-transform transform"
      style={{ backgroundImage: `url(${image})` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ scale: 1.05 }} // Small zoom on hover
    >
      {/* Purple Overlay */}
      <div className="absolute inset-0 bg-[#2A82AD] opacity-60"></div>

      {/* Text Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4 transition-opacity duration-300">
        {!hovered ? (
          <h2 className="text-2xl font-bold uppercase">{title}</h2>
        ) : (
          <div className="text-center">
            <h2 className="text-2xl font-bold">{title}</h2>
            <p className="mt-2">{description}</p>
            <a href={link} target="_blank" rel="noopener noreferrer">
              <button className="mt-4 px-4 py-2 bg-transparent border border-white text-white font-semibold rounded-md hover:bg-white hover:border-[#2A82AD] hover:text-[#2A82AD] transition">
                Learn More
              </button>
            </a>
          </div>
        )}
      </div>
    </motion.div>
  );
};

const ServiceCards = () => {
  const services = [
    {
      title: "CERAMIC COATINGS",
      description:
        "Add amazing shine & ease of washing that no wax on the market could match.",
      image: "/images/ceramic.jpg",
      link: "/services/ceramic-coating",
    },
    {
      title: "Paint Correction",
      description:
        "Paint correction is the process of removing imperfections from your vehicle’s paint.",
      image: "/images/paint.jpg",
      link: "/services/paint-correction",
    },
    {
      title: "INTERIOR DETAILING",
      description:
        "We will not only clean but preserve your interior surfaces.",
      image: "/images/interior.jpg",
      link: "/services/interior-detailing",
    },
    {
      title: "EXTERIOR DETAILING",
      description:
        "A professional car detail can restore the appearance of your vehicle and make it look new again.",
      image: "/images/exterior.jpg",
      link: "/services/exterior-detailing",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center py-8 px-4">
      {services.map((service, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 100 }} // Start from the right
          whileInView={{ opacity: 1, x: 0 }} // Slide in when in view
          transition={{
            delay: index * 0.2, // Stagger effect
            duration: 0.5,
          }}
          viewport={{ once: true }} // Trigger only once when in view
        >
          <ServiceCard
            title={service.title}
            description={service.description}
            image={service.image}
            link={service.link}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default ServiceCards;
