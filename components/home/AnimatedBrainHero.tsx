'use client';

import { useEffect, useRef, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
  life: number;
  maxLife: number;
}

export default function AnimatedBrainHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  // Particle colors inspired by your brand
  const particleColors = [
    '#4A90E2', // Brand blue
    '#50E3C2', // Brand teal
    '#B968E0', // Brand purple
    '#FF6B9D', // Brand pink
    '#FFD93D', // Brand yellow
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Mouse tracking
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Create initial particles
    const createParticles = () => {
      const particles: Particle[] = [];
      for (let i = 0; i < 150; i++) {
        particles.push({
          id: i,
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.8 + 0.2,
          color: particleColors[Math.floor(Math.random() * particleColors.length)],
          life: Math.random() * 100,
          maxLife: 100,
        });
      }
      particlesRef.current = particles;
    };

    createParticles();

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particlesRef.current.forEach((particle) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life -= 0.5;

        // Mouse interaction
        const dx = mouseRef.current.x - particle.x;
        const dy = mouseRef.current.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 100) {
          const force = (100 - distance) / 100;
          particle.vx += (dx / distance) * force * 0.01;
          particle.vy += (dy / distance) * force * 0.01;
        }

        // Apply friction
        particle.vx *= 0.99;
        particle.vy *= 0.99;

        // Wrap around screen
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Reset life if needed
        if (particle.life <= 0) {
          particle.life = particle.maxLife;
        }

        // Draw particle
        const alpha = (particle.life / particle.maxLife) * particle.opacity;
        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      // Draw connections between nearby particles
      particlesRef.current.forEach((particle, i) => {
        particlesRef.current.slice(i + 1).forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 80) {
            const alpha = (1 - distance / 80) * 0.3;
            ctx.save();
            ctx.globalAlpha = alpha;
            ctx.strokeStyle = particle.color;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
            ctx.restore();
          }
        });
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();
    setIsLoaded(true);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div className="relative h-[70vh] md:h-[80vh] w-full overflow-hidden">
      {/* Animated Background Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ background: 'radial-gradient(circle at center, #1a1a2e 0%, #16213e 50%, #0f1419 100%)' }}
      />

      {/* Brain SVG Overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <svg
          width="400"
          height="400"
          viewBox="0 0 400 400"
          className="opacity-20 animate-pulse"
        >
          <defs>
            <linearGradient id="brainGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4A90E2" />
              <stop offset="25%" stopColor="#50E3C2" />
              <stop offset="50%" stopColor="#B968E0" />
              <stop offset="75%" stopColor="#FF6B9D" />
              <stop offset="100%" stopColor="#FFD93D" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* Brain silhouette */}
          <path
            d="M200 50 C150 60, 120 90, 120 140 C120 160, 130 180, 150 190 C140 210, 130 230, 140 250 C150 270, 170 280, 200 280 C230 280, 250 270, 260 250 C270 230, 260 210, 250 190 C270 180, 280 160, 280 140 C280 90, 250 60, 200 50 Z"
            fill="url(#brainGradient)"
            filter="url(#glow)"
          />
          
          {/* Neural pathways */}
          <path
            d="M160 100 Q180 120, 200 100 Q220 120, 240 100"
            stroke="#4A90E2"
            strokeWidth="2"
            fill="none"
            opacity="0.6"
          >
            <animate
              attributeName="opacity"
              values="0.3;0.8;0.3"
              dur="2s"
              repeatCount="indefinite"
            />
          </path>
          
          <path
            d="M150 150 Q170 170, 190 150 Q210 170, 230 150"
            stroke="#50E3C2"
            strokeWidth="2"
            fill="none"
            opacity="0.6"
          >
            <animate
              attributeName="opacity"
              values="0.8;0.3;0.8"
              dur="2.5s"
              repeatCount="indefinite"
            />
          </path>
          
          <path
            d="M170 200 Q190 220, 210 200 Q230 220, 250 200"
            stroke="#B968E0"
            strokeWidth="2"
            fill="none"
            opacity="0.6"
          >
            <animate
              attributeName="opacity"
              values="0.4;0.9;0.4"
              dur="1.8s"
              repeatCount="indefinite"
            />
          </path>
        </svg>
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 px-4">
        <div className={`transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold text-white mb-6 drop-shadow-2xl">
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
              The Neuroscience
            </span>
            <span className="block bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent mt-2">
              of a Bucket List
            </span>
          </h1>
        </div>
        
        <div className={`transform transition-all duration-1000 delay-300 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <p className="text-xl sm:text-2xl md:text-3xl text-white/90 mb-8 max-w-3xl drop-shadow-lg font-light">
            Getting the most from your brain and life
          </p>
        </div>
        
        <div className={`transform transition-all duration-1000 delay-500 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <a
            href="https://www.amazon.com/dp/B0DJHB1QSN"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-300 hover:to-orange-400 text-gray-900 font-bold py-4 px-10 rounded-xl transition-all transform hover:scale-105 shadow-2xl text-lg md:text-xl"
          >
            Get the Book
          </a>
        </div>
      </div>

      {/* Gradient overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/20 pointer-events-none" />
    </div>
  );
}
