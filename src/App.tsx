import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Chatbot from './components/Chatbot';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-violet-950 to-black text-white">
      {/* Animated gradient background */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.15)_0%,transparent_100%)] animate-pulse" />
      {/* Cyberpunk grid overlay */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,rgba(139,92,246,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(139,92,246,0.1)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      <Navbar />
      <Hero />
      <About />
      <Chatbot />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;