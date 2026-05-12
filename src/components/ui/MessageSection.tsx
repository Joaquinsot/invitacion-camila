"use client";
import { motion } from "framer-motion";

export function MessageSection() {
  return (
    <section className="py-12 px-4 relative z-10 text-center max-w-3xl mx-auto overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2 }}
        className="relative z-10 p-8 md:p-12 pb-52 md:pb-56"
      >
        <p className="font-serif text-white font-light text-lg md:text-xl leading-relaxed tracking-wide mb-16 italic" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.15)' }}>
          "Hay momentos en la vida que son especiales por sí solos, pero compartirlos con las personas que amas los hace inolvidables. Hoy celebro la vida, el amor y los sueños que comienzan."
        </p>

        <div className="space-y-12">
          <div>
            <p className="text-xs text-white/80 uppercase tracking-[0.3em] font-semibold mb-3">Con la bendición de Dios y de mis padres</p>
            <p className="font-script text-4xl text-white" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.15)' }}>Fernando Villegas González</p>
            <p className="font-script text-4xl text-white mt-2" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.15)' }}>Angélica Bueno Corona</p>
          </div>
          
          <div className="pt-8 border-t border-white/30 w-3/4 mx-auto">
            <p className="text-xs text-white/80 uppercase tracking-[0.3em] font-semibold mb-3">Acompañada de mis padrinos</p>
            <p className="font-script text-4xl text-white" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.15)' }}>Hilario Bueno Rojas</p>
            <p className="font-script text-4xl text-white mt-2" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.15)' }}>Leticia Jiménez Lira</p>
          </div>
        </div>

        {/* Ramo decorativo centrado abajo */}
        <motion.img 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          src="/images/ramo-azul-rosa.png" 
          alt="Ramo decorativo" 
          className="absolute bottom-2 left-1/2 -translate-x-1/2 w-64 md:w-80 opacity-95 drop-shadow-lg pointer-events-none"
        />
      </motion.div>
    </section>
  );
}
