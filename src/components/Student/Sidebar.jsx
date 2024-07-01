import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const nav = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isScrollTopVisible, setIsScrollTopVisible] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 20) {
      setIsScrollTopVisible(true);
    } else {
      setIsScrollTopVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const divStyles = {
    backgroundColor: "#718096",
    padding: "10px 20px",
    borderRadius: "8px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    cursor: "pointer",
  };

  return (
    <>
      <div style={{ position: "relative" }}>
        <input
          id="my-drawer"
          type="checkbox"
          style={{ display: "none" }}
          checked={isSidebarOpen}
          onChange={toggleSidebar}
        />
        <div
          style={{
            position: "absolute",
            zIndex: "100",
          }}
        >
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            style={{
              position: "fixed",
              width: "100vw",
              height: "100vh",
              top: "0",
              left: "0",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              display: isSidebarOpen ? "block" : "none",
            }}
          ></label>
          <ul
            style={{
              position: "fixed",
              top: "0",
              left: isSidebarOpen ? "0" : "-320px",
              width: "320px",
              height: "100vh",
              backgroundColor: "#4b5563",
              padding: "20px",
              transition: "left 0.3s ease-in-out",
              zIndex: "101",
            }}
          >
            <li
              style={{
                marginBottom: "20px",
                cursor: "pointer",
              }}
              onClick={toggleSidebar}
            >
              <div
                style={divStyles}
                onClick={() => nav("/student/dashboard")}
              >
                <h3 style={{ color: "#fff" }}>Home</h3>
              </div>
              <br />
              <div
                style={divStyles}
                onClick={() => nav("/student/code-editor")}
              >
                <h3 style={{ color: "#fff" }}>Practice mode</h3>
              </div>


              <br />
              <div
                style={divStyles}
                onClick={() => nav("/student/my-courses")}
              >
                <h3 style={{ color: "#fff" }}>My courses</h3>
              </div>
           
              <br />
              <div
                style={divStyles}
                onClick={() => nav("/student/explore-courses")}
              >
                <h3 style={{ color: "#fff" }}>Explore courses</h3>
              </div>

              <br />

              <div
                style={divStyles}
                onClick={() => nav("/student/generic/project")}
              >
                <h3 style={{ color: "#fff" }}>Profile</h3>
              </div>
              <div
                style={{
                  backgroundColor: "rgb(232 51 86 / 68%)",
                  padding: "10px 20px",
                  borderRadius: "8px",
                  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                  position: "absolute",
                  bottom: "2rem",
                  right: "1rem",
                  width: "90%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                // onClick={handleLogout}
              >
                <h3 style={{ color: "#fff" }}>Logout</h3>
              </div>
              <br />
            </li>
          </ul>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#1a202c",
          padding: "10px 20px",
          zIndex: "102",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div style={{ flex: "1" }}>
          <label htmlFor="my-drawer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              style={{
                width: "24px",
                height: "24px",
                color: "#fff",
                cursor: "pointer",
              }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>
        </div>
        <div style={{ flex: "1", textAlign: "center" }}>
          <h1
            style={{
              color: "#fff",
              textShadow: "0px 2px 2px rgba(0, 0, 0, 0.2)",
              fontSize: "24px",
              fontFamily: "Arial, sans-serif",
            }}
          >
            Workflow
          </h1>
        </div>
        <div style={{ flex: "1", textAlign: "right" }}>
          <button
            // onClick={handleLogout}
            style={{
              background:
                "linear-gradient(330deg, rgb(65, 64, 84) 0%, rgb(255 0 0))",
              padding: "8px 16px",
              borderRadius: "3px",
              border: "none",
              cursor: "pointer",
              color: "#fff",
              fontWeight: "bold",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              opacity: "0.9",
              fontSize: "14px",
            }}
          >
            Logout
          </button>
        </div>
      </div>

      {isScrollTopVisible && (
        <button
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            backgroundColor: "#1a202c",
            color: "#fff",
            border: "none",
            padding: "10px",
            borderRadius: "50%",
            cursor: "pointer",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            zIndex: "103",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            style={{ width: "24px", height: "24px" }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 15l7-7 7 7"
            />
          </svg>
        </button>
      )}
    </>
  );
}
