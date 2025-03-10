import React from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaFacebook,
} from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await emailjs.send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        { name: data.name, email: data.email, message: data.message },
        import.meta.env.VITE_PUBLIC_KEY
      );

      toast.success("Message sent successfully!");
      reset();
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message. Please try again.");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-4xl mx-auto p-8 bg-gray-100 shadow-lg rounded-lg "
    >
      <h2 className="text-3xl font-bold text-center mb-5 text-red-400">
        Wanna get in touch?
      </h2>
      <div className="flex flex-col md:flex-row gap-8 dark:text-gray-700">
        {/* Left Section - Contact Info */}
        <div className="md:w-1/2 space-y-6 text-gray-600">
          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-2xl text-gray-700" />
            <div>
              <h4 className="font-semibold">Address</h4>
              <p className="">Dhaka, Bangladesh</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <FaEnvelope className="text-2xl text-gray-700" />
            <div>
              <h4 className="font-semibold">Email</h4>
              <a
                className="hover:underline "
                href="mailto:tammykhan543@gmail.com"
              >
                tammykhan543@gmail.com
              </a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <FaPhone className="text-2xl text-gray-700" />
            <div>
              <h4 className="font-semibold">Phone & WhatsApp</h4>

              <a
                href="https://wa.me/8801730570756?text=Hi%20there,%20I%20want%20to%20talk!"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:underline"
              >
                +8801730570756
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold">Social Media</h4>
            <div className="flex gap-4 mt-2">
              <a
                href="https://www.linkedin.com/in/farhana-islam-khan-6b6405290/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-2xl text-blue-700 cursor-pointer hover:opacity-80" />
              </a>

              <a
                href="https://github.com/tammyKhan"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="text-2xl text-black cursor-pointer hover:opacity-80" />
              </a>

              <a
                href="https://www.facebook.com/farhana.khan.tammy.2024"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="text-2xl text-blue-700 cursor-pointer hover:opacity-80" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="md:w-1/2 text-gray-600 bg-white p-6 rounded-lg shadow-md">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Name</label>
              <input
                type="text"
                {...register("name", { required: "Name is required" })}
                className="w-full p-2 border rounded"
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium">Email</label>
              <input
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
                    message: "Invalid email",
                  },
                })}
                className="w-full p-2 border rounded"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium">Message</label>
              <textarea
                {...register("message", { required: "Message is required" })}
                className="w-full p-2 border rounded"
                rows="4"
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm">{errors.message.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full cursor-pointer bg-gray-800 text-white py-2 rounded hover:bg-gray-600 transition"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </motion.div>
  );
};

export default Contact;
