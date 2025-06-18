
import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/lovable-uploads/ead90335-1142-46ff-97bd-17dadac7885f.png"
          alt="Beautiful mountain landscape at sunset"
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 via-gray-900/60 to-gray-900/80 dark:from-gray-900/80 dark:via-gray-900/70 dark:to-gray-900/90"></div>
      </div>
      
      <div className="relative z-10 text-center text-white px-4 animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight bg-gradient-to-r from-white via-gray-100 to-orange-200 bg-clip-text text-transparent animate-scale-in">
          Simple - Unique - Friendly
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-200 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          Make Yourself At Home In Our <span className="text-orange-400 font-semibold">Guest House</span>
        </p>
        
        <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <button className="bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-orange-500/25 hover:-translate-y-1">
            Book Direct
          </button>
          <button className="border-2 border-orange-400 hover:bg-orange-400 hover:text-gray-900 text-orange-300 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 backdrop-blur-sm hover:-translate-y-1">
            Contact Us
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-orange-300 transition-colors duration-300 hover:text-orange-400" size={32} />
      </div>
    </section>
  );
};

export default Hero;
