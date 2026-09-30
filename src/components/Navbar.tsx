"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Destinations', href: '#destinations' },
    { name: 'Our Fleet', href: '#fleet' },
    { name: 'Routes', href: '#routes' },
    { name: 'Why Us', href: '#why-us' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 w-full z-40 transition-all duration-300 ${
          scrolled ? 'bg-brand-black/90 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full overflow-hidden border border-brand-orange/30 group-hover:border-brand-orange transition-colors">
              <img src="/logo.jpg" alt="The Wander Journeys Logo" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl leading-none tracking-wide text-brand-white">THE WANDER</span>
              <span className="text-brand-orange text-[10px] uppercase tracking-[0.2em] font-semibold mt-1">Journeys</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="text-sm text-brand-offwhite hover:text-brand-orange transition-colors uppercase tracking-wider"
              >
                {link.name}
              </Link>
            ))}
            <Link 
              href="#book"
              className="px-6 py-2.5 bg-brand-orange text-white text-sm uppercase tracking-wider font-semibold rounded-full hover:bg-brand-orange-hover transition-colors ml-4"
            >
              Book Now
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-brand-white p-2"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-50 bg-brand-black flex flex-col"
          >
            <div className="flex justify-between items-center p-6 border-b border-white/10">
              <div className="font-serif text-xl tracking-wide text-brand-white">THE WANDER</div>
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-brand-white/70 hover:text-white"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="flex flex-col gap-6 p-8 mt-12">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 + 0.2 }}
                >
                  <Link 
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-2xl font-serif text-brand-white hover:text-brand-orange transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-8"
              >
                <Link 
                  href="#book"
                  onClick={() => setMobileMenuOpen(false)}
                  className="inline-flex px-8 py-4 bg-brand-orange text-white text-sm uppercase tracking-wider font-semibold rounded-full hover:bg-brand-orange-hover transition-colors"
                >
                  Enquire Now
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
