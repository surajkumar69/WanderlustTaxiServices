"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function Editorial() {
  return (
    <>
      {/* Winter Spiti Cinematic Full Width */}
      <section className="relative py-40 md:py-64 overflow-hidden flex items-center">
        <div className="absolute inset-0 z-0">
          <img src="/winter_spiti.jpg" alt="Winter Spiti" className="w-full h-full object-cover scale-105" />
          <div className="absolute inset-0 bg-brand-black/50"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-brand-charcoal"></div>
        </div>
        
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <span className="text-brand-orange text-sm uppercase tracking-[0.4em] font-semibold mb-6 block">Extreme Expedition</span>
            <h2 className="font-serif text-5xl md:text-7xl text-brand-white mb-6">WINTER SPITI</h2>
            <p className="text-xl text-brand-offwhite/80 font-light mb-10 leading-relaxed">
              Experience the white desert in its most pristine and challenging state. A true test of machine and spirit, reserved for the ultimate adventurer.
            </p>
            <a href="#book" className="inline-block px-8 py-4 bg-white text-brand-black uppercase tracking-widest text-sm font-semibold rounded-full hover:bg-brand-orange hover:text-white transition-colors duration-300">
              Request Winter Itinerary
            </a>
          </motion.div>
        </div>
      </section>

      {/* Ladakh + Zanskar Split Editorial */}
      <section className="py-24 bg-brand-black">
        <div className="container mx-auto px-0 md:px-12">
          <div className="flex flex-col lg:flex-row items-stretch">
            <div className="w-full lg:w-1/2 p-6 md:p-12 lg:p-24 flex flex-col justify-center order-2 lg:order-1">
              <span className="text-brand-orange text-xs uppercase tracking-[0.3em] font-semibold mb-4 block">The Great Divide</span>
              <h3 className="font-serif text-4xl md:text-5xl text-brand-white mb-8">Ladakh &<br/>Zanskar</h3>
              <p className="text-brand-offwhite/70 mb-6 leading-relaxed">
                Journey into the heart of the Trans-Himalaya. Our curated routes through Ladakh and Zanskar offer an unparalleled mix of high-altitude deserts, ancient monasteries perched on craggy peaks, and sapphire-blue lakes.
              </p>
              <p className="text-brand-offwhite/70 mb-10 leading-relaxed">
                Whether you choose a self-drive adventure in a customized Thar or prefer the comfort of our guided 4x4 taxi service, we provide the expertise and the fleet to conquer the roof of the world safely and in style.
              </p>
              <div className="flex gap-4 items-center">
                <div className="w-12 h-[1px] bg-brand-orange"></div>
                <a href="#book" className="text-brand-white uppercase tracking-wider text-sm hover:text-brand-orange transition-colors">
                  Plan Your Expedition
                </a>
              </div>
            </div>
            <div className="w-full lg:w-1/2 min-h-[500px] relative order-1 lg:order-2 md:rounded-3xl overflow-hidden">
              <img src="/ladakh_landscape.jpg" alt="Ladakh Landscape" className="absolute inset-0 w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
