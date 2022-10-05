import React, { useState } from "react";
import useInput from "../../hooks/useInput";
import { auth } from "../../utility/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
} from "firebase/auth";

const Auth = () => {
  const [email, onChangeEmail, setEmail] = useInput();
  const [password, onChangePassword, setPassword] = useInput();
  const [newAccount, setNewAccount] = useState(false);
  const [error, setError] = useState("");

  const errorHandler = (error) => {
    let message = error.message;
    const n = error.message.indexOf(" ");
    message = message.slice(n);
    setError(message);
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    if (newAccount) {
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          setEmail("");
          setPassword("");
        })
        .catch((error) => {
          errorHandler(error);
        });
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          setEmail("");
          setPassword("");
        })
        .catch((error) => {
          errorHandler(error);
        });
    }
  };

  const toggleNewAccount = () => setNewAccount((prev) => !prev);

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
    signInWithPopup(auth, provider)
      .then((result) => {})
      .catch((error) => {
        errorHandler(error);
      });
  };

  return (
    <>
      <form onSubmit={onSubmitHandler}>
        <input type="text" value={email} onChange={onChangeEmail} required />
        <input
          type="password"
          value={password}
          onChange={onChangePassword}
          required
        />
        <input
          type="submit"
          value={newAccount ? "Create Account" : "Sign In"}
        />
        {error}
      </form>
      <span onClick={toggleNewAccount}>
        {newAccount ? "Sign In" : "Create Account"}
      </span>
      <div>
        <button name="google" onClick={loginHandler}>
          Continue with Google
        </button>
        <button name="github" onClick={loginHandler}>
          Continue with Github
        </button>
      </div>
    </>
  );
};

export default Auth;
