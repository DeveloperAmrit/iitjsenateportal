import Cards from "@/components/home/Cards";
import Fests from "@/components/home/Fests";
import Hero from "@/components/home/Hero";

export default function Home() {
  return (
    <div className="font-sans">
      <Hero />
      <div className="bg-gray-900">
        <Cards />
      </div>
      <div className="bg-gray-900 py-16">
        <h1 className="text-center text-4xl md:text-5xl font-bold text-fulvous">
          Major Fests at IIT Jodhpur
        </h1>
        <p className="text-center text-lg text-gray-300 mt-4 max-w-3xl mx-auto px-4">
          Experience the vibrant culture of IIT Jodhpur through our annual fests, where innovation, talent, and excitement come together.
        </p>
      </div>
      <Fests />
    </div>
  );
}