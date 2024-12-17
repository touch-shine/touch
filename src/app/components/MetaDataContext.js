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
   
    
   

    // Add more pages as needed...
  };

  return (
    <MetadataContext.Provider value={metadata}>
      {children}
    </MetadataContext.Provider>
  );
};

export const useMetadata = () => useContext(MetadataContext);
