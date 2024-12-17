"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Navigation items with custom paths
  const navItems = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about-us" },
    { label: "Services", href: "/services" },
    
    { label: "Gallery", href: "/gallery" },
    { label: "Blog", href: "/blogs" },
    
  ];

  return (
    <div className="absolute top-4 left-0 w-full flex justify-center z-50">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-black shadow-lg border border-gray-700 rounded-lg max-w-5xl w-full mx-auto"
  style={{
    background: "linear-gradient(to bottom, #2A82AD, black)",
  }}>
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between p-4 mx-auto">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img
              src="/images/logo.png"
              alt="Logo"
              className="h-20 object-contain"
            />
            <span className="ml-2 text-sm font-bold text-[black]"></span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[#2A82AD] md:hidden focus:outline-none p-2 w-10 h-10 rounded-lg hover:bg-gray-700"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Menu Items */}
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } w-full md:block md:w-auto mt-4 md:mt-0`}
            id="navbar-default"
          >
            <ul className="flex flex-col md:flex-row md:space-x-8 font-medium bg-gray-800 md:bg-transparent p-4 md:p-0 border md:border-0 border-gray-700 rounded-lg md:rounded-none">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className={`block py-2 px-3 text-white hover:text-[#2A82AD] rounded md:hover:bg-transparent md:p-0 ${
                      item.label === "Home" ? "text-[white]" : ""
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us Button */}
          <a
            href="/contact-us"
            className="hidden md:inline-block bg-[#2A82AD] text-white px-4 py-2 rounded-md hover:bg-white hover:text-blue-600 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </motion.nav>
    </div>
  );
}
