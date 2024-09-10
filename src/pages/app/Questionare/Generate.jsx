import React, { useEffect } from 'react';

const Generate = ({ onResponse }) => {
  useEffect(() => {
    const technologies = localStorage.getItem('Technologies');
    const education = localStorage.getItem('Education');

    const post = "Web Developer";
    const jobDescription = "Responsible for designing, coding, and modifying websites, from layout to function according to the client's specifications. Create visually appealing sites that feature user-friendly design and clear navigation.";

    const payload = {
      contents: [
        {
          role: "user",
          parts: [
            {
              text: `Generate a set of 10 interview questions for the post of ${post}, considering the following job description: ${jobDescription}, and tailored for a candidate with the following details: Technologies: ${technologies}, Education: ${education}. Start with simple ice-breaking questions and gradually move into more in-depth techno-managerial topics, depending on the candidate’s experience and seniority level. No need for any explanation, provide 10 questions serially.`
            }
          ]
        }
      ]
    };

    const generateQuestions = async () => {
      try {
        const apiKey = 'AIzaSyC-zF-VYDMtN6i7Y3MiRodQ8DDJV8zCn64'; // Replace with your actual API key
        const response = await fetch(`https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=${apiKey}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        });

        if (response.ok) {
          const data = await response.json();
          // Assume the response contains the questions in an array format
          const generatedQuestions = data.questions || []; // Replace with the actual path to questions in response
          onResponse(generatedQuestions); // Call the callback function with generated questions
        } else {
          console.error("Failed to generate content:", response.statusText);
        }
      } catch (error) {
        console.error("Error during fetch:", error.message);
      }
    };

    generateQuestions();
  }, [onResponse]);

  return null; // Since this component does not render any visible content
};

export default Generate;
