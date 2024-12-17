"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";


const blogPosts = [
  {
    title:
      "New Year, New Shine: Expert Auto Detailing Services to Start 2025 with a Clean Car",
    image: "/images/touch-new-year.jpg",
    description:
      "As we embrace the start of 2025, it's the perfect time to give your vehicle the love and attention it deserves. ",
    category: "December 18, 2024  ",
    readTime: "",
    link: "/new-year-new-shine-expert-auto-detailing-services-to-start-2025-with-a-clean-car",
  },
  {
    title:
      "Get Your Ride Holiday-Ready with Touch and Shine Auto Detail This Christmas",
    image: "/images/touch-chris.jpg",
    description:
      "The holiday season is finally here! The air is crisp, the lights are twinkling, and there’s excitement in the air as families  ",
    category: "December 18, 2024  ",
    readTime: "",
    link: "/get-your-ride-holiday-ready-with-touch-and-shine-auto-detail-this-christmas",
  },
  {
    title:
      "Touch and Shine Auto Detail: Get Ready for Black Friday Deals",
    image: "/images/b-fri.jpg",
    description:
      "Black Friday is just around the corner, and it’s the perfect time to treat your car. At Touch and Shine Auto Detail, we know that your vehicle deserves a little",
    category: "November 28, 2024  ",
    readTime: "",
    link: "/touch-and-shine-auto-detail-get-ready-for-black-friday-deals",
  },
  {
    title:
      "Thanksgiving with Touch & Shine Auto Detail",
    image: "/images/thanks.jpg",
    description:
      "Your car’s interior merits equal attention to that of its outdoors. Ceramic coating for inside the car offers a long-lasting",
    category: "September 15, 2024",
    readTime: "",
    link: "/thanksgiving-with-touch-shine-auto-detail",
  },
 
  // {
  //   title:
  //     "Benefits of Automotive Interior Ceramic Coating",
  //   image: "/images/ceramic-i.jpg",
  //   description:
  //     "Your car’s interior merits equal attention to that of its outdoors. Ceramic coating for inside the car offers a long-lasting",
  //   category: "November 15, 2024",
  //   readTime: "",
  //   link: "/how-long-does-car-detailing-take-a-comprehensive-guide",
  // },
  // {
  //   title:
  //     "Tips for Easily Removing Tree Sap from Car Exterior",
  //   image: "/images/tips.jpg",
  //   description:
  //     "Removing tree sap is crucial to keeping your car’s exterior smooth and spotless. While seemingly harmless, tree",
  //   category: "November 11, 2024 ",
  //   readTime: "",
  //   link: "/tips-for-easily-removing-tree-sap-from-car-exterior",
  // }
  // ,
  // {
  //   title:
  //     "How to Remove Smoke Odor from Car and Restore Fresh Air Inside?",
  //   image: "/images/blog-5.jpg",
  //   description:
  //     "Many people experience smoke odor in their cars. The smell can linger and create an uncomfortable driving experience.",
  //   category: "November 7, 2024 ",
  //   readTime: "",
  //   link: "/how-to-remove-smoke-odor-from-car-and-restore-fresh-air-inside",
  // }
  // ,

  

  // Add more blog posts as needed How Car Detailing Service Can Preserve Your Car’s Value

];

const Blog1 = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.2,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.2 },
    },
  };

  return (
    <div className="py-12 bg-gradient-to-r from-[#2A82AD] to-black bg-center bg-no-repeat bg-cover z-0">
      <div className="container mx-auto">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {blogPosts.map((post, index) => (
            <motion.div
              className="relative"
              variants={cardVariants}
              key={index}
            >
              <div className="relative flex flex-col overflow-hidden transition-all duration-200 transform bg-white border-2 border-[#2A82AD] rounded-xl shadow-[0_4px_6px_-1px_rgba(0,0,0,0.4),0_2px_4px_-1px_rgba(0,0,0,0.2)] hover:shadow-lg hover:-translate-y-1">
                {/* Blog Tag */}
                <span className="absolute top-2 right-2 bg-[#2A82AD] text-black px-2 py-1 text-xs font-bold rounded-md z-10">
                  Blog
                </span>
                <Link
                  href={post.link}
                  title={post.title}
                  className="block w-full h-60 overflow-hidden"
                >
                  <img
                    className="object-cover w-full h-full transition-all duration-200 transform group-hover:scale-110"
                    src={post.image}
                    alt={`thumbnail-${index + 1}`}
                  />
                </Link>
                <div className="flex-1 px-4 py-5 sm:p-6">
                  <Link href={post.link} title={post.title}>
                    <p className="text-lg font-bold text-gray-900">
                      {post.title}
                    </p>
                    <p className="mt-3 text-sm font-normal leading-6 text-gray-500 line-clamp-3">
                      {post.description}
                    </p>
                  </Link>
                </div>
                <div className="px-4 py-5 mt-auto border-t border-gray-100 sm:px-6 bg-black">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <p className="text-sm font-medium text-white">
                        <Link href={post.link} title={post.category}>
                          {post.category}
                        </Link>
                      </p>
                      <span className="text-sm font-medium text-gray-900">
                        
                      </span>
                      <p className="text-sm font-medium text-gray-900">
                        {post.readTime}
                      </p>
                    </div>
                    <Link href={post.link} title="" className="" role="button">
                      <svg
                        className="w-5 h-5 text-white transition-all duration-200 group-hover:text-gray-900"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path
                          stroke="none"
                          d="M0 0h24v24H0z"
                          fill="none"
                        ></path>
                        <line x1="17" y1="7" x2="7" y2="17"></line>
                        <polyline points="8 7 17 7 17 16"></polyline>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Blog1;
