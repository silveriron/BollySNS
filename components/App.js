import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utility/firebase";
import Auth from "./auth/Auth";
import Home from "./home/Home";

const App = () => {
  const [init, setInit] = useState(false);
  const [isLogin, setIsLogin] = useState();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLogin(true);
      } else {
        setIsLogin(false);
      }
      setInit(true);
    });
  }, []);

  return <>{init ? isLogin ? <Home /> : <Auth /> : <p>Loading</p>}</>;
};

export default App;
