import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGoogle, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faCheckCircle, faUserShield } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

export default function SkeletonLogin() {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <motion.div
        className="flex flex-col items-center w-full max-w-sm sm:max-w-md md:max-w-lg mx-4 bg-gray-800 rounded-lg overflow-hidden shadow-lg p-6 sm:p-8"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-full mb-8 animate-pulse">
          <div className="flex items-center border-b border-gray-600 py-3">
            <FontAwesomeIcon icon={faEnvelope} className="text-gray-400 mr-4" />
            <div className="bg-gray-700 h-12 w-3/4 rounded"></div>
          </div>
        </div>
        <div className="w-full mb-8 animate-pulse">
          <div className="flex items-center border-b border-gray-600 py-3">
            <FontAwesomeIcon icon={faLock} className="text-gray-400 mr-4" />
            <div className="bg-gray-700 h-12 w-3/4 rounded"></div>
          </div>
        </div>
        <div className="w-full mb-8 animate-pulse">
          <div className="bg-gray-700 h-14 w-full rounded"></div>
        </div>
        <div className="flex items-start justify-start w-full mb-8 animate-pulse">
          <div className="bg-gray-700 h-8 w-8 rounded mr-2"></div>
          <div className="bg-gray-700 h-8 w-2/3 rounded"></div>
        </div>

        <div className="bg-gray-700 h-14 w-full rounded mb-6 animate-pulse"></div>
        <div className="flex justify-center mt-6 space-x-6 animate-pulse">
          <div className="bg-gray-700 h-12 w-12 rounded-full"></div>
          <div className="bg-gray-700 h-12 w-12 rounded-full"></div>
        </div>
      </motion.div>
    </div>
  );
}
