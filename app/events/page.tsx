import RotateSlider from '@/components/Events/RotateSlider';
import FestCalendar from '@/components/Events/FestCalender';

const EventsPage = () => {
  return (
    <div className="relative w-full min-h-screen bg-gray-900 text-white">
      <main>
        <div className="relative h-[100vh] flex items-center justify-center text-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <RotateSlider />
            <div className="absolute inset-0 bg-black/50" />
          </div>
          <div className="relative z-10 p-8 rounded-md">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
              {/* IIT Jodhpur Events */}
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mx-auto max-w-3xl mt-4">
              {/* Explore the vibrant events and fests that make our campus come alive. */}
            </p>
          </div>
        </div>
        <FestCalendar />
      </main>
    </div>
  );
};

export default EventsPage;