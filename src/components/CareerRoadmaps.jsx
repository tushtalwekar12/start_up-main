import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaExternalLinkAlt, FaStar, FaClock, FaBook, FaCode, FaChartLine, FaPalette, FaMobile, FaDatabase, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const roadmaps = [
  {
    id: 'web-development',
    title: 'Web Development Roadmap',
    category: 'Development',
    description: 'Complete path to becoming a full-stack web developer',
    icon: <FaCode className="text-3xl text-[#00ffa3]" />,
    duration: '6-12 months',
    difficulty: 'Beginner to Advanced',
    skills: ['HTML/CSS', 'JavaScript', 'React', 'Node.js', 'Database'],
    resources: [
      {
        title: 'Frontend Development',
        description: 'Learn HTML, CSS, and JavaScript fundamentals',
        plan: [
          { month: 'Month 1', content: 'HTML & CSS: Structure, tags, forms, layouts, Flexbox, Grid, responsive design.' },
          { month: 'Month 2', content: 'JavaScript: Variables, functions, DOM manipulation, ES6+, events, fetch API.' },
          { month: 'Month 3', content: 'Advanced JS: Closures, async/await, modules, build a portfolio project.' }
        ]
      },
      {
        title: 'React Basics',
        description: 'Official React documentation and tutorials',
        plan: [
          { month: 'Month 4', content: 'React: JSX, components, props, state, events, hooks.' },
          { month: 'Month 5', content: 'React Router, context API, project structure, API integration.' },
          { month: 'Month 6', content: 'Build a complete React project (e.g., todo app, blog, dashboard).' }
        ]
      },
      {
        title: 'Node.js & Backend',
        description: 'Master backend development with Node.js',
        plan: [
          { month: 'Month 7', content: 'Node.js basics, npm, modules, Express.js, REST APIs.' },
          { month: 'Month 8', content: 'Databases: MongoDB/MySQL, CRUD operations, authentication.' },
          { month: 'Month 9', content: 'Full stack project: Connect frontend and backend, deploy your app.' }
        ]
      }
    ]
  },
  {
    id: 'data-science',
    title: 'Data Science Roadmap',
    category: 'Data',
    description: 'Path to becoming a data scientist or analyst',
    icon: <FaDatabase className="text-3xl text-[#00ffa3]" />,
    duration: '8-12 months',
    difficulty: 'Intermediate',
    skills: ['Python', 'Statistics', 'Machine Learning', 'SQL', 'Data Visualization'],
    resources: [
      {
        title: 'Python for Data Science',
        description: 'Learn Python programming and data analysis',
        plan: [
          { month: 'Month 1', content: 'Python basics: syntax, variables, data types, control flow, functions.' },
          { month: 'Month 2', content: 'Pandas & NumPy: Dataframes, arrays, data cleaning, manipulation.' },
          { month: 'Month 3', content: 'Data visualization: Matplotlib, Seaborn, exploratory data analysis.' }
        ]
      },
      {
        title: 'Machine Learning Basics',
        description: 'Stanford\'s machine learning course',
        plan: [
          { month: 'Month 4', content: 'Supervised learning: regression, classification, model evaluation.' },
          { month: 'Month 5', content: 'Unsupervised learning: clustering, dimensionality reduction.' },
          { month: 'Month 6', content: 'Machine learning projects: end-to-end workflow, deployment basics.' }
        ]
      },
      {
        title: 'Data Visualization',
        description: 'Master data visualization techniques',
        plan: [
          { month: 'Month 7', content: 'Advanced visualization: Plotly, dashboards, storytelling with data.' },
          { month: 'Month 8', content: 'SQL for data science: queries, joins, aggregations.' },
          { month: 'Month 9', content: 'Capstone project: Analyze and visualize a real dataset.' }
        ]
      }
    ]
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design Roadmap',
    category: 'Design',
    description: 'Path to becoming a UI/UX designer',
    icon: <FaPalette className="text-3xl text-[#00ffa3]" />,
    duration: '6-9 months',
    difficulty: 'Beginner to Intermediate',
    skills: ['Figma', 'User Research', 'Wireframing', 'Prototyping', 'Visual Design'],
    resources: [
      {
        title: 'Figma & Design Tools',
        description: 'Learn Figma from basics to advanced',
        plan: [
          { month: 'Month 1', content: 'Figma basics: interface, shapes, colors, typography.' },
          { month: 'Month 2', content: 'Wireframing, prototyping, components, design systems.' },
          { month: 'Month 3', content: 'Portfolio project: Design a complete app UI.' }
        ]
      },
      {
        title: 'UX Fundamentals',
        description: 'Google\'s UX design certification',
        plan: [
          { month: 'Month 4', content: 'User research, personas, user flows, journey maps.' },
          { month: 'Month 5', content: 'Usability testing, accessibility, feedback.' },
          { month: 'Month 6', content: 'Portfolio project: Conduct and document a user test.' }
        ]
      },
      {
        title: 'Interaction Design',
        description: 'Master interaction design principles',
        plan: [
          { month: 'Month 7', content: 'Principles of interaction design, microinteractions.' },
          { month: 'Month 8', content: 'Animation, transitions, advanced prototyping.' },
          { month: 'Month 9', content: 'Capstone: Redesign a real-world interface.' }
        ]
      }
    ]
  },
  {
    id: 'mobile-development',
    title: 'Mobile Development Roadmap',
    category: 'Development',
    description: 'Path to becoming a mobile app developer',
    icon: <FaMobile className="text-3xl text-[#00ffa3]" />,
    duration: '6-12 months',
    difficulty: 'Intermediate',
    skills: ['React Native', 'Flutter', 'iOS', 'Android', 'Mobile UI/UX'],
    resources: [
      {
        title: 'React Native Course',
        link: 'https://www.udemy.com/course/react-native-the-practical-guide/',
        description: 'Learn cross-platform mobile development'
      },
      {
        title: 'Flutter Development',
        link: 'https://flutter.dev/learn',
        description: 'Official Flutter documentation and tutorials'
      },
      {
        title: 'Mobile UI Design',
        link: 'https://www.udemy.com/course/mobile-ui-design/',
        description: 'Master mobile interface design'
      }
    ]
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing Roadmap',
    category: 'Marketing',
    description: 'Path to becoming a digital marketing specialist',
    icon: <FaChartLine className="text-3xl text-[#00ffa3]" />,
    duration: '4-6 months',
    difficulty: 'Beginner',
    skills: ['SEO', 'Social Media', 'Content Marketing', 'Analytics', 'PPC'],
    resources: [
      {
        title: 'Google Digital Garage',
        link: 'https://learndigital.withgoogle.com/digitalgarage/',
        description: 'Free digital marketing fundamentals'
      },
      {
        title: 'HubSpot Academy',
        link: 'https://academy.hubspot.com/',
        description: 'Comprehensive marketing courses'
      },
      {
        title: 'SEO Training',
        link: 'https://moz.com/beginners-guide-to-seo',
        description: 'Learn SEO from Moz'
      }
    ]
  }
];

