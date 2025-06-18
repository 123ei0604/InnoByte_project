
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Rooms', href: '#rooms' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <div className="bg-gradient-to-r from-orange-600 to-orange-700 text-white py-2 px-4 text-sm animate-fade-in">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 animate-scale-in">
              <Phone size={16} />
              <span>+91 9007062180</span>
            </div>
            <div className="flex items-center space-x-2 animate-scale-in">
              <Mail size={16} />
              <span>kkghosh0099@gmail.com</span>
            </div>
          </div>
          <div className="hidden md:block animate-fade-in">
            <span>Welcome to Kingsukh Guest House</span>
          </div>
        </div>
      </div>
      
      <header className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg py-2 border-b border-gray-200 dark:border-gray-700' : 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md py-4'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-orange-600 dark:text-orange-400 animate-scale-in">
              Kingsukh Guest House
            </div>
            
            <nav className="hidden md:flex space-x-8">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 transition-all duration-300 font-medium relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-orange-600 dark:after:bg-orange-400 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left transform hover:scale-110"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item.name}
                </a>
              ))}
            </nav>

            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <button
                className="md:hidden text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 transition-all duration-300 transform hover:scale-110"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <div className={`md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-t border-gray-200 dark:border-gray-700 shadow-lg transition-all duration-300 ${
          isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}>
          <nav className="px-4 py-4 space-y-4">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 transition-all duration-300 p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800/50 transform hover:translate-x-2"
                onClick={() => setIsMenuOpen(false)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
