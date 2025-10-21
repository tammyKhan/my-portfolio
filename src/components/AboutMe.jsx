import React from "react";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <motion.section
      id="about"
      className="w-10/12 mx-auto"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true, amount: 0.2 }} // Animation triggers when 20% is visible
    >
      <div className="text-center">
        <h2 className="text-4xl font-bold text-red-400 mb-4">About Me</h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          I'm a passionate **Frontend Developer** with a keen eye for detail and a strong commitment to crafting intuitive and engaging user experiences. Currently, I'm expanding my expertise in **Backend Development** to evolve into a **Full Stack Developer**.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-10 items-center justify-between mt-10">
        {/* Left Side - Image */}
        <motion.img
          src="https://i.ibb.co.com/k2fCbmpq/photo-1603468620905-8de7d86b781e-w-600-auto-format-fit-crop-q-60-ixlib-rb-4-0.jpg"
          alt="Developer"
          className="w-72 h-72 md:w-96 md:h-96 rounded-full shadow-lg object-cover"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        />

        {/* Right Side - Details */}
        <motion.div
          className="max-w-lg text-gray-700 dark:text-gray-300"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h3 className="text-2xl font-semibold text-red-400">Who am I?</h3>
          <p className="mt-4 text-lg">
            I started my journey in **web development** out of curiosity and quickly fell in love with coding. My goal is to build **scalable, efficient, and visually appealing applications** that solve real-world problems.
          </p>

          <h3 className="text-2xl font-semibold text-red-400 mt-6">What I'm Learning?</h3>
          <p className="mt-4 text-lg">
            Currently, I'm exploring **Node.js, Express.js, and databases (MongoDB, PostgreSQL)** to deepen my backend skills and transition into full-stack development.
          </p>

          <h3 className="text-2xl font-semibold text-red-400 mt-6">Let's Connect!</h3>
          <p className="mt-4 text-lg">
            I'm always open to **collaborations, freelance projects, and learning opportunities**. Let's create something amazing together! 🚀
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutMe;
