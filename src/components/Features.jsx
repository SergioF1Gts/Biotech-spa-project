import React from 'react';
import { Cpu, Heart, Zap, Glasses } from 'lucide-react';

const Card = ({ icon: Icon, title, description, colorClass }) => (
  <div className="glass-card p-8 group relative overflow-hidden">
    <div className={`absolute top-0 right-0 w-24 h-24 -mr-8 -mt-8 opacity-10 group-hover:opacity-20 transition-opacity ${colorClass}`}>
      <Icon size={96} />
    </div>
    <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-6 ${colorClass} bg-opacity-20`}>
      <Icon className={colorClass.replace('bg-', 'text-')} size={24} />
    </div>
    <h3 className="text-xl font-bold mb-4">{title}</h3>
    <p className="text-text-dim text-sm leading-relaxed">
      {description}
    </p>
    <div className={`mt-6 w-0 group-hover:w-full h-1 transition-all duration-500 ${colorClass}`}></div>
  </div>
);

const Features = () => {
  const applications = [
    {
      icon: Cpu,
      title: "Prótesis Biónicas",
      description: "Desarrollo de extremidades con respuesta neuronal directa, permitiendo movimientos naturales mediante sensores de mioelectricidad.",
      colorClass: "bg-primary"
    },
    {
      icon: Heart,
      title: "Órganos Bio-Impresos",
      description: "Ingeniería de tejidos a nivel celular para la creación de válvulas cardíacas y tejidos funcionales compatibles con el receptor.",
      colorClass: "bg-secondary"
    },
    {
      icon: Zap,
      title: "Neurotecnología",
      description: "Interfaces cerebro-computadora (BCI) diseñadas para restaurar la movilidad y comunicación en pacientes con daño neuronal.",
      colorClass: "bg-primary"
    },
    {
      icon: Glasses,
      title: "Nanomedicina",
      description: "Dispositivos a escala nanométrica para la entrega precisa de fármacos y detección temprana de patologías a nivel molecular.",
      colorClass: "bg-secondary"
    }
  ];

  return (
    <section id="tecnologia" className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Fronteras de la <span className="neon-text">Innovación</span></h2>
        <p className="text-text-dim max-w-2xl mx-auto">
          La ingeniería biomédica no solo cura, sino que potencia las capacidades humanas a través de soluciones tecnológicas disruptivas.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {applications.map((app, index) => (
          <Card key={index} {...app} />
        ))}
      </div>
    </section>
  );
};

export default Features;
