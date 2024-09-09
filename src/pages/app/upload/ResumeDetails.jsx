import React from "react";

const ResumeDetails = ({ details }) => {
  // Mapping your data to more user-friendly labels
  const { candidate_name, address, email, phone } = details;

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-md text-white max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4 border-b-2 border-gray-700 pb-2">Resume Details</h2>
      <div className="space-y-4">
        <div>
          <strong className="block text-gray-400">Name:</strong>
          <span className="text-lg">{candidate_name}</span>
        </div>
        <div>
          <strong className="block text-gray-400">Address:</strong>
          <span className="text-lg">{address}</span>
        </div>
        <div>
          <strong className="block text-gray-400">Email:</strong>
          <a
            href={`mailto:${email}`}
            className="text-blue-400 hover:text-blue-300"
          >
            {email}
          </a>
        </div>
        <div>
          <strong className="block text-gray-400">Phone:</strong>
          <a href={`tel:${phone}`} className="text-blue-400 hover:text-blue-300">
            {phone}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ResumeDetails;
