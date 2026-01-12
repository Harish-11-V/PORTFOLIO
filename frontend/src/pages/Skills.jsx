import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { FaCode, FaServer } from 'react-icons/fa';

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSkills();
  }, []);

  const fetchSkills = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/skills`);
      setSkills(response.data);
    } catch (error) {
      console.error('Error fetching skills:', error);
      setSkills(sampleSkills);
    } finally {
      setLoading(false);
    }
  };

  const sampleSkills = [
    { _id: '1', name: 'React.js', category: 'Frontend Development', proficiency: 90 },
    { _id: '2', name: 'JavaScript', category: 'Frontend Development', proficiency: 88 },
    { _id: '3', name: 'HTML & CSS', category: 'Frontend Development', proficiency: 92 },
    { _id: '4', name: 'Python', category: 'Frontend Development', proficiency: 90 },
    { _id: '5', name: 'Java', category: 'Frontend Development', proficiency: 85 },
    { _id: '6', name: 'C Programming', category: 'Frontend Development', proficiency: 82 },
    { _id: '7', name: 'Node.js', category: 'Backend Development', proficiency: 85 },
    { _id: '8', name: 'MongoDB', category: 'Backend Development', proficiency: 88 },
    { _id: '9', name: 'MySQL', category: 'Backend Development', proficiency: 80 },
    { _id: '10', name: 'Git & GitHub', category: 'Backend Development', proficiency: 87 },
    { _id: '11', name: 'TensorFlow', category: 'Backend Development', proficiency: 83 },
    { _id: '12', name: 'PyTorch', category: 'Backend Development', proficiency: 82 },
    { _id: '13', name: 'Arduino & IoT', category: 'Backend Development', proficiency: 78 },
    { _id: '14', name: 'OpenCV', category: 'Backend Development', proficiency: 80 },
  ];

  const frontendSkills = skills.filter(s => 
    s.category === 'Frontend Development' || s.category === 'Frontend'
  );
  const backendSkills = skills.filter(s => 
    s.category === 'Backend Development' || s.category === 'Backend'
  );

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
    <div className="min-h-screen py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-3xl md:text-4xl font-light text-gray-300 mb-4">
            Expertise and technologies I work with
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Frontend Development */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-full bg-primary-500/20 backdrop-blur-sm flex items-center justify-center border border-primary-500/30">
                <FaCode className="text-2xl text-primary-400" />
              </div>
              <h2 className="text-2xl font-bold text-white">Frontend Development</h2>
            </div>
            
            <div className="space-y-5">
              {frontendSkills.map((skill, index) => (
                <SkillBar key={skill._id} skill={skill} index={index} />
              ))}
            </div>
          </motion.div>

          {/* Backend Development */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-full bg-primary-500/20 backdrop-blur-sm flex items-center justify-center border border-primary-500/30">
                <FaServer className="text-2xl text-primary-400" />
              </div>
              <h2 className="text-2xl font-bold text-white">Backend Development</h2>
            </div>
            
            <div className="space-y-5">
              {backendSkills.map((skill, index) => (
                <SkillBar key={skill._id} skill={skill} index={index} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const SkillBar = ({ skill, index }) => {
  const cardRef = useRef(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateXValue = ((y - centerY) / centerY) * -10;
    const rotateYValue = ((x - centerX) / centerX) * 10;
    
    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      animate={{ 
        opacity: 1, 
        y: 0
      }}
      transition={{ 
        opacity: { delay: index * 0.1 },
        y: { delay: index * 0.1 }
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.02 }}
      className="group relative bg-gray-900/90 backdrop-blur-xl border border-gray-800/60 rounded-2xl p-6 hover:border-purple-500/40 transition-all duration-300 cursor-pointer overflow-hidden"
      style={{
        backgroundColor: 'rgba(15, 15, 25, 0.85)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transition: 'transform 0.3s ease-out'
      }}
    >
      {/* Background gradient blur effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/15 via-transparent to-cyan-900/15 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Shimmer effect on hover */}
      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      
      {/* Left gradient border */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 via-purple-600 to-cyan-500 rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative z-10">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-300">
            {skill.name}
          </h3>
          <motion.span 
            className="text-sm font-bold text-purple-400"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: index * 0.1 + 0.5, type: 'spring' }}
          >
            {skill.proficiency}%
          </motion.span>
        </div>
        
        <div className="relative h-2.5 bg-gray-800/80 rounded-full overflow-hidden">
          {/* Background glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 animate-pulse" />
          
          {/* Progress bar */}
          <motion.div
            className="relative h-full rounded-full bg-gradient-to-r from-purple-600 via-purple-500 to-cyan-400"
            initial={{ width: 0 }}
            animate={{ width: `${skill.proficiency}%` }}
            transition={{ 
              duration: 1.2, 
              delay: index * 0.1 + 0.3,
              ease: [0.4, 0, 0.2, 1]
            }}
            style={{
              boxShadow: '0 0 20px rgba(168, 85, 247, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
            }}
          >
            {/* Animated shine effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              animate={{
                x: ['-100%', '200%'],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 1,
                ease: 'easeInOut',
              }}
            />
          </motion.div>
        </div>
        
        {/* Percentage indicator */}
        <motion.div
          className="mt-2 text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={{ y: 10 }}
          animate={{ y: 0 }}
        >
          <div className="flex items-center gap-1">
            <div className="flex-1 h-1 bg-gradient-to-r from-purple-600 to-cyan-400 rounded-full" style={{ width: `${skill.proficiency}%` }} />
            <span className="text-xs font-medium text-purple-400">Expert</span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Skills;
