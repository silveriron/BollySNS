import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Footer from "./Footer";
import Header from "./Header";
import { userActions } from "../../store/userSlice";
import getUser from "../../utility/getUser";

const Layout = (props) => {
  const dispatch = useDispatch();
  const [isLogin, setIsLogin] = useState(false);
  getUser().then((user) => {
    if (user) {
      setIsLogin(true);
      dispatch(
        userActions.isLogin({
          name: user.displayName,
          email: user.email,
          uid: user.uid,
          photoURL: user.photoURL,
        })
      );
    }
  });

  return (
    <>
      <main>{props.children}</main>
      {isLogin && <Header />}
    </>
  );
};

export default Layout;
