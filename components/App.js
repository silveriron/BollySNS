import React, { useEffect, useState } from "react";
import Auth from "./auth/Auth";
import Home from "./home/Home";

const App = () => {
  const [isLogin, setIsLogin] = useState();

  useEffect(() => {
    fetch("/api/auth/checkUser")
      .then((response) => response.json())
      .then((data) => setIsLogin(data.user));
  });
  return <>{isLogin ? <Home /> : <Auth />}</>;
};

export default App;
