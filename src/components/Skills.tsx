import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Shield, Cpu, Cloud, Code } from 'lucide-react';

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

const skillCategories = [
  {
    title: "Core AI & Machine Learning",
    icon: Shield,
    skills: [
      "Large Language Models: Fine-tuning, RAG systems",
      "Neural Networks: Transformers, CNNs, RNNs",
      "Computer Vision: Object detection, segmentation",
      "NLP: Text classification, sentiment analysis"
    ]
  },
  {
    title: "Generative AI & Emerging Tech",
    icon: Cpu,
    skills: [
      "Multi-modal Models: Text-to-image, voice synthesis",
      "AI Agents: Tool-using AI, autonomous systems",
      "Foundation Models: GPT, Claude, open-source",
      "Vector DBs: Semantic search, embeddings"
    ]
  },
  {
    title: "MLOps & Infrastructure",
    icon: Cloud,
    skills: [
      "Deployment: Docker, Kubernetes, CI/CD",
      "Model Serving: Real-time inference, monitoring",
      "Cloud Platforms: AWS, Azure ML services",
      "Version Control: Git, DVC for ML"
    ]
  },
  {
    title: "Development & Data Engineering",
    icon: Code,
    skills: [
      "Languages: Python, C++, Java, JavaScript",
      "ML Frameworks: TensorFlow, PyTorch, Scikit-learn",
      "Data Processing: Pandas, NumPy, Spark",
      "Visualization: Matplotlib, Seaborn, Plotly"
    ]
  }
];

export default function Skills() {
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
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="min-h-screen py-20 relative overflow-hidden">
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold mb-16 text-center"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">
            Technical Expertise
          </span>
        </motion.h2>
        
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="group relative"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className={`
                  backdrop-blur-sm rounded-xl p-6 
                  border border-blue-500/20 bg-blue-950/20
                  transition-all duration-300
                  ${hoveredCard === index ? 'bg-blue-900/30 border-blue-400/30 scale-[1.02]' : ''}
                  relative overflow-hidden
                `}>
                  {/* Animated gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-violet-500/10 to-blue-500/10 opacity-0 
                              group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Category header */}
                  <div className="flex items-center gap-3 mb-6 relative">
                    <div className="p-2 rounded-lg bg-blue-900/50 border border-blue-500/30">
                      <Icon size={24} className="text-blue-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-blue-400">
                      {category.title}
                    </h3>
                  </div>
                  
                  {/* Skills list */}
                  <div className="space-y-4 relative">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        initial={{ opacity: 0, x: -10 }}
                        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                        transition={{ duration: 0.3, delay: index * 0.1 + skillIndex * 0.1 }}
                        className="flex items-center gap-3 group/skill"
                      >
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-violet-400 
                                    group-hover/skill:scale-150 transition-transform duration-300" />
                        <span className="text-violet-300 text-sm group-hover/skill:text-blue-300 transition-colors duration-300">
                          {skill}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Corner accent */}
                  <div className="absolute -top-1 -right-1 w-16 h-16 bg-gradient-to-br from-blue-500/20 to-violet-500/20 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform rotate-45" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}