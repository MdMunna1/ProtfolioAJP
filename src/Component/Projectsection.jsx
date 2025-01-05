import React, { useEffect, useState } from "react";
import { use } from "react";
import { motion } from "motion/react"

const ProjectSection = ({ projects }) => {
  
    

// console.log(data)
  return (
    <section id="projects" className="py-16 ">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl text-orange-500 font-bold text-center py-2 mb-8">My Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
              key={project.id}
              className="bg-black shadow-md shadow-orange-700 hover:shadow-orange-400 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300"
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-48 p-2 rounded-lg object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl text-orange-500 font-semibold mb-2">{project.name}</h3>
                <p className="text-white mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-blue-100 text-blue-600 text-sm rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white bg-orange-600 px-4 py-2 rounded hover:bg-blue-700"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-500 bg-gray-600 px-4 py-2 rounded hover:bg-gray-700"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
