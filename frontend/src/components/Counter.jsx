import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const Counter = ({ end, duration = 2, suffix = '+', className = '' }) => {
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            let start = 0;
            const increment = end / (duration * 60); // 60fps
            
            const timer = setInterval(() => {
              start += increment;
              if (start >= end) {
                setCount(end);
                clearInterval(timer);
              } else {
                setCount(Math.ceil(start));
              }
            }, 1000 / 60);

            return () => clearInterval(timer);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [end, duration, hasAnimated]);

  return (
    <motion.h3
      ref={counterRef}
      className={`text-4xl md:text-5xl font-bold text-primary-400 ${className}`}
      initial={{ scale: 0 }}
      animate={hasAnimated ? { scale: 1 } : { scale: 0 }}
      transition={{ type: 'spring', stiffness: 100 }}
    >
      {count}{suffix}
    </motion.h3>
  );
};

export default Counter;
