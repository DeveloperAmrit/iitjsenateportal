import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';

export default function EventsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="font-sans">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}