"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/50 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <div className="flex items-center justify-between px-6 py-3">
        <Link href='/' className="flex items-center gap-4 cursor-pointer">
          <Avatar className="h-14 w-14">
            <AvatarImage src="/images/IITJ/logo/iitjlogo2.webp" alt="Logo" />
            <AvatarFallback>IITJ</AvatarFallback>
          </Avatar>
          <div className="leading-tight">
            <h1 className="text-lg font-bold text-white">
              Student Senate
            </h1>
            <p className="text-sm text-gray-300">IIT Jodhpur</p>
          </div>
        </Link>

        <NavbarLinks/>
      </div>
    </header>
  )
}

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/senate", label: "Student Senate" },
  { href: "/events", label: "Events" },
  { href: "/societies", label: "Societies" },
  {
    href: "https://iitj.ac.in/PageImages/Gallery/07-2025/Academic-Calendar-AY-202526SemI2-with-CCCD-events-638871414539740843.pdf",
    label: "Calendar"
  },
  {
    href: "/pdfs/constitution.pdf",
    label: "Constitution"
  },
  { href: "/visit-iitj", label: "Visit IITJ" }
]

function NavbarLinks() {
  return (
    <nav className="hidden md:flex gap-8 text-base font-medium text-gray-200 items-center">
      {navLinks.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          target={["Calendar", "Constitution"].includes(label) ? "_blank" : undefined}
          rel={["Calendar", "Constitution"].includes(label) ? "noopener noreferrer" : undefined}
          className="relative group"
        >
          <span className="transition-colors duration-300 group-hover:text-fulvous">{label}</span>
          <span className="absolute left-0 -bottom-1 h-0.5 w-0 transition-all duration-300 group-hover:w-full bg-fulvous" />
        </Link>
      ))}
    </nav>
  )
}