import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Search, MapPin, Calendar, Clock, PlaneTakeoff, ChevronDown, Globe, Compass, Umbrella, Map, Navigation, Heart } from 'lucide-react';

const destinations = [
  {
    id: 1,
    title: "MALDIVES",
    subtitle: "Évadez-vous aux",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&q=80&w=1920",
  },
  {
    id: 2,
    title: "PARIS",
    subtitle: "Redécouvrez les lumières de",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=1920",
  },
  {
    id: 3,
    title: "DUBAÏ",
    subtitle: "Visez le sommet à",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=1920",
  },
  {
    id: 4,
    title: "TOKYO",
    subtitle: "Immergez-vous dans",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=1920",
  }
];

const DestinationPanel = ({ onSelect }) => (
  <div className="p-10 bg-white border-t border-gray-100">
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
      
      {/* Search Input Simulation */}
      <div className="lg:col-span-3 mb-4">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input 
            type="text" 
            placeholder="Rechercher une destination..." 
            className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 focus:border-secondary outline-none rounded-lg text-logo-navy font-medium"
          />
        </div>
      </div>

      <div>
        <div className="flex items-center gap-2 mb-8">
          <Heart size={16} className="text-secondary" />
          <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Top Destinations</h4>
        </div>
        <div className="flex flex-wrap gap-2">
          {["France", "Espagne", "Italie", "Portugal", "Grèce", "Maroc", "Malte", "Turquie", "Tunisie"].map(d => (
            <button key={d} onClick={() => onSelect(d)} className="px-4 py-2 bg-gray-50 hover:bg-secondary hover:text-primary transition-all text-xs font-bold text-logo-navy border border-gray-100 rounded-md">
              {d}
            </button>
          ))}
        </div>
      </div>

      <div>
        <div className="flex items-center gap-2 mb-8">
          <Globe size={16} className="text-secondary" />
          <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Zones Géographiques</h4>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[
            { name: "Afrique", icon: <Globe size={18} /> },
            { name: "Europe", icon: <Compass size={18} /> },
            { name: "Moyen-Orient", icon: <Umbrella size={18} /> },
            { name: "Asie", icon: <Map size={18} /> },
            { name: "Océanie", icon: <Navigation size={18} /> },
            { name: "Amériques", icon: <Globe size={18} /> }
          ].map(z => (
            <button key={z.name} onClick={() => onSelect(z.name)} className="flex items-center gap-3 p-3 hover:bg-gray-50 transition-colors text-logo-navy font-bold text-sm border border-transparent hover:border-gray-100 rounded-lg">
              <span className="text-secondary/60">{z.icon}</span>
              {z.name}
            </button>
          ))}
        </div>
      </div>

      <div>
        <div className="flex items-center gap-2 mb-8">
          <Umbrella size={16} className="text-secondary" />
          <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Inspiration</h4>
        </div>
        <ul className="space-y-4">
          {["Voyages de Noce", "Séjours Luxe", "Croisières de Rêve", "Circuits Culturels"].map(item => (
            <li key={item} onClick={() => onSelect(item)} className="text-sm font-bold text-logo-navy hover:text-secondary cursor-pointer flex items-center gap-3 group">
              <div className="w-1.5 h-1.5 rounded-full bg-secondary scale-0 group-hover:scale-100 transition-transform" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

const DatePanel = ({ onSelect }) => (
  <div className="p-10 bg-white border-t border-gray-100">
    <div className="flex flex-col items-center">
      <div className="flex gap-4 mb-10">
        {["Fixe", "+/- 1j", "+/- 3j", "+/- 7j"].map(f => (
          <button key={f} className="px-6 py-2 border border-gray-200 text-[10px] font-bold uppercase tracking-widest text-logo-navy hover:bg-gray-50 transition-colors">
            {f}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 w-full max-w-4xl">
        {["Avril 2024", "Mai 2024"].map(m => (
          <div key={m}>
            <h4 className="text-center font-serif text-xl text-logo-navy mb-6">{m}</h4>
            <div className="grid grid-cols-7 gap-2">
              {["lu", "ma", "me", "je", "ve", "sa", "di"].map(d => (
                <div key={d} className="text-center text-[10px] text-gray-400 uppercase font-black">{d}</div>
              ))}
              {[...Array(30)].map((_, i) => (
                <button key={i} onClick={() => onSelect(`${i+1} ${m}`)} className="h-10 w-10 flex items-center justify-center hover:bg-secondary hover:text-primary transition-all text-sm font-bold text-logo-navy rounded-full">
                  {i + 1}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const Hero = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [searchData, setSearchData] = useState({
    destination: "N'importe où",
    departure: "Tous les aéroports",
    date: "N'importe quand",
    duration: "Peu importe"
  });

  const nextStep = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % destinations.length);
  };

  const prevStep = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + destinations.length) % destinations.length);
  };

  useEffect(() => {
    const timer = setInterval(nextStep, 8000);
    return () => clearInterval(timer);
  }, []);

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 1.1
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9,
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
    })
  };

  return (
    <div className="relative bg-primary">
      <section className="relative h-[80vh] w-full flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${destinations[currentIndex].image})` }}
            >
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/20 to-primary/80" />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="relative z-10 text-center container mx-auto px-6">
          <motion.div
            key={`text-${currentIndex}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <p className="text-xl md:text-3xl font-light text-ivory/90 mb-4 tracking-wide uppercase">
              {destinations[currentIndex].subtitle}
            </p>
            <h1 className="text-7xl md:text-9xl font-serif font-black text-ivory tracking-tighter leading-none">
              {destinations[currentIndex].title}
            </h1>
          </motion.div>
        </div>

        <div className="absolute top-1/2 left-0 w-full flex justify-between px-6 md:px-12 z-20 -translate-y-1/2 pointer-events-none">
          <button onClick={prevStep} className="w-12 h-12 rounded-full bg-secondary/80 text-primary flex items-center justify-center hover:bg-secondary pointer-events-auto shadow-xl transition-all"><ChevronLeft /></button>
          <button onClick={nextStep} className="w-12 h-12 rounded-full bg-secondary/80 text-primary flex items-center justify-center hover:bg-secondary pointer-events-auto shadow-xl transition-all"><ChevronRight /></button>
        </div>
      </section>

      {/* Search Section - High-End Pushing UI */}
      <div className="relative z-40 -mt-24 pb-8">
        <div className="container mx-auto px-6">
          <div className="bg-white rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.4)] overflow-hidden">
            
            {/* Main Bar */}
            <div className="flex flex-col lg:flex-row divide-y lg:divide-y-0 lg:divide-x divide-gray-100">
              {[
                { id: 'destination', label: 'Destination', value: searchData.destination, icon: <MapPin size={22} /> },
                { id: 'departure', label: 'Départ de', value: searchData.departure, icon: <PlaneTakeoff size={22} /> },
                { id: 'date', label: 'Date', value: searchData.date, icon: <Calendar size={22} /> },
                { id: 'duration', label: 'Durée', value: searchData.duration, icon: <Clock size={22} /> }
              ].map((field) => (
                <div 
                  key={field.id}
                  onClick={() => setActiveDropdown(activeDropdown === field.id ? null : field.id)}
                  className={`p-8 flex items-center gap-5 cursor-pointer hover:bg-gray-50 transition-all group flex-1 ${activeDropdown === field.id ? 'bg-gray-50' : ''}`}
                >
                  <div className={`transition-transform duration-300 ${activeDropdown === field.id ? 'scale-110 text-secondary' : 'text-secondary/60 group-hover:text-secondary'}`}>
                    {field.icon}
                  </div>
                  <div className="flex flex-col flex-1">
                    <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-1">{field.label}</span>
                    <div className="flex items-center justify-between">
                      <span className="text-logo-navy font-bold text-lg">{field.value}</span>
                      <ChevronDown size={16} className={`text-gray-300 transition-transform duration-500 ${activeDropdown === field.id ? 'rotate-180 text-secondary' : ''}`} />
                    </div>
                  </div>
                </div>
              ))}
              
              <button 
                onClick={() => navigate('/destinations')}
                className="bg-secondary hover:brightness-105 text-primary px-16 py-8 lg:py-0 font-black text-xl uppercase tracking-widest flex items-center justify-center gap-4 transition-all"
              >
                <Search size={24} strokeWidth={3} />
                Chercher
              </button>
            </div>

            {/* Pushing Panels */}
            <AnimatePresence>
              {activeDropdown && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden bg-white"
                >
                  {activeDropdown === 'destination' && (
                    <DestinationPanel onSelect={(v) => { setSearchData(p => ({ ...p, destination: v })); setActiveDropdown(null); }} />
                  )}
                  {activeDropdown === 'date' && (
                    <DatePanel onSelect={(v) => { setSearchData(p => ({ ...p, date: v })); setActiveDropdown(null); }} />
                  )}
                  {(activeDropdown === 'departure' || activeDropdown === 'duration') && (
                    <div className="p-20 text-center">
                      <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6 text-secondary/30">
                        {activeDropdown === 'departure' ? <PlaneTakeoff size={40} /> : <Clock size={40} />}
                      </div>
                      <h4 className="text-2xl font-serif text-logo-navy mb-2">Options personnalisées</h4>
                      <p className="text-gray-400">Cette fonctionnalité sera disponible prochainement pour vos recherches {activeDropdown === 'departure' ? 'de vols' : 'de séjours'}.</p>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
