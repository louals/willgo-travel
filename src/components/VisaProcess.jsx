import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const steps = [
  {
    number: "01",
    title: "Remplissez le formulaire",
    description: "Quelques minutes suffisent pour nous transmettre vos informations de base."
  },
  {
    number: "02",
    title: "Envoyez vos documents",
    description: "Téléchargez vos pièces justificatives en toute sécurité sur notre plateforme."
  },
  {
    number: "03",
    title: "Recevez votre visa",
    description: "Nous traitons votre demande et vous recevez votre visa par email."
  }
];

const VisaProcess = () => {
  return (
    <section id="visa" className="py-24 bg-surface border-y border-secondary/10 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-center mb-20 gap-10">
          <div className="max-w-2xl text-center lg:text-left">
            <span className="accent-label">Simplification</span>
            <h2 className="section-title">Visa Électronique en 3 Étapes</h2>
            <p className="text-ivory/60 text-lg">
              Évitez les files d'attente et la complexité administrative. 
              Notre équipe d'experts s'occupe de tout pour vous.
            </p>
          </div>
          <button className="btn-gold flex items-center gap-3 group whitespace-nowrap">
            Démarrer ma demande 
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-10 left-0 w-full h-[1px] bg-secondary/20 z-0" />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="flex flex-col items-center lg:items-start text-center lg:text-left"
              >
                <div className="w-20 h-20 bg-primary border-2 border-secondary flex items-center justify-center text-secondary text-2xl font-serif mb-8 rounded-full shadow-[0_0_20px_rgba(201,168,76,0.3)]">
                  {step.number}
                </div>
                <h3 className="text-2xl font-serif text-ivory mb-4">{step.title}</h3>
                <p className="text-ivory/40 leading-relaxed max-w-xs">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisaProcess;
