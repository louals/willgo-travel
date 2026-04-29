import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-ivory text-primary">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20">
          
          {/* Left - Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <span className="accent-label text-secondary">Contactez-nous</span>
            <h2 className="section-title text-primary mb-12">Prêt pour l'aventure ?</h2>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-primary/40">Nom Complet</label>
                  <input 
                    type="text" 
                    placeholder="Votre nom" 
                    className="w-full bg-transparent border-b-2 border-primary/10 py-3 focus:border-secondary outline-none transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-primary/40">Email</label>
                  <input 
                    type="email" 
                    placeholder="votre@email.com" 
                    className="w-full bg-transparent border-b-2 border-primary/10 py-3 focus:border-secondary outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-primary/40">Téléphone</label>
                  <input 
                    type="tel" 
                    placeholder="0554 95 15 24" 
                    className="w-full bg-transparent border-b-2 border-primary/10 py-3 focus:border-secondary outline-none transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-primary/40">Service Souhaité</label>
                  <select className="w-full bg-transparent border-b-2 border-primary/10 py-3 focus:border-secondary outline-none transition-colors appearance-none">
                    <option>Voyage Organisé</option>
                    <option>Voyage à la Carte</option>
                    <option>Billetterie</option>
                    <option>Visa Électronique</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-primary/40">Votre Message</label>
                <textarea 
                  rows="4" 
                  placeholder="Comment pouvons-nous vous aider ?" 
                  className="w-full bg-transparent border-b-2 border-primary/10 py-3 focus:border-secondary outline-none transition-colors resize-none"
                ></textarea>
              </div>

              <button className="btn-gold w-full flex items-center justify-center gap-3 py-5 text-lg">
                Envoyer ma demande <Send size={18} />
              </button>
            </form>
          </motion.div>

          {/* Right - Info & Map */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 space-y-12"
          >
            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-primary flex items-center justify-center text-secondary flex-shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-serif text-xl mb-1">Localisation</h4>
                  <p className="text-primary/60">18 Rue de Cirta, Hydra 16016, Alger</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-primary flex items-center justify-center text-secondary flex-shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-serif text-xl mb-1">Téléphone</h4>
                  <p className="text-primary/60">0554 95 15 24</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-primary flex items-center justify-center text-secondary flex-shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-serif text-xl mb-1">Email</h4>
                  <p className="text-primary/60">contact@willgotravel.com</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="h-80 w-full bg-primary/5 border border-primary/10 overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-700 block">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3196.9900974280445!2d3.0417644765623497!3d36.746808772262426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128fb31c697da60b%3A0xebfff6543dd4e4c5!2sWill%20Go%20Travel!5e0!3m2!1sen!2sdz!4v1777459999978!5m2!1sen!2sdz" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Will Go Travel Location"
              ></iframe>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

const Logo = ({ className = "h-8" }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <span className="font-serif text-lg font-bold tracking-tight text-secondary">
        WILL GO <span className="font-light italic text-accent">TRAVEL</span>
      </span>
    </div>
  );
};

export default Contact;
