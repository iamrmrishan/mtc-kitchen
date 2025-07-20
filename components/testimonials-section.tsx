export default function TestimonialsSection() {
  return (
    <section className="bg-muted py-16 px-4 md:px-8 relative">
      <div className="max-w-3xl mx-auto text-center relative">
           <p
            style={{ color: "#3B6095" }}
            className="text-xs tracking-wider uppercase mb-2"
          >
            Locate Us Easily
          </p>
        <h1 className="text-3xl md:text-4xl font-bold text-black leading-snug mb-4">
          Find us on Google Maps
        </h1>
      </div>
      <div className="flex flex-wrap items-center justify-between w-full max-w-6xl gap-5 mx-auto text-white lg:flex-nowrap mt-10">
        <iframe
          title="Google Map"
          className="w-full h-96 md:h-[500px] lg:h-[600px] "
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.921324117589!2d79.92177707490994!3d6.7794297932175285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae24fd8abe4bce5%3A0xaa5aa9f205f36e5c!2sSkyrim%20Travels%20(Pvt)%20Ltd!5e0!3m2!1sen!2slk!4v1687053811299!5m2!1sen!2slk"
          style={{ border: 0 }}
          loading="lazy"
        />
      </div>
    </section>
  );
}