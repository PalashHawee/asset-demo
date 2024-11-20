import React, { useEffect, useState } from "react";

const BusinessSectors = () => {
  const [sectors, setSectors] = useState([]);

  useEffect(() => {
    // Mocking an API fetch; replace with actual API call.
    const fetchSectors = async () => {
      const mockData = [
        {
          _id: "1",
          title: "Technology",
          description:
            "Leading the way in technology solutions, we offer state-of-the-art innovations that drive efficiency.",
          logo: "https://alivespectra.com/wp-content/uploads/2022/12/team-alive.svg",
        },
        {
          _id: "2",
          title: "Healthcare",
          description:
            "Providing cutting-edge solutions that improve patient care and optimize healthcare services.",
          logo: "https://alivespectra.com/wp-content/uploads/2022/12/biz-solve.png",
        },
        {
          _id: "3",
          title: "Finance",
          description:
            "We offer financial services and technology that help businesses grow and manage their finances with confidence.",
          logo: "https://alivespectra.com/wp-content/uploads/2022/12/alive-holiday.svg",
        },
        {
          _id: "4",
          title: "Education",
          description:
            "Empowering the future with educational solutions that enhance learning and development.",
          logo: "https://alivespectra.com/wp-content/uploads/2022/12/alive-bazar.svg",
        },
      ];
      setSectors(mockData);
    };
    fetchSectors();
  }, []);

  return (
    <section className="py-16 px-6 sm:px-8 md:px-16 ">
      <div className="max-w-screen-xl mx-auto">
        {/* Title and Description */}
        <div className="text-center mb-12 animate__animated animate__fadeInUp">
          <h2 className="text-3xl font-bold  mb-4">
            Our Business Sectors
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We specialize in a variety of business sectors, offering innovative
            solutions tailored to each industry&apos;s unique needs. Explore how we
            make an impact across these diverse areas.
          </p>
        </div>

        {/* Dynamic Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
          {sectors.map((sector) => (
            <div
              key={sector._id}
              className="text-center p-6 bg-white rounded-lg shadow-md transform transition duration-300 hover:-translate-y-2 hover:shadow-lg hover:bg-blue-50"
            >
              <img
                src={sector.logo}
                alt={`${sector.title} Logo`}
                className="w-24 h-24 mx-auto mb-4 rounded-full bg-white shadow-md transform"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {sector.title}
              </h3>
              <p className="text-gray-600 mb-4">{sector.description}</p>
              <button
                className="px-4 py-2 bg-blue-800 text-white font-medium rounded-md hover:bg-blue-700 transition duration-200"
                onClick={() => alert(`View details about ${sector.title}`)}
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessSectors;
