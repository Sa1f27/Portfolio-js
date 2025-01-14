import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skillCategories = [
  {
    title: "Core AI & Machine Learning",
    skills: [
      "Large Language Models: Fine-tuning, RAG systems",
      "Neural Networks: Transformers, CNNs, RNNs",
      "Computer Vision: Object detection, segmentation",
      "NLP: Text classification, sentiment analysis"
    ]
  },
  {
    title: "Generative AI & Emerging Tech",
    skills: [
      "Multi-modal Models: Text-to-image, voice synthesis",
      "AI Agents: Tool-using AI, autonomous systems",
      "Foundation Models: GPT, Claude, open-source",
      "Vector DBs: Semantic search, embeddings"
    ]
  },
  {
    title: "MLOps & Infrastructure",
    skills: [
      "Deployment: Docker, Kubernetes, CI/CD",
      "Model Serving: Real-time inference, monitoring",
      "Cloud Platforms: AWS, Azure ML services",
      "Version Control: Git, DVC for ML"
    ]
  },
  {
    title: "Development & Data Engineering",
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

  return (
    <section id="skills" className="py-20 relative bg-gray-900">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-indigo-950/30" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 mb-12 text-center"
        >
          Technical Expertise
        </motion.h2>
        
        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="backdrop-blur-sm rounded-xl p-6 bg-indigo-950/20 border border-indigo-500/20
                         hover:bg-indigo-900/30 hover:border-indigo-400/30 transition-all duration-300
                         group relative overflow-hidden"
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {/* Gradient accent */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-indigo-500 opacity-0 
                            group-hover:opacity-20 transition-opacity duration-300" />
              
              <h3 className="text-xl font-semibold text-indigo-300 mb-6 relative">
                {category.title}
              </h3>
              
              <div className="space-y-4 relative">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -10 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                    transition={{ duration: 0.3, delay: index * 0.1 + skillIndex * 0.1 }}
                  >
                    <span className="w-2 h-2 bg-purple-400 rounded-full" />
                    <span className="text-purple-200 text-sm">{skill}</span>
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