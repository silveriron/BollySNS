import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utility/firebase";
import Auth from "./auth/Auth";
import Home from "./home/Home";
import { useSelector, useDispatch } from "react-redux";
import { userActions } from "../store/userSlice";

const App = () => {
  const [init, setInit] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          userActions.isLogin({
            name: user.displayName,
            email: user.email,
            uid: user.uid,
            photoURL: user.photoURL,
          })
        );
      }
      setInit(true);
    });
  }, [dispatch]);

  return (
    <>{init ? user.uid ? <Home userObj={user} /> : <Auth /> : <p>Loading</p>}</>
  );
};

export default App;
