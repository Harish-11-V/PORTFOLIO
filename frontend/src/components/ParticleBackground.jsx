import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const ParticleBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Particle system with themed icons
    const particles = [];
    const particleCount = 80;
    
    // Theme symbols: sustainability, tech, AI, space
    const symbols = ['🌍', '♻️', '🌱', '💡', '🚀', '🛰️', '⚡', '🔬', '🤖', '💻', '⭐', '🌟'];
    
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.opacity = Math.random() * 0.5 + 0.2;
        this.isSymbol = Math.random() > 0.85;
        this.symbol = symbols[Math.floor(Math.random() * symbols.length)];
        this.symbolSize = Math.random() * 10 + 15;
        this.rotation = Math.random() * Math.PI * 2;
        this.rotationSpeed = (Math.random() - 0.5) * 0.02;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.rotation += this.rotationSpeed;

        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        if (this.isSymbol) {
          ctx.save();
          ctx.globalAlpha = this.opacity * 0.6;
          ctx.font = `${this.symbolSize}px Arial`;
          ctx.translate(this.x, this.y);
          ctx.rotate(this.rotation);
          ctx.fillText(this.symbol, 0, 0);
          ctx.restore();
        } else {
          ctx.globalAlpha = this.opacity;
          const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size);
          gradient.addColorStop(0, 'rgba(168, 85, 247, 0.8)');
          gradient.addColorStop(0.5, 'rgba(6, 182, 212, 0.5)');
          gradient.addColorStop(1, 'rgba(139, 92, 246, 0)');
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Animation loop
    let animationId;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      // Draw connections between nearby particles
      ctx.globalAlpha = 0.1;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(168, 85, 247, ${1 - distance / 120})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-0"
        style={{ opacity: 0.6 }}
      />
      
      {/* Rotating Globe */}
      <motion.div
        className="fixed pointer-events-none z-0"
        style={{
          right: '5%',
          top: '15%',
          fontSize: '120px',
          opacity: 0.15
        }}
        animate={{
          rotate: 360
        }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: 'linear'
        }}
      >
        🌍
      </motion.div>
      
      {/* Floating Rocket */}
      <motion.div
        className="fixed pointer-events-none z-0"
        style={{
          left: '8%',
          bottom: '20%',
          fontSize: '80px',
          opacity: 0.2
        }}
        animate={{
          y: [-20, 20, -20],
          rotate: [-5, 5, -5]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      >
        🚀
      </motion.div>
      
      {/* Orbiting Satellite */}
      <motion.div
        className="fixed pointer-events-none z-0"
        style={{
          right: '15%',
          bottom: '25%',
          fontSize: '60px',
          opacity: 0.18
        }}
        animate={{
          x: [0, 30, 0],
          y: [0, -30, 0],
          rotate: [0, 360]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'linear'
        }}
      >
        🛰️
      </motion.div>
    </>
  );
};

export default ParticleBackground;
