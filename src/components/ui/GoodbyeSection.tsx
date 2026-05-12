"use client";
import { motion } from "framer-motion";

export function GoodbyeSection() {
  return (
    <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image: using another provided image */}
      <div className="absolute inset-0 bg-[url('/images/media__1778266010813.jpg')] bg-cover bg-center md:bg-top scale-105"></div>
      
      {/* Overlay romántico */}
      <div className="absolute inset-0 bg-black/40 z-0 backdrop-blur-[2px]"></div>
      
      {/* Decoración floral superior */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-background to-transparent z-10"></div>
      
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          {/* Ilustración o borde decorativo aquí si se desea */}
          <div className="mb-8">
            <svg className="w-16 h-16 mx-auto text-pastel-pink opacity-80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
               <path strokeLinecap="round" strokeLinejoin="round" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>
          
          <h2 className="font-serif text-3xl md:text-4xl text-white font-light leading-relaxed mb-8 italic glow-text">
            "Gracias por ser parte de mi historia y hacer de este día un recuerdo eterno en mi corazón."
          </h2>
          
          <p className="font-script text-5xl md:text-6xl text-pastel-pink-dark drop-shadow-md">
            Con cariño, Camila
          </p>
        </motion.div>
      </div>
    </section>
  );
}
