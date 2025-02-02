import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, BookOpen, Calendar } from 'lucide-react';

const blogs = [
  {
    title: "Unleashing the Power of Agentic AI: A Practical Guide",
    date: "Jan, 2025",
    readTime: "8 min read",
    link: "https://medium.com/@huzaif027/unleashing-the-power-of-agentic-ai-a-practical-guide-b396ae463df8"
  },
  {
    title: "Deepseek R1 API & Bolt DIY, the Best Free Fast AI Coder",
    date: "Jan, 2025",
    readTime: "12 min read",
    link: "https://medium.com/@huzaif027/bolt-diy-deepseek-r1-api-unlocking-the-power-of-the-best-free-fast-ai-coder-ae64bbdc9132"
  },
  {
    title: "Deep Learning in 2025: Five Algos Shaping the Future of AI",
    date: "Feb, 2025",
    readTime: "10 min read",
    link: "https://medium.com/@huzaif027/deep-learning-in-2025-five-algorithms-shaping-the-future-of-ai-e5c8f4ab29da"
  },
];

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
          className="absolute rounded-full bg-violet-400"
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

export default function Blogs() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredBlog, setHoveredBlog] = useState(null);

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
        staggerChildren: 0.1
      }
    }
  };

  const blogVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="blogs" className="relative py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-violet-950/30 to-black" />
      
      {/* Animated Particles */}
      <ParticleEffect />

      {/* Cyberpunk Grid with Mouse Parallax */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle at center, rgba(139, 92, 246, 0.2) 1px, transparent 1px)',
          backgroundSize: '30px 30px',
          transform: `translate(${(mousePosition.x - window.innerWidth / 2) * 0.02}px, ${(mousePosition.y - window.innerHeight / 2) * 0.02}px)`,
        }}
      />

      <div className="relative z-10 container mx-auto px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold mb-16 text-center bg-gradient-to-r from-violet-400 to-blue-400 text-transparent bg-clip-text"
        >
          Latest Blog Posts
        </motion.h2>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto"
        >
          {blogs.map((blog, index) => (
            <motion.div
              key={index}
              variants={blogVariants}
              className="group"
              onMouseEnter={() => setHoveredBlog(index)}
              onMouseLeave={() => setHoveredBlog(null)}
            >
              <a 
                href={blog.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  block relative
                  rounded-lg p-4
                  backdrop-blur-sm border border-violet-500/20 
                  bg-violet-950/20
                  transition-all duration-300 ease-out
                  ${hoveredBlog === index ? 'bg-violet-900/30 border-violet-400/30 scale-[1.02]' : ''}
                `}
              >
                {/* Animated gradient border */}
                <div className="absolute -inset-[0.5px] bg-gradient-to-r from-violet-500 via-blue-500 to-violet-500 
                              opacity-0 group-hover:opacity-30 transition-opacity duration-300 rounded-lg" />
                
                <div className="relative flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-violet-300 group-hover:text-violet-200 
                                transition-colors duration-300 pr-8">
                      {blog.title}
                    </h3>
                    <div className="flex items-center gap-4 mt-2 text-sm text-violet-400">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span>{blog.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <BookOpen size={14} />
                        <span>{blog.readTime}</span>
                      </div>
                    </div>
                  </div>
                  <ExternalLink 
                    size={20} 
                    className="text-violet-400 group-hover:text-violet-200 transition-colors duration-300"
                  />
                </div>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}