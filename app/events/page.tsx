import RotateSlider from '@/components/Events/RotateSlider';
import CardGrid from '@/components/shared/CardGrid';
import { fests } from '@/data/fests';

const EventsPage = () => {
  const festItems = fests.map(fest => ({
    title: fest.title,
    imageurl: fest.backgroundUrl,
    href: `/events/${fest.title.toLowerCase()}`,
  }));

  return (
    <div className="relative w-full min-h-screen bg-[#D2D2D2] bg-[repeating-linear-gradient(to_right,transparent_0_100px,#25283b22_100px_101px),repeating-linear-gradient(to_bottom,transparent_0_100px,#25283b22_100px_101px)]">
      <main>
        <RotateSlider />
        <div className="bg-white py-16">
          <h1 className="text-center text-4xl md:text-5xl font-bold text-gray-800">
            Major Fests at IIT Jodhpur
          </h1>
          <p className="text-center text-lg text-gray-600 mt-4 max-w-3xl mx-auto px-4">
            Experience the vibrant culture of IIT Jodhpur through our annual fests, where innovation, talent, and excitement come together.
          </p>
          <CardGrid title="" cols={3} items={festItems} />
        </div>
      </main>
    </div>
  );
};

export default EventsPage;