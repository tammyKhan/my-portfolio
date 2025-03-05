import React from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { SiTailwindcss, SiDaisyui } from 'react-icons/si';
import { motion } from 'framer-motion';

const technicalSkills = [
  { name: 'HTML5', icon: <FaHtml5 size={40} className="text-[#E34F26]" />, progress: 90 },
  { name: 'CSS3', icon: <FaCss3Alt size={40} className="text-[#1572B6]" />, progress: 85 },
  { name: 'JavaScript', icon: <FaJsSquare size={40} className="text-[#F7DF1E]" />, progress: 80 },
  { name: 'React', icon: <FaReact size={40} className="text-[#61DAFB]" />, progress: 90 },
  { name: 'Tailwind CSS', icon: <SiTailwindcss size={40} className="text-[#38BDF8]" />, progress: 85 },
  { name: 'DaisyUI', icon: <SiDaisyui size={40} className="text-[#DA77F2]" />, progress: 80 },
  { name: 'Node.js', icon: <FaNodeJs size={40} className="text-[#68A063]" />, progress: 50 },
  { name: 'Databases (MongoDB, PostgreSQL)', icon: <FaDatabase size={40} className="text-[#6CC24A]" />, progress: 50 },
];


import { FaHandsHelping, FaComments, FaSyncAlt, FaRegClock, FaBrain } from 'react-icons/fa';

const softSkills = [
  { name: 'Problem Solving', icon: <FaBrain size={40} className="text-[#6CC24A]" />, progress: 87 },
  { name: 'Teamwork', icon: <FaHandsHelping size={40} className="text-[#38BDF8]" />, progress: 90 },
  { name: 'Communication', icon: <FaComments size={40} className="text-[#F7DF1E]" />, progress: 80 },
  { name: 'Adaptability', icon: <FaSyncAlt size={40} className="text-[#FF6F61]" />, progress: 75 },
  { name: 'Time Management', icon: <FaRegClock size={40} className="text-[#1572B6]" />, progress: 85 },
  { name: 'Creativity', icon: <FaBrain size={40} className="text-[#DA77F2]" />, progress: 70 },
];



const Skills = () => {
  return (
    <motion.section
      id="skills"
      className="container mx-auto my-16 px-6 lg:px-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: false, amount: 0.2 }}
    >
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-red-400 mb-4">My Skills</h2>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          A combination of technical skills and soft skills I have developed throughout my journey as a developer.
        </p>
      </div>

      {/* Technical Skills */}
      <div className="mb-16">
        <h3 className="text-2xl font-bold text-red-400 mb-6">Technical Skills</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10">
          {technicalSkills.map((skill, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.1 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <div className="flex justify-center mb-4">{skill.icon}</div>
              <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300">{skill.name}</h3>
              <div className="w-full bg-gray-200 rounded-full mt-2">
                <div
                  className="bg-gray-500  text-xs font-medium text-center text-white p-0.5 leading-none rounded-full"
                  style={{ width: `${skill.progress}%` }}
                >
                  {skill.progress}%
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Soft Skills */}
<div>
  <h3 className="text-2xl font-bold text-red-400 mb-6">Soft Skills</h3>
  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10">
    {softSkills.map((skill, index) => (
      <motion.div
        key={index}
        className="text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: index * 0.1 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <div className="flex justify-center mb-4">{skill.icon}</div>
        <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300">{skill.name}</h3>
        <div className="w-full bg-gray-200 rounded-full mt-2">
          <div
            className="bg-gray-500 text-xs font-medium text-center text-white p-0.5 leading-none rounded-full"
            style={{ width: `${skill.progress}%` }}
          >
            {skill.progress}%
          </div>
        </div>
      </motion.div>
    ))}
  </div>
</div>

    </motion.section>
  );
};

export default Skills;
