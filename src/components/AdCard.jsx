import React from 'react';

const AdCard = ({ ad }) => {
  return (
    <div className="bg-[#111827] rounded-xl shadow-lg overflow-hidden border border-gray-700 hover:border-[#00e0ff] transform hover:-translate-y-1 transition-all duration-300">
      <img src={ad.image} alt={ad.title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h4 className="text-lg font-semibold text-white">{ad.title}</h4>
        <p className="text-sm text-gray-400 hover:text-white transition duration-300">{ad.description}</p>
      </div>
    </div>
  );
};

export default AdCard;
