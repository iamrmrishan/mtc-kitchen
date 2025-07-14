import Image from "next/image";

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
            We Provide Many Services<br />
            You Can Use
          </h1>

          <p className="text-gray-600 text-base max-w-md mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie
            eget sit sapien venenatis malesuada vitae urna. Nam massa arcu,
            feugiat in lobortis vitae.
          </p>
        </div>
      </div>
    </section>
  );
}
