// ContactForm.jsx
"use client";
import React from "react";

const ContactForm = () => {
  return (
    <div className="max-w-6xl mx-auto py-16 px-4 md:flex md:space-x-12 bg-white">
      {/* Form Section */}
      <div className="md:w-1/2">
        <h4 className="text-sm font-semibold text-[#2A82AD] uppercase mb-2">
          Contact
        </h4>
        <h2 className="text-3xl font-bold mb-6">Get In Touch Today</h2>

        {/* Form Fields */}
        <form className="space-y-4">
          <div className="md:flex md:space-x-4">
            <div className="flex-1">
              <label className="block font-semibold mb-1">Name</label>
              <input
                type="text"
                placeholder="Enter your first and last name"
                className="w-full border border-purple-300 p-2 rounded-md outline-none focus:border-[#2A82AD]"
              />
            </div>
            <div className="flex-1">
              <label className="block font-semibold mb-1">Mobile Number</label>
              <input
                type="tel"
                placeholder="Enter your mobile number"
                className="w-full border border-purple-300 p-2 rounded-md outline-none focus:border-[#2A82AD]"
              />
            </div>
          </div>

          <div>
            <label className="block font-semibold mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full border border-purple-300 p-2 rounded-md outline-none focus:border-[#2A82AD]"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Vehicle</label>
            <input
              type="text"
              placeholder="Enter your vehicle brand and model"
              className="w-full border border-purple-300 p-2 rounded-md outline-none focus:border-[#2A82AD]"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">
              What services are you interested in?
            </label>
            <div className="flex items-center space-x-4">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2 text-[#2A82AD]" />
                Ceramic Coating
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2 text-[#2A82AD]" />
                Exterior Detailing
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2 text-[#2A82AD]" />
                Interior Detailing
              </label>
            </div>
          </div>

          <div>
            <label className="block font-semibold mb-1">
              Additional Information
            </label>
            <textarea
              placeholder="Tell us anything else you think is important"
              className="w-full border border-blue-300 p-2 rounded-md outline-none focus:border-[#2A82AD] h-24"
            />
          </div>

          <button
            type="submit"
            className="mt-4 px-6 py-2 bg-[#2A82AD] text-white font-semibold rounded-md hover:bg-blue-700 transition"
          >
            Send Your Enquiry
          </button>
        </form>
      </div>

      {/* Map and Info Section */}
      <div className="md:w-1/2 mt-12 md:mt-0">
        <h2 className="text-xl font-bold mb-4">
          What Happens After You Click Send
        </h2>
        <p className="text-gray-700 mb-4">
          Once your message is sent, we’ll get back to you within 24 hours to
          discuss the service and guide you through the next steps. We’re always
          here to offer free guidance, helping you make the most informed
          decision.
        </p>
        <p className="font-semibold">Monday - Saturday: 9:00am - 5:00pm</p>

        <div className="mt-6">
          {/* Embedded Google Map */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d404163.80966033967!2d-121.3754412!3d37.6837558!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80903d2ca1069a21%3A0x82a8b47560759cf0!2sTouch%20and%20shine%20auto%20detail!5e0!3m2!1sen!2s!4v1732905608983!5m2!1sen!2s"
            width="100%"
            height="300"
            allowFullScreen
            loading="lazy"
            title="Touch and Shine Auto Detail Location"
            className="rounded-lg shadow-md border border-gray-300"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
