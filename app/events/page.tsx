
import Navbar from '@/components/shared/Navbar'; // Assuming Navbar.tsx is in the same directory
import RotateSlider from '@/components/Events/RotateSlider'; // Assuming RotateSlider.tsx is in the same directory

const EventsPage = () => {
  return (
    // Main container with a relative position for stacking context
    <div className="relative w-full min-h-screen bg-[#D2D2D2] bg-[repeating-linear-gradient(to_right,transparent_0_100px,#25283b22_100px_101px),repeating-linear-gradient(to_bottom,transparent_0_100px,#25283b22_100px_101px)]">
      
      {/* Navbar is positioned at the top */}
      <Navbar />

      {/* Main content section which contains the slider */}
      <main>
        <RotateSlider />
      </main>
      
    </div>
  );
};

export default EventsPage;