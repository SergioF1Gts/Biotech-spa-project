import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-bg-color min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Features />
        
        {/* Additional Section for engineering/tech connection */}
        <section id="biomedica" className="relative overflow-hidden bg-bg-color">
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
             <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--primary)_0%,_transparent_70%)]"></div>
          </div>
          
          <div className="container mx-auto px-6 text-center py-32 relative z-10">
             <div className="max-w-3xl mx-auto glass-card p-16 border-primary/5">
                <h2 className="text-4xl md:text-6xl font-bold mb-8">
                  ÚNETE A LA <span className="text-primary">REVOLUCIÓN</span>
                </h2>
                <p className="text-text-dim text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
                  La Ingeniería Biomédica es el puente entre la visión médica y la excelencia técnica. 
                  Estamos construyendo las realidades del mañana, hoy mismo.
                </p>
                <div className="flex flex-col md:flex-row justify-center gap-6">
                  <button className="btn-premium btn-primary px-12 py-4">
                     Descubrir Programa
                  </button>
                  <button className="btn-premium btn-outline px-12 py-4">
                     Contactar Experto
                  </button>
                </div>
             </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}


export default App;
