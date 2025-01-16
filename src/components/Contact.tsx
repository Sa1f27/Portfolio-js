import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, MessageCircle } from 'lucide-react';

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

    const particleCount = 30;
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

export default function Contact() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'huzaif027@gmail.com',
      link: 'mailto:huzaif027@gmail.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      content: ['+91 6300940175'],
      link: 'tel:+916300940175',
    },
    {
      icon: MessageCircle,
      title: 'Whatsapp',
      content: '+91 9014038540',
      link: 'tel:+919014038540',
    },
    {
      icon: MapPin,
      title: 'Location',
      content: 'Hyderabad, Telangana',
      link: 'https://maps.google.com/?q=Hyderabad,Telangana',
    },
    {
      icon: Github,
      title: 'GitHub',
      content: '@Sa1f27',
      link: 'https://github.com/Sa1f27',
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      content: 'Mohammed Huzaifah',
      link: 'https://www.linkedin.com/in/huzaifah-27o3/',
    }
  ];

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-black to-violet-950/50">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-violet-950/30 to-black/30" />
      
      {/* Animated Particles */}
      <ParticleEffect />

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-20">
        <h2 className="text-5xl font-bold mb-16 text-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">
            Get in Touch
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <a
                key={index}
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className={`
                  p-6 rounded-xl backdrop-blur-sm
                  border border-blue-500/20 bg-blue-950/20
                  hover:bg-blue-900/30 hover:border-blue-400/30
                  transition-all duration-300
                  ${hoveredCard === index ? 'scale-105' : ''}
                  flex flex-col items-center text-center
                `}>
                  <Icon size={32} className="text-blue-400 mb-4" />
                  <h3 className="text-xl font-semibold text-blue-400 mb-2">{info.title}</h3>
                  {Array.isArray(info.content) ? (
                    info.content.map((item, i) => (
                      <p key={i} className="text-violet-300">{item}</p>
                    ))
                  ) : (
                    <p className="text-violet-300">{info.content}</p>
                  )}
                  <ExternalLink 
                    size={16} 
                    className="absolute top-3 right-3 text-blue-400/50 group-hover:text-blue-400 transition-all duration-300"
                  />
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}