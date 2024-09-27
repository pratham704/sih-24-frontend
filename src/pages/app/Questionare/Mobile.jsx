// Modal.js
import React from 'react';

const Modal = ({ message, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black opacity-50" onClick={onClose} />
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg z-10">
        <h2 className="text-xl font-semibold mb-4 text-white">Alert</h2>
        <p className="text-gray-300 mb-6">{message}</p>
        <button
          onClick={onClose}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
