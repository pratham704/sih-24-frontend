import React from "react";

const SkeletonLoader = () => {
  return (
    <div className="bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-4xl">
      <h1 className="text-3xl font-bold text-gray-500 mb-8 text-center">
        "Please hold on while we process your resume."
      </h1>

      <form className="space-y-6 w-full">
        <div className="grid grid-cols-2 gap-10">
          <div className="animate-pulse">
            <div className="bg-gray-600 h-8 w-3/4 mb-2"></div>
            <div className="bg-gray-700 h-12"></div>
          </div>

          <div className="animate-pulse">
            <div className="bg-gray-600 h-8 w-3/4 mb-2"></div>
            <div className="bg-gray-700 h-12"></div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-10">
          <div className="animate-pulse">
            <div className="bg-gray-600 h-8 w-3/4 mb-2"></div>
            <div className="bg-gray-700 h-12"></div>
          </div>

          <div className="animate-pulse">
            <div className="bg-gray-600 h-8 w-3/4 mb-2"></div>
            <div className="bg-gray-700 h-12"></div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-10">
          <div className="animate-pulse">
            <div className="bg-gray-600 h-8 w-3/4 mb-2"></div>
            <div className="bg-gray-700 h-12"></div>
          </div>

          <div className="animate-pulse">
            <div className="bg-gray-600 h-8 w-3/4 mb-2"></div>
            <div className="bg-gray-700 h-12"></div>
          </div>
        </div>

        <div className="animate-pulse">
          <div className="bg-gray-600 h-8 w-full mb-2"></div>
          <div className="bg-gray-700 h-12"></div>
        </div>
      </form>
    </div>
  );
};

export default SkeletonLoader;
