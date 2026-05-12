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
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 overflow-hidden"
      >
        {/* Partículas suaves de fondo (simuladas con gradientes) */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-pastel-pink/20 via-transparent to-transparent opacity-60"></div>
        
        <div 
          ref={envelopeRef}
          onClick={handleOpen}
          className="relative w-80 h-56 md:w-96 md:h-64 cursor-pointer group"
          style={{ perspective: "1000px" }}
        >
          {/* Cuerpo del sobre (Atrás) */}
          <div className="absolute inset-0 bg-[#f8f4f0] shadow-2xl rounded-sm border border-[#e8dfd8]"></div>
          
          {/* Detalles del sobre */}
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-[#fdfbf7] border-t border-[#e8dfd8] shadow-inner flex items-center justify-center" style={{ clipPath: "polygon(0 100%, 50% 0, 100% 100%)" }}></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-full bg-[#faf6f2] border-r border-[#e8dfd8]" style={{ clipPath: "polygon(0 0, 100% 50%, 0 100%)" }}></div>
          <div className="absolute bottom-0 right-0 w-1/2 h-full bg-[#f4eee8] border-l border-[#e8dfd8]" style={{ clipPath: "polygon(100% 0, 100% 100%, 0 50%)" }}></div>

          {/* Solapa Superior */}
          <div 
            ref={flapRef}
            className="absolute top-0 left-0 w-full h-1/2 bg-[#fdfbf7] border-b border-[#e8dfd8] z-10 shadow-sm"
            style={{ clipPath: "polygon(0 0, 100% 0, 50% 100%)" }}
          ></div>

          {/* Sello de cera */}
          <div 
            ref={sealRef}
            className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-gradient-to-br from-[#d8aeb3] to-[#c2959a] rounded-full z-20 shadow-md border border-[#f4d9dd]/50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
          >
            <span className="font-serif text-white text-lg">C</span>
          </div>

          {!isOpen && (
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="absolute -bottom-16 left-1/2 -translate-x-1/2 text-white font-light tracking-widest uppercase text-xs whitespace-nowrap drop-shadow-md"
            >
              Toca para abrir
            </motion.div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
