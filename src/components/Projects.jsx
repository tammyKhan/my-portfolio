import React, { useRef } from "react";
import { motion } from "framer-motion";

const projects = [
  {
    name: "Food Sharing App",
    description:
      "This project is a Food Sharing Website designed to reduce food waste by allowing users to share surplus food with their community. Users can add food items, request available food, manage their food listings, and more. The platform ensures secure authentication and user-friendly interactions using modern web technologies.",
    technologies: ["React", "Tailwind CSS", "Firebase"],
    liveLink: "https://food-sharing-2841d.web.app/",
    clientLink: "https://github.com/tammyKhan/B10A11-client-side",
    serverLink: "https://github.com/tammyKhan/B10A11-server-side",
    thumbnail: "https://i.ibb.co.com/1YrsGSMd/image.png",
  },
  {
    name: "Movie Portal",
    description:
      "The Movie Portal is a user-friendly application designed for exploring movies, viewing movie details, adding movies, deleting movies, and managing user favorites.",
    technologies: ["React", "DaisyUI", "Firebase", "Node.js", "MongoDB"],
    liveLink: "https://movie-portal-c1d78.web.app/",
    clientLink:
      "https://github.com/programming-hero-web-course2/b10-a10-client-side-tammyKhan",
    serverLink:
      "https://github.com/programming-hero-web-course2/b10-a10-server-side-tammyKhan/",
    thumbnail: "https://i.ibb.co.com/LDMpc5XN/image.png",
  },
  {
    name: "Donate Bangladesh",
    description:
      "Donate Bangladesh is a charity platform that enables users to contribute to various humanitarian causes, such as flood relief and medical aid for affected individuals. It ensures secure and transparent donations to help those in need.",
    technologies: ["Html", "Tailwind CSS", "DaisyUI", "Javascript"],
    liveLink: "https://tammykhan.github.io/Donate-Bangladesh/",
    clientLink: "https://github.com/tammyKhan/Donate-Bangladesh",
    thumbnail: "https://i.ibb.co.com/spTFVRg6/2025-03-05-5.png",
  },
  {
    name: "Dream11 Cricket Team Builder",
    description:
      "Dream11 Cricket Team Builder is a web application designed to help cricket fans assemble their ultimate Dream11 T20 cricket team. With a user-friendly interface, users can browse available players, filter them by criteria, and select their desired squad, all within a sleek, responsive layout.",
    technologies: ["React", "Tailwind CSS", "DaisyUI"],
    liveLink: "https://dream11-team.surge.sh/",
    clientLink:
      "https://github.com/programming-hero-web-course1/b10a7-dream-11-tammyKhan",
    thumbnail: "https://i.ibb.co.com/qY3TxzJS/image.png",
  },

  
  
  {
    name: "Eco Adventure Blog",
    description:
      "This is a web application designed to showcase eco-friendly travel experiences.Users can register, log in, and book their next adventure while learning about the eco-friendly features of each trip.",
    technologies: ["React", "Tailwind CSS", "DaisyUI", "Firebase", "AOS"],
    liveLink: "https://eco-adventure-experience-19882.web.app/",
    clientLink:
      "https://github.com/programming-hero-web-course1/b10-a9-authentication-tammyKhan",
    thumbnail: "https://i.ibb.co.com/N6MBwskt/eco-adventure.png",
  },
  
  {
    name: "🐾 Pet Adoption Portal",
    description:
      "The Pet Adoption Portal is a user-friendly web application designed to help users explore and adopt pets. It offers an intuitive interface where users can browse through different categories of pets, view their details, sort them by price, and complete the adoption process. ",
    technologies: ["Html", "Tailwind CSS", "DaisyUI", "Javascript"],
    liveLink: "https://peddy-44.netlify.app",
    clientLink:
      "https://github.com/programming-hero-web-course2/b10a6-pet-adoption-tammyKhan",

    thumbnail: "https://i.ibb.co.com/VpM67g5G/image.png",
  },
];

const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="container mx-auto my-16 px-6 lg:px-20"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-red-400 mb-4">My Projects</h2>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          These are a few of the projects I have worked on, showcasing my
          technical skills and creative problem-solving.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="group relative border-2 border-gray-300 cursor-pointer rounded-lg shadow-lg 
                      bg-white dark:bg-gray-800 overflow-hidden transition-all duration-300 
                      hover:shadow-gray-500 hover:shadow-lg"
            initial={{ opacity: 0.3, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: index * 0.1 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            {/* Thumbnail with Hover Zoom */}
            <div className="overflow-hidden rounded-t-lg">
              <motion.img
                src={project.thumbnail}
                alt={project.name}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>

            {/* Project Details */}
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                {project.name}
              </h3>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                {project.description}
              </p>
              <div className="mt-4">
                <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Technologies:
                </p>
                <ul className="list-disc list-inside">
                  {project.technologies.map((tech, index) => (
                    <li
                      key={index}
                      className="text-xs text-gray-600 dark:text-gray-400"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Buttons */}
            <div className="p-4 flex justify-between items-center">
              <a
                href={project.clientLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn btn-outline border-2 font-bold text-red-400 border-red-400">
                  Client Code
                </button>
              </a>
              {project.serverLink ? (
                <a
                  href={project.serverLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn btn-outline border-2 font-bold text-red-400 border-red-400">
                    Server Code
                  </button>
                </a>
              ) : (
                <span className="btn btn-outline text-gray-500 text-sm italic">
                  Not Available
                </span>
              )}
            </div>
            <div className="pb-4 flex justify-center items-center">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn hover:opacity-90 bg-red-400 text-black hover:text-white">
                  Live Demo
                </button>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
