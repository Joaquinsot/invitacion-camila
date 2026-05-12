"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Church, Sparkles, Heart, Music, Utensils, Disc } from "lucide-react";

const events = [
  { time: "6:00 PM", title: "Misa", icon: <Church className="w-6 h-6 stroke-[1.5]" /> },
  { time: "7:00 PM", title: "Recepción", icon: <Sparkles className="w-6 h-6 stroke-[1.5]" /> },
  { time: "8:00 PM", title: "Cena", icon: <Utensils className="w-6 h-6 stroke-[1.5]" /> },
  { time: "9:00 PM", title: "Vals", icon: <Heart className="w-6 h-6 stroke-[1.5]" /> },
  { time: "10:00 PM", title: "Fiesta", icon: <Music className="w-6 h-6 stroke-[1.5]" /> },
  { time: "12:00 AM", title: "Tornamesa", icon: <Disc className="w-6 h-6 stroke-[1.5]" /> }
];

gsap.registerPlugin(ScrollTrigger);

export function TimelineSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const timelineItems = gsap.utils.toArray<HTMLElement>('.timeline-item');
      const dots = gsap.utils.toArray<HTMLElement>('.timeline-dot');
      const iconCircles = gsap.utils.toArray<HTMLElement>('.timeline-icon-circle');
      
      // Animate the line
      gsap.fromTo(lineRef.current, 
        { height: 0 },
        {
          height: "100%",
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top center",
            end: "bottom center+=100",
            scrub: true,
          }
        }
      );

      // Animate each item
      timelineItems.forEach((item, i) => {
        // Estado inicial
        gsap.set(iconCircles[i], { scale: 0, rotation: -180, opacity: 0 });
        gsap.set(item, { opacity: 0.4, y: 30 });

        ScrollTrigger.create({
          trigger: item,
          start: "top center+=100",
          onEnter: () => {
            gsap.to(item, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" });
            gsap.to(dots[i], { backgroundColor: "#ffffff", scale: 1.8, duration: 0.4, ease: "back.out" });
            gsap.to(iconCircles[i], { 
              scale: 1, 
              rotation: 0, 
              opacity: 1, 
              duration: 0.7, 
              ease: "back.out(2)", 
              delay: 0.1 
            });
          },
          onLeaveBack: () => {
            gsap.to(item, { opacity: 0.4, y: 30, duration: 0.4 });
            gsap.to(dots[i], { backgroundColor: "rgba(255,255,255,0.3)", scale: 1, duration: 0.4 });
            gsap.to(iconCircles[i], { scale: 0, rotation: -180, opacity: 0, duration: 0.4 });
          }
        });
      });
    }, containerRef);

    // Refresh ScrollTrigger to ensure correct positions
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 1000);

    return () => ctx.revert();
  }, []);

  return (
    <section className="pt-24 pb-48 px-4 relative z-10" ref={containerRef}>

      
      <div className="max-w-3xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="font-script text-6xl md:text-7xl text-white drop-shadow-md mb-4">Itinerario</h2>
          <div className="h-px w-24 bg-white/50 mx-auto"></div>
        </div>

        <div className="relative pb-10">
          {/* Línea vertical base centrada en todas las pantallas */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-white/20 -translate-x-1/2"></div>
          
          {/* Línea vertical animada (progreso mágico) */}
          <div ref={lineRef} className="absolute left-1/2 top-0 w-[3px] bg-white -translate-x-1/2 shadow-[0_0_20px_rgba(255,255,255,1)]">
            {/* Chispa de luz en la punta */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3 h-3 md:w-4 md:h-4 bg-white rounded-full shadow-[0_0_25px_8px_rgba(255,255,255,0.9)] animate-pulse"></div>
          </div>

          <div className="space-y-20">
            {events.map((event, index) => (
              <div 
                key={index} 
                className="timeline-item flex items-center relative w-full"
              >
                {/* Lado izquierdo */}
                <div className="w-1/2 pr-6 md:pr-12 text-right">
                  {index % 2 !== 0 && (
                    <div className="py-2">
                      <h4 className="font-serif text-xl md:text-3xl text-white mb-1 md:mb-2">{event.title}</h4>
                      <p className="text-white/80 font-medium text-xs md:text-sm tracking-[0.2em] uppercase">{event.time}</p>
                    </div>
                  )}
                </div>

                {/* Punto central e ícono */}
                <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
                  <div className="timeline-dot w-3 h-3 bg-white/30 rounded-full border border-white relative z-10 shadow-[0_0_10px_rgba(255,255,255,0.3)]"></div>
                  <div className="timeline-icon-circle absolute w-12 h-12 md:w-14 md:h-14 bg-white rounded-full shadow-[0_10px_20px_rgba(0,0,0,0.15)] border border-white/50 flex items-center justify-center text-xl md:text-2xl z-20 text-[#8bb3a4]">
                    {event.icon}
                  </div>
                </div>

                {/* Lado derecho */}
                <div className="w-1/2 pl-6 md:pl-12 text-left">
                  {index % 2 === 0 && (
                    <div className="py-2">
                      <h4 className="font-serif text-xl md:text-3xl text-white mb-1 md:mb-2">{event.title}</h4>
                      <p className="text-white/80 font-medium text-xs md:text-sm tracking-[0.2em] uppercase">{event.time}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
