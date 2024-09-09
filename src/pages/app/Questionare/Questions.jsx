import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrophone, faKeyboard, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Questions = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answer, setAnswer] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [interimAnswer, setInterimAnswer] = useState("");
  const [allAnswers, setAllAnswers] = useState([]);
  const [timer, setTimer] = useState(60); // Set initial timer to 60 seconds
  const [intervalId, setIntervalId] = useState(null);
  const [timeoutId, setTimeoutId] = useState(null);

  const questions = [
    "What are you looking for in your next job?",
    "What is your ideal work environment?",
    "What skills would you like to develop?",
    "What motivates you at work?",
    "What are your long-term career goals?",
    "How do you handle tight deadlines?",
    "What is your biggest professional achievement?",
    "How do you handle feedback?",
    "What is your experience with teamwork?",
    "What are your salary expectations?",
  ];

  useEffect(() => {
    if (isListening) {
      const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
      recognition.lang = "en-US";
      recognition.interimResults = true;
      recognition.maxAlternatives = 1;
      recognition.continuous = true;

      recognition.onresult = (event) => {
        let transcript = "";
        for (let i = event.resultIndex; i < event.results.length; i++) {
          transcript += event.results[i][0].transcript;
        }
        setInterimAnswer(transcript);
        setAnswer((prevAnswer) => prevAnswer + transcript);
        console.log("Transcript:", transcript);
      };

      recognition.onerror = (event) => {
        console.error("Speech recognition error:", event.error);
        setIsListening(false);
      };

      recognition.onend = () => {
        if (isListening) {
          recognition.start();
        }
      };

      recognition.start();

      // Start the timer for 60 seconds
      setTimer(60);
      const intervalId = setInterval(() => {
        setTimer((prevTimer) => {
          if (prevTimer <= 1) {
            clearInterval(intervalId);
            return 0;
          }
          return prevTimer - 1;
        });
      }, 1000);
      setIntervalId(intervalId);

      // Stop recognition after 60 seconds
      const timeoutId = setTimeout(() => {
        recognition.stop();
      }, 60000);
      setTimeoutId(timeoutId);
    } else {
      if (intervalId) clearInterval(intervalId);
      if (timeoutId) clearTimeout(timeoutId);
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [isListening]);

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setAllAnswers([...allAnswers, answer]);
      setAnswer("");
      setInterimAnswer("");
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handleVoiceInput = () => {
    setIsListening(true);
  };

  const handleKeyboardInput = () => {
    // Implement keyboard input handling if needed
  };

  return (
    <div className="bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white min-h-screen flex flex-col justify-center items-center p-6">
      <div className="bg-gray-700 p-8 rounded-2xl shadow-2xl w-full max-w-3xl border border-gray-600">
        <div className="text-purple-300 text-sm mb-4 font-semibold">
          Background Question
        </div>
        <div className="text-2xl mb-4 font-semibold">
          <span className="text-gray-400">
            Question {currentQuestion + 1} of {questions.length}
          </span>
        </div>
        <div className="text-2xl mb-6 font-semibold">{questions[currentQuestion]}</div>

        {/* Answer Buttons Section */}
        <div className="flex items-center mb-6 space-x-4">
          <button
            onClick={handleVoiceInput}
            className="flex items-center justify-center bg-gradient-to-r from-purple-600 to-purple-400 py-2 px-4 rounded-md text-white hover:from-purple-500 hover:to-purple-300 focus:outline-none transition duration-300 ease-in-out"
          >
            <FontAwesomeIcon icon={faMicrophone} className="mr-2 text-lg" />
            Answer
          </button>
          <button
            onClick={handleKeyboardInput}
            className="flex items-center justify-center bg-gradient-to-r from-purple-600 to-purple-400 py-2 px-4 rounded-md text-white hover:from-purple-500 hover:to-purple-300 focus:outline-none transition duration-300 ease-in-out"
          >
            <FontAwesomeIcon icon={faKeyboard} className="mr-2 text-lg" />
            Keyboard
          </button>
        </div>

        {/* Display the answer */}
        <div className="text-lg mb-6 font-semibold text-gray-300">
          <p>Your Answer:</p>
          <p className="italic">{interimAnswer}</p>
        </div>

        {/* Timer Display */}
        {isListening && (
          <div className="text-lg mb-6 font-semibold text-gray-300">
            <p>Time Remaining:</p>
            <p className="italic">{timer} seconds</p>
          </div>
        )}

        {/* Next Button */}
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

      <p className="text-xs text-gray-400 mt-4">
        Remember, there are no wrong answers. Just give it your best shot.
      </p>
    </div>
  );
};

export default Questions;