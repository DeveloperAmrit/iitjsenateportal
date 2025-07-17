import Cards from "@/components/home/Cards";
import Fests from "@/components/home/Fests";
import Hero from "@/components/home/Hero";


export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <Hero/>
      <Cards/>
      <h1 className="text-center text-4xl md:text-5xl font-bold text-gray-800 my-16 px-2">
        Major Fests at IIT Jodhpur
      </h1>
      <Fests/>
    </div>
  );
}