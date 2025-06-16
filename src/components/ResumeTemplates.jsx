import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowLeft, FaDownload, FaEye, FaFileAlt, FaFileWord, FaFilePdf, FaStar, FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const templates = [
  {
    id: 'modern-minimal',
    title: 'Modern Minimal',
    category: 'Resume',
    description: 'Clean and professional design with a modern touch',
    features: ['ATS-friendly', 'Single page', 'Easy to customize'],
    preview: '/templates/Modern Minimal/modern-minimal.jpg',
    downloads: 1245,
    rating: 4.8,
    format: ['PDF', 'Word'],
    files: {
      PDF: '/templates/Modern Minimal/modern-minimal.pdf',
      Word: '/templates/Modern Minimal/modern-minimal.docx'
    }
  },
  {
    id: 'executive-pro',
    title: 'Executive Pro',
    category: 'Resume',
    description: 'Sophisticated design for experienced professionals',
    features: ['Two-page option', 'Skills section', 'Project highlights'],
    preview: '/templates/executive-pro.png',
    downloads: 986,
    rating: 4.9,
    format: ['PDF', 'Word'],
    files: {
      PDF: '/templates/executive-pro.pdf',
      Word: '/templates/executive-pro.docx'
    }
  },
  {
    id: 'creative-portfolio',
    title: 'Creative Portfolio',
    category: 'Resume',
    description: 'Perfect for creative professionals and designers',
    features: ['Portfolio section', 'Color options', 'Visual elements'],
    preview: '/templates/creative-portfolio.png',
    downloads: 756,
    rating: 4.7,
    format: ['PDF', 'Word'],
    files: {
      PDF: '/templates/creative-portfolio.pdf',
      Word: '/templates/creative-portfolio.docx'
    }
  },
  {
    id: 'standard-cover',
    title: 'Standard Cover Letter',
    category: 'Cover Letter',
    description: 'Professional and straightforward cover letter template',
    features: ['Three paragraphs', 'Formal tone', 'Easy to customize'],
    preview: '/templates/standard-cover.png',
    downloads: 892,
    rating: 4.6,
    format: ['PDF', 'Word'],
    files: {
      PDF: '/templates/standard-cover.pdf',
      Word: '/templates/standard-cover.docx'
    }
  },
  {
    id: 'creative-cover',
    title: 'Creative Cover Letter',
    category: 'Cover Letter',
    description: 'Stand out with this unique cover letter design',
    features: ['Modern layout', 'Visual elements', 'Customizable sections'],
    preview: '/templates/creative-cover.png',
    downloads: 678,
    rating: 4.5,
    format: ['PDF', 'Word'],
    files: {
      PDF: '/templates/creative-cover.pdf',
      Word: '/templates/creative-cover.docx'
    }
  },
  {
    id: 'technical-cover',
    title: 'Technical Cover Letter',
    category: 'Cover Letter',
    description: 'Specialized template for technical positions',
    features: ['Project highlights', 'Technical skills section', 'Code snippets'],
    preview: '/templates/technical-cover.png',
    downloads: 543,
    rating: 4.7,
    format: ['PDF', 'Word'],
    files: {
      PDF: '/templates/technical-cover.pdf',
      Word: '/templates/technical-cover.docx'
    }
  }
];

