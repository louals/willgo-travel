import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Accueil', href: '/' },
  { name: 'Nos Voyages', href: '/#voyages' },
  { name: 'À la Carte', href: '/#alacarte' },
  { name: 'Billetterie', href: '/#billetterie' },
  { name: 'Hôtels', href: '/#hotels' },
  { name: 'Visa', href: '/#visa' },
  { name: 'Contact', href: '/#contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-logo-navy/95 backdrop-blur-md py-4 shadow-2xl' : 'bg-transparent py-8'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/">
          <img src="/image.png" alt="Will Go Travel Logo" className="h-12 w-auto object-contain" />
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.href}
              className="text-ivory/80 hover:text-secondary transition-colors text-sm uppercase tracking-widest font-medium"
            >
              {link.name}
            </Link>
          ))}
          <button className="btn-outline-gold px-6 py-2 text-sm">
            Réserver
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-secondary"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu size={32} />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-logo-navy z-[60] flex flex-col p-8"
          >
            <div className="flex justify-between items-center mb-16">
              <img src="/image.png" alt="Logo" className="h-10 w-auto" />
              <button 
                className="text-secondary"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <X size={32} />
              </button>
            </div>

            <div className="flex flex-col gap-8">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link 
                    to={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-3xl font-serif text-ivory hover:text-secondary transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.button 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="btn-gold w-full mt-8"
              >
                Réserver Maintenant
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
