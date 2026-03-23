import { useState, useEffect } from 'react';
import { motion, useSpring } from 'framer-motion';

const ScrollProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const scaleX = useSpring(0, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      
      const totalScrollableHeight = documentHeight - windowHeight;
      const progress = totalScrollableHeight > 0 ? (scrollTop / totalScrollableHeight) : 0;
      
      setScrollProgress(progress * 100);
      scaleX.set(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [scaleX]);

  // Generate spark positions
  const sparks = Array.from({ length: 8 }, (_, i) => i);

  return (
    <>
      {/* Background track */}
      <div className="fixed top-0 left-0 right-0 h-1.5 bg-gray-950/90 backdrop-blur-md z-[9999] shadow-lg" />
      
      {/* Main progress bar with gradient */}
      <motion.div
        className="fixed top-0 left-0 h-1.5 z-[9999] origin-left overflow-visible"
        style={{
          scaleX,
          background: 'linear-gradient(90deg, #a855f7 0%, #ec4899 25%, #06b6d4 50%, #8b5cf6 75%, #a855f7 100%)',
          boxShadow: '0 0 30px rgba(168, 85, 247, 0.8), 0 0 60px rgba(6, 182, 212, 0.6), 0 4px 20px rgba(0, 0, 0, 0.5)',
          backgroundSize: '200% 100%'
        }}
        animate={{
          backgroundPosition: ['0% 0%', '100% 0%', '0% 0%']
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'linear'
        }}
      >
        {/* Shimmer effect */}
        <motion.div
          className="absolute inset-0 h-full"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.4) 50%, transparent 100%)',
          }}
          animate={{
            x: ['-100%', '200%']
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'linear'
          }}
        />
        
        {/* Flowing particles inside bar */}
        {sparks.map((_, index) => (
          <motion.div
            key={index}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${(index / sparks.length) * 100}%`,
              top: '50%',
              y: '-50%',
            }}
            animate={{
              x: [0, 200],
              opacity: [0, 1, 1, 0],
              scale: [0, 1.5, 1, 0]
            }}
            transition={{
              duration: 2,
              delay: index * 0.3,
              repeat: Infinity,
              ease: 'linear'
            }}
          />
        ))}
      </motion.div>
      
      {/* Leading edge glow */}
      <motion.div
        className="fixed top-0 z-[9999] pointer-events-none"
        style={{
          left: `${scrollProgress}%`,
          transform: 'translateX(-50%)',
        }}
      >
        {/* Pulsing glow */}
        <motion.div
          className="w-8 h-8 -mt-3 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(168, 85, 247, 0.8) 0%, rgba(6, 182, 212, 0.6) 50%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.6, 1, 0.6]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
        
        {/* Sparks shooting from the edge */}
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400"
            style={{
              left: '50%',
              top: '50%',
            }}
            animate={{
              x: [0, (Math.random() - 0.5) * 40],
              y: [0, (Math.random() - 0.5) * 40],
              opacity: [1, 0],
              scale: [1, 0]
            }}
            transition={{
              duration: 0.8,
              delay: i * 0.15,
              repeat: Infinity,
              ease: 'easeOut'
            }}
          />
        ))}
        
        {/* Central bright core */}
        <div 
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white"
          style={{
            boxShadow: '0 0 15px rgba(255, 255, 255, 1), 0 0 30px rgba(168, 85, 247, 0.8)'
          }}
        />
      </motion.div>
      
      {/* Top edge highlight */}
      <motion.div
        className="fixed top-0 left-0 h-0.5 z-[9999] origin-left"
        style={{
          scaleX,
          background: 'linear-gradient(90deg, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.4) 100%)',
          filter: 'blur(0.5px)'
        }}
      />
    </>
  );
};

export default ScrollProgressBar;
