"use client";
import { useEffect, useRef, useState } from "react";
import { Music, Volume2, VolumeX } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface MusicPlayerProps {
  isPlaying: boolean;
  onToggle: () => void;
}

export function MusicPlayer({ isPlaying, onToggle }: MusicPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(err => {
          console.log("Esperando interacción para reproducir audio:", err);
        });
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      {/* Audio Engine */}
      <audio
        ref={audioRef}
        src="/music/cancion.mp3"
        loop
        preload="auto"
      />

      <motion.button
        onClick={onToggle}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-12 h-12 bg-white/20 backdrop-blur-md border border-white/40 rounded-full flex items-center justify-center shadow-lg text-white group"
      >
        <AnimatePresence mode="wait">
          {isPlaying ? (
            <motion.div
              key="playing"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
            >
              <Volume2 className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </motion.div>
          ) : (
            <motion.div
              key="paused"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
            >
              <VolumeX className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Onda musical animada cuando está sonando */}
        {isPlaying && (
          <div className="absolute -top-1 -right-1 flex gap-0.5">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                animate={{ height: [4, 10, 4] }}
                transition={{ repeat: Infinity, duration: 0.5, delay: i * 0.1 }}
                className="w-0.5 bg-white rounded-full"
              />
            ))}
          </div>
        )}
      </motion.button>
    </div>
  );
}
