import React from 'react';
import { motion } from 'framer-motion';

const ContactPage = () => {
  return (
    <section className="min-h-screen bg-gradient-to-r from-[#002e24] to-[#164439] text-white flex items-center px-6 md:px-12 lg:px-10">
      <div className="container mx-auto py-10">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold mb-8 text-center"
        >
          Contact <span className="text-[#00ffa3]">Us</span>
        </motion.h2>

        {/* Form Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-[#0e2f26] rounded-xl p-8 max-w-3xl mx-auto shadow-lg"
        >
          <form className="space-y-6">
            {/* Name */}
            <motion.div
              whileHover={{ scale: 1.02, zIndex: 10 }}
              className="flex flex-col"
            >
              <label className="mb-1 font-semibold">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="bg-transparent border border-gray-500 hover:border-[#00ffa3] text-white px-4 py-3 rounded-lg focus:outline-none focus:border-[#00ffa3] transition"
              />
            </motion.div>

            {/* Email */}
            <motion.div
              whileHover={{ scale: 1.02, zIndex: 10 }}
              className="flex flex-col"
            >
              <label className="mb-1 font-semibold">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="bg-transparent border border-gray-500 hover:border-[#00ffa3] text-white px-4 py-3 rounded-lg focus:outline-none focus:border-[#00ffa3] transition"
              />
            </motion.div>

            {/* Message */}
            <motion.div
              whileHover={{ scale: 1.02, zIndex: 10 }}
              className="flex flex-col"
            >
              <label className="mb-1 font-semibold">Message</label>
              <textarea
                rows="5"
                placeholder="Your message..."
                className="bg-transparent border border-gray-500 hover:border-[#00ffa3] text-white px-4 py-3 rounded-lg focus:outline-none focus:border-[#00ffa3] transition"
              ></textarea>
            </motion.div>

            {/* Submit */}
            <div className="text-center pt-4">
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#00b176] hover:bg-[#00ffa3] text-black font-semibold px-8 py-3 rounded-lg transition"
              >
                Send Message
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactPage;
