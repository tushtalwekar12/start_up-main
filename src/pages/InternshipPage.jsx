import React from 'react';
import { motion } from 'framer-motion';
import InternshipHeader from '../components/InternshipHeader';
import InternshipCard from '../components/InternshipCard';

const domains = [
  {
    title: 'Software Development',
    description: 'Work on real-world software projects, learn coding best practices, and build scalable applications.',
    icon: '💻',
    tags: ['JavaScript', 'React', 'Node.js'],
  },
  {
    title: 'Digital Marketing',
    description: 'Learn SEO, content marketing, social media management, and campaign strategies to boost brand awareness.',
    icon: '📈',
    tags: ['SEO', 'Analytics', 'Content'],
  },
  {
    title: 'UI/UX Design',
    description: 'Design intuitive user interfaces and improve user experiences through research and prototyping.',
    icon: '🎨',
    tags: ['Figma', 'Wireframes', 'User Flow'],
  },
  {
    title: 'Data Analysis',
    description: 'Analyze datasets to extract meaningful insights and support business decision-making processes.',
    icon: '📊',
    tags: ['Excel', 'SQL', 'Python'],
  },
  {
    title: 'Business Development',
    description: 'Help grow the business through market research, partnership development, and strategic planning.',
    icon: '🤝',
    tags: ['Sales', 'Research', 'Strategy'],
  },
  {
    title: 'Web Development',
    description: 'Build modern, responsive websites using HTML, CSS, JavaScript, and popular frameworks like React or Angular.',
    icon: '🌐',
    tags: ['HTML', 'CSS', 'React'],
  },
  {
    title: 'App Development',
    description: 'Create Android and iOS apps using platforms like Flutter, React Native, or native SDKs.',
    icon: '📱',
    tags: ['Flutter', 'React Native', 'Kotlin'],
  },
  {
    title: 'Machine Learning',
    description: 'Develop intelligent systems using Python, scikit-learn, TensorFlow, and real-world datasets.',
    icon: '🧠',
    tags: ['Python', 'TensorFlow', 'scikit-learn'],
  },
  {
    title: 'Content Writing',
    description: 'Write blogs, SEO articles, and website content that communicates clearly and ranks well.',
    icon: '✍️',
    tags: ['Blogs', 'SEO', 'Editing'],
  },
  {
    title: 'Graphic Design',
    description: 'Design visual content such as banners, social media creatives, and infographics using design tools.',
    icon: '🖌️',
    tags: ['Photoshop', 'Illustrator', 'Canva'],
  },
];

const InternshipPage = () => {
  return (
    <section className="min-h-screen bg-gradient-to-r from-[#002e24] to-[#164439] text-white py-12 px-6 md:px-12 lg:px-20">
      <InternshipHeader />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.15,
            },
          },
          hidden: {},
        }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
      >
        {domains.map(({ title, description, icon, tags }, idx) => (
          <InternshipCard
            key={idx}
            title={title}
            description={description}
            icon={icon}
            tags={tags}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default InternshipPage;

