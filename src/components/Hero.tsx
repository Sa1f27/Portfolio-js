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
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-violet-950/50 to-black/50" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.1)_0%,transparent_100%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-violet-400 text-transparent bg-clip-text">
            Mohammed Huzaifah
          </h1>
          <div className="text-xl md:text-2xl text-violet-300 mb-8 h-12">
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
                  className="text-blue-400 hover:text-blue-300 transition-colors p-2 rounded-lg
                           backdrop-blur-sm bg-blue-950/20 border border-blue-500/20
                           hover:bg-blue-900/30 hover:border-blue-400/30"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                >
                  <Icon size={24} />
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
            <a
              href="#contact"
              className="inline-block px-8 py-3 text-blue-400 border border-blue-500/20 rounded-full
                         backdrop-blur-sm bg-blue-950/20 hover:bg-blue-900/30 hover:border-blue-400/30
                         transition-all duration-300 hover:scale-105"
            >
              Get in Touch
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}