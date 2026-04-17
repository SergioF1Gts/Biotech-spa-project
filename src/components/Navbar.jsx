import React, { useState, useEffect } from 'react';
import { Activity, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Anatomía', href: '#anatomia' },
    { name: 'Tecnología', href: '#tecnologia' },
    { name: 'Biomédica', href: '#biomedica' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'py-3' : 'py-6'}`}>
      <div className={`container mx-auto px-6 h-full flex items-center justify-between transition-all duration-500 ${isScrolled ? 'glass-card py-3 px-8 shadow-lg' : 'bg-transparent border-transparent'}`} 
           style={{ maxWidth: isScrolled ? '1100px' : '100%' }}>
        
        <div className="flex items-center gap-2">
          <Activity className="text-primary animate-pulse" size={32} />
          <span className="font-bold text-2xl font-tech tracking-wider text-text-main">
            BIO<span className="text-primary">TECH</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-14 lg:gap-20">
          <div className="flex items-center gap-10 lg:gap-14">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-sm font-tech font-semibold uppercase tracking-[0.2em] text-text-dim hover:text-primary transition-all duration-300 hover:translate-y-[-1px]"
              >
                {link.name}
              </a>
            ))}
          </div>
          <button className="btn-premium btn-primary text-xs px-8">
            Explorar
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-text-main hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(true)}>
          <Menu size={32} />
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      <div className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`} onClick={() => setMobileMenuOpen(false)}>
        {/* Drawer Content */}
        <div className="drawer-content" onClick={(e) => e.stopPropagation()}>
          <div className="flex justify-between items-center mb-10">
            <div className="flex items-center gap-2">
              <Activity className="text-primary" size={28} />
              <span className="font-bold text-xl font-tech tracking-wider">BIO<span className="text-primary">TECH</span></span>
            </div>
            <button onClick={() => setMobileMenuOpen(false)} className="text-text-dim hover:text-secondary">
              <X size={32} />
            </button>
          </div>

          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-tech font-bold uppercase tracking-widest text-text-main hover:text-primary transition-all hover:translate-x-2"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="mt-auto">
             <button className="btn-premium btn-primary w-full">
                Saber más
             </button>
             <p className="text-center text-xs text-text-dim mt-6 uppercase tracking-widest font-tech">
                Ingeniería Biomédica © 2026
             </p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