const CareerRoadmaps = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [openDropdown, setOpenDropdown] = useState({});
  const navigate = useNavigate();

  const categories = ['All', 'Development', 'Data', 'Design', 'Marketing'];

  const handleResourceClick = (link) => {
    window.open(link, '_blank');
  };

  const handleDropdownToggle = (roadmapId, resourceIdx) => {
    setOpenDropdown((prev) => ({
      ...prev,
      [`${roadmapId}-${resourceIdx}`]: !prev[`${roadmapId}-${resourceIdx}`]
    }));
  };

  const filteredRoadmaps = roadmaps.filter(roadmap => {
    const matchesCategory = selectedCategory === 'All' || roadmap.category === selectedCategory;
    const matchesSearch = roadmap.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         roadmap.description.toLowerCase().includes(searchQuery.toLowerCase());
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
          <h1 className="text-4xl font-bold text-[#00ffa3]">Career Roadmaps</h1>
        </div>

        {/* Search and Filter */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <div className="relative w-full max-w-md">
              <input
                type="text"
                placeholder="Search roadmaps..."
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

        {/* Roadmaps Grid */}
        <div className="grid grid-cols-1 gap-8">
          {filteredRoadmaps.map((roadmap) => (
            <motion.div
              key={roadmap.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-[#0e2f26] border border-[#00ffa3] rounded-xl overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0">
                    {roadmap.icon}
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-semibold text-[#00ffa3] mb-2">{roadmap.title}</h3>
                    <p className="text-gray-300 mb-4">{roadmap.description}</p>
                    
                    {/* Skills */}
                    <div className="mb-4">
                      {roadmap.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="inline-block bg-[#1a3f36] text-[#00ffa3] px-3 py-1 rounded-full text-sm mr-2 mb-2"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Duration and Difficulty */}
                    <div className="flex gap-4 text-sm text-gray-400 mb-6">
                      <div className="flex items-center gap-2">
                        <FaClock />
                        <span>{roadmap.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaStar />
                        <span>{roadmap.difficulty}</span>
                      </div>
                    </div>

                    {/* Resources as Dropdowns */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-[#00ffa3]">Learning Plan</h4>
                      {roadmap.resources.map((resource, idx) => (
                        <div key={idx} className="bg-[#1a3f36] p-4 rounded-lg">
                          <div className="flex items-center justify-between mb-2">
                            <h5 className="font-semibold">{resource.title}</h5>
                            <button
                              onClick={() => handleDropdownToggle(roadmap.id, idx)}
                              className="flex items-center gap-2 px-3 py-1 bg-[#00ffa3] text-[#002e24] rounded hover:bg-[#00cc82] transition-colors"
                            >
                              {openDropdown[`${roadmap.id}-${idx}`] ? <FaChevronUp /> : <FaChevronDown />} Details
                            </button>
                          </div>
                          <p className="text-gray-300 text-sm mb-2">{resource.description}</p>
                          {openDropdown[`${roadmap.id}-${idx}`] && (
                            <ul className="list-disc list-inside text-gray-200 space-y-1 pl-2">
                              {resource.plan.map((item, i) => (
                                <li key={i}><span className="font-semibold text-[#00ffa3]">{item.month}:</span> {item.content}</li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default CareerRoadmaps; 