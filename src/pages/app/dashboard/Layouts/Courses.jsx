import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faCode, faBrush, faClock, faBriefcase, faLightbulb, faPalette } from '@fortawesome/free-solid-svg-icons';

// Define course data as an array of objects
const courses = [
  {
    icon: faBook,
    category: "Business",
    title: "Introduction to Marketing",
    description: "Explore the fundamentals of marketing and learn effective strategies to promote your business.",
    duration: "12 hrs",
  },
  {
    icon: faCode,
    category: "Technology",
    title: "Web Development Fundamentals",
    description: "Learn the essential skills to build modern, responsive websites from scratch.",
    duration: "24 hrs",
  },
  {
    icon: faBrush,
    category: "Creative",
    title: "Graphic Design Essentials",
    description: "Unlock your creative potential and learn the fundamentals of graphic design.",
    duration: "18 hrs",
  },
  {
    icon: faBriefcase,
    category: "Business",
    title: "Entrepreneurship Essentials",
    description: "Gain the knowledge and skills to turn your business idea into a successful venture.",
    duration: "20 hrs",
  },
  {
    icon: faLightbulb,
    category: "Personal Development",
    title: "Mindfulness and Meditation",
    description: "Discover the transformative power of mindfulness and learn effective meditation techniques.",
    duration: "15 hrs",
  },
  {
    icon: faPalette,
    category: "Creative",
    title: "Photography Fundamentals",
    description: "Unlock your creative potential and learn the art of photography.",
    duration: "22 hrs",
  },
];

export default function Courses() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900 text-white">
      <div className="container px-4 md:px-6 space-y-12">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Explore Our Diverse Course Offerings
            </h2>
            <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              From business and technology to personal development and creative arts, our online courses cater to a wide range of interests and skill levels.
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
                  <FontAwesomeIcon icon={faClock} className="h-4 w-4 text-gray-400" />
                  <span className="text-sm text-gray-400">{course.duration}</span>
                </div>
                <Link
                  to="#"
                  className="inline-flex h-8 items-center justify-center rounded-md bg-blue-500 px-4 text-sm font-medium text-white shadow transition-colors hover:bg-blue-400"
                >
                  Enroll
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
