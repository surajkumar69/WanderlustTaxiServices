"use client";
import React from 'react';
import { motion } from 'framer-motion';

const destinations = [
  { name: 'Winter Spiti', image: '/winter_spiti.jpg', span: 'col-span-1 md:col-span-2 row-span-2' },
  { name: 'Ladakh', image: '/ladakh_landscape.jpg', span: 'col-span-1' },
  { name: 'Zanskar', image: '/zanskar_valley.jpg', span: 'col-span-1' },
  { name: 'Manali to Sissu', image: '/manali_sissu.jpg', span: 'col-span-1' },
  { name: 'Manali to Rohtang Pass', image: '/manali_rohtang.jpg', span: 'col-span-1 md:col-span-2' },
  { name: 'Manali to Shinkula Pass', image: '/manali_shinkula.jpg', span: 'col-span-1' },
  { name: 'Manali to Bara-Lacha', image: '/manali_baralacha.jpg', span: 'col-span-1' },
];

export default function Destinations() {
  return (
    <section id="destinations" className="py-32 bg-brand-charcoal relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-brand-orange text-sm uppercase tracking-[0.3em] font-semibold mb-4">Explore The Himalayas</h2>
            <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl text-brand-white">Curated Journeys</h3>
          </div>
          <p className="text-brand-offwhite/60 max-w-md font-light">
            Discover the raw, untamed beauty of the high Himalayas. Our carefully planned routes take you through the most breathtaking landscapes on earth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[250px] gap-4">
          {destinations.map((dest, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative overflow-hidden rounded-xl group cursor-pointer ${dest.span}`}
            >
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500 z-10"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>
              <img 
                src={dest.image} 
                alt={dest.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 p-6 z-20 w-full transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <h4 className="font-serif text-2xl text-white mb-2">{dest.name}</h4>
                <div className="w-8 h-[1px] bg-brand-orange group-hover:w-16 transition-all duration-500"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
