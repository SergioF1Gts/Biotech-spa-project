import React from 'react';
import { Cpu, Heart, Zap, Glasses } from 'lucide-react';

const Card = ({ icon: Icon, title, description, colorClass, borderClass }) => (
  <div className={`glass-card p-10 group relative overflow-hidden flex flex-col items-center text-center h-full border-t-4 ${borderClass}`}>
    <div className={`absolute top-0 right-0 w-32 h-32 -mr-12 -mt-12 opacity-5 group-hover:opacity-10 transition-opacity ${colorClass} rounded-full`}></div>
    
    <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-8 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 ${colorClass.replace('bg-', 'bg-')}/10`}>
      <Icon className={colorClass.replace('bg-', 'text-')} size={40} />
    </div>
    
    <h3 className="text-xl font-bold mb-5 tracking-widest text-text-main group-hover:text-primary transition-colors">
      {title}
    </h3>
    
    <p className="text-text-dim text-sm leading-relaxed mb-8">
      {description}
    </p>
    
    <div className="mt-auto pt-4">
      <button className="text-[10px] font-tech font-bold uppercase tracking-[0.2em] text-primary flex items-center gap-2 group-hover:gap-3 transition-all">
        Ver detalles <span className="text-lg">→</span>
      </button>
    </div>
  </div>
);

const Features = () => {
  const applications = [
    {
      icon: Cpu,
      title: "Prótesis Biónicas",
      description: "Desarrollo de extremidades con respuesta neuronal directa, permitiendo movimientos naturales mediante sensores de mioelectricidad avanzada.",
      colorClass: "bg-primary",
      borderClass: "border-primary"
    },
    {
      icon: Heart,
      title: "Bio-Impresión",
      description: "Ingeniería de tejidos a nivel celular para la creación de válvulas cardíacas y tejidos funcionales compatibles con el cuerpo humano.",
      colorClass: "bg-secondary",
      borderClass: "border-secondary"
    },
    {
      icon: Zap,
      title: "Neurotecnología",
      description: "Interfaces cerebro-computadora (BCI) diseñadas para restaurar la movilidad y comunicación en pacientes con daño neuronal severo.",
      colorClass: "bg-primary",
      borderClass: "border-primary"
    },
    {
      icon: Glasses,
      title: "Nanomedicina",
      description: "Dispositivos a escala nanométrica para la entrega precisa de fármacos y detección temprana de patologías a nivel molecular sensible.",
      colorClass: "bg-secondary",
      borderClass: "border-secondary"
    }
  ];

  return (
    <section id="tecnologia" className="bg-bg-alt relative py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-xl">
             <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-[1px] bg-primary"></div>
                <span className="text-xs font-tech font-bold text-primary uppercase tracking-[0.3em]">Áreas de Enfoque</span>
             </div>
             <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                VANGUARDIA EN <span className="text-primary">BIOTECNOLOGÍA</span>
             </h2>
          </div>
          <p className="text-text-dim max-w-md text-right md:text-left leading-relaxed">
            Nuestra labor integra la ingeniería de precisión con el conocimiento biológico más profundo para resolver los retos médicos del siglo XXI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {applications.map((app, index) => (
            <Card key={index} {...app} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

