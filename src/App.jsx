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
        <section id="biomedica" className="bg-bg-alt relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
             <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--primary)_0%,_transparent_70%)]"></div>
          </div>
          
          <div className="container mx-auto px-6 text-center py-20">
             <h2 className="text-4xl font-bold mb-8">Únete a la <span className="neon-text">Revolución</span></h2>
             <p className="text-text-dim max-w-2xl mx-auto mb-12">
                La Ingeniería Biomédica es el puente entre los sueños de la medicina y las realidades de la ingeniería. 
                Estamos construyendo el mañana, hoy.
             </p>
             <button className="px-10 py-4 rounded-xl bg-gradient-to-r from-primary to-secondary text-bg-color font-bold font-tech uppercase tracking-widest hover:scale-105 transition-all shadow-[0_0_30px_rgba(0,242,255,0.3)]">
                Conoce más del Programa
             </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
