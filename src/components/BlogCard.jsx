import React from 'react';

const BlogCard = ({ blog }) => {
  return (
    <div
      className="bg-[#00271f] rounded-2xl border border-gray-700 hover:border-[#00ffa3] overflow-hidden transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl"
    >
      <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
      <div className="p-5">
        <h3 className="text-xl font-semibold mb-2 text-white">{blog.title}</h3>
        <p className="text-gray-400 hover:text-white transition duration-300">{blog.snippet}</p>
        <button className="mt-3 text-[#00ffa3] hover:underline font-medium">Read More →</button>
      </div>
    </div>
  );
};

export default BlogCard;
