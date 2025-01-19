import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Heart, Sparkles, Code } from 'lucide-react';


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

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="about" className="min-h-screen py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-black to-violet-950/30" />
      
      {/* Animated Particles */}
      <ParticleEffect />

      {/* Cyberpunk Grid with Mouse Parallax */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle at center, rgba(66, 153, 225, 0.2) 1px, transparent 1px)',
          backgroundSize: '30px 30px',
          transform: `translate(${(mousePosition.x - window.innerWidth / 2) * 0.02}px, ${(mousePosition.y - window.innerHeight / 2) * 0.02}px)`,
        }}
      />
      
      <motion.div
        ref={ref}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.h2
          className="text-5xl font-bold mb-16 text-center"
          variants={itemVariants}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">
            About Me
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div 
            className="space-y-6"
            variants={itemVariants}
          >
            <motion.div
              className="backdrop-blur-sm rounded-xl p-6 bg-blue-950/20 border border-blue-500/20
                         hover:bg-blue-900/30 hover:border-blue-400/30 transition-all duration-300
                         group relative overflow-hidden"
              whileHover={{ scale: 1.02 }}
            >
              {/* Animated gradient background */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-violet-500/10 to-blue-500/10 opacity-0 
                           group-hover:opacity-100 transition-opacity duration-500" />

              <p className="text-violet-300 leading-relaxed relative">
                I'm Mohammed Huzaifah, a Computer Science student and ML Engineer who believes AI should solve real problems, not just look cool on paper. I love turning complex problems into elegant solutions - whether that's building AI platforms or contributing to open-source projects. My hands-on experience ranges from deep learning to MLOps, and I'm always excited to learn new tools and technologies...
              </p>
            </motion.div>

            <motion.div
              className="backdrop-blur-sm rounded-xl p-6 bg-blue-950/20 border border-blue-500/20
                         hover:bg-blue-900/30 hover:border-blue-400/30 transition-all duration-300
                         group relative overflow-hidden"
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-violet-500/10 to-blue-500/10 opacity-0 
                           group-hover:opacity-100 transition-opacity duration-500" />

              <p className="text-violet-300 leading-relaxed relative">
                Why work with me? I bring a unique blend of technical skills and practical thinking. I don't just build models; I build solutions that matter. My projects in healthcare and my active involvement in hackathons show I can deliver under pressure while keeping the end-user in mind.
                Currently looking for opportunities to create impact through AI - let's build something meaningful together!
              </p>
            </motion.div>
          </motion.div>

          <div className="space-y-6">
            <motion.div
              className="backdrop-blur-sm rounded-xl p-6 bg-blue-950/20 border border-blue-500/20
                         hover:bg-blue-900/30 hover:border-blue-400/30 transition-all duration-300
                         group relative overflow-hidden"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              onMouseEnter={() => setHoveredCard('education')}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Animated gradient background */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-violet-500/10 to-blue-500/10 opacity-0 
                           group-hover:opacity-100 transition-opacity duration-500" />

              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-blue-900/50 border border-blue-500/30">
                  <GraduationCap size={24} className="text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-blue-300">Education</h3>
              </div>

              <div className="space-y-2 relative">
                <p className="text-violet-300">
                  Bachelor of Engineering in Computer Science
                </p>
                <p className="text-violet-300">
                  Specialization: AI and Machine Learning
                </p>
                <p className="text-violet-300">
                  CGPA: 8.6
                </p>
              </div>

              {/* Corner accent */}
              <div className="absolute -top-1 -right-1 w-16 h-16 bg-gradient-to-br from-blue-500/20 to-violet-500/20 
                           opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform rotate-45" />
            </motion.div>

            <motion.div
              className="backdrop-blur-sm rounded-xl p-6 bg-blue-950/20 border border-blue-500/20
                         hover:bg-blue-900/30 hover:border-blue-400/30 transition-all duration-300
                         group relative overflow-hidden"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              onMouseEnter={() => setHoveredCard('interests')}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-violet-500/10 to-blue-500/10 opacity-0 
                           group-hover:opacity-100 transition-opacity duration-500" />

              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-blue-900/50 border border-blue-500/30">
                  <Heart size={24} className="text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-blue-300">Interests</h3>
              </div>

              <div className="space-y-3 relative">
                <div className="flex items-center gap-2 group/item">
                  <Sparkles size={16} className="text-blue-400" />
                  <p className="text-violet-300 group-hover/item:text-blue-300 transition-colors">
                    Latest advancements in AI & Generative Models
                  </p>
                </div>
                <div className="flex items-center gap-2 group/item">
                  <Code size={16} className="text-blue-400" />
                  <p className="text-violet-300 group-hover/item:text-blue-300 transition-colors">
                    MLOps & GenAI Technologies
                  </p>
                </div>
                <div className="flex items-center gap-2 group/item">
                  <Heart size={16} className="text-blue-400" />
                  <p className="text-violet-300 group-hover/item:text-blue-300 transition-colors">
                    Football enthusiast and Real Madrid supporter
                  </p>
                </div>
                <div className="flex items-center gap-2 group/item">
                  <Sparkles size={16} className="text-blue-400" />
                  <p className="text-violet-300 group-hover/item:text-blue-300 transition-colors">
                    Hackathons & Collaborative Projects
                  </p>
                </div>
                <div className="flex items-center gap-2 group/item">
                  <Code size={16} className="text-blue-400" />
                  <p className="text-violet-300 group-hover/item:text-blue-300 transition-colors">
                    Open source development & contributions
                  </p>
                </div>
              </div>

              {/* Corner accent */}
              <div className="absolute -top-1 -right-1 w-16 h-16 bg-gradient-to-br from-blue-500/20 to-violet-500/20 
                           opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform rotate-45" />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}