import React from "react";

const KeyServices = () => {
  const services = [
    {
      title: "Investment",
      description: "Strategic funding solution for growth",
      image: "/images/investment.jpg", // Replace with the actual image path
    },
    {
      title: "Advisory",
      description: "Expert financial advisory services provided",
      image: "/images/keyservice1.jpg", // Replace with the actual image path
    },
    {
      title: "Planning",
      description: "Financial planning for individuals & businesses",
      image: "/images/planning.jpg", // Replace with the actual image path
    },
  ];

  return (
    <div className="bg-white py-12 px-6 md:px-16">
      {/* Heading */}
      <h2 className="text-center text-3xl md:text-4xl font-bold text-blue-700 mb-8">
        Key Services
      </h2>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-yellow-500 rounded-2xl overflow-hidden shadow-lg flex flex-col items-center text-center"
          >
            {/* Service Image */}
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-48 object-cover"
            />
            {/* Service Content */}
            <div className="p-4">
              <h3 className="text-lg font-semibold text-white mb-2">
                {service.title}
              </h3>
              <p className="text-base text-blue-900">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KeyServices;
