import React from "react";
import { useDispatch } from "react-redux";
import Footer from "./Footer";
import Header from "./Header";
import { userActions } from "../../store/userSlice";
import getUser from "../../utility/getUser";

const Layout = (props) => {
  const dispatch = useDispatch();
  getUser().then((user) =>
    dispatch(
      userActions.isLogin({
        name: user.displayName,
        email: user.email,
        uid: user.uid,
        photoURL: user.photoURL,
      })
    )
  );

  return (
    <>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </>
  );
};

export default Layout;
