import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { Toast } from "primereact/toast";
               
export default function LandingPage() {
  const navigate = useNavigate();
  

  const toast = useRef(null);

  return (
    <>
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          paddingTop: "50px",
          backgroundImage:
            "url(https://media.istockphoto.com/id/1347616560/photo/a-view-of-the-fa%C3%A7ades-of-royce-hall-and-haines-hall-at-university-of-california-los-angeles.jpg?s=612x612&w=0&k=20&c=4vosGBb4ozEBntNcp0cQvk5rNuM_8wYbredw06rchlc=)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        <Toast ref={toast} position="top-right" />

        <div
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        ></div>
        <div
          style={{
            position: "relative",
            zIndex: 1,
            textAlign: "center",
            color: "#fff",
            padding: "20px",
          }}
        >
          <div
            style={{ maxWidth: "500px", margin: "0 auto", marginTop: "4rem" }}
          >
            <h1
              style={{
                fontSize: "2.5rem",
                fontWeight: "bold",
                marginBottom: "20px",
              }}
            >
              Hello there
            </h1>
            <p style={{ marginBottom: "20px" }}>
              A platform for students and teachers to connect and learn
              together. And manage their daily activities in the college in the
              most efficient way by tracking attendance and uploading notes and
              lesson plans. Integrated feature of sending SMS and emails.
            </p>
            <button
              style={{
                backgroundColor: "rgb(255 255 255 / 62%)",
                color: "#333",
                padding: "10px 20px",
                borderRadius: "5px",
                fontSize: "1rem",
                cursor: "pointer",
                marginBottom: "10px",
                display: "block",
                width: "100%",
                maxWidth: "300px",
                margin: "0 auto",
                border: "none",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", 
                transition: "transform 0.3s, box-shadow 0.3s", 
              }}
              onClick={() => navigate("/student/account/login")}
              onMouseEnter={(e) =>
                (e.target.style.transform = "translateY(-3px)")
              } 
              onMouseLeave={(e) => (e.target.style.transform = "translateY(0)")}
            >
              Get Started For Students
            </button>
            <br />
            <button
              style={{
                backgroundColor: "rgb(255 255 255 / 62%)",
                color: "#333",
                padding: "10px 20px",
                borderRadius: "5px",
                fontSize: "1rem",
                cursor: "pointer",
                display: "block",
                width: "100%",
                maxWidth: "300px",
                margin: "0 auto",
                border: "none",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.3s, box-shadow 0.3s",
              }}
              onClick={() => navigate("/student/account/login")}
              onMouseEnter={(e) =>
                (e.target.style.transform = "translateY(-3px)")
              }
              onMouseLeave={(e) => (e.target.style.transform = "translateY(0)")}
            >
              Get Started For Instructor
            </button>
          </div>
        </div>
      </div>
    </>
  );
}