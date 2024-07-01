import React from 'react';
import { motion } from 'framer-motion';
import Xarrow from 'react-xarrows';

const Roadmap = ({ selectedInterests, roadmaps }) => {
  const getRandomPosition = () => {
    const min = -100; // Increase the range for more randomness
    const max = 100;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const getRandomColor = () => {
    const colors = [
      "#FFDDC1", "#FFDFC9", "#FFEBE6", "#FFFFE0", "#D6ECF2", 
      "#FFE5CC", "#C9D4E6", "#E0E0B3", "#E6FFCC", "#FFD9D9",
      "#E6F0B3", "#E6FFCC", "#FFE6E6", "#B3D9FF", "#B3FFCC",
      "#FFCCFF", "#F0FFCC", "#FFD9E6", "#FFE6E6", "#CCFFEB",
      "#CCFFCC", "#E6CCFF", "#B3CC99", "#FFCCCC", "#EBD9FF",
      "#D9D9C1", "#FFCCFF", "#FFD9FF", "#B3ECFF", "#CCF2F2",
      "#FFCCFF", "#B3FFCC", "#FFFFCC", "#FFCCCC", "#CCFFCC",
      "#CCFFB3", "#CCFFCC", "#FFFFCC", "#FFCCCC", "#CCFFCC",
      "#FFE6E6", "#B3FF99", "#B3FF99", "#FFCCCC", "#CCFFCC",
    ];
  
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <div className=""
    
 
    >
      {selectedInterests.map((interest, index) => (
        <div key={index} className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">{interest} Roadmap</h2>
          <div className="flex flex-col items-start relative">
            {roadmaps[interest].map((step, stepIndex) => (
              <motion.div
                id={`step-${index}-${stepIndex}`}
                key={stepIndex}
                className="bg-white rounded-lg border border-gray-200 shadow-md p-4 my-6"
                style={{
                  zIndex: 10,
                  position: 'relative',
                  left: `${getRandomPosition()}px`, // Apply random horizontal position
                  backgroundColor: getRandomColor(), // Set random background color
                }}
                initial={{ opacity: 0, x: 20 }} // Initial animation with x instead of y
                animate={{ opacity: 1, x: 0 }} // Animation with x instead of y
                transition={{ delay: stepIndex * 0.4 }} // Adjust the delay here
              >
                <p className="text-lg text-gray-900">{step}</p>
                {stepIndex > 0 && (
                  <Xarrow
                    start={`step-${index}-${stepIndex - 1}`}
                    end={`step-${index}-${stepIndex}`}
                    color="gray"
                    showHead={true}
                    strokeWidth={2}
                    curveness={0.6}
                    dashness={false}
                    path="smooth"
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Roadmap;
