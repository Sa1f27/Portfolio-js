import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Brain, Cloud } from 'lucide-react';

const skillCategories = [
  {
    title: "Programming Languages",
    icon: <Code2 className="w-6 h-6" />,
    skills: ["Python", "C/C++", "Java", "JavaScript"],
    description: "Expertise in multiple programming paradigms and language ecosystems"
  },
  {
    title: "ML & DL Frameworks",
    icon: <Brain className="w-6 h-6" />,
    skills: ["TensorFlow", "PyTorch", "Scikit-learn", "Keras"],
    description: "Deep experience with modern machine learning and deep learning frameworks"
  },
  {
    title: "Cloud & MLOps",
    icon: <Cloud className="w-6 h-6" />,
    skills: ["AWS", "Docker", "MLflow", "Kubernetes"],
    description: "Proficient in cloud infrastructure and ML deployment pipelines"
  }
];

export default function Skills() {
  return (
    <section className="py-20 bg-gradient-to-b from-violet-950 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400 mb-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Technical Expertise
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group backdrop-blur-sm p-6 rounded-xl transition-all duration-300
                         bg-black/40 border border-violet-500/20 hover:bg-violet-950/30
                         shadow-[0_0_15px_rgba(139,92,246,0.15)] hover:shadow-[0_0_30px_rgba(139,92,246,0.3)]"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 rounded-lg transition-colors duration-300
                              bg-blue-500/10 text-blue-400 group-hover:text-blue-300
                              shadow-[0_0_10px_rgba(96,165,250,0.2)]">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-blue-100 group-hover:text-white transition-colors duration-300">
                  {category.title}
                </h3>
              </div>
              
              <p className="text-violet-300 mb-6 text-sm">
                {category.description}
              </p>

              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-2 border border-blue-500/20 rounded-lg 
                              text-sm transition-all duration-300 flex items-center justify-center
                              bg-blue-950/20 text-blue-300 hover:bg-blue-900/30 hover:text-blue-200
                              hover:shadow-[0_0_15px_rgba(96,165,250,0.2)]"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}