import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Chip } from "@mui/material";
import { IoSearchOutline } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { Check } from "@mui/icons-material";
import Roadmap from "./components/Roadmap";
import { roadmaps, interests } from "../../../../utils/data/roadmap.data";
import { baseUrl } from "../../../../api/BaseUrl";

const ExploreCourses = () => {
  const nav = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedInterests, setSelectedInterests] = useState([]);
  const [showCourses, setShowCourses] = useState(false);
  const [showRoadmap, setShowRoadmap] = useState(true);
  const [courses, setCourses] = useState(null);

  const filteredCourses = courses
    ? courses.filter((course) =>
        course.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  const toggleInterest = (interest) => {
    setSelectedInterests((prev) =>
      prev.includes(interest)
        ? prev.filter((item) => item !== interest)
        : [...prev, interest]
    );
  };

  const startExploring = () => {
    if (selectedInterests.length === 0) {
      alert("You haven't chosen any interests.");
      return;
    }
    setShowCourses(true);
  };

  const skipRoadmap = () => {
    setShowRoadmap(false);
    setShowCourses(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const skipInterests = () => {
    setSelectedInterests([]);
    setShowCourses(true);
  };

  const getCourses = async () => {
    try {
      const token = localStorage.getItem('stdToken');
      const response = await fetch(`${baseUrl}/api/courses`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      
      const data = await response.json();
      setCourses(data);
    } catch (error) {
      console.error('Error fetching courses:', error);
    }
  };
  
  useEffect(() => {
    getCourses();
  }, []);

  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        background: "linear-gradient(to left, #FFFFFF, #B4E1FF, #C7D2FE)",
      }}
      className="p-4"
    >
      <div className="">
        {!showCourses ? (
          <div
            className="flex flex-col items-center min-h-screen"
            style={{
              marginTop: "3rem",
            }}
          >
            <h1 className="text-4xl font-extrabold text-gray-800 mb-8">
              What are your interests?
            </h1>
            <div className="flex flex-wrap justify-center mb-8">
              {interests.map((interest) => (
                <motion.div
                  key={interest}
                  className="m-2 cursor-pointer"
                  onClick={() => toggleInterest(interest)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Chip
                    label={interest}
                    className={`p-2 text-lg ${
                      selectedInterests.includes(interest)
                        ? "bg-blue-600 text-white"
                        : "bg-gray-300 text-gray-800"
                    }`}
                    icon={
                      selectedInterests.includes(interest) ? (
                        <Check style={{ color: "blue" }} />
                      ) : null
                    }
                  />
                </motion.div>
              ))}
            </div>
            <div className="flex space-x-4">
              <Button
                variant="outlined"
                onClick={startExploring}
                className="p-3 text-lg border-blue-500 text-blue-500"
              >
                Explore based on your interests
              </Button>

              <Button
                variant="outlined"
                color="secondary"
                onClick={skipInterests}
                className="p-3 text-lg"
              >
                Skip
              </Button>
            </div>
          </div>
        ) : (
          <>
            {showRoadmap && (
              <>
                <div className="flex justify-center items-center mb-8">
                  <Roadmap
                    selectedInterests={selectedInterests}
                    roadmaps={roadmaps}
                  />
                </div>
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={skipRoadmap}
                  className="p-3 text-lg"
                >
                  Next
                </Button>
              </>
            )}
            {!showRoadmap && (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredCourses.map((course, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-lg overflow-hidden border border-gray-200 border-opacity-60 shadow-md hover:shadow-lg cursor-pointer"
                    onClick={() =>
                      nav(`/student/explore-courses/${course.courseId}`)
                    }
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
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
                      <p className="text-sm text-gray-700 mb-2">
                        Price: {course.price}
                      </p>
                      {course.bestseller && (
                        <span className="inline-block bg-yellow-500 text-white px-2 py-1 rounded text-xs font-medium">
                          Bestseller
                        </span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
            <div className="flex justify-center mt-8"></div>
          </>
        )}
      </div>
    </div>
  );
};

export default ExploreCourses;
