
import React from 'react';
import { Wifi, Car, Coffee, Utensils, Tv, Users } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Wifi,
      title: "High Speed Internet",
      description: "Complimentary WiFi throughout the property"
    },
    {
      icon: Car,
      title: "Parking Facility",
      description: "Free parking space for all guests"
    },
    {
      icon: Coffee,
      title: "Morning Tea/Coffee",
      description: "Fresh tea and coffee served every morning"
    },
    {
      icon: Utensils,
      title: "Meal Service",
      description: "Delicious local and continental cuisine"
    },
    {
      icon: Tv,
      title: "Entertainment",
      description: "TV with cable connection in all rooms"
    },
    {
      icon: Users,
      title: "Tourist Guide",
      description: "Local tour assistance and guidance"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white dark:bg-gradient-to-b dark:from-gray-800 dark:to-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Our <span className="text-orange-600 dark:text-orange-400">Services</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We provide a wide range of services to make your stay comfortable and enjoyable
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group p-8 bg-gray-50 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-gray-700 hover:border-orange-400/50 hover:bg-gray-100 dark:hover:bg-gray-800/80 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/10 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500/20 to-orange-600/20 group-hover:from-orange-500 group-hover:to-orange-600 rounded-full mb-6 transition-all duration-300 group-hover:scale-110">
                <service.icon className="text-orange-600 dark:text-orange-400 group-hover:text-white transition-colors duration-300" size={32} />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-300">
                {service.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <button className="bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-orange-500/25 hover:-translate-y-1">
            View All Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
