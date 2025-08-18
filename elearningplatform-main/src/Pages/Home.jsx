import React from "react";
import { motion } from "framer-motion";
import img from "../assets/image.png"

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-green-100 to-purple-100 font-sans">
      <main className="flex flex-col md:flex-row items-center px-8 py-16">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 space-y-6"
        >
          <h2 className="text-4xl font-bold text-gray-900">
            The <span className="text-green-600 underline">AI-powered</span> learning platform for educators
          </h2>
          <p className="text-gray-600">
            Create, deliver and sell transformative online courses effortlessly
          </p>
          <div className="flex space-x-4">
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-pink-600 text-white px-6 py-3 rounded-full">
              For education providers
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-pink-300 text-white px-6 py-3 rounded-full">
              For learners
            </motion.button>
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 mt-10 md:mt-0 flex justify-center relative"
        >
          <img
            src={img}
            alt="Educator"
            className="w-72 md:w-96 rounded-lg shadow-lg"
          />
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="absolute bottom-0 right-0 bg-white p-3 shadow-lg rounded-lg"
          >
            <p className="text-green-600 font-bold">Progress</p>
            <div className="w-24 h-24 flex items-center justify-center text-green-700 font-bold text-xl">
              73%
            </div>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
};

export default HomePage;
