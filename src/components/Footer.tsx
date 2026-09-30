import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-charcoal pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 contour-pattern opacity-30"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full overflow-hidden border border-brand-orange/30">
                <img src="/logo.jpg" alt="Logo" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl leading-none tracking-wide text-brand-white">THE WANDER</span>
                <span className="text-brand-orange text-[10px] uppercase tracking-[0.2em] font-semibold mt-1">Journeys</span>
              </div>
            </div>
            <p className="text-brand-offwhite/70 text-sm leading-relaxed mb-6 max-w-xs">
              Premium self-drive car rental and 4x4 taxi service based in Manali, specializing in authentic Himalayan expeditions.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-brand-orange transition-colors">
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-serif text-lg mb-6">Quick Links</h4>
            <ul className="flex flex-col gap-3">
              <li><Link href="#destinations" className="text-brand-offwhite/70 hover:text-brand-orange transition-colors text-sm">Destinations</Link></li>
              <li><Link href="#fleet" className="text-brand-offwhite/70 hover:text-brand-orange transition-colors text-sm">Our 4x4 Fleet</Link></li>
              <li><Link href="#routes" className="text-brand-offwhite/70 hover:text-brand-orange transition-colors text-sm">Himalayan Routes</Link></li>
              <li><Link href="#why-us" className="text-brand-offwhite/70 hover:text-brand-orange transition-colors text-sm">Why Choose Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif text-lg mb-6">Contact</h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3 text-brand-offwhite/70 text-sm">
                <MapPin className="w-5 h-5 text-brand-orange shrink-0" />
                <span>Manali, Himachal Pradesh,<br />India 175131</span>
              </li>
              <li className="flex items-center gap-3 text-brand-offwhite/70 text-sm">
                <Mail className="w-5 h-5 text-brand-orange shrink-0" />
                <a href="mailto:Wanderlustjpurneys72@gmail.com" className="hover:text-brand-orange transition-colors">Wanderlustjpurneys72@gmail.com</a>
              </li>
              <li className="flex items-center gap-3 text-brand-offwhite/70 text-sm">
                <Phone className="w-5 h-5 text-brand-orange shrink-0" />
                <a href="tel:+919876543210" className="hover:text-brand-orange transition-colors">+91 98765 43210</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif text-lg mb-6">Ready to Explore?</h4>
            <a 
              href="https://wa.me/919876543210?text=Hi,%20I'm%20interested%20in%20booking%20a%20vehicle/tour%20with%20The%20Wander%20Journeys." 
              target="_blank" rel="noreferrer"
              className="flex items-center justify-center gap-2 w-full py-4 bg-[#25D366] text-white rounded-lg hover:bg-[#20b858] transition-colors font-medium mb-4"
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
            </a>
            <a 
              href="tel:+919876543210" 
              className="flex items-center justify-center gap-2 w-full py-4 bg-white/5 text-white rounded-lg hover:bg-white/10 transition-colors font-medium border border-white/10"
            >
              <Phone className="w-5 h-5" />
              Call Us Now
            </a>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-brand-offwhite/50">
          <p>&copy; {new Date().getFullYear()} The Wander Journeys. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-brand-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
