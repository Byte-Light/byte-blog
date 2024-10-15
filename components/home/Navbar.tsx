// components/Navbar.tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { XMarkIcon, Bars3Icon } from '@heroicons/react/24/outline';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="text-4xl font-extrabold tracking-wider hover:scale-105 transition-transform">
            Dev<span className="text-yellow-300">Hub</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden sm:flex space-x-8">
            {["Home", "Tutorials", "Blog", "Contact"].map((item) => (
              <Link
                key={item}
                href={item === "Home" ? "/" : `/${item.toLowerCase()}`} // Adjusted "Home" link to point to "/"
                className="text-lg font-semibold hover:text-yellow-300 transition-colors duration-300"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="sm:hidden">
            <button onClick={toggleMenu} className="text-yellow-300">
              {isOpen ? <XMarkIcon className="h-8 w-8" /> : <Bars3Icon className="h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="sm:hidden bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600">
          <div className="flex flex-col items-center space-y-4 py-6">
            {["Home", "Tutorials", "Blog", "Contact"].map((item) => (
              <Link
                key={item}
                href={item === "Home" ? "/" : `/${item.toLowerCase()}`} // Adjusted "Home" link for mobile
                className="text-xl font-semibold text-white hover:text-yellow-300 transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
