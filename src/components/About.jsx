import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="anatomia" className="relative py-24 lg:py-32 overflow-hidden bg-white/50">
      {/* Abstract Background Elements */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[300px] h-[300px] bg-bio-primary/5 rounded-full blur-[80px] pointer-events-none"></div>
      
      <div className="container relative z-10 mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative order-2 lg:order-1 flex justify-center"
          >
            <div className="glass-card p-1 overflow-hidden border-bio-primary/10 shadow-xl w-full max-w-[500px]">
                <div className="bg-white/80 backdrop-blur-3xl rounded-2xl flex flex-col items-center justify-center p-8 md:p-12 relative overflow-hidden group min-h-[450px]">
                   <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
                         style={{ backgroundImage: 'radial-gradient(#0ea5e9 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
                   
                   <div className="absolute top-8 left-10">
                      <h4 className="font-tech text-[9px] tracking-[0.4em] text-bio-primary font-bold uppercase mb-2">Neural Scan v2.0</h4>
                      <div className="flex gap-2">
                         {[0, 1, 2].map(i => (
                           <motion.div 
                             key={i}
                             animate={{ opacity: [0.2, 1, 0.2] }}
                             transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                             className="w-1 h-1 bg-bio-primary rounded-full"
                           />
                         ))}
                      </div>
                   </div>

                   <div className="relative w-48 h-48 md:w-64 md:h-64 flex items-center justify-center my-8">
                      <motion.div 
                        animate={{ rotate: 360 }}
                        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 border border-bio-primary/20 rounded-full border-dashed"
                      />
                      <div className="absolute inset-[50px] bg-bio-primary/5 rounded-full blur-[30px] animate-pulse"></div>
                      
                      <motion.div 
                        whileHover={{ scale: 1.05 }}
                        className="w-36 h-36 md:w-44 md:h-44 bg-white/80 backdrop-blur-2xl rounded-full flex items-center justify-center shadow-lg border border-bio-primary/10 relative z-10"
                      >
                         <div className="w-20 h-20 border border-bio-primary/10 rounded-full flex items-center justify-center">
                            <motion.div 
                              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                              transition={{ duration: 2.5, repeat: Infinity }}
                              className="w-6 h-6 bg-bio-primary rounded-full shadow-[0_0_15px_rgba(14,165,233,0.3)]"
                            />
                         </div>
                      </motion.div>
                   </div>

                   <div className="w-full space-y-6 mt-4">
                      <div className="group/metric">
                         <div className="flex justify-between items-end mb-2">
                            <span className="text-[9px] text-bio-dim uppercase font-tech tracking-[0.3em]">Neural Synchronization</span>
                            <span className="text-[9px] text-bio-primary font-bold font-tech">99.2%</span>
                       </div>
                       <div className="h-1 bg-bio-bg-alt rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: '99%' }}
                            transition={{ duration: 2 }}
                            className="h-full bg-bio-primary"
                          />
                       </div>
                    </div>
                 </div>
              </div>
          </div>
        </motion.div>

        <div className="space-y-12 order-1 lg:order-2">
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-1 bg-gradient-to-r from-bio-primary to-transparent mb-8 rounded-full"></div>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-[1.1] tracking-tighter">
              FUSIÓN <br />
              <span className="text-bio-primary font-normal">ORGÁNICA</span> <br /> 
              Y <span className="text-gradient-secondary font-normal">SINTÉTICA</span>
            </h2>
            <div className="space-y-8 text-xl text-bio-dim leading-relaxed font-light">
              <p>
                Estamos en el umbral de una era donde la <span className="text-bio-text font-medium">ingeniería de precisión</span> se integra con los ritmos biológicos para potenciar la vida.
              </p>
              <p>
                Desarrollamos interfaces que actúan como extensiones naturales, garantizando una simbiosis perfecta entre el <span className="font-normal text-bio-primary">tejido vivo</span> y el silicio.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="glass-card p-6 md:p-8 border-bio-primary/10 bg-white/60">
              <h4 className="text-[10px] font-bold tracking-[0.3em] text-bio-text uppercase mb-3">Materiales</h4>
              <p className="text-[11px] text-bio-dim leading-relaxed font-light">Grado médico con cero rechazo biológico garantizado.</p>
            </div>
            <div className="glass-card p-6 md:p-8 border-bio-primary/10 bg-white/60">
              <h4 className="text-[10px] font-bold tracking-[0.3em] text-bio-text uppercase mb-3">Red Neuronal</h4>
              <p className="text-[11px] text-bio-dim leading-relaxed font-light">Procesamiento sináptico con latencia zero-point.</p>
            </div>
          </div>
        </div>
      </div>
     </div>
    </section>
  );
};

export default About;
