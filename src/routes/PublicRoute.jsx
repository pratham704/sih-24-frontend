// react modules imnport
import React from "react";

// packages import
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/lara-light-cyan/theme.css";

//pages import
import Login from "../pages/app/(auth)/Login";
import Register from "../pages/app/(auth)/Register";
import Sidebar from "../components/Sidebar";
import Dashboard from "../pages/app/dashboard/Dashboard";
import CodeEditor from "../pages/app/Editor/CodeEditor";
import Certificate from "../pages/app/certifications/Certificate";

const PublicRoute = () => {
  return (
    <PrimeReactProvider>
      <BrowserRouter>
        {window.location.pathname !== "/" &&
          window.location.pathname !== "/account/login" &&
          window.location.pathname !== "/account/register" && <Sidebar />}
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/account/login" element={<Login />} />
          <Route exact path="/account/register" element={<Register />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/student/code-editor" element={<CodeEditor />} />
          <Route exact path="/student/certificate" element={<Certificate />} />
        </Routes>
      </BrowserRouter>
    </PrimeReactProvider>
  );
};
export default PublicRoute;
