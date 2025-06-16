import React from 'react';
import { FaFileAlt, FaTools, FaCode, FaBookOpen, FaMapSigns, FaUsers } from 'react-icons/fa';

const resources = [
  {
    icon: <FaFileAlt className="text-3xl text-[#00ffa3]" />,
    title: 'Resume & Cover Letter Templates',
    description: 'Professionally designed, ATS-friendly templates to boost your first impression.',
  },
  {
    icon: <FaTools className="text-3xl text-[#00ffa3]" />,
    title: 'Interview Kit',
    description: 'Practice questions, HR rounds, and company-wise interview experiences.',
  },
  {
    icon: <FaCode className="text-3xl text-[#00ffa3]" />,
    title: 'Aptitude & Coding Sheets',
    description: 'Hand-picked sheets for aptitude, DSA, and company-specific coding rounds.',
  },
  {
    icon: <FaBookOpen className="text-3xl text-[#00ffa3]" />,
    title: 'Free Courses',
    description: 'Curated list of free resources and certifications from reputed platforms.',
  },
  {
    icon: <FaMapSigns className="text-3xl text-[#00ffa3]" />,
    title: 'Career Roadmaps',
    description: 'Step-by-step career guides for Web Dev, Data Science, Marketing & more.',
  },
  {
    icon: <FaUsers className="text-3xl text-[#00ffa3]" />,
    title: 'Community Access',
    description: 'Join our Discord for peer learning, job updates, and mentorship.',
  },
];

const FreeResources = () => {
  return (
    <section className="bg-[#002e24] text-white py-16 px-6 md:px-12 lg:px-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[#00ffa3] mb-4">Free Resources</h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Boost your career with high-quality resources — completely free and beginner-friendly.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {resources.map((res, index) => (
          <div
            key={index}
            className="bg-[#0e2f26] border border-[#00ffa3] p-6 rounded-xl hover:shadow-lg transition-shadow"
          >
            <div className="mb-4">{res.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{res.title}</h3>
            <p className="text-gray-300">{res.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FreeResources;
