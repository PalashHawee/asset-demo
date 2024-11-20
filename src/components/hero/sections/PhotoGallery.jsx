import React, { useEffect, useState } from "react";

const PhotoGallery = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    // Mocking API fetch for gallery photos
    const fetchPhotos = async () => {
      const mockPhotosData = [
        {
          id: "1",
          image: "/images/med1.jpg",
          title: "Photo 1",
        },
        {
          id: "2",
          image: "/images/med2.jpg",
          title: "Photo 2",
        },
        {
          id: "3",
          image: "/images/med3.jpg",
          title: "Photo 3",
        },
        {
          id: "4",
          image: "/images/photo1.jpg",
          title: "Photo 4",
        },
        {
          id: "5",
          image: "/images/photo2.jpg",
          title: "Photo 5",
        },
        {
          id: "6",
          image: "/images/photo3.jpg",
          title: "Photo 6",
        },
      ];
      setPhotos(mockPhotosData);
    };

    fetchPhotos();
  }, []);

  return (
    <section className="py-16 px-6 sm:px-8 md:px-16 bg-gold-600">
      <div className="max-w-screen-xl mx-auto">
        {/* Title and Description */}
        <div className="text-center mb-12 animate__animated animate__fadeInUp">
          <h2 className="text-3xl font-bold text-blue-100 mb-4">
            Photo Gallery
          </h2>
          <p className="text-lg text-white max-w-2xl mx-auto">
            Explore our stunning photo collection showcasing moments from
            various events, projects, and more.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className="relative group overflow-hidden rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105"
            >
              <img
                src={photo.image}
                alt={photo.title}
                className="w-full h-64 object-cover rounded-lg transition-transform duration-300 ease-in-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-lg font-semibold">{photo.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;
