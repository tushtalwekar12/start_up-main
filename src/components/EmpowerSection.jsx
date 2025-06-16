import React from "react";
import { motion } from "framer-motion";

const EmpowerSection = () => {
  return (
    <section className="bg-transparent py-20">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
        {/* Left Side: Image */}
        <motion.div
          className="w-full lg:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <img
            src="https://images.unsplash.com/photo-1667372525724-16cede94db0b?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Network Graphic"
            className="rounded-xl shadow-lg w-[90%] max-w-md"
          />
        </motion.div>

        {/* Right Side: Text Content */}
        <motion.div
          className="w-full lg:w-1/2 text-white"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 4 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-extrabold mb-6 leading-snug">
            Empowering careers, enabling connected growth <br />
            <span className="text-[#00ffa3]">
              shared opportunities, shared success
            </span>
          </h2>
          <p className="text-gray-300 mb-10 text-lg">
            CareerNest fosters a collaborative ecosystem where students,
            professionals, and educators thrive together. By connecting talent
            with opportunity, we enable meaningful internships, job placements,
            and mentorship that drive real career impact and growth.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div>
              <h3 className="text-3xl font-bold">5K+</h3>
              <p className="mt-2 text-sm font-medium text-gray-400">
                Internships & Jobs facilitated
              </p>
            </div>
            <div>
              <h3 className="text-3xl font-bold">85%</h3>
              <p className="mt-2 text-sm font-medium text-gray-400">
                Placement satisfaction rate
              </p>
            </div>
            <div>
              <h3 className="text-3xl font-bold">60%</h3>
              <p className="mt-2 text-sm font-medium text-gray-400">
                Student engagement growth
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EmpowerSection;
