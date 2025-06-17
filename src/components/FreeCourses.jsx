import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaExternalLinkAlt, FaStar, FaGraduationCap, FaClock, FaLanguage } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const courses = [
  {
    id: 'web-dev-bootcamp',
    title: 'The Complete Web Development Bootcamp',
    platform: 'Udemy',
    category: 'Web Development',
    description: 'Learn HTML, CSS, JavaScript, Node.js, and more to become a full-stack developer',
    features: ['65+ Hours', 'Projects', 'Certificate'],
    rating: 4.8,
    students: 1250000,
    link: 'https://www.udemy.com/course/the-complete-web-development-bootcamp/'
  },
  {
    id: 'cs50',
    title: 'CS50: Introduction to Computer Science',
    platform: 'Harvard',
    category: 'Computer Science',
    description: 'Harvard\'s introduction to computer science and programming',
    features: ['12 Weeks', 'Problem Sets', 'Certificate'],
    rating: 4.9,
    students: 2500000,
    link: 'https://cs50.harvard.edu/'
  },
  {
    id: 'machine-learning',
    title: 'Machine Learning Specialization',
    platform: 'Coursera',
    category: 'Data Science',
    description: 'Master machine learning algorithms and applications',
    features: ['3 Months', 'Projects', 'Certificate'],
    rating: 4.8,
    students: 980000,
    link: 'https://www.coursera.org/specializations/machine-learning-introduction'
  },
  {
    id: 'data-science',
    title: 'Data Science Professional Certificate',
    platform: 'IBM',
    category: 'Data Science',
    description: 'Learn data science tools and methodologies',
    features: ['9 Courses', 'Hands-on Labs', 'Certificate'],
    rating: 4.7,
    students: 750000,
    link: 'https://www.coursera.org/professional-certificates/ibm-data-science'
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design Specialization',
    platform: 'Google',
    category: 'Design',
    description: 'Master the fundamentals of UI/UX design',
    features: ['7 Courses', 'Portfolio', 'Certificate'],
    rating: 4.8,
    students: 450000,
    link: 'https://www.coursera.org/specializations/google-ux-design'
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing Specialization',
    platform: 'University of Illinois',
    category: 'Marketing',
    description: 'Comprehensive digital marketing course covering SEO, social media, and analytics',
    features: ['6 Courses', 'Projects', 'Certificate'],
    rating: 4.7,
    students: 320000,
    link: 'https://www.coursera.org/specializations/digital-marketing'
  },
  {
    id: 'python-for-everybody',
    title: 'Python for Everybody',
    platform: 'University of Michigan',
    category: 'Programming',
    description: 'Learn Python programming from basics to advanced concepts',
    features: ['5 Courses', 'Projects', 'Certificate'],
    rating: 4.8,
    students: 1500000,
    link: 'https://www.coursera.org/specializations/python'
  },
  {
    id: 'android-dev',
    title: 'Android App Development',
    platform: 'Google',
    category: 'Mobile Development',
    description: 'Build Android apps using Kotlin and Android Studio',
    features: ['4 Courses', 'Projects', 'Certificate'],
    rating: 4.7,
    students: 280000,
    link: 'https://www.coursera.org/specializations/android-app-development'
  },
  {
    id: 'blockchain',
    title: 'Blockchain Specialization',
    platform: 'University of Buffalo',
    category: 'Blockchain',
    description: 'Learn blockchain technology and cryptocurrency fundamentals',
    features: ['4 Courses', 'Projects', 'Certificate'],
    rating: 4.6,
    students: 180000,
    link: 'https://www.coursera.org/specializations/blockchain'
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