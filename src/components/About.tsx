//scr/components/About.tsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Brain, GraduationCap, Heart, Trophy, Code, Gamepad, Loader2, Search, MessageSquare } from 'lucide-react';

const PortfolioSection = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const stats = [
    { label: 'LeetCode Problems', value: '150+' },
    { label: 'CGPA', value: '8.6' },
    { label: 'Projects', value: '10+' },
    { label: 'Competitions', value: '5+' }
  ];

  const interests = [
    { icon: Brain, text: 'AI & Generative Models' },
    { icon: Code, text: 'MLOps & Cloud Technologies' },
    { icon: Gamepad, text: 'Football (Real Madrid)' },
    { icon: Trophy, text: 'Hackathons & Projects' }
  ];

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    setIsLoading(true);
    setError('');
    setResponse('');

    try {
      const res = await fetch('/api/query', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: query.trim() }),
      });

      console.log('Response status:', res.status);

      if (!res.ok) {
        const errorData = await res.json();
        console.error('Error response:', errorData);
        throw new Error(errorData.error || 'Something went wrong');
      }

      const data = await res.json();
      console.log('Response data:', data);
      setResponse(data.response);
    } catch (err) {
      console.error('Fetch error:', err);
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-violet-950 to-black">
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400 mb-12 text-center"
          variants={itemVariants}
        >
          About Me
        </motion.h2>

        {/* Stats Section */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
          variants={itemVariants}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="backdrop-blur-sm rounded-xl p-4 bg-black/40 border border-violet-500/20
                         hover:shadow-[0_0_15px_rgba(139,92,246,0.15)] transition-all duration-500
                         text-center"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-3xl font-bold text-blue-400 mb-1">{stat.value}</h3>
              <p className="text-violet-300 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* About Text Section */}
          <motion.div className="space-y-6" variants={itemVariants}>
            <motion.div 
              className="backdrop-blur-sm rounded-xl p-6 bg-black/40 border border-violet-500/20
                         hover:shadow-[0_0_15px_rgba(139,92,246,0.15)] transition-all duration-500"
            >
              <p className="text-blue-100 leading-relaxed mb-4">
                I'm an ambitious Machine Learning Engineer with a strong foundation in AI, Data Science, and MLOps. Currently pursuing a Bachelor of Engineering in Computer Science with a specialization in AI and Machine Learning.
              </p>
              <p className="text-blue-100 leading-relaxed">
                My expertise spans across predictive modeling, clustering models, data analysis, and machine learning algorithms. I've actively participated in Kaggle competitions and solved over 150 problems on LeetCode, continuously refining my skills in applied machine learning and problem-solving.
              </p>
            </motion.div>
          </motion.div>

          {/* Education & Interests Section */}
          <div className="space-y-6">
            <motion.div
              className="backdrop-blur-sm rounded-xl p-6 bg-black/40 border border-violet-500/20
                         hover:shadow-[0_0_15px_rgba(139,92,246,0.15)] transition-all duration-500"
              variants={itemVariants}
            >
              <div className="flex items-center mb-4">
                <GraduationCap className="text-blue-400 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-blue-300">Education</h3>
              </div>
              <div className="pl-9">
                <p className="text-violet-300 mb-2">
                  Bachelor of Engineering in Computer Science
                </p>
                <p className="text-violet-400">
                  Specialization: AI and Machine Learning
                </p>
              </div>
            </motion.div>

            <motion.div
              className="backdrop-blur-sm rounded-xl p-6 bg-black/40 border border-violet-500/20
                         hover:shadow-[0_0_15px_rgba(139,92,246,0.15)] transition-all duration-500"
              variants={itemVariants}
            >
              <div className="flex items-center mb-4">
                <Heart className="text-blue-400 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-blue-300">Interests</h3>
              </div>
              <div className="grid grid-cols-1 gap-4">
                {interests.map((interest, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center pl-9 text-violet-300"
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <interest.icon className="mr-3 text-blue-400" size={18} />
                    <span>{interest.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Query Section */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400 mb-4">
              Ask Me Anything
            </h2>
            <p className="text-blue-200">
              Have specific questions about my experience or skills? I'll provide detailed answers based on my background.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="backdrop-blur-sm rounded-xl p-6 bg-black/40 border border-violet-500/20
                       hover:shadow-[0_0_15px_rgba(139,92,246,0.15)] transition-all duration-500"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <textarea
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Ask about my experience, skills, or any specific project details..."
                  className="w-full px-4 py-3 rounded-lg bg-black/50 border border-violet-500/30 
                            text-blue-100 placeholder-blue-700 focus:outline-none focus:border-violet-500
                            focus:ring-2 focus:ring-violet-500/50 transition-all duration-300
                            min-h-[120px] resize-y"
                  required
                />
                <Search 
                  className="absolute right-3 top-3 text-violet-500/50" 
                  size={20} 
                />
              </div>

              <motion.button
                type="submit"
                disabled={isLoading || !query.trim()}
                className="w-full bg-gradient-to-r from-blue-600 to-violet-600 text-white py-3 px-6 
                          rounded-lg hover:from-blue-700 hover:to-violet-700 transition-all duration-300
                          disabled:opacity-50 disabled:cursor-not-allowed
                          flex items-center justify-center space-x-2 group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isLoading ? (
                  <Loader2 className="animate-spin" size={20} />
                ) : (
                  <>
                    <Search size={20} className="transform group-hover:-rotate-12 transition-transform" />
                    <span>Get Answer</span>
                  </>
                )}
              </motion.button>
            </form>

            {error && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-4 p-4 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400"
              >
                {error}
              </motion.div>
            )}

            {response && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 p-6 rounded-lg bg-blue-500/10 border border-blue-500/30"
              >
                <h3 className="text-lg font-semibold text-blue-300 mb-3">Response:</h3>
                <div 
                  className="text-blue-200 whitespace-pre-wrap"
                  dangerouslySetInnerHTML={{ 
                    __html: response.replace(/\n/g, '<br />').replace(
                      /•\s(.*)/g, 
                      '<div class="flex items-start space-x-2 mt-2"><span class="text-blue-400">•</span><span>$1</span></div>'
                    )
                  }}
                />
              </motion.div>
            )}
          </motion.div>


        </motion.div> */}
      </motion.div>
    </section>
  );
};

export default PortfolioSection;