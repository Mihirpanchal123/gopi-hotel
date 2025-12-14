import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Wifi, Coffee, Car, Shield, Star, ChevronLeft, ChevronRight, ZoomIn, X } from 'lucide-react';
import { REVIEWS } from '../constants';
import ScrollReveal from '../components/ScrollReveal';

const HERO_SLIDES = [
  {
    image: "https://picsum.photos/1920/1080?random=1",
    title: "Warm Hospitality in Sagwara",
    subtitle: "Experience wholesome comfort food and simple, elegant stays at Gopi Hotel."
  },
  {
    image: "https://picsum.photos/1920/1080?random=2",
    title: "Exquisite Multicuisine Dining",
    subtitle: "Savor our vegetarian specialties and diverse menu in a family-friendly atmosphere."
  },
  {
    image: "https://picsum.photos/1920/1080?random=3",
    title: "Perfect for Every Occasion",
    subtitle: "Host your events in our spacious banquet hall and conference rooms."
  }
];

const GALLERY_IMAGES = [
  { url: "https://picsum.photos/800/600?random=10", caption: "Premium Rooms" },
  { url: "https://picsum.photos/800/600?random=11", caption: "Dining Area" },
  { url: "https://picsum.photos/800/600?random=12", caption: "Banquet Hall" },
  { url: "https://picsum.photos/800/600?random=13", caption: "Hotel Exterior" },
  { url: "https://picsum.photos/800/600?random=14", caption: "Delicious Cuisine" },
  { url: "https://picsum.photos/800/600?random=15", caption: "Conference Room" },
];

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);

  return (
    <div className="flex flex-col">
      {/* Hero Carousel Section */}
      <section className="relative h-[600px] w-full overflow-hidden group">
        {HERO_SLIDES.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img 
              src={slide.image} 
              alt={slide.title} 
              className="w-full h-full object-cover transform scale-105 transition-transform duration-[10s]"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          </div>
        ))}
        
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <ScrollReveal key={currentSlide}>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 drop-shadow-md">
              {HERO_SLIDES[currentSlide].title}
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mb-8 mx-auto">
              {HERO_SLIDES[currentSlide].subtitle}
            </p>
            <div className="flex justify-center space-x-4">
              <Link to="/rooms" className="px-8 py-3 bg-brand-gold text-brand-dark font-bold rounded hover:bg-yellow-500 transition-colors transform hover:scale-105 duration-200">
                View Rooms
              </Link>
              <Link to="/dining" className="px-8 py-3 bg-transparent border-2 border-white text-white font-bold rounded hover:bg-white hover:text-brand-dark transition-colors transform hover:scale-105 duration-200">
                Our Menu
              </Link>
            </div>
          </ScrollReveal>
        </div>

        {/* Carousel Controls */}
        <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-40 p-2 rounded-full text-white backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 z-20 hover:scale-110"
        >
            <ChevronLeft size={32} />
        </button>
        <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-40 p-2 rounded-full text-white backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 z-20 hover:scale-110"
        >
            <ChevronRight size={32} />
        </button>

        {/* Dots */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
            {HERO_SLIDES.map((_, idx) => (
                <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-3 rounded-full transition-all duration-300 ${
                        idx === currentSlide ? 'bg-brand-gold w-8' : 'bg-white bg-opacity-50 w-3 hover:bg-opacity-75'
                    }`}
                />
            ))}
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">A Legacy of Comfort</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Located on Dungarpur Road in Krishna Nagar, Gopi Hotel has been serving travelers and locals since 2004. We pride ourselves on being a midscale full-service hotel that feels like home.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              With 15 well-appointed rooms and a reputation for excellent multicuisine dining, we are the preferred choice for families and business visitors in Sagwara.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center text-gray-700 hover:text-brand-gold transition-colors"><Wifi className="mr-2 text-brand-gold" size={20}/> Free Wi-Fi</div>
              <div className="flex items-center text-gray-700 hover:text-brand-gold transition-colors"><Coffee className="mr-2 text-brand-gold" size={20}/> Free Breakfast</div>
              <div className="flex items-center text-gray-700 hover:text-brand-gold transition-colors"><Car className="mr-2 text-brand-gold" size={20}/> Free Parking</div>
              <div className="flex items-center text-gray-700 hover:text-brand-gold transition-colors"><Shield className="mr-2 text-brand-gold" size={20}/> 24h Security</div>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-2 gap-4">
            <ScrollReveal delay="0.2s">
              <img src="https://picsum.photos/600/800?random=4" alt="Room" className="rounded-lg shadow-lg w-full h-64 object-cover mt-8 hover:scale-105 transition-transform duration-500" />
            </ScrollReveal>
            <ScrollReveal delay="0.4s">
              <img src="https://picsum.photos/600/800?random=5" alt="Food" className="rounded-lg shadow-lg w-full h-64 object-cover hover:scale-105 transition-transform duration-500" />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
            <ScrollReveal className="text-center mb-12">
                <span className="text-brand-gold font-bold tracking-wider uppercase text-sm">Visual Tour</span>
                <h2 className="text-3xl font-serif font-bold text-gray-900 mt-2">Gallery</h2>
                <p className="text-gray-500 mt-4 max-w-2xl mx-auto">Take a closer look at our accommodations, dining areas, and event spaces.</p>
            </ScrollReveal>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {GALLERY_IMAGES.map((item, idx) => (
                    <ScrollReveal 
                        key={idx} 
                        delay={`${idx * 0.1}s`}
                        className="relative group cursor-pointer overflow-hidden rounded-lg shadow-md aspect-w-16 aspect-h-10 h-64"
                    >
                        <div onClick={() => setLightboxImage(item.url)} className="w-full h-full">
                            <img 
                                src={item.url} 
                                alt={item.caption} 
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                                 <ZoomIn className="text-white w-8 h-8" />
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <p className="text-white font-medium">{item.caption}</p>
                            </div>
                        </div>
                    </ScrollReveal>
                ))}
            </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="bg-brand-dark py-12 px-4">
        <ScrollReveal>
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-white">
            <div className="mb-6 md:mb-0">
                <h3 className="text-2xl font-bold mb-2">Planning an Event?</h3>
                <p className="text-gray-400">Our banquet hall and conference rooms are perfect for your next gathering.</p>
            </div>
            <Link to="/events" className="px-6 py-3 bg-brand-gold text-brand-dark font-bold rounded hover:bg-yellow-500 transition-colors transform hover:scale-105 duration-200">
                Explore Venues
            </Link>
            </div>
        </ScrollReveal>
      </section>

      {/* Featured Review */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-12">Guest Experiences</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8">
            {REVIEWS.map((review, idx) => (
              <ScrollReveal key={review.id} delay={`${idx * 0.2}s`} className="h-full">
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 h-full flex flex-col justify-between">
                    <div>
                        <div className="flex justify-center mb-4">
                        {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} size={16} className="text-brand-gold fill-current" />
                        ))}
                        </div>
                        <p className="text-gray-600 italic mb-4">"{review.text}"</p>
                    </div>
                    <div>
                        <div className="text-sm font-bold text-gray-900">- {review.author}</div>
                        <div className="text-xs text-gray-500 uppercase mt-1">{review.source}</div>
                    </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-95 p-4 transition-opacity duration-300 animate-fade-in"
            onClick={() => setLightboxImage(null)}
        >
            <button className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors transform hover:scale-110">
                <X size={36} />
            </button>
            <img 
                src={lightboxImage} 
                alt="Gallery Fullscreen" 
                className="max-w-full max-h-[90vh] rounded-lg shadow-2xl animate-zoom-in" 
                onClick={(e) => e.stopPropagation()} 
            />
        </div>
      )}
    </div>
  );
};

export default Home;