import React from "react";
import { auth } from "../../utility/firebase";
import {
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
} from "firebase/auth";

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
    <div>
      <button name="google" onClick={loginHandler}>
        Continue with Google
      </button>
      <button name="github" onClick={loginHandler}>
        Continue with Github
      </button>
    </div>
  );
};

export default Social;
