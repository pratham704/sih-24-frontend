import React, { useState, useEffect ,useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMicrophone,
  faArrowRight,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { fetchQuestions } from "./generateQuestions"; // Import the utility function
import SkeletonLoader from "../../../components/Skleton/SkletonGenerateQuestions";
import axios from 'axios';
import { Toast } from 'primereact/toast';
import { useNavigate } from 'react-router-dom';


const Questions = () => {
  const handle = useFullScreenHandle();
  const toast = useRef(null);
  const navigate = useNavigate();

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answer, setAnswer] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [interimAnswer, setInterimAnswer] = useState("");
  const [allAnswers, setAllAnswers] = useState([]);
  const [timer, setTimer] = useState(60); // Timer for countdown
  const [timerRunning, setTimerRunning] = useState(false); // Flag to control timer
  const [isAnswerButtonDisabled, setIsAnswerButtonDisabled] = useState(false); // New state for button
  const [questions, setQuestions] = useState([]); // State to hold generated questions
  const [loading, setLoading] = useState(true); // State to track loading status

  useEffect(() => {
    generateQuestions();
  }, []);

  const generateQuestions = async () => {
    const technologies = localStorage.getItem("Technologies");
    const education = localStorage.getItem("Education");
    const post = "Web Developer";
    const jobDescription =
      "Responsible for designing, coding, and modifying websites, from layout to function according to the client's specifications. Create visually appealing sites that feature user-friendly design and clear navigation.";
      const apiKey = process.env.REACT_APP_GEMINI_KEY;
      try {
      const extractedQuestions = await fetchQuestions(
        apiKey,
        post,
        jobDescription,
        technologies,
        education
      );
      setQuestions(extractedQuestions);
      setLoading(false); // Set loading to false once questions are fetched or an error occurs
    } catch (error) {
      console.error("Failed to fetch questions:", error);
    } finally {
    }
  };






  

  useEffect(() => {
    if (isListening) {
      const recognition = new (window.SpeechRecognition ||
        window.webkitSpeechRecognition)();
      recognition.lang = "en-US";
      recognition.interimResults = true;
      recognition.maxAlternatives = 1;
      recognition.continuous = false;

      let interimTranscript = "";
      let finalTranscript = "";

      recognition.onresult = (event) => {
        let transcript = "";
        for (let i = event.resultIndex; i < event.results.length; i++) {
          transcript += event.results[i][0].transcript;
        }

        if (event.results[0].isFinal) {
          finalTranscript += transcript + " ";
          setAnswer(finalTranscript.trim());
        } else {
          interimTranscript = transcript;
          setInterimAnswer(interimTranscript);
        }
      };

      recognition.onerror = (event) => {
        console.error("Speech recognition error:", event.error);
        setIsListening(false);
      };

      recognition.onend = () => {
        if (isListening) {
          recognition.start(); // Restart recognition if still listening
        }
      };

      recognition.start();

      return () => {
        recognition.stop();
      };
    }
  }, [isListening]);

  useEffect(() => {
    if (timerRunning) {
      const intervalId = setInterval(() => {
        setTimer((prevTimer) => {
          if (prevTimer <= 1) {
            clearInterval(intervalId);
            handleTimerEnd(); // Automatically move to next question when timer ends
            return 0;
          }
          if (prevTimer === 5) {
            return handleNext(); // Call handleNext when timer reaches 5 seconds
          }
          return prevTimer - 1;
        });
      }, 1000);

      return () => {
        clearInterval(intervalId);
      };
    }
  }, [timerRunning]);

  const handleVoiceInput = () => {
    setIsListening(true);
    setTimer(60); // Reset timer when starting voice input
    setTimerRunning(true); // Start the timer
    setIsAnswerButtonDisabled(true); // Disable the button after click
  };

  const handleTimerEnd = () => {
    if (answer.trim() !== "") {
      localStorage.setItem(`question${currentQuestion + 1}`, answer.trim());
      setAllAnswers([...allAnswers, answer.trim()]);
    }

    setAnswer(""); // Clear the answer state
    setInterimAnswer(""); // Clear interim answer state
    setTimerRunning(false); // Stop the timer
    setCurrentQuestion((prevQuestion) => prevQuestion + 1); // Move to the next question
    setIsAnswerButtonDisabled(false); // Re-enable the button for the next question
  };

  const handleNext = async () => {

    setLoading(true)
    let previousAnswers = [];
    for (let i = 0; i < currentQuestion; i++) {
      const savedAnswer = localStorage.getItem(`question${i + 1}`);
      if (savedAnswer) {
        previousAnswers.push(savedAnswer);
      }
    }
  
    let cleanedAnswer = answer;
    previousAnswers.forEach((prevAns) => {
      const regex = new RegExp(prevAns, "g");
      cleanedAnswer = cleanedAnswer.replace(regex, "").trim();
    });
  
    localStorage.setItem(`question${currentQuestion + 1}`, cleanedAnswer);
    const questionText = questions[currentQuestion]; // Current question text
  
    // Wait for the score from evaluateAnswer
    const score = await evaluateAnswer(questionText, cleanedAnswer);
    
    if (score) {
      localStorage.setItem(`score${currentQuestion + 1}`, score); // Store the score
      // alert(`Your score for this question is: ${score}`);
    }
  
    setAllAnswers([...allAnswers, answer.trim()]);
    setAnswer(""); // Clear the answer state
    setInterimAnswer(""); // Clear interim answer state
    setCurrentQuestion((prevQuestion) => {
      const newQuestion = prevQuestion + 1;
      if (newQuestion >= questions.length) {
        navigate('/student/score'); // Navigate to /home if it's the last question
      }
      return newQuestion;
    });

    setLoading(false)
    
    setTimer(60);
    setTimerRunning(true);
  };
  
  const evaluateAnswer = async (question, answer) => {
    const apiKey = process.env.REACT_APP_GEMINI_KEY;
    const url = `https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=${apiKey}`;

    const requestBody = {
      contents: [
        {
          role: "user",
          parts: [
            {
              text: `For the question: "${question}", please evaluate the candidate's answer: "${answer}". Assign a score out of 10 based on how relevant and accurate the answer is to the question. Provide only the score, with no additional comments or explanations.`,
            },
          ],
        },
      ],
    };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch");
      }

      const data = await response.json();
      // Extract score from the response
      const score =
        data.candidates[0]?.content?.parts[0]?.text || "No score available";
      return score;
    } catch (error) {
      console.error("Error evaluating answer:", error);
      return null;
    }
  };






  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [capturing, setCapturing] = useState(false);
  const [result, setResult] = useState(null);
  const [intervalId, setIntervalId] = useState(null);

  // Start the webcam stream
  const startVideo = () => {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(stream => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      })
      .catch(err => {
        console.error('Error accessing webcam:', err);
      });
  };

  // Capture a frame from the video and send it to the API
  const captureAndSend = async () => {
    const canvas = canvasRef.current;
    const video = videoRef.current;

    if (canvas && video) {
      const context = canvas.getContext('2d');
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      context.drawImage(video, 0, 0, canvas.width, canvas.height);

      // Convert canvas image to base64
      const base64Image = canvas.toDataURL('image/jpeg').split(',')[1];

      try {
        const response = await axios.post('http://localhost:5000/detect', {
          image: base64Image,
        });
        console.log('API Response:', response); // Log the response
        if (response.data.result > 1) {
          toast.current.show({
            severity: 'info',
            summary: 'Please be alone',
            detail: `${response.data.result} persons detected`,
            life: 2000
          });
        }

      } catch (error) {
        console.error('Error sending image to API:', error);
      }
    }
  };

  useEffect(() => {
    startVideo();

    // Set up interval to capture and send image every 5 seconds
    const id = setInterval(() => {
      setCapturing(true);
      captureAndSend().finally(() => setCapturing(false));
    }, 5000);

    setIntervalId(id);

    // Cleanup on component unmount
    return () => {
      clearInterval(id);
      const stream = videoRef.current?.srcObject;
      if (stream) {
        const tracks = stream.getTracks();
        tracks.forEach(track => track.stop());
      }
    };
  }, []);


  return (
    <>
    <div className="relative bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white min-h-screen flex flex-col justify-center items-center p-6">
      {/* Timer Component */}
      <Toast ref={toast} />

      {timerRunning && <Timer time={timer} />}

      {loading ? (
        <SkeletonLoader />
      ) : (
        <div className="bg-gray-700 p-8 rounded-2xl shadow-2xl w-full max-w-3xl border border-gray-600">
          <div className="text-purple-300 text-sm mb-4 font-semibold">
            Background Question
          </div>
          <div className="text-2xl mb-4 font-semibold">
            <span className="text-gray-400">
              Question {currentQuestion + 1} of {questions.length}
            </span>
          </div>
          <div className="text-2xl mb-6 font-semibold">
            {questions[currentQuestion]}
          </div>

          {/* Answer Buttons Section */}
          <div className="flex items-center mb-6 space-x-4">
            <button
              onClick={handleVoiceInput}
              disabled={isAnswerButtonDisabled}
              className={`flex items-center justify-center py-2 px-4 rounded-md text-white transition duration-300 ease-in-out ${
                isAnswerButtonDisabled
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-gradient-to-r from-purple-600 to-purple-400 hover:from-purple-500 hover:to-purple-300"
              }`}
            >
              <FontAwesomeIcon icon={faMicrophone} className="mr-2 text-lg" />
              {isAnswerButtonDisabled ? "Listening" : "Answer"}
            </button>
          </div>

          <div className="text-lg mb-6 font-semibold text-gray-300">
            <p className="italic">{interimAnswer}</p>
          </div>

          <div className="flex justify-end">
            <button
              onClick={handleNext}
              className="flex items-center justify-center bg-gradient-to-r from-purple-600 to-purple-400 py-2 px-6 rounded-md text-white hover:from-purple-500 hover:to-purple-300 focus:outline-none transition duration-300 ease-in-out"
            >
              Next
              <FontAwesomeIcon icon={faArrowRight} className="ml-2 text-lg" />
            </button>
          </div>
        </div>
      )}

      <p className="text-xs text-gray-400 mt-4">
        Remember, there are no wrong answers. Just give it your best shot.
      </p>
    </div>

    <div style={{ }}>
      <video 
        ref={videoRef}
        autoPlay
        style={{ 

        }}
      ></video>
      <canvas ref={canvasRef} style={{ display: 'none' }}></canvas>
      <button onClick={captureAndSend} disabled={capturing}>
        {capturing ? 'Capturing...' : 'Capture and Send'}
      </button>
      <div style={{ marginTop: '20px' }}>
        {result !== null && (
          <p>API Response: {result}</p>
        )}
      </div>
    </div>

</>
  );
};

const Timer = ({ time }) => (
  <div className="fixed top-20 right-4 text-white text-2xl flex items-center space-x-2">
    <FontAwesomeIcon icon={faClock} className="text-yellow-500" />
    <span>{time}</span>
  </div>
);

export default Questions;
