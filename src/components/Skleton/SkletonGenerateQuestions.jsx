// SkeletonLoader.js
import React from "react";

const SkeletonLoader = () => {
  return (
    <div className="bg-gray-700 p-8 rounded-2xl shadow-2xl w-full max-w-3xl border border-gray-600 animate-pulse">
      <div className="bg-gray-600 h-8 mb-4 rounded"></div>
      <div className="bg-gray-600 h-12 mb-4 rounded"></div>
      <div className="bg-gray-600 h-16 mb-6 rounded"></div>
      <div className="bg-gray-600 h-8 mb-6 rounded"></div>
    </div>
  );
};

export default SkeletonLoader;
