import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { GoProjectSymlink } from "react-icons/go";
import Modal from "./Modal";

const projects = [
  {
    name: "To-Do App",
    description:
      'Features include task creation via modal, edit/delete with localStorage sync, filters (All/Active/Completed), strike-through for completed tasks, a debounced search, task sorting (by Created, Priority, Due Date, A-Z), and "Select All" & "Clear Completed" toggles.',
    technologies: ["Html", "TailwindCSS", "Javascript"],
    liveLink: "https://tammykhan.github.io/Todo-App-js/",
    clientLink: "https://github.com/tammyKhan/Todo-App-js",
    thumbnail: "https://i.ibb.co.com/FbNc9Fgq/mobile.png",
  },
  {
    name: "My PortFolio",
    description:
      'Features include task creation via modal, edit/delete with localStorage sync, filters (All/Active/Completed), strike-through for completed tasks, a debounced search, task sorting (by Created, Priority, Due Date, A-Z), and "Select All" & "Clear Completed" toggles.',
    technologies: ["Html", "TailwindCSS", "Javascript"],
    liveLink: "https://tammykhan.github.io/Todo-App-js/",
    clientLink: "https://github.com/tammyKhan/my-portfolio",
    thumbnail: "https://i.ibb.co.com/JwHkzyzZ/image.png",
  },
  {
    name: "Donate Bangladesh",
    description:
      "Donate Bangladesh is a charity platform that enables users to contribute to various humanitarian causes...",
    technologies: ["Html", "Tailwind CSS", "DaisyUI", "Javascript"],
    liveLink: "https://tammykhan.github.io/Donate-Bangladesh/",
    clientLink: "https://github.com/tammyKhan/Donate-Bangladesh",
    thumbnail: "https://i.ibb.co.com/spTFVRg6/2025-03-05-5.png",
  },
  {
    name: "SmartWatch Landing Page",
    description:
      "Dream11 Cricket Team Builder is a web application designed to help cricket fans assemble their Dream11 team...",
    technologies: ["React", "Tailwind CSS", "DaisyUI"],
    liveLink: "https://tammykhan.github.io/smartwatch-landing/",
    clientLink:
      "https://github.com/tammyKhan/smartwatch-landing/",
    thumbnail: "https://i.ibb.co.com/vxfHCvSC/image.png",
  },

];

const Projects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [clickedCardIndex, setClickedCardIndex] = useState(null);

   const handleCardClick = (index) => {
    if (window.innerWidth < 768) {
      setClickedCardIndex(clickedCardIndex === index ? null : index);
    }
  }

  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="py-12 px-4"
    >
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-red-400 mb-4">My Projects</h2>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          These are a few of the projects I have worked on.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            onClick={() => handleCardClick(index)}
            className="group relative border-2 border-gray-300 rounded-lg shadow-lg bg-white dark:bg-gray-800 overflow-hidden transition-all duration-300 hover:shadow-red-400 hover:shadow-[0_0_20px_rgba(0,0,0,0.25)]"
            initial={{ opacity: 0.3, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Thumbnail */}
            <div className="overflow-hidden rounded-t-lg">
              <img
                src={project.thumbnail}
                alt={project.name}
                className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 backdrop-brightness-50 backdrop-contrast-125 opacity-0 group-hover:opacity-100 transition duration-300 z-20"></div>

            {/* Buttons */}
            <div className={`p-4 absolute inset-0 z-30 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition duration-300 
              ${
                clickedCardIndex === index
                  ? "opacity-100"
                  : "opacity-0 group-hover:opacity-100"
              }
              `}>
              <a
                href={project.clientLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  title="GitHub Link"
                  className="btn hover:bg-black hover:text-red-400 hover:font-bold hover:border-2 hover:border-red-400 font-bold text-white bg-red-400"
                >
                  <FaGithub className="w-6 h-6" />
                </button>
              </a>
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  title="Live Link"
                  className="btn hover:bg-black hover:text-red-400 hover:font-bold hover:border-2 hover:border-red-400 font-bold text-white bg-red-400"
                >
                  <GoProjectSymlink className="w-6 h-6" />
                </button>
              </a>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedProject(project);
                  setIsModalOpen(true);
                }}
                className="px-5 py-2 bg-red-800 text-white rounded hover:bg-black hover:text-red-400 hover:font-bold hover:border-2 hover:border-red-400 transition cursor-pointer"
              >
                Details
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <Modal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedProject(null);
        }}
      />
    </motion.section>
  );
};

export default Projects;
