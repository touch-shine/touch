"use client";
import { useState } from "react";

const categories = ["All", "AutoSpa", "Interior",];

const images = [
  { src: "/images/1i.jpg", category: "Interior" },
  { src: "/images/2i.jpg", category: "Interior" },
  { src: "/images/3i.jpg", category: "Interior" },
  { src: "/images/4i.jpg", category: "Interior" },
  { src: "/images/5i.jpg", category: "Interior" },
  { src: "/images/6i.jpg", category: "Interior" },
  { src: "/images/7i.jpg", category: "Interior" },
  { src: "/images/8i.jpg", category: "Interior" },
  { src: "/images/9i.jpg", category: "Interior" },
  { src: "/images/10i.jpg", category: "Interior" },
  { src: "/images/1e.jpg", category: "AutoSpa" },
  { src: "/images/2e.jpg", category: "AutoSpa" },
  { src: "/images/3e.jpg", category: "AutoSpa" },
  { src: "/images/4e.jpg", category: "AutoSpa" },
  { src: "/images/5e.jpg", category: "AutoSpa" },
  { src: "/images/6e.jpg", category: "AutoSpa" },
  { src: "/images/7e.jpg", category: "AutoSpa" },
  { src: "/images/8e.jpg", category: "AutoSpa" },
  { src: "/images/9e.jpg", category: "AutoSpa" },
  { src: "/images/10e.jpg", category: "AutoSpa" },
];

const GalleryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredImages =
    selectedCategory === "All"
      ? images
      : images.filter((img) => img.category === selectedCategory);

  return (
    <div className="container mx-auto px-4">
      <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`text-black border border-white hover:border-purple-900 bg-white 
              focus:ring-4 focus:outline-none focus:ring-gray-300 
              rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 
              ${selectedCategory === category ? "bg-purple-950 text-black" : ""
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {filteredImages.map((image, index) => (
          <div key={index}>
            <img
              className="h-auto max-w-full rounded-lg"
              src={image.src}
              alt={image.category}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryPage;
