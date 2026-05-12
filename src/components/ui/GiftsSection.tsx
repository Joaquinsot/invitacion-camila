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

      {/* Código de Vestimenta - Estilo Itinerario */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-3xl mx-auto relative z-10"
      >
        <div className="text-center mb-16">
          <h2 className="font-script text-6xl md:text-7xl text-white drop-shadow-md mb-4">Código de Vestimenta</h2>
          <div className="h-px w-24 bg-white/50 mx-auto"></div>
        </div>

        <div className="relative pb-10">
          {/* Línea vertical decorativa similar al itinerario */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-white/20 -translate-x-1/2"></div>
          
          <div className="space-y-24">
            {/* Título del código */}
            <div className="flex items-center justify-center relative">
               <div className="bg-white/10 backdrop-blur-md border border-white/20 px-8 py-3 rounded-full relative z-20">
                  <h3 className="font-serif text-2xl tracking-[0.3em] uppercase text-white shadow-sm">Formal</h3>
               </div>
            </div>

            {/* Iconos centrados estilo timeline */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-20 relative">
              
              {/* Mujeres */}
              <div className="relative flex flex-col items-center">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full shadow-[0_10px_25px_rgba(0,0,0,0.15)] border border-white/50 flex items-center justify-center z-20 text-[#8bb3a4] mb-4">
                  <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M9 4l-2 3v13h10V7l-2-3H9zM9 7h6" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M12 7v13M7 11h10" />
                  </svg>
                </div>
                <h4 className="font-serif text-2xl text-white mb-1">Mujeres</h4>
                <p className="text-white/80 font-medium text-xs tracking-[0.2em] uppercase italic">Vestido Largo</p>
              </div>

              {/* Hombres */}
              <div className="relative flex flex-col items-center">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full shadow-[0_10px_25px_rgba(0,0,0,0.15)] border border-white/50 flex items-center justify-center z-20 text-[#8bb3a4] mb-4">
                  <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M12 3L9 7h6l-3-4zM9 7v14h6V7H9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M12 7v14M10 11h4M10 15h4" />
                  </svg>
                </div>
                <h4 className="font-serif text-2xl text-white mb-1">Hombres</h4>
                <p className="text-white/80 font-medium text-xs tracking-[0.2em] uppercase italic">Traje Formal</p>
              </div>
            </div>

            {/* Texto informativo con estilo de item de timeline */}
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
