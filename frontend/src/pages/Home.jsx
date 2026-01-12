import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiArrowDown, FiCode, FiZap } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const floatingIcons = [
    { Icon: FiCode, delay: 0, position: 'top-20 left-10' },
    { Icon: FiZap, delay: 2, position: 'top-40 right-20' },
    { Icon: FiGithub, delay: 1, position: 'bottom-40 left-20' },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated gradient orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600/20 rounded-full filter blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-600/20 rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
      
      {/* Floating icons */}
      {floatingIcons.map(({ Icon, delay, position }, index) => (
        <motion.div
          key={index}
          className={`absolute ${position} text-purple-500/20`}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: delay,
          }}
        >
          <Icon className="w-12 h-12" />
        </motion.div>
      ))}

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
      >
        {/* Animated badge */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 px-4 py-2 mb-8 glass-interactive rounded-full"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
          <span className="text-sm text-gray-300">Available for opportunities</span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold font-display mb-6 text-shadow-glow"
        >
          Hi, I'm <span className="gradient-text animate-glow">Harish Kumar</span>
        </motion.h1>

        <motion.div
          variants={itemVariants}
          className="mb-4"
        >
          <h2 className="text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-gray-200 via-purple-200 to-cyan-200 font-semibold mb-2">
            AI/ML Enthusiast & Full-Stack Developer
          </h2>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-lg text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          A Prefinal year AI & ML student with strong foundations in AI, ML, Frontend Development, IoT and Core Programming. 
          Actively building projects that solve real-world and socio-impactful problems, blending technical expertise 
          with End-to-End Development.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <Link to="/projects">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(168, 85, 247, 0.6)" }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                View My Work
                <FiArrowDown className="group-hover:translate-y-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-purple-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.button>
          </Link>
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group px-8 py-4 glass-interactive font-semibold rounded-xl transition-all duration-300"
            >
              <span className="flex items-center gap-2">
                Get In Touch
                <FiMail className="group-hover:rotate-12 transition-transform" />
              </span>
            </motion.button>
          </Link>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex justify-center space-x-6"
        >
          {[
            { icon: FiGithub, url: 'https://github.com/Harish-11-V', label: 'GitHub', color: 'hover:text-purple-400' },
            { icon: FiLinkedin, url: 'https://www.linkedin.com/in/harish-kumar-v-a412092a2/', label: 'LinkedIn', color: 'hover:text-cyan-400' },
            { icon: FiMail, url: 'mailto:harishkumar11v@gmail.com', label: 'Email', color: 'hover:text-purple-400' },
          ].map((social, index) => (
            <motion.a
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -5, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className={`p-4 glass-interactive rounded-full text-gray-400 ${social.color} transition-all duration-300`}
              aria-label={social.label}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <social.icon className="w-6 h-6" />
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-gray-500"
          >
            <FiArrowDown className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;
