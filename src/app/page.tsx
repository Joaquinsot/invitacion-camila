"use client";
import { useState, Suspense } from "react";
import { HeroSection } from "@/components/ui/HeroSection";
import { Countdown } from "@/components/ui/Countdown";
import { EnvelopeOpener } from "@/components/ui/EnvelopeOpener";
import { MessageSection } from "@/components/ui/MessageSection";
import { CalendarSection } from "@/components/ui/CalendarSection";
import { GallerySection } from "@/components/ui/GallerySection";
import { MapSection } from "@/components/ui/MapSection";
import { TimelineSection } from "@/components/ui/TimelineSection";
import { GiftsSection } from "@/components/ui/GiftsSection";
import { RSVPSection } from "@/components/ui/RSVPSection";
import { GoodbyeSection } from "@/components/ui/GoodbyeSection";

const FloralDivider = ({ variant = "pink" }: { variant?: "pink" | "green" }) => {
  const color = variant === "pink" ? "text-white/60" : "text-[#dec1c3]/60";
  const line = variant === "pink" ? "bg-white/30" : "bg-[#dec1c3]/30";
  return (
    <div className="flex justify-center items-center py-4">
      <div className={`h-[1px] w-16 md:w-32 ${line}`}></div>
      <span className={`mx-6 ${color} text-2xl`}>✧ ❀ ✧</span>
      <div className={`h-[1px] w-16 md:w-32 ${line}`}></div>
    </div>
  );
};

export default function Home() {
  const [opened, setOpened] = useState(false);

  return (
    <main className="min-h-screen relative">
      {!opened && <EnvelopeOpener onOpen={() => setOpened(true)} />}
      
      {opened && (
        <div className="animate-in fade-in duration-1000">
          <HeroSection />
          
          {/* Sección Rosa - Mensaje con textura de seda */}
          <div className="bg-[#dec1c3] relative overflow-hidden">
            {/* Textura de seda que cubre todo */}
            <div 
              className="absolute inset-0 z-0 opacity-50 pointer-events-none"
              style={{
                backgroundImage: "url('/images/textura-seda-vertical.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                mixBlendMode: 'overlay'
              }}
            ></div>
            <MessageSection />
            <FloralDivider variant="pink" />
          </div>

          {/* Sección Countdown - Imagen de fondo completa */}
          <Countdown />

          {/* Sección Rosa - Calendario */}
          <div className="bg-[#dec1c3]">
            <CalendarSection />
            <FloralDivider variant="pink" />
          </div>

          {/* Sección Rosa - Galería */}
          <div className="bg-[#dec1c3]">
            <GallerySection />
            <FloralDivider variant="pink" />
          </div>

          {/* Sección Rosa - Mapa */}
          <div className="bg-[#dec1c3]">
            <MapSection />
            <FloralDivider variant="pink" />
          </div>
          {/* Separador floral entre ubicaciones e itinerario */}
          <div className="w-full">
            <img src="/images/separador-flores.png" alt="Separador floral" className="w-full h-auto object-cover" />
          </div>

          {/* Sección Verde - Itinerario hasta el final */}
          <div className="bg-[#8bb3a4]">
            <TimelineSection />
            <FloralDivider variant="green" />

            <GiftsSection />
            <FloralDivider variant="green" />

            <Suspense fallback={<div className="h-40 flex items-center justify-center text-white">Cargando...</div>}>
              <RSVPSection />
            </Suspense>
            <FloralDivider variant="green" />

            <GoodbyeSection />
          
            <footer className="py-12 text-center text-white/90 font-light text-xs uppercase tracking-widest">
              <p>© 2026 XV Años Camila. Todos los derechos reservados.</p>
              <p className="mt-2 text-white font-medium">Diseñado con ❤️ para una noche mágica.</p>
            </footer>
          </div>
        </div>
      )}
    </main>
  );
}
