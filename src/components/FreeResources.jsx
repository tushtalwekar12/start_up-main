import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaExternalLinkAlt, FaFileAlt, FaTools, FaCode, FaBookOpen, FaMapSigns, FaUsers } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { resources } from '../data/resources';

const categories = ['All', 'Career Tools', 'Learning', 'Community', 'Interview Prep'];

const iconMap = {
  FaFileAlt: FaFileAlt,
  FaTools: FaTools,
  FaCode: FaCode,
  FaBookOpen: FaBookOpen,
  FaMapSigns: FaMapSigns,
  FaUsers: FaUsers
};

const FreeResources = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const filteredResources = resources.filter(resource => {
    const matchesCategory = selectedCategory === 'All' || resource.category === selectedCategory;
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleViewResource = (resourceId) => {
    switch (resourceId) {
      case 'resume-templates':
        navigate('/free-resources/resume-templates');
        break;
      case 'interview-kit':
        navigate('/free-resources/interview-kit');
        break;
      case 'coding-sheets':
        navigate('/free-resources/coding-sheets');
        break;
      case 'free-courses':
        navigate('/free-resources/free-courses');
        break;
      case 'career-roadmaps':
        navigate('/free-resources/career-roadmaps');
        break;
      case 'community':
        navigate('/free-resources/community');
        break;
      default:
        navigate(`/free-resources/${resourceId}`);
    }
  };

  const renderIcon = (iconName) => {
    const IconComponent = iconMap[iconName];
    return IconComponent ? <IconComponent className="text-3xl text-[#00ffa3]" /> : null;
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-[#002e24] to-[#001a15] text-white py-16 px-6 md:px-12 lg:px-20">
      <div className="text-center mb-12">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-[#00ffa3] mb-4"
        >
          Free Resources
        </motion.h2>
        <p className="text-gray-300 max-w-2xl mx-auto text-lg">
          Boost your career with high-quality resources — completely free and beginner-friendly.
        </p>
      </div>

      {/* Search and Filter Section */}
      <div className="max-w-7xl mx-auto mb-12">
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <div className="relative w-full max-w-md">
            <input
              type="text"
              placeholder="Search resources..."
              className="w-full px-4 py-2 rounded-lg bg-[#0e2f26] border border-[#00ffa3] text-white focus:outline-none focus:ring-2 focus:ring-[#00ffa3]"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <FaSearch className="absolute right-3 top-3 text-gray-400" />
          </div>
          <div className="flex gap-2 flex-wrap justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  selectedCategory === category
                    ? 'bg-[#00ffa3] text-[#002e24]'
                    : 'bg-[#0e2f26] text-white hover:bg-[#1a3f36]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Resources Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {filteredResources.map((res, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="bg-[#0e2f26] border border-[#00ffa3] p-6 rounded-xl hover:shadow-lg transition-all duration-300 group"
          >
            <div className="mb-4 transform group-hover:scale-110 transition-transform">
              {renderIcon(res.icon)}
            </div>
            <h3 className="text-xl font-semibold mb-2 group-hover:text-[#00ffa3] transition-colors">
              {res.title}
            </h3>
            <p className="text-gray-300 mb-4">{res.description}</p>
            
            {/* View Button */}
            <button 
              onClick={() => handleViewResource(res.id)}
              className="flex items-center gap-2 px-6 py-2 bg-[#00ffa3] text-[#002e24] rounded-lg hover:bg-[#00cc82] transition-colors w-full justify-center"
            >
              <FaExternalLinkAlt /> View Details
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FreeResources;
