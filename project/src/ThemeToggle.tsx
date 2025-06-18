
import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative p-2 rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-orange-500/25"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <div className="relative w-6 h-6">
        <Sun 
          className={`absolute inset-0 transition-all duration-300 ${
            theme === 'dark' ? 'opacity-0 rotate-90 scale-75' : 'opacity-100 rotate-0 scale-100'
          }`} 
          size={24} 
        />
        <Moon 
          className={`absolute inset-0 transition-all duration-300 ${
            theme === 'light' ? 'opacity-0 rotate-90 scale-75' : 'opacity-100 rotate-0 scale-100'
          }`} 
          size={24} 
        />
      </div>
    </button>
  );
};

export default ThemeToggle;
