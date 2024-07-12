// Projects Component Example
import React from "react";
import projectData from "./data/projects"; // Assume this contains your project details

const Projects = () => {
  return (
    <section className="bg-gray-800 text-white p-8">
      <h2 className="text-4xl font-bold mb-8">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projectData.map((project, index) => (
          <div key={index} className="border p-8 rounded-lg shadow-md">
            <img src={project.image} alt={project.name} className="w-full h-48 object-cover mb-4" />
            <h3 className="text-xl font-semibold">{project.name}</h3>
            <p className="mb-4">{project.description}</p>
            <div className="flex space-x-4">
              <a href={project.liveLink} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Live Demo
              </a>
              <a href={project.sourceCode} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                Source Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
