import React from 'react';
import { Activity, Mail, Phone, MapPin, Globe, User, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#f1f5f9] pt-24 pb-12 relative overflow-hidden">
      {/* Decorative gradient for a premium feel */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
          {/* Brand and Mission */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Activity className="text-primary" size={28} />
              </div>
              <span className="font-bold text-3xl font-tech tracking-tighter text-text-main">
                BIO<span className="text-primary">TECH</span>
              </span>
            </div>
            <p className="text-text-dim text-lg leading-relaxed mb-10 max-w-md">
              Transformando el futuro de la medicina a través de la excelencia en ingeniería. 
              Garantizamos soluciones innovadoras que priorizan la vida humana y el progreso técnico.
            </p>
            <div className="flex items-center gap-8">
               <div className="flex flex-col">
                  <span className="text-2xl font-tech font-bold text-text-main">15+</span>
                  <span className="text-[10px] text-text-dim uppercase tracking-widest font-tech">Patentes</span>
               </div>
               <div className="w-[1px] h-10 bg-slate-200"></div>
               <div className="flex flex-col">
                  <span className="text-2xl font-tech font-bold text-text-main">100%</span>
                  <span className="text-[10px] text-text-dim uppercase tracking-widest font-tech">Seguridad</span>
               </div>
               <div className="w-[1px] h-10 bg-slate-200"></div>
               <div className="flex flex-col">
                  <span className="text-2xl font-tech font-bold text-text-main">2026</span>
                  <span className="text-[10px] text-text-dim uppercase tracking-widest font-tech">Visión</span>
               </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="font-tech font-bold text-sm tracking-[0.2em] mb-8 text-text-main uppercase">Navegación</h4>
            <ul className="space-y-4">
              {['Inicio', 'Anatomía Scan', 'Tecnología', 'Biomédica'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().split(' ')[0]}`} className="text-text-dim hover:text-primary transition-all duration-300 flex items-center gap-2 group">
                    <ArrowRight size={12} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact and Social */}
          <div className="lg:col-span-5 bg-white p-10 rounded-3xl shadow-sm border border-slate-100">
            <h4 className="font-tech font-bold text-sm tracking-[0.2em] mb-8 text-text-main uppercase">Contacto Global</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
               <div className="flex flex-col gap-4">
                  <div className="flex items-start gap-4">
                     <div className="w-10 h-10 rounded-full bg-bg-alt flex items-center justify-center shrink-0">
                        <MapPin size={18} className="text-primary" />
                     </div>
                     <span className="text-sm text-text-dim leading-snug">Distrito Tech, Bloque 7, Ciudad de Innovación</span>
                  </div>
                  <div className="flex items-center gap-4">
                     <div className="w-10 h-10 rounded-full bg-bg-alt flex items-center justify-center shrink-0">
                        <Phone size={18} className="text-primary" />
                     </div>
                     <span className="text-sm text-text-dim">+57 (123) 456-7890</span>
                  </div>
               </div>
               <div className="flex flex-col gap-6">
                  <div className="flex items-center gap-4">
                     <div className="w-10 h-10 rounded-full bg-bg-alt flex items-center justify-center shrink-0">
                        <Activity size={18} className="text-primary" />
                     </div>
                     <span className="text-sm text-text-dim">Emergencias R&D 24/7</span>
                  </div>
                  <button className="btn-premium btn-primary w-full text-xs py-3">
                     Contactar Ahora
                  </button>
               </div>
            </div>
            
            <div className="pt-8 border-t border-slate-100 flex justify-center gap-6">
               <a href="#" className="w-10 h-10 rounded-full border border-slate-100 flex items-center justify-center text-text-dim hover:bg-primary hover:text-white hover:border-primary transition-all shadow-sm">
                  <Globe size={18} />
               </a>
               <a href="#" className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-text-dim hover:bg-primary hover:text-white hover:border-primary transition-all shadow-sm">
                  <User size={18} />
               </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
             <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
             <p className="text-[10px] text-text-dim uppercase tracking-[0.3em] font-tech text-center md:text-left">
               © 2026 BIOTECH ENGINEERING SOLUTIONS • EXCELENCIA EN CADA CÉLULA
             </p>
          </div>
          <div className="flex gap-10">
            <a href="#" className="text-[10px] text-text-dim hover:text-primary uppercase tracking-widest font-tech transition-colors">Privacidad</a>
            <a href="#" className="text-[10px] text-text-dim hover:text-primary uppercase tracking-widest font-tech transition-colors">Términos Legales</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;



