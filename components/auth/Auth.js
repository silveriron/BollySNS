import React, { useState } from "react";
import useInput from "../../hooks/useInput";
import { auth } from "../../utility/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const Auth = () => {
  const [email, onChangeEmail, setEmail] = useInput();
  const [password, onChangePassword, setPassword] = useInput();
  const [newAccount, setNewAccount] = useState(false);
  const [error, setError] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    if (newAccount) {
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          setEmail("");
          setPassword("");
        })
        .catch((error) => {
          let message = error.message;
          const n = error.message.indexOf(" ");
          message = message.slice(n);
          setError(message);
        });
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          setEmail("");
          setPassword("");
        })
        .catch((error) => {
          let message = error.message;
          const n = error.message.indexOf(" ");
          message = message.slice(n);
          setError(message);
        });
    }
  };

  const toggleNewAccount = () => setNewAccount((prev) => !prev);

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
        <button>Continue with Google</button>
        <button>Continue with Github</button>
      </div>
    </>
  );
};

export default Auth;
