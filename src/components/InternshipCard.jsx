import React from 'react';
import { motion } from 'framer-motion';

const InternshipCard = ({ icon, title, description, tags = [] }) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
    }}
    whileHover={{ scale: 1.05, boxShadow: '0 10px 25px rgba(0, 255, 163, 0.3)' }}
    whileTap={{ scale: 0.95 }}
    className="bg-[#0e2f26] rounded-2xl p-6 shadow-md cursor-pointer flex flex-col transition-shadow duration-300 border-2 border-transparent hover:border-[#00ffa3] focus:outline-none focus:ring-2 focus:ring-[#00ffa3]"
    tabIndex={0}
    role="button"
    aria-pressed="false"
  >
    {/* Icon */}
    <div className="text-5xl mb-5 text-[#00ffa3]">{icon}</div>

    {/* Title */}
    <h3 className="text-2xl font-bold mb-3 text-white">{title}</h3>

    {/* Description */}
    <p className="text-gray-300 flex-grow leading-relaxed">{description}</p>

    {/* Skill Tags */}
    {tags.length > 0 && (
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="bg-[#003d2d] text-[#00ffa3] text-sm px-3 py-1 rounded-full font-medium"
          >
            #{tag}
          </span>
        ))}
      </div>
    )}

    {/* CTA Button */}
    <button
      className="mt-6 bg-[#00b176] hover:bg-[#00ffa3] text-black font-semibold py-3 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg"
      aria-label={`Apply for ${title} internship`}
    >
      Apply Now
    </button>
  </motion.div>
);

export default InternshipCard;
