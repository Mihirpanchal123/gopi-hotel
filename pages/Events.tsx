import React from 'react';
import { EVENTS } from '../constants';
import { Users, Music, Monitor, Calendar } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const Events: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="relative h-96">
        <img 
          src="https://picsum.photos/1920/800?random=5" 
          alt="Banquet Hall" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 text-white">
            <ScrollReveal>
                <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">Events & Banquets</h1>
                <p className="text-xl max-w-2xl">
                    From corporate conferences to intimate wedding celebrations, we provide the perfect venue for your special moments.
                </p>
            </ScrollReveal>
        </div>
      </div>

      {/* Intro */}
      <section className="py-16 px-4 max-w-7xl mx-auto text-center">
        <ScrollReveal>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Gopi Hotel?</h2>
        </ScrollReveal>
        <div className="grid md:grid-cols-4 gap-8">
            <ScrollReveal delay="0.1s">
                <div className="p-4 border border-gray-100 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 h-full">
                    <Users className="w-10 h-10 text-brand-gold mx-auto mb-3" />
                    <h3 className="font-semibold">Flexible Capacity</h3>
                    <p className="text-sm text-gray-500">Spaces for 10 to 150 guests</p>
                </div>
            </ScrollReveal>
            <ScrollReveal delay="0.2s">
                <div className="p-4 border border-gray-100 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 h-full">
                    <Music className="w-10 h-10 text-brand-gold mx-auto mb-3" />
                    <h3 className="font-semibold">Event Support</h3>
                    <p className="text-sm text-gray-500">Decor and audio assistance</p>
                </div>
            </ScrollReveal>
            <ScrollReveal delay="0.3s">
                <div className="p-4 border border-gray-100 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 h-full">
                    <Monitor className="w-10 h-10 text-brand-gold mx-auto mb-3" />
                    <h3 className="font-semibold">Modern Tech</h3>
                    <p className="text-sm text-gray-500">Projectors and high-speed Wi-Fi</p>
                </div>
            </ScrollReveal>
            <ScrollReveal delay="0.4s">
                <div className="p-4 border border-gray-100 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 h-full">
                    <Utensils className="w-10 h-10 text-brand-gold mx-auto mb-3" />
                    <h3 className="font-semibold">In-house Catering</h3>
                    <p className="text-sm text-gray-500">Customizable vegetarian menus</p>
                </div>
            </ScrollReveal>
        </div>
      </section>

      {/* Event Types */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto space-y-24">
          {EVENTS.map((event, index) => (
            <ScrollReveal 
                key={index} 
                delay="0.2s"
                className={`flex flex-col md:flex-row gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className="flex-1 w-full">
                <img src={event.imageUrl} alt={event.title} className="rounded-lg shadow-xl w-full h-80 object-cover transform hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="flex-1 space-y-6 w-full">
                <h3 className="text-3xl font-serif font-bold text-gray-900">{event.title}</h3>
                <p className="text-gray-600 text-lg">{event.description}</p>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <div className="flex items-center text-brand-gold font-bold mb-4">
                        <Users size={20} className="mr-2" /> {event.capacity}
                    </div>
                    <ul className="space-y-2">
                        {event.features.map((feat, i) => (
                            <li key={i} className="flex items-center text-gray-700 text-sm">
                                <span className="w-2 h-2 bg-brand-gold rounded-full mr-3"></span>
                                {feat}
                            </li>
                        ))}
                    </ul>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Inquiry Form Area */}
      <section className="py-16 bg-brand-dark text-white text-center">
        <ScrollReveal>
            <h2 className="text-3xl font-bold mb-4">Start Planning Your Event</h2>
            <p className="mb-8 text-gray-400">Contact our events coordinator for availability and custom quotes.</p>
            <div className="inline-flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a href="tel:07790919160" className="flex items-center bg-brand-gold text-brand-dark px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-500 transition-colors hover:scale-105 duration-200">
                    <Calendar className="mr-2" /> Book an Appointment
                </a>
            </div>
        </ScrollReveal>
      </section>
    </div>
  );
};

// Simple Utensils icon mock
const Utensils: React.FC<{className?: string}> = ({className}) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/></svg>
);

export default Events;