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
              I'm Mohammed Huzaifah, a Computer Science student and ML Engineer who believes AI should solve real problems, not just look cool on paper. When I'm not training models or debugging code, you'll find me watching Football matches or brainstorming Leetcode or HackerRank problems(yes, I care about making AI actually useful for people!).
            </p>
            <p className="text-violet-300 leading-relaxed">
              I love turning complex problems into elegant solutions - whether that's building disease prediction platforms or contributing to open-source projects. My hands-on experience ranges from deep learning to MLOps, and I'm always excited to learn new tools and technologies...
            </p>
            <p className="text-violet-300 leading-relaxed">
              Why work with me? I bring a unique blend of technical skills and practical thinking. I don't just build models; I build solutions that matter. My projects in healthcare and my active involvement in hackathons show I can deliver under pressure while keeping the end-user in mind.
Currently looking for opportunities to create impact through AI - let's build something meaningful together!.
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
                • MLOps & GenAI Technologies
                <br />
                • Football enthusiast and Real Madrid supporte
                <br />
                • Hackathons & Collaborative Projects
                <br />
                • Open source development & contributions 
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}