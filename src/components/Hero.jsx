import React from 'react';
import heroBg from '../assets/hero-bg.png';

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${heroBg})`,
          filter: 'brightness(0.4)'
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg-color/50 to-bg-color z-0"></div>

      <div className="container relative z-10 mx-auto px-6">
        <div className="max-w-3xl">
          <h4 className="neon-text font-tech tracking-[0.3em] mb-4 animate-in fade-in slide-in-from-left duration-700">
            Ingeniería Biomédica
          </h4>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 animate-in fade-in slide-in-from-bottom duration-1000">
            LA UNIÓN DE LA <span className="bio-text">VIDA</span> <br /> 
            Y LA <span className="neon-text">TECNOLOGÍA</span>
          </h1>
          <p className="text-lg text-text-dim mb-10 max-w-xl animate-in fade-in duration-1000 delay-300">
            Explorando las fronteras donde la biología humana se encuentra con la innovación digital. 
            Desde prótesis inteligentes hasta algoritmos neuronales, estamos redefiniendo el futuro de la medicina.
          </p>
          <div className="flex gap-4 animate-in fade-in duration-1000 delay-500">
            <button className="px-8 py-3 rounded-full bg-primary text-bg-color font-bold font-tech uppercase tracking-widest hover:scale-105 transition-transform">
              Ver Innovaciones
            </button>
            <button className="px-8 py-3 rounded-full border border-white/20 hover:border-primary transition-colors font-tech uppercase tracking-widest">
              Nuestra Visión
            </button>
          </div>
        </div>
      </div>

      {/* Decorative pulse element */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
        <div className="w-6 h-10 rounded-full border-2 border-text-dim flex justify-center p-1">
          <div className="w-1 h-3 bg-primary rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
