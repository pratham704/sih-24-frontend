import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChalkboardTeacher, faLaptopCode, faBriefcase, faClipboardCheck, faLightbulb, faUserGraduate } from '@fortawesome/free-solid-svg-icons';

const jobOpportunities = [
  {
    icon: faLaptopCode,
    category: "Technology",
    title: "Front-End Developer",
    description: "Join our team as a Front-End Developer and work on cutting-edge web applications using the latest technologies.",
    duration: "Full-time",
  },
  {
    icon: faBriefcase,
    category: "Career Development",
    title: "Technical Project Manager",
    description: "Lead our technical projects and drive innovation by managing project timelines, resources, and teams effectively.",
    duration: "Full-time",
  },
  {
    icon: faChalkboardTeacher,
    category: "Leadership",
    title: "Senior Software Engineer",
    description: "Take on a leadership role as a Senior Software Engineer, guiding and mentoring junior developers while working on high-impact projects.",
    duration: "Full-time",
  },
  {
    icon: faUserGraduate,
    category: "Entry Level",
    title: "Junior Data Analyst",
    description: "Kickstart your career as a Junior Data Analyst, working with data sets to extract insights and support decision-making processes.",
    duration: "Full-time",
  },
  {
    icon: faClipboardCheck,
    category: "Assessment",
    title: "UX/UI Designer",
    description: "Shape user experiences and interfaces as a UX/UI Designer, collaborating with cross-functional teams to deliver user-centric designs.",
    duration: "Contract",
  },
  {
    icon: faLightbulb,
    category: "Innovation",
    title: "Product Manager",
    description: "Drive product innovation and strategy as a Product Manager, overseeing the development and launch of new products.",
    duration: "Full-time",
  },
];

export default function JobOpportunities() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900 text-white">
      <div className="container px-4 md:px-6 space-y-12">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Explore Job Opportunities at Our Company
            </h2>
            <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Discover exciting career opportunities across various domains and join our team to make an impact.
            </p>
          </div>
        </div>
        <div className="mx-auto grid items-start gap-4 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
          {jobOpportunities.map((job, index) => (
            <div key={index} className="group grid gap-4 rounded-lg bg-gray-800 p-6 shadow-lg transition-all hover:bg-gray-700 hover:shadow-xl h-[350px] flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <FontAwesomeIcon icon={job.icon} className="h-8 w-8 text-blue-500" />
                <span className="rounded-full bg-blue-500 px-3 py-1 text-xs font-medium text-white">
                  {job.category}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-2">{job.title}</h3>
              <p className="flex-1 mb-4">{job.description}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faClipboardCheck} className="h-4 w-4 text-gray-400" />
                  <span className="text-sm text-gray-400">{job.duration}</span>
                </div>
                <Link
                  to="/student/upload"
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
