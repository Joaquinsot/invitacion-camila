"use client";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative h-[100dvh] flex items-center justify-center overflow-hidden">
      {/* Background Image: using one of the user provided images */}
      <div className="absolute inset-0 bg-[url('/images/nueva-portada-alexia.png')] bg-cover bg-center bg-no-repeat scale-105"></div>
      
      {/* Partículas suaves (simuladas) */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30 mix-blend-screen z-0 animate-pulse"></div>
      
      <div className="relative z-10 text-center px-4 flex flex-col items-center w-full mt-20">
        {/* El texto "Mis 15 Años Camila" ha sido removido a petición, 
            ya que la nueva imagen contiene el texto "Alexia Camila". */}
      </div>
    </section>
  );
}
