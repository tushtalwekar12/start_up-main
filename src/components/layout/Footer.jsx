import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#001a17] text-white py-10 mt-20 border-t border-[#00ffa3]/20">
      <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

        {/* Company Info */}
        <div>
          <h3 className="text-2xl font-bold mb-4 text-[#00ffa3]">CareerNest</h3>
          <p className="text-sm text-gray-400">
            Launch your future with CareerNest – your go-to platform for internships, jobs, online courses, placement prep, and freelance work.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-lg font-semibold mb-3 text-[#00ffa3]">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/services" className="hover:text-white">Services</a></li>
            <li><a href="/about" className="hover:text-white">About Us</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="text-lg font-semibold mb-3 text-[#00ffa3]">Resources</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="/blog" className="hover:text-white">Blog</a></li>
            <li><a href="/faq" className="hover:text-white">FAQs</a></li>
            <li><a href="/terms" className="hover:text-white">Terms & Conditions</a></li>
            <li><a href="/privacy" className="hover:text-white">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-lg font-semibold mb-3 text-[#00ffa3]">Stay Updated</h4>
          <form className="flex flex-col gap-3">
            <input
              type="email"
              placeholder="Your email"
              className="bg-[#002a22] border border-[#00ffa3]/30 text-white px-4 py-2 rounded-md placeholder-gray-400 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-[#00ffa3] text-black font-semibold py-2 rounded-md hover:bg-[#00e69c] transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="text-center mt-10 text-gray-500 text-sm border-t border-[#00ffa3]/10 pt-6">
        &copy; {new Date().getFullYear()} ConsultIQ. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
