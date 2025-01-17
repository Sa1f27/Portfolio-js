import React, { useState, useEffect } from 'react';
import { Menu, X, Cpu } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#home', icon: '00' },
  { label: 'About', href: '#about', icon: '01' },
  { label: 'Skills', href: '#skills', icon: '02' },
  { label: 'Projects', href: '#projects', icon: '03' },
  { label: 'Contact', href: '#contact', icon: '04' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'backdrop-blur-xl bg-black/40 border-b border-blue-500/30' 
          : 'bg-transparent'
      }`}
    >
      {/* Top animation line */}
      <div className="absolute top-0 left-0 w-full h-[2px] overflow-hidden">
        <div className="w-full h-full bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
        <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-[slide 3s linear infinite]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <div className="flex items-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-violet-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
              <div className="relative flex items-center px-4 py-2 bg-black/80 rounded-lg ring-1 ring-blue-500/20">
                <Cpu className="w-5 h-5 text-blue-400 animate-pulse mr-2" />
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-violet-400 text-transparent bg-clip-text">
                  Portfolio
                </span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                className="group relative px-4 py-2"
                onMouseEnter={() => setActiveItem(index)}
                onMouseLeave={() => setActiveItem(null)}
              >
                {/* Hover background */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-600/0 via-blue-600/10 to-violet-600/0 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110" />
                
                {/* Content wrapper */}
                <div className="relative flex items-center space-x-3">
                  <span className="text-xs font-mono text-blue-400/60 group-hover:text-blue-400 transition-colors duration-300">
                    {item.icon}_
                  </span>
                  <span className="text-sm font-medium text-blue-300 group-hover:text-blue-100 transition-colors duration-300">
                    {item.label}
                  </span>
                </div>

                {/* Animated underline */}
                <div className="absolute bottom-0 left-0 w-full h-[2px] overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-full h-full bg-gradient-to-r from-blue-400 to-violet-400 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                </div>

                {/* Floating effect markers */}
                {activeItem === index && (
                  <>
                    <div className="absolute -top-1 left-0 w-2 h-2 bg-blue-400/30 rounded-full" />
                    <div className="absolute -bottom-1 right-0 w-2 h-2 bg-violet-400/30 rounded-full" />
                  </>
                )}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative group p-3 rounded-lg hover:bg-black/40 transition-all duration-300"
            >
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-600/10 to-violet-600/10 opacity-0 group-hover:opacity-100 transition-all duration-300" />
              {isOpen ? (
                <X className="w-6 h-6 text-blue-300 group-hover:text-blue-100" />
              ) : (
                <Menu className="w-6 h-6 text-blue-300 group-hover:text-blue-100" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden backdrop-blur-xl bg-black/90 border-t border-blue-500/20">
          <div className="px-4 py-3 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="group relative block px-4 py-3 rounded-lg"
                onClick={() => setIsOpen(false)}
              >
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-600/0 via-blue-600/10 to-violet-600/0 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                <div className="relative flex items-center space-x-3">
                  <span className="text-xs font-mono text-blue-400/60 group-hover:text-blue-400 transition-colors duration-300">
                    {item.icon}_
                  </span>
                  <span className="text-base font-medium text-blue-300 group-hover:text-blue-100 transition-colors duration-300">
                    {item.label}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes slide {
          0% { transform: translateX(0); }
          100% { transform: translateX(200%); }
        }
      `}</style>
    </nav>
  );
}