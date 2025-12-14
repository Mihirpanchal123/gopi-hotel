import React from 'react';
import { ROOMS } from '../constants';
import { Check } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const Rooms: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-brand-dark text-white py-16 px-4 text-center">
        <ScrollReveal>
            <h1 className="text-4xl font-serif font-bold mb-4">Accommodations</h1>
            <p className="max-w-2xl mx-auto text-gray-300">
            Simple, clean, and comfortable rooms designed for your relaxation. 
            Choose from our 15 well-maintained rooms suited for families and business travelers.
            </p>
        </ScrollReveal>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {ROOMS.map((room, index) => (
            <ScrollReveal key={room.id} delay={`${index * 0.2}s`}>
                <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 h-full">
                <div className="h-64 overflow-hidden">
                    <img 
                    src={room.imageUrl} 
                    alt={room.name} 
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                    />
                </div>
                <div className="p-8">
                    <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-gray-900">{room.name}</h3>
                    <div className="text-right">
                        <p className="text-2xl font-bold text-brand-gold">{room.priceRange}</p>
                        <p className="text-xs text-gray-500">per night</p>
                    </div>
                    </div>
                    
                    <div className="mb-8">
                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">Room Features</h4>
                    <ul className="grid grid-cols-2 gap-2">
                        {room.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-700">
                            <Check size={16} className="text-green-500 mr-2" />
                            <span className="text-sm">{feature}</span>
                        </li>
                        ))}
                    </ul>
                    </div>

                    <div className="flex gap-4">
                    <a href="tel:07790919160" className="flex-1 block text-center bg-brand-dark text-white py-3 rounded hover:bg-gray-800 transition-colors transform hover:-translate-y-1 duration-200">
                        Call to Book
                    </a>
                    </div>
                </div>
                </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay="0.4s" className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Hotel Policies</h3>
            <div className="inline-flex flex-wrap justify-center gap-8 text-gray-600">
                <div className="bg-white px-6 py-3 rounded-full shadow-sm hover:shadow-md transition-shadow">Check-in: <strong>11:30 AM</strong></div>
                <div className="bg-white px-6 py-3 rounded-full shadow-sm hover:shadow-md transition-shadow">Check-out: <strong>12:00 PM</strong></div>
                <div className="bg-white px-6 py-3 rounded-full shadow-sm hover:shadow-md transition-shadow">Pets: <strong>Not Allowed</strong></div>
            </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default Rooms;