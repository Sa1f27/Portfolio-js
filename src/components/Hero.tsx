import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, FileText, X, Download, ChevronDown } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';

const ParticleEffect = () => {
  const [particles, setParticles] = useState([]);
  
  useEffect(() => {
    const createParticle = () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 3 + 1,
      speedX: (Math.random() - 0.5) * 2,
      speedY: (Math.random() - 0.5) * 2,
      opacity: Math.random() * 0.5 + 0.3,
    });

    const particleCount = 50;
    const initialParticles = Array.from({ length: particleCount }, createParticle);
    setParticles(initialParticles);

    const animateParticles = () => {
      setParticles(prevParticles =>
        prevParticles.map(particle => ({
          ...particle,
          x: (particle.x + particle.speedX + window.innerWidth) % window.innerWidth,
          y: (particle.y + particle.speedY + window.innerHeight) % window.innerHeight,
        }))
      );
    };

    const interval = setInterval(animateParticles, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none">
      {particles.map((particle, index) => (
        <div
          key={index}
          className="absolute rounded-full bg-blue-400"
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity,
            transform: 'translate(-50%, -50%)',
          }}
        />
      ))}
    </div>
  );
};

const ScrollIndicator = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`absolute bottom-12 left-1/2 -translate-x-1/2 transition-opacity duration-500 ${
      isVisible ? 'opacity-100' : 'opacity-0'
    }`}>
      <div className="flex flex-col items-center gap-2">
        <span className="text-blue-400 text-sm">Scroll to explore</span>
        <div className="animate-bounce">
          <ChevronDown className="text-blue-400 w-6 h-6" />
        </div>
      </div>
    </div>
  );
};

// New MouseTrailer effect
const MouseTrailer = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Check if cursor is over a clickable element
      const target = e.target;
      setIsPointer(
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.tagName.toLowerCase() === 'button' ||
        target.tagName.toLowerCase() === 'a'
      );
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      className="fixed inset-0 pointer-events-none z-50"
      style={{ perspective: '500px' }}
    >
      <div
        className={`fixed w-8 h-8 rounded-full transition-transform duration-200 pointer-events-none
                   mix-blend-screen ${isPointer ? 'scale-150' : 'scale-100'}`}
        style={{
          background: 'radial-gradient(circle, rgba(96, 165, 250, 0.3) 0%, transparent 70%)',
          left: position.x - 16,
          top: position.y - 16,
          transform: `translate(-50%, -50%) ${isPointer ? 'scale(2)' : 'scale(1)'}`,
        }}
      />
    </div>
  );
};

// New CircuitLines component
const CircuitLines = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <svg width="100%" height="100%" className="opacity-20">
        <defs>
          <pattern id="circuit-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <path
              d="M10 10 L90 10 M50 10 L50 90 M10 50 L90 50 M10 90 L90 90"
              stroke="rgba(96, 165, 250, 0.3)"
              strokeWidth="0.5"
              fill="none"
            />
            <circle cx="50" cy="50" r="2" fill="rgba(96, 165, 250, 0.5)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#circuit-pattern)" />
      </svg>
    </div>
  );
};

export default function Hero() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/Sa1f27',
      label: 'GitHub',
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/huzaifah-27o3/',
      label: 'LinkedIn',
    },
    {
      icon: Mail,
      href: 'mailto:huzaif027@gmail.com',
      label: 'Email',
    },
    {
      icon: Phone,
      href: 'tel:+916300940175',
      label: 'Phone',
    },
    {
      icon: FileText,
      label: 'Resume',
      isResume: true,
    },
  ];

  const handleDownloadResume = () => {
    const resumeUrl = "https://drive.google.com/uc?export=download&id=1EvyvcJoLZDoNe81qnk8KXDkkB3Xu6WHJ";
    window.open(resumeUrl, '_blank');
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-violet-950/50 to-black/50" />
      
      {/* Animated Particles */}
      <ParticleEffect />
      <CircuitLines />
      <MouseTrailer />
      {/* Cyberpunk Grid */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'radial-gradient(circle at center, rgba(66, 153, 225, 0.1) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          transform: `translate(${(mousePosition.x - window.innerWidth / 2) * 0.02}px, ${(mousePosition.y - window.innerHeight / 2) * 0.02}px)`,
        }}
      />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in-up">
          {/* Name with Glitch Effect */}
          <h1 className="relative text-5xl md:text-7xl font-bold mb-6 inline-block">
            <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">
              Mohammed Huzaifah
            </span>
            <span className="absolute top-0 left-0 -translate-x-1 translate-y-1 text-blue-400/50 blur-[1px] select-none">
              Mohammed Huzaifah
            </span>
          </h1>
          
          {/* Animated Role Text */}
          <div className="text-xl md:text-2xl text-violet-300 mb-8 h-12">
            <TypeAnimation
              sequence={[
                'MLOps Engineer',
                2000,
                'GenAI Enthusiast',
                2000,
                'ML / Deep Learning Specialist',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="relative"
            />
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 relative">
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              const baseClasses = `
                relative overflow-hidden text-blue-400 hover:text-blue-300 transition-all p-2 rounded-lg
                backdrop-blur-sm bg-blue-950/20 border border-blue-500/20
                hover:bg-blue-900/30 hover:border-blue-400/30 flex flex-col items-center gap-2
                hover:scale-110 hover:rotate-3 duration-300
              `;

              if (link.isResume) {
                return (
                  <button
                    key={link.label}
                    onClick={() => setIsResumeOpen(true)}
                    className={baseClasses}
                  >
                    <Icon size={24} />
                    <span className="text-xs">{link.label}</span>
                  </button>
                );
              }

              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={baseClasses}
                >
                  <Icon size={24} />
                  <span className="text-xs">{link.label}</span>
                </a>
              );
            })}
          </div>

          {/* Contact Button */}
          <div className="mt-12">
            <a
              href="#contact"
              className="relative inline-block px-8 py-3 text-blue-400 border border-blue-500/20 rounded-full
                       backdrop-blur-sm bg-blue-950/20 hover:bg-blue-900/30 hover:border-blue-400/30
                       transition-all duration-300 hover:scale-105"
            >
              <span>Get in Touch</span>
            </a>
          </div>
        </div>
        
      </div>
      <ScrollIndicator />

      {/* Resume Modal */}
      {isResumeOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-4xl bg-blue-950/90 rounded-lg border border-blue-500/20 p-1">
            <div className="absolute right-2 top-2 flex gap-2 z-10">
              <button
                onClick={handleDownloadResume}
                className="text-white hover:text-gray-300 p-1 rounded-lg
                          backdrop-blur-sm bg-gray-800 border border-gray-700
                          hover:bg-gray-700 hover:border-gray-600 flex items-center gap-1"
              >
                <Download size={20} />
                <span className="text-xs">Download</span>
              </button>

              <button
                onClick={() => setIsResumeOpen(false)}
                className="text-blue-400 hover:text-blue-300 p-1 rounded-lg
                         backdrop-blur-sm bg-blue-950/20 border border-blue-500/20
                         hover:bg-blue-900/30 hover:border-blue-400/30"
              >
                <X size={20} />
              </button>
            </div>
            <iframe
              src="https://drive.google.com/file/d/1EvyvcJoLZDoNe81qnk8KXDkkB3Xu6WHJ/preview"
              className="w-full h-[80vh] rounded-lg"
              allow="autoplay"
            />
          </div>
        </div>
      )}
    </section>
  );
}