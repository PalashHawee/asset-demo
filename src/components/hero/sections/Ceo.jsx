import React from "react";
import "animate.css";


const CeosMessage = () => {
  return (
    <section className="py-16 px-6 sm:px-8 md:px-16 bg-gray-100">
      <div className="max-w-screen-xl mx-auto">
        {/* CEO's Message Section */}
        <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
          {/* CEO Picture */}
          <div className="flex-shrink-0">
            <img
              src="https://alivespectra.com/wp-content/uploads/2022/12/avatar.png"
              alt="CEO"
              className="w-40 h-40 rounded-full object-cover border-4 border-gold-600 shadow-lg animate__animated animate__fadeIn animate__delay-1s"
            />
          </div>

          {/* CEO Message */}
          <div className="md:w-2/3 text-center md:text-left space-y-4">
            {/* Animated Heading */}
            <h2 className="text-3xl font-bold text-gold-600 animate__animated animate__fadeInUp animate__delay-0.5s">
              A Message from Our CEO
            </h2>

            {/* Animated Message */}
            <p className="text-lg text-gray-600 animate__animated animate__fadeInUp animate__delay-1s">
              At [Company Name], we are committed to delivering excellence in
              every project we undertake. Our vision and values drive us to
              create impactful solutions that help businesses succeed. I am
              incredibly proud of the work we do and the people behind it.
            </p>
            <p className="text-lg text-gray-600 animate__animated animate__fadeInUp animate__delay-1.5s">
              Thank you for being part of our journey. I look forward to the
              incredible future we will create together.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CeosMessage;
