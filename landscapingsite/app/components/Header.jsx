"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import Image from "next/image";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 bg-white z-10 shadow-sm border-b border-gray-100">
      <div className="container mx-auto flex justify-between items-center py-3 px-4">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.jpeg"
              alt="logo-img"
              width={200}
              height={200}
              className="h-16 w-auto"
            />
            <div className="ml-4 border-l border-gray-200 pl-4 hidden sm:block">
              <p className="text-gray-900 font-semibold text-lg">
                Your property, Our Priority
              </p>
              <p className="text-gray-500 text-sm">
                Professional Property Maintenance
              </p>
            </div>
          </Link>
        </div>

        <nav className="hidden md:block">
          <ul className="flex gap-8 text-lg">
            <li>
              <Link
                href="/services"
                className="hover:text-gray-600 font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-gray-900 after:transition-all hover:after:w-full"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/#about"
                className="hover:text-gray-600 font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-gray-900 after:transition-all hover:after:w-full"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/#contact"
                className="hover:text-gray-600 font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-gray-900 after:transition-all hover:after:w-full"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <div className="hidden md:flex items-center">
          <Link
            href="tel:604-442-8874"
            className="flex items-center gap-2 bg-gray-900 text-white py-2 px-4 hover:bg-gray-800 transition-colors"
          >
            <Phone size={18} />
            <span>604-442-8874</span>
          </Link>
        </div>

        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-100">
          <div className="container mx-auto px-4 py-4">
            <p className="text-gray-900 font-semibold text-lg mb-1">
              Your property, Our Priority
            </p>
            <p className="text-gray-500 text-sm mb-4">
              Professional Property Maintenance
            </p>

            <nav>
              <ul className="flex flex-col gap-2 text-lg">
                <li>
                  <Link
                    href="/services"
                    className="block py-3 px-2 border-b border-gray-100 hover:bg-gray-50"
                    onClick={toggleMenu}
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#about"
                    className="block py-3 px-2 border-b border-gray-100 hover:bg-gray-50"
                    onClick={toggleMenu}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#contact"
                    className="block py-3 px-2 border-b border-gray-100 hover:bg-gray-50"
                    onClick={toggleMenu}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>

            <div className="flex items-center justify-center gap-2 bg-gray-900 text-white py-3 px-4 mt-6 hover:bg-gray-800 transition-colors">
              <Phone size={18} />
              <span>604-442-8874</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
