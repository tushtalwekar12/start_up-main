import React from 'react';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaMobileAlt, FaCloud, FaLock } from 'react-icons/fa';

const services = [
  {
    id: 1,
    icon: <FaLaptopCode size={40} className="text-[#00ffa3]" />,
    title: 'Web Development',
    description: 'Build modern, responsive websites and web apps tailored to your needs.',
  },
  {
    id: 2,
    icon: <FaMobileAlt size={40} className="text-[#00ffa3]" />,
    title: 'Mobile Apps',
    description: 'Create fast and user-friendly mobile applications for iOS and Android.',
  },
  {
    id: 3,
    icon: <FaCloud size={40} className="text-[#00ffa3]" />,
    title: 'Cloud Solutions',
    description: 'Deploy scalable cloud infrastructure and services to optimize performance.',
  },
  {
    id: 4,
    icon: <FaLock size={40} className="text-[#00ffa3]" />,
    title: 'Cybersecurity',
    description: 'Protect your data and systems with advanced security solutions.',
  },
];

const ServicePage = () => {
  return (
    <section className="min-h-screen bg-gradient-to-r from-[#002e24] to-[#164439] text-white px-6 md:px-12 lg:px-20 py-16">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-12"
      >
        <h1 className="text-5xl font-extrabold mb-4">Our Services</h1>
        <p className="text-gray-300 max-w-3xl mx-auto text-lg">
          We provide top-notch digital solutions to help your business grow and succeed in a
          connected world.
        </p>
      </motion.div>

      {/* Services Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
        {services.map(({ id, icon, title, description }) => (
          <motion.div
            key={id}
            whileHover={{ scale: 1.05, boxShadow: '0 0 15px #00ffa3' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: id * 0.15 }}
            className="bg-[#0e2f26] rounded-xl p-8 flex flex-col items-center text-center cursor-pointer shadow-md"
          >
            <div className="mb-6">{icon}</div>
            <h3 className="text-2xl font-semibold mb-3">{title}</h3>
            <p className="text-gray-400">{description}</p>
          </motion.div>
        ))}
      </div>

      {/* Important Info Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="mt-16 max-w-3xl mx-auto bg-[#0a1e18] rounded-xl p-8 text-center"
      >
        <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          We focus on quality, reliability, and customer satisfaction. Our dedicated team offers
          continuous support and innovative solutions tailored for your unique challenges. Partner
          with us to elevate your digital presence with trusted expertise.
        </p>
      </motion.div>
    </section>
  );
};

export default ServicePage;
