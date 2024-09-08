import React from 'react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-xl mb-8">
          Oops! The page you're looking for doesn't exist.
        </p>
        <a
          href="/"
          className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-500 transition duration-300"
        >
          Go Back Home
        </a>
      </div>
    </div>
  );
}
