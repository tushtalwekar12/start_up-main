import React from 'react';

const TestimonialCard = ({ image, name, title, rating, highlight, feedback }) => {
  return (
    <div className="bg-[#00271f] p-10 rounded-xl flex flex-col lg:flex-row items-center gap-8">
      {/* Profile Image */}
      <img
        src={image}
        alt={name}
        className="w-[240px] h-[240px] object-cover rounded-xl shadow-md"
      />

      {/* Text Content */}
      <div className="text-left">
        <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
          “{highlight}”
        </h3>
        <p className="text-gray-300 mb-6 max-w-2xl">“{feedback}”</p>

        {/* Footer */}
        <div className="flex flex-wrap items-center justify-between">
          <div>
            <p className="font-semibold">{name}</p>
            <p className="text-sm text-gray-400">{title}</p>
          </div>
          <div className="flex items-center gap-2 mt-4 lg:mt-0">
            <span className="text-yellow-400 text-xl">★</span>
            <span className="text-white font-bold text-lg">{rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
