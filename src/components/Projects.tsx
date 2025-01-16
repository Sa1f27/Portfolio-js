import React from 'react';
import { Github } from 'lucide-react';

const projects = [
  {
    title: "Vocal-Diagnose",
    description: "VocalDiagnose uses AI to analyze voice patterns, enabling early disease detection with over 90% accuracy, revolutionizing accessible and cost-effective health screening.",
    image: "https://drive.google.com/file/d/18yrfazKk6ELQBW3FFSGagCuhD7zHpBk0/preview",
    technologies: ["Python", "TensorFlow", "Librosa", "Kaggle", "Matplotlib/Seaborn"],
    github: "https://github.com/Sa1f27/Vocal-Diagnose"
  },
  {
    title: "KidsCare-Pro",
    description: "AI-powered pediatric health solution for monitoring and predicting children's health conditions using advanced machine learning algorithms.",
    image: "https://drive.google.com/file/d/1y1BM_AuZdYElUcTwe_4aHCj_FIgSEXbf/preview",
    technologies: ["Python", "TensorFlow", "AWS", "Matplotlib/Seaborn"],
    github: "https://github.com/Sa1f27/KidsCare-Pro"
  },
  {
    title: "Disease Diagnosis",
    description: "High-accuracy disease prediction platform utilizing deep learning and computer vision for early detection and diagnosis.",
    image: "https://drive.google.com/file/d/1EgNXnHxXwoG8-2zyOTeAU7EP8umrixId/preview",
    technologies: ["PyTorch", "OpenCV", "TensorFlow", "Matplotlib/Seaborn"],
    github: "https://github.com/Sa1f27/Disease-Prediction"
  },
  {
    title: "DocHub-AI",
    description: "A RAG-based multi-agent AI platform revolutionizing access to government services with intelligent document assistance, scheme navigation, and seamless application support.",
    image: "https://drive.google.com/file/d/1LWc40C-oVPoFlt9kWeSTvnvFIClBbdtP/preview",
    technologies: ["Python", "TensorFlow", "Flask", "MongoDB"],
    github: "https://github.com/Sa1f27/DocHub-AI"
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
              <iframe
                src={project.image}
                className="w-full h-48 rounded-lg mb-6"
                allow="autoplay"
                frameBorder="0"
              ></iframe>
              <h3 className="text-xl font-semibold text-blue-300 mb-2 relative">
                {project.title}
              </h3>
              <p className="text-violet-300 mb-4 relative">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4 relative">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-violet-500 text-blue-200 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4 relative">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-300 hover:text-violet-400"
                >
                  <Github size={20} className="mr-1" />
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}