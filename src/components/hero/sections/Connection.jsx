import React from "react";

const InternationalConnection = () => {
  const cards = [
    {
      title: "Strong presence in international markets",
      image: "/images/flags.jpg", // Replace with actual image URL
    },
    {
      title: "Partnerships with global AUM institutions",
      image: "/images/partnership.jpg", // Replace with actual image URL
    },
    {
      title: "Participation in global financial forums and networks",
      image: "/images/network.jpg", // Replace with actual image URL
    },
    {
      title: "Access to diverse investment opportunities worldwide",
      image: "/images/investment1.jpg", // Replace with actual image URL
    },
  ];

  return (
    <div className="bg-white py-12 px-6 md:px-16">
      {/* Heading */}
      <h2 className="text-center text-3xl md:text-4xl font-bold text-blue-700 mb-12">
        International Connection
      </h2>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-yellow-500 shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105"
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-white text-center">
                {card.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InternationalConnection;
