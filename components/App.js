import React, { useState } from "react";
import app, { auth } from "../utility/firebase";
import Auth from "./auth/Auth";
import Home from "./home/Home";

const App = () => {
  const [isLogin, setIsLogin] = useState(auth.currentUser);
  return <>{isLogin ? <Home /> : <Auth />}</>;
};

export default App;
