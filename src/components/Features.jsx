import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Heart, Zap, Globe, ShieldCheck } from 'lucide-react';

const BentoCard = ({ icon: Icon, title, description, colorClass, className, delay = 0 }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    whileHover={{ y: -5 }}
    className={`glass-card p-6 md:p-8 group relative overflow-hidden flex flex-col justify-between border-bio-primary/10 bg-white/40 hover:bg-white/80 transition-all duration-500 ${className}`}
  >
    <div className={`absolute top-0 right-0 w-32 h-32 -mr-12 -mt-12 opacity-10 group-hover:opacity-30 transition-opacity rounded-full blur-2xl ${colorClass}`}></div>
    
    <div>
      <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 bg-bio-bg-alt/50`}>
        <Icon className={colorClass.replace('bg-bio-', 'text-bio-')} size={24} />
      </div>
      
      <h3 className="text-lg md:text-xl font-bold mb-3 tracking-widest text-bio-text group-hover:text-bio-primary transition-colors uppercase">
        {title}
      </h3>
      
      <p className="text-bio-dim text-xs md:text-sm leading-relaxed font-light">
        {description}
      </p>
    </div>
    
    <div className="mt-6 md:mt-8">
      <button className="text-[9px] font-tech font-bold uppercase tracking-[0.3em] text-bio-primary/60 group-hover:text-bio-primary flex items-center gap-3 transition-all">
        Saber más <span className="opacity-0 group-hover:opacity-100 transition-all">→</span>
      </button>
    </div>
  </motion.div>
);

const Features = () => {
  return (
    <section id="tecnologia" className="relative py-24 md:py-32 overflow-hidden bg-white/30">
      <div className="container relative z-10 mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 md:mb-20 gap-8">
          <div className="max-w-2xl">
             <motion.div 
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="flex items-center gap-3 mb-6"
             >
                <div className="w-10 h-[1px] bg-bio-primary"></div>
                <span className="text-[10px] font-tech font-bold text-bio-primary uppercase tracking-[0.4em]">Propulsión Biomédica</span>
             </motion.div>
             <motion.h2 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
               className="text-4xl md:text-6xl font-bold leading-[1.1] tracking-tighter"
             >
                VANGUARDIA EN <br />
                <span className="text-gradient">TECNOLOGÍA</span>
             </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-bio-dim max-w-sm leading-relaxed font-light text-base md:text-lg"
          >
            Integrando ingeniería de precisión con biociencia profunda para redefinir el límite de lo posible.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <BentoCard 
            icon={Cpu}
            title="Prótesis Biónicas"
            description="Extremidades con respuesta neuronal directa y sensores de mioelectricidad."
            colorClass="bg-bio-primary"
            className="md:col-span-2"
            delay={0.1}
          />
          <BentoCard 
            icon={Heart}
            title="Bio-Impresión"
            description="Válvulas cardíacas y tejidos funcionales de grado clínico."
            colorClass="bg-bio-secondary"
            className="md:col-span-1"
            delay={0.2}
          />
          <BentoCard 
            icon={ShieldCheck}
            title="Seguridad Total"
            description="Protocolos de seguridad garantizada en cada proceso molecular."
            colorClass="bg-bio-primary"
            className="md:col-span-1 row-span-2 flex flex-col justify-center text-center"
            delay={0.3}
          />
          <BentoCard 
            icon={Zap}
            title="Neurotecnología"
            description="Interfaces cerebro-computadora de latencia casi inexistente."
            colorClass="bg-bio-primary"
            className="md:col-span-1"
            delay={0.4}
          />
          <BentoCard 
            icon={Globe}
            title="Red Global"
            description="Conectividad total en tiempo real para pacientes críticos."
            colorClass="bg-bio-secondary"
            className="md:col-span-2"
            delay={0.5}
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
