import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaCode, 
  FaPalette, 
  FaChartLine, 
  FaLaptopCode, 
  FaDatabase, 
  FaRobot, 
  FaSearch, 
  FaFilter,
  FaClock,
  FaMoneyBillWave
} from 'react-icons/fa';
import InternshipForm from '../components/InternshipForm';

const InternshipPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [selectedDomain, setSelectedDomain] = useState('');

  const categories = [
    { id: 'all', name: 'All Domains' },
    { id: 'development', name: 'Development' },
    { id: 'design', name: 'Design' },
    { id: 'marketing', name: 'Marketing' },
    { id: 'data', name: 'Data' },
    { id: 'business', name: 'Business' }
  ];

  const internshipDomains = [
    {
      title: 'Frontend Development (Unpaid)',
      description: '1, 3, or 6 month internship focused on building modern, responsive user interfaces using HTML, CSS, and JavaScript frameworks. No stipend (unpaid).',
      icon: FaCode,
      category: 'development',
      tags: ['React', 'HTML', 'CSS', 'JavaScript', 'UI'],
      duration: '1 / 3 / 6 months',
      stipend: 'Unpaid',
      requirements: [
        'Basic HTML, CSS, JavaScript',
        'Eagerness to learn frontend frameworks',
        'Problem-solving skills',
        'Portfolio (if available)'
      ]
    },
    {
      title: 'Backend Development (Unpaid)',
      description: '1, 3, or 6 month internship focused on server-side logic, databases, and APIs. No stipend (unpaid).',
      icon: FaLaptopCode,
      category: 'development',
      tags: ['Node.js', 'Express', 'APIs', 'Databases'],
      duration: '1 / 3 / 6 months',
      stipend: 'Unpaid',
      requirements: [
        'Basic programming knowledge',
        'Understanding of server-side concepts',
        'Database basics',
        'Problem-solving skills'
      ]
    },
    {
      title: 'Full Stack Development (Unpaid)',
      description: '1, 3, or 6 month internship covering both frontend and backend development. No stipend (unpaid).',
      icon: FaCode,
      category: 'development',
      tags: ['Full Stack', 'React', 'Node.js', 'MongoDB'],
      duration: '1 / 3 / 6 months',
      stipend: 'Unpaid',
      requirements: [
        'Basic web development knowledge',
        'Interest in both frontend and backend',
        'Willingness to learn new technologies',
        'Portfolio (if available)'
      ]
    },
    {
      title: 'Python Internship (Unpaid)',
      description: '1, 3, or 6 month internship focused on Python programming and real-world projects. No stipend (unpaid).',
      icon: FaCode,
      category: 'development',
      tags: ['Python', 'Programming', 'Projects'],
      duration: '1 / 3 / 6 months',
      stipend: 'Unpaid',
      requirements: [
        'Basic Python knowledge',
        'Eagerness to learn',
        'Problem-solving skills',
        'Portfolio (if available)'
      ]
    },
    {
      title: 'Data Analytics (Unpaid)',
      description: '1, 3, or 6 month internship focused on data analysis, visualization, and reporting. No stipend (unpaid).',
      icon: FaChartLine,
      category: 'data',
      tags: ['Data Analytics', 'Excel', 'Visualization', 'Reporting'],
      duration: '1 / 3 / 6 months',
      stipend: 'Unpaid',
      requirements: [
        'Basic Excel or Google Sheets',
        'Interest in data analysis',
        'Analytical mindset',
        'Portfolio (if available)'
      ]
    },
    {
      title: 'Data Science (Unpaid)',
      description: '1, 3, or 6 month internship focused on data science, machine learning, and Python. No stipend (unpaid).',
      icon: FaDatabase,
      category: 'data',
      tags: ['Data Science', 'Python', 'ML', 'AI'],
      duration: '1 / 3 / 6 months',
      stipend: 'Unpaid',
      requirements: [
        'Basic Python knowledge',
        'Interest in data science',
        'Eagerness to learn ML concepts',
        'Portfolio (if available)'
      ]
    }
  ];

  const filteredDomains = internshipDomains.filter(domain => {
    const matchesCategory = selectedCategory === 'all' || domain.category === selectedCategory;
    const matchesSearch = domain.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         domain.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         domain.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const handleApplyClick = (domain) => {
    setSelectedDomain(domain.title);
    setShowForm(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#002e24] to-[#001a15] text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#00ffa3] mb-4">
            Internship Opportunities
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Gain real-world experience and build your career with our internship programs.
            Choose from various domains and work on exciting projects.
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaSearch className="h-5 w-5 text-[#00ffa3]" />
                </div>
                <input
                  type="text"
                  placeholder="Search internships..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="block w-full pl-10 pr-3 py-2 border border-[#00ffa3]/20 rounded-md leading-5 bg-[#0e2f26] placeholder-gray-400 text-white focus:outline-none focus:ring-1 focus:ring-[#00ffa3] focus:border-[#00ffa3] sm:text-sm"
                />
              </div>
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
                    selectedCategory === category.id
                      ? 'bg-[#00ffa3] text-[#002e24]'
                      : 'bg-[#0e2f26] text-gray-300 hover:bg-[#1a3f36]'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Internship Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDomains.map((domain, index) => (
            <motion.div
              key={domain.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#0e2f26] rounded-lg shadow-lg overflow-hidden hover:shadow-[#00ffa3]/20 hover:shadow-xl transition-shadow duration-300 border border-[#00ffa3]/10"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-[#002e24] rounded-lg">
                    <domain.icon className="h-6 w-6 text-[#00ffa3]" />
                  </div>
                  <h3 className="ml-4 text-xl font-semibold text-[#00ffa3]">{domain.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{domain.description}</p>
                
                <div className="mb-4">
                  <div className="flex items-center text-sm text-gray-400 mb-2">
                    <FaClock className="mr-2 text-[#00ffa3]" />
                    <span>Duration: {domain.duration}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-400">
                    <FaMoneyBillWave className="mr-2 text-[#00ffa3]" />
                    <span>Stipend: {domain.stipend}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-medium text-[#00ffa3] mb-2">Requirements:</h4>
                  <ul className="list-disc list-inside text-sm text-gray-300">
                    {domain.requirements.map((req, i) => (
                      <li key={i}>{req}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {domain.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-[#002e24] text-[#00ffa3] text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => handleApplyClick(domain)}
                  className="w-full bg-[#00ffa3] text-[#002e24] py-2 px-4 rounded-md hover:bg-[#00cc82] transition-colors duration-300 font-semibold"
                >
                  Apply Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="mt-16 bg-[#0e2f26] rounded-lg shadow-lg p-8 border border-[#00ffa3]/10">
          <h2 className="text-2xl font-bold text-[#00ffa3] mb-6">Internship Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4">
              <h3 className="text-lg font-semibold text-[#00ffa3] mb-2">Real-world Experience</h3>
              <p className="text-gray-300">Work on actual projects and gain hands-on experience in your chosen field.</p>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-[#00ffa3] mb-2">Mentorship</h3>
              <p className="text-gray-300">Get guidance from industry experts and learn best practices.</p>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-[#00ffa3] mb-2">Career Growth</h3>
              <p className="text-gray-300">Build your portfolio and enhance your chances of getting hired.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Application Form Modal */}
      {showForm && (
        <InternshipForm
          selectedDomain={selectedDomain}
          onClose={() => setShowForm(false)}
        />
      )}
    </div>
  );
};

export default InternshipPage;

