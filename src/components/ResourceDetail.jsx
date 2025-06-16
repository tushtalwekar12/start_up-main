import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaExternalLinkAlt, FaFileAlt, FaTools, FaCode, FaBookOpen, FaMapSigns, FaUsers } from 'react-icons/fa';
import { resources } from '../data/resources';

const iconMap = {
  FaFileAlt: FaFileAlt,
  FaTools: FaTools,
  FaCode: FaCode,
  FaBookOpen: FaBookOpen,
  FaMapSigns: FaMapSigns,
  FaUsers: FaUsers
};

const ResourceDetail = () => {
  const { resourceId } = useParams();
  const navigate = useNavigate();
  
  const resource = resources.find(res => res.id === resourceId);

  const renderIcon = (iconName) => {
    const IconComponent = iconMap[iconName];
    return IconComponent ? <IconComponent className="text-4xl text-[#00ffa3]" /> : null;
  };

  if (!resource) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#002e24] to-[#001a15] text-white py-16 px-6 md:px-12 lg:px-20">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-[#00ffa3] mb-4">Resource Not Found</h2>
          <button
            onClick={() => navigate('/free-resources')}
            className="flex items-center gap-2 px-6 py-2 bg-[#00ffa3] text-[#002e24] rounded-lg hover:bg-[#00cc82] transition-colors mx-auto"
          >
            <FaArrowLeft /> Back to Resources
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#002e24] to-[#001a15] text-white py-16 px-6 md:px-12 lg:px-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        {/* Back Button */}
        <button
          onClick={() => navigate('/free-resources')}
          className="flex items-center gap-2 px-6 py-2 bg-[#0e2f26] text-[#00ffa3] rounded-lg hover:bg-[#1a3f36] transition-colors mb-8"
        >
          <FaArrowLeft /> Back to Resources
        </button>

        {/* Resource Header */}
        <div className="bg-[#0e2f26] border border-[#00ffa3] rounded-xl p-8 mb-8">
          <div className="flex items-start gap-6">
            <div className="text-4xl text-[#00ffa3]">
              {renderIcon(resource.icon)}
            </div>
            <div>
              <h1 className="text-3xl font-bold text-[#00ffa3] mb-4">{resource.title}</h1>
              <p className="text-gray-300 text-lg mb-4">{resource.description}</p>
              <span className="inline-block px-4 py-1 bg-[#00ffa3] text-[#002e24] rounded-full text-sm font-semibold">
                {resource.category}
              </span>
            </div>
          </div>
        </div>

        {/* Detailed Content */}
        <div className="bg-[#0e2f26] border border-[#00ffa3] rounded-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-[#00ffa3] mb-4">Details</h2>
          <p className="text-gray-300 text-lg mb-6">{resource.details}</p>
          
          <h3 className="text-xl font-semibold text-[#00ffa3] mb-4">Related Content</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {resource.relatedContent.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 bg-[#1a3f36] rounded-lg hover:bg-[#234f46] transition-colors cursor-pointer"
              >
                <FaExternalLinkAlt className="text-[#00ffa3]" />
                <span className="text-gray-300">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Resources Section */}
        <div className="bg-[#0e2f26] border border-[#00ffa3] rounded-xl p-8">
          <h2 className="text-2xl font-bold text-[#00ffa3] mb-4">You Might Also Like</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {resources
              .filter(res => res.category === resource.category && res.id !== resource.id)
              .slice(0, 2)
              .map((relatedResource) => (
                <div
                  key={relatedResource.id}
                  className="flex items-center gap-4 p-4 bg-[#1a3f36] rounded-lg hover:bg-[#234f46] transition-colors cursor-pointer"
                  onClick={() => navigate(`/free-resources/${relatedResource.id}`)}
                >
                  <div className="text-2xl text-[#00ffa3]">
                    {renderIcon(relatedResource.icon)}
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#00ffa3]">{relatedResource.title}</h3>
                    <p className="text-sm text-gray-300">{relatedResource.description}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 mt-4">
          {resource.id === 'resume-templates' ? (
            <button 
              onClick={() => navigate('/free-resources/resume-templates')}
              className="flex items-center gap-2 px-6 py-2 bg-[#00ffa3] text-[#002e24] rounded-lg hover:bg-[#00cc82] transition-colors w-full justify-center"
            >
              <FaExternalLinkAlt /> View Templates
            </button>
          ) : (
            <button 
              onClick={() => handleViewResource(resource.id)}
              className="flex items-center gap-2 px-6 py-2 bg-[#00ffa3] text-[#002e24] rounded-lg hover:bg-[#00cc82] transition-colors w-full justify-center"
            >
              <FaExternalLinkAlt /> View Details
            </button>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default ResourceDetail; 