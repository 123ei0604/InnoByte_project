
import React from 'react';
import { Bed, Users, Wifi, Tv } from 'lucide-react';

const Rooms = () => {
  const rooms = [
    {
      id: 1,
      name: "Cozy Haven Room",
      image: "/lovable-uploads/67534c8b-6b6d-471d-b85b-8aaf539822e7.png",
      price: "₹1000",
      features: ["1 Double Bed", "2 Guests", "Free WiFi", "TV"],
      icons: [Bed, Users, Wifi, Tv]
    },
    {
      id: 2,
      name: "Spacious Serenity Suite", 
      image: "/lovable-uploads/67534c8b-6b6d-471d-b85b-8aaf539822e7.png",
      price: "₹1500",
      features: ["2 Double Beds", "4 Guests", "Free WiFi", "TV"],
      icons: [Bed, Users, Wifi, Tv]
    }
  ];

  return (
    <section id="rooms" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="text-orange-400">Rooms</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Comfortable and well-appointed rooms designed for your relaxation
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {rooms.map((room, index) => (
            <div 
              key={room.id}
              className="bg-gray-800/60 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-orange-400/50 shadow-lg overflow-hidden hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
                <div className="absolute top-4 right-4 bg-gradient-to-r from-orange-600 to-orange-700 text-white px-4 py-2 rounded-full font-semibold shadow-lg">
                  {room.price}/night
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-orange-400 transition-colors duration-300">{room.name}</h3>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {room.features.map((feature, featureIndex) => {
                    const Icon = room.icons[featureIndex];
                    return (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <Icon className="text-orange-400" size={20} />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    );
                  })}
                </div>
                
                <button className="w-full bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/25">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rooms;
