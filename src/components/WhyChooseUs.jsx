import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';

const Counter = ({ value, suffix = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  const spring = useSpring(0, {
    stiffness: 100,
    damping: 30,
    duration: 2000,
  });

  const display = useTransform(spring, (current) => 
    Math.floor(current).toLocaleString() + suffix
  );

  useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [isInView, spring, value]);

  return (
    <motion.span ref={ref} className="text-5xl md:text-6xl font-serif text-secondary block mb-2">
      {display}
    </motion.span>
  );
};

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-primary border-y border-secondary/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          {/* Left Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <span className="accent-label">Confiance & Expertise</span>
            <h2 className="section-title">Pourquoi choisir <br /> Will Go Travel ?</h2>
            <p className="text-ivory/60 text-lg leading-relaxed max-w-xl">
              Depuis plus d'une décennie, nous redéfinissons les standards du voyage de luxe. 
              Notre engagement est de vous offrir des souvenirs qui durent toute une vie, 
              grâce à une attention méticuleuse portée à chaque détail.
            </p>
            <div className="mt-10 flex gap-12">
              <div>
                <h4 className="text-ivory font-serif text-xl mb-2">Service 24/7</h4>
                <p className="text-ivory/40 text-sm">Une assistance personnalisée où que vous soyez dans le monde.</p>
              </div>
              <div>
                <h4 className="text-ivory font-serif text-xl mb-2">Hôtels d'Élite</h4>
                <p className="text-ivory/40 text-sm">Des partenariats exclusifs avec les plus grands palaces.</p>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Stats Grid */}
          <div className="lg:w-1/2 grid grid-cols-2 gap-12 w-full">
            {[
              { label: "Voyageurs satisfaits", value: 2000, suffix: "+" },
              { label: "Destinations explorées", value: 50, suffix: "+" },
              { label: "Années d'expérience", value: 10, suffix: "" },
              { label: "Visa délivré en", value: 48, suffix: "h" },
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center lg:text-left"
              >
                <Counter value={stat.value} suffix={stat.suffix} />
                <span className="text-ivory/60 uppercase tracking-widest text-xs font-medium">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
