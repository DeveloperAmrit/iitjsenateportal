"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"
import { Typewriter } from 'react-simple-typewriter'

export default function Navbar() {
  return (
    <header className="w-full absolute top-0 left-0 z-50 bg-transparent">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Left: Logo + Text */}
        <Link href='/' className="flex items-center gap-4 cursor-pointer">
          <Avatar className="h-16 w-16">
            <AvatarImage src="/images/iitjlogo.png" alt="Logo" />
            <AvatarFallback />
          </Avatar>
          <div className="leading-tight">
            <h1 className="text-2xl font-semibold text-gray-100">
              <Typewriter
                words={['Senate Portal IIT Jodhpur']}
                loop={0}
                typeSpeed={60}
                deleteSpeed={60}
                delaySpeed={5000} // delay before re-typing
                cursor
                cursorStyle="|"
              />
            </h1>
            <p className="text-sm text-gray-300"></p>
          </div>
        </Link>

        {/* Right: Navigation Links */}
        <NavbarLinks/>
      </div>
    </header>
  )
}



const navLinks = [
  { href: "/", label: "Home" },
  { href: "/senate", label: "Senate" },
  { href: "/visit-iitj", label: "Visit IITJ" },
  { href: "/events", label: "Events" },
  { href: "/societies", label: "Societies" },
  { href: "/calendar", label: "Calendar" },
  { href: "/constitution", label: "Constitution" },
]

function NavbarLinks() {
  return (
    <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-200">
      {navLinks.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className="relative group"
        >
          <span className="transition-colors duration-200">{label}</span>
          <span className="absolute left-0 -bottom-1 h-0.5 w-0 transition-all duration-300 group-hover:w-full bg-fulvous" />
        </Link>
      ))}
    </nav>
  )
}
