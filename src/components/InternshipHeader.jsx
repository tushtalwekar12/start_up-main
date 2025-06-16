import React from 'react';
import { motion } from 'framer-motion';

const InternshipHeader = () => (
  <header className="mb-12 px-4 sm:px-6 lg:px-8">
    <motion.h1
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="text-5xl sm:text-6xl font-extrabold mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-[#00ffa3] to-[#00b176]"
    >
      Internship Domains
    </motion.h1>

    <motion.p
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.7, ease: 'easeOut' }}
      className="max-w-3xl mx-auto text-center text-gray-300 text-lg sm:text-xl leading-relaxed"
    >
      Explore top internship tracks with real-world projects, expert guidance, and skill development.
    </motion.p>
  </header>
);

export default InternshipHeader;
