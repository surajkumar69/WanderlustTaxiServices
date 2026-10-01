"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, Info } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../../config';

const vehicles = [
  { name: 'Range Rover Defender 110 HSE', desc: 'Ultimate luxury off-roader.', price: '₹60,000', oldPrice: '₹75,000', image: '/images/fleet/defender.jpg', type: 'Luxury 4x4 SUV' },
  { name: 'Range Rover Velar', desc: 'Avant-garde design meets capability.', price: '₹42,000', oldPrice: '₹50,000', image: '/images/fleet/velar.jpg', type: 'Luxury SUV' },
  { name: 'Mercedes CLE300 Cabriolet', desc: 'Open-air high altitude luxury.', price: '₹65,000', oldPrice: null, image: '/images/fleet/mercedes.jpg', type: 'Luxury Convertible' },
  { name: 'Jeep Wrangler 4x4 Automatic', desc: 'Iconic capability, premium comfort.', price: '₹32,000', oldPrice: '₹40,000', image: '/images/fleet/wrangler.jpg', type: 'Premium 4x4 Off-roader' },
  { name: 'Hilux 4x4', desc: 'Unbreakable expedition pickup.', price: '₹11,000', oldPrice: '₹15,000', image: '/images/fleet/hilux.jpg', type: '4x4 Pickup Truck' },
  { name: 'Fortuner 4x4', desc: 'Premium rugged SUV for groups.', price: '₹7,000', oldPrice: '₹9,000', image: '/images/fleet/fortuner.jpg', type: '4x4 SUV' },
  { name: 'Scorpio Classic S 4x4', desc: 'The Himalayan workhorse.', price: '₹6,500', oldPrice: '₹8,000', image: '/images/fleet/scorpio.jpg', type: '4x4 SUV' },
  { name: 'Thar 4x4 (2025)', desc: 'Modern classic, unstoppable.', price: '₹5,000', oldPrice: '₹6,500', image: '/images/fleet/thar.jpg', type: '4x4 Off-roader' },
  { name: 'Jimny 4x4', desc: 'Lightweight mountain goat.', price: '₹4,000', oldPrice: '₹5,500', image: '/images/fleet/jimny.jpg', type: 'Compact 4x4' },
];

export default function Fleet() {
  const [selectedVehicle, setSelectedVehicle] = useState<typeof vehicles[0] | null>(null);

  const handleEnquire = (vehicle: typeof vehicles[0]) => {
    const message = `Hello The Wander Journeys, I am interested in renting the ${vehicle.name} at ${vehicle.price}/day. Please share availability and booking details.`;
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

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

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 relative z-20">
          {vehicles.map((vehicle, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-panel rounded-2xl overflow-hidden group flex flex-col h-full relative"
            >
              <div className="relative h-64 overflow-hidden bg-brand-charcoal">
                <img 
                  src={vehicle.image} 
                  alt={vehicle.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-transparent to-transparent pointer-events-none"></div>
              </div>
              
              <div className="p-8 flex flex-col flex-grow relative z-30">
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
                  <button 
                    onClick={() => setSelectedVehicle(vehicle)}
                    className="flex-1 py-3 px-4 rounded-lg bg-white/5 border border-white/10 text-white text-sm uppercase tracking-wider font-semibold hover:bg-white/10 transition-colors z-40 relative cursor-pointer"
                  >
                    View Details
                  </button>
                  <button 
                    onClick={() => handleEnquire(vehicle)}
                    className="flex-1 py-3 px-4 rounded-lg bg-brand-orange text-white text-sm uppercase tracking-wider font-semibold hover:bg-brand-orange-hover hover:shadow-[0_0_20px_rgba(232,106,36,0.3)] transition-all z-40 relative cursor-pointer"
                  >
                    Enquire Now
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedVehicle && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedVehicle(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
            ></motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-3xl bg-[#0a0c0e] rounded-2xl overflow-hidden shadow-2xl border border-white/10 z-10 max-h-[90vh] flex flex-col"
            >
              <button
                onClick={() => setSelectedVehicle(null)}
                className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/80 rounded-full text-white transition-colors z-20 cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="relative h-64 md:h-80 shrink-0">
                <img
                  src={selectedVehicle.image}
                  alt={selectedVehicle.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0c0e] via-transparent to-transparent pointer-events-none"></div>
              </div>

              <div className="p-8 overflow-y-auto">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
                  <div>
                    <h3 className="font-serif text-3xl md:text-4xl text-brand-white mb-2">
                      {selectedVehicle.name}
                    </h3>
                    <p className="text-brand-offwhite/60 text-lg">
                      {selectedVehicle.desc}
                    </p>
                  </div>
                  <div className="shrink-0 flex flex-col items-start md:items-end bg-white/5 p-4 rounded-xl border border-white/10">
                    <div className="text-sm text-brand-offwhite/60 uppercase tracking-wider mb-1">
                      Daily Rate
                    </div>
                    <div className="flex items-end gap-3">
                      <span className="text-3xl text-brand-orange font-serif leading-none">
                        {selectedVehicle.price}
                      </span>
                      {selectedVehicle.oldPrice && (
                        <span className="text-brand-offwhite/30 line-through text-sm mb-1">
                          {selectedVehicle.oldPrice}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-lg font-serif text-brand-white mb-4 border-b border-white/10 pb-2">
                      Vehicle Specifications
                    </h4>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3 text-brand-offwhite/80">
                        <CheckCircle className="w-5 h-5 text-brand-orange shrink-0" />
                        <span>Type: {selectedVehicle.type}</span>
                      </li>
                      <li className="flex items-center gap-3 text-brand-offwhite/80">
                        <CheckCircle className="w-5 h-5 text-brand-orange shrink-0" />
                        <span>Transmission: Automatic/Manual</span>
                      </li>
                      <li className="flex items-center gap-3 text-brand-offwhite/80">
                        <CheckCircle className="w-5 h-5 text-brand-orange shrink-0" />
                        <span>Drivetrain: 4x4 / 4WD</span>
                      </li>
                      <li className="flex items-center gap-3 text-brand-offwhite/80">
                        <CheckCircle className="w-5 h-5 text-brand-orange shrink-0" />
                        <span>Seating: Varies by model</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-serif text-brand-white mb-4 border-b border-white/10 pb-2">
                      Availability & Inquiry
                    </h4>
                    <div className="bg-brand-orange/10 border border-brand-orange/20 rounded-xl p-4 flex gap-3">
                      <Info className="w-6 h-6 text-brand-orange shrink-0 mt-0.5" />
                      <p className="text-sm text-brand-offwhite/80 leading-relaxed">
                        This vehicle is subject to availability for your requested dates. Please enquire now to confirm booking status, exact specifications, and any seasonal requirements for your route.
                      </p>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => handleEnquire(selectedVehicle)}
                  className="w-full py-4 rounded-xl bg-brand-orange text-white text-base uppercase tracking-wider font-semibold hover:bg-brand-orange-hover hover:shadow-[0_0_20px_rgba(232,106,36,0.3)] transition-all cursor-pointer"
                >
                  Enquire Now via WhatsApp
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
