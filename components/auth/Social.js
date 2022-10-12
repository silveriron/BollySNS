import React from "react";
import { auth } from "../../utility/firebase";
import {
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import styles from "./Social.module.css";
import Button from "../UI/Button";
import google from "../../public/logo/Google__G__Logo.svg.png";
import github from "../../public/logo/25231.png";
import Image from "next/image";

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
        <div>
          <Image src={google} width={20} height={20} alt="google logo" />
          <span>Google 계정으로 가입하기</span>
        </div>
      </Button>
      <Button name="github" onClick={loginHandler}>
        <div>
          <Image src={github} width={20} height={20} alt="github logo" />
          <span>Github 계정으로 가입하기</span>
        </div>
      </Button>
    </div>
  );
};

export default Social;
