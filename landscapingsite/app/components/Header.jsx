"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 bg-white z-10 p-4 md:p-6">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-lg">C&E Property Management</h1>
        <nav className="hidden md:block">
          <ul className="flex gap-4">
            <li>
              <Link href="#services" className="hover:text-gray-600">
                Services
              </Link>
            </li>
            <li>
              <Link href="#about" className="hover:text-gray-600">
                About
              </Link>
            </li>
            <li>
              <Link href="#contact" className="hover:text-gray-600">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden mt-4 h-screen">
          <ul className="flex flex-col gap-2">
            <li>
              <Link href="#services" className="block py-2 hover:bg-gray-100" onClick={toggleMenu}>
                Services
              </Link>
            </li>
            <li>
              <Link href="#about" className="block py-2 hover:bg-gray-100" onClick={toggleMenu}>
                About
              </Link>
            </li>
            <li>
              <Link href="#contact" className="block py-2 hover:bg-gray-100" onClick={toggleMenu}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}

export default Header

