"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { motion, AnimatePresence } from "framer-motion";

export function EnvelopeOpener({ onOpen }: { onOpen: () => void }) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const envelopeRef = useRef<HTMLDivElement>(null);
  const sealRef = useRef<HTMLDivElement>(null);
  const flapRef = useRef<HTMLDivElement>(null);

  const handleOpen = () => {
    if (isOpen) return;
    setIsOpen(true);

    const tl = gsap.timeline({
      onComplete: () => {
        // Trigger parent callback after animation
        setTimeout(onOpen, 500);
      }
    });

    // Romper sello
    tl.to(sealRef.current, { scale: 1.5, opacity: 0, duration: 0.4, ease: "back.in(1.7)" })
      // Abrir solapa
      .to(flapRef.current, { rotateX: 180, transformOrigin: "top", duration: 0.8, ease: "power2.inOut" }, "-=0.2")
      // Fade out de todo el contenedor
      .to(containerRef.current, { scale: 1.2, opacity: 0, duration: 1, ease: "power2.inOut" }, "+=0.3");
  };

  return (
    <AnimatePresence>
      <motion.div 
        ref={containerRef}
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={handleOpen}
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#8bb3a4] overflow-hidden cursor-pointer"
      >
        {/* Fondo con textura sutil */}
        <div 
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{ backgroundImage: "url('/images/textura-seda.png')", backgroundSize: 'cover' }}
        ></div>

        <motion.div 
          ref={envelopeRef}
          className="relative w-80 h-56 md:w-[450px] md:h-[300px] group transition-transform duration-500"
          style={{ perspective: "1500px" }}
        >
          {/* Cuerpo del sobre (Atrás) */}
          <div className="absolute inset-0 bg-[#fdfbf7] shadow-2xl rounded-sm border border-[#e8dfd8]"></div>
          
          {/* Detalles del sobre (Interiores) */}
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-[#faf7f2] border-t border-[#e8dfd8] shadow-inner" style={{ clipPath: "polygon(0 100%, 50% 0, 100% 100%)" }}></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-full bg-[#fdfbf7] border-r border-[#e8dfd8]" style={{ clipPath: "polygon(0 0, 100% 50%, 0 100%)" }}></div>
          <div className="absolute bottom-0 right-0 w-1/2 h-full bg-[#fdfbf7] border-l border-[#e8dfd8]" style={{ clipPath: "polygon(100% 0, 100% 100%, 0 50%)" }}></div>

          {/* Solapa Superior */}
          <div 
            ref={flapRef}
            className="absolute top-0 left-0 w-full h-1/2 bg-[#fdfbf7] border-b border-[#e8dfd8] z-10 shadow-sm"
            style={{ clipPath: "polygon(0 0, 100% 0, 50% 100%)", transformOrigin: "top" }}
          ></div>

          {/* Sello de cera (Botón Central) */}
          <motion.div 
            ref={sealRef}
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-[#d8aeb3] to-[#c2959a] rounded-full z-20 shadow-[0_5px_15px_rgba(0,0,0,0.2)] border-2 border-white/30 flex flex-col items-center justify-center"
          >
            <span className="text-white text-xs uppercase tracking-tighter opacity-80 font-serif">Abrir</span>
            <div className="w-1 h-1 bg-white rounded-full mt-1"></div>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-12 text-center"
        >
          <p className="text-white font-serif text-lg md:text-xl tracking-widest uppercase drop-shadow-md">
            Tienes una invitación
          </p>
          <p className="text-white/80 font-light text-[10px] md:text-xs uppercase tracking-[0.4em] mt-2 animate-pulse">
            Toca el sobre para entrar
          </p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
