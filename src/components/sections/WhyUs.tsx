"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Map, ShieldCheck, CarFront, Route, Mountain, MapPin } from 'lucide-react';

const reasons = [
  { icon: Map, title: 'Local Himalayan Experience', desc: 'Born and based in Manali. We know every trail, pass, and weather pattern.' },
  { icon: ShieldCheck, title: 'Premium 4x4 Fleet', desc: 'Meticulously maintained, expedition-ready vehicles from Jimny to Defender.' },
  { icon: CarFront, title: 'Self Drive Options', desc: 'Experience the thrill of driving yourself across the highest motorable roads.' },
  { icon: Route, title: 'Flexible Routes', desc: 'Custom itineraries tailored to your timeline, interests, and driving experience.' },
  { icon: Mountain, title: 'Adventure-Focused', desc: 'We cater exclusively to mountain expeditions, not city commutes.' },
  { icon: MapPin, title: 'Manali-Based Service', desc: 'Start your journey right at the gateway to the high Himalayas.' },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="py-32 bg-brand-charcoal relative">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-brand-orange text-sm uppercase tracking-[0.3em] font-semibold mb-4">The Wander Advantage</h2>
          <h3 className="font-serif text-4xl md:text-5xl text-brand-white">Why Wander Journeys</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-brand-offwhite group-hover:bg-brand-orange group-hover:text-white group-hover:border-brand-orange transition-all duration-300 transform group-hover:-translate-y-2">
                  <Icon className="w-8 h-8" />
                </div>
                <h4 className="font-serif text-xl text-brand-white mb-3">{reason.title}</h4>
                <p className="text-brand-offwhite/60 text-sm leading-relaxed">{reason.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
