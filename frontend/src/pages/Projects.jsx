import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiTag } from 'react-icons/fi';
import axios from 'axios';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/projects`);
      setProjects(response.data);
    } catch (error) {
      console.error('Error fetching projects:', error);
      // Fallback to sample data if API fails
      setProjects(sampleProjects);
    } finally {
      setLoading(false);
    }
  };

  const sampleProjects = [
    {
      _id: '1',
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with payment integration, admin dashboard, and real-time inventory management.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      githubUrl: 'https://github.com/harishkumar/ecommerce',
      liveUrl: 'https://ecommerce-demo.com',
      category: 'fullstack',
      featured: true,
    },
    {
      _id: '2',
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for social media management with real-time data visualization and scheduling.',
      technologies: ['React', 'TypeScript', 'Chart.js', 'Firebase'],
      githubUrl: 'https://github.com/harishkumar/social-dashboard',
      liveUrl: 'https://social-dashboard-demo.com',
      category: 'frontend',
      featured: true,
    },
    {
      _id: '3',
      title: 'Task Management API',
      description: 'RESTful API for task management with JWT authentication, role-based access control, and real-time notifications.',
      technologies: ['Express', 'PostgreSQL', 'Socket.io', 'Redis'],
      githubUrl: 'https://github.com/harishkumar/task-api',
      category: 'backend',
      featured: false,
    },
  ];

  const categories = ['all', 'fullstack', 'frontend', 'backend'];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.category === filter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          className="w-16 h-16 border-4 border-primary-500 border-t-transparent rounded-full"
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold font-display mb-4">
            My <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A collection of my recent work and personal projects showcasing my skills
            and creativity.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex justify-center space-x-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setFilter(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                filter === category
                  ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white'
                  : 'glass text-gray-300 hover:text-white'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project._id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="glass rounded-xl p-6 group"
            >
              {project.featured && (
                <div className="flex items-center space-x-2 mb-4">
                  <FiTag className="w-4 h-4 text-primary-400" />
                  <span className="text-sm text-primary-400 font-medium">Featured</span>
                </div>
              )}

              <h3 className="text-2xl font-bold mb-3 group-hover:text-primary-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-4 line-clamp-3">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-xs rounded-full bg-primary-500/10 text-primary-300 border border-primary-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex space-x-4">
                {project.githubUrl && (
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
                  >
                    <FiGithub className="w-5 h-5" />
                    <span className="text-sm">Code</span>
                  </motion.a>
                )}
                {project.liveUrl && (
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex items-center space-x-2 text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    <FiExternalLink className="w-5 h-5" />
                    <span className="text-sm">Live Demo</span>
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-gray-400 text-lg">
              No projects found in this category.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Projects;
