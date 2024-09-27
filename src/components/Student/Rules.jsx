import React from "react";

const Rules = () => {
  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen flex items-center justify-center p-4 md:p-8">
      <div className="bg-gray-800 rounded-lg shadow-2xl p-10 w-12/12 md:w-4/5 max-w-3xl">
        <h1 className="text-4xl font-extrabold mb-6 text-center text-blue-500 underline">
          Rules
        </h1>
        <p className="mb-8 text-lg text-gray-300 text-center">
          Please read the following rules carefully before starting the test:
        </p>
        <ol className="list-decimal list-inside mb-6 space-y-4 text-gray-200">
          <li>
            <strong>You must use a laptop for this test.</strong>
          </li>
          <li>
            <strong>
              Your camera must be turned on and positioned properly.
            </strong>
          </li>
          <li>
            <strong>
              Your microphone should be functioning throughout the test.
            </strong>
          </li>
          <li>
            <strong>
              Any movement away from your screen may result in immediate
              disqualification.
            </strong>
          </li>
          <li>
            <strong>
              Ensure you are in a quiet environment with minimal distractions.
            </strong>
          </li>
          <li>
            <strong>
              Do not use any unauthorized materials or devices during the test.
            </strong>
          </li>
          <li>
            <strong>
              The AI proctor will monitor your screen activity and behavior
              throughout the exam.
            </strong>
          </li>
          <li>
            <strong>
              If you encounter any issues, raise your hand to alert the proctor.
            </strong>
          </li>
        </ol>
        <p className="text-lg text-gray-300 text-center">
          <span className="text-red-400 font-bold">
            Failure to comply with these rules will result in disqualification.
          </span>
        </p>
        <div className="flex justify-center">
          <div className="mt-8 flex justify-center">
            <button
              onClick={() =>
                window.open("https://number-of-people-detection.vercel.app", "_blank")
              }
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300 shadow-md"
            >
              Try Out the Proctoring
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rules;
