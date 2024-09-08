import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faEnvelope, faUser } from "@fortawesome/free-solid-svg-icons";
import { faGoogle, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import { baseUrl } from "../../../../api/BaseUrl";
import { Toast } from "primereact/toast";
import SkeletonLogin from "../../../../components/Skleton/SkeletonLogin";
import { RegisterValidator } from "../../../../utils/Validators/auth.validatoions";

import { motion } from "framer-motion"; // Import Framer Motion

export default function Register() {
  const toast = useRef(null);
  const nav = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [isloading, setisloading] = useState(false);

  const onCaptchaChange = (value) => {
    setCaptchaVerified(!!value);
  };

  const Validate = async () => {
    const validationMessage = RegisterValidator(name, email, password);

    if (validationMessage) {
      toast.current.show({
        severity: "info",
        summary: "Validation Error",
        detail: validationMessage,
        life: 3000,
      });
      return false;
    }

    if (!captchaVerified) {
      toast.current.show({
        severity: "warn",
        summary: "Warning",
        detail: "Please complete the reCAPTCHA verification.",
        life: 3000,
      });
      return false;
    }

    return true;
  };

  const HandleRegister = async () => {
    const isValid = await Validate();

    if (!isValid) {
      return;
    }

    setisloading(true);

    try {
      const response = await fetch(`${baseUrl}/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      if (!response.ok) {
        throw new Error("Registration failed");
      }

      const data = await response.json();

      if (data.success) {
        nav("/student/dashboard");
      } else {
        throw new Error("Registration failed");
      }
    } catch (error) {
      console.error("Registration error:", error);
      toast.current.show({
        severity: "error",
        summary: "Error",
        detail: "Registration failed. Please try again.",
        life: 3000,
      });
    } finally {
      setisloading(false);
    }
  };

  const formVariant = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  const buttonVariant = {
    hover: { scale: 1.1, boxShadow: "0px 0px 8px rgba(255, 255, 255, 0.6)" },
    tap: { scale: 0.9 },
  };

  return (
    <>
      {isloading ? (
        <>
          <SkeletonLogin />
        </>
      ) : (
        <div className="relative flex items-center justify-center min-h-screen bg-gray-900 text-white">
          {/* Top right toggle button */}
          <Toast ref={toast} />

          <button
            onClick={() => nav("/student/account/login")}
            className="absolute top-4 right-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300 shadow-lg"
          >
            Already a member? Login
          </button>

          <motion.div
            className="flex flex-col items-center w-full max-w-sm sm:max-w-md md:max-w-lg mx-4 bg-gray-800 rounded-lg overflow-hidden shadow-lg p-6 sm:p-8"
            initial="hidden"
            animate="visible"
            variants={formVariant}
            transition={{ duration: 0.5 }}
          >
            {/* Register form */}
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Register</h2>
            <div className="w-full mb-4">
              <div className="flex items-center border-b border-gray-600 py-2">
                <FontAwesomeIcon icon={faUser} className="text-gray-400 mr-3" />
                <input
                  type="text"
                  className="bg-gray-800 text-white outline-none w-full py-2 px-4"
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>
            <div className="w-full mb-4">
              <div className="flex items-center border-b border-gray-600 py-2">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-gray-400 mr-3"
                />
                <input
                  type="email"
                  className="bg-gray-800 text-white outline-none w-full py-2 px-4"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="w-full mb-6">
              <div className="flex items-center border-b border-gray-600 py-2">
                <FontAwesomeIcon icon={faLock} className="text-gray-400 mr-3" />
                <input
                  type="password"
                  className="bg-gray-800 text-white outline-none w-full py-2 px-4"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="w-full mb-6">
              <ReCAPTCHA
                sitekey={process.env.REACT_APP_CAPTCHA_SITE_KEY}
                onChange={onCaptchaChange}
                theme="dark"
              />
            </div>

            <motion.button
              onClick={HandleRegister}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg  duration-300 shadow-md hover:shadow-lg w-full"
              whileHover={buttonVariant.hover}
              whileTap={buttonVariant.tap}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Register
            </motion.button>

            <motion.p
              className="mt-6 text-center text-gray-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Already have an account?{" "}
              <span
                className="text-blue-400 cursor-pointer"
                onClick={() => nav("/student/account/login")}
              >
                Sign In
              </span>
            </motion.p>
          </motion.div>
        </div>
      )}
    </>
  );
}
