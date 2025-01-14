import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["Python", "C/C++", "Java", "JavaScript"]
  },
  {
    title: "ML & DL Frameworks",
    skills: ["TensorFlow", "PyTorch", "Scikit-learn", "Keras"]
  },
  {
    title: "Cloud & MLOps",
    skills: ["AWS", "Docker", "MLflow", "Kubernetes"]
  },
];

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black to-violet-950/30" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400 mb-12 text-center"
        >
          Skills
        </motion.h2>
        
        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="backdrop-blur-sm rounded-xl p-6 bg-blue-950/20 border border-blue-500/20
                         hover:bg-blue-900/30 hover:border-blue-400/30 transition-all duration-300
                         group relative overflow-hidden"
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {/* Cyberpunk accent */}
              <div className="absolute -inset-1 bg-gradient-to-r from-violet-500 to-blue-500 opacity-0 
                            group-hover:opacity-20 transition-opacity duration-300" />
              
              <h3 className="text-xl font-semibold text-blue-300 mb-6 relative">
                {category.title}
              </h3>
              
              <div className="space-y-3 relative">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="flex items-center space-x-2"
                    initial={{ opacity: 0, x: -10 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                    transition={{ duration: 0.3, delay: index * 0.1 + skillIndex * 0.1 }}
                  >
                    <span className="w-2 h-2 bg-violet-400 rounded-full" />
                    <span className="text-violet-300">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}