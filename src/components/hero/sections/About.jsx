import React from "react";

const AboutUs = () => {
  return (
    <section className="bg-gray-50 py-16 px-6 sm:px-8 md:px-16">
      <div className="max-w-screen-xl mx-auto">
        {/* First Div - Single Column */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">About Us</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Asset Advisor, a highly reputed leader in the asset management
            industry, empowers clients to achieve their financial goals through
            strategic funding solutions and expert investment guidance. With a
            strong commitment to sustainable financial growth, Asset Advisor
            specializes in sourcing and managing funds for individuals and
            businesses with solid plans and substantial growth potential. Our
            rigorous standards and deep market insights have established us as a
            trusted name, renowned for delivering consistent returns while
            upholding the highest levels of security and transparency.
          </p>
        </div>

        {/* Second Div - Two Columns */}
        <div className="grid grid-cols-1 gap-12">
          {/* Column 1 */}
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              The Role of Fintech and Its Benefits
            </h3>
            <p className="text-lg text-gray-600">
              In today’s rapidly evolving financial landscape, fintech has
              emerged as a powerful tool for modern asset management. Through
              fintech innovations, Asset Advisor provides enhanced access to
              investment opportunities, ensures efficient transactions, and offers
              clients a seamless, technology-driven experience. The benefits of
              fintech are far-reaching: it enhances security, improves
              transparency, and facilitates faster, more efficient investment
              processes, empowering investors to make informed financial
              decisions with ease and confidence.
            </p>
          </div>
          {/* Column 2 */}
          {/* <div className="text-center">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Our Values
            </h3>
            <p className="text-lg text-gray-600">
              We believe in integrity, collaboration, and constant learning to
              deliver the best results for our clients.
            </p>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
