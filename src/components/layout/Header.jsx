import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi'; // Hamburger and close icons

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-[#002e24] to-[#164439] py-4 shadow-sm border-b border-[#00ffa3]/10">
      <div className="container mx-auto px-6 flex justify-between items-center">

        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00ffa3] to-[#00b176]"
        >
          CareerNest
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-10 font-medium text-white">
          <Link to="/about" className="hover:text-[#00ffa3] transition">About</Link>
          <Link to="/services" className="hover:text-[#00ffa3] transition">Services</Link>
          <Link to="/blog" className="hover:text-[#00ffa3] transition">Blog</Link>
          <Link to="/contact" className="hover:text-[#00ffa3] transition">Contact</Link>
          <Link to="/internship" className="hover:text-[#00ffa3] transition">Internship</Link>
          <Link to="/free-resources" className="hover:text-[#00ffa3] transition">Free Resourses</Link>
        </nav>

        {/* Mobile Toggle Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            {isOpen ? <HiX className="text-3xl" /> : <HiMenu className="text-3xl" />}
          </button>
        </div>

        {/* Get a Quote button (hidden on small) */}
        <Link to="/quote" className="hidden md:block">
          <button className="bg-[#003f2e] text-white font-semibold px-6 py-2 rounded-full hover:bg-[#00ffa3] hover:text-black transition duration-300">
            Get a Quote
          </button>
        </Link>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pt-4 pb-6 space-y-4 font-medium text-white">
          <Link to="/about" onClick={() => setIsOpen(false)} className="block hover:text-[#00ffa3]">About</Link>
          <Link to="/services" onClick={() => setIsOpen(false)} className="block hover:text-[#00ffa3]">Services</Link>
          <Link to="/blog" onClick={() => setIsOpen(false)} className="block hover:text-[#00ffa3]">Blog</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="block hover:text-[#00ffa3]">Contact</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="block hover:text-[#00ffa3]">Internship</Link>
          <Link to="/quote" onClick={() => setIsOpen(false)}>
            <button className="w-full bg-[#003f2e] text-white font-semibold px-4 py-2 rounded-full hover:bg-[#00ffa3] hover:text-black transition duration-300">
              Get a Quote
            </button>
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
