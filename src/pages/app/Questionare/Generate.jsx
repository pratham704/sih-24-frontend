import React, { useEffect, useState } from 'react';

const Generate = () => {
  const [response, setResponse] = useState(null);

  useEffect(() => {
    // Retrieve data from localStorage
    const technologies = localStorage.getItem('Technologies');
    const education = localStorage.getItem('Education');
    
    // Define the post and job description
    const post = "Web Developer";
    const jobDescription = "Responsible for designing, coding, and modifying websites, from layout to function according to the client's specifications. Create visually appealing sites that feature user-friendly design and clear navigation.";

    // Prepare the API request payload
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

    // Send the POST request to the API
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
          setResponse(data);
          console.log("Generated Questions:", data);
        } else {
          console.error("Failed to generate content:", response.statusText);
        }
      } catch (error) {
        console.error("Error during fetch:", error.message);
      }
    };

    generateQuestions();
  }, []);

  return (
    <div className="p-8 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Generated Interview Questions</h2>
      {response ? (
        <div className="bg-white p-4 rounded shadow">
          <pre className="whitespace-pre-wrap">{JSON.stringify(response, null, 2)}</pre>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Generate;
