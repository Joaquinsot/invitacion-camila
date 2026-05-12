"use client";
import { motion } from "framer-motion";

export function MapSection() {
  return (
    <section className="py-16 px-4 relative z-10 text-center max-w-5xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="font-script text-6xl text-white mb-2" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.15)' }}>Ubicaciones</h2>
        <p className="font-serif text-sm text-white/70 tracking-[0.3em] uppercase">Acompáñanos</p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* MISA */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-[2rem] shadow-xl border border-pastel-pink/20 flex flex-col items-center justify-between overflow-hidden"
        >
          {/* Imagen de la iglesia */}
          <div className="w-full h-48 overflow-hidden">
            <img 
              src="/images/iglesia-santa-teresita.png" 
              alt="Parroquia de Santa Teresita del Niño Jesús" 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-10 flex flex-col items-center flex-1">
            <div className="w-16 h-16 bg-pastel-pink/30 rounded-full flex items-center justify-center mb-6 text-pastel-pink-dark -mt-14 border-4 border-white shadow-lg relative z-10">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2v20M8 22h8M12 2l-6 6v14M12 2l6 6v14M12 6h.01" />
              </svg>
            </div>
            
            <h3 className="font-serif text-2xl text-gray-800 mb-2">Ceremonia Religiosa</h3>
            <p className="text-pastel-pink-dark font-medium tracking-widest text-sm mb-2">6:00 PM</p>
            
            <p className="text-gray-600 font-light text-sm mb-2">
              Parroquia de Santa Teresita del Niño Jesús
            </p>
            <p className="text-gray-400 font-light text-xs mb-8">
              Av. 4 Pte. 2709, Amor, 72140 Heroica Puebla de Zaragoza, Pue.
            </p>

            <a 
              href="https://maps.app.goo.gl/QfYR8JXH29iBcmAW6" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-auto bg-transparent border border-pastel-pink-dark text-pastel-pink-dark hover:bg-pastel-pink-dark hover:text-white transition-colors rounded-full px-8 py-3 text-xs uppercase tracking-widest font-medium"
            >
              Ver Ubicación
            </a>
          </div>
        </motion.div>

        {/* RECEPCIÓN */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-[2rem] shadow-xl border border-pastel-pink/20 flex flex-col items-center justify-between overflow-hidden"
        >
          {/* Imagen del salón */}
          <div className="w-full h-48 overflow-hidden">
            <img 
              src="/images/salon-extravagance.jpg" 
              alt="Salón Extravagance Eventos" 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-10 flex flex-col items-center flex-1">
            <div className="w-16 h-16 bg-pastel-pink/30 rounded-full flex items-center justify-center mb-6 text-pastel-pink-dark -mt-14 border-4 border-white shadow-lg relative z-10">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
              </svg>
            </div>
            
            <h3 className="font-serif text-2xl text-gray-800 mb-2">Recepción</h3>
            <p className="text-pastel-pink-dark font-medium tracking-widest text-sm mb-2">7:00 PM</p>
            
            <p className="text-gray-600 font-light text-sm mb-2">
              Extravagance Eventos
            </p>
            <p className="text-gray-400 font-light text-xs mb-8">
              Blvd. San Felipe 46, Col. Villa Posadas, 72060 Heroica Puebla de Zaragoza, Pue.
            </p>

            <a 
              href="https://maps.app.goo.gl/bAFXS6dU276YCaU48" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-auto bg-pastel-pink-dark border border-pastel-pink-dark text-white hover:bg-opacity-90 transition-colors rounded-full px-8 py-3 text-xs uppercase tracking-widest font-medium shadow-[0_5px_15px_rgba(216,174,179,0.4)]"
            >
              Ver Ubicación
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
