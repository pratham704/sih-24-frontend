import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChalkboardTeacher, faLaptopCode, faBriefcase, faClipboardCheck, faLightbulb, faUserGraduate } from '@fortawesome/free-solid-svg-icons';

// Define course data as an array of objects
const courses = [
  {
    icon: faLaptopCode,
    category: "Technology",
    title: "Web Development Opportunities",
    description: "Explore current job openings in web development and learn the skills needed to succeed in this role.",
    duration: "12 hrs",
  },
  {
    icon: faBriefcase,
    category: "Career Development",
    title: "Preparing for Tech Interviews",
    description: "Master the techniques to ace technical interviews and secure your desired position in the tech industry.",
    duration: "15 hrs",
  },
  {
    icon: faChalkboardTeacher,
    category: "Interview Skills",
    title: "Interviewing for Senior Roles",
    description: "Understand the nuances of interviewing for senior positions and how to present your managerial expertise.",
    duration: "8 hrs",
  },
  {
    icon: faUserGraduate,
    category: "Personal Development",
    title: "Enhancing Soft Skills",
    description: "Develop communication and leadership skills to complement your technical abilities and excel in interviews.",
    duration: "10 hrs",
  },
  {
    icon: faClipboardCheck,
    category: "Assessment",
    title: "Mock Interviews and Feedback",
    description: "Participate in mock interviews with detailed feedback to improve your performance in real-world scenarios.",
    duration: "12 hrs",
  },
  {
    icon: faLightbulb,
    category: "Tech Innovation",
    title: "Latest Trends in Technology",
    description: "Stay updated with the latest trends and innovations in the tech world to boost your career prospects.",
    duration: "20 hrs",
  },
];

export default function Courses() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900 text-white">
      <div className="container px-4 md:px-6 space-y-12">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Explore Our Job-Oriented Courses
            </h2>
            <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              From web development to career growth and interview skills, our tailored courses help you prepare for exciting job opportunities.
            </p>
          </div>
        </div>
        <div className="mx-auto grid items-start gap-4 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
          {courses.map((course, index) => (
            <div key={index} className="group grid gap-4 rounded-lg bg-gray-800 p-6 shadow-lg transition-all hover:bg-gray-700 hover:shadow-xl">
              <div className="flex items-center justify-between">
                <FontAwesomeIcon icon={course.icon} className="h-8 w-8 text-blue-500" />
                <span className="rounded-full bg-blue-500 px-3 py-1 text-xs font-medium text-white">
                  {course.category}
                </span>
              </div>
              <h3 className="text-xl font-bold">{course.title}</h3>
              <p>{course.description}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faClipboardCheck} className="h-4 w-4 text-gray-400" />
                  <span className="text-sm text-gray-400">{course.duration}</span>
                </div>
                <Link
                  to="#"
                  className="inline-flex h-8 items-center justify-center rounded-md bg-blue-500 px-4 text-sm font-medium text-white shadow transition-colors hover:bg-blue-400"
                >
                  Apply Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
