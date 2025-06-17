import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaExternalLinkAlt, FaTools, FaStar } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const interviewResources = [
  {
    id: 'behavioral-questions',
    title: 'Behavioral Questions Guide',
    category: 'HR Round',
    description: 'Master the STAR method and common behavioral questions',
    features: ['STAR Method Guide', 'Common Questions', 'Sample Answers'],
    downloads: 2345,
    rating: 4.9,
    link: 'https://www.themuse.com/advice/behavioral-interview-questions-answers-examples'
  },
  {
    id: 'technical-interview',
    title: 'Technical Interview Prep',
    category: 'Technical Round',
    description: 'Comprehensive guide for technical interviews',
    features: ['DSA Questions', 'System Design', 'Problem Solving'],
    downloads: 1890,
    rating: 4.8,
    link: 'https://www.interviewbit.com/technical-interview-questions/'
  },
  {
    id: 'company-specific',
    title: 'Company-wise Preparation',
    category: 'Company Specific',
    description: 'Interview experiences and questions from top companies',
    features: ['FAANG Questions', 'Startup Interviews', 'Experience Sharing'],
    downloads: 1567,
    rating: 4.7,
    link: 'https://www.geeksforgeeks.org/company-interview-corner/'
  },
  {
    id: 'system-design',
    title: 'System Design Guide',
    category: 'Technical Round',
    description: 'Learn how to approach system design interviews',
    features: ['Architecture Patterns', 'Scalability', 'Best Practices'],
    downloads: 1234,
    rating: 4.9,
    link: 'https://www.educative.io/courses/grokking-the-system-design-interview'
  },
  {
    id: 'mock-interviews',
    title: 'Mock Interview Sessions',
    category: 'Practice',
    description: 'Practice with real interview scenarios',
    features: ['Video Sessions', 'Feedback', 'Performance Analysis'],
    downloads: 987,
    rating: 4.8,
    link: 'https://www.pramp.com/'
  },
  {
    id: 'salary-negotiation',
    title: 'Salary Negotiation Guide',
    category: 'HR Round',
    description: 'Learn how to negotiate your salary effectively',
    features: ['Market Research', 'Negotiation Tips', 'Counter Offers'],
    downloads: 876,
    rating: 4.7,
    link: 'https://www.themuse.com/advice/salary-negotiation-scripts'
  }
];

const InterviewKit = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const categories = ['All', 'HR Round', 'Technical Round', 'Company Specific', 'Practice'];

  const handleResourceClick = (link) => {
    window.open(link, '_blank');
  };

  const filteredResources = interviewResources.filter(resource => {
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
          <h1 className="text-4xl font-bold text-[#00ffa3]">Interview Preparation Kit</h1>
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

export default InterviewKit; 