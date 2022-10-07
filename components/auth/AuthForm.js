import React, { useState } from "react";
import Input from "../UI/Input";
import useInput from "../../hooks/useInput";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../utility/firebase";

const AuthForm = () => {
  const [email, onChangeEmail, setEmail] = useInput();
  const [password, onChangePassword, setPassword] = useInput();
  const [error, setError] = useState("");
  const [newAccount, setNewAccount] = useState(false);

  const toggleNewAccount = () => setNewAccount((prev) => !prev);

  const errorHandler = (error) => {
    let message = error.message;
    const n = error.message.indexOf(" ");
    message = message.slice(n);
    setError(message);
  };

  const authHandler = (method) => {
    let func;
    if (method === "create") {
      func = createUserWithEmailAndPassword;
    } else {
      func = signInWithEmailAndPassword;
    }

    func(auth, email, password)
      .then(() => {
        setEmail("");
        setPassword("");
      })
      .catch((error) => {
        errorHandler(error);
      });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const regex = /.+@.+\..+/;
    if (password.trim().length >= 6 && regex.test(email)) {
      authHandler(newAccount ? "create" : "signin");
    } else {
      setError("이메일 혹은 비밀번호를 확인해주세요.");
    }
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <Input type="text" value={email} onChange={onChangeEmail} required />
      <Input
        type="password"
        value={password}
        onChange={onChangePassword}
        required
      />
      <Input type="submit" value={newAccount ? "Create Account" : "Sign In"} />
      <div onClick={toggleNewAccount}>
        {newAccount ? "Sign In" : "Create Account"}
      </div>
      {error && <p>{error}</p>}
    </form>
  );
};

export default AuthForm;
