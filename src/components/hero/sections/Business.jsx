import React, { useEffect, useState } from "react";
import KeyServices from "./KeyServices";

const BusinessSectors = () => {
  const [sectors, setSectors] = useState([]);

  useEffect(() => {
    // Updated data with new information and icons.
    const updatedData = [
      {
        _id: "1",
        title: "Digital Payment Solutions",
        description:
          "Enabling seamless and secure payment options for individuals and businesses.",
        icon: "fas fa-credit-card", // Font Awesome Icon
      },
      {
        _id: "2",
        title: "Investment Platforms",
        description:
          "Empowering investors with user-friendly platforms for smart financial decisions.",
        icon: "fas fa-chart-line", // Font Awesome Icon
      },
      {
        _id: "3",
        title: "Financial Data Analytics",
        description:
          "Providing actionable insights to optimize financial strategies and decision-making.",
        icon: "fas fa-database", // Font Awesome Icon
      },
      {
        _id: "4",
        title: "Blockchain-based Financial Systems",
        description:
          "Revolutionizing finance with transparent and decentralized blockchain technology.",
        icon: "fas fa-link", // Font Awesome Icon
      },
    ];
    setSectors(updatedData);
  }, []);

  return (
    <section className="py-16 px-6 sm:px-8 md:px-16">
      <div className="max-w-screen-xl mx-auto">
        {/* Title and Description */}
        <div className="text-center mb-12 animate__animated animate__fadeInUp">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our cutting-edge solutions tailored for the financial
            industry. We innovate across multiple sectors to deliver excellence.
          </p>
        </div>

        {/* Dynamic Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
          {sectors.map((sector) => (
            <div
              key={sector._id}
              className="text-center p-6 bg-white rounded-lg shadow-md transform transition duration-300 hover:-translate-y-2 hover:shadow-lg hover:bg-blue-50 animate__animated animate__fadeInUp"
            >
              {/* Icon */}
              <div className="text-blue-800 text-6xl mb-4">
                <i className={sector.icon}></i>
              </div>
              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {sector.title}
              </h3>
              {/* Description */}
              <p className="text-gray-600 mb-4">{sector.description}</p>
              {/* Button */}
              <button
                className="px-4 py-2 bg-blue-800 text-white font-medium rounded-md hover:bg-blue-700 transition duration-200"
                onClick={() => alert(`View details about ${sector.title}`)}
              >
                View Details
              </button>
            </div>
          ))}
        </div>
        <KeyServices/>
      </div>
    </section>
  );
};

export default BusinessSectors;
