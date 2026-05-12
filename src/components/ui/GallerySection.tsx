"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function GallerySection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const rotate1 = useTransform(scrollYProgress, [0, 1], [-5, 3]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [4, -3]);
  const y1 = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-40, 40]);
  const scale1 = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1.05, 0.95]);
  const scale2 = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1.05, 0.9]);

  return (
    <div className="py-16 overflow-hidden" ref={containerRef}>
      <section className="px-4 max-w-5xl mx-auto">


        {/* Galería tipo polaroid con overlap y parallax */}
        <div className="relative flex flex-col md:flex-row items-center justify-center gap-0 md:gap-0 min-h-[80vh] md:min-h-[90vh]">
          
          {/* Foto 1 - Parada (se inclina y flota) */}
          <motion.div 
            style={{ rotate: rotate1, y: y1, scale: scale1 }}
            className="relative z-20 md:-mr-16"
          >
            <motion.div
              initial={{ opacity: 0, x: -80, rotate: -10 }}
              whileInView={{ opacity: 1, x: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="relative group"
            >
              {/* Marco tipo polaroid */}
              <div className="bg-white p-3 pb-16 md:p-4 md:pb-20 rounded-sm shadow-[0_20px_60px_rgba(0,0,0,0.25)] hover:shadow-[0_30px_80px_rgba(0,0,0,0.35)] transition-shadow duration-500">
                <div className="w-[260px] h-[360px] md:w-[320px] md:h-[440px] overflow-hidden">
                  <img 
                    src="/images/sesion-parada.jpg" 
                    alt="Sesión de Camila" 
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-1000" 
                  />
                </div>
                {/* Texto tipo polaroid */}
                <p className="absolute bottom-4 md:bottom-6 left-0 right-0 text-center font-script text-xl md:text-2xl text-gray-400">
                  Camila ✧
                </p>
              </div>

              {/* Cinta adhesiva decorativa */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 bg-white/60 rotate-[-2deg] shadow-sm" style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.7), rgba(255,255,255,0.3))' }}></div>
            </motion.div>
          </motion.div>

          {/* Foto 2 - Sentada (overlap, rotación contraria) */}
          <motion.div 
            style={{ rotate: rotate2, y: y2, scale: scale2 }}
            className="relative z-10 -mt-20 md:mt-16 md:-ml-16"
          >
            <motion.div
              initial={{ opacity: 0, x: 80, rotate: 10 }}
              whileInView={{ opacity: 1, x: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
              className="relative group"
            >
              {/* Marco tipo polaroid */}
              <div className="bg-white p-3 pb-16 md:p-4 md:pb-20 rounded-sm shadow-[0_20px_60px_rgba(0,0,0,0.25)] hover:shadow-[0_30px_80px_rgba(0,0,0,0.35)] transition-shadow duration-500">
                <div className="w-[280px] h-[200px] md:w-[380px] md:h-[280px] overflow-hidden">
                  <img 
                    src="/images/sesion-sentada.jpg" 
                    alt="Sesión de Camila" 
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-1000" 
                  />
                </div>
                {/* Texto tipo polaroid */}
                <p className="absolute bottom-4 md:bottom-6 left-0 right-0 text-center font-script text-xl md:text-2xl text-gray-400">
                  XV Años ♡
                </p>
              </div>

              {/* Cinta adhesiva decorativa */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 bg-white/60 rotate-[3deg] shadow-sm" style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.7), rgba(255,255,255,0.3))' }}></div>
            </motion.div>
          </motion.div>

          {/* Elementos decorativos flotantes */}
          <motion.div
            animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-8 right-4 md:right-16 text-white/20 text-6xl pointer-events-none"
          >
            ✧
          </motion.div>
          <motion.div
            animate={{ y: [0, 12, 0], rotate: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-12 left-4 md:left-16 text-white/20 text-5xl pointer-events-none"
          >
            ❀
          </motion.div>
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute top-1/3 left-2 md:left-8 text-white/15 text-4xl pointer-events-none"
          >
            ♡
          </motion.div>
        </div>

        {/* Ramo decorativo debajo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex justify-center mt-8"
        >
          <img 
            src="/images/ramo-azul-rosa.png" 
            alt="Decoración floral" 
            className="w-48 md:w-56 opacity-80 drop-shadow-lg"
          />
        </motion.div>
      </section>
    </div>
  );
}
