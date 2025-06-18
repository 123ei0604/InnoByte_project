
import React, { useState } from 'react';
import { X } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  
  const images = [
    {
      src: "/lovable-uploads/5cd7fcc2-a632-4334-a848-235e491c6161.png",
      alt: "Mountain landscape with winding road"
    },
    {
      src: "/lovable-uploads/86bcc761-6c1b-4395-88f3-7b8f1991a062.png", 
      alt: "Scenic mountain view"
    },
    {
      src: "/lovable-uploads/ead90335-1142-46ff-97bd-17dadac7885f.png",
      alt: "Sunset over mountains and water"
    },
    {
      src: "/lovable-uploads/ec5759a4-45b2-469f-a6b5-7b7abd4e0bc6.png",
      alt: "View from guest house balcony"
    },
    {
      src: "/lovable-uploads/6721d067-4468-4049-b3a6-97885ad6725c.png",
      alt: "Dam and water view"
    },
    {
      src: "/lovable-uploads/9b6ff35b-910c-4a60-bdc1-cc0daecbceca.png",
      alt: "Beautiful autumn landscape"
    },
    {
      src: "/lovable-uploads/c4cf9e15-95f4-4748-b2c2-42faf747efcf.png",
      alt: "Comfortable guest room with modern amenities"
    },
    {
      src: "/lovable-uploads/7af6d782-2d89-489c-8607-11092173db0d.png",
      alt: "Modern reception area with elegant design"
    },
    {
      src: "/lovable-uploads/9bd67358-b87e-4851-a8c1-770b4a0818a5.png",
      alt: "Cozy room with comfortable seating area"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-gray-50 dark:bg-gradient-to-b dark:from-gray-800 dark:to-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Our <span className="text-orange-600 dark:text-orange-400">Gallery</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explore the natural beauty and serenity surrounding our guest house
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div 
              key={index}
              className="relative overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700 hover:border-orange-400/50 shadow-lg hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group animate-scale-in"
              onClick={() => setSelectedImage(image)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent group-hover:from-gray-900/40 transition-all duration-300"></div>
              <div className="absolute inset-0 bg-orange-400/0 group-hover:bg-orange-400/10 transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 backdrop-blur-sm animate-fade-in" onClick={() => setSelectedImage(null)}>
            <div className="relative max-w-4xl max-h-full animate-scale-in">
              <button 
                className="absolute -top-10 right-0 text-white hover:text-orange-400 transition-colors duration-300 bg-gray-800/50 rounded-full p-2 transform hover:scale-110"
                onClick={() => setSelectedImage(null)}
              >
                <X size={24} />
              </button>
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-w-full max-h-full object-contain rounded-lg border border-gray-700"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
