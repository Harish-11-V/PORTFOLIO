import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const cursorDotRef = useRef(null);
  const cursorOutlineRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // Skip custom cursor on mobile devices
    if (isMobile) return;

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Check if hovering over interactive element
      const target = e.target;
      const isInteractive =
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('button') ||
        target.closest('a') ||
        target.getAttribute('role') === 'button' ||
        window.getComputedStyle(target).cursor === 'pointer';

      setIsPointer(isInteractive);
    };

    const handleMouseLeave = () => {
      setIsPointer(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isMobile]);

  // Hide native cursor
  useEffect(() => {
    if (!isMobile) {
      document.documentElement.style.cursor = 'none';
    }
    return () => {
      document.documentElement.style.cursor = 'auto';
    };
  }, [isMobile]);

  // Don't render on mobile
  if (isMobile) return null;

  return (
    <>
      {/* Outer ring */}
      <motion.div
        ref={cursorOutlineRef}
        className="fixed w-8 h-8 border-2 border-purple-400 rounded-full pointer-events-none z-[9999] mix-blend-screen"
        animate={{
          x: position.x - 16,
          y: position.y - 16,
          scale: isPointer ? 1.5 : 1,
          borderColor: isPointer ? '#06b6d4' : '#a78bfa',
        }}
        transition={{
          type: 'spring',
          stiffness: 150,
          damping: 30,
          mass: 0.5,
        }}
      />

      {/* Inner dot */}
      <motion.div
        ref={cursorDotRef}
        className="fixed w-2 h-2 bg-purple-400 rounded-full pointer-events-none z-[9999]"
        animate={{
          x: position.x - 4,
          y: position.y - 4,
          scale: isPointer ? 1.5 : 1,
          backgroundColor: isPointer ? '#06b6d4' : '#a78bfa',
        }}
        transition={{
          type: 'spring',
          stiffness: 200,
          damping: 40,
          mass: 0.3,
        }}
      />
    </>
  );
};

export default CustomCursor;
