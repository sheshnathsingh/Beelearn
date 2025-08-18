import React from "react";
import { motion } from "framer-motion";

const SignUp = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <motion.div 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
        className="w-full max-w-sm p-8 bg-white rounded-2xl shadow-lg"
      >
        <motion.h2 
          initial={{ opacity: 0, scale: 0.8 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold text-center text-gray-800 mb-6"
        >
          Sign Up
        </motion.h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-2">Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-2">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
          </div>
          <motion.button 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }}
            className="w-full bg-teal-500 text-white py-2 rounded-lg hover:bg-teal-600 transition"
          >
            Sign Up
          </motion.button>
        </form>
        <p className="text-center text-gray-600 mt-4">
          Already have an account? <a href="#" className="text-teal-500 font-medium">Log In</a>
        </p>
      </motion.div>
    </div>
  );
};

export default SignUp;
