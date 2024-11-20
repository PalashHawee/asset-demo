import React, { useEffect, useState } from "react";

const MediaCenter = () => {
  
  const [mediaItems, setMediaItems] = useState([]);

  useEffect(() => {
    // Mocking API fetch for sectors

    // Mocking API fetch for media items
    const fetchMediaItems = async () => {
      const mockMediaData = [
        {
          id: "1",
          title: "Press Release ",
          description:
            "Breaking news and updates from our latest projects and collaborations.",
          image: "/images/med1.jpg",
        },
        {
          id: "2",
          title: "Event Highlights",
          description:
            "Catch the highlights from our recent industry events and seminars.",
          image: "/images/med2.jpg",
        },
        {
          id: "3",
          title: "Awards & Recognition",
          description:
            "Explore the awards and recognitions received for excellence in various sectors.",
          image: "/images/med3.jpg",
        },
      ];
      setMediaItems(mockMediaData);
    };

    fetchMediaItems();
  }, []);

  return (
    <section className="py-16 px-6 sm:px-8 md:px-16 bg-gray-100">
      <div className="max-w-screen-xl mx-auto">
        {/* Media Center Section */}
        <div className="mt-16">
          {/* Title and Description */}
          <div className="text-center mb-12 animate__animated animate__fadeInUp">
            <h2 className="text-3xl font-bold  mb-4">
              Media Center
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Stay updated with the latest news, events, and awards from our
              company. Explore our media center for more information.
            </p>
          </div>

          {/* Dynamic Content for Media Center */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
            {mediaItems.map((item) => (
              <div
                key={item.id}
                className="text-center p-6 bg-white rounded-lg shadow-md transform transition duration-300 hover:-translate-y-2 hover:shadow-lg hover:bg-blue-50"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-40 object-cover rounded-t-lg transition-transform duration-300 ease-in-out hover:scale-105"
                />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaCenter;
