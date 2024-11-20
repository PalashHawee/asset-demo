import React from "react";

const AboutUs = () => {
  return (
    <section className="bg-gray-50 py-16 px-6 sm:px-8 md:px-16">
      <div className="max-w-screen-xl mx-auto">
        {/* First Div - Single Column */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">About Us</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We are a team of passionate individuals dedicated to creating
            beautiful and functional web experiences. Our mission is to provide
            innovative solutions that help businesses grow and thrive online.
          </p>
        </div>

        {/* Second Div - Two Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Column 1 */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Our Vision
            </h3>
            <p className="text-lg text-gray-600">
              To become a global leader in web development by providing
              cutting-edge solutions that are both innovative and sustainable.
            </p>
          </div>
          {/* Column 2 */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Our Values
            </h3>
            <p className="text-lg text-gray-600">
              We believe in integrity, collaboration, and constant learning to
              deliver the best results for our clients.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
