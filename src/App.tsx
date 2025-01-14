import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PortfolioSection from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-cream-50">
      <Navbar />
      <Hero />
      <PortfolioSection />
      {/* <Experience /> */}
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;