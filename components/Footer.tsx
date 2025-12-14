import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { HOTEL_DETAILS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Brand & About */}
          <div>
            <h3 className="font-serif text-2xl font-bold text-brand-gold mb-4">{HOTEL_DETAILS.name}</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Providing warm hospitality and wholesome comfort food since 2004. Your home away from home in Sagwara.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contact Us</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-brand-gold flex-shrink-0" />
                <span>{HOTEL_DETAILS.location}</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-brand-gold flex-shrink-0" />
                <a href={`tel:${HOTEL_DETAILS.contact.replace(/\s/g, '')}`} className="hover:text-brand-gold transition-colors">
                  {HOTEL_DETAILS.contact}
                </a>
              </li>
              <li className="flex items-center">
                <Clock className="mr-2 h-5 w-5 text-brand-gold flex-shrink-0" />
                <span>24-Hour Check-in Available</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/rooms" className="hover:text-brand-gold transition-colors">Accommodations</Link></li>
              <li><Link to="/dining" className="hover:text-brand-gold transition-colors">Restaurant Menu</Link></li>
              <li><Link to="/events" className="hover:text-brand-gold transition-colors">Banquet & Events</Link></li>
              <li><Link to="/contact" className="hover:text-brand-gold transition-colors">Get Directions</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} {HOTEL_DETAILS.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
