"use client";
import { motion } from "framer-motion";

export function CalendarSection() {
  const days = ["D", "L", "M", "M", "J", "V", "S"];
  // Junio 2026: empieza en Lunes
  const dates = [
    "", "1", "2", "3", "4", "5", "6",
    "7", "8", "9", "10", "11", "12", "13",
    "14", "15", "16", "17", "18", "19", "20",
    "21", "22", "23", "24", "25", "26", "27",
    "28", "29", "30", "", "", "", ""
  ];

  const handleAddToCalendar = () => {
    const title = "XV Años Camila";
    const details = "Acompáñanos a celebrar los XV años de Camila. Itinerario: Misa, Recepción, Cena y Fiesta.";
    const location = "Av. 4 Pte. 2709, Amor, 72140 Puebla, Pue.";
    const startTime = "20260619T180000";
    const endTime = "20260620T020000";
    
    const googleCalendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${startTime}/${endTime}&details=${encodeURIComponent(details)}&location=${encodeURIComponent(location)}`;
    
    window.open(googleCalendarUrl, '_blank');
  };

  return (
    <section className="py-16 px-4 relative z-10 flex flex-col items-center">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative bg-white p-8 md:p-12 rounded-[2rem] shadow-xl border border-pastel-pink/20 max-w-sm w-full overflow-hidden"
      >
        {/* Flores decorativas esquina superior derecha */}
        <motion.img 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.4 }}
          src="/images/flores-esquina.png" 
          alt="Flores decorativas" 
          className="absolute -top-10 -right-10 w-40 opacity-90 drop-shadow-md rotate-90 pointer-events-none"
        />

        <div className="text-center mb-8 border-b border-pastel-pink/30 pb-6 relative z-10">
          <h3 className="font-serif text-2xl text-gray-800 tracking-widest uppercase mb-1">Junio</h3>
          <p className="font-light text-gray-500 tracking-[0.3em] text-sm">2026</p>
        </div>

        <div className="grid grid-cols-7 gap-2 md:gap-4 text-center">
          {days.map((day, i) => (
            <div key={`header-${i}`} className="text-xs font-semibold text-pastel-pink-dark mb-2">
              {day}
            </div>
          ))}
          
          {dates.map((date, i) => {
            const isSpecial = date === "19";
            return (
              <div key={`date-${i}`} className="relative flex items-center justify-center h-8 md:h-10">
                {isSpecial ? (
                  <motion.button 
                    onClick={handleAddToCalendar}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    whileHover={{ scale: 1.15, rotate: [0, -5, 5, 0] }}
                    viewport={{ once: true }}
                    title="Agendar en mi calendario"
                    transition={{ 
                      type: "tween", 
                      duration: 0.4,
                      ease: "easeInOut"
                    }}
                    className="absolute inset-0 bg-gradient-to-tr from-pastel-pink-dark to-pastel-pink rounded-full shadow-[0_4px_15px_rgba(216,174,179,0.6)] z-20 cursor-pointer flex items-center justify-center group"
                  >
                    <span className="relative z-10 font-medium text-white text-sm md:text-base group-hover:scale-110 transition-transform">
                      {date}
                    </span>
                  </motion.button>
                ) : (
                  <span className="relative z-10 font-light text-sm md:text-base text-gray-600">
                    {date}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </motion.div>
      <p className="mt-6 text-gray-400 text-[10px] uppercase tracking-widest italic animate-pulse">
        Toca el día 19 para agendar
      </p>
    </section>
  );
}
