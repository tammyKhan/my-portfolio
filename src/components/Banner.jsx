import { motion } from 'framer-motion';
import React from 'react';
import myself from '../assets/image.jpg'
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import { FaGithub } from 'react-icons/fa';

const Banner = () => {

  const [text] = useTypewriter({
    words: ['Front End Developer', 'Backend Developer in Progress', 'Aspiring Full Stack Developer'],
    loop: 0, // Infinite loop
    typeSpeed: 100,
    deleteSpeed: 50,
    delaySpeed: 1000,
  });

  return (
    <div className='container mx-auto'>
      <div className="flex flex-col lg:flex-row-reverse items-center text-center  rounded-2xl ">
      <img
        src={myself}
        alt="Farhana Islam Khan"
        className="w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full object-cover mb-4 border-4 border-red-600 "
      />
     <div className='text-start lg:mr-20 m-4'
        
     >
      <motion.h3 animate={{ x: [0, 30, 0] }}
        transition={{duration:6, repeat:Infinity}}
       className="text-gray-600 tracking-widest font-bold  dark:text-gray-400">welcome to presentation of</motion.h3>
     <h1 className="text-4xl font-bold text-red-400">Farhana Islam Khan</h1>

     {/* Typewriter effect */}
     <h2 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mt-2">
            ___{text} <Cursor cursorStyle="|" />
          </h2>

      <p className="text-base font-medium text-gray-500 dark:text-gray-400 mt-2">
      "  Passionate about crafting seamless user experiences and building scalable web applications. Currently exploring backend development to become a versatile full-stack developer."
      </p>
      
      <a href="https://github.com/tammyKhan" >
      <button className="btn btn-outline mt-5 border-2 border-red-400 text-red-400 font-bold"><FaGithub></FaGithub> View on GitHub</button>
      </a>
      
     </div>
      
    </div>
    </div>
  );
};

export default Banner;