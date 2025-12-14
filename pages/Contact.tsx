import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { HOTEL_DETAILS } from '../constants';
import ScrollReveal from '../components/ScrollReveal';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
            <h1 className="text-4xl font-serif font-bold text-center text-gray-900 mb-12">Contact Us</h1>
        </ScrollReveal>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Info Card */}
          <ScrollReveal delay="0.2s">
            <div className="bg-white rounded-lg shadow-lg p-8 h-full">
                <h2 className="text-2xl font-bold mb-6 text-brand-dark">Get in Touch</h2>
                
                <div className="space-y-6">
                <div className="flex items-start group">
                    <MapPin className="text-brand-gold w-6 h-6 mt-1 mr-4 group-hover:scale-110 transition-transform" />
                    <div>
                    <h3 className="font-semibold text-gray-900">Address</h3>
                    <p className="text-gray-600">{HOTEL_DETAILS.location}</p>
                    </div>
                </div>

                <div className="flex items-start group">
                    <Phone className="text-brand-gold w-6 h-6 mt-1 mr-4 group-hover:scale-110 transition-transform" />
                    <div>
                    <h3 className="font-semibold text-gray-900">Phone</h3>
                    <a href={`tel:${HOTEL_DETAILS.contact.replace(/\s/g, '')}`} className="text-gray-600 hover:text-brand-gold transition-colors">
                        {HOTEL_DETAILS.contact}
                    </a>
                    </div>
                </div>

                <div className="flex items-start group">
                    <Clock className="text-brand-gold w-6 h-6 mt-1 mr-4 group-hover:scale-110 transition-transform" />
                    <div>
                    <h3 className="font-semibold text-gray-900">Hours</h3>
                    <p className="text-gray-600">Restaurant: Open until 10:45 PM</p>
                    <p className="text-gray-600">Hotel Front Desk: 24/7</p>
                    </div>
                </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-100">
                    <h3 className="font-semibold text-gray-900 mb-2">Arrival Info</h3>
                    <p className="text-sm text-gray-600">
                        We are conveniently located near the bus stand on Dungarpur Road. 
                        Free parking is available on-site for all guests.
                    </p>
                </div>
            </div>
          </ScrollReveal>

          {/* Map Placeholder */}
          <ScrollReveal delay="0.4s" className="h-full">
            <div className="bg-gray-200 rounded-lg shadow-lg overflow-hidden h-[400px] md:h-auto relative min-h-[400px]">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.485609467613!2d74.0225!3d23.6783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3968c3c7a7a7a7a7%3A0x1234567890abcdef!2sGopi%20Hotel%20and%20Restaurant!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={true} 
                    loading="lazy"
                    title="Google Maps Location"
                    className="absolute inset-0 w-full h-full"
                ></iframe>
                {/* Fallback visual if map fails to load (simulated) */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
                <span className="text-gray-500">Map Loading...</span>
                </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
};

export default Contact;