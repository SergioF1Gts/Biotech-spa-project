import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section id="inicio" className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-32 pb-20 bg-bio-bg">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-5%] left-[-5%] w-[40%] h-[40%] bg-bio-primary/5 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-5%] right-[-5%] w-[40%] h-[40%] bg-bio-secondary/5 rounded-full blur-[120px] animate-pulse delay-700"></div>
      </div>

      <div className="container relative z-10 mx-auto text-center px-6">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-bio-primary/5 border border-bio-primary/10 mb-10">
            <span className="w-1.5 h-1.5 rounded-full bg-bio-primary"></span>
            <span className="text-bio-primary font-tech font-bold text-[9px] tracking-[0.4em] uppercase">
              Precision Bio-Engineering v4.0
            </span>
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-10 tracking-tighter text-bio-text uppercase">
            EL FUTURO DE LA <span className="text-bio-primary font-normal">SALUD</span> <br /> 
            ES <span className="text-gradient-secondary">HUMANO</span>
          </motion.h1>
          
          <motion.p variants={itemVariants} className="text-base md:text-lg text-bio-dim mb-12 max-w-2xl mx-auto leading-relaxed font-light">
            Fusionamos biología profunda con computación avanzada para redefinir el bienestar humano a través de interfaces orgánicas de alta precisión técnica.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center gap-6">
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-premium btn-primary text-[10px] px-12 py-4"
            >
              Ver Soluciones
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-premium btn-outline text-[10px] px-12 py-4"
            >
              Nuestra Visión
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Modern scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 flex flex-col items-center gap-4 hidden md:flex"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-bio-primary to-transparent"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
