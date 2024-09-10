// generateQuestions.js
export const fetchQuestions = async(apiKey, post, jobDescription, technologies, education) => {
    const payload = {
        contents: [{
            role: "user",
            parts: [{
                text: `Generate a set of 10 interview questions for the post of ${post}, considering the following job description: ${jobDescription}, and tailored for a candidate with the following details: Technologies: ${technologies}, Education: ${education}. Start with simple ice-breaking questions and gradually move into more in-depth techno-managerial topics, depending on the candidate’s experience and seniority level. No need for any explanation, provide 10 questions serially.`
            }]
        }]
    };

    try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=${apiKey}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        });

        if (response.ok) {
            const data = await response.json();
            const questionsText = data.candidates[0].content.parts[0].text;
            const extractedQuestions = questionsText.split("\n").map(q => q.trim()).filter(q => q);
            return extractedQuestions;
        } else {
            console.error("Failed to generate content:", response.statusText);
            return [];
        }
    } catch (error) {
        console.error("Error during fetch:", error.message);
        return [];
    }
};