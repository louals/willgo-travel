import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, SlidersHorizontal, MapPin, Calendar, Users, Star, ChevronDown, X, Heart } from 'lucide-react';

const TRIPS = [
  {
    id: 1,
    title: "Évasion aux Maldives",
    location: "Malé Atoll, Maldives",
    category: "Luxe",
    price: 3500,
    days: 10,
    people: 2,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&q=80&w=800",
    badge: "Populaire",
    region: "Asie"
  },

  {
    id: 3,
    title: "Lumières de Paris",
    location: "Paris, France",
    category: "City Trip",
    price: 1200,
    days: 5,
    people: 2,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=800",
    region: "Europe"
  },
  {
    id: 4,
    title: "Dubaï Futuriste",
    location: "Dubaï, Émirats Arabes Unis",
    category: "Luxe",
    price: 2800,
    days: 8,
    people: 2,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=800",
    badge: "Nouveau",
    region: "Moyen-Orient"
  },
  {
    id: 5,
    title: "Aventure Safari",
    location: "Maasai Mara, Kenya",
    category: "Aventure",
    price: 4200,
    days: 12,
    people: 2,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=800",
    badge: "Safari",
    region: "Afrique"
  },
  {
    id: 6,
    title: "Sanctuaire de Bali",
    location: "Ubud, Indonésie",
    category: "Détente",
    price: 2100,
    days: 14,
    people: 2,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=800",
    region: "Asie"
  },
  {
    id: 7,
    title: "Traditions du Japon",
    location: "Kyoto, Japon",
    category: "Culturel",
    price: 3200,
    days: 10,
    people: 2,
    rating: 5.0,
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=800",
    badge: "Chef d'œuvre",
    region: "Asie"
  },
  {
    id: 8,
    title: "Escale à Rome",
    location: "Rome, Italie",
    category: "City Trip",
    price: 1100,
    days: 4,
    people: 2,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&q=80&w=800",
    region: "Europe"
  },
  {
    id: 9,
    title: "Désert d'Azerbaïdjan",
    location: "Bakou, Azerbaïdjan",
    category: "Aventure",
    price: 1500,
    days: 7,
    people: 2,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1528642463367-826048fc4196?auto=format&fit=crop&q=80&w=800",
    badge: "À découvrir",
    region: "Asie"
  },
  {
    id: 10,
    title: "Pyramides de Gizeh",
    location: "Le Caire, Égypte",
    category: "Culturel",
    price: 1300,
    days: 6,
    people: 2,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&q=80&w=800",
    region: "Afrique"
  }
];

const FilterSidebar = ({ filters, setFilters, onClose }) => {
  const categories = ["Luxe", "Culturel", "City Trip", "Aventure", "Détente"];
  const regions = ["Europe", "Asie", "Moyen-Orient", "Afrique", "Amérique"];

  return (
    <div className="space-y-10">
      {/* Search */}
      <div>
        <h4 className="text-xl font-display text-[#ffffff] mb-4">Recherche</h4>
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input 
            type="text" 
            placeholder="Où voulez-vous aller ?" 
            value={filters.search}
            onChange={(e) => setFilters({...filters, search: e.target.value})}
            className="w-full pl-12 pr-4 py-3 bg-white border border-gray-100 focus:border-secondary outline-none rounded-lg text-logo-navy text-sm font-medium transition-all"
          />
        </div>
      </div>

      {/* Price Range */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h4 className="text-md font-bold ">Budget Max</h4>
          <span className="text-secondary font-bold">{filters.maxPrice}€</span>
        </div>
        <input 
          type="range" 
          min="500" 
          max="5000" 
          step="100"
          value={filters.maxPrice}
          onChange={(e) => setFilters({...filters, maxPrice: parseInt(e.target.value)})}
          className="w-full h-1 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-secondary"
        />
        <div className="flex justify-between text-[10px] text-gray-400 mt-2 font-bold uppercase tracking-widest">
          <span>500€</span>
          <span>5000€</span>
        </div>
      </div>

      {/* Categories */}
      <div>
        <h4 className="text-md font-bold mb-4">Type de Voyage</h4>
        <div className="space-y-3">
          {categories.map(cat => (
            <label key={cat} className="flex items-center gap-3 cursor-pointer group">
              <div className="relative flex items-center justify-center">
                <input 
                  type="checkbox" 
                  checked={filters.categories.includes(cat)}
                  onChange={() => {
                    const newCats = filters.categories.includes(cat)
                      ? filters.categories.filter(c => c !== cat)
                      : [...filters.categories, cat];
                    setFilters({...filters, categories: newCats});
                  }}
                  className="peer h-5 w-5 appearance-none rounded border border-gray-200 checked:bg-secondary checked:border-secondary transition-all"
                />
                <motion.div 
                  initial={false}
                  animate={{ scale: filters.categories.includes(cat) ? 1 : 0 }}
                  className="absolute pointer-events-none text-primary"
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="3">
                    <path d="M2 6l3 3 5-5" />
                  </svg>
                </motion.div>
              </div>
              <span className="text-sm text-gray-100 group-hover:text-secondary transition-colors">{cat}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Regions */}
      <div>
        <h4 className="text-md font-bold mb-4">Régions</h4>
        <div className="flex flex-wrap gap-2">
          {regions.map(region => (
            <button
              key={region}
              onClick={() => {
                const newRegions = filters.regions.includes(region)
                  ? filters.regions.filter(r => r !== region)
                  : [...filters.regions, region];
                setFilters({...filters, regions: newRegions});
              }}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all border ${
                filters.regions.includes(region)
                  ? 'bg-secondary border-secondary'
                  : 'bg-white border-gray-100 text-gray-900 hover:border-secondary '
              }`}
            >
              {region}
            </button>
          ))}
        </div>
      </div>

      <button 
        onClick={() => setFilters({ search: "", maxPrice: 5000, categories: [], regions: [], sort: "default" })}
        className="w-full py-4 text-xs font-black uppercase tracking-widest text-gray-400 hover:text-secondary border-t border-gray-50 pt-10 transition-colors"
      >
        Réinitialiser les filtres
      </button>
    </div>
  );
};

const TripCard = ({ trip }) => (
  <motion.div
    layout
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.9 }}
    transition={{ duration: 0.4 }}
    className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-50"
  >
    <div className="relative h-64 overflow-hidden">
      <img 
        src={trip.image} 
        alt={trip.title} 
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-logo-navy/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {trip.badge && (
        <div className="absolute top-4 left-4 px-3 py-1 bg-secondary text-primary text-[10px] font-black uppercase tracking-widest rounded-sm shadow-xl">
          {trip.badge}
        </div>
      )}
      
      <button className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-ivory hover:bg-secondary hover:text-primary transition-all duration-300">
        <Heart size={18} />
      </button>

      <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
        <div className="bg-white/95 backdrop-blur-sm p-3 rounded-lg flex items-center gap-2">
          <Star className="text-secondary fill-secondary" size={12} />
          <span className="text-logo-navy font-bold text-xs">{trip.rating}</span>
        </div>
        <div className="bg-secondary p-3 rounded-lg shadow-xl">
          <span className="text-primary font-black text-lg">{trip.price}€</span>
          <span className="text-primary/60 text-[10px] block font-bold leading-none uppercase">Par pers.</span>
        </div>
      </div>
    </div>

    <div className="p-6">
      <div className="flex items-center gap-2 text-secondary mb-3">
        <MapPin size={14} />
        <span className="text-[10px] font-black uppercase tracking-widest">{trip.location}</span>
      </div>
      <h3 className="text-xl font-serif text-logo-navy mb-4 group-hover:text-secondary transition-colors duration-300">
        {trip.title}
      </h3>
      
      <div className="flex items-center gap-6 pt-4 border-t border-gray-50">
        <div className="flex items-center gap-2 text-gray-400">
          <Calendar size={16} />
          <span className="text-xs font-bold uppercase tracking-wider">{trip.days} Jours</span>
        </div>
        <div className="flex items-center gap-2 text-gray-400">
          <Users size={16} />
          <span className="text-xs font-bold uppercase tracking-wider">{trip.people} Pers.</span>
        </div>
      </div>
    </div>
  </motion.div>
);

const DestinationsPage = () => {
  const [filters, setFilters] = useState({
    search: "",
    maxPrice: 5000,
    categories: [],
    regions: [],
    sort: "default"
  });

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const filteredTrips = useMemo(() => {
    let result = TRIPS.filter(trip => {
      const matchesSearch = trip.title.toLowerCase().includes(filters.search.toLowerCase()) || 
                          trip.location.toLowerCase().includes(filters.search.toLowerCase());
      const matchesPrice = trip.price <= filters.maxPrice;
      const matchesCategory = filters.categories.length === 0 || filters.categories.includes(trip.category);
      const matchesRegion = filters.regions.length === 0 || filters.regions.includes(trip.region);
      
      return matchesSearch && matchesPrice && matchesCategory && matchesRegion;
    });

    if (filters.sort === "price-asc") result.sort((a, b) => a.price - b.price);
    if (filters.sort === "price-desc") result.sort((a, b) => b.price - a.price);
    if (filters.sort === "rating") result.sort((a, b) => b.rating - a.rating);

    return result;
  }, [filters]);

  return (
    <main className="bg-primary min-h-screen pt-28 pb-20">
      {/* Background Decorative Element */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] overflow-hidden">
        <span className="absolute -top-20 -left-20 text-[30rem] font-serif font-black leading-none">EXPLORE</span>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Page Title */}
        <div className="mb-16">
          <span className="accent-label">Collections {new Date().getFullYear()}</span>
          <h1 className="text-5xl md:text-7xl font-serif text-ivory">
            Trouvez votre <br />
            <span className="text-secondary italic">prochaine évasion.</span>
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Desktop Sidebar */}
          <aside className="hidden lg:block w-80 flex-shrink-0">
            <div className="sticky top-32 bg-ivory/5 backdrop-blur-xl border border-white/5 p-8 rounded-2xl">
              <FilterSidebar filters={filters} setFilters={setFilters} />
            </div>
          </aside>

          {/* Results Area */}
          <div className="flex-1">
            {/* Top Bar */}
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
              <div className="text-ivory/60 text-sm font-medium">
                Affichage de <span className="text-secondary font-bold">{filteredTrips.length}</span> destinations d'exception
              </div>
              
              <div className="flex items-center gap-4">
                {/* Mobile Filter Toggle */}
                <button 
                  onClick={() => setIsSidebarOpen(true)}
                  className="lg:hidden flex items-center gap-2 px-4 py-2 bg-secondary text-primary rounded-lg font-bold text-sm"
                >
                  <Filter size={18} />
                  Filtres
                </button>

                <div className="relative group">
                  <select 
                    value={filters.sort}
                    onChange={(e) => setFilters({...filters, sort: e.target.value})}
                    className="appearance-none bg-ivory/5 border border-white/10 text-ivory px-6 py-3 pr-12 rounded-lg text-sm font-bold focus:border-secondary outline-none cursor-pointer transition-all hover:bg-ivory/10"
                  >
                    <option value="default">Trier par</option>
                    <option value="price-asc">Prix: Croissant</option>
                    <option value="price-desc">Prix: Décroissant</option>
                    <option value="rating">Mieux notés</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-secondary pointer-events-none group-hover:scale-110 transition-transform" size={16} />
                </div>
              </div>
            </div>

            {/* Results Grid */}
            {filteredTrips.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <AnimatePresence mode='popLayout'>
                  {filteredTrips.map(trip => (
                    <TripCard key={trip.id} trip={trip} />
                  ))}
                </AnimatePresence>
              </div>
            ) : (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="py-32 text-center"
              >
                <div className="w-20 h-20 bg-white/5 flex items-center justify-center rounded-full mx-auto mb-6 text-secondary/30">
                  <Search size={40} />
                </div>
                <h3 className="text-2xl font-serif text-ivory mb-2">Aucune destination trouvée</h3>
                <p className="text-ivory/40">Essayez de modifier vos filtres pour voir plus de résultats.</p>
                <button 
                  onClick={() => setFilters({ search: "", maxPrice: 5000, categories: [], regions: [], sort: "default" })}
                  className="mt-8 text-secondary uppercase tracking-[0.2em] font-bold text-xs hover:tracking-[0.3em] transition-all"
                >
                  Réinitialiser tout
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isSidebarOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsSidebarOpen(false)}
              className="fixed inset-0 bg-primary/80 backdrop-blur-sm z-[60]"
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-full max-w-sm bg-ivory z-[70] p-8 shadow-2xl overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-10 pb-6 border-b border-gray-100">
                <h2 className="text-2xl font-serif text-logo-navy">Filtres</h2>
                <button onClick={() => setIsSidebarOpen(false)} className="text-logo-navy hover:text-secondary transition-colors">
                  <X size={24} />
                </button>
              </div>
              <FilterSidebar filters={filters} setFilters={setFilters} onClose={() => setIsSidebarOpen(false)} />
              <button 
                onClick={() => setIsSidebarOpen(false)}
                className="w-full mt-10 py-5 bg-logo-navy text-ivory font-bold uppercase tracking-widest rounded-lg"
              >
                Afficher les résultats
              </button>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </main>
  );
};

export default DestinationsPage;
