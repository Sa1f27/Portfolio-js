import React from 'react';
import { Github } from 'lucide-react';

const projects = [
  {
    title: "Vocal-Diagnose",
    description: "VocalDiagnose uses AI to analyze voice patterns, enabling early disease detection with over 90% accuracy, revolutionizing accessible and cost-effective health screening.",
    image: "https://private-user-images.githubusercontent.com/154003597/400484503-c8d2709f-1a31-4d1b-a1e0-e7573390bd93.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzY4NzI3OTgsIm5iZiI6MTczNjg3MjQ5OCwicGF0aCI6Ii8xNTQwMDM1OTcvNDAwNDg0NTAzLWM4ZDI3MDlmLTFhMzEtNGQxYi1hMWUwLWU3NTczMzkwYmQ5My5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwMTE0JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDExNFQxNjM0NThaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0xODZlOWRkMzY2NWE5MDkwMGZjMmIwZTk0YWM4OWQ2YzhlYzM0Mjc2OWYzMzAwNDFmOGM2NDNlODdkM2UyZGNlJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.HJZJo24fiYUVoSEB6zNpeQKjIbWPUwhSbdrtJ9W1YIM",
    technologies: ["Python", "TensorFlow", "Librosa", "Kaggle", "Matplotlib/Seaborn"],
    github: "https://github.com/Sa1f27/Vocal-Diagnose"
  },
  {
    title: "KidsCare-Pro",
    description: "AI-powered pediatric health solution for monitoring and predicting children's health conditions using advanced machine learning algorithms.",
    image: "https://private-user-images.githubusercontent.com/154003597/389480921-21df217a-1dd1-46d7-8567-c461b957cec7.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzY4NzI5NzUsIm5iZiI6MTczNjg3MjY3NSwicGF0aCI6Ii8xNTQwMDM1OTcvMzg5NDgwOTIxLTIxZGYyMTdhLTFkZDEtNDZkNy04NTY3LWM0NjFiOTU3Y2VjNy5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwMTE0JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDExNFQxNjM3NTVaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1jNjY2YjBkMDc4YmVlYWRhYjRkN2YxY2EwNmQyNTE5NTE0ZjI1ZjEwNWI3MmJkMmM2YzA2ZjZhZjViZDliZWE3JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.77I8CEXj_53G2TTTWJS7S_5QgeQHym40RzgPm40nUPo",
    technologies: ["Python", "TensorFlow", "AWS", "Matplotlib/Seaborn"],
    github: "https://github.com/Sa1f27/KidsCare-Pro"
  },
  {
    title: "Disease Diagnosis",
    description: "High-accuracy disease prediction platform utilizing deep learning and computer vision for early detection and diagnosis.",
    image: "https://private-user-images.githubusercontent.com/154003597/386246602-9bf357fb-1327-4606-a4fa-d7a0022af54d.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzY4NzM2NTIsIm5iZiI6MTczNjg3MzM1MiwicGF0aCI6Ii8xNTQwMDM1OTcvMzg2MjQ2NjAyLTliZjM1N2ZiLTEzMjctNDYwNi1hNGZhLWQ3YTAwMjJhZjU0ZC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwMTE0JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDExNFQxNjQ5MTJaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT02ZGI0NzU3NDcxYmY2MzlhZmRmODQxZDZhOGEzYWExNjBkZjU2MGQ5OTIyYWQzOTM2OTM1M2ZjYmExNmVmNWE2JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.1S8F4F12XBtUirviyxK0HFotstAysN1KOcDCq6P7F8g",
    technologies: ["PyTorch", "OpenCV", "TensorFlow", "Librosa", "Matplotlib/Seaborn"],
    github: "https://github.com/Sa1f27/Disease-Prediction"
  },
  {
    title: "DocHub-AI",
    description: "A RAG-based multi-agent AI platform revolutionizing access to government services with intelligent document assistance, scheme navigation, and seamless application support.",
    image: "https://private-user-images.githubusercontent.com/154003597/396213204-afc1eabc-086b-4f73-9ee7-1ed80d3d1e87.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzY4NzI2OTMsIm5iZiI6MTczNjg3MjM5MywicGF0aCI6Ii8xNTQwMDM1OTcvMzk2MjEzMjA0LWFmYzFlYWJjLTA4NmItNGY3My05ZWU3LTFlZDgwZDNkMWU4Ny5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwMTE0JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDExNFQxNjMzMTNaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0xODZlMzFmMzdkNzA2NTcyOGFhOTY0YzkxNDY4ZjE3OGE2ZWQxMDA3ZWYyMjhiNWE1MjE3MmU4NDcxODgzMjNiJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.mG---6e68osQjVURkNvFd1KyoFRwPdA6fjd1HYL4l6c",
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
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
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
                {/* <a
                  href={project.preview}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-300 hover:text-violet-400"
                >
                  Preview
                </a> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
