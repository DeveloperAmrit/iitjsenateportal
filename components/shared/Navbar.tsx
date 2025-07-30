"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function Navbar() {
main_2.0
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight - 80)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gray-700/60 backdrop-blur-sm shadow-sm" // lighter grey blur on scroll
          : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between px-6 py-2">
        {/* Left: Logo + Text */}
        <Link href="/" className="flex items-center gap-4 cursor-pointer">
          <Avatar className="h-16 w-16">

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
      <div className="flex items-center justify-between px-6 py-1">
        <Link href='/' className="flex items-center gap-4 cursor-pointer">
          <Avatar className="h-14 w-14">
 main
            <AvatarImage src="/images/IITJ/logo/iitjlogo2.webp" alt="Logo" />
            <AvatarFallback>IITJ</AvatarFallback>
          </Avatar>
          <div className="leading-tight">
 main_2.0
            <h1
              className={`text-lg font-semibold ${
                isScrolled ? "text-gray-100" : "text-gray-200"
              }`}
            >

            <h1 className="text-lg font-bold text-white">
 main
              Student Senate
            </h1>
            <p
              className={`text-sm ${
                isScrolled ? "text-gray-300" : "text-gray-300"
              }`}
            >
              IIT Jodhpur
            </p>
          </div>
        </Link>

 main_2.0
        {/* Right: Navigation Links */}
        <div className="flex items-center gap-6">
          <NavbarLinks isScrolled={isScrolled} />
        </div>

        <NavbarLinks/>
 main
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
 main_2.0
  }

  },
  { href: "/visit-iitj", label: "Visit IITJ" }
 main
]

function NavbarLinks({ isScrolled }: { isScrolled: boolean }) {
  return (
main_2.0
    <nav
      className={`hidden md:flex gap-6 text-sm font-medium ${
        isScrolled ? "text-gray-100" : "text-gray-200"
      }`}
    >

    <nav className="hidden md:flex gap-8 text-base font-medium text-gray-200 items-center">
main
      {navLinks.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          target={["Calendar", "Constitution"].includes(label) ? "_blank" : undefined}
          rel={["Calendar", "Constitution"].includes(label) ? "noopener noreferrer" : undefined}
          className="relative group"
        >
main_2.0
          <span className="transition-colors duration-200">{label}</span>
          <span
            className={`absolute left-0 -bottom-1 h-0.5 w-0 transition-all duration-300 group-hover:w-full ${
              isScrolled ? "bg-gray-100" : "bg-white"
            }`}
          />

          <span className="transition-colors duration-300 group-hover:text-fulvous">{label}</span>
          <span className="absolute left-0 -bottom-1 h-0.5 w-0 transition-all duration-300 group-hover:w-full bg-fulvous" />
 main
        </Link>
      ))}
    </nav>
  )
}