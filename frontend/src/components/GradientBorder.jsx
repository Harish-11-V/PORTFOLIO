import { motion } from 'framer-motion';

const GradientBorder = ({ children, className = '', animate = false }) => {
  return (
    <motion.div
      className={`relative rounded-2xl p-[2px] bg-gradient-to-r from-primary-500 via-secondary-400 to-primary-500 ${
        animate ? 'bg-[length:200%_200%] animate-gradient' : ''
      } ${className}`}
      whileHover={animate ? { backgroundPosition: ['0% 50%', '100% 50%'] } : {}}
      transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
    >
      <div className="bg-gray-950 rounded-2xl h-full w-full">
        {children}
      </div>
    </motion.div>
  );
};

export default GradientBorder;
