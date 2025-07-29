import {
  FaUserCircle,
  FaCalendarAlt,
  FaClock,
  FaComment,
} from "react-icons/fa";
import React from "react";
import Link from "next/link";

// Updated Data Structure
const defaultData = [
  {
    heading: "What Makes Mobile Auto Detailing a Smarter Choice?",
    sections: [
      {
        subheading: "",
        paragraph: (
          <div>
            <p>
              The current convenient auto mobile service makes life convenient since you will not need to drive to a shop and wait there. Be it in your driveway or in the workplace, detailers come in with powerful mobile auto detailing equipment offering the same degree of care as the care you would give at a full-service garage. An exemplary carwash usually consists of a comprehensive exterior car wash, elimination of scratch and swirl removal, waxing and interior detailing. Other additional features are also popular such as engine bay clean, odor removal, and leather treatment. The most important things that differentiate the best providers are the details, flexibility and the desire to please customers.

            </p>
            <p className="mt-2"></p>
          </div>
        ),
        image: "/images/ceramic-coating-keeps-your-cars-2.jpg",
      },
    ],
  },
  {
    heading: "",
    sections: [
      {
        subheading: "Why Ceramic Coating is the Top Choice for Vehicle Protection",
        paragraph: (
          <div>
            <p>
              Once you get a taste of the gloss and shine associated with ceramic coating, you can never get the same back again. Other than glowing your surface, the{" "} 
        <a
                className="text-blue-600 font-bold"
                href="https://www.touchandshinedetail.com/services/ceramic-coating"
              >best Ceramic Coating in Tracy, </a> CA provides a whole-year protection against UV rays, road salts, acid rains, and birds. The hydrophobicity maintains a longer clean cycle of your car and thereby less maintenance which results in less washing of your car.
The re-sale value is also going to be enhanced with the help of ceramic coating because it will maintain the paint and remove small damages. It is an excellent long-term fix, particularly to drivers who prefer such a looked-after appearance to last.
Together with professional scratch and swirl removal, a ceramic coating seals the perfect finish. And when employed by qualified experts with modern high-tech instruments the outcomes are self- explaining.

            </p>
            <p className="mt-2"></p>
            <p className="mt-2"></p>
            <p className="mt-2"></p>
            <p className="mt-2">.</p>
          </div>
        ),
      },
    ],
  },
  {
    heading: "",
    sections: [
      {
        subheading: "Interior Detailing That Matches Exterior Perfection",
        paragraph:
          "Attentively maintained interiors do not only appear well; they are also nicer to the touch. Companies such as{" "} <a
                className="text-blue-600 font-bold"
                href="https://www.touchandshinedetail.com/services/ceramic-coating"
              >Interior mobile car detailing near Tracy </a> allow sanitization and revitalization of the cabin of your car without having to leave your drive.
Intense vacuuming, shampooing of the carpets, treating of leather, shining the dashboard, and also cleaning of the headliners. To families, rideshare drivers or any other person who spends a lot of time at the wheel, interior detailing can give comfort, hygiene, and pride of ownership.
Full-service detailing is more efficient and less costly to do as exterior work is often packaged with interior services. Trust detailing pros Tracy counts on to make all of your vehicle feel brand new.
",
      },
    ],
  },
  ,
  {
    heading: "",
    sections: [
      {
        subheading: "Final Thoughts: Make the Right Choice for Your Vehicle",
        paragraph: (
          <div>
            <p>
              To inhabitants of Tracy and surrounding areas, the Touch and Shine auto detail brings high-quality services to you. Whether it is mobile auto detailing near me or perfection in Ceramic Coating in Tracy, CA, their services will exceed your expectations about its quality and convenience.
{" "} <a
                className="text-blue-600 font-bold"
                href="https://book.squareup.com/appointments/g74ppxgb2rbmal/location/LH1DBHXC19NYZ/services"
              >Book now with Touch and Shine Auto Detail where your car gets detailed like it deserves.
                  </a>

            </p>
          </div>
        ),
      },
    ],
  },
          
// const faqsData = [
//   {
//     question: "What Causes Swirl Marks on Cars?",
//     answer:
//       "Swirls are generally due to flawed washing and drying techniques. Abrasive substances, inclusive of difficult sponges or towels, and automated car washes with grimy brushes also contribute to these marks. Additionally, washing the auto in direct daylight or the usage of low-excellent products can exacerbate the trouble.",
//   },
//   {
//     question: "How to Remove Swirl Marks from Car",
//     answer:
//       "To dispose of stains, use a mark remover or a sharpening compound. Apply the product with a clean microfiber fabric or polisher, working in small sections. For severe scratches, remember a clay bar remedy or expert detailing to restore your vehicle’s end efficaciously.",
//   },
//   {
//     question: "Is It Possible to Avoid Swirl Marks?",
//     answer:
//       "Yes, minimizing stains is feasible with proper care. Use notable washing products, smooth equipment, and tender clothes. Avoid washing in direct daylight and choose hand washing as opposed to automatic car washes. Regular preservation and cautious washing techniques assist prevent stains",
//   },
//   {
//     question: "Can I Remove Swirl Marks by Hand?",
//     answer:
//       "Yes, removing swirls by using a hand is possible with a mark remover and a microfiber fabric. This approach requires greater effort and endurance as compared to machine polishing. Apply the remover in small sections, lightly work it into the paint, and buff the location until clean.",
//   },
//   {
//     question: "How to Buff Without Swirl Marks?",
//     answer:
//       "To buff without growing marks, use a smooth, tender microfiber cloth or a buffing pad. Apply light, and even pressure, and use an again-and-forth or side-to-side motion instead of circular moves. Ensure the floor is clean and avoid excessive stress to save you new blemishes.",
//   },
// ];
const Blog1 = ({ data = defaultData, title, date, author, time, comments }) => {
  return (
    <>
      {/* Header Section */}
      <div className="relative min-h-[60vh] bg-gradient-to-r from-[#2A82AD] to-black bg-center bg-cover z-0">
        <div className="absolute inset-0 bg-[url('/images/service-1.png')] bg-cover opacity-[0.26]"></div>
        <div className="relative z-10 p-10 w-full text-center">
          <h1 className="text-white mt-32 text-3xl md:text-5xl font-bold">
            {title ||
              "Where to Find Quality Mobile Auto Detailing and Ceramic Coating in California"}
          </h1>

          <div className="flex flex-wrap gap-2 justify-center text-white mt-3 text-md font-semibold">
            <InfoItem
              icon={<FaUserCircle />}
              text={author || "gabriel.maestro"}
            />
            <InfoItem
              icon={<FaCalendarAlt />}
              text={date || "January 14, 2024"}
            />
            <InfoItem icon={<FaClock />} text={time || "11:19 pm"} />
            <InfoItem icon={<FaComment />} text={comments || "No Comments"} />
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="p-10 bg-white text-black">
        <div className="border-4 border-[#2A82AD] p-2 inline-block">
          <img
            src="/images/ceramic-coating-keeps-your-cars.jpg"
            alt="Christmas"
            className="w-full h-auto"
          />
        </div>

        <div className="mt-6 text-lg text-black">
          <p>
            Ever wished your car could keep that fresh-off-the-lot shine? Well,
            there’s good news! Ceramic coating makes that dream real. This
            shield protects your car's paint. It gives an appearance like new.
            Ceramic coating bonds to the paint. It forms a tough, invisible
            layer. This keeps dirt, water, and sun rays away. Therefore, the
            result is a stunning shine. It also provides a shield that makes
            heads turn.
          </p>
          <h2 className="mt-6 text-lg text-blue-600"></h2>
          <p className="mt-6"></p>
          <p className="mt-6"></p>
          <p className="mt-6"></p>
          <p className="mt-6"></p>
          <p className="mt-6"></p>
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
                  <div className="text-md text-black mt-2">
                    {section.paragraph}
                  </div>
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

                {section.listItems && (
                  <ul className="list-disc list-inside text-black mt-2">
                    {section.listItems.map((listItem, liIndex) => (
                      <li key={liIndex} className="ml-4">
                        {listItem}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        ))}

        <div className="mt-8">
          <Link href="https://book.squareup.com/appointments/g74ppxgb2rbmal/location/LH1DBHXC19NYZ/services">
            <button className="px-6 py-3 text-lg font-semibold text-white bg-[#2A82AD] hover:bg-black hover:text-[#2A82AD] transition-all duration-300">
              Booking
            </button>
          </Link>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold text-black">Conclusion</h2>
          <p className="text-md text-black mt-2">
            If you want the best protection for your car, let yourself know.
            Ceramic coating is the ideal choice. Since it offers protection, it
            reduces upkeep. It also maintains the freshness of your car. Bid
            farewell to waxing. Experience a durable luster. Put your money into
            ceramic coating today. Savor a breathtaking journey!
          </p>
          <p className="text-md text-black mt-2"></p>
        </div>
        {/* FAQs Section */}
        {/* <div className="mt-8">
          <h2 className="text-2xl font-bold text-white">FAQs</h2>
          {faqsData.map((faq, index) => (
            <div key={index} className="mt-4">
              <h3 className="text-xl font-semibold text-yellow-600">
                {faq.question}
              </h3>
              <p className="text-md text-white mt-2">{faq.answer}</p>
            </div>
          ))}
        </div> */}
      </div>
    </>
  );
};

// InfoItem Component for Header Icons
const InfoItem = ({ icon, text }) => (
  <div className="flex items-center gap-3 w-1/2 sm:w-1/4 md:w-auto mt-2 sm:mt-0">
    {icon}
    <span>{text}</span>
  </div>
);

export default Blog1;

