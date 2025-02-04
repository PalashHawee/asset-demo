import React from "react";

const MeetTheTeam = () => {
  const member = {
    name: "MD Nazmul Alam",
    role: "Founder & CEO",
    description: `
      At the helm of Asset Advisor is our esteemed Founder & CEO, MD Nazmul Alam. 
      With over 18 years of remarkable experience in the asset management sector, 
      Mr. Alam is recognized for his strategic vision and proven successes in guiding 
      clients toward financial prosperity. In addition to his role at Asset Advisor, 
      he serves as the CEO & Director of Prime Place Properties, further extending his 
      influence and expertise within the asset management and real estate sectors. 
      His leadership has been instrumental in creating sustainable growth and innovative 
      investment solutions for our clients.
    `,
    image:
      "/images/assetceo.jpeg",
  };

  return (
    <section className="py-12 bg-gradient-to-r from-blue-900 to-gold-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center text-white">
          Meet the Team
        </h2>
        <div className="flex flex-col lg:flex-row items-center shadow-lg rounded-lg overflow-hidden ">
          {/* Left Side: Image */}
          <div className="flex-shrink-0 flex items-center justify-center p-4">
            <img
              className="w-48 h-48 lg:w-56 lg:h-56 rounded-full object-cover border-4 border-gold-600"
              src={member.image}
              alt={member.name}
            />
          </div>

          {/* Right Side: Content */}
          <div className="p-6 lg:p-8 flex flex-col justify-center">
            <h3 className="text-2xl font-semibold text-white mb-2">
              {member.name}
            </h3>
            <p className="text-sm text-gray-500 font-medium mb-4">
              {member.role}
            </p>
            <p className="text-white leading-relaxed whitespace-pre-line">
              {member.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetTheTeam;
