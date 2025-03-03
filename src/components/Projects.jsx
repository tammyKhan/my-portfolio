import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    name: 'Portfolio Website',
    description: 'A personal portfolio to showcase my skills and projects.',
    technologies: ['React', 'Tailwind CSS', 'DaisyUI'],
    liveLink: 'https://your-portfolio.com',
    repoLink: 'https://github.com/yourusername/portfolio',
    thumbnail: 'https://i.ibb.co/k2fCbmpq/photo-1603468620905-8de7d86b781e-w-600-auto-format-fit-crop-q-60-ixlib-rb-4-0.jpg' 
  },
  {
    name: 'E-Commerce Website',
    description: 'A fully functional e-commerce platform for online shopping.',
    technologies: ['React', 'Node.js', 'MongoDB'],
    liveLink: 'https://your-ecommerce.com',
    repoLink: 'https://github.com/yourusername/e-commerce',
    thumbnail: 'https://i.ibb.co/k2fCbmpq/photo-1603468620905-8de7d86b781e-w-600-auto-format-fit-crop-q-60-ixlib-rb-4-0.jpg' 
  },
  {
    name: 'Task Management App',
    description: 'An app to manage daily tasks and track productivity.',
    technologies: ['React', 'Tailwind CSS', 'Firebase'],
    liveLink: 'https://your-taskmanager.com',
    repoLink: 'https://github.com/yourusername/task-manager',
    thumbnail: 'https://i.ibb.co/k2fCbmpq/photo-1603468620905-8de7d86b781e-w-600-auto-format-fit-crop-q-60-ixlib-rb-4-0.jpg' 
  },
];

const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="container mx-auto my-16 px-6 lg:px-20"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: false, amount: 0.2 }}
    >
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-red-400 mb-4">My Projects</h2>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          These are a few of the projects I have worked on, showcasing my technical skills and creative problem-solving.
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
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">{project.name}</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">{project.description}</p>
              <div className="mt-4">
                <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">Technologies:</p>
                <ul className="list-disc list-inside">
                  {project.technologies.map((tech, index) => (
                    <li key={index} className="text-xs text-gray-600 dark:text-gray-400">{tech}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Buttons */}
            <div className="p-4 flex justify-between items-center">
              <a href={project.repoLink} target="_blank" rel="noopener noreferrer">
                <button className="btn btn-outline border-2 font-bold text-red-400 border-red-400">Client Code</button>
              </a>
              <a href={project.repoLink} target="_blank" rel="noopener noreferrer">
                <button className="btn btn-outline border-2 font-bold text-red-400 border-red-400">Server Code</button>
              </a>
            </div>
            <div className='pb-4 flex justify-center items-center'>
            <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                <button className="btn hover:opacity-70 bg-red-400 text-black hover:text-white">Live Demo</button>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
