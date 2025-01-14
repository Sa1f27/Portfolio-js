import React from 'react';

const experiences = [
  {
    title: "KidsCare-Pro",
    description: "Led the development of an AI-powered pediatric health solution, implementing advanced machine learning algorithms for health monitoring and prediction.",
    technologies: ["Python", "TensorFlow", "AWS", "Docker"],
  },
  {
    title: "SoulScan",
    description: "Developed a high-accuracy disease prediction platform using deep learning models and computer vision techniques.",
    technologies: ["PyTorch", "OpenCV", "MLflow", "Azure"],
  },
  {
    title: "Open Source Contributions",
    description: "Active contributor to various open-source projects, focusing on predictive modeling, data cleaning, and feature engineering.",
    technologies: ["Python", "Scikit-learn", "Pandas", "Git"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-cream-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-olive-600 mb-12 text-center">
          Experience
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-semibold text-olive-600 mb-4">
                {exp.title}
              </h3>
              <p className="text-olive-700 mb-4">
                {exp.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-olive-100 text-olive-600 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}