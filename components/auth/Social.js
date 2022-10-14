import React from "react";
import { auth } from "../../utility/firebase";
import {
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import styles from "./Social.module.css";
import { useRouter } from "next/router";
import Button from "../UI/Button";
import google from "../../public/logo/Google__G__Logo.svg.png";
import github from "../../public/logo/25231.png";
import Image from "next/image";

const Social = ({ errorHandler }) => {
  const router = useRouter();
  const loginHandler = (e) => {
    const name = e.target.name;
    let provider;
    if (name === "google") {
      provider = new GoogleAuthProvider();
    } else if (name === "github") {
      provider = new GithubAuthProvider();
    }
    signInWithPopup(auth, provider)
      .then(() => {
        router.push("/");
      })
      .catch((error) => {
        errorHandler(error);
      });
  };

  return (
    <div className={styles.btn}>
      <Button name="google" onClick={loginHandler}>
        <Image
          name="google"
          src={google}
          width={20}
          height={20}
          alt="google logo"
        />
        Google 계정으로 가입하기
      </Button>
      <Button name="github" onClick={loginHandler}>
        <Image
          name="github"
          src={github}
          width={20}
          height={20}
          alt="github logo"
        />
        Github 계정으로 가입하기
      </Button>
    </div>
  );
};

export default Social;
