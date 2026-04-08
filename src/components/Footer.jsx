import React from 'react';
import { Activity, Heart, User, Globe, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-bg-alt pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Activity className="text-primary" size={24} />
              <span className="font-bold text-xl font-tech tracking-wider neon-text">BIO<span className="text-white">TECH</span></span>
            </div>
            <p className="text-text-dim max-w-sm mb-6">
              Liderando el futuro de la salud global mediante la ingeniería de vanguardia y la pasión por la vida. 
              Proyecto Universitario - Web II.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:text-primary transition-colors">
                <Globe size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:text-primary transition-colors">
                <User size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:text-primary transition-colors">
                <Mail size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-tech text-white mb-6 tracking-widest">Navegación</h4>
            <ul className="space-y-4 text-sm text-text-dim">
              <li><a href="#inicio" className="hover:text-primary transition-colors">Inicio</a></li>
              <li><a href="#anatomia" className="hover:text-primary transition-colors">Anatomía</a></li>
              <li><a href="#tecnologia" className="hover:text-primary transition-colors">Tecnología</a></li>
              <li><a href="#biomedica" className="hover:text-primary transition-colors">Biomédica</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-tech text-white mb-6 tracking-widest">Legal</h4>
            <ul className="space-y-4 text-sm text-text-dim">
              <li><a href="#" className="hover:text-primary transition-colors">Privacidad</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Términos</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contacto</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-text-dim font-tech tracking-widest">
          <p>© 2026 BIOTECH SPA. TODOS LOS DERECHOS RESERVADOS.</p>
          <p className="flex items-center gap-1">
            HECHO CON <Heart size={12} className="text-secondary fill-secondary" /> PARA WEB II
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
