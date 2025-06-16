import React from 'react';
import { motion } from 'framer-motion';
import BlogCard from '../components/BlogCard';
import AdCard from '../components/AdCard';

const blogs = [
  {
    id: 1,
    title: 'How to Build a Scalable Web App',
    snippet: 'Learn key concepts to scale your web application effectively...',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0',
  },
  {
    id: 2,
    title: 'Mastering React Hooks',
    snippet: 'Hooks revolutionized logic in React. Master them now...',
    image: 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0',
  },
  {
    id: 3,
    title: 'Design Trends for 2025',
    snippet: 'Explore UI/UX patterns that will shape the future...',
    image: 'https://images.unsplash.com/photo-1523726491678-bf852e717f6a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0',
  },
  {
    id: 4,
    title: 'Boosting SEO with Next.js',
    snippet: 'Learn to harness SEO tools in Next.js apps...',
    image: 'https://images.unsplash.com/photo-1593437955835-fc8c51725430?q=80&w=1970&auto=format&fit=crop&ixlib=rb-4.1.0',
  },
];

const ads = [
  {
    id: 1,
    title: '🔥 50% Off Hosting',
    description: 'Get 1 year of web hosting at half price!',
    image: 'https://source.unsplash.com/random/400x250?offer',
  },
  {
    id: 2,
    title: '🎨 UI Kit Bundle',
    description: 'Modern UI kits for your next project.',
    image: 'https://source.unsplash.com/random/400x250?bundle',
  },
];

// Motion variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const BlogPage = () => {
  return (
    <main className="container mx-auto px-6 py-16 text-white">
      <div className="flex flex-col lg:flex-row gap-12">

        {/* Blog List */}
        <motion.section
          className="w-full lg:w-2/3"
          aria-label="Latest Blogs"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <h2 className="text-4xl font-extrabold mb-6 bg-gradient-to-r from-[#00ffa3] to-[#00e0ff] bg-clip-text text-transparent">
            Latest Blogs
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {blogs.map(blog => (
              <motion.div
                key={blog.id}
                variants={cardVariants}
                whileHover={{ scale: 1.03 }}
                className="cursor-pointer"
              >
                <BlogCard blog={blog} />
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Ads */}
        <motion.aside
          className="w-full lg:w-1/3"
          aria-label="Sponsored Ads"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <h2 className="text-3xl font-bold mb-6 text-[#00ffa3]">Sponsored Ads</h2>
          <div className="flex flex-col gap-6">
            {ads.map(ad => (
              <motion.div
                key={ad.id}
                variants={cardVariants}
                whileHover={{ scale: 1.03 }}
                className="cursor-pointer"
              >
                <AdCard ad={ad} />
              </motion.div>
            ))}
          </div>
        </motion.aside>

      </div>
    </main>
  );
};

export default BlogPage;
