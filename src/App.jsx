import React, { useEffect } from "react";
import PublicRoute from "./routes/PublicRoute";
import { useRecoilState } from "recoil";
import centralAuth from "./stores/recoil/auth.store";
import { useAuthHelper } from "./utils/auth/authHelpers";

const App = () => {
  const [authData, setAuthData] = useRecoilState(centralAuth);
  const authHelper = useAuthHelper();

  useEffect(() => {
    const fetchData = async () => {
      await authHelper();
    };
    fetchData();
  }, []);

  console.log("Stored data updated:", authData);

  return authData !== null ? <PublicRoute /> : null;
};

export default App;
