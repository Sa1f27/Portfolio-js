import React, { useState } from 'react';
import { Github, Linkedin, Mail, Phone, FileText, X, Download } from 'lucide-react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

export default function Hero() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

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
    {
      icon: FileText,
      label: 'Resume',
      isResume: true,
    },
  ];

  const handleDownloadResume = () => {
    // Replace this URL with your actual resume download URL
    const resumeUrl = "https://drive.google.com/uc?export=download&id=1EvyvcJoLZDoNe81qnk8KXDkkB3Xu6WHJ";
    window.open(resumeUrl, '_blank');
  };

  return (
    <>
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
                  'MLOps Engineer',
                  2000,
                  'GenAI Enthusiast',
                  2000,
                  'ML / Deep Learning Specialist',
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
                if (link.isResume) {
                  return (
                    <motion.button
                      key={link.label}
                      onClick={() => setIsResumeOpen(true)}
                      className="text-blue-400 hover:text-blue-300 transition-colors p-2 rounded-lg
                               backdrop-blur-sm bg-blue-950/20 border border-blue-500/20
                               hover:bg-blue-900/30 hover:border-blue-400/30 flex flex-col items-center gap-2"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 + index * 0.1 }}
                    >
                      <Icon size={24} />
                      <span className="text-xs font-medium">{link.label}</span>
                    </motion.button>
                  );
                }
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors p-2 rounded-lg
                             backdrop-blur-sm bg-blue-950/20 border border-blue-500/20
                             hover:bg-blue-900/30 hover:border-blue-400/30 flex flex-col items-center gap-2"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                  >
                    <Icon size={24} />
                    <span className="text-xs font-medium">{link.label}</span>
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

      {/* Custom Modal for Resume */}
      {isResumeOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        >
          <div className="relative w-full max-w-4xl bg-blue-950/90 rounded-lg border border-blue-500/20 p-1">
            <div className="absolute right-2 top-2 flex gap-2 z-10">
              <button
                onClick={handleDownloadResume}
                className="text-blue-400 hover:text-blue-300 p-1 rounded-lg
                         backdrop-blur-sm bg-blue-950/20 border border-blue-500/20
                         hover:bg-blue-900/30 hover:border-blue-400/30 flex items-center gap-1"
              >
                <Download size={20} />
                <span className="text-xs">Download</span>
              </button>
              <button
                onClick={() => setIsResumeOpen(false)}
                className="text-blue-400 hover:text-blue-300 p-1 rounded-lg
                         backdrop-blur-sm bg-blue-950/20 border border-blue-500/20
                         hover:bg-blue-900/30 hover:border-blue-400/30"
              >
                <X size={20} />
              </button>
            </div>
            <iframe
              src="https://drive.google.com/file/d/1EvyvcJoLZDoNe81qnk8KXDkkB3Xu6WHJ/preview"
              className="w-full h-[80vh] rounded-lg"
              allow="autoplay"
            />
          </div>
        </motion.div>
      )}
    </>
  );
}