import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import tusharImg from "../assets/tushar.jpg";
import sameerImg from "../assets/sameer.jpg";
import teamBanner from '../assets/logo2.png';

const teamMembers = [
  {
    name: "Sammer Randive",
    role: "Founder & CEO",
    image: sameerImg,
    linkedin: "#",
    github: "#",
    twitter: "#",
  },
  {
    name: "Tushar Talwekar",
    role: "Co-Founder & CTO",
    image: tusharImg,
    linkedin: "#",
    github: "#",
    twitter: "#",
  },
  // {
  //   name: 'Alex Johnson',
  //   role: 'Design Lead',
  //   image: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=2070&auto=format&fit=crop',
  //   linkedin: '#',
  //   github: '#',
  //   twitter: '#',
  // },
];

const About = () => {
  return (
    <section className="container mx-auto px-4 sm:px-8 lg:px-16 py-10 text-white">
      {/* Header Image with overlay text */}
      <div className="relative w-full h-64 mb-10 rounded-lg overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop"
          alt="About Us Banner"
          className="w-full h-full object-cover opacity-30"
        />
        <h1 className="absolute inset-0 flex items-center justify-center text-4xl sm:text-6xl font-bold text-white select-none">
          About Us
        </h1>
      </div>

      {/* About Content */}
      <motion.div
        className="flex flex-col md:flex-row gap-8 py-10 px-4 sm:px-6 bg-[#001a17] rounded-xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Text Section */}
        <div className="w-full md:w-1/2 space-y-4">
          <h2 className="text-3xl font-bold text-[#00ffa3]">Who We Are</h2>
          <p className="text-gray-200 text-sm leading-relaxed">
            At CareerNest, we believe every learner deserves a launching pad for
            success. We’re a dynamic platform designed to empower students and
            young professionals with virtual internships, job opportunities,
            industry-ready courses, and career preparation tools—all under one
            digital roof.
            <br />
            <br />
            Whether you're looking to gain real-world experience, upskill
            through expert-led classes, build your freelance portfolio, or crack
            your dream placement, CareerNest is your trusted partner on this
            journey.
            <br />
             We’re not just a platform—we’re a career-building
            community.
          </p>

          <div className="grid grid-cols-2 gap-4 text-[#00ffa3] text-sm sm:text-base pt-2">
            <p>✅ Experienced Team</p>
            <p>✅ Professional Team</p>
            <p>✅ 24/7 Support</p>
            <p>✅ Fair Price</p>
            <p>✅ Friendly Staff</p>
            <p>✅ Fast Response</p>
          </div>

          <button
            type="button"
            aria-label="Request a quote"
            className="px-6 py-3 mt-4 text-white bg-[#00ff91] rounded-lg hover:bg-transparent hover:border hover:border-[#00ff91] transition-all duration-300"
          >
           Join the CareerNest Community
          </button>
        </div>

        {/* Right Image */}
        <motion.div
          className="w-full md:w-1/2 rounded-lg overflow-hidden"
          initial={{ scale: 0.95 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={teamBanner}
            alt="Our Team"
            className="w-full h-full object-cover rounded-lg"
          />
        </motion.div>
      </motion.div>

      {/* Team Section */}
      <h2 className="mt-16 mb-8 text-3xl text-[#00ffa3] text-center font-extrabold">
        Meet Our Team
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-4">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            className="relative bg-[#001a17] rounded-xl overflow-hidden shadow-lg group"
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            {/* Blurred Image on Hover */}
            <div className="relative w-full h-64 overflow-hidden">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover group-hover:blur-sm transition duration-300"
              />
              {/* Overlay Social Icons */}
              <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-50 transition duration-300 bg-black bg-opacity-50">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${member.name} LinkedIn`}
                >
                  <FaLinkedin className="text-white text-xl hover:text-[#0e76a8]" />
                </a>
                <a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${member.name} GitHub`}
                >
                  <FaGithub className="text-white text-xl hover:text-gray-400" />
                </a>
                <a
                  href={member.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${member.name} Twitter`}
                >
                  <FaTwitter className="text-white text-xl hover:text-[#1DA1F2]" />
                </a>
              </div>
            </div>
            <div className="text-center p-4">
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-400">{member.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;
