
import React from 'react';
import { MapPin, Users, Award, Heart } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: MapPin,
      title: "Best Location",
      description: "Located in the heart of Baranti, surrounded by natural beauty"
    },
    {
      icon: Users,
      title: "Quality Service",
      description: "Friendly staff dedicated to making your stay memorable"
    },
    {
      icon: Award,
      title: "Affordable Luxury",
      description: "Premium amenities at reasonable prices"
    },
    {
      icon: Heart,
      title: "Home Away Home",
      description: "Comfortable and cozy atmosphere for all guests"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-orange-400">Kingsukh Guest House</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Discover a perfect blend of comfort, convenience, and natural beauty at our guest house
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white">
              Your Comfort is Our Priority
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Nestled in the scenic beauty of Baranti, Kingsukh Guest House offers a perfect retreat 
              for travelers seeking comfort and tranquility. Our guest house combines modern amenities 
              with warm hospitality to ensure your stay is both comfortable and memorable.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Whether you're here for business or leisure, our dedicated team is committed to 
              providing you with exceptional service and creating an atmosphere that feels like home.
            </p>
            <div className="flex items-center space-x-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400">50+</div>
                <div className="text-sm text-gray-400">Happy Guests</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400">5</div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400">24/7</div>
                <div className="text-sm text-gray-400">Service</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img
              src="/lovable-uploads/85ef8256-6e39-4c9c-a891-3bd618c20efd.png"
              alt="Kingsukh Guest House building"
              className="rounded-lg shadow-2xl w-full h-auto transform hover:scale-105 transition-transform duration-300 ring-1 ring-orange-400/20"
            />
            <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-gray-900/20 to-transparent"></div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center p-6 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 hover:border-orange-400/50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="text-white" size={32} />
              </div>
              <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-orange-400 transition-colors duration-300">{feature.title}</h4>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
