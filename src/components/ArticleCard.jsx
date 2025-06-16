import React from 'react';

const ArticleCard = ({ image, category, title, description }) => {
  return (
    <div className="bg-[#00352d] rounded-xl overflow-hidden p-4 transition hover:scale-[1.02] hover:shadow-xl cursor-pointer border border-[#00ffa3]/10">
      <img src={image} alt={title} className="rounded-lg w-full h-48 object-cover mb-4" />
      <div className="text-sm text-[#00ffa3] font-semibold uppercase tracking-wider mb-1">
        {category}
      </div>
      <h3 className="text-white font-bold text-lg mb-2">{title}</h3>
      <p className="text-gray-300 text-sm">{description}</p>
    </div>
  );
};

export default ArticleCard;
