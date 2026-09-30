"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Navigation, Info, Car, MessageCircle } from 'lucide-react';

const routePoints = [
  { id: 'manali', name: 'Manali', img: '/hero_himalayan_road.jpg', desc: 'The starting point of your grand Himalayan adventure. A vibrant mountain town surrounded by peaks.', rec: 'Scorpio Classic S 4x4' },
  { id: 'sissu', name: 'Sissu', img: '/manali_sissu.jpg', desc: 'Emerging from the Atal Tunnel into Lahaul valley, greeted by waterfalls and stark landscapes.', rec: 'Thar 4x4' },
  { id: 'rohtang', name: 'Rohtang Pass', img: '/manali_rohtang.jpg', desc: 'The historic high mountain pass at 3,978m. A challenging but rewarding drive with panoramic views.', rec: 'Jimny 4x4' },
  { id: 'shinkula', name: 'Shinkula Pass', img: '/manali_shinkula.jpg', desc: 'The gateway to Zanskar at 5,091m. Rugged dirt roads and absolute isolation.', rec: 'Fortuner 4x4' },
  { id: 'baralacha', name: 'Bara-Lacha', img: '/manali_baralacha.jpg', desc: 'A high altitude desert pass connecting Lahaul to Ladakh, featuring pristine lakes.', rec: 'Hilux 4x4' },
  { id: 'zanskar', name: 'Zanskar', img: '/zanskar_valley.jpg', desc: 'The ultimate destination. Deep gorges, ancient monasteries, and raw wilderness.', rec: 'Defender 110' },
];

export default function Route() {
  const [activePoint, setActivePoint] = useState(routePoints[0]);

  return (
    <section id="routes" className="py-32 bg-brand-charcoal relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-brand-orange text-sm uppercase tracking-[0.3em] font-semibold mb-4">The Himalayan Route</h2>
          <h3 className="font-serif text-4xl md:text-5xl text-brand-white">Follow the Expedition</h3>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
          {/* Route Visualizer */}
          <div className="w-full lg:w-1/2 relative">
            <div className="absolute left-6 top-0 bottom-0 w-[1px] bg-white/10 md:hidden"></div>
            <div className="flex flex-col md:flex-row justify-between relative z-10 w-full gap-8 md:gap-0">
              {/* Desktop Line */}
              <div className="hidden md:block absolute top-6 left-0 right-0 h-[1px] bg-white/10 z-0"></div>
              
              {routePoints.map((point, index) => (
                <div 
                  key={point.id} 
                  className="flex md:flex-col items-center gap-4 md:gap-4 cursor-pointer relative z-10 pl-12 md:pl-0"
                  onClick={() => setActivePoint(point)}
                >
                  <motion.div 
                    className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${activePoint.id === point.id ? 'bg-brand-orange border-brand-orange text-white scale-110 shadow-[0_0_20px_rgba(232,106,36,0.4)]' : 'bg-brand-black border-white/20 text-white/50 hover:border-brand-orange/50'}`}
                    whileHover={{ scale: 1.1 }}
                  >
                    <MapPin className="w-5 h-5" />
                  </motion.div>
                  <div className="md:text-center">
                    <span className={`text-xs md:text-[10px] uppercase tracking-widest font-semibold block mb-1 ${activePoint.id === point.id ? 'text-brand-orange' : 'text-white/40'}`}>
                      Stop 0{index + 1}
                    </span>
                    <span className={`font-serif md:text-sm lg:text-base transition-colors ${activePoint.id === point.id ? 'text-white' : 'text-white/60'}`}>
                      {point.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Active Point Details */}
          <div className="w-full lg:w-1/2">
            <AnimatePresence mode="wait">
              <motion.div
                key={activePoint.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="glass-panel p-2 rounded-2xl"
              >
                <div className="relative h-64 md:h-80 rounded-xl overflow-hidden mb-6">
                  <img src={activePoint.img} alt={activePoint.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6">
                    <h4 className="font-serif text-3xl text-white">{activePoint.name}</h4>
                  </div>
                </div>
                
                <div className="p-4 md:p-6 pt-0">
                  <p className="text-brand-offwhite/70 mb-6 text-sm md:text-base leading-relaxed">
                    {activePoint.desc}
                  </p>
                  
                  <div className="flex items-center gap-3 text-sm text-brand-offwhite mb-8 bg-white/5 p-4 rounded-lg">
                    <Car className="w-5 h-5 text-brand-orange" />
                    <span><span className="text-white/50">Recommended Vehicle:</span> {activePoint.rec}</span>
                  </div>
                  
                  <a 
                    href={`https://wa.me/919876543210?text=Hi,%20I'm%20interested%20in%20the%20${activePoint.name}%20route.`}
                    target="_blank" rel="noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-brand-orange text-white uppercase tracking-wider text-sm font-semibold rounded-lg hover:bg-brand-orange-hover transition-colors w-full justify-center md:w-auto md:justify-start"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Enquire Route
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
