import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TestimonialCard from './TestimonialCard';

const testimonials = [
  {
    image: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&w=240&q=80",
    name: "Aditya Sharma",
    title: "Student, B.Tech Final Year",
    rating: "5.0",
    highlight: "CareerNest helped me land my dream internship with real-world skills.",
    feedback: "From the first virtual class to resume-building sessions, everything felt personalized and impactful. Their placement preparation track and mock interviews gave me the edge I needed. I’m now interning with a top MNC!"
  },
  {
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=240&q=80",
    name: "Samiksha Roy",
    title: "Recent Graduate, CS Engineering",
    rating: "5.0",
    highlight: "Their career guidance was a turning point for me.",
    feedback: "CareerNest’s freelancing gigs and community support helped me earn while learning. I was confused after graduation, but their structured roadmap helped me build confidence and get hired as a junior developer."
  },
  {
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=240&q=80",
    name: "Rahul Verma",
    title: "Job Seeker, Career Transition",
    rating: "5.0",
    highlight: "The platform made my career switch smooth and successful.",
    feedback: "Switching from teaching to tech was tough until I joined CareerNest. The hands-on projects, mentorship, and upskilling sessions were exactly what I needed. I now work as a frontend developer!"
  }
];

const variants = {
  enter: { x: 300, opacity: 0 },
  center: { x: 0, opacity: 1 },
  exit: { x: -300, opacity: 0 }
};

const TestimonialSection = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    },  12000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-[#001a17] text-white py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            <span className="text-white">WHAT OUR </span>
            <span className="text-[#00ffa3]">CLIENTS SAYS</span>
          </h2>
          <p className="text-gray-300 max-w-xl">
            Hear directly from our community of students, professionals, and partners. Discover how CareerNest has transformed their career journeys through real opportunities, mentorship, and meaningful connections.
          </p>

          {/* Stars */}
          <div className="flex items-center gap-3 mt-6">
            {[...Array(5)].map((_, idx) => (
              <span key={idx} className="text-yellow-400 text-2xl">★</span>
            ))}
            <span className="text-white text-xl font-bold ml-3">5/5</span>
            <span className="text-gray-400">(1,500+ Reviews)</span>
          </div>
        </div>

        {/* Testimonial Animation */}
        <div className="relative h-[420px] md:h-[360px] overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.8 }}
              className="absolute w-full"
            >
              <TestimonialCard {...testimonials[index]} />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-8 space-x-3">
          {testimonials.map((_, idx) => (
            <div
              key={idx}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                idx === index ? "bg-[#00ffa3]" : "bg-[#00ffa3]/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
