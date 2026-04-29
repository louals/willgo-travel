import React from 'react';
import { motion } from 'framer-motion';

const destinations = [
  
  {
    name: "Malé Atoll",
    country: "Maldives",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&q=80&w=800",
    link: "#"
  },
  {
    name: "Paris",
    country: "France",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=800",
    link: "#"
  }
];

const Destinations = () => {
  return (
    <section id="voyages" className="py-24 bg-ivory text-primary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <span className="accent-label text-secondary">Évasion</span>
          <h2 className="section-title text-primary">Destinations Phares</h2>
          <div className="w-24 h-[1px] bg-secondary mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {destinations.map((dest, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="group relative h-[600px] overflow-hidden cursor-pointer shadow-2xl"
            >
              {/* Image with zoom effect */}
              <motion.div 
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${dest.image})` }}
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Content */}
              <div className="absolute inset-0 p-10 flex flex-col justify-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-secondary font-accent italic text-lg mb-2">{dest.country}</p>
                <h3 className="text-4xl font-serif text-ivory mb-6">{dest.name}</h3>
                
                <div className="overflow-hidden h-0 group-hover:h-12 transition-all duration-500">
                   <a href={dest.link} className="text-ivory uppercase tracking-widest text-sm flex items-center gap-2">
                     Découvrir <div className="w-8 h-[1px] bg-secondary"></div>
                   </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;
