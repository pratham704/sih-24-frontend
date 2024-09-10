import React from 'react';
import { FaCheckCircle, FaRegCheckCircle, FaQuestionCircle } from 'react-icons/fa'; // Import necessary icons
import { HiOutlineMail } from 'react-icons/hi';

const Recruiter = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <select className="bg-gray-800 text-white p-2 rounded-md border border-gray-700">
          <option>Customer Service Representative</option>
        </select>
        <div className="space-x-4">
          <button className="text-white font-semibold">Applicants (17)</button>
          <button className="text-gray-400">Matched job seekers</button>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap space-x-2 mb-6">
        {['17 Active', '12 Awaiting Review', '2 Reviewed', '2 Contacted', '0 Hired', '22 Rejected'].map((filter, index) => (
          <button
            key={index}
            className="bg-gray-800 hover:bg-gray-700 text-white py-1 px-3 rounded-md border border-gray-700 transition duration-200"
          >
            {filter}
          </button>
        ))}
        <button className="bg-blue-600 hover:bg-blue-500 text-white py-1 px-3 rounded-md ml-auto transition duration-200">
          Import candidates
        </button>
      </div>

      {/* Search and Filters Bar */}
      <div className="flex flex-wrap items-center justify-between mb-6">
        <div className="flex space-x-2 mb-2 sm:mb-0">
          {['Yes (2)', 'Maybe (2)', 'Expiring (2)'].map((filter, index) => (
            <button
              key={index}
              className="bg-gray-800 hover:bg-gray-700 text-white py-1 px-3 rounded-md border border-gray-700 transition duration-200"
            >
              {filter}
            </button>
          ))}
          {['Assessment: Any', 'Screener questions: Any', 'Location: Any'].map((dropdown, index) => (
            <select
              key={index}
              className="bg-gray-800 hover:bg-gray-700 text-white py-1 px-3 rounded-md border border-gray-700 transition duration-200"
            >
              <option>{dropdown}</option>
            </select>
          ))}
        </div>
        <select className="bg-gray-800 hover:bg-gray-700 text-white py-1 px-3 rounded-md border border-gray-700 transition duration-200">
          <option>Sort: Apply date (newest)</option>
        </select>
      </div>

      {/* Candidates Table */}
      <div className="bg-gray-800 rounded-lg p-4 shadow-lg">
        {/* Candidate Row */}
        {[
{ name: 'Amit Sharma', status: 'Awaiting Review', date: 'Applied Sep 5', experience: '', interested: true },
{ name: 'Priya Verma', status: 'Reviewed', date: 'Applied Aug 20', experience: '', interested: false },
{ name: 'Rahul Mehta', status: 'Interview Scheduled', date: 'Applied Jul 15', experience: '', interested: true },
{ name: 'Neha Gupta', status: 'Awaiting Review', date: 'Applied Jun 25', experience: '', interested: true },
{ name: 'Vikram Patel', status: 'Reviewed', date: 'Applied Jul 10', experience: '', interested: false },
{ name: 'Sneha Iyer', status: 'Interview Scheduled', date: 'Applied Aug 5', experience: '', interested: true },
{ name: 'Arjun Singh', status: 'Awaiting Review', date: 'Applied Jun 30', experience: '', interested: false },
{ name: 'Kavita Reddy', status: 'Reviewed', date: 'Applied May 12', experience: '', interested: true },
{ name: 'Manish Desai', status: 'Awaiting Review', date: 'New message', experience: '', interested: false },
{ name: 'Anjali Nair', status: 'Reviewed', date: 'Applied Apr 18', experience: '', interested: true }

        ].map((candidate, index) => (
          <div
            key={index}
            className="flex items-center justify-between bg-gray-900 p-4 rounded-md mb-3 shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <div className="flex items-center space-x-4">
              <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600 bg-gray-700 border-none rounded" />
              <div className="flex flex-col">
                <span className="font-semibold">{candidate.name}</span>
                <span className="text-sm text-gray-400">{candidate.status} • {candidate.date}</span>
              </div>
            </div>
            <div className="flex space-x-2">
              {/* <FaCheckCircle className="text-green-500" title="Highly proficient" />
              <FaRegCheckCircle className="text-yellow-500" title="Background check" />
              <FaQuestionCircle className="text-blue-500" title="Skill Zendesk" /> */}
            </div>
            <div className="text-gray-400">{candidate.experience}</div>
            {/* <button className={`text-white px-3 py-1 rounded-md ${candidate.interested ? 'bg-green-600' : 'bg-yellow-500'} transition duration-200`}>
              {candidate.interested ? '✔' : '✔'}
            </button> */}
            <HiOutlineMail className="text-red-500" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recruiter;
