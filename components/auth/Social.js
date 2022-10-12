import React from "react";
import { auth } from "../../utility/firebase";
import {
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import styles from "./Social.module.css";
import Button from "../UI/Button";

const Social = () => {
  const loginHandler = (e) => {
    const {
      target: { name },
    } = e;
    let provider;
    if (name === "google") {
      provider = new GoogleAuthProvider();
    } else {
      provider = new GithubAuthProvider();
    }
    signInWithPopup(auth, provider).catch((error) => {
      errorHandler(error);
    });
  };

  return (
    <div className={styles.btn}>
      <Button name="google" onClick={loginHandler}>
        Google 계정으로 가입하기
      </Button>
      <button name="google" onClick={loginHandler}>
        Google 계정으로 가입하기
      </button>
      <button name="github" onClick={loginHandler}>
        Github 계정으로 가입하기
      </button>
    </div>
  );
};

export default Social;
