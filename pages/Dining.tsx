import React from 'react';
import { MENU_ITEMS } from '../constants';
import { Utensils, Clock, CheckCircle } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const Dining: React.FC = () => {
  const vegItems = MENU_ITEMS.filter(item => item.category === 'Vegetarian');

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="relative bg-brand-dark py-24">
        <div className="absolute inset-0 overflow-hidden">
          <img src="https://picsum.photos/1920/600?random=4" alt="Restaurant Header" className="w-full h-full object-cover opacity-30 transform scale-105 transition-transform duration-[20s]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Culinary Delights</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Multicuisine dishes prepared with care. Separate vegetarian and non-vegetarian kitchens ensure purity and taste.
            </p>
          </ScrollReveal>
        </div>
      </div>

      {/* Highlights */}
      <section className="py-12 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8 text-center">
          <ScrollReveal delay="0.1s">
            <div className="p-6 hover:bg-white rounded-lg transition-colors duration-300 h-full">
                <Utensils className="w-12 h-12 text-brand-gold mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Multicuisine Menu</h3>
                <p className="text-gray-600">From local Rajasthani specialties to Chinese and Continental favorites.</p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay="0.2s">
            <div className="p-6 hover:bg-white rounded-lg transition-colors duration-300 h-full">
                <CheckCircle className="w-12 h-12 text-brand-gold mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Separate Kitchens</h3>
                <p className="text-gray-600">Dedicated preparation areas for Vegetarian and Non-Vegetarian dishes.</p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay="0.3s">
            <div className="p-6 hover:bg-white rounded-lg transition-colors duration-300 h-full">
                <Clock className="w-12 h-12 text-brand-gold mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Extended Hours</h3>
                <p className="text-gray-600">Open daily until 10:45 PM. Room service available.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-16 max-w-4xl mx-auto px-4">
        <ScrollReveal className="text-center mb-12">
          <span className="text-brand-gold font-bold tracking-wider uppercase text-sm">Chef's Specials</span>
          <h2 className="text-3xl font-serif font-bold text-gray-900 mt-2">Vegetarian Favorites</h2>
        </ScrollReveal>

        <div className="grid gap-6">
          {vegItems.map((item, index) => (
            <ScrollReveal 
                key={item.id} 
                delay={`${index * 0.1}s`}
                className="flex justify-between items-center border-b border-gray-200 pb-6 hover:bg-gray-50 p-4 rounded transition-colors"
            >
              <div className="flex-1">
                <div className="flex items-center mb-1">
                  <h3 className="text-lg font-bold text-gray-800">{item.name}</h3>
                  {item.isSignature && (
                    <span className="ml-3 px-2 py-0.5 bg-brand-gold text-white text-xs rounded-full animate-pulse">Bestseller</span>
                  )}
                </div>
                <p className="text-gray-500 text-sm">{item.description}</p>
              </div>
              <div className="text-xl font-bold text-brand-dark ml-4">{item.price}</div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay="0.4s">
            <div className="mt-12 p-6 bg-gray-50 rounded-lg text-center border border-gray-200">
            <p className="text-gray-700 italic">
                "The Veg Biryani is absolutely delicious, and the service is incredibly fast!"
                <br />
                <span className="text-sm font-bold mt-2 block">- JustDial Reviewer</span>
            </p>
            </div>
        </ScrollReveal>
      </section>
    </div>
  );
};

export default Dining;