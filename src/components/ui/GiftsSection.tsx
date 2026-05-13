"use client";
import { motion } from "framer-motion";

export function GiftsSection() {
  return (
    <section className="py-24 px-4 relative z-10 text-center max-w-4xl mx-auto space-y-24">
      
      {/* Regalos */}
      <div className="grid md:grid-cols-2 gap-8 items-stretch">
        {/* Lluvia de Sobres */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white p-10 rounded-[2rem] shadow-xl border border-pastel-pink/20 flex flex-col items-center"
        >
          <div className="w-16 h-16 bg-pastel-pink/20 rounded-full flex items-center justify-center mb-6">
            <svg className="w-8 h-8 text-pastel-pink-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76" />
            </svg>
          </div>
          <h2 className="font-script text-4xl text-pastel-pink-dark mb-4">Lluvia de sobres</h2>
          <p className="font-serif text-gray-600 font-light text-sm italic mb-6 leading-relaxed">
            "El mejor regalo es contar con tu presencia, pero si deseas tener un detalle conmigo, habrá un buzón en la recepción para lluvia de sobres."
          </p>
        </motion.div>

        {/* Mesa de Regalos Liverpool */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white p-10 rounded-[2rem] shadow-xl border border-pastel-pink/20 flex flex-col items-center"
        >
          <div className="w-16 h-16 bg-pastel-pink/20 rounded-full flex items-center justify-center mb-6">
            <svg className="w-8 h-8 text-pastel-pink-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </div>
          <h2 className="font-script text-4xl text-pastel-pink-dark mb-4">Mesa de Regalos</h2>
          <p className="font-serif text-gray-600 font-light text-sm italic mb-8 leading-relaxed">
            "Si prefieres elegir un detalle de mi lista de deseos, puedes consultarla en mi mesa de regalos de Liverpool."
          </p>
          <a 
            href="https://mesaderegalos.liverpool.com.mx/milistaderegalos/52003704"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto bg-pastel-pink-dark text-white hover:bg-opacity-90 transition-colors rounded-full px-8 py-3 text-xs uppercase tracking-widest font-medium shadow-[0_5px_15px_rgba(216,174,179,0.4)]"
          >
            Ver Mesa Liverpool
          </a>
        </motion.div>
      </div>

      {/* Código de Vestimenta - Solo el mensaje informativo */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-3xl mx-auto relative z-10"
      >
        <div className="text-center mb-12">
          <h2 className="font-script text-6xl md:text-7xl text-white drop-shadow-md mb-4">Código de Vestimenta</h2>
          <div className="h-px w-24 bg-white/50 mx-auto"></div>
          <h3 className="font-serif text-2xl tracking-[0.3em] uppercase text-white/90 mt-6 italic">Formal</h3>
        </div>

        <div className="relative pb-10">
          <div className="space-y-12">
            {/* Texto informativo */}
            <div className="flex justify-center relative">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl max-w-2xl text-center relative z-20">
                <p className="text-white font-light text-sm md:text-base leading-relaxed">
                  Solo un pequeño favor, dejemos que la quinceañera brille en su noche. Los colores <strong className="text-white font-bold underline decoration-white/40">azul y lila</strong> están reservados para ella, así que te agradecemos elegir cualquier otro tono para tu outfit. ¡Nos vemos pronto!
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
