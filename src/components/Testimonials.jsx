import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    name: "Nedjma Hamdi",
    initials: "NH",
    role: "Voyageuse Passionnée",
    trip: "Azerbaïdjan",
    period: "Novembre 2024",
    text: "Une agence d'un grand sérieux. J'ai participé à leur voyage en Azerbaïdjan en novembre : une organisation exemplaire et un programme d'une richesse incroyable. Je recommande sans hésiter.",
    rating: 5
  },
  {
    name: "M K",
    initials: "MK",
    role: "Client Fidèle",
    trip: "Sur-Mesure",
    period: "Octobre 2024",
    text: "La meilleure agence en Algérie. Afaf a été plus que disponible pour faire de nos désirs une réalité pendant tout le voyage. Chaque instant, soigneusement orchestré.",
    rating: 5
  },
  {
    name: "Baya Djoudi",
    initials: "BD",
    role: "Voyageuse d'Affaires",
    trip: "Premium",
    period: "Septembre 2024",
    text: "Une expérience merveilleuse. Tout a été mis en place à temps, avec une équipe professionnelle qui travaille sans relâche pour nous offrir le meilleur service à l'étranger.",
    rating: 5
  },
  {
    name: "Amir Saidani",
    initials: "AS",
    role: "Explorateur",
    trip: "Égypte",
    period: "Août 2024",
    text: "Un voyage magnifique en Égypte avec Will Go Travel. Une expérience inoubliable, pleine de découvertes et de moments de pur bonheur. Merci pour tout.",
    rating: 5
  }
];

const RomanNumeral = ({ n }) => {
  const nums = ['I', 'II', 'III', 'IV'];
  return <span>{nums[n] || n + 1}</span>;
};

const StarRow = ({ count = 5, size = 10 }) => (
  <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
    {[...Array(count)].map((_, i) => (
      <svg key={i} width={size} height={size} viewBox="0 0 10 10" fill="#C9A96E">
        <polygon points="5,0 6.2,3.6 10,3.6 7,5.8 8.1,9.5 5,7.3 1.9,9.5 3,5.8 0,3.6 3.8,3.6" />
      </svg>
    ))}
  </div>
);

const Testimonials = () => {
  const [active, setActive] = useState(0);
  const [prev, setPrev] = useState(null);
  const [dir, setDir] = useState(1);
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: '-80px' });

  const go = (i) => {
    setDir(i > active ? 1 : -1);
    setPrev(active);
    setActive(i);
  };

  const current = testimonials[active];

  return (
    <section
      ref={sectionRef}
      style={{
        position: 'relative',
        background: '#0D1B3E',
        overflow: 'hidden',
        padding: '120px 0',
        fontFamily: "'Cormorant Garamond', 'EB Garamond', Georgia, serif",
      }}
    >
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=Montserrat:wght@300;400;500;600&display=swap');

        .testi-nav-btn {
          background: transparent;
          border: 0.5px solid rgba(201,169,110,0.25);
          color: rgba(201,169,110,0.6);
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.35s ease;
          font-family: 'Montserrat', sans-serif;
          font-size: 11px;
          letter-spacing: 0.1em;
        }
        .testi-nav-btn:hover {
          border-color: rgba(201,169,110,0.8);
          color: #C9A96E;
          background: rgba(201,169,110,0.04);
        }
        .testi-dot {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: rgba(201,169,110,0.2);
          border: none;
          cursor: pointer;
          transition: all 0.35s ease;
          padding: 0;
        }
        .testi-dot.active {
          background: #C9A96E;
          width: 24px;
          border-radius: 2px;
        }
        .testi-sidebar-item {
          cursor: pointer;
          transition: opacity 0.3s;
          padding: 16px 0;
          border-bottom: 0.5px solid rgba(201,169,110,0.07);
        }
        .testi-sidebar-item:hover { opacity: 1 !important; }
        .testi-sidebar-item:last-child { border-bottom: none; }
      `}</style>

      {/* Atmospheric grain overlay */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 1,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E")`,
        opacity: 0.4,
      }} />

      {/* Vertical gold rule — left */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={inView ? { scaleY: 1 } : {}}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        style={{
          position: 'absolute', left: '5%', top: '15%', bottom: '15%',
          width: '0.5px', background: 'linear-gradient(to bottom, transparent, rgba(201,169,110,0.3) 30%, rgba(201,169,110,0.3) 70%, transparent)',
          transformOrigin: 'top', zIndex: 2,
        }}
      />

      {/* Large decorative numeral */}
      <div style={{
        position: 'absolute', right: '-2%', top: '50%', transform: 'translateY(-50%)',
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: 'clamp(200px, 30vw, 380px)',
        fontWeight: 1300,
        color: 'rgba(201,169,110,0.025)',
        lineHeight: 1,
        userSelect: 'none',
        zIndex: 1,
        pointerEvents: 'none',
        letterSpacing: '-0.05em',
      }}>
        {active + 1 < 10 ? `0${active + 1}` : active + 1}
      </div>

      <div style={{
        maxWidth: '1280px', margin: '0 auto', padding: '0 clamp(24px, 6vw, 80px)',
        position: 'relative', zIndex: 3,
      }}>

        {/* ── Header ── */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '80px' }}>
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: '10px',
                letterSpacing: '0.35em',
                textTransform: 'uppercase',
                color: '#C9A96E',
                marginBottom: '20px',
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
              }}
            >
              <span style={{ display: 'inline-block', width: '28px', height: '0.5px', background: '#C9A96E' }} />
              Paroles de voyageurs
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.15 }}
              style={{
                fontSize: 'clamp(38px, 5vw, 72px)',
                fontWeight: 1300,
                color: '#EDE8DF',
                lineHeight: 1.1,
                letterSpacing: '-0.01em',
                margin: 0,
              }}
            >
              Ce que nos clients<br />
              <em style={{ fontStyle: 'italic', fontWeight: 1300, color: '#C9A96E' }}>nous confient.</em>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{ textAlign: 'right', paddingTop: '8px', display: 'none' }}
            className="testi-header-right"
          >
            <StarRow count={5} size={12} />
            <div style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: '10px',
              letterSpacing: '0.2em',
              color: 'rgba(237,232,223,0.35)',
              marginTop: '8px',
              textTransform: 'uppercase',
            }}>4.9 / 5 · Google Maps</div>
          </motion.div>
        </div>

        {/* ── Main layout ── */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '80px', alignItems: 'start' }}>

          {/* Left — featured testimonial */}
          <div>
            <div style={{ position: 'relative', minHeight: '320px' }}>
              <AnimatePresence mode="wait" custom={dir}>
                <motion.div
                  key={active}
                  custom={dir}
                  initial={{ opacity: 0, x: dir * 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: dir * -40 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                >
                  {/* Opening mark */}
                  <div style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: '120px',
                    lineHeight: 0.7,
                    color: 'rgba(201,169,110,0.15)',
                    marginBottom: '8px',
                    letterSpacing: '-0.05em',
                    userSelect: 'none',
                  }}>"</div>

                  {/* Quote text */}
                  <p style={{
                    fontSize: 'clamp(22px, 2.8vw, 36px)',
                    fontWeight: 1300,
                    fontStyle: 'italic',
                    color: '#EDE8DF',
                    lineHeight: 1.6,
                    letterSpacing: '0.01em',
                    margin: '0 0 48px 0',
                    maxWidth: '680px',
                  }}>
                    {current.text}
                  </p>

                  {/* Attribution */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                    {/* Monogram */}
                    <div style={{
                      width: '52px', height: '52px',
                      border: '0.5px solid rgba(201,169,110,0.4)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: '16px',
                      fontWeight: 1400,
                      color: '#C9A96E',
                      letterSpacing: '0.08em',
                      flexShrink: 0,
                    }}>
                      {current.initials}
                    </div>

                    <div>
                      <div style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: '11px',
                        fontWeight: 1500,
                        letterSpacing: '0.2em',
                        textTransform: 'uppercase',
                        color: '#C9A96E',
                        marginBottom: '4px',
                      }}>{current.name}</div>
                      <div style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: '10px',
                        letterSpacing: '0.15em',
                        textTransform: 'uppercase',
                        color: 'rgba(237,232,223,0.4)',
                      }}>{current.role} · {current.trip} · {current.period}</div>
                    </div>

                    <div style={{ marginLeft: 'auto' }}>
                      <StarRow count={current.rating} size={10} />
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* ── Controls ── */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginTop: '56px' }}>
              <button
                className="testi-nav-btn"
                onClick={() => go((active - 1 + testimonials.length) % testimonials.length)}
                aria-label="Précédent"
              >
                ←
              </button>
              <button
                className="testi-nav-btn"
                onClick={() => go((active + 1) % testimonials.length)}
                aria-label="Suivant"
              >
                →
              </button>

              <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginLeft: '12px' }}>
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    className={`testi-dot${i === active ? ' active' : ''}`}
                    onClick={() => go(i)}
                    aria-label={`Témoignage ${i + 1}`}
                  />
                ))}
              </div>

              <div style={{
                marginLeft: 'auto',
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: '18px',
                color: 'rgba(237,232,223,0.2)',
                letterSpacing: '0.1em',
              }}>
                <span style={{ color: '#C9A96E' }}>{String(active + 1).padStart(2, '0')}</span>
                {' / '}
                {String(testimonials.length).padStart(2, '0')}
              </div>
            </div>

            {/* ── Google CTA ── */}
            <motion.a
              href="https://www.google.com/maps/place/Will+Go+Travel/@36.7468088,3.0417645,17z/data=!4m18!1m9!3m8!1s0x128fb31c697da60b:0xebfff6543dd4e4c5!2sWill+Go+Travel!8m2!3d36.7468088!4d3.0443394!9m1!1b1!16s%2Fg%2F11td8kzvrq!3m7!1s0x128fb31c697da60b:0xebfff6543dd4e4c5!8m2!3d36.7468088!4d3.0443394!9m1!1b1!16s%2Fg%2F11td8kzvrq?hl=en&entry=ttu&g_ep=EgoyMDI2MDQyNi4wIKXMDSoASAFQAw%3D%3D"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.9 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '16px',
                marginTop: '48px',
                fontFamily: "'Montserrat', sans-serif",
                fontSize: '10px',
                letterSpacing: '0.28em',
                textTransform: 'uppercase',
                color: 'rgba(237,232,223,0.35)',
                textDecoration: 'none',
                transition: 'color 0.3s',
              }}
              onMouseEnter={e => e.currentTarget.style.color = '#C9A96E'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(237,232,223,0.35)'}
            >
              <span style={{ width: '36px', height: '0.5px', background: 'currentColor', display: 'inline-block' }} />
              Voir tous les avis Google
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1">
                <path d="M2 8L8 2M8 2H3M8 2v5" />
              </svg>
            </motion.a>
          </div>

          {/* Right — sidebar index */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            style={{ width: '200px', paddingTop: '12px' }}
          >
            {/* Rating block */}
            <div style={{
              borderTop: '0.5px solid rgba(201,169,110,0.2)',
              borderBottom: '0.5px solid rgba(201,169,110,0.07)',
              padding: '20px 0 20px',
              marginBottom: '8px',
            }}>
              <div style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: '52px',
                fontWeight: 1300,
                color: '#EDE8DF',
                lineHeight: 1,
                letterSpacing: '-0.02em',
              }}>4.7</div>
              <div style={{ marginTop: '8px' }}><StarRow count={5} size={10} /></div>
              <div style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: '9px',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'rgba(237,232,223,0.3)',
                marginTop: '8px',
              }}>Note Google · 61 avis</div>
            </div>



          </motion.div>
        </div>
      </div>

      {/* Bottom horizontal rule */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
        style={{
          position: 'absolute',
          bottom: '60px',
          left: '5%',
          right: '5%',
          height: '0.5px',
          background: 'linear-gradient(to right, transparent, rgba(201,169,110,0.2) 20%, rgba(201,169,110,0.2) 80%, transparent)',
          transformOrigin: 'left',
          zIndex: 2,
        }}
      />
    </section>
  );
};

export default Testimonials;