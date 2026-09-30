"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-brand-black/40 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent z-10"></div>
        <img 
          src="/hero_himalayan_road.jpg" 
          alt="Himalayan Road Expedition" 
          className="w-full h-full object-cover scale-105"
        />
      </div>

      <div className="container relative z-20 mx-auto px-6 md:px-12 text-center mt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight mb-6 tracking-wide">
            THE MOUNTAINS <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-white to-brand-offwhite/60">
              ARE CALLING.
            </span>
          </h1>
          <p className="font-serif text-2xl md:text-4xl text-brand-orange mb-8 italic">
            We provide the journey.
          </p>
          <p className="text-lg md:text-xl text-brand-offwhite/80 max-w-2xl mx-auto mb-12 font-light tracking-wide">
            Self-drive cars, 4×4 taxis and unforgettable Himalayan journeys from Manali.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href="#destinations" 
              className="px-8 py-4 bg-transparent border border-white/30 text-white uppercase tracking-widest text-sm font-semibold rounded-full hover:bg-white hover:text-brand-black transition-all duration-300 w-full sm:w-auto"
            >
              Explore Journeys
            </a>
            <a 
              href="#fleet" 
              className="px-8 py-4 bg-brand-orange text-white uppercase tracking-widest text-sm font-semibold rounded-full hover:bg-brand-orange-hover hover:scale-105 transition-all duration-300 w-full sm:w-auto shadow-[0_0_30px_rgba(232,106,36,0.3)]"
            >
              Book a Vehicle
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/50">Scroll</span>
        <div className="w-[1px] h-12 bg-white/20 overflow-hidden relative">
          <motion.div 
            animate={{ y: [0, 48, 48] }}
            transition={{ repeat: Infinity, duration: 2, ease: "circInOut" }}
            className="w-full h-1/2 bg-brand-orange absolute top-0"
          />
        </div>
      </motion.div>
    </section>
  );
}
