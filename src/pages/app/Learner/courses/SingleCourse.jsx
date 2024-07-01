import React, { useState } from "react";
import {
  FaRegSquare,
  FaStar,
  FaUserGraduate,
  FaClock,
  FaBook,
  FaFilm,
  FaPlayCircle,
} from "react-icons/fa";
import Instructor from "./components/Instructor";
import { useParams } from "react-router-dom";
import { courses } from "../../../../utils/data/courses.data";
import { sections } from "../../../../utils/data/section.data";

const SingleCourse = () => {
  const { myCourseId } = useParams();
  const data = courses.find(
    (course) => course.courseId === parseInt(myCourseId)
  );

  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <div className="flex flex-col sm:flex-row">
        {/* Main content */}
        <div className="sm:w-full lg:w-3/4 p-4 flex flex-col items-center">
          {selectedVideo ? (
            <iframe
              width="100%"
              height="500px"
              src={selectedVideo}
              title="Course content"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : (
            <div className="w-full h-500 flex items-center justify-center bg-gray-700">
              <img src={data.imgSrc} alt="" />
            </div>
          )}

          <br />
          <br />
          <div className="mt-4 text-center">
            <h1 className="text-2xl font-bold mb-2">
              {data.title}
              Learn to quickly connect with crowds of strangers, be better on
              dates or ace that job interview.
            </h1>
            <p className="text-sm text-gray-400 mb-4">
              Last updated March 2016 • English • English [Auto]
            </p>
            <div className="flex justify-center space-x-4">
              <span className="flex items-center space-x-1 text-yellow-400">
                <FaStar />
                <span>4.4</span>
              </span>
              <span className="flex items-center space-x-1">
                <FaUserGraduate />
                <span>323,729 students</span>
              </span>
              <span className="flex items-center space-x-1">
                <FaClock />
                <span>1 hour total</span>
              </span>
            </div>
          </div>
        </div>

        <div
          className="sm:w-full lg:w-1/4 bg-gray-800 p-4 overflow-y-auto custom-scrollbar"
          style={{
            height: "100vh",
            marginTop: "1rem",
            scrollbarWidth: "thin", // For Firefox
            scrollbarColor: "rgba(155, 155, 155, 0.5) rgba(0, 0, 0, 0.1)", // For Chrome and Edge
          }}
        >
          <h2 className="text-xl font-bold mb-4 flex items-center">
            <FaBook className="mr-2" /> Course content
          </h2>
          <div className="space-y-4">
            {sections.map((section, index) => (
              <div key={index}>
                <h3 className="text-lg font-semibold flex items-center">
                  <FaFilm className="mr-2" /> {section.title}
                </h3>
                <ul className="ml-4 mt-2 space-y-2">
                  {section.points.map((point, idx) => (
                    <li
                      key={idx}
                      className="flex items-center space-x-2 cursor-pointer hover:bg-gray-700 p-2 rounded"
                      onClick={() => setSelectedVideo(point.video)}
                    >
                      <FaPlayCircle className="text-gray-400" />
                      <span>{point.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <br />
      <Instructor />
      <br />
      <br />
    </div>
  );
};

export default SingleCourse;
