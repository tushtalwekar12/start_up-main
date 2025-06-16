import React from 'react';
import { motion } from 'framer-motion';
import { FaGhost } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen bg-gradient-to-r from-[#002e24] to-[#164439] flex flex-col items-center justify-center px-6 text-white">
      {/* Floating ghost icon */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7, rotate: -15 }}
        animate={{
          opacity: 1,
          scale: 1,
          rotate: 0,
          y: [0, -20, 0], // floating up and down
        }}
        transition={{
          duration: 4,
          ease: 'easeInOut',
          repeat: Infinity,
          repeatType: 'loop',
        }}
        className="mb-8 text-[#00ffa3] drop-shadow-lg"
      >
        <FaGhost size={120} />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="text-6xl font-extrabold mb-4 text-[#00b176]"
      >
        404
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="text-xl mb-8 max-w-md text-center text-[#a0f4c7]"
      >
        Oops! The page you’re looking for doesn’t exist.
      </motion.p>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => navigate('/')}
        className="bg-[#00b176] hover:bg-[#00ffa3] text-black font-semibold px-8 py-3 rounded-lg shadow-lg transition"
      >
        Go Back Home
      </motion.button>
    </section>
  );
};

export default NotFoundPage;