const ResumeTemplates = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [previewTemplate, setPreviewTemplate] = useState(null);
  const navigate = useNavigate();

  const categories = ['All', 'Resume', 'Cover Letter'];

  const handleDownload = async (template, format) => {
    if (!format) return;
    
    try {
      const fileUrl = template.files[format];
      const response = await fetch(fileUrl);
      
      if (!response.ok) {
        throw new Error('File not found');
      }
      
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${template.id}-${format.toLowerCase()}.${format.toLowerCase()}`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Download failed:', error);
      alert('Sorry, the template download is currently unavailable. Please try again later.');
    }
  };

  const handlePreview = (template) => {
    setPreviewTemplate(template);
  };

  const closePreview = () => {
    setPreviewTemplate(null);
  };

  const filteredTemplates = templates.filter(template => {
    const matchesCategory = selectedCategory === 'All' || template.category === selectedCategory;
    const matchesSearch = template.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         template.description.toLowerCase().includes(searchQuery.toLowerCase());
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
          <h1 className="text-4xl font-bold text-[#00ffa3]">Resume & Cover Letter Templates</h1>
        </div>

        {/* Search and Filter */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <div className="relative w-full max-w-md">
              <input
                type="text"
                placeholder="Search templates..."
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

        {/* Templates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTemplates.map((template) => (
            <motion.div
              key={template.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-[#0e2f26] border border-[#00ffa3] rounded-xl overflow-hidden group"
            >
              {/* Template Preview */}
              <div className="relative h-48 bg-[#1a3f36] overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <FaFileAlt className="text-6xl text-[#00ffa3] opacity-50" />
                </div>
                <div className="absolute top-4 right-4 bg-[#00ffa3] text-[#002e24] px-2 py-1 rounded-full text-sm font-semibold">
                  {template.category}
                </div>
              </div>

              {/* Template Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-[#00ffa3]">{template.title}</h3>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-400" />
                    <span>{template.rating}</span>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">{template.description}</p>
                
                {/* Features */}
                <div className="mb-4">
                  {template.features.map((feature, index) => (
                    <span
                      key={index}
                      className="inline-block bg-[#1a3f36] text-[#00ffa3] px-3 py-1 rounded-full text-sm mr-2 mb-2"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Format and Downloads */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-2">
                    {template.format.map((format) => (
                      <span
                        key={format}
                        className="flex items-center gap-1 text-sm text-gray-300"
                      >
                        {format === 'PDF' ? <FaFilePdf /> : <FaFileWord />}
                        {format}
                      </span>
                    ))}
                  </div>
                  <span className="text-sm text-gray-400">
                    {template.downloads} downloads
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <div className="flex-1">
                    <select 
                      className="w-full px-4 py-2 bg-[#00ffa3] text-[#002e24] rounded-lg hover:bg-[#00cc82] transition-colors cursor-pointer"
                      onChange={(e) => handleDownload(template, e.target.value)}
                    >
                      <option value="">Download Format</option>
                      {template.format.map((format) => (
                        <option key={format} value={format}>
                          {format}
                        </option>
                      ))}
                    </select>
                  </div>
                  <button 
                    onClick={() => handlePreview(template)}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-[#00ffa3] text-[#00ffa3] rounded-lg hover:bg-[#00ffa3] hover:text-[#002e24] transition-colors"
                  >
                    <FaEye /> Preview
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Preview Modal */}
        <AnimatePresence>
          {previewTemplate && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
              onClick={closePreview}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-[#0e2f26] rounded-xl max-w-4xl w-full max-h-[90vh] overflow-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-2xl font-bold text-[#00ffa3]">{previewTemplate.title}</h3>
                    <button
                      onClick={closePreview}
                      className="text-white hover:text-[#00ffa3] transition-colors"
                    >
                      <FaTimes size={24} />
                    </button>
                  </div>
                  <div className="relative aspect-[3/4] bg-[#1a3f36] rounded-lg overflow-hidden">
                    <img
                      src={previewTemplate.preview}
                      alt={previewTemplate.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="mt-4 flex justify-end">
                    <button
                      onClick={closePreview}
                      className="px-6 py-2 bg-[#00ffa3] text-[#002e24] rounded-lg hover:bg-[#00cc82] transition-colors"
                    >
                      Close Preview
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Additional Resources */}
        <div className="mt-16 bg-[#0e2f26] border border-[#00ffa3] rounded-xl p-8">
          <h2 className="text-2xl font-bold text-[#00ffa3] mb-6">Writing Tips & Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-[#1a3f36] p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-[#00ffa3] mb-3">Resume Writing Guide</h3>
              <p className="text-gray-300 mb-4">Learn how to write an effective resume that stands out to employers.</p>
              <button className="text-[#00ffa3] hover:text-[#00cc82] transition-colors">
                Read Guide →
              </button>
            </div>
            <div className="bg-[#1a3f36] p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-[#00ffa3] mb-3">ATS Optimization Tips</h3>
              <p className="text-gray-300 mb-4">Make sure your resume gets past Applicant Tracking Systems.</p>
              <button className="text-[#00ffa3] hover:text-[#00cc82] transition-colors">
                Learn More →
              </button>
            </div>
            <div className="bg-[#1a3f36] p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-[#00ffa3] mb-3">Cover Letter Examples</h3>
              <p className="text-gray-300 mb-4">View sample cover letters for different industries and positions.</p>
              <button className="text-[#00ffa3] hover:text-[#00cc82] transition-colors">
                View Examples →
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ResumeTemplates; 