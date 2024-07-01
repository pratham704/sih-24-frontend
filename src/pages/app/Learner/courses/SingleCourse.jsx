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

const sections = [
  {
    title: "Section 1: Building Blocks",
    points: [
      {
        title: "1. Intro (3min)",
        video: "https://www.youtube.com/embed/30LWjhZzg50",
      },
      {
        title: "2. The Why (3min)",
        video: "https://www.youtube.com/embed/someVideoID2",
      },
      {
        title: "3. Side-Note about Perception (4min)",
        video: "https://www.youtube.com/embed/someVideoID3",
      },
      {
        title: "4. Take Out the Trash (3min)",
        video: "https://www.youtube.com/embed/someVideoID4",
      },
      {
        title: "5. Beliefs (5min)",
        video: "https://www.youtube.com/embed/someVideoID5",
      },
    ],
  },
  {
    title: "Section 2: Break Fear and Take Control of the Room",
    points: [
      {
        title: "1. Topic 1 (7min)",
        video: "https://www.youtube.com/embed/someVideoID6",
      },
      {
        title: "2. Topic 2 (7min)",
        video: "https://www.youtube.com/embed/someVideoID7",
      },
    ],
  },
  {
    title: "Section 3: What Really Matters",
    points: [
      {
        title: "1. Topic 1 (5min)",
        video: "https://www.youtube.com/embed/someVideoID8",
      },
      {
        title: "2. Topic 2 (5min)",
        video: "https://www.youtube.com/embed/someVideoID9",
      },
    ],
  },
  {
    title: "Section 4: Beyond the Basics ",
    points: [
      {
        title: "1. Topic 1 (6min)",
        video: "https://www.youtube.com/embed/someVideoID10",
      },
      {
        title: "2. Topic 2 (7min)",
        video: "https://www.youtube.com/embed/someVideoID11",
      },
    ],
  },
  {
    title: "Section 5: Mastering Communication",
    points: [
      {
        title: "1. Topic 1 (8min)",
        video: "https://www.youtube.com/embed/someVideoID12",
      },
      {
        title: "2. Topic 2 (9min)",
        video: "https://www.youtube.com/embed/someVideoID13",
      },
    ],
  },
];

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
