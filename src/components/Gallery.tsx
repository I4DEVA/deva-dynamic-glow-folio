
import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X, Expand } from 'lucide-react';

interface GalleryImage {
  src: string;
  alt: string;
  category: string;
}

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const images: GalleryImage[] = [
    {
      src: "/lovable-uploads/f9291e1b-a331-40ad-aaa3-99926ecc76a8.png",
      alt: "Deva Narayan - Professional Portrait",
      category: "portrait"
    },
    {
      src: "/lovable-uploads/796bbc75-a786-4ecb-8944-065bb7bcd73e.png",
      alt: "Artistic Black & White Portrait",
      category: "artistic"
    },
    {
      src: "/lovable-uploads/4731e76e-fe46-4bed-b919-8d2c8a9f781c.png",
      alt: "Car Photography",
      category: "automotive"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const openLightbox = (image: GalleryImage, index: number) => {
    setSelectedImage(image);
    setCurrentImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(nextIndex);
    setSelectedImage(images[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = (currentImageIndex - 1 + images.length) % images.length;
    setCurrentImageIndex(prevIndex);
    setSelectedImage(images[prevIndex]);
  };

  return (
    <section id="gallery" ref={sectionRef} className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            Gallery
          </h2>

          {/* Gallery Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {images.map((image, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-2xl cursor-pointer transform transition-all duration-500 hover:scale-105 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
                onClick={() => openLightbox(image, index)}
              >
                <div className="aspect-square relative">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white font-semibold text-lg mb-1">{image.category}</p>
                      <p className="text-gray-200 text-sm">{image.alt}</p>
                    </div>
                    
                    {/* Expand Icon */}
                    <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-lg rounded-full flex items-center justify-center">
                      <Expand className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  {/* Floating badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-blue-600/80 backdrop-blur-lg rounded-full text-white text-xs font-medium capitalize">
                    {image.category}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Featured Image Section */}
          <div className="mt-16 relative">
            <div className="bg-white/10 dark:bg-gray-800/30 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-center mb-6 text-gray-800 dark:text-gray-200">
                Featured Highlights
              </h3>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <div className="p-4 bg-blue-600/10 rounded-xl">
                    <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">
                      Creative Vision
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Capturing moments and expressing creativity through various mediums.
                    </p>
                  </div>
                  <div className="p-4 bg-purple-600/10 rounded-xl">
                    <h4 className="font-semibold text-purple-600 dark:text-purple-400 mb-2">
                      Professional Growth
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Documenting the journey of personal and professional development.
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <div className="aspect-video rounded-xl overflow-hidden">
                    <img
                      src={images[0].src}
                      alt="Featured"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-lg z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-lg rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Navigation buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-lg rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-lg rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image info */}
            <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-lg rounded-lg p-4 text-white">
              <h3 className="font-semibold text-lg">{selectedImage.alt}</h3>
              <p className="text-gray-300 capitalize">{selectedImage.category}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
