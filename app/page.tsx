import Boards from "@/components/home/Boards";
import Hero from "@/components/home/Hero";


export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <Hero/>
      <Boards/>
    </div>
  );
}
