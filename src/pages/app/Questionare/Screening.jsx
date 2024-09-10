import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaMicrophone,
  FaCamera,
  FaRegQuestionCircle,
  FaCheckCircle,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const stepVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
};

const Screening = () => {
  const nav = useNavigate();
  const [step, setStep] = useState(0);
  const [showFinalScreen, setShowFinalScreen] = useState(false);
  const [microphoneStatus, setMicrophoneStatus] = useState(null);
  const [cameraStatus, setCameraStatus] = useState(null);

  const steps = [
    { title: "Microphone" },
    { title: "Camera" },
    { title: "Rules" },
  ];

  useEffect(() => {
    if (step === 0) testMicrophone();
    if (step === 1) testCamera();
  }, [step]);

  const testMicrophone = async () => {
    try {
      await navigator.mediaDevices.getUserMedia({ audio: true });
      setMicrophoneStatus("Good");
    } catch {
      setMicrophoneStatus("Not Detected");
    }
  };

  const testCamera = async () => {
    try {
      await navigator.mediaDevices.getUserMedia({ video: true });
      setCameraStatus("Good");
    } catch {
      setCameraStatus("Not Detected");
    }
  };

  const nextStep = () => {
    if (step < steps.length - 1) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 0) setStep(step - 1);
  };

  const handleFinalScreen = () => {
    setShowFinalScreen(true);
  };

  const enterFullScreen = () => {
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) { // Firefox
      document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullscreen) { // Chrome, Safari, and Opera
      document.documentElement.webkitRequestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) { // IE/Edge
      document.documentElement.msRequestFullscreen();
    }
  };

  // SkeletonLoader component defined inside the same file
  const SkeletonLoader = ({ className }) => {
    return (
      <div className={`animate-pulse bg-gray-700 rounded-lg ${className}`}>
        {/* Placeholder for loading effect */}
      </div>
    );
  };

  return (
    <div className="bg-gray-900 text-gray-100 h-screen flex flex-col py-10 px-6">
      {!showFinalScreen && (
        <motion.div
          key={step}
          variants={stepVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="bg-gray-800 p-8 rounded-lg shadow-xl max-w-2xl mx-auto relative"
          style={{ top: "-10px" }}
        >
          {step === 0 && (
            <div>
              <div className="flex items-center mb-6">
                <FaMicrophone className="text-5xl mr-4 text-blue-500" />
                <h2 className="text-3xl font-semibold">
                  Microphone Compatibility
                </h2>
              </div>
              <p className="mb-4">
                Ensure your microphone is properly set up and working.
              </p>
              <p className="text-green-300 flex items-center">
                Status:
                <span className="flex items-center ml-2">
                  {microphoneStatus === null ? (
                    <SkeletonLoader className="h-6 w-20" />
                  ) : (
                    <strong>{microphoneStatus}</strong>
                  )}
                </span>
              </p>

              <button
                onClick={nextStep}
                className="mt-6 bg-blue-600 text-white px-8 py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
                disabled={microphoneStatus === null}
              >
                Next
              </button>
            </div>
          )}

          {step === 1 && (
            <div>
              <div className="flex items-center mb-6">
                <FaCamera className="text-5xl mr-4 text-green-500" />
                <h2 className="text-3xl font-semibold">Camera Compatibility</h2>
              </div>
              <p className="mb-4">
                Ensure your camera is working and properly aligned.
              </p>
              <p className="text-green-300 flex items-center">
                Status:
                <span className="flex items-center ml-2">
                  {cameraStatus === null ? (
                    <SkeletonLoader className="h-6 w-36" />
                  ) : (
                    <strong>{cameraStatus}</strong>
                  )}
                </span>
              </p>

              <div className="flex justify-end mt-6">
                <button
                  onClick={nextStep}
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
                  disabled={cameraStatus === null}
                >
                  Next
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <div className="flex items-center mb-6">
                <FaRegQuestionCircle className="text-5xl mr-4 text-yellow-500" />
                <h2 className="text-3xl font-semibold">Rules</h2>
              </div>
              <p className="mb-4">Please follow the guidelines below:</p>
              <ul className="list-disc list-inside mb-6">
                <li>Stay within the screen area.</li>
                <li>
                  Keep the microphone and camera at a reasonable distance.
                </li>
                <li>Avoid moving away from the screen during the test.</li>
              </ul>
              <button
                onClick={()=>{

                  handleFinalScreen()
                  enterFullScreen()
                }}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
              >
                Start Test
              </button>
            </div>
          )}
        </motion.div>
      )}

      {showFinalScreen && (
        <div className="flex flex-col items-center justify-center my-10 h-full">
          <FaCheckCircle
            className="text-green-600 text-8xl mb-8"
            style={{ marginTop: "-30px" }}
          />
          <h2 className="text-4xl font-semibold mb-8">You're all set!</h2>
          <button
            onClick={() => nav("/student/questions")}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
          >
            Start Now
          </button>
        </div>
      )}

      {/* Add a button to trigger full-screen mode */}
      {!showFinalScreen && (
        <div className="absolute bottom-4 right-4">
          {/* <button
            onClick={enterFullScreen}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
          >
            Enter Full Screen
          </button> */}
        </div>
      )}
    </div>
  );
};

export default Screening;
