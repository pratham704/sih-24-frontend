import React from "react";

const SkeletonLoader = ({ className }) => {
  return (
    <div
      className={`animate-pulse bg-gray-600 rounded-lg ${className}`}
      style={{ height: 'auto', width: '100%' }} // Adjust height to be dynamic if needed
    >
      {/* Optionally, you can add additional styling to match the box more closely */}
    </div>
  );
};

export default SkeletonLoader;
