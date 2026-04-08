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
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'py-4' : 'py-6'}`}>
      <div className={`container mx-auto px-6 h-full flex items-center justify-between glass-card ${isScrolled ? 'rounded-full mx-4 shadow-xl' : 'bg-transparent border-transparent'}`} 
           style={{ maxWidth: isScrolled ? '1100px' : '100%', border: isScrolled ? '' : 'none' }}>
        
        <div className="flex items-center gap-2">
          <Activity className="text-primary animate-pulse" size={28} />
          <span className="font-bold text-xl font-tech tracking-wider neon-text">BIO<span className="text-white">TECH</span></span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-tech uppercase tracking-widest text-text-dim hover:text-primary transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
          <button className="px-6 py-2 rounded-full border border-primary text-primary font-tech uppercase text-xs tracking-widest hover:bg-primary hover:text-bg-color transition-all duration-300">
            Explorar
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-4 right-4 glass-card p-6 flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 duration-300">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-tech uppercase tracking-widest text-text-main hover:text-primary"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
      
      {/* Tailwind Simulation via inline styles or class names if I add them later, 
          but for now I will use standard CSS classes I defined in index.css 
          and some standard utility names I'll add to index.css if needed */}
    </nav>
  );
};

export default Navbar;
