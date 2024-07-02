import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { baseUrl } from "../../../api/BaseUrl";

const MyPrograms = () => {
  const [mycourses, setMycourses] = useState(null);

  const getMycourses = async () => {
    try {
      const stdToken = localStorage.getItem("instToken");
      const response = await axios.get(`${baseUrl}/api/courses/instructors`, {
        headers: {
          Authorization: `Bearer ${stdToken}`,
        },
      });
      setMycourses(response.data);
    } catch (error) {
      console.error("Error fetching course data:", error);
    }
  };

  useEffect(() => {
    getMycourses();
  }, []);

  const nav = useNavigate();

  return (
    <div className="bg-gray-900 min-h-screen p-8 text-white">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">My Courses</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {mycourses ? (
            mycourses.map((course, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105"
              >
                <img
                  src={course.imgSrc}
                  alt={course.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6 pb-8 relative">
                  <h2 className="text-2xl font-bold mb-2 truncate">
                    {course.title}
                  </h2>
                  <p className="text-gray-400 mb-2">{course.instructor}</p>
                  <div className="flex items-center mb-2">
                    {course.bestseller && (
                      <span className="bg-yellow-500 text-black px-2 py-1 text-xs font-semibold mr-2 rounded">
                        Bestseller
                      </span>
                    )}
                    <span className="text-lg font-semibold">
                      {course.rating}
                    </span>
                    <span className="text-sm text-gray-400 ml-2">
                      ({course.reviews} reviews)
                    </span>
                  </div>
                  <div className="text-lg font-bold mb-2">Details</div>
                  <button
                  
                    className="w-full bg-purple-600 text-white py-3 rounded-md flex justify-center items-center gap-2 transition-colors hover:bg-purple-700"
                  >

                    Details
       
                  </button>
                  <br />
                  <div className="absolute bottom-0 right-0 bg-gray-700 text-white px-4 py-2 rounded-tl-lg">
                    {/* Valid till {course.expiry} */}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyPrograms;
