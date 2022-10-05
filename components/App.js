import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utility/firebase";
import Auth from "./auth/Auth";
import Home from "./home/Home";

const App = () => {
  const [init, setInit] = useState(false);
  const [isLogin, setIsLogin] = useState();
  const [userObj, setUserObj] = useState();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLogin(true);
        setUserObj(user);
      } else {
        setIsLogin(false);
      }
      setInit(true);
    });
  }, []);

  return (
    <>
      {init ? isLogin ? <Home userObj={userObj} /> : <Auth /> : <p>Loading</p>}
    </>
  );
};

export default App;
