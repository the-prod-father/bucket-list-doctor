'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const PARTICLE_COLORS = [
  '#4A90E2',
  '#50E3C2',
  '#B968E0',
  '#FF6B9D',
  '#FFD93D',
];

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

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      const container = canvas.parentElement;
      if (container) {
        canvas.width = container.clientWidth;
        canvas.height = container.clientHeight;
      }
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
          color: PARTICLE_COLORS[Math.floor(Math.random() * PARTICLE_COLORS.length)],
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

      {/* Sexy 2D Brain Image with Animations */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          {/* Main Brain Image */}
          <div className="relative w-80 h-80 sm:w-96 sm:h-96 md:w-[500px] md:h-[500px]">
            <Image
              src="/images/hero/artistic-brain-hero.png"
              alt="Artistic Brain with World Map"
              fill
              className="object-contain opacity-95 animate-pulse"
              priority
              sizes="(min-width: 1024px) 500px, (min-width: 640px) 384px, 320px"
              style={{
                filter: 'drop-shadow(0 0 30px rgba(255, 100, 150, 0.4)) drop-shadow(0 0 60px rgba(100, 200, 255, 0.3)) drop-shadow(0 0 90px rgba(185, 104, 224, 0.2))',
                animation: 'brainFloat 6s ease-in-out infinite'
              }}
            />
          </div>
          
          {/* Animated Glow Rings */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="absolute w-96 h-96 sm:w-[480px] sm:h-[480px] md:w-[600px] md:h-[600px] rounded-full border-2 border-purple-400/30 animate-spin-slow"></div>
            <div className="absolute w-80 h-80 sm:w-96 sm:h-96 md:w-[500px] md:h-[500px] rounded-full border border-blue-400/40 animate-spin-reverse"></div>
          </div>
          
          {/* Floating Neural Particles */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-float"
                style={{
                  left: `${20 + (i * 7)}%`,
                  top: `${30 + (i * 4)}%`,
                  animationDelay: `${i * 0.5}s`,
                  animationDuration: `${3 + (i % 3)}s`
                }}
              />
            ))}
          </div>
          
          {/* Pulsing Energy Waves */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="absolute w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 animate-ping"></div>
            <div className="absolute w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full bg-gradient-to-r from-pink-500/20 to-yellow-500/20 animate-ping" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
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
          <p className="text-xl sm:text-2xl md:text-3xl text-white/90 mb-4 max-w-3xl drop-shadow-lg font-light">
            Getting the Most from Your Brain and Life.
          </p>
        </div>
        
        <div className={`transform transition-all duration-1000 delay-500 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="flex items-center justify-center space-x-3 sm:space-x-4 md:space-x-5 mb-8">
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 flex-shrink-0">
              <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/30 to-brand-purple/30 rounded-full blur-lg opacity-50" />
              <Image
                src="/images/logos/bld-lite-transparent-cropped.png"
                alt="Bucket List Doctor Logo"
                width={80}
                height={80}
                className="object-contain relative z-10 drop-shadow-lg w-full h-full"
                priority
              />
            </div>
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white drop-shadow-lg">
              Bucket List Doctor
            </p>
          </div>
        </div>
        
        <div className={`transform transition-all duration-1000 delay-700 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <a
            href="https://www.amazon.com/Neuroscience-Bucket-List-Getting-Brain/dp/B0F9NQGHGD/ref=tmm_pap_swatch_0"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-300 hover:to-orange-400 text-gray-900 font-bold py-4 px-10 rounded-xl transition-all transform hover:scale-105 shadow-2xl text-lg md:text-xl"
          >
            Get the Books
          </a>
        </div>
        
      </div>

      {/* Floating book stack - Bottom Right */}
      <div className="absolute bottom-3 right-2 sm:bottom-4 sm:right-4 md:bottom-6 md:right-8 lg:bottom-10 lg:right-12 flex flex-col items-end gap-2 sm:gap-3 md:gap-4 z-20">
        {/* Clickable Books Image */}
        <a
          href="https://www.amazon.com/Neuroscience-Bucket-List-Getting-Brain/dp/B0F9NQGHGD/ref=tmm_pap_swatch_0"
          target="_blank"
          rel="noopener noreferrer"
          className="relative w-20 sm:w-28 md:w-36 lg:w-44 xl:w-52 transition-all transform hover:scale-105 cursor-pointer"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/30 via-brand-blue/30 to-brand-teal/30 blur-3xl rounded-2xl animate-pulse" />
          <div className="relative w-full drop-shadow-2xl">
            <Image
              src="/images/two-books.png"
              alt="The Neuroscience of a Bucket List books"
              width={256}
              height={320}
              className="shadow-2xl w-full h-auto"
              priority
              unoptimized
            />
          </div>
        </a>
        {/* Books Button */}
        <a
          href="/books"
          className="w-20 sm:w-28 md:w-36 lg:w-44 xl:w-52 inline-flex items-center justify-center gap-1 bg-gradient-to-r from-brand-purple to-brand-blue hover:from-brand-blue hover:to-brand-purple text-white font-semibold py-1 px-3 rounded-lg transition-all transform hover:scale-105 shadow-lg pointer-events-auto text-xs whitespace-nowrap"
        >
          <span>Order Books</span>
          <svg className="w-2 h-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>

      {/* Magazine Cover - Bottom Left */}
      <div className="absolute bottom-3 left-2 sm:bottom-4 sm:left-4 md:bottom-6 md:left-8 lg:bottom-10 lg:left-12 flex flex-col items-start gap-2 sm:gap-3 md:gap-4 z-30">
        {/* Clickable Magazine Image */}
        <a
          href="/newsletter"
          className="relative w-16 sm:w-24 md:w-28 lg:w-36 xl:w-44 transition-all transform hover:scale-105 cursor-pointer"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-brand-yellow/30 via-brand-orange/30 to-brand-red/30 blur-3xl rounded-2xl animate-pulse" />
          <div className="relative w-full">
            <Image
              src="/images/hero/bucketlist-magazine-cover.png"
              alt="Your Brain & Bucket Listing Magazine"
              width={256}
              height={320}
              className="rounded-lg w-full h-auto"
              priority
              unoptimized
            />
          </div>
        </a>
        {/* Magazine Button - Centered relative to image */}
        <div className="w-16 sm:w-24 md:w-28 lg:w-36 xl:w-44 flex justify-center">
          <a
            href="/newsletter"
            className="w-20 sm:w-28 md:w-36 lg:w-44 xl:w-52 inline-flex items-center justify-center gap-1 bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-300 hover:to-orange-400 text-gray-900 font-semibold py-1 px-3 rounded-lg transition-all transform hover:scale-105 shadow-lg pointer-events-auto text-xs whitespace-nowrap"
          >
            <span>On-Line Magazine HERE</span>
            <svg className="w-2 h-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>

      {/* Gradient overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/20 pointer-events-none" />
    </div>
  );
}
