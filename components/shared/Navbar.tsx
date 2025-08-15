'use client';

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"
import { useEffect, useState, FC } from "react"
import { usePathname } from "next/navigation"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/societies", label: "Student Bodies" },
  { href: "/senate", label: "Meet the Senate" },
  { href: "/events", label: "Events" },
  { href: "https://iitj.ac.in/PageImages/Gallery/07-2025/Academic-Calendar-AY-202526SemI2-with-CCCD-events-638871414539740843.pdf", label: "Calendar" },
  { href: "/pdfs/constitution.pdf", label: "Constitution" },
  { href: "https://www.iitj.ac.in/main/en/iitj", label: "Visit IITJ" }
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navbarClasses = scrolled || menuOpen 
    ? 'bg-black/70 backdrop-blur-xl shadow-2xl border-b border-white/10' 
    : 'bg-transparent';

  return (
    <header className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${navbarClasses}`}>
      <div className="flex items-center justify-between px-4 sm:px-6 py-3">
        <Link href='/' className="flex items-center gap-4 cursor-pointer">
          <Avatar className="h-12 w-12 ring-2 ring-white/20">
            <AvatarImage src="/images/IITJ/logo/iitjlogo2.webp" alt="Logo" />
            <AvatarFallback>IITJ</AvatarFallback>
          </Avatar>
          <div className="leading-tight">
            <h1 className="text-md sm:text-lg font-bold text-white transition-colors duration-300">
              Student Senate
            </h1>
            <p className="text-xs sm:text-sm text-gray-300 transition-colors duration-300">IIT Jodhpur</p>
          </div>
        </Link>

        {/* Desktop Links */}
        <nav className="hidden md:flex gap-6 lg:gap-8 text-base font-medium items-center">
          <DesktopNavLinks />
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white focus:outline-none transition-colors duration-300">
            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black/80 backdrop-blur-xl pb-4 border-t border-white/10">
          <nav className="flex flex-col items-center gap-y-4 text-lg font-medium text-gray-200 pt-2">
            <MobileNavLinks onLinkClick={() => setMenuOpen(false)} />
          </nav>
        </div>
      )}
    </header>
  )
}

const DesktopNavLinks: FC = () => {
  return (
    <>
      {navLinks.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          target={["Calendar", "Constitution", "Visit IITJ"].includes(label) ? "_blank" : undefined}
          rel={["Calendar", "Constitution", "Visit IITJ"].includes(label) ? "noopener noreferrer" : undefined}
          className="relative group transition-colors duration-300 text-gray-200 hover:text-fulvous"
        >
          {label}
          <span className="absolute left-0 -bottom-1 h-0.5 w-0 transition-all duration-300 group-hover:w-full bg-fulvous" />
        </Link>
      ))}
    </>
  )
}

const MobileNavLinks: FC<{ onLinkClick: () => void }> = ({ onLinkClick }) => {
  return (
    <>
      {navLinks.map(({ href, label }) => (
        <Link key={href} href={href} onClick={onLinkClick} className="py-2 hover:text-fulvous transition-colors duration-200">
          {label}
        </Link>
      ))}
    </>
  )
}
