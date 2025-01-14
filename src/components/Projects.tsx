import React from 'react';
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "KidsCare-Pro",
    description: "AI-powered pediatric health solution for monitoring and predicting children's health conditions using advanced machine learning algorithms.",
    technologies: ["Python", "TensorFlow", "AWS", "Docker"],
    github: "https://github.com/Sa1f27",
    demo: "#"
  },
  {
    title: "SoulScan",
    description: "High-accuracy disease prediction platform utilizing deep learning and computer vision for early detection and diagnosis.",
    technologies: ["PyTorch", "OpenCV", "MLflow", "Azure"],
    github: "https://github.com/Sa1f27",
    demo: "#"
  },
  {
    title: "AI Recommendation Engine",
    description: "Personalized recommendation system using collaborative filtering and deep learning for enhanced user experience.",
    technologies: ["Python", "TensorFlow", "Flask", "MongoDB"],
    github: "https://github.com/Sa1f27",
    demo: "#"
  }
];

export default function Projects() {
  return (
    <section className="py-20 bg-gradient-to-b from-violet-950 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400 mb-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Featured Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative backdrop-blur-sm rounded-xl overflow-hidden
                         bg-black/40 border border-violet-500/20
                         shadow-[0_0_15px_rgba(139,92,246,0.15)] hover:shadow-[0_0_30px_rgba(139,92,246,0.3)]
                         transition-all duration-500"
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
              
              <div className="relative p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-blue-100 group-hover:text-white transition-colors duration-300">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="text-blue-400 w-5 h-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </div>
                
                <p className="text-violet-300 mb-6 text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-sm rounded-full
                                bg-blue-950/40 text-blue-300 border border-blue-500/20
                                hover:bg-blue-900/50 hover:text-blue-200 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Github size={20} className="mr-1" />
                    <span>Code</span>
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                  >
                    <ExternalLink size={20} className="mr-1" />
                    <span>Demo</span>
                  </motion.a>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 border border-blue-400/20 rounded-xl opacity-0 
                              group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}