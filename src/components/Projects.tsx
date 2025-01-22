import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github } from 'lucide-react';

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

const projects = [
  {
    title: "Graph-RAG",
    description: "A Graph RAG (Retrieval-Augmented Generation) application combining Large Language Models (LLMs) with knowledge graphs to enhance the accuracy and explainability of Retrieval-Augmented Generation.",
    image: "https://drive.google.com/file/d/1gbgUxtSitRg9j5SJM4yn7SXIeJ_i4yvL/preview",
    technologies: ["OpenAI", "Weaviate", "Databricks", "RDFLib", "Pandas"],
    github: "https://github.com/Sa1f27/GraphRAG"
  },
{
  "title": "Crawler - RAG Agent",
  "description": "An intelligent documentation crawler and RAG (Retrieval-Augmented Generation) agent that transforms documentation websites into an interactive knowledge base. Built with Pydantic AI and Supabase, this system crawls documentation, indexes it in a vector database, and provides AI-powered answers to user queries using contextually relevant documentation chunks.",
  "image": "https://drive.google.com/file/d/16Qeqh8x-VpB7eZHWSwlBNVp0buasitIp/preview",
  "technologies": ["Crawl4AI", "OpenAI", "Supabase", "FastAPI", "Pydantic"],
  "github": "https://github.com/Sa1f27/Crawler-AI.git"
}
  {
    title: "Vocal-Diagnose",
    description: "VocalDiagnose uses AI to analyze voice patterns, enabling early disease detection with over 90% accuracy, revolutionizing accessible and cost-effective health screening.",
    image: "https://drive.google.com/file/d/18yrfazKk6ELQBW3FFSGagCuhD7zHpBk0/preview",
    technologies: ["Groq", "TensorFlow", "Librosa", "Kaggle", "Matplotlib/Seaborn"],
    github: "https://github.com/Sa1f27/Vocal-Diagnose"
  },
  {
    title: "KidsCare-Pro",
    description: "AI-powered pediatric health solution for monitoring and predicting children's health conditions using advanced machine learning algorithms.",
    image: "https://drive.google.com/file/d/1y1BM_AuZdYElUcTwe_4aHCj_FIgSEXbf/preview",
    technologies: ["Groq", "TensorFlow", "AWS", "Matplotlib/Seaborn"],
    github: "https://github.com/Sa1f27/KidsCare-Pro"
  },
  {
    title: "Disease Diagnosis",
    description: "High-accuracy disease prediction platform utilizing deep learning and computer vision for early detection and diagnosis.",
    image: "https://drive.google.com/file/d/1EgNXnHxXwoG8-2zyOTeAU7EP8umrixId/preview",
    technologies: ["PyTorch", "Knn", "TensorFlow", "Matplotlib/Seaborn"],
    github: "https://github.com/Sa1f27/Disease-Prediction"
  },
  {
    title: "DocHub-AI",
    description: "A RAG-based multi-agent AI platform revolutionizing access to government services with intelligent document assistance, scheme navigation, and seamless application support.",
    image: "https://drive.google.com/file/d/1LWc40C-oVPoFlt9kWeSTvnvFIClBbdtP/preview",
    technologies: ["Python","LLama", "TensorFlow", "Flask", "BeautifulSoup"],
    github: "https://github.com/Sa1f27/DocHub-AI"
  }
];

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredProject, setHoveredProject] = useState(null);

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

  const projectVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="projects" className="relative min-h-screen py-24 overflow-hidden">
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

      <div className="relative z-10 container mx-auto px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold mb-20 text-center bg-gradient-to-r from-blue-400 to-violet-400 text-transparent bg-clip-text"
        >
          Featured Projects
        </motion.h2>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-12 max-w-[1400px] mx-auto"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={projectVariants}
              className="group relative"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className={`
                rounded-xl overflow-hidden
                backdrop-blur-sm border border-blue-500/20 
                bg-blue-950/20 h-full
                transition-all duration-500 ease-out
                ${hoveredProject === index ? 'bg-blue-900/30 border-blue-400/30 scale-[1.02]' : ''}
              `}>
                {/* Animated gradient border */}
                <div className="absolute -inset-[0.5px] bg-gradient-to-r from-blue-500 via-violet-500 to-blue-500 
                              opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
                
                {/* Project content */}
                <div className="p-6 lg:p-8 h-full flex flex-col">
                  <div className="relative mb-6">
                    <iframe
                      src={project.image}
                      className="w-full aspect-video rounded-lg transform group-hover:scale-[1.02] transition-transform duration-500"
                      allow="autoplay"
                      frameBorder="0"
                    ></iframe>
                    
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent 
                                opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  <h3 className="text-2xl font-semibold text-blue-300 mb-4 group-hover:text-blue-200 
                              transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-violet-300 mb-6 line-clamp-3 group-hover:text-violet-200 
                              transition-colors duration-300 flex-grow">
                    {project.description}
                  </p>

                  <div className="space-y-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-violet-500/20 border border-violet-500/30 
                                  text-blue-200 rounded-full text-sm transform hover:scale-105 
                                  transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <motion.div 
                      initial={{ opacity: 0.8 }}
                      whileHover={{ opacity: 1 }}
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg 
                                bg-blue-500/20 border border-blue-500/30 text-blue-300 
                                hover:text-blue-200 hover:bg-blue-500/30 hover:border-blue-400/50 
                                transition-all duration-300"
                      >
                        <Github size={20} />
                        View Code
                      </a>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div><ParticleEffect />
    </section>
  );
}