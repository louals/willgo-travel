import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const services = [
  {
    index: '01',
    title: 'Voyages Organisés',
    description:
      "Forfaits clé en main, de l'itinéraire à l'hébergement — chaque détail orchestré pour que vous n'ayez qu'à vivre l'instant.",
    tags: ['Tout compris', 'Groupe & privatif', 'Assistance 24/7'],
  },
  {
    index: '02',
    title: 'Voyages sur Mesure',
    description:
      "Votre voyage, entièrement conçu selon vos désirs. Rythme libre, étapes choisies, expériences exclusives — rien n'est standard.",
    tags: ['Personnalisation totale', 'Sur demande'],
  },
  {
    index: '03',
    title: 'Billetterie Aérienne',
    description:
      "Accès aux meilleurs tarifs négociés pour vols nationaux et internationaux, avec flexibilité garantie sur les modifications.",
    tags: ['Tarifs négociés', 'Classe affaires', 'Flexibilité'],
  },
  {
    index: '04',
    title: 'Hôtels & Séjours Prestige',
    description:
      "Une sélection rigoureuse d'établissements d'excellence — palaces, riads, lodges — curatée pour correspondre à votre univers.",
    tags: ['5 étoiles', 'Boutique-hôtels', 'Accords privilégiés'],
  },
  {
    index: '05',
    title: 'Visa & Formalités',
    description:
      "Traitement rapide de vos démarches administratives — e-visa, visa à l'arrivée — pour partir l'esprit entièrement libre.",
    tags: ['E-visa express', 'Suivi en temps réel'],
  },
];

const ArrowIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth="1"
    className="text-secondary/40 transition-all duration-400 group-hover:text-secondary group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
  >
    <path d="M3 13L13 3M13 3H6M13 3v7" />
  </svg>
);

const Services = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="services" className="bg-primary py-24 relative z-[5] overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="container mx-auto px-6 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-secondary/20"
        >
          <div>
            <span className="accent-label">Excellence & Savoir-Faire</span>
            <h2 className="section-title mb-0">
              Ce que nous offrons <em className="text-secondary not-italic font-serif">pour vous</em>
            </h2>
          </div>
          <p className="text-ivory/40 max-w-[180px] text-right text-sm leading-relaxed font-light mt-4 md:mt-0">
            Une expertise complète pour transformer chaque déplacement en un souvenir permanent.
          </p>
        </motion.div>

        {/* Service List */}
        <ul 
          className="divide-y divide-white/[0.07]"
          onMouseLeave={() => setOpenIndex(null)} // Closes all when mouse leaves the list
        >
          {services.map((service, i) => {
            const isOpen = openIndex === i;

            return (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ delay: i * 0.08, duration: 0.55 }}
                onMouseEnter={() => setOpenIndex(i)} // Trigger on hover in
                className="group grid grid-cols-[40px_1fr_auto] items-start gap-x-7 py-9 cursor-pointer relative"
              >
                <div className="absolute -inset-x-4 inset-y-0 bg-secondary/0 group-hover:bg-secondary/[0.03] transition-colors duration-500 pointer-events-none" />

                <span className="font-serif text-[11px] tracking-widest text-secondary/60 pt-1 select-none">
                  {service.index}
                </span>

                <div>
                  <h3 className="font-serif text-2xl text-ivory group-hover:text-secondary/90 transition-colors duration-300 leading-snug mb-0">
                    {service.title}
                  </h3>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="detail"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.38, ease: [0.4, 0, 0.2, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="text-ivory/45 text-[13px] leading-[1.8] font-light mt-3 max-w-lg">
                          {service.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mt-4">
                          {service.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-[9px] tracking-[0.2em] uppercase text-secondary border border-secondary/30 px-2.5 py-1 font-light"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div className="pt-1.5 flex-shrink-0">
                  <ArrowIcon />
                </div>
              </motion.li>
            );
          })}
        </ul>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex justify-between items-center mt-14"
        >
          <button className="group flex items-center gap-3 text-[11px] tracking-[0.22em] uppercase text-secondary font-light transition-all duration-300 bg-transparent border-none p-0">
            <span className="block w-8 h-px bg-secondary transition-all duration-300 group-hover:w-12" />
            Prendre contact
          </button>

          <div className="text-right">
            <span className="block font-serif text-3xl font-light text-secondary/50 leading-none">
              12+
            </span>
            <span className="text-[9px] tracking-[0.2em] uppercase text-ivory/25 font-light">
              années d'expertise
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;