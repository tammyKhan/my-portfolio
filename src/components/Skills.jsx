import React from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { SiTailwindcss, SiDaisyui } from 'react-icons/si';
import { motion } from 'framer-motion';

const technicalSkills = [
  { name: 'HTML5', icon: <FaHtml5 size={40} className="text-[#E34F26]" />, progress: 90 },
  { name: 'CSS3', icon: <FaCss3Alt size={40} className="text-[#1572B6]" />, progress: 85 },
  { name: 'JavaScript', icon: <FaJsSquare size={40} className="text-[#F7DF1E]" />, progress: 80 },
  { name: 'React', icon: <FaReact size={40} className="text-[#61DAFB]" />, progress: 70 },
  { name: 'Tailwind CSS', icon: <SiTailwindcss size={40} className="text-[#38BDF8]" />, progress: 85 },
  { name: 'DaisyUI', icon: <SiDaisyui size={40} className="text-[#DA77F2]" />, progress: 80 },
  { name: 'Node.js', icon: <FaNodeJs size={40} className="text-[#68A063]" />, progress: 30 },
  { name: 'Databases (MongoDB, PostgreSQL)', icon: <FaDatabase size={40} className="text-[#6CC24A]" />, progress: 30 },
];


const Skills = () => {
  return (
    <motion.section
      id="skills"
      className=" "
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-red-400 mb-4">My Skills</h2>
        
      </div>

      {/* Technical Skills */}
      <div className="mb-16">
      
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10">
          {technicalSkills.map((skill, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
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

  
    </motion.section>
  );
};

export default Skills;
