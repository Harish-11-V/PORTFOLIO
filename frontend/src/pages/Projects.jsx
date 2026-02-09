import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiTag } from 'react-icons/fi';
import axios from 'axios';
import SkeletonCard from '../components/SkeletonCard';
import AnimatedSection from '../components/AnimatedSection';
import GradientBorder from '../components/GradientBorder';
import ProjectCard from '../components/ProjectCard';

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
      <div className="min-h-screen py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold font-display mb-4">
              My <span className="gradient-text">Projects</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Loading amazing projects...
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, index) => (
              <SkeletonCard key={index} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection direction="down" className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold font-display mb-4">
            My <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A collection of my recent work and personal projects showcasing my skills
            and creativity.
          </p>
        </AnimatedSection>

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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project._id} project={project} index={index} />
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
