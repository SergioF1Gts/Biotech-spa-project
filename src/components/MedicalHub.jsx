import React from 'react';
import { motion } from 'framer-motion';
import { Dna, Activity, ShieldCheck, Microscope } from 'lucide-react';

const MedicalHub = () => {
  return (
    <section id="tecnologia" className="bg-white/50 py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-bio-primary/20 to-transparent"></div>
      
      <div className="container relative z-10 mx-auto">
        <div className="text-center mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-bio-primary/5 border border-bio-primary/10 mb-6"
          >
            <Microscope size={14} className="text-bio-primary" />
            <span className="text-[10px] font-tech font-bold tracking-[0.4em] uppercase text-bio-primary">Clinical Diagnostic Hub</span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8">
            INGENIERÍA <span className="text-bio-primary italic font-light">CELULAR</span> DE PRECISIÓN
          </h2>
          <p className="text-bio-dim text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Monitorización en tiempo real y diagnóstico molecular avanzado para una salud proactiva y personalizada.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Diagnostic Card 1 */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="glass-card p-10 flex flex-col items-center text-center group"
          >
            <div className="w-16 h-16 rounded-2xl bg-bio-primary/10 flex items-center justify-center mb-8 group-hover:bg-bio-primary/20 transition-colors">
              <Dna className="text-bio-primary" size={32} />
            </div>
            <h4 className="text-xl font-bold mb-4 font-tech tracking-widest uppercase">Secuenciación DNA</h4>
            <p className="text-sm text-bio-dim font-light leading-relaxed mb-8">
              Análisis genómico en tiempo real con algoritmos de IA para predecir y prevenir anomalías biológicas.
            </p>
            <div className="w-full h-1.5 bg-bio-bg rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: '85%' }}
                transition={{ duration: 1.5, ease: "circOut" }}
                className="h-full bg-bio-primary"
              />
            </div>
          </motion.div>

          {/* Diagnostic Card 2 - Center (Special) */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="glass-card p-10 flex flex-col items-center text-center border-bio-primary/30 bg-white/80"
          >
            <div className="w-20 h-20 rounded-full border-2 border-bio-primary/20 flex items-center justify-center mb-8 relative">
              <Activity className="text-bio-primary animate-pulse" size={36} />
              <div className="absolute inset-0 rounded-full border-t-2 border-bio-primary animate-spin"></div>
            </div>
            <h4 className="text-xl font-bold mb-4 font-tech tracking-widest uppercase">Biometría Holística</h4>
            <p className="text-sm text-bio-dim font-light leading-relaxed mb-8">
              Sincronización total de constantes vitales a través de nuestra red neuronal de baja latencia.
            </p>
            <div className="flex gap-2 h-[40px] items-end justify-center">
               {[1, 2, 3, 4, 5].map(i => (
                 <motion.div 
                    key={i}
                    animate={{ height: [10, 35, 10] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.1 }}
                    className="w-1.5 bg-bio-primary/30 rounded-full"
                 />
               ))}
            </div>
          </motion.div>

          {/* Diagnostic Card 3 */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="glass-card p-10 flex flex-col items-center text-center group"
          >
            <div className="w-16 h-16 rounded-2xl bg-bio-secondary/10 flex items-center justify-center mb-8 group-hover:bg-bio-secondary/20 transition-colors">
              <ShieldCheck className="text-bio-secondary" size={32} />
            </div>
            <h4 className="text-xl font-bold mb-4 font-tech tracking-widest uppercase">Inmuno-Protección</h4>
            <p className="text-sm text-bio-dim font-light leading-relaxed mb-8">
              Sistemas de refuerzo inmunológico mediante nanotecnología sintética de grado médico.
            </p>
            <div className="w-full h-1.5 bg-bio-bg rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: '92%' }}
                transition={{ duration: 1.5, ease: "circOut", delay: 0.3 }}
                className="h-full bg-bio-secondary"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MedicalHub;
