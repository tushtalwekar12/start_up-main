import React from 'react';
import ArticleCard from './ArticleCard';

const articles = [
  {
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80',
    category: 'EDUCATION',
    title: 'Top 5 AI Tools Every Student Should Know',
    description: 'Discover essential AI tools that can streamline studying, improve productivity, and prepare students for the future of work. From smart writing assistants to resume builders, this guide has you covered.',
  },
  {
    image: 'https://images.unsplash.com/39/lIZrwvbeRuuzqOoWJUEn_Photoaday_CSD%20%281%20of%201%29-5.jpg?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'CAREER DEVELOPMENT',
    title: 'Mastering Virtual Internships: A CareerNest Guide',
    description: 'Learn how to stand out in virtual internships, build real-world experience, and grow your professional network from anywhere.',
  },
  {
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'FREELANCING',
    title: 'AI-Powered Tools to Kickstart Your Freelance Journey',
    description: 'Leverage cutting-edge AI tools to deliver faster results, impress clients, and grow your freelance career while still in college.',
  },
  {
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'TECHNOLOGY',
    title: 'Top 5 Tech Stacks to Learn in 2025',
    description: 'From MERN to JAMstack, explore the most in-demand tech stacks shaping modern web development careers. Perfect for students and early-stage developers.',
  },
  {
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'WEB DEVELOPMENT',
    title: 'Why Every Beginner Should Learn the MERN Stack',
    description: 'Understand how mastering MongoDB, Express, React, and Node.js can launch your full-stack journey with real-world project experience.',
  }
];

const ArticleSection = () => {
  return (
    <section className="bg-[#001a17] py-20 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center mb-12">
          <span className="text-white">LATEST </span>
          <span className="text-[#00ffa3]">ARTICLES</span>
        </h2>

        {/* First row: 3 columns */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {articles.slice(0, 3).map((article, idx) => (
            <ArticleCard
              key={idx}
              {...article}
              className="w-full transition-transform duration-300 hover:scale-105 hover:shadow-lg"
            />
          ))}
        </div>

        {/* Second row: 2 columns - use full width evenly */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 mt-6">
          {articles.slice(3, 5).map((article, idx) => (
            <ArticleCard
              key={idx + 3}
              {...article}
              className="w-full transition-transform duration-300 hover:scale-105 hover:shadow-lg"
            />
          ))}
        </div>

        {/* Footer with CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-300 mb-4">Didn’t find what you were looking for?</p>
          <button className="bg-[#00ffa3] text-black font-semibold px-6 py-2 rounded-full hover:bg-[#00d48c] transition">
            Discover More
          </button>
        </div>
      </div>
    </section>
  );
};

export default ArticleSection;
