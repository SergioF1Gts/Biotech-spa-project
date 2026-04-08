import React from 'react';

const About = () => {
  return (
    <section id="anatomia" className="container mx-auto px-6 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary opacity-10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-secondary opacity-10 rounded-full blur-3xl animate-pulse"></div>
          <div className="pulse-border rounded-2xl overflow-hidden glass-card p-4">
             {/* Simulating a data view or internal view */}
             <div className="bg-bg-alt h-[400px] rounded-xl flex flex-col items-center justify-center p-8 text-center">
                <div className="w-px h-full bg-gradient-to-b from-transparent via-primary to-transparent absolute left-1/2 -ml-px opacity-20"></div>
                <div className="w-full h-px bg-gradient-to-r from-transparent via-secondary to-transparent absolute top-1/2 -mt-px opacity-20"></div>
                
                <h4 className="font-tech text-xs tracking-widest text-primary mb-2">ANATOMY SCAN V.2.0</h4>
                <div className="flex items-center justify-between w-full mb-8">
                   <div className="text-left">
                      <p className="text-[10px] text-text-dim">HR (BPM)</p>
                      <p className="text-xl font-tech text-secondary">72</p>
                   </div>
                   <div className="text-right">
                      <p className="text-[10px] text-text-dim">O2 SAT</p>
                      <p className="text-xl font-tech text-primary">98%</p>
                   </div>
                </div>
                
                <div className="relative w-48 h-48 animate-float">
                   {/* Visual representation of a cell or organ core */}
                   <div className="absolute inset-0 border-2 border-primary border-dashed rounded-full animate-[spin_10s_linear_infinite]"></div>
                   <div className="absolute inset-4 border-2 border-secondary opacity-50 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
                   <div className="absolute inset-8 bg-gradient-to-br from-primary to-secondary rounded-full blur-md opacity-40"></div>
                   <div className="absolute inset-12 bg-white rounded-full flex items-center justify-center shadow-[0_0_20px_white]">
                      <div className="w-4 h-4 bg-bg-color rounded-full"></div>
                   </div>
                </div>

                <div className="mt-8 grid grid-cols-2 gap-4 w-full">
                   <div className="h-2 bg-primary/10 rounded-full overflow-hidden">
                      <div className="h-full bg-primary w-2/3 animate-pulse"></div>
                   </div>
                   <div className="h-2 bg-secondary/10 rounded-full overflow-hidden">
                      <div className="h-full bg-secondary w-1/2 animate-pulse"></div>
                   </div>
                </div>
             </div>
          </div>
        </div>

        <div>
          <h2 className="text-3xl md:text-5xl font-bold mb-8 transition-all">
            Fusión <span className="bio-text">Orgánica-Sintética</span>
          </h2>
          <div className="space-y-6 text-text-dim">
            <p>
              En la intersección de la biología y la microelectrónica, estamos desarrollando sistemas que no solo imitan la vida, sino que se integran con ella a nivel molecular.
            </p>
            <p>
              Nuestra visión en <strong>Ingeniería Biomédica</strong> es transformar el tratamiento de enfermedades mediante dispositivos inteligentes que monitorean, diagnostican y curan en tiempo real, operando como una extensión natural del propio organismo.
            </p>
            <ul className="space-y-3 font-tech text-sm tracking-wide text-white pt-4">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-primary"></span>
                COMPATIBILIDAD BIOLÓGICA AVANZADA
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-secondary"></span>
                PROCESAMIENTO DE SEÑAL NEURAL
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-primary"></span>
                SENSORES WEARABLES IMPLANTABLES
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
