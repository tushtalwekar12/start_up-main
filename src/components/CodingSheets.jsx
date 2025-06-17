import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaExternalLinkAlt, FaCode, FaStar, FaDownload } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const codingResources = [
  {
    id: 'dsa-sheet',
    title: 'DSA Sheet by Love Babbar',
    category: 'DSA',
    description: 'Comprehensive DSA sheet covering all important topics',
    features: ['450+ Problems', 'Topic-wise', 'Company-wise'],
    downloads: 3456,
    rating: 4.9,
    link: 'https://drive.google.com/file/d/1FMdN_OCfOI0iAeDlqswCiC2DZzD4nPsb/view'
  },
  {
    id: 'striver-sheet',
    title: 'Striver\'s SDE Sheet',
    category: 'DSA',
    description: 'Complete SDE preparation sheet with video solutions',
    features: ['180+ Problems', 'Video Solutions', 'Topic-wise'],
    downloads: 2890,
    rating: 4.8,
    link: 'https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/'
  },
  {
    id: 'aptitude-sheet',
    title: 'Aptitude Preparation',
    category: 'Aptitude',
    description: 'Complete aptitude preparation material',
    features: ['Quantitative', 'Logical', 'Verbal'],
    downloads: 2345,
    rating: 4.7,
    link: 'https://www.indiabix.com/aptitude/questions-and-answers/'
  },
  {
    id: 'leetcode-patterns',
    title: 'LeetCode Patterns',
    category: 'DSA',
    description: 'Important coding patterns for interviews',
    features: ['Pattern-wise', 'Easy to Hard', 'Solutions'],
    downloads: 1987,
    rating: 4.8,
    link: 'https://seanprashad.com/leetcode-patterns/'
  },
  {
    id: 'company-specific',
    title: 'Company-specific Coding',
    category: 'Company Specific',
    description: 'Coding questions asked in top companies',
    features: ['FAANG Questions', 'Startup Questions', 'Solutions'],
    downloads: 1765,
    rating: 4.7,
    link: 'https://www.geeksforgeeks.org/company-interview-corner/'
  },
  {
    id: 'system-design',
    title: 'System Design Questions',
    category: 'System Design',
    description: 'Practice system design interview questions',
    features: ['Architecture', 'Scalability', 'Best Practices'],
    downloads: 1456,
    rating: 4.9,
    link: 'https://github.com/donnemartin/system-design-primer'
  }
];

const CodingSheets = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const categories = ['All', 'DSA', 'Aptitude', 'Company Specific', 'System Design'];

  const handleResourceClick = (link) => {
    window.open(link, '_blank');
  };

  const filteredResources = codingResources.filter(resource => {
    const matchesCategory = selectedCategory === 'All' || resource.category === selectedCategory;
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#002e24] to-[#001a15] text-white py-16 px-6 md:px-12 lg:px-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto"
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <button
            onClick={() => navigate('/free-resources')}
            className="flex items-center gap-2 px-6 py-2 bg-[#0e2f26] text-[#00ffa3] rounded-lg hover:bg-[#1a3f36] transition-colors"
          >
            <FaArrowLeft /> Back to Resources
          </button>
          <h1 className="text-4xl font-bold text-[#00ffa3]">Aptitude & Coding Sheets</h1>
        </div>

        {/* Search and Filter */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <div className="relative w-full max-w-md">
              <input
                type="text"
                placeholder="Search resources..."
                className="w-full px-4 py-2 rounded-lg bg-[#0e2f26] border border-[#00ffa3] text-white focus:outline-none focus:ring-2 focus:ring-[#00ffa3]"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredResources.map((resource) => (
            <motion.div
              key={resource.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-[#0e2f26] border border-[#00ffa3] rounded-xl overflow-hidden group"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-[#00ffa3]">{resource.title}</h3>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-400" />
                    <span>{resource.rating}</span>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">{resource.description}</p>
                
                {/* Features */}
                <div className="mb-4">
                  {resource.features.map((feature, index) => (
                    <span
                      key={index}
                      className="inline-block bg-[#1a3f36] text-[#00ffa3] px-3 py-1 rounded-full text-sm mr-2 mb-2"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Downloads */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-400">
                    {resource.downloads} downloads
                  </span>
                </div>

                {/* Action Button */}
                <button 
                  onClick={() => handleResourceClick(resource.link)}
                  className="flex items-center justify-center gap-2 px-4 py-2 bg-[#00ffa3] text-[#002e24] rounded-lg hover:bg-[#00cc82] transition-colors w-full"
                >
                  <FaExternalLinkAlt /> View Resource
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default CodingSheets; 