"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const targetDate = new Date("2026-06-19T00:00:00").getTime();

export function Countdown() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!isMounted) return null;

  return (
    <section className="relative z-10 overflow-hidden">
      
      {/* Imagen de fondo a pantalla completa */}
      <div className="relative w-full min-h-[100vh]">
        <img 
          src="/images/camila-standing.jpg" 
          alt="Camila" 
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
        
        {/* Overlay oscuro sutil para legibilidad */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Contenido encima de la imagen */}
        <div className="relative z-10 flex flex-col items-center justify-end h-screen pb-10 px-4">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center w-full max-w-lg"
          >
            <div className="mb-6 md:mb-10">
              <h3 className="font-script text-5xl md:text-8xl text-white mb-2" style={{ textShadow: '0 2px 20px rgba(0,0,0,0.5)' }}>Faltan</h3>
              <h2 className="font-serif text-lg md:text-3xl text-white tracking-[0.3em] font-light opacity-90" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.4)' }}>
                19 · 06 · 2026
              </h2>
            </div>

            <div className="grid grid-cols-4 gap-2 md:gap-8 max-w-sm md:max-w-none mx-auto">
              {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} className="flex flex-col items-center">
                  <div className="w-14 h-14 md:w-28 md:h-28 rounded-full border border-white/40 flex items-center justify-center mb-2 bg-black/20 backdrop-blur-sm shadow-lg">
                    <span className="text-xl md:text-5xl font-serif text-white font-light" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>
                      {value.toString().padStart(2, '0')}
                    </span>
                  </div>
                  <span className="text-[8px] md:text-xs text-white/90 uppercase tracking-[0.2em] font-medium">
                    {unit === 'days' ? 'Días' : unit === 'hours' ? 'Hrs' : unit === 'minutes' ? 'Min' : 'Seg'}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>


        </div>
      </div>
    </section>
  );
}
