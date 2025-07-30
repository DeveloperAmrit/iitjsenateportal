import CampusCarousel from "@/components/shared/CampusCarousel";

export default function VisitIITJ() {
  return (
    <main className="relative text-white">
      {/* HERO Section */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Carousel background */}
        <CampusCarousel />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50 z-10"></div>

        {/* Centered Text */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 z-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Visit IIT Jodhpur
          </h1>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl">
            We invite you to tour IIT Jodhpur’s impressive and picturesque campus,
            where you can see the foundation of our impactful endeavors. IIT Jodhpur
            is located in Karwar, Rajasthan, about 25 km from the city of Jodhpur.
          </p>
        </div>
      </section>

      {/* CAMPUS MAP Section */}
      <section className="bg-gray-100 text-gray-800 py-12 px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-6">
          Campus Location
        </h2>
        <div className="max-w-5xl mx-auto">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.0207772544382!2d73.1094878!3d26.4775931!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39418df58ae03b67%3A0x741a0c27a09e9d23!2sIndian%20Institute%20of%20Technology%20Jodhpur!5e0!3m2!1sen!2sin!4v1650912345678"
            width="100%"
            height="400"
            allowFullScreen
            loading="lazy"
            className="rounded-xl border-0 shadow-lg"
          ></iframe>
        </div>
      </section>

      {/* HOW TO REACH Section */}
      <section className="bg-white text-gray-800 py-12 px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-6">
          How to Reach
        </h2>
        <div className="max-w-3xl mx-auto">
          <ul className="list-disc list-inside space-y-4 text-base sm:text-lg">
            <li>
              <strong>By Air:</strong> Jodhpur Airport (25 km) – Taxis and autos are easily available.
            </li>
            <li>
              <strong>By Train:</strong> Jodhpur Railway Station (28 km) – Well connected to major cities.
            </li>
            <li>
              <strong>By Road:</strong> Accessible via NH-62 – Drive or take local transport from Jodhpur city.
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
