import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { baseUrl } from "../../../api/BaseUrl";
import { useNavigate } from "react-router-dom";

const CourseCardSkeleton = () => {
  return (
    <div className="bg-gray-700 p-4 rounded-lg shadow animate-pulse">
      <div className="h-6 bg-gray-500 rounded mb-2"></div>
      <div className="h-4 bg-gray-500 rounded w-3/4"></div>
      <div className="h-4 bg-gray-500 rounded w-1/2 mt-2"></div>
      <button className="mt-2 px-4 py-2 bg-green-500 text-white rounded opacity-0">
        Continue
      </button>
    </div>
  );
};

const XPPointsSkeleton = () => {
  return (
    <div className="bg-gray-700 p-4 rounded-lg shadow animate-pulse">
      <h3 className="text-lg font-semibold text-white">XP Points</h3>
      <p className="text-purple-300 text-2xl">2400 XP</p>
    </div>
  );
};

const AchievementsSkeleton = () => {
  return (
    <div className="bg-gray-700 p-4 rounded-lg shadow animate-pulse">
      <h3 className="text-lg font-semibold text-white">Achievements</h3>
      <p className="text-gray-300">24 Badges</p>
    </div>
  );
};

const LearningActivityChartSkeleton = () => {
  return (
    <div className="bg-gray-700 p-4 rounded-lg shadow animate-pulse">
      <h3 className="text-lg font-semibold text-white mb-4">Learning Activity</h3>
      <div className="h-64 bg-gray-500 rounded"></div>
    </div>
  );
};

const YourClassSkeleton = () => {
  return (
    <div className="bg-gray-700 p-4 rounded-lg shadow animate-pulse">
      <h3 className="text-lg font-semibold text-white">Microprocessor Theory</h3>
      <p className="text-gray-300">Today at 10:00 AM</p>
      <button className="mt-2 px-4 py-2 bg-green-500 text-white rounded opacity-0">
        Join Class
      </button>
    </div>
  );
};

const HomeStudent = () => {
  const nav = useNavigate();
  const [courses, setCourses] = useState([]);
  const [XPPoints, setXPPoints] = useState(null);
  const [achievements, setAchievements] = useState(null);

  useEffect(() => {
    getProfile();
  }, []);

  const getProfile = async () => {
    try {
      const stdToken = localStorage.getItem("stdToken");

      const response = await axios.get(
        `${baseUrl}/api/profile/dashboard/students`,
        {
          headers: {
            Authorization: `Bearer ${stdToken}`,
          },
        }
      );

      const { courses, XPPoints, achievements } = response.data.content;

      setCourses(courses);
      setXPPoints(XPPoints);
      setAchievements(achievements);
    } catch (error) {
      console.error("Error fetching profile dashboard:", error);
    }
  };

  const data = [
    { name: "Mon", Hours: 4 },
    { name: "Tue", Hours: 3 },
    { name: "Wed", Hours: 5 },
    { name: "Thu", Hours: 2 },
    { name: "Fri", Hours: 4 },
    { name: "Sat", Hours: 6 },
    { name: "Sun", Hours: 3 },
  ];

  return (
    <div
      className="min-h-screen bg-gray-900 text-white p-6"
      // style={{
      //   backgroundImage:
      //     "linear-gradient(to left, #2D2D2D, #1E1E1E 50%, #2D2D2D)",
      // }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold">
            Hello, Arka{" "}
            <span role="img" aria-label="wave">
              👋
            </span>
          </h1>
          <img
            src="https://via.placeholder.com/150"
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />
        </div>

        {/* Today's Course */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4">Today's course</h2>
          <div className="grid grid-cols-2 gap-4">
            {courses.length > 0 ? (
              courses.slice(0, 2).map((course) => (
                <div
                  key={course.courseId}
                  className="bg-gray-800 p-4 rounded-lg shadow"
                >

                  <h3 className="text-lg font-semibold">{course.title}</h3>
                  <p className="text-gray-300">{course.rating} Rating</p>
                  <br />
                  <button
                    className="mt-2 px-4 py-2 bg-green-500 text-white rounded"
                    onClick={() => nav("/student/my-courses")}
                  >
                    Continue
                  </button>

                </div>
              ))
            ) : (
              <>
                <CourseCardSkeleton />
                <CourseCardSkeleton />
              </>
            )}
          </div>
        </div>

        {/* Stats and Learning Activity */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="col-span-1">
            {XPPoints ? (
              <div className="bg-gray-800 p-4 rounded-lg shadow mb-4">
                <h3 className="text-lg font-semibold">XP Points</h3>
                <p className="text-purple-300 text-2xl">{XPPoints} XP</p>
              </div>
            ) : (
              <XPPointsSkeleton />
            )}
            <br />
            {achievements ? (
              <div className="bg-gray-800 p-4 rounded-lg shadow">
                <h3 className="text-lg font-semibold">Achievements</h3>
                <p className="text-gray-300">{achievements} Badges</p>
              </div>
            ) : (
              <AchievementsSkeleton />
            )}
          </div>

          <div className="col-span-2">
            {data ? (
              <div className="bg-gray-800 p-4 rounded-lg shadow">
                <h3 className="text-lg font-semibold mb-4">Learning Activity</h3>
                <ResponsiveContainer width="100%" height={200}>
                  <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                    <XAxis dataKey="name" stroke="#fff" />
                    <YAxis stroke="#fff" />
                    <Tooltip contentStyle={{ backgroundColor: "#333" }} />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="Hours"
                      stroke="#8884d8"
                      activeDot={{ r: 8 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            ) : (
              <LearningActivityChartSkeleton />
            )}
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Your Class</h2>
          {courses.length > 0 ? (
            <div className="bg-gray-800 p-4 rounded-lg shadow">
              <h3 className="text-lg font-semibold">
                {courses[0].title}
              </h3>
              <p className="text-gray-300">Today at 10:00 AM</p>
              <button className="mt-2 px-4 py-2 bg-green-500 text-white rounded">
                Join Class
              </button>
            </div>
          ) : (
            <YourClassSkeleton />
          )}
        </div>
      </div>
    </div>
  );
};

export default HomeStudent;
