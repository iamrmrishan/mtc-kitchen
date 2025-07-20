/* eslint-disable @typescript-eslint/no-unused-vars */
import Image from "next/image";

const features = [
  "Air Tickets",
  "Visa Assistance",
  "Holiday Packages",
  "Hotel Bookings",
  "Travel Insurance",
];

export default function MidHeroSection() {
  return (
    <section className="w-full m-0 p-0">
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full m-0 p-0">
        {/* Image side - hidden on mobile */}
        <div className="hidden lg:block w-full h-full">
          <Image
            src="/hero5.jpg"
            alt="Handmade Kitchen"
            width={1600}
            height={1200}
            className="w-full h-full object-cover"
            priority
          />
        </div>

        {/* Text side - always visible */}
        <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left px-6 md:px-16 py-12 bg-white w-full h-full">
          <p
            style={{ color: "#3B6095" }}
            className="text-xs tracking-wider uppercase mb-2"
          >
            Explore the Services That We Provide
          </p>

          <h1 className="text-3xl md:text-4xl font-bold text-black leading-snug mb-4">
            We Provide Many Services
            <br />
            You Can Use
          </h1>

          <ul className="text-black-500 self-start ml-8">
            {features.map((feature, index) => (
              <li
                className="relative custom-list hover:scale-110 transition-transform duration-200 flex items-center"
                key={feature}
              >
                <span className="inline-flex items-center justify-center w-5 h-5 bg-green-500 text-white rounded-full text-xs mr-3 flex-shrink-0">
                  ✓
                </span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
