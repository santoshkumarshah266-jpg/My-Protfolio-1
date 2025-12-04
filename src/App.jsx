import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Layout & Utility
import Background3D from './layout/Background3D';
import Loader from './layout/Loader';

// Sections
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

/**
 * MAIN APP COMPONENT
 * Coordinates all major layout elements and sections
 */
const App = () => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="min-h-screen bg-[#050505] text-white overflow-x-hidden selection:bg-cyan-500/30 selection:text-cyan-200 font-sans">

      {/* Loading Sequence */}
      {loading && <Loader onLoadingComplete={() => setLoading(false)} />}

      {/* 3D Background - Always mounted */}
      <Background3D />

      {/* Main Content */}
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ duration: 1 }}
      >
        <nav className="fixed top-0 w-full z-50 px-6 py-6 flex justify-between items-center mix-blend-difference text-white">
          <span className="font-bold text-xl tracking-tighter">SKS.</span>
          <div className="hidden md:flex gap-8 text-sm font-light tracking-widest text-gray-300">
            <a href="#about" className="hover:text-cyan-400 transition-colors">ABOUT</a>
            <a href="#skills" className="hover:text-purple-400 transition-colors">SKILLS</a>
            <a href="#contact" className="hover:text-blue-400 transition-colors">CONTACT</a>
          </div>
        </nav>

        <Hero />
        <About />
        <Skills />
        <Contact />
        <Footer />
      </motion.main>
    </div>
  );
};

export default App;
