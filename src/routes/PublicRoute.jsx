// react modules imnport
import React from "react";

// packages import
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "primeicons/primeicons.css";

//pages import
import Forum from "../pages/app/Forum/Forum";
import Sidebar from "../components/Student/Sidebar";
import Dashboard from "../pages/app/dashboard/Dashboard";
import CodeEditor from "../pages/app/Editor/CodeEditor";
import Certificate from "../pages/app/certifications/Certificate";
import LandingPage from "../pages/app/starter/LandingPage";
import ExploreCourses from "../pages/app/Learner/courses/ExploreCourses";
import CourseDetails from "../pages/app/Learner/courses/CourseDetails";
import MyCourses from "../pages/app/Learner/courses/MyCourses";
import SingleCourse from "../pages/app/Learner/courses/SingleCourse";
import Register from "../pages/app/(auth)/Learner/Register";
import Login from "../pages/app/(auth)/Learner/Login";
import HomeStudent from "../pages/app/Learner/HomeStudent";
import Candidate from "../Proctor/Candidate";
import Proctor from "../Proctor/Proctor";
import NotFound from "../components/NotFound/NotFound";
import NoPerson from "../Proctor/NoPerson";
import Eye from "../Proctor/Eye";

import SIngleThread from "../pages/app/Forum/SIngleThread";
const PublicRoute = () => {
  return (
    <PrimeReactProvider>
      <BrowserRouter>
        {/* {!["/", "/student/account/login", "/student/account/register"].includes(
          window.location.pathname
        ) && <Sidebar />} */}
        <Routes>
          <Route exact path="/" element={<LandingPage />} />

          <Route path="*" element={<NotFound />} />

          {/* student */}
          <Route exact path="/student/account/login" element={<Login />} />
          <Route
            exact
            path="/student/account/register"
            element={<Register />}
          />
          <Route
            exact
            path="/student/dashboard"
            element={
              <>
                <Sidebar />
                <Dashboard />
              </>
            }
          />
          <Route
            exact
            path="/student/code-editor"
            element={
              <>
                <Sidebar />
                <CodeEditor />
              </>
            }
          />
          <Route
            exact
            path="/student/certificate"
            element={
              <>
                <Sidebar />
                <Certificate />
              </>
            }
          />
          <Route
            exact
            path="/student/explore-courses"
            element={
              <>
                <Sidebar />
                <ExploreCourses />
              </>
            }
          />
          <Route
            exact
            path="/student/explore-courses/:id"
            element={
              <>
                <Sidebar />
                <CourseDetails />
              </>
            }
          />
          <Route
            exact
            path="/student/my-courses"
            element={
              <>
                <Sidebar />
                <MyCourses />
              </>
            }
          />
          <Route
            exact
            path="/student/my-courses/:myCourseId"
            element={
              <>
                <Sidebar />
                <SingleCourse />
              </>
            }
          />
          <Route
            exact
            path="/student/home"
            element={
              <>
                <Sidebar />
                <HomeStudent />
              </>
            }
          />

          {/* // PROCTORING */}
          <Route
            exact
            path="/candidate"
            element={
              <>
                <Candidate />
              </>
            }
          />
          <Route
            exact
            path="/proctor"
            element={
              <>
                <Proctor />
              </>
            }
          />

          <Route
            exact
            path="/no-person"
            element={
              <>
                <NoPerson />
              </>
            }
          />

          <Route
            exact
            path="/eye"
            element={
              <>
                <Eye />
              </>
            }
          />

          {/* Forum  */}

          <Route
            exact
            path="/forum"
            element={
              <>
                {/* <SidebarInstructor />
                <InstructorHome /> */}
                <Sidebar />
                <Forum />
              </>
            }
          />
          <Route
            exact
            path="/forum/:id"
            element={
              <>
                {/* <SidebarInstructor />
                <InstructorHome /> */}
                <Sidebar />

                <SIngleThread />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </PrimeReactProvider>
  );
};
export default PublicRoute;
