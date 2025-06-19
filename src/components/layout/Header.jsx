import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi'; // Hamburger and close icons
import { theme } from '../../theme';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#2D3B4E] py-4 shadow-lg">
      <div className="container mx-auto px-6 flex justify-between items-center">

        {/* Logo */}
        <Link
          to="/"
          className="flex items-center text-3xl font-bold"
        >
          <span className="text-[#41B883]">Teach</span>
          <span className="text-[#F8FAFC]">Advise</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-10 font-medium text-gray-200">
          <Link to="/about" className="hover:text-[#41B883] transition duration-300">About</Link>
          <Link to="/services" className="hover:text-[#41B883] transition duration-300">Services</Link>
          <Link to="/blog" className="hover:text-[#41B883] transition duration-300">Blog</Link>
          <Link to="/contact" className="hover:text-[#41B883] transition duration-300">Contact</Link>
          <Link to="/internship" className="hover:text-[#41B883] transition duration-300">Internship</Link>
          <Link to="/free-resources" className="hover:text-[#41B883] transition duration-300">Free Resources</Link>
        </nav>

        {/* Mobile Toggle Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[#F8FAFC] focus:outline-none"
          >
            {isOpen ? <HiX className="text-3xl" /> : <HiMenu className="text-3xl" />}
          </button>
        </div>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/signin">
            <button className="text-[#F8FAFC] font-semibold px-4 py-2 hover:text-[#41B883] transition duration-300">
              Sign In
            </button>
          </Link>
          <Link to="/get-started">
            <button className="bg-[#41B883] text-[#F8FAFC] font-semibold px-6 py-2 rounded-full hover:bg-[#339167] transition duration-300 shadow-md">
              Get Started
            </button>
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pt-4 pb-6 space-y-4 font-medium text-gray-200 bg-[#2D3B4E] border-t border-[#3D4F6A]">
          <Link to="/about" onClick={() => setIsOpen(false)} className="block hover:text-[#41B883] transition duration-300">About</Link>
          <Link to="/services" onClick={() => setIsOpen(false)} className="block hover:text-[#41B883] transition duration-300">Services</Link>
          <Link to="/blog" onClick={() => setIsOpen(false)} className="block hover:text-[#41B883] transition duration-300">Blog</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="block hover:text-[#41B883] transition duration-300">Contact</Link>
          <Link to="/internship" onClick={() => setIsOpen(false)} className="block hover:text-[#41B883] transition duration-300">Internship</Link>
          <div className="pt-4 space-y-2">
            <Link to="/signin" onClick={() => setIsOpen(false)}>
              <button className="w-full text-[#F8FAFC] font-semibold px-4 py-2 hover:text-[#41B883] transition duration-300">
                Sign In
              </button>
            </Link>
            <Link to="/get-started" onClick={() => setIsOpen(false)}>
              <button className="w-full bg-[#41B883] text-[#F8FAFC] font-semibold px-4 py-2 rounded-full hover:bg-[#339167] transition duration-300 shadow-md">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
