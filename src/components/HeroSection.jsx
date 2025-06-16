import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="min-h-screen w-full bg-gradient-to-r from-[#002e24] to-[#164439] text-white flex items-center px-4 sm:px-8 md:px-12 py-10">
      <div className="container mx-auto flex flex-col-reverse md:flex-row justify-between items-center gap-12">
        {/* Left: Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 text-center md:text-left"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 tracking-tight">
            YOUR <br />
            LAUNCHPAD <br />
            TO CAREER <br />
            SUCCESS
          </h1>

          <p className="text-gray-300 text-base sm:text-lg mb-8 leading-relaxed">
            Find internships, jobs, virtual classes, and{" "}
            <span className="text-[#00ffa3] font-medium">career guidance</span>{" "}
            all in one place. Empowering students and professionals to build
            skills, gain experience, and grow.
          </p>

          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <button className="bg-[#00b176] px-6 py-3 rounded-lg font-semibold hover:bg-[#00ffa3] transition duration-300">
              Get Started
            </button>
            <button className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition duration-300">
              Explore Services
            </button>
          </div>
        </motion.div>

        {/* Right: Cards Section */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full md:w-1/2"
        >
          {/* Card 1: Growth */}
          <div className="bg-[#0e2f26] rounded-xl p-5">
            <p className="text-xl font-bold">+95% User Growth</p>
            <p className="text-sm text-gray-400">Last 30 days on CareerNest</p>
            <div className="w-full bg-gray-700 h-2 mt-2 rounded-full overflow-hidden">
              <div className="bg-[#00ffa3] h-full w-[95%]"></div>
            </div>
            <p className="text-sm text-gray-400 mt-2">
              Thousands of students joined
            </p>
          </div>

          {/* Card 2: Reach */}
          <div className="bg-[#0e2f26] rounded-xl p-5 flex flex-col items-start">
            <div className="flex items-center space-x-2 mb-2">
              <div className="bg-[#00ffa3] text-black p-2 rounded-full">🌐</div>
              <span className="text-xl font-bold">+80% Placement Success</span>
            </div>
            <span className="text-sm text-gray-400">
              Students got offers from top firms
            </span>
            <span className="text-sm text-green-400 mt-1">↑ 32.5%</span>
          </div>

          {/* Card 3: Expert Team */}
          <div className="bg-[#0e2f26] rounded-xl p-5">
            <p className="font-semibold text-gray-300 mb-2">Expert Team</p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="bg-[#00ffa3] p-2 rounded-full text-black">
                  👤
                </div>
                <div>
                  <p className="font-bold">Sameer Randive</p>
                  <p className="text-sm text-gray-400">
                    Java Full Stack Developer
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-[#00ffa3] p-2 rounded-full text-black">
                  👤
                </div>
                <div>
                  <p className="font-bold">Tushar Talwekar</p>
                  <p className="text-sm text-gray-400">Software Developer</p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 4: Student Career Tracker */}
          {/* Card: CareerNest Highlights */}
          <div className="bg-[#0e2f26] rounded-xl p-5">
            <p className="font-semibold mb-4">CareerNest Highlights</p>
            <ul className="text-sm text-gray-300 space-y-1">
              <li>✅ 100+ Hiring Partners</li>
              <li>🎓 Certified Virtual Internships</li>
              <li>🧑‍🏫 Live Expert Classes</li>
              <li>🌐 Global Community Support</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
