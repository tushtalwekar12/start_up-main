import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaExternalLinkAlt, FaStar, FaGraduationCap, FaClock, FaLanguage } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const courses = [
  {
    id: 'java-bootcamp',
    title: 'Java Programming Bootcamp',
    platform: 'TeachAdvise',
    category: 'Programming',
    description: 'A short, focused bootcamp covering Java fundamentals, OOP, and hands-on mini-projects. Taught by TeachAdvise instructors.',
    features: ['Beginner Friendly', 'Mini Projects', 'Certificate of Completion'],
    rating: 5.0,
    students: 0,
    link: '#'
  },
  {
    id: 'python-bootcamp',
    title: 'Python Programming Bootcamp',
    platform: 'TeachAdvise',
    category: 'Programming',
    description: 'A concise bootcamp to get you started with Python programming, data types, control flow, and real-world exercises. Taught by TeachAdvise instructors.',
    features: ['Beginner Friendly', 'Hands-on Coding', 'Certificate of Completion'],
    rating: 5.0,
    students: 0,
    link: '#'
  },
  {
    id: 'js-frontend-bootcamp',
    title: 'JavaScript Frontend Development Bootcamp',
    platform: 'TeachAdvise',
    category: 'Web Development',
    description: 'A practical bootcamp for learning JavaScript and building interactive web interfaces. Includes DOM, events, and mini-projects.',
    features: ['Frontend Focused', 'Project Based', 'Certificate of Completion'],
    rating: 5.0,
    students: 0,
    link: '#'
  }
];

const FreeCourses = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const categories = ['All', 'Web Development', 'Data Science', 'Design', 'Marketing', 'Programming', 'Mobile Development', 'Blockchain'];

  const handleCourseClick = (link) => {
    window.open(link, '_blank');
  };

  const filteredCourses = courses.filter(course => {
    const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.platform.toLowerCase().includes(searchQuery.toLowerCase());
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
          <h1 className="text-4xl font-bold text-[#00ffa3]">Free Courses</h1>
        </div>

        {/* Search and Filter */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <div className="relative w-full max-w-md">
              <input
                type="text"
                placeholder="Search courses..."
                className="w-full px-4 py-2 rounded-lg bg-[#0e2f26] border border-[#00ffa3] text-white focus:outline-none focus:ring-2 focus:ring-[#00ffa3]"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
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

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-[#0e2f26] border border-[#00ffa3] rounded-xl overflow-hidden group"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-[#00ffa3]">{course.title}</h3>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-400" />
                    <span>{course.rating}</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 text-gray-400 mb-4">
                  <FaGraduationCap />
                  <span>{course.platform}</span>
                </div>

                <p className="text-gray-300 mb-4">{course.description}</p>
                
                {/* Features */}
                <div className="mb-4">
                  {course.features.map((feature, index) => (
                    <span
                      key={index}
                      className="inline-block bg-[#1a3f36] text-[#00ffa3] px-3 py-1 rounded-full text-sm mr-2 mb-2"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Students */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-400">
                    {course.students.toLocaleString()} students enrolled
                  </span>
                </div>

                {/* Action Button */}
                <button 
                  onClick={() => handleCourseClick(course.link)}
                  className="flex items-center justify-center gap-2 px-4 py-2 bg-[#00ffa3] text-[#002e24] rounded-lg hover:bg-[#00cc82] transition-colors w-full"
                >
                  <FaExternalLinkAlt /> Enroll Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default FreeCourses; 