import React from "react";

const Intruduct = () => {
  return (
    <section className="relative bg-gradient-to-r from-orange-500 to-red-500 py-12 px-6 rounded-2xl shadow-lg max-w-6xl mx-auto -mt-10 z-20">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Text */}
        <div className="text-white space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold leading-snug">
            Caring Beyond Just Pets,
            <br />We Care About Your Family
          </h2>
          <p className="text-lg opacity-90">
            At <span className="font-semibold">Anipat</span>, we go the extra mile to
            provide professional care, grooming, and wellness services designed to
            keep your pets healthy, happy, and loved. Because your pet is more than
            an animal — they’re family.
          </p>
          <div className="flex gap-4 pt-4">
            <a
              href="#services"
              className="bg-white text-red-500 font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition"
            >
              Explore Services
            </a>
            <a
              href="#contact"
              className="border border-white text-white font-semibold px-6 py-3 rounded-full hover:bg-white/20 transition"
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="flex justify-center">
          <img
            src="/img/services-dog-cat.png"
            alt="Pet Services"
            className="w-80 rounded-2xl shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Intruduct;
