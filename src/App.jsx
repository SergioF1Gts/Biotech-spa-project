import React, { useState, useEffect } from 'react';
import { motion, useSpring, useMotionValue, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import MedicalHub from './components/MedicalHub';
import Footer from './components/Footer';

function App() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 200 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX - 100);
      mouseY.set(e.clientY - 100);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="bg-bio-bg min-h-screen relative selection:bg-bio-primary/20">
      <div className="noise-overlay"></div>
      <motion.div 
        className="fixed w-[200px] h-[200px] bg-bio-primary/10 rounded-full blur-[80px] pointer-events-none z-0 lg:block hidden"
        style={{ x: smoothX, y: smoothY }}
      />

      <Navbar />
      
      <AnimatePresence mode="wait">
        <main>
          <Hero />
          <About />
          <MedicalHub />
          <Features />
          
          {/* Advanced CTA Section */}
          <section id="biomedica" className="relative overflow-hidden py-32 bg-bio-bg-alt/30">
            <div className="container text-center relative z-10">
               <motion.div 
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.8 }}
                 className="max-w-4xl mx-auto glass-card p-12 md:p-20 border-bio-primary/10 bg-white/60"
               >
                  <h2 className="text-4xl md:text-6xl font-bold mb-8 text-gradient uppercase">
                    Únete a la <span className="font-normal">Revolución</span>
                  </h2>
                  <p className="text-bio-dim text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed font-light">
                    Nuestra visión trasciende la técnica. Estamos construyendo el mañana donde la biología y el silicio coexisten en perfecta armonía.
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center gap-6">
                    <motion.button 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="btn-premium btn-primary px-10 py-4"
                    >
                       Descubrir Programa
                    </motion.button>
                    <motion.button 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="btn-premium btn-outline px-10 py-4"
                    >
                       Contactar Experto
                    </motion.button>
                  </div>
               </motion.div>
            </div>
          </section>
        </main>
      </AnimatePresence>

      <Footer />
    </div>
  );
}

export default App;
