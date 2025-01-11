import React from "react";

const BusinessNature = () => {
  return (
    <div className="bg-white py-12 px-6 md:px-16">
      {/* Heading */}
      <h2 className="text-center text-3xl md:text-4xl font-bold text-blue-700 mb-8">
        Business Nature
      </h2>

      {/* Core Competencies Section */}
      <div className="mb-8">
        <div className="bg-yellow-500 text-center py-2 rounded-t-lg">
          <h3 className="text-xl md:text-2xl font-semibold text-white">
            Core Competencies
          </h3>
        </div>
        <ul className="bg-gray-100 p-6 rounded-b-lg space-y-2">
          <li className="text-lg text-gray-700">
            • Sourcing and managing funds for individuals and businesses
          </li>
          <li className="text-lg text-gray-700">
            • Specialization in clients with solid plans and substantial growth
            potential
          </li>
          <li className="text-lg text-gray-700">
            • Rigorous standards and deep market insights
          </li>
        </ul>
      </div>

      {/* Industry Recognition Section */}
      <div>
        <div className="bg-yellow-500 text-center py-2 rounded-t-lg">
          <h3 className="text-xl md:text-2xl font-semibold text-white">
            Industry Recognition
          </h3>
        </div>
        <ul className="bg-gray-100 p-6 rounded-b-lg space-y-2">
          <li className="text-lg text-gray-700">
            • Renowned for delivering consistent returns
          </li>
          <li className="text-lg text-gray-700">
            • High levels of security and transparency
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BusinessNature;
