import { motion } from 'framer-motion';

const LoadingSpinner = ({ size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
  };

  return (
    <div className="flex items-center justify-center">
      <motion.div
        className={`${sizeClasses[size]} border-4 border-gray-700 border-t-primary-500 rounded-full`}
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
    </div>
  );
};

export default LoadingSpinner;
