import Cards from "@/components/home/Cards";
import Fests from "@/components/home/Fests";
import Hero from "@/components/home/Hero";


export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <Hero/>
      <Cards/>
      <Fests/>
    </div>
  );
}
