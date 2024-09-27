import React, { useEffect, useRef  , useState} from "react";
import { useNavigate } from "react-router-dom";
import { Toast } from "primereact/toast";

export default function LandingPage() {
  const [isloggedIn, setisloggedIn] = useState(false)
  const navigate = useNavigate();
  const toast = useRef(null);

  useEffect(() => {
    const userEmail = localStorage.getItem('userEmail');
    
    if (userEmail ) {
      // console.log('User Email:', userEmail);
      setisloggedIn(true)
    }
  }, []); 

  
  useEffect(() => {
    const stdToken = localStorage.getItem("stdToken");
    const instructToken = localStorage.getItem("instructToken");

    if (stdToken) {
      // navigate("/student/dashboard");
    }

    if (instructToken) {
      // navigate("/instructor/dashboard");
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
            "url(https://i.ibb.co/Qf9fNsB/Premium-Vector-A-trip-to-the-mountains-by-car-on-a-warm-summer-evening.jpg)",
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
            Hiring Made Easy Careers Made Great Shreshth{" "}
          </h1>
          <p
            style={{
              fontSize: "1.2rem",
              marginBottom: "40px",
              lineHeight: "1.6",
            }}
          >
            Shreshth bridges the gap between exceptional talent and great
            opportunities. Our platform makes job searching and hiring
            straightforward and efficient. Find your ideal job or candidate with
            ease on Shreshth."
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

          {isloggedIn?<>Welcome Back </>:<>Get Started</>}
          </button>
        </div>
      </div>
    </>
  );
}
