import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGoogle, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faCheckCircle, faUserShield } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import { baseUrl } from "../../../../api/BaseUrl";
import { Toast } from "primereact/toast";
import { SigninValidator } from "../../../../utils/Validators/auth.validatoions";

import { motion } from "framer-motion"; // Import Framer Motion

export default function Login() {
  const toast = useRef(null);

  const nav = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [showSignIn, setShowSignIn] = useState(true); // State to toggle between Sign In and Get Started

  const onCaptchaChange = (value) => {
    setCaptchaVerified(!!value);
  };

  const Validate = async () => {
    const validationMessage = SigninValidator(email, password);

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

  const HandleSignin = async () => {
    const isValid = await Validate();

    if (!isValid) {
      return;
    }

    try {
      const response = await fetch(`${baseUrl}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Authentication failed");
      }

      const data = await response.json();

      if (data.success) {
        localStorage.setItem("stdToken", data.content.token);
        nav("/student/dashboard");
      } else {
        throw new Error("Authentication failed");
      }
    } catch (error) {
      console.error("Authentication error:", error);
      toast.current.show({
        severity: "error",
        summary: "Error",
        detail: "Authentication failed. Please check your credentials.",
        life: 3000,
      });
    }
  };

  const formVariant = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  const textVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.2 } },
  };

  const buttonVariant = {
    hover: { scale: 1.1, boxShadow: "0px 0px 8px rgb(255, 255, 255)" },
    tap: { scale: 0.9 },
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gray-900 text-white">
      {/* Top right toggle button */}
      <Toast ref={toast} />

      <button
        onClick={() => setShowSignIn(!showSignIn)}
        className="absolute top-4 right-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
      >
        {showSignIn ? "Get Started" : "Sign In"}
      </button>

      <motion.div
        className="flex flex-col items-center w-full max-w-sm sm:max-w-md md:max-w-lg mx-4 bg-gray-800 rounded-lg overflow-hidden shadow-lg p-6 sm:p-8"
        initial="hidden"
        animate="visible"
        variants={formVariant}
        transition={{ duration: 0.5 }}
        key={showSignIn ? "SignIn" : "GetStarted"}
      >
        {showSignIn ? (
          <>
            {/* Sign In form */}
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Sign In</h2>
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
            <div className="flex items-start justify-start w-full mb-6">
              <input
                type="checkbox"
                id="rememberMe"
                className="h-5 w-5 text-blue-600 bg-gray-800 border-gray-600 focus:ring-blue-500 rounded mr-2"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <label htmlFor="rememberMe" className="text-gray-400 text-sm">
                Remember Me
              </label>
            </div>

            <button
              onClick={HandleSignin}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition duration-300 shadow-md hover:shadow-lg w-full"
            >
              Sign In
            </button>
            <p className="mt-4 text-center text-gray-400">or</p>
            <p className="text-center mt-2 text-gray-400">Sign in with</p>
            <div className="flex justify-center mt-4 space-x-4">
              <h1
                href="#"
                className="text-gray-400 hover:text-white transition duration-300"
                onClick={() => alert("Working on it")}
              >
                <FontAwesomeIcon icon={faGoogle} size="lg" />
              </h1>
              <h1
                href="#"
                className="text-gray-400 hover:text-white transition duration-300"
                onClick={() => alert("Working on it")}
              >
                <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
              </h1>
            </div>
          </>
        ) : (
          <>
            {/* Get Started form */}
            <motion.h2
              className="text-3xl sm:text-4xl font-bold mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              Get Started with Us!
            </motion.h2>

            <motion.p
              className="text-gray-300 text-center mb-6"
              variants={textVariant}
              initial="hidden"
              animate="visible"
            >
              Join our platform and unlock exclusive benefits to fast-track your
              success.
            </motion.p>

            {/* Key Benefits Section */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <motion.div
                className="flex items-center space-x-4 p-4 bg-gray-700 rounded-lg"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="text-green-400"
                  size="2x"
                />
                <div>
                  <h3 className="text-lg font-semibold">Easy Registration</h3>
                  <p className="text-gray-400 text-sm">
                    Quick and simple sign-up process.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center space-x-4 p-4 bg-gray-700 rounded-lg"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                <FontAwesomeIcon
                  icon={faUserShield}
                  className="text-blue-400"
                  size="2x"
                />
                <div>
                  <h3 className="text-lg font-semibold">Secure & Private</h3>
                  <p className="text-gray-400 text-sm">
                    Your data and privacy are protected.
                  </p>
                </div>
              </motion.div>
            </div>

            <motion.button
              onClick={() => nav("/student/account/register")} // Navigate to registration page
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition duration-300 shadow-md hover:shadow-lg w-full"
              whileHover={buttonVariant.hover}
              whileTap={buttonVariant.tap}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Register Now
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
                onClick={() => setShowSignIn(true)}
              >
                Sign In
              </span>
            </motion.p>
          </>
        )}
      </motion.div>
    </div>
  );
}
