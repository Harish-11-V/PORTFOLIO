import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiArrowDown, FiCode, FiZap } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import MagneticButton from '../components/MagneticButton';
import GlitchText from '../components/GlitchText';
import Counter from '../components/Counter';

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
          className="inline-flex items-center gap-2 px-4 py-2 mb-6 md:mb-8 glass-interactive rounded-full text-xs sm:text-sm"
        >
          <span className="relative flex h-2 w-2 sm:h-3 sm:w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-full w-full bg-green-500"></span>
          </span>
          <span className="text-gray-300">Available for opportunities</span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="px-2"
        >
          <GlitchText 
            text="Hi, I'm Harish Kumar" 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-display mb-4 md:mb-6"
          />
        </motion.h1>

        <motion.div
          variants={itemVariants}
          className="mb-3 md:mb-4"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-gray-200 via-purple-200 to-cyan-200 font-semibold mb-2 px-2">
            AI/ML Enthusiast & Full-Stack Developer
          </h2>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg text-gray-400 max-w-3xl mx-auto mb-8 md:mb-12 leading-relaxed px-4"
        >
          A Prefinal year Artificial Intelligence and Machine Learning student with strong foundations in AI, ML, Frontend Development, IoT and Core Programming (Java, Python, C). 
          Actively building projects that solve real-world and socio-impactful problems, blending technical expertise with End-to-End Development. A daily learner with resilient leadership skills which create and inspire a positive change in society.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 md:gap-4 mb-8 md:mb-12 px-4"
        >
          <Link to="/projects" className="w-full sm:w-auto">
            <MagneticButton
              className="group relative w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 overflow-hidden hover:shadow-lg hover:shadow-purple-500/50"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                View My Work
                <FiArrowDown className="group-hover:translate-y-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-purple-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </MagneticButton>
          </Link>
          <Link to="/contact" className="w-full sm:w-auto">
            <MagneticButton
              className="group w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 glass-interactive font-semibold rounded-xl transition-all duration-300"
            >
              <span className="flex items-center justify-center gap-2">
                Get In Touch
                <FiMail className="group-hover:rotate-12 transition-transform" />
              </span>
            </MagneticButton>
          </Link>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex justify-center space-x-4 md:space-x-6 px-4"
        >
          {[
            { icon: FiGithub, url: 'https://github.com/Harish-11-V', label: 'GitHub', color: 'hover:text-purple-400' },
            { icon: FiLinkedin, url: 'https://www.linkedin.com/in/harish-kumar-v-a412092a2/', label: 'LinkedIn', color: 'hover:text-cyan-400' },
            { icon: FiCode, url: 'https://leetcode.com/u/Harish_v_11/', label: 'LeetCode', color: 'hover:text-orange-400' },
            { icon: FiMail, url: 'mailto:231501057@rajalakshmi.edu.in', label: 'Email', color: 'hover:text-purple-400' },
          ].map((social, index) => (
            <motion.a
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -5, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className={`p-3 md:p-4 glass-interactive rounded-full text-gray-400 ${social.color} transition-all duration-300`}
              aria-label={social.label}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <social.icon className="w-5 h-5 md:w-6 md:h-6" />
            </motion.a>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          variants={itemVariants}
          className="mt-16 md:mt-20 pt-12 md:pt-16 border-t border-gray-700/50"
        >
          <h3 className="text-xl md:text-2xl font-semibold text-gray-300 mb-8 md:mb-10">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              Achievements at a Glance
            </span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 px-2">
            <motion.div
              variants={itemVariants}
              className="glass-interactive p-6 md:p-8 rounded-xl text-center hover:bg-purple-500/10 transition-colors"
            >
              <Counter 
                end={15} 
                duration={2.5} 
                suffix="+" 
                className="text-3xl md:text-4xl font-bold text-purple-400 mb-2"
              />
              <p className="text-sm md:text-base text-gray-400">Projects Completed</p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="glass-interactive p-6 md:p-8 rounded-xl text-center hover:bg-cyan-500/10 transition-colors"
            >
              <Counter 
                end={20} 
                duration={2.5} 
                suffix="+" 
                className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2"
              />
              <p className="text-sm md:text-base text-gray-400">Technologies Mastered</p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="glass-interactive p-6 md:p-8 rounded-xl text-center hover:bg-purple-500/10 transition-colors"
            >
              <Counter 
                end={3} 
                duration={2} 
                suffix=" Yrs" 
                className="text-3xl md:text-4xl font-bold text-purple-400 mb-2"
              />
              <p className="text-sm md:text-base text-gray-400">Experience</p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="glass-interactive p-6 md:p-8 rounded-xl text-center hover:bg-cyan-500/10 transition-colors"
            >
              <Counter 
                end={10} 
                duration={2.5} 
                suffix="+" 
                className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2"
              />
              <p className="text-sm md:text-base text-gray-400">AI/ML Projects</p>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;
