import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Plane, Hotel, MapPin, Star } from 'lucide-react';

const packages = [
  {
    title: "Safari de Luxe",
    location: "Kenya",
    duration: "10 Jours",
    price: "2,490",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=600",
    tags: ["Lodge 5*", "Guide Privé", "Vols Incl."]
  },
  {
    title: "Escapade Boréale",
    location: "Islande",
    duration: "7 Jours",
    price: "1,850",
    image: "https://images.unsplash.com/photo-1476610182048-b716b8518aae?auto=format&fit=crop&q=80&w=600",
    tags: ["Aurores", "Hélicoptère", "Spa"]
  },
  {
    title: "Zen & Tradition",
    location: "Japon",
    duration: "12 Jours",
    price: "3,200",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=600",
    tags: ["Ryokan", "Shinkansen", "Culture"]
  },
  {
    title: "Oasis de Rêve",
    location: "Dubaï",
    duration: "5 Jours",
    price: "1,290",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=600",
    tags: ["Burj Khalifa", "Désert", "Shopping"]
  },
  {
    title: "Paradis Tropical",
    location: "Bali",
    duration: "14 Jours",
    price: "1,550",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=600",
    tags: ["Villas", "Plage", "Yoga"]
  }
];

const PackageShowcase = () => {
  const containerRef = useRef(null);

  return (
    <section className="py-24 bg-surface overflow-hidden">
      <div className="container mx-auto px-6 mb-16">
        <span className="accent-label">Offres Limitées</span>
        <h2 className="section-title">Voyages Organisés</h2>
      </div>

      <div 
        ref={containerRef}
        className="flex overflow-x-auto no-scrollbar gap-8 px-6 lg:px-[10%] cursor-grab active:cursor-grabbing"
      >
        {packages.map((pkg, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.8 }}
            className="min-w-[350px] md:min-w-[450px] group"
          >
            <div className="relative aspect-[4/5] overflow-hidden mb-6">
              <img 
                src={pkg.image} 
                alt={pkg.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute top-6 left-6 glass-card py-2 px-4 flex items-center gap-2">
                <MapPin size={14} className="text-secondary" />
                <span className="text-xs uppercase tracking-widest font-bold">{pkg.location}</span>
              </div>
              <div className="absolute bottom-6 right-6 bg-secondary text-primary px-4 py-2 font-bold font-serif text-lg">
                À partir de {pkg.price}€
              </div>
            </div>

            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-2xl font-serif text-ivory mb-1">{pkg.title}</h3>
                <p className="text-secondary/60 text-sm font-medium">{pkg.duration}</p>
              </div>
              <div className="flex text-secondary">
                {[1, 2, 3, 4, 5].map(i => <Star key={i} size={14} fill="currentColor" />)}
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {pkg.tags.map(tag => (
                <span key={tag} className="text-[10px] uppercase tracking-wider bg-white/5 border border-white/10 px-3 py-1 text-ivory/60">
                  {tag}
                </span>
              ))}
            </div>

            <button className="w-full btn-outline-gold group-hover:bg-secondary group-hover:text-primary py-4">
              Réserver Ce Voyage
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PackageShowcase;
