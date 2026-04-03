import { useEffect, useRef, useState } from 'react';

const CustomCursor = () => {
  const cursorDotRef = useRef(null);
  const cursorOutlineRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    let mouseX = 0;
    let mouseY = 0;
    let outlineX = 0;
    let outlineY = 0;
    let isHovering = false;
    let isActive = false;
    
    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isActive) {
        outlineX = mouseX;
        outlineY = mouseY;
        isActive = true;
      }

      if (cursorDotRef.current) {
        cursorDotRef.current.style.transform = `translate3d(${mouseX - 4}px, ${mouseY - 4}px, 0) scale(${isHovering ? 1.5 : 1})`;
      }

      // Hover styles Check
      const target = e.target;
      isHovering =
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('button') ||
        target.closest('a') ||
        target.getAttribute('role') === 'button' ||
        window.getComputedStyle(target).cursor === 'pointer';

      if (cursorOutlineRef.current && cursorDotRef.current) {
        if (isHovering) {
          cursorOutlineRef.current.style.borderColor = '#06b6d4';
          cursorDotRef.current.style.backgroundColor = '#06b6d4';
        } else {
          cursorOutlineRef.current.style.borderColor = '#a78bfa';
          cursorDotRef.current.style.backgroundColor = '#a78bfa';
        }
        cursorDotRef.current.style.transform = `translate3d(${mouseX - 4}px, ${mouseY - 4}px, 0) scale(${isHovering ? 1.5 : 1})`;
      }
    };

    // Smooth trailing animation loop for the outline
    let animId;
    const animate = () => {
      outlineX += (mouseX - outlineX) * 0.2; // Ease towards mouse
      outlineY += (mouseY - outlineY) * 0.2;

      if (cursorOutlineRef.current) {
        cursorOutlineRef.current.style.transform = `translate3d(${outlineX - 16}px, ${outlineY - 16}px, 0) scale(${isHovering ? 1.5 : 1})`;
      }
      
      animId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animId);
    };
  }, [isMobile]);

  useEffect(() => {
    if (!isMobile) {
      document.documentElement.style.cursor = 'none';
    } else {
      document.documentElement.style.cursor = 'auto';
    }
    return () => {
      document.documentElement.style.cursor = 'auto';
    };
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <>
      <div
        ref={cursorOutlineRef}
        className="fixed top-0 left-0 w-8 h-8 border-2 border-purple-400 rounded-full pointer-events-none z-[9999] mix-blend-screen transition-colors duration-200"
      />
      <div
        ref={cursorDotRef}
        className="fixed top-0 left-0 w-2 h-2 bg-purple-400 rounded-full pointer-events-none z-[9999] transition-colors duration-200"
      />
    </>
  );
};

export default CustomCursor;
