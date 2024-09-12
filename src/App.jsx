import React, { useEffect } from "react";
import PublicRoute from "./routes/PublicRoute";
import { useRecoilState } from "recoil";
import centralAuth from "./stores/recoil/auth.store";
import { useAuthHelper } from "./utils/auth/authHelpers";
import { Pdfscrapper } from "./api/Scraper";
import { flaskEndpointForGemini } from "./api/Gemini";

const App = () => {
  const [authData, setAuthData] = useRecoilState(centralAuth);
  const authHelper = useAuthHelper();





  useEffect(() => {
    const fetchData = async () => {
      await authHelper();
    };
    fetchData();
  }, []);




  // not recommended the health check in Frontend , But i have no option :/ 

  useEffect(() => {
    let count = 0; // Initialize a counter

    const fetchData = () => {
      try {
        // Fire-and-forget requests without waiting for responses
        fetch(`${Pdfscrapper}`);
        fetch(`${flaskEndpointForGemini}`);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Run fetchData every 5 seconds, up to 5 times
    const intervalId = setInterval(() => {
      if (count < 5) {
        fetchData();
        count++;
      } else {
        clearInterval(intervalId); // Clear interval after 5 times
      }
    }, 5000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);


  console.log("Stored data updated:", authData);

  return authData !== null ? <PublicRoute /> : null;
};

export default App;
