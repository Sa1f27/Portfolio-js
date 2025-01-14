import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="about" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black to-violet-950/50" />
      
      <motion.div
        ref={ref}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.h2
          className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400 mb-12 text-center"
          variants={itemVariants}
        >
          About Me
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div className="space-y-6" variants={itemVariants}>
            <p className="text-violet-300 leading-relaxed">
              I'm an ambitious Machine Learning Engineer with a strong foundation in AI, Data Science, and MLOps. Currently pursuing a Bachelor of Engineering in Computer Science with a specialization in AI and Machine Learning, maintaining a CGPA of 8.6.
            </p>
            <p className="text-violet-300 leading-relaxed">
              My expertise spans across predictive modeling, clustering models, data analysis, and machine learning algorithms. I've actively participated in Kaggle competitions and solved over 150 problems on LeetCode, continuously refining my skills in applied machine learning and problem-solving.
            </p>
          </motion.div>
          <div className="space-y-6">
            <motion.div
              className="backdrop-blur-sm rounded-xl p-6 bg-blue-950/20 border border-blue-500/20
                         hover:bg-blue-900/30 hover:border-blue-400/30 transition-all duration-300"
              variants={itemVariants}
            >
              <h3 className="text-xl font-semibold text-blue-300 mb-4">Education</h3>
              <p className="text-violet-300">
                Bachelor of Engineering in Computer Science
                <br />
                Specialization: AI and Machine Learning
                <br />
                CGPA: 8.6
              </p>
            </motion.div>
            <motion.div
              className="backdrop-blur-sm rounded-xl p-6 bg-blue-950/20 border border-blue-500/20
                         hover:bg-blue-900/30 hover:border-blue-400/30 transition-all duration-300"
              variants={itemVariants}
            >
              <h3 className="text-xl font-semibold text-blue-300 mb-4">Interests</h3>
              <p className="text-violet-300">
                • Latest advancements in AI & Generative Models
                <br />
                • MLOps & Cloud Technologies
                <br />
                • Football (Real Madrid supporter)
                <br />
                • Hackathons & Collaborative Projects
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}