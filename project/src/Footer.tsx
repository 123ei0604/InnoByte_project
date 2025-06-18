
import React from 'react';
import { MapPin, Phone, Mail, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gradient-to-b dark:from-gray-800 dark:to-gray-900 text-gray-900 dark:text-white border-t border-gray-200 dark:border-gray-700 transition-colors duration-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="lg:col-span-2 animate-fade-in">
            <h3 className="text-2xl font-bold text-orange-600 dark:text-orange-400 mb-4">
              Kingsukh Guest House
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Discover a perfect blend of comfort, convenience, and natural beauty at our guest house. 
              Located in the scenic beauty of Baranti, we offer a perfect retreat for travelers 
              seeking comfort and tranquility.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-gradient-to-br from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-orange-500/25"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h4 className="text-lg font-semibold mb-4 text-orange-600 dark:text-orange-400">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3 p-3 bg-white dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700 transition-colors duration-300">
                <MapPin className="text-orange-600 dark:text-orange-400 mt-1 flex-shrink-0" size={16} />
                <span className="text-gray-600 dark:text-gray-300 text-sm">
                  Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156
                </span>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-white dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700 transition-colors duration-300">
                <Phone className="text-orange-600 dark:text-orange-400" size={16} />
                <span className="text-gray-600 dark:text-gray-300">+91 9007062180</span>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-white dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700 transition-colors duration-300">
                <Mail className="text-orange-600 dark:text-orange-400" size={16} />
                <span className="text-gray-600 dark:text-gray-300">kkghosh0099@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <h4 className="text-lg font-semibold mb-4 text-orange-600 dark:text-orange-400">Quick Links</h4>
            <div className="space-y-2">
              {['Home', 'About', 'Services', 'Rooms', 'Gallery', 'Contact'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-gray-600 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 transition-all duration-300 p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-800/50 transform hover:translate-x-2"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8 text-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <p className="text-gray-500 dark:text-gray-400">
            © 2024 Kingsukh Guest House. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
