import React, { useEffect, useState } from 'react';
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

const ScoreSummary = () => {
  const [scores, setScores] = useState([]);
  const [averageScore, setAverageScore] = useState(null);
  const [percentage, setPercentage] = useState(null);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const fetchedScores = [];
    let i = 1;
    while (true) {
      const score = localStorage.getItem(`score${i}`);
      if (score === null) break;

      // Extract numeric part before the slash
      const numericScore = parseFloat(score.split('/')[0]);
      if (!isNaN(numericScore)) {
        fetchedScores.push(numericScore); // Convert to number for calculations
      }
      i++;
    }
    setScores(fetchedScores);

    if (fetchedScores.length > 0) {
      const totalScore = fetchedScores.reduce((acc, score) => acc + score, 0);
      const avgScore = totalScore / fetchedScores.length;
      const percent = (avgScore / 10) * 100; // Assuming max score is 10
      setAverageScore(avgScore);
      setPercentage(percent);
    } else {
      setAverageScore(null);
      setPercentage(null);
    }
  }, []);

  const handleShowDetails = () => {
    setShowDetails(!showDetails);
  };

  const chartData = scores.map((score, index) => ({
    name: `Q${index + 1}`,
    score
  }));

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center py-12 px-4">
      <div className="bg-gray-800 p-12 rounded-lg shadow-xl max-w-4xl w-full">
        <div className="mb-8 text-center">
          <h3 className="text-3xl font-semibold mb-2 text-green-400">Average Score</h3>
          <p className="text-2xl font-medium">
            {typeof averageScore === 'number' ? averageScore.toFixed(2) : 'N/A'}
          </p>
          <h3 className="text-3xl font-semibold mt-4 mb-2 text-blue-400">Percentage</h3>
          <p className="text-2xl font-medium">
            {typeof percentage === 'number' ? `${percentage.toFixed(2)}%` : 'N/A'}
          </p>
        </div>

        <div className="text-center mt-8">
          <button
            onClick={handleShowDetails}
            className="bg-gradient-to-r from-purple-600 to-purple-400 py-2 px-6 rounded-md text-white hover:from-purple-500 hover:to-purple-300 transition duration-300 ease-in-out"
          >
            {showDetails ? 'Brief Details' : 'Show Detailed Summary'}
          </button>
        </div>

        <div className="bg-gray-800 p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4 text-purple-400">Score Chart</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#444" />
              <XAxis dataKey="name" stroke="#fff" />
              <YAxis stroke="#fff" />
              <Tooltip contentStyle={{ backgroundColor: "#333" }} />
              <Legend />
              <Line
                type="monotone"
                dataKey="score"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {showDetails && (
          <div className="mt-8">
            <ul className="space-y-6 mb-8">
              {scores.map((score, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center bg-gray-700 p-6 rounded-lg shadow-md transition-transform transform hover:scale-105"
                >
                  <span className="text-xl font-medium">Question {index + 1}:</span>
                  <span className="text-xl font-semibold text-green-300">{score}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ScoreSummary;
