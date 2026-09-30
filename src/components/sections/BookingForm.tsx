"use client";
import React, { useState } from 'react';
import { Send } from 'lucide-react';

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    pickup: 'Manali',
    destination: '',
    travelDate: '',
    returnDate: '',
    vehicle: '',
    travellers: '2',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const text = `*New Enquiry: The Wander Journeys*%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Pickup:* ${formData.pickup}%0A*Destination:* ${formData.destination}%0A*Dates:* ${formData.travelDate} to ${formData.returnDate}%0A*Vehicle/Tour:* ${formData.vehicle}%0A*Travellers:* ${formData.travellers}%0A*Message:* ${formData.message}`;
    
    window.open(`https://wa.me/919876543210?text=${text}`, '_blank');
  };

  return (
    <section id="book" className="py-32 bg-[#0a0c0e] relative overflow-hidden">
      <div className="absolute left-0 top-0 w-1/2 h-full bg-[url('/vehicle_thar.jpg')] bg-cover bg-center opacity-20 hidden lg:block">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0a0c0e]"></div>
      </div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex justify-end">
          <div className="w-full lg:w-3/5 glass-panel p-8 md:p-12 rounded-3xl">
            <h2 className="text-brand-orange text-sm uppercase tracking-[0.3em] font-semibold mb-2">Start Your Journey</h2>
            <h3 className="font-serif text-3xl md:text-4xl text-brand-white mb-8">Book or Enquire</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-brand-offwhite/50 mb-2">Name</label>
                  <input required type="text" name="name" value={formData.name} onChange={handleChange} className="w-full bg-brand-charcoal border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-orange transition-colors" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-brand-offwhite/50 mb-2">Phone / WhatsApp</label>
                  <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full bg-brand-charcoal border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-orange transition-colors" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-brand-offwhite/50 mb-2">Pickup Location</label>
                  <input type="text" name="pickup" value={formData.pickup} onChange={handleChange} className="w-full bg-brand-charcoal border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-orange transition-colors" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-brand-offwhite/50 mb-2">Destination / Route</label>
                  <input required type="text" name="destination" value={formData.destination} onChange={handleChange} placeholder="e.g. Spiti Valley" className="w-full bg-brand-charcoal border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-orange transition-colors" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-brand-offwhite/50 mb-2">Travel Date</label>
                  <input required type="date" name="travelDate" value={formData.travelDate} onChange={handleChange} className="w-full bg-brand-charcoal border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-orange transition-colors custom-date-input" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-brand-offwhite/50 mb-2">Return Date</label>
                  <input required type="date" name="returnDate" value={formData.returnDate} onChange={handleChange} className="w-full bg-brand-charcoal border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-orange transition-colors custom-date-input" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-brand-offwhite/50 mb-2">Travellers</label>
                  <select name="travellers" value={formData.travellers} onChange={handleChange} className="w-full bg-brand-charcoal border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-orange transition-colors appearance-none">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5+</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-brand-offwhite/50 mb-2">Vehicle Preference (Self Drive or Taxi)</label>
                <select name="vehicle" value={formData.vehicle} onChange={handleChange} className="w-full bg-brand-charcoal border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-orange transition-colors appearance-none">
                  <option value="">Any Vehicle / Not Sure</option>
                  <option value="Thar 4x4 (Self Drive)">Thar 4x4 (Self Drive)</option>
                  <option value="Scorpio Classic (Self Drive)">Scorpio Classic (Self Drive)</option>
                  <option value="Jimny 4x4 (Self Drive)">Jimny 4x4 (Self Drive)</option>
                  <option value="Defender 110 (Taxi/Self Drive)">Defender 110 (Taxi/Self Drive)</option>
                  <option value="Velar (Taxi)">Velar (Taxi)</option>
                  <option value="Hilux (Self Drive)">Hilux (Self Drive)</option>
                  <option value="Fortuner (Taxi/Self Drive)">Fortuner (Taxi/Self Drive)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-brand-offwhite/50 mb-2">Message / Special Requests</label>
                <textarea name="message" value={formData.message} onChange={handleChange} rows={4} className="w-full bg-brand-charcoal border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-orange transition-colors resize-none"></textarea>
              </div>

              <button type="submit" className="w-full py-4 bg-brand-orange text-white uppercase tracking-widest text-sm font-semibold rounded-lg hover:bg-brand-orange-hover transition-colors flex items-center justify-center gap-3">
                <span>Send Enquiry via WhatsApp</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
