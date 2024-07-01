import React from "react";
import { useState } from "react";
import { courses } from "../../../../utils/data/courses.data";
import { useNavigate } from "react-router-dom";

const ExploreCourses = () => {
  const nav = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div
        style={{
          width: "100%",
          minHeight: "100vh",
            background: "linear-gradient(to left, #FFFFFF, #B4E1FF, #C7D2FE)",
        }}
        className="p-4"
      >
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-4">
            <div className="w-full md:w-3/4 lg:w-2/3">
              <h1 className="text-2xl font-bold">Courses</h1>
            </div>
            <div className="w-full md:w-1/4 lg:w-1/3 flex justify-end">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search courses by title"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="p-2 pl-10 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out"
                />
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <i className="pi pi-search" style={{ color: "slateblue" }}></i>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredCourses.map((course, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden border border-gray-200 border-opacity-60 shadow-md hover:shadow-lg cursor-pointer"
                onClick={() => nav(`/student/explore-courses/${course.courseId}`)}
              >
                <img
                  className="h-48 w-full object-cover"
                  src={course.imgSrc}
                  alt="course"
                />
                <div className="p-4">
                  <h2 className="text-lg font-medium text-gray-900 mb-2">
                    {course.title}
                  </h2>
                  <p className="text-sm text-gray-700 mb-2">
                    Instructor: {course.instructor}
                  </p>
                  <p className="text-sm text-gray-700 mb-2">
                    Rating: {course.rating} ({course.reviews} reviews)
                  </p>
                  <p className="text-sm text-gray-700 mb-2">Price: {course.price}</p>
                  {course.bestseller && (
                    <span className="inline-block bg-yellow-500 text-white px-2 py-1 rounded text-xs font-medium">
                      Bestseller
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ExploreCourses;
