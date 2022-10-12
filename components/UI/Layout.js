import React, { useState } from "react";
import { useDispatch } from "react-redux";
import NavBar from "./NavBar";
import { userActions } from "../../store/userSlice";
import getUser from "../../utility/getUser";
import styles from "./Layout.module.css";

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
    <div className={styles.layout}>
      <NavBar />
      <main className={styles.main}>{props.children}</main>
    </div>
  );
};

export default Layout;
