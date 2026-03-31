import { motion } from 'framer-motion';

const ScrollIndicator = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2 }}
    >
      <div className="w-8 h-12 border-2 border-purple-500 rounded-full flex justify-center shadow-[0_0_15px_rgba(168,85,247,0.4)]">
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-1.5 h-3 bg-cyan-400 rounded-full mt-2 shadow-[0_0_10px_rgba(34,211,238,0.8)]"
        />
      </div>
    </motion.div>
  );
};

export default ScrollIndicator;
