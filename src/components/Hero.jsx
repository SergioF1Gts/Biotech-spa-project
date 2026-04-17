import React from 'react';
import heroBg from '../assets/hero-bg-new.png';

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-[90vh] flex items-center overflow-hidden py-0">
      {/* Background with subtle medical tech aesthetic */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${heroBg})`,
          opacity: '0.8'
        }}
      ></div>
      
      {/* Soft gradient overlay for readability and "premium" feel */}
      <div className="absolute inset-0 bg-gradient-to-r from-bg-color via-bg-color/80 to-transparent z-1"></div>

      <div className="container relative z-10 mx-auto px-6 pt-20">
        <div className="max-w-3xl">
          <div className="inline-block px-4 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6 animate-in fade-in slide-in-from-left duration-700">
            <span className="text-primary font-tech font-bold text-xs tracking-[0.3em] uppercase">
              Innovación en Ingeniería Biomédica
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-8 animate-in fade-in slide-in-from-bottom duration-1000">
            EL FUTURO DE LA <span className="text-primary">SALUD</span> <br /> 
            ES <span className="bio-text">HUMANO</span> Y <span className="text-primary">DIGITAL</span>
          </h1>
          
          <p className="text-xl text-text-dim mb-12 max-w-xl animate-in fade-in duration-1000 delay-300 leading-relaxed">
            Estamos redefiniendo la frontera entre la biología y la tecnología para crear soluciones que no solo traten, sino que transformen la vida humana a través de la excelencia técnica.
          </p>
          
          <div className="flex flex-wrap gap-5 animate-in fade-in duration-1000 delay-500">
            <button className="btn-premium btn-primary text-sm px-10">
              Ver Soluciones
            </button>
            <button className="btn-premium btn-outline text-sm px-10">
              Nuestra Visión
            </button>
          </div>
        </div>
      </div>

      {/* Modern scroll indicator */}
      <div className="absolute bottom-10 left-6 flex flex-col items-center gap-3 opacity-40 md:flex hidden">
        <span className="font-tech text-[10px] tracking-[0.3em] uppercase rotate-90 mb-8 origin-left whitespace-nowrap">Desliza para explorar</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-primary to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;

