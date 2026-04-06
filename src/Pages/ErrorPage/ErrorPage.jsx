import React from "react";
import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-white via-gray-100 to-gray-200 text-gray-800 px-6">
      <div className="text-center max-w-lg">
        {/* Animated Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-6"
        >
          <div className="bg-red-100 p-6 rounded-full shadow-md">
            <AlertTriangle size={60} className="text-red-500" />
          </div>
        </motion.div>

        {/* Error Code */}
        <h1 className="text-7xl font-bold mb-2 text-gray-900">404</h1>

        {/* Message */}
        <p className="text-gray-600 text-lg mb-6">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 justify-center">
          <button
            onClick={() => (window.location.href = "/")}
            className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-2xl shadow-md transition"
          >
            Go Home
          </button>

          <button
            onClick={() => window.history.back()}
            className="px-6 py-3 border border-gray-300 hover:bg-gray-200 rounded-2xl transition"
          >
            Go Back
          </button>
        </div>

        {/* Extra Text */}
        <p className="text-gray-400 text-sm mt-8">
          Error Code: 404 | Page Not Found
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;