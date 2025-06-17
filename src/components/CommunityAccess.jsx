import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaExternalLinkAlt, FaDiscord, FaTelegram, FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const communityFeatures = [
  {
    id: 'discord-server',
    title: 'Discord Community',
    category: 'Community',
    description: 'Join our vibrant Discord community for peer learning, networking, and support',
    icon: <FaDiscord className="text-3xl text-[#00ffa3]" />,
    features: [
      'Real-time chat and discussions',
      'Dedicated channels for different topics',
      'Voice channels for group study sessions',
      'Job opportunities and updates',
      '24/7 community support'
    ],
    link: 'https://discord.gg/careernest',
    members: 15000
  },
  {
    id: 'telegram',
    title: 'Telegram Community',
    category: 'Community',
    description: 'Join our Telegram channel for instant updates and quick discussions',
    icon: <FaTelegram className="text-3xl text-[#00ffa3]" />,
    features: [
      'Instant job alerts',
      'Quick discussions and Q&A',
      'Resource sharing',
      'Daily tech news',
      'Community announcements'
    ],
    link: 'https://t.me/careernest',
    members: 8000
  },
  {
    id: 'whatsapp',
    title: 'WhatsApp Groups',
    category: 'Community',
    description: 'Join topic-specific WhatsApp groups for focused discussions',
    icon: <FaWhatsapp className="text-3xl text-[#00ffa3]" />,
    features: [
      'DSA practice group',
      'Interview preparation group',
      'Project discussion group',
      'Job referrals group',
      'Study group coordination'
    ],
    link: 'https://wa.me/careernest',
    members: 5000
  },
  {
    id: 'instagram',
    title: 'Job Updates Instagram',
    category: 'Community',
    description: 'Follow our Instagram for daily job updates and career tips',
    icon: <FaInstagram className="text-3xl text-[#00ffa3]" />,
    features: [
      'Daily job postings',
      'Career tips and tricks',
      'Success stories',
      'Industry insights',
      'Live sessions with experts'
    ],
    link: 'https://instagram.com/careernest',
    members: 25000
  }
];

const CommunityAccess = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const categories = ['All', 'Community'];

  const handleResourceClick = (link) => {
    window.open(link, '_blank');
  };

  const filteredFeatures = communityFeatures.filter(feature => {
    const matchesCategory = selectedCategory === 'All' || feature.category === selectedCategory;
    const matchesSearch = feature.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         feature.description.toLowerCase().includes(searchQuery.toLowerCase());
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
          <h1 className="text-4xl font-bold text-[#00ffa3]">Community Access</h1>
        </div>

        {/* Search and Filter */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <div className="relative w-full max-w-md">
              <input
                type="text"
                placeholder="Search community features..."
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

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredFeatures.map((feature) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-[#0e2f26] border border-[#00ffa3] rounded-xl overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-semibold text-[#00ffa3] mb-2">{feature.title}</h3>
                    <p className="text-gray-300 mb-4">{feature.description}</p>
                    
                    {/* Features List */}
                    <div className="mb-6">
                      {feature.features.map((item, index) => (
                        <div key={index} className="flex items-center gap-2 text-gray-300 mb-2">
                          <FaExternalLinkAlt className="text-[#00ffa3]" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* Members Count */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-2 text-gray-400">
                        <FaDiscord />
                        <span>{feature.members.toLocaleString()} members</span>
                      </div>
                    </div>

                    {/* Action Button */}
                    <button 
                      onClick={() => handleResourceClick(feature.link)}
                      className="flex items-center justify-center gap-2 px-4 py-2 bg-[#00ffa3] text-[#002e24] rounded-lg hover:bg-[#00cc82] transition-colors w-full"
                    >
                      <FaExternalLinkAlt /> Join Now
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Community Stats */}
        <div className="mt-16 bg-[#0e2f26] border border-[#00ffa3] rounded-xl p-8">
          <h2 className="text-2xl font-bold text-[#00ffa3] mb-6 text-center">Community Stats</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#00ffa3] mb-2">15K+</div>
              <div className="text-gray-300">Discord Members</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#00ffa3] mb-2">8K+</div>
              <div className="text-gray-300">Telegram Members</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#00ffa3] mb-2">5K+</div>
              <div className="text-gray-300">WhatsApp Members</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#00ffa3] mb-2">25K+</div>
              <div className="text-gray-300">Instagram Followers</div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CommunityAccess; 