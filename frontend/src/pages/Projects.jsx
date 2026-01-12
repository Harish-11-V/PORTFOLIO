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
      title: 'Full-Stack OD Approval Application',
      description: 'Built a digital platform to revolutionize OD leave management in institutions by automating request & approval workflows including student leave submission and faculty verification. Achieved 70% faster processing, 60% improved faculty efficiency & 90% accuracy in student submissions, ensuring transparency.',
      technologies: ['React.js', 'MongoDB', 'Node.js', 'HTML', 'CSS', 'JavaScript'],
      githubUrl: 'https://github.com/Harish-11-V',
      liveUrl: '',
      category: 'fullstack',
      featured: true,
    },
    {
      _id: '2',
      title: 'EduMate-AI Powered Adaptive Learning Platform',
      description: 'Developed an adaptive learning platform for personalized education and skill enhancement. Used Python, TensorFlow for AI-driven content recommendations (80% better matching). Integrated Twilio notifications, AI chatbots for 70% faster responses. 60% faster task completion with interactive interface.',
      technologies: ['Python', 'TensorFlow', 'PyTorch', 'OpenCV', 'React', 'PostgreSQL', 'MongoDB'],
      githubUrl: 'https://github.com/Harish-11-V',
      liveUrl: '',
      category: 'fullstack',
      featured: true,
    },
    {
      _id: '3',
      title: 'Pneumonia Detection With VIT Model & MC Dropout',
      description: 'Developed a deep learning framework using ViT, Monte Carlo Dropout, and Active Learning for automated pneumonia diagnosis from chest X-rays. Achieved 94.1% accuracy, 96% sensitivity, and 0.98 AUC, outperforming ResNet-50. 85% prediction confidence with reduced labeling effort & ensuring reliable classification models.',
      technologies: ['Python', 'PyTorch', 'ViT', 'OpenCV', 'MC Dropout'],
      githubUrl: 'https://github.com/Harish-11-V',
      liveUrl: '',
      category: 'backend',
      featured: true,
    },
    {
      _id: '4',
      title: 'Smart Home Monitoring',
      description: 'Developed a smart home system with real-time sensor data visualization on a dashboard using cloud platforms (Blynk, ThingSpeak, Arduino Cloud) & communication protocols (UART, SPI, I2C). Enabled remote monitoring, safety alerts, and wireless control, achieving 65% improvement in monitoring efficiency, and 57% better system responsiveness.',
      technologies: ['Arduino', 'ESP32s66', 'Blynk Cloud', 'ThingSpeak', 'IoT'],
      githubUrl: 'https://github.com/Harish-11-V',
      liveUrl: '',
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
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              onClick={() => setFilter(category)}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`group relative px-6 py-3 rounded-xl font-medium transition-all duration-300 overflow-hidden ${
                filter === category
                  ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-lg shadow-purple-500/50'
                  : 'glass-interactive text-gray-300'
              }`}
            >
              <span className="relative z-10">{category.charAt(0).toUpperCase() + category.slice(1)}</span>
              {filter !== category && (
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              )}
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project._id}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="card-interactive relative overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Gradient border effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-transparent to-cyan-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
              
              {/* Shimmer effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              
              <div className="relative z-10">
                {project.featured && (
                  <motion.div 
                    className="flex items-center space-x-2 mb-4"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: index * 0.1 + 0.3, type: 'spring' }}
                  >
                    <div className="relative">
                      <FiTag className="w-4 h-4 text-purple-400 animate-pulse" />
                      <span className="absolute inset-0 animate-ping">
                        <FiTag className="w-4 h-4 text-purple-400 opacity-50" />
                      </span>
                    </div>
                    <span className="text-sm font-semibold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Featured</span>
                  </motion.div>
                )}

                <h3 className="text-2xl font-bold mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 line-clamp-3 group-hover:text-gray-300 transition-colors">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: index * 0.1 + techIndex * 0.05 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="px-3 py-1 text-xs rounded-lg bg-gradient-to-r from-purple-500/10 to-cyan-500/10 text-purple-300 border border-purple-500/20 hover:border-purple-400/40 transition-all cursor-default"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  {project.githubUrl && (
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, x: -3 }}
                      whileTap={{ scale: 0.9 }}
                      className="flex items-center space-x-2 text-gray-400 hover:text-white transition-all group/link"
                    >
                      <FiGithub className="w-5 h-5 group-hover/link:rotate-12 transition-transform" />
                      <span className="text-sm font-medium">Code</span>
                    </motion.a>
                  )}
                  {project.liveUrl && (
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, x: 3 }}
                      whileTap={{ scale: 0.9 }}
                      className="flex items-center space-x-2 text-gray-400 hover:text-purple-400 transition-all group/link"
                    >
                      <FiExternalLink className="w-5 h-5 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                      <span className="text-sm font-medium">Live Demo</span>
                    </motion.a>
                  )}
                </div>
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
