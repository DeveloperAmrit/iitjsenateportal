import RotateSlider from '@/components/Events/RotateSlider';
import FestCalendar from '@/components/Events/FestCalender';

const EventsPage = () => {
  return (
    <div className="relative w-full min-h-screen">
      <main>
        <RotateSlider />
        <FestCalendar />
      </main>
    </div>
  );
};

export default EventsPage;