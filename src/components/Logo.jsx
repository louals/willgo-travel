import React from 'react';

const Logo = ({ className = "h-12" }) => {
  return (
    <div className={`flex flex-col items-center lg:items-start ${className}`}>
      <div className="flex items-center gap-3">
        {/* Stylized W Wave Icon */}
        <svg viewBox="0 0 100 60" className="h-full fill-logo-navy">
          <path d="M5 25 C 20 5, 40 5, 55 25 C 70 45, 85 45, 95 25 L 95 35 C 85 55, 70 55, 55 35 C 40 15, 20 15, 5 35 Z" />
          <path d="M5 45 C 20 25, 40 25, 55 45 C 70 65, 85 65, 95 45 L 95 55 C 85 75, 70 75, 55 55 C 40 35, 20 35, 5 55 Z" />
        </svg>
        
        <div className="flex flex-col leading-none">
          <span className="font-sans font-black text-2xl tracking-tighter text-logo-navy">
            Will <span className="uppercase">GO</span>
          </span>
          <span className="font-serif text-[10px] tracking-[0.6em] uppercase text-logo-navy/80 mt-1">
            TRAVEL
          </span>
        </div>
      </div>
    </div>
  );
};

export default Logo;
