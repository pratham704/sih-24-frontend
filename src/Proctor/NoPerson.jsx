import React, { useState, useEffect, useRef } from 'react';

const NoPerson = () => {
    const URL = 'https://teachablemachine.withgoogle.com/models/Kcg_0WTdU/';
    const [model, setModel] = useState(null);
    const [webcam, setWebcam] = useState(null);
    const [ctx, setCtx] = useState(null);
    const [predictions, setPredictions] = useState([]);
    const [isNoPersonDetected, setIsNoPersonDetected] = useState(false); // State to track no-person detection
    const [isTabActive, setIsTabActive] = useState(true); // State to track tab visibility
    const canvasRef = useRef(null);


    useEffect(() => {
        // Your existing socket initialization and media device setup code...        // Tab switching logic
        const handleTabSwitch = () => {
          const handleTabChange = (event) => {
            const currentTab = event.currentTarget.dataset.tab;
            console.log('Tab switched:', currentTab);
            // Handle tab change logic here, e.g., show/hide content based on currentTab
          };
      
          const tabs = document.querySelectorAll('.tab');
          tabs.forEach(tab => {
            tab.addEventListener('click', handleTabChange);
          });
      
          return () => {
            tabs.forEach(tab => {
              tab.removeEventListener('click', handleTabChange);
            });
          };
        };
      
        handleTabSwitch(); // Call the tab switch effect
      
 
      }, []);
      

    useEffect(() => {
        const init = async () => {
            // Check if tmPose is available
            if (!window.tmPose) {
                console.error('Teachable Machine Pose not found.');
                return;
            }

            const modelURL = URL + 'model.json';
            const metadataURL = URL + 'metadata.json';

            try {
                // Load the model and metadata
                const model = await window.tmPose.load(modelURL, metadataURL);
                setModel(model);

                // Set up webcam
                const size = 200;
                const flip = true;
                const webcam = new window.tmPose.Webcam(size, size, flip);
                await webcam.setup();
                await webcam.play();
                setWebcam(webcam);

                // Append/get elements to the DOM
                const canvas = canvasRef.current;
                canvas.width = size;
                canvas.height = size;
                const context = canvas.getContext('2d');
                setCtx(context);
            } catch (error) {
                console.error('Error initializing model:', error);
            }
        };

        init();

        return () => {
            if (webcam) {
                webcam.stop();
            }
        };
    }, []);

    useEffect(() => {
        const handleVisibilityChange = () => {
          if (document.visibilityState === 'visible') {
            console.log('Tab is active');
            document.body.style.backgroundColor = ''; // Reset background color
          } else {
            console.log('Tab is inactive');
            document.body.style.backgroundColor = 'red'; // Set background color to red
            setTimeout(() => {
              console.log('Resetting background color');
              document.body.style.backgroundColor = ''; // Reset after 3 seconds
            }, 3000);
          }
        };
      
        // Initial check on mount
        if (document.visibilityState === 'hidden') {
          document.body.style.backgroundColor = 'red';

        }
      
        document.addEventListener('visibilitychange', handleVisibilityChange);
      
        // Cleanup: Remove event listener on component unmount
        return () => {
          document.removeEventListener('visibilitychange', handleVisibilityChange);
        };
      }, []);
      




      
    useEffect(() => {
        const loop = () => {
            if (webcam && isTabActive) {
                webcam.update();
                predict();
            }
            window.requestAnimationFrame(loop);
        };

        window.requestAnimationFrame(loop);
    }, [webcam, isTabActive]);

    const predict = async () => {
        if (!model || !webcam) return;

        const { pose, posenetOutput } = await model.estimatePose(webcam.canvas);
        const prediction = await model.predict(posenetOutput);

        const newPredictions = prediction.map(pred => ({
            className: pred.className,
            probability: pred.probability.toFixed(2)
        }));

        setPredictions(newPredictions);
        drawPose(pose);

        // Check if "No-person" prediction probability is more than or equal to 0.7
        const noPersonPrediction = newPredictions.find(pred => pred.className === 'No-person');
        if (noPersonPrediction && parseFloat(noPersonPrediction.probability) >= 0.7) {
            setIsNoPersonDetected(true);
        } else {
            setIsNoPersonDetected(false);
        }
    };

    const drawPose = (pose) => {
        if (!webcam || !ctx) return;

        ctx.drawImage(webcam.canvas, 0, 0);

        if (pose) {
            const minPartConfidence = 0.5;
            window.tmPose.drawKeypoints(pose.keypoints, minPartConfidence, ctx);
            window.tmPose.drawSkeleton(pose.keypoints, minPartConfidence, ctx);
        }
    };

    useEffect(() => {
        // Set document background color based on detection state and tab visibility
        document.documentElement.style.backgroundColor = isNoPersonDetected && isTabActive ? 'red' : 'white';

        // Clean up when component unmounts
        return () => {
            document.documentElement.style.backgroundColor = 'white'; // Reset background color
        };
    }, [isNoPersonDetected, isTabActive]);

    return (
        <div>
            <div>Teachable Machine Pose Model</div>
            <div>
                <canvas ref={canvasRef}></canvas>
            </div>
            <div>
                {predictions.map((pred, index) => (
                    <div key={index}>{`${pred.className}: ${pred.probability}`}</div>
                ))}
            </div>
        </div>
    );
};

export default NoPerson;
