import {
  FaUserCircle,
  FaCalendarAlt,
  FaClock,
  FaComment,
} from "react-icons/fa";
import React, { useState } from "react";
import Link from "next/link";

const defaultData = [
  // ... (keep your sections as before)
];

const faqsData = [
  // ... (keep your FAQ entries as before)
];

const Blog1 = ({ data = defaultData, title, date, author, time, comments }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <div className="relative min-h-[60vh] bg-gradient-to-r from-[#2A82AD] to-black bg-center bg-cover z-0">
        <div className="absolute inset-0 bg-[url('/images/service-1.png')] bg-cover opacity-[0.26]" />
        <div className="relative z-10 p-10 w-full text-center">
          <h1 className="text-white mt-32 text-3xl md:text-5xl font-bold">
            {title ||
              "Complete Car Care Guide for Hot Climate Areas and Dust Protection"}
          </h1>

          <div className="flex flex-wrap gap-2 justify-center text-white mt-3 text-md font-semibold">
            <InfoItem icon={<FaUserCircle />} text={author || "gabriel.maestro"} />
            <InfoItem icon={<FaCalendarAlt />} text={date || "July 29, 2025"} />
            <InfoItem icon={<FaClock />} text={time || "10:39 pm"} />
            <InfoItem icon={<FaComment />} text={comments || "No Comments"} />
          </div>
        </div>
      </div>

      <div className="p-10 bg-white text-black">
        <div className="border-4 border-[#2A82AD] p-2 inline-block">
          <img
            src="/images/complete-car-care-guide-for-hot-climate-areas-and-dust-protection.png"
            alt="Complete Car Care Guide for Hot Climate Areas and Dust Protection"
            className="w-full h-auto"
          />
        </div>

        <div className="mt-6 text-lg text-black">
          <p>
            Hot and dusty weather severely affects your car’s exterior... {/* shortened */}
          </p>
        </div>

        {data.map((item, index) => (
          <div key={index} className="mb-8">
            <h2 className="text-2xl font-bold text-blue-600">{item.heading}</h2>

            {item.sections.map((section, secIndex) => (
              <div key={secIndex} className="mt-4">
                {section.subheading && (
                  <h3 className="text-xl font-semibold text-black mt-2">
                    {section.subheading}
                  </h3>
                )}

                {section.paragraph && (
                  <div className="text-md text-black mt-2">{section.paragraph}</div>
                )}

                {section.image && (
                  <div className="my-4">
                    <img
                      src={section.image}
                      alt={section.subheading || item.heading}
                      className="w-3/4 max-w-md h-auto rounded-lg"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        ))}

        {/* FAQ Section */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-blue-600 mb-4">FAQs</h2>
          <div className="space-y-4">
            {faqsData.map((faq, idx) => (
              <div
                key={idx}
                className="border border-gray-300 p-4 rounded-lg cursor-pointer"
                onClick={() => toggleFAQ(idx)}
              >
                <h3 className="font-semibold text-lg flex justify-between items-center">
                  {faq.question}
                  <span>{openIndex === idx ? "-" : "+"}</span>
                </h3>
                {openIndex === idx && (
                  <p className="mt-2 text-gray-700">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <Link href="https://book.squareup.com/appointments/g74ppxgb2rbmal/location/LH1DBHXC19NYZ/services">
            <button className="px-6 py-3 text-lg font-semibold text-white bg-[#2A82AD] hover:bg-black hover:text-[#2A82AD] transition-all duration-300">
              Booking
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

const InfoItem = ({ icon, text }) => (
  <div className="flex items-center gap-3 w-1/2 sm:w-1/4 md:w-auto mt-2 sm:mt-0">
    {icon}
    <span>{text}</span>
  </div>
);

export default Blog1;
