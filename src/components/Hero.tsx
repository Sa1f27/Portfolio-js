import React from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

export default function Hero() {
  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/Sa1f27',
      label: 'GitHub',
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/huzaifah-27o3/',
      label: 'LinkedIn',
    },
    {
      icon: Mail,
      href: 'mailto:huzaif027@gmail.com',
      label: 'Email',
    },
    {
      icon: Phone,
      href: 'tel:+916300940175',
      label: 'Phone',
    },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-violet-950 to-black pt-16">
      {/* Background Gradient Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.1)_0%,transparent_65%)]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text 
                       bg-gradient-to-r from-blue-400 to-violet-400"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Mohammed Huzaifah
          </motion.h1>
          
          <div className="text-xl md:text-2xl text-blue-200 mb-8 h-12">
            <TypeAnimation
              sequence={[
                'Machine Learning Engineer',
                2000,
                'AI Enthusiast',
                2000,
                'Deep Learning Specialist',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>

          <motion.div
            className="flex justify-center space-x-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-2"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                >
                  <div className="absolute inset-0 bg-blue-500/20 rounded-lg blur-md transition-opacity opacity-0 group-hover:opacity-100" />
                  <Icon className="relative z-10 w-6 h-6 text-blue-400 transition-colors duration-300 group-hover:text-blue-300" />
                </motion.a>
              );
            })}
          </motion.div>

          <motion.div
            className="mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <motion.a
              href="#contact"
              className="group relative inline-block px-8 py-3 text-blue-400 
                         overflow-hidden rounded-full transition-all duration-300
                         border border-blue-500/50 hover:border-blue-400
                         bg-blue-950/20 hover:bg-blue-900/30
                         shadow-[0_0_15px_rgba(96,165,250,0.15)] 
                         hover:shadow-[0_0_30px_rgba(96,165,250,0.3)]"
              whileHover={{ scale: 1.05 }}
            >
              <span className="relative z-10">Get in Touch</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-violet-400/20 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}