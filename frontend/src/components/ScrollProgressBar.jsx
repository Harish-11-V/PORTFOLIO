import React, { useState, useEffect } from 'react';

const ScrollProgressBar = () => {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            
            const totalScrollableHeight = documentHeight - windowHeight;
            const progress = (scrollTop / totalScrollableHeight) * 100;
            
            setScrollProgress(progress);
        };

        window.addEventListener('scroll', handleScroll);
        
        // Initial calculation
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div 
            className="fixed top-0 left-0 h-1 bg-orange-500 z-50 transition-all duration-150 ease-out"
            style={{ width: `${scrollProgress}%` }}
        />
    );
};

export default ScrollProgressBar;
