"use client";
import { useEffect, useRef, useState } from "react";
import { Music, Volume2, VolumeX } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface MusicPlayerProps {
  isPlaying: boolean;
  onToggle: () => void;
}

export function MusicPlayer({ isPlaying, onToggle }: MusicPlayerProps) {
  const playerRef = useRef<HTMLIFrameElement>(null);

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      {/* YouTube Hidden Player */}
      <div className="hidden">
        <iframe
          ref={playerRef}
          width="1"
          height="1"
          src={`https://www.youtube.com/embed/P61FN0qUmE0?autoplay=${isPlaying ? 1 : 0}&mute=0&loop=1&playlist=P61FN0qUmE0&enablejsapi=1`}
          title="YouTube video player"
          allow="autoplay"
        ></iframe>
      </div>

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
