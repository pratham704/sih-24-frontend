import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrophone, faKeyboard, faArrowRight, faClock } from "@fortawesome/free-solid-svg-icons";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import  {useCallback} from 'react';

const Questions = () => {
  const handle = useFullScreenHandle();

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answer, setAnswer] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [interimAnswer, setInterimAnswer] = useState("");
  const [allAnswers, setAllAnswers] = useState([]);
  const [timer, setTimer] = useState(60); // Timer for countdown
  const [timerRunning, setTimerRunning] = useState(false); // Flag to control timer
  const [isAnswerButtonDisabled, setIsAnswerButtonDisabled] = useState(false); // New state for button



  
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

  const handleNext = () => {
    // if (answer.trim() === "") {
    //   alert("Please provide an answer before proceeding.");
    //   return;
    // }
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

    localStorage.setItem(`question${currentQuestion + 1}`, cleanedAnswer)

    setAllAnswers([...allAnswers, answer.trim()]);
    setAnswer(""); // Clear the answer state
    setInterimAnswer(""); // Clear interim answer state
    setCurrentQuestion((prevQuestion) => prevQuestion + 1); // Move to the next question
    setTimer(60); 
    setTimerRunning(true); 
  };

  const handleVoiceInput = () => {
    setIsListening(true);
    setTimer(60); // Reset timer when starting voice input
    setTimerRunning(true); // Start the timer
    setIsAnswerButtonDisabled(true); // Disable the button after click
  };

  const handleKeyboardInput = () => {
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

  return (
    <div className="relative bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white min-h-screen flex flex-col justify-center items-center p-6">
      {/* Timer Component */}
      {timerRunning && <Timer time={timer} />}


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
  disabled={isAnswerButtonDisabled} // Disable button based on state
  className={`flex items-center justify-center py-2 px-4 rounded-md text-white transition duration-300 ease-in-out ${
    isAnswerButtonDisabled
      ? 'bg-gray-400 cursor-not-allowed' // Light grey shade and cursor change for disabled state
      : 'bg-gradient-to-r from-purple-600 to-purple-400 hover:from-purple-500 hover:to-purple-300'
  }`}
>
  <FontAwesomeIcon icon={faMicrophone} className="mr-2 text-lg" />
  {isAnswerButtonDisabled ? 'Listening' : 'Answer'}
</button>

          {/* <button
            onClick={handleKeyboardInput}
            className="flex items-center justify-center bg-gradient-to-r from-purple-600 to-purple-400 py-2 px-4 rounded-md text-white hover:from-purple-500 hover:to-purple-300 focus:outline-none transition duration-300 ease-in-out"
          >
            <FontAwesomeIcon icon={faKeyboard} className="mr-2 text-lg" />
            Keyboard
          </button> */}
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

      <p className="text-xs text-gray-400 mt-4">
        Remember, there are no wrong answers. Just give it your best shot.
      </p>
    </div>
  );
};

const Timer = ({ time }) => (
  <div className="absolute top-4 right-4 bg-gray-700 p-3 rounded-md shadow-lg flex items-center space-x-2">
    <FontAwesomeIcon icon={faClock} className="text-yellow-400 text-lg" />
    <span className="text-white text-lg">{time} seconds</span>
  </div>
);

export default Questions;
