import React from 'react';
import Logo from './Logo';
import { Facebook, Instagram, Phone as WhatsApp, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-logo-navy pt-24 pb-12 border-t border-secondary/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* Brand Column */}
          <div className="space-y-8">
            <Logo className="h-10" />
            <p className="text-ivory/40 leading-relaxed max-w-xs">
              L'excellence du voyage sur mesure. Nous créons des expériences d'exception pour les voyageurs les plus exigeants.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 border border-secondary/20 flex items-center justify-center text-secondary hover:bg-secondary hover:text-primary transition-all duration-300">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 border border-secondary/20 flex items-center justify-center text-secondary hover:bg-secondary hover:text-primary transition-all duration-300">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 border border-secondary/20 flex items-center justify-center text-secondary hover:bg-secondary hover:text-primary transition-all duration-300">
                <WhatsApp size={18} />
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-ivory font-serif text-xl mb-8">Services</h4>
            <ul className="space-y-4 text-ivory/40 text-sm">
              <li><a href="#" className="hover:text-secondary transition-colors">Voyages Organisés</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Voyages à la Carte</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Billetterie</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Réservation d'Hôtels</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Visa Électronique</a></li>
            </ul>
          </div>

          {/* Destinations Column */}
          <div>
            <h4 className="text-ivory font-serif text-xl mb-8">Destinations</h4>
            <ul className="space-y-4 text-ivory/40 text-sm">
              <li><a href="#" className="hover:text-secondary transition-colors">Turquie</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Maldives</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Paris</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Dubaï</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Thaïlande</a></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-ivory font-serif text-xl mb-8">Contact</h4>
            <ul className="space-y-4 text-ivory/40 text-sm">
              <li className="flex gap-3">
                <MapPin size={16} className="text-secondary flex-shrink-0" />
                <span>18 Rue de Cirta, Hydra 16016, Alger</span>
              </li>
              <li className="flex gap-3">
                <Phone size={16} className="text-secondary flex-shrink-0" />
                <span>0554 95 15 24</span>
              </li>
              <li className="flex gap-3">
                <Mail size={16} className="text-secondary flex-shrink-0" />
                <span>contact@willgotravel.com</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-secondary/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-ivory/20 text-xs">
            © 2025 Will Go Travel. Tous droits réservés.
          </p>
          <div className="flex gap-8 text-[10px] uppercase tracking-widest text-ivory/20">
            <a href="#" className="hover:text-secondary transition-colors">Mentions Légales</a>
            <a href="#" className="hover:text-secondary transition-colors">Confidentialité</a>
            <a href="#" className="hover:text-secondary transition-colors">CGV</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
