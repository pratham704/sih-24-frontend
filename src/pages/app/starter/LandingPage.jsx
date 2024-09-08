import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Toast } from "primereact/toast";

export default function LandingPage() {
  const navigate = useNavigate();
  const toast = useRef(null);

  useEffect(() => {
    const stdToken = localStorage.getItem("stdToken");
    const instructToken = localStorage.getItem("instructToken");

    if (stdToken) {
      navigate("/student/dashboard");
    }

    if (instructToken) {
      navigate("/instructor/dashboard");
    }
  }, [navigate]);

  return (
    <>
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundImage:
            "url(https://media.istockphoto.com/id/1347616560/photo/a-view-of-the-fa%C3%A7ades-of-royce-hall-and-haines-hall-at-university-of-california-los-angeles.jpg?s=612x612&w=0&k=20&c=4vosGBb4ozEBntNcp0cQvk5rNuM_8wYbredw06rchlc=)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          textAlign: "center",
          color: "#fff",
          padding: "0 20px",
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
            zIndex: 1,
          }}
        ></div>

        <div
          style={{
            position: "relative",
            zIndex: 2,
            maxWidth: "600px",
            margin: "0 auto",
            textAlign: "center",
            color: "#fff",
            padding: "20px",
          }}
        >
          <h1
            style={{
              fontSize: "3rem",
              fontWeight: "700",
              marginBottom: "20px",
              lineHeight: "1.2",
            }}
          >
            Welcome to Our Platform
          </h1>
          <p
            style={{
              fontSize: "1.2rem",
              marginBottom: "40px",
              lineHeight: "1.6",
            }}
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima
            eaque culpa rem, ex quas optio maxime praesentium et, porro
            voluptatum distinctio explicabo quos provident tempora dolor libero
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
              (e.target.style.transform = "translateY(-4px)")
            }
            onMouseLeave={(e) => (e.target.style.transform = "translateY(0)")}
          >
            Get Started for Students
          </button>
        </div>
      </div>
    </>
  );
}
