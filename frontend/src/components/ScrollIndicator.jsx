import { motion } from 'framer-motion';
import { FiArrowDown } from 'react-icons/fi';

const ScrollIndicator = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2 }}
      className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
    >
      <div className="w-8 h-12 border-2 border-primary-500 rounded-full flex justify-center">
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-1.5 h-3 bg-primary-500 rounded-full mt-2"
        />
      </div>
    </motion.div>
  );
};

export default ScrollIndicator;
