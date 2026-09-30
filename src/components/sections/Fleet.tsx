"use client";
import React from 'react';
import { motion } from 'framer-motion';

const vehicles = [
  { name: 'Range Rover Defender 110 HSE', desc: 'Ultimate luxury off-roader.', price: '₹60,000', oldPrice: '₹75,000', image: '/vehicle_defender.jpg' },
  { name: 'Range Rover Velar', desc: 'Avant-garde design meets capability.', price: '₹42,000', oldPrice: '₹50,000', image: '/vehicle_velar.jpg' },
  { name: 'Mercedes CLE300 Cabriolet', desc: 'Open-air high altitude luxury.', price: '₹65,000', oldPrice: null, image: '/vehicle_defender.jpg' },
  { name: 'Jeep Wrangler 4x4 Automatic', desc: 'Iconic capability, premium comfort.', price: '₹32,000', oldPrice: '₹40,000', image: '/vehicle_defender.jpg' },
  { name: 'Hilux 4x4', desc: 'Unbreakable expedition pickup.', price: '₹11,000', oldPrice: '₹15,000', image: '/vehicle_defender.jpg' },
  { name: 'Fortuner 4x4', desc: 'Premium rugged SUV for groups.', price: '₹7,000', oldPrice: '₹9,000', image: '/vehicle_defender.jpg' },
  { name: 'Scorpio Classic S 4x4', desc: 'The Himalayan workhorse.', price: '₹6,500', oldPrice: '₹8,000', image: '/vehicle_scorpio.jpg' },
  { name: 'Thar 4x4 (2025)', desc: 'Modern classic, unstoppable.', price: '₹5,000', oldPrice: '₹6,500', image: '/vehicle_thar.jpg' },
  { name: 'Jimny 4x4', desc: 'Lightweight mountain goat.', price: '₹4,000', oldPrice: '₹5,500', image: '/vehicle_jimny.jpg' },
];

export default function Fleet() {
  return (
    <section id="fleet" className="py-32 bg-[#0a0c0e] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full contour-pattern opacity-10 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-brand-orange text-sm uppercase tracking-[0.3em] font-semibold mb-4">Our 4x4 Fleet</h2>
          <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl text-brand-white mb-6">Engineered for the Mountains</h3>
          <p className="text-brand-offwhite/60 max-w-2xl mx-auto font-light">
            Choose from our meticulously maintained fleet of premium 4x4 vehicles, ready to conquer any Himalayan terrain in absolute comfort.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {vehicles.map((vehicle, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-panel rounded-2xl overflow-hidden group flex flex-col h-full"
            >
              <div className="relative h-64 overflow-hidden bg-brand-charcoal">
                <img 
                  src={vehicle.image} 
                  alt={vehicle.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-transparent to-transparent"></div>
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <h4 className="font-serif text-2xl text-brand-white mb-2">{vehicle.name}</h4>
                <p className="text-brand-offwhite/60 text-sm mb-6 flex-grow">{vehicle.desc}</p>
                
                <div className="flex items-end gap-3 mb-8">
                  <span className="text-3xl text-brand-orange font-serif">{vehicle.price}</span>
                  <span className="text-brand-offwhite/40 text-sm mb-1 uppercase tracking-wider">/ day</span>
                  {vehicle.oldPrice && (
                    <span className="text-brand-offwhite/30 line-through text-sm mb-1 ml-2">{vehicle.oldPrice}</span>
                  )}
                </div>
                
                <div className="flex gap-4 mt-auto">
                  <button className="flex-1 py-3 px-4 rounded-lg bg-white/5 border border-white/10 text-white text-sm uppercase tracking-wider font-semibold hover:bg-white/10 transition-colors">
                    View Details
                  </button>
                  <button className="flex-1 py-3 px-4 rounded-lg bg-brand-orange text-white text-sm uppercase tracking-wider font-semibold hover:bg-brand-orange-hover hover:shadow-[0_0_20px_rgba(232,106,36,0.3)] transition-all">
                    Enquire Now
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
