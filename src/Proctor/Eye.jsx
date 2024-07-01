import React, { useEffect, useRef, useState } from 'react';
import Webcam from 'react-webcam';
import axios from 'axios';

const Eye = () => {
  const webcamRef = useRef(null);
  const [capturing, setCapturing] = useState(false);

  const captureAndSend = async () => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      try {
        const response = await axios.post('http://localhost:5000/upload', {
          image: imageSrc.split(',')[1], 
        });
        console.log(response.data);
      } catch (error) {
        console.error('Error uploading the image:', error);
      }
    }
  };

  useEffect(() => {
    setCapturing(true);
    const interval = setInterval(() => {
      captureAndSend();
    }, 5000);

    return () => {
      clearInterval(interval);
      setCapturing(false);
    };
  }, []);

  return (
    <div>
      <h1>Webcam Capture</h1>
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={640}
        height={480}
      />
    </div>
  );
};

export default Eye;
