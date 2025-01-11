import React from "react";

const ProjectsInBangladesh = () => {
  const projects = [
    {
      title: "Real Estate",
      logo: "https://via.placeholder.com/100x100", // Replace with the actual logo URL for Real Estate
    },
    {
      title: "Fintech",
      logo: "https://via.placeholder.com/100x100", // Replace with the actual logo URL for Fintech
    },
    {
      title: "Travel",
      logo: "https://via.placeholder.com/100x100", // Replace with the actual logo URL for Travel
    },
  ];

  return (
    <div className="bg-gray-100 py-12 px-6 md:px-16">
      {/* Heading */}
      <h2 className="text-center text-3xl md:text-4xl font-bold text-blue-700 mb-12">
        Projects in Bangladesh
      </h2>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 text-center"
          >
            {/* Title */}
            <h3 className="bg-yellow-500 text-white text-lg font-semibold py-2 rounded-t-md">
              {project.title}
            </h3>
            {/* Logo */}
            <div className="mt-4">
              <img
                src={project.logo}
                alt={`${project.title} Logo`}
                className="w-24 h-24 mx-auto"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsInBangladesh;
