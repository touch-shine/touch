// src/context/MetadataContext.js
"use client";
import { createContext, useContext } from "react";

const MetadataContext = createContext();

export const MetadataProvider = ({ children }) => {
  const metadata = {
    "/": {
      title: "Professional Detailing Services for All Vehicles in Tracy",
      description:
        "Touch and Shine Auto Detail offers expert detailing for all vehicle types in Tracy. From paint correction to ceramic coating, book your service today!",
    },
    "/services": {
      title:
        "Expert Detailing Services for All Vehicles in Tracy",
      description: "Eyez on the Prize auto spa offers a full range of auto detailing services in Charlotte. Choose from interior, exterior, polishing, and more. Contact us for top-notch results!",
    },
    "/about-us": {
      title: "Expert Detailing Services for All Vehicles in Tracy",
      description: "Learn about Touch and Shine Auto Detail, your trusted vehicle detailing experts in Tracy. We deliver top-quality service for all vehicles. Contact us today!",
    },
    " /services/paint-correction": {
        title: "Expert Paint Correction Services in Tracy",
        description: "Restore your vehicle’s paint with Touch and Shine Auto Detail’s expert correction services in Tracy. Remove imperfections and enhance your vehicle’s look!",
      },
      "/services/ceramic-coating": {
        title: "Durable Ceramic Coating in Tracy | Touch and Shine Auto Detail",
        description: "Protect your vehicle’s finish with ceramic coating from Touch and Shine Auto Detail in Tracy. Enhance shine and durability. Book your ceramic coating today",
      },
      "/services/exterior-detailing": {
        title: "Exterior Detailing Services for Vehicles in Tracy",
        description: "Give your vehicle a fresh, shiny look with exterior detailing by Touch and Shine Auto Detail in Tracy. Comprehensive services for all vehicle types. Book now!",
      },
      "/services/interior-detailing": {
        title: "Interior Detailing Services for All Vehicles in Tracy",
        description: "Transform your vehicle’s interior with expert detailing from Touch and Shine Auto Detail in Tracy. Clean, refresh, and restore your vehicle’s interior today!",
      },
      "/gallery": {
        title: "Our Vehicle Detailing Gallery in Tracy",
        description: "Browse Touch and Shine Auto Detail’s gallery to see our expert detailing work on various vehicles in Tracy. Get inspired and book your detailing service today!",
      },
      "/blogs": {
        title: "Vehicle Detailing Tips and News in Tracy",
        description: "Stay updated with the latest vehicle detailing tips and news from Touch and Shine Auto Detail in Tracy. Learn how to keep your vehicle looking its best!",
      },
      "/contact-us": {
        title: "Contact Us for Vehicle Detailing in Tracy",
        description: "Have questions or want to schedule a service? Reach out to Touch and Shine Auto Detail in Tracy. We’re here to help with all your vehicle detailing needs!",
      },
      "/blogs": {
        title: "Vehicle Detailing Tips and News in Tracy",
        description: "Stay updated with the latest vehicle detailing tips and news from Touch and Shine Auto Detail in Tracy. Learn how to keep your vehicle looking its best!",
      },
      "/tips-for-easily-removing-tree-sap-from-car-exterior": {
        title: "Tips for Easily Removing Tree Sap from Car Exterior",
        description: "Learn simple methods to remove tree sap from your car's exterior without damaging the paint. Quick, effective tips for a clean, smooth finish every time",
      },
      "/benefits-of-interior-ceramic-coating": {
        title: "Benefits of Interior Ceramic Coating",
        description: "Discover the benefits of interior ceramic coating: protection against stains, easy cleaning, and enhanced durability for a pristine, long-lasting car interior.",
      },
      "/how-to-remove-smoke-odor-from-car-and-restore-fresh-air-inside": {
        title: "How to Remove Smoke Odor from Car and Restore Fresh Air Inside?",
        description: "Eliminate smoke odor from your car with these effective methods: deep cleaning, air purifiers, odor-neutralizing sprays, and natural remedies for fresh, clean air.",
      },
      "/ceramic-coating-myths-what-every-car-owner-should-know": {
        title: "Ceramic Coating Myths: What Every Car Owner Should Know",
        description: "Debunk common ceramic coating myths with essential facts every car owner should know. Protect your vehicle effectively and make informed decisions about car care.",
      },
      "/how-exterior-detailing-protects-your-car-from-seasonal-damage": {
        title: "How Exterior Detailing Protects Your Car from Seasonal Damage",
        description: "Learn how exterior detailing protects your car from seasonal damage. Keep your vehicle looking new with effective techniques to shield it from harsh weather and elements.",
      },
      "/top-7-interior-detailing-hacks-for-a-fresh-and-clean-vehicle": {
        title: "Top 7 Interior Detailing Hacks for a Fresh and Clean Vehicle",
        description: "Discover the top 7 interior detailing hacks to keep your vehicle fresh and clean. Easy tips for a spotless car interior and long-lasting freshness.",
      },
      "/how-ceramic-coating-keeps-your-cars-paint-looking-fresh-and-new": {
        title: "Protect and shine your car with ceramic coating.",
        description: "Discover how ceramic coating protects your car's paint from damage, enhances its shine, and keeps it looking fresh and new for years to come.",
      },
      "/paint-correction-transforms-car-appearance": {
        title: "Transform your car's look with paint correction.",
        description: "Learn how paint correction removes imperfections, restores gloss, and completely transforms the appearance of your car for a showroom-quality finish.",
      },
   
    
   

    // Add more pages as needed...
  };

  return (
    <MetadataContext.Provider value={metadata}>
      {children}
    </MetadataContext.Provider>
  );
};

export const useMetadata = () => useContext(MetadataContext);
