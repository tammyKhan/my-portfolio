import React, { useEffect } from "react";
import { MdCancel } from "react-icons/md";

const Modal = ({ isOpen, onClose, project }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center backdrop-brightness-50 backdrop-contrast-125 bg-opacity-60 ">
      <div className="max-h-[90vh] overflow-y-auto w-full max-w-2xl">
        <div className="bg-white dark:bg-gray-900 rounded-lg p-6 w-full max-w-2xl shadow-lg relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-2xl font-bold"
        >
          <MdCancel />
        </button>
        <h2 className="text-2xl font-bold mb-4">{project.name}</h2>
        <img src={project.thumbnail} alt={project.name} className="w-full h-64 object-cover rounded mb-4" />
        <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
        <div className="flex gap-2 flex-wrap mb-4">
          {project.technologies.map((tech, idx) => (
            <span
              key={idx}
              className="px-3 py-1 bg-red-100 text-red-600 rounded-full text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          <a
            href={project.clientLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white bg-black px-4 py-2 rounded hover:bg-gray-800"
          >
            GitHub
          </a>
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white bg-red-500 px-4 py-2 rounded hover:bg-red-600"
          >
            Live Site
          </a>
        </div>
      </div>
      <div className="bg-white dark:bg-gray-900 rounded-lg p-6 w-full max-w-2xl shadow-lg relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-2xl font-bold"
        >
          <MdCancel />
        </button>
        <h2 className="text-2xl font-bold mb-4">{project.name}</h2>
        <img src={project.thumbnail} alt={project.name} className="w-full h-64 object-cover rounded mb-4" />
        <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
        <div className="flex gap-2 flex-wrap mb-4">
          {project.technologies.map((tech, idx) => (
            <span
              key={idx}
              className="px-3 py-1 bg-red-100 text-red-600 rounded-full text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          <a
            href={project.clientLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white bg-black px-4 py-2 rounded hover:bg-gray-800"
          >
            GitHub
          </a>
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white bg-red-500 px-4 py-2 rounded hover:bg-red-600"
          >
            Live Site
          </a>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Modal;