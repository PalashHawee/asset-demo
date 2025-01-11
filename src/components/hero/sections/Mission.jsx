import React from "react";

const Mission = () => {
  return (
    <div className="bg-white flex flex-col md:flex-row items-center p-6 md:p-12 space-y-6 md:space-y-0 md:space-x-6">
      {/* Left Content */}
      <div className="flex-1 text-center md:text-left">
        <h3 className="text-lg font-medium text-gray-600 mb-2">Our Mission</h3>
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800 leading-tight">
          Delivering value through <br />
          strategic wealth <br />
          management
        </h1>
      </div>

      {/* Right Image */}
      <div className="flex-1">
        <img
          src="/images/building.jpg"
          alt="Mission Background"
          className="rounded-2xl object-cover w-full h-auto"
        />
      </div>
    </div>
  );
};

export default Mission;
