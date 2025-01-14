import React from 'react';
import { Github } from 'lucide-react';

const projects = [
  {
    title: "KidsCare-Pro",
    description: "AI-powered pediatric health solution for monitoring and predicting children's health conditions using advanced machine learning algorithms.",
    preview: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80",
    technologies: ["Python", "TensorFlow", "AWS", "Docker"],
    github: "https://github.com/Sa1f27"
  },
  {
    title: "SoulScan",
    description: "High-accuracy disease prediction platform utilizing deep learning and computer vision for early detection and diagnosis.",
    preview: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80",
    technologies: ["PyTorch", "OpenCV", "MLflow", "Azure"],
    github: "https://github.com/Sa1f27"
  },
  {
    title: "AI Recommendation Engine",
    description: "Personalized recommendation system using collaborative filtering and deep learning for enhanced user experience.",
    preview: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80",
    technologies: ["Python", "TensorFlow", "Flask", "MongoDB"],
    github: "https://github.com/Sa1f27"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black to-violet-950/30" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400 mb-12 text-center">
          Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="backdrop-blur-sm rounded-xl p-6 bg-blue-950/20 border border-blue-500/20
                         hover:bg-blue-900/30 hover:border-blue-400/30 transition-all duration-300
                         group relative overflow-hidden"
            >
              {/* Cyberpunk accent */}
              <div className="absolute -inset-1 bg-gradient-to-r from-violet-500 to-blue-500 opacity-0 
                            group-hover:opacity-20 transition-opacity duration-300" />
              
              <img
                src={project.preview}
                alt={project.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              
              <h3 className="text-xl font-semibold text-blue-300 mb-2">
                {project.title}
              </h3>
              <p className="text-violet-300 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-violet-900/40 text-violet-300 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-blue-400 hover:text-blue-600"
              >
                <Github size={20} className="mr-1" />
                Code
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
