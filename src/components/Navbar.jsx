import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, Menu, X, ArrowRight } from 'lucide-react';

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
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'py-4' : 'py-8'}`}
    >
      <div className={`container mx-auto px-6 h-full flex items-center justify-between transition-all duration-500 ${isScrolled ? 'glass-card py-4 px-10 shadow-2xl border-white/10' : 'bg-transparent border-transparent'}`}
        style={{ maxWidth: isScrolled ? '1100px' : '100%' }}>

        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="relative">
            <Activity className="text-primary animate-pulse group-hover:scale-110 transition-transform relative z-10" size={28} />
            <div className="absolute inset-0 bg-primary/20 blur-md rounded-full group-hover:bg-primary/40 transition-colors"></div>
          </div>
          <span className="font-bold text-2xl font-tech tracking-[0.25em] text-text-main">
            BIO<span className="text-primary transition-all group-hover:neon-text">TECH</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-16 lg:gap-24">
          <div className="flex items-center gap-10 lg:gap-14">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index + 0.5 }}
                className="text-[10px] font-tech font-bold uppercase tracking-[0.4em] text-text-dim hover:text-primary transition-all duration-300 relative group/link"
              >
                {link.name}
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-primary transition-all duration-500 group-hover/link:w-full"></span>
              </motion.a>
            ))}
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-premium btn-primary text-[10px] px-10 py-3.5 shadow-[0_0_20px_rgba(56,189,248,0.2)] overflow-hidden group/btn"
          >
            <span className="relative z-10">EXPLORAR</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:animate-[shimmer_1.5s_infinite] transition-transform"></div>
          </motion.button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-text-main hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(true)}>
          <Menu size={32} />
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-bg-color/90 backdrop-blur-xl flex justify-end"
            onClick={() => setMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="w-full max-w-sm h-full bg-bg-alt/50 p-10 flex flex-col border-l border-white/5"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-16">
                <div className="flex items-center gap-3">
                  <Activity className="text-primary" size={28} />
                  <span className="font-bold text-2xl font-tech tracking-widest uppercase">Bio<span className="text-primary">tech</span></span>
                </div>
                <button onClick={() => setMobileMenuOpen(false)} className="text-text-dim hover:text-secondary group p-2">
                  <X size={32} className="group-hover:rotate-90 transition-transform" />
                </button>
              </div>

              <div className="flex flex-col gap-8">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-4xl font-tech font-bold uppercase tracking-widest text-text-main hover:text-primary transition-all flex items-center justify-between group"
                  >
                    {link.name}
                    <ArrowRight className="opacity-0 group-hover:opacity-100 transition-all translate-x-[-20px] group-hover:translate-x-0" />
                  </a>
                ))}
              </div>

              <div className="mt-auto">
                <button className="btn-premium btn-primary w-full py-5 text-sm mb-8">
                  EMPEZAR AHORA
                </button>
                <p className="text-center text-[10px] text-text-dim uppercase tracking-[0.4em] font-tech">
                  © 2026 BIOTECH ELITE
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;

