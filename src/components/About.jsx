import React from 'react';

const About = () => {
  return (
    <section id="anatomia" className="container mx-auto px-6 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        <div className="relative">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl animate-pulse"></div>
          
          <div className="glass-card p-6 border-primary/10">
              {/* Specialized Medical Visualization */}
              <div className="bg-bg-alt h-[450px] rounded-2xl flex flex-col items-center justify-center p-8 text-center relative overflow-hidden group">
                 <div className="absolute inset-0 opacity-10 pointer-events-none" 
                      style={{ backgroundImage: 'radial-gradient(#0ea5e9 0.5px, transparent 0.5px)', backgroundSize: '20px 20px' }}></div>
                 
                 <div className="absolute top-4 left-6 flex flex-col items-start gap-1">
                    <h4 className="font-tech text-[10px] tracking-[0.2em] text-primary font-bold">BIO-METRIC ANALYSIS</h4>
                    <div className="flex gap-1">
                       <div className="w-1 h-1 bg-primary rounded-full animate-pulse"></div>
                       <div className="w-1 h-1 bg-primary rounded-full animate-pulse delay-150"></div>
                       <div className="w-1 h-1 bg-primary rounded-full animate-pulse delay-300"></div>
                    </div>
                 </div>

                 <div className="absolute top-4 right-6 text-right">
                    <p className="text-[10px] text-text-dim uppercase tracking-widest font-tech">System Status</p>
                    <p className="text-[10px] text-primary font-bold font-tech uppercase">Syncing...</p>
                 </div>

                 <div className="relative w-56 h-56 animate-float flex items-center justify-center">
                    {/* Visual representation of a cellular core */}
                    <div className="absolute inset-0 border-[1px] border-primary/20 rounded-full animate-[spin_12s_linear_infinite]"></div>
                    <div className="absolute inset-8 border-[1px] border-secondary/20 rounded-full animate-[spin_8s_linear_infinite_reverse]"></div>
                    <div className="absolute inset-[40px] bg-gradient-to-br from-primary to-secondary rounded-full blur-sm opacity-20"></div>
                    
                    <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(14,165,233,0.15)] relative">
                       <div className="w-20 h-20 border-[1px] border-primary/10 rounded-full flex items-center justify-center">
                          <div className="w-4 h-4 bg-primary rounded-full shadow-[0_0_15px_var(--primary)] animate-pulse"></div>
                       </div>
                       
                       {/* Floating data points */}
                       <div className="absolute -top-4 -right-2 bg-white px-2 py-1 rounded shadow-sm border border-slate-100 scale-75">
                          <span className="text-[10px] font-bold text-secondary">72 BPM</span>
                       </div>
                    </div>
                 </div>

                 <div className="mt-14 w-full space-y-10">
                    <div className="group/metric">
                       <div className="flex justify-between items-end mb-2">
                          <span className="text-[10px] text-text-dim uppercase font-tech tracking-widest group-hover/metric:text-primary transition-colors">Neural Mapping</span>
                          <span className="text-[10px] text-primary font-bold">88%</span>
                       </div>
                       <div className="h-1.5 bg-slate-200 rounded-full overflow-hidden">
                          <div className="h-full bg-primary w-[88%] transition-all duration-1000"></div>
                       </div>
                    </div>
                    
                    <div className="group/metric">
                       <div className="flex justify-between items-end mb-2">
                          <span className="text-[10px] text-text-dim uppercase font-tech tracking-widest group-hover/metric:text-secondary transition-colors">Tissue Density</span>
                          <span className="text-[10px] text-secondary font-bold">1.2 g/cm³</span>
                       </div>
                       <div className="h-1.5 bg-slate-200 rounded-full overflow-hidden">
                          <div className="h-full bg-secondary w-[65%] transition-all duration-1000 delay-500"></div>
                       </div>
                    </div>
                 </div>
              </div>
          </div>
        </div>

        <div className="space-y-10">
          <div>
            <div className="w-12 h-1 bg-primary mb-6"></div>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              FUSIÓN <span className="text-primary">ORGANICA</span> <br /> 
              Y <span className="text-secondary">SINTETICA</span>
            </h2>
            <div className="space-y-8 text-lg text-text-dim leading-relaxed">
              <p>
                Estamos en el umbral de una era donde la ingeniería de precisión se integra con los ritmos biológicos para restaurar y potenciar la capacidad humana.
              </p>
              <p>
                A través de la <strong>bioconectividad avanzada</strong>, desarrollamos interfaces que actúan como extensiones naturales del cuerpo humano, garantizando una simbiosis perfecta entre el tejido vivo y el silicio.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
              <div>
                <h4 className="text-sm font-bold tracking-widest text-text-main">BIOCOMPATIBILIDAD</h4>
                <p className="text-xs text-text-dim mt-1">Materiales de grado médico con cero rechazo inmunológico.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 rounded-full bg-secondary mt-2"></div>
              <div>
                <h4 className="text-sm font-bold tracking-widest text-text-main">SEÑALIZACIÓN NEURAL</h4>
                <p className="text-xs text-text-dim mt-1">Procesamiento de datos en tiempo real a nivel sináptico.</p>
              </div>
            </div>
          </div>
          
          <button className="btn-premium btn-primary px-8">
            Conocer Metodología
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;

