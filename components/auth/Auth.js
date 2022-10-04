import React, { useState } from "react";
import useInput from "../../hooks/useInput";

const Auth = () => {
  const [email, onChangeEmail, setEmail] = useInput();
  const [password, onChangePassword, setPassword] = useInput();
  const [newAccount, setNewAccount] = useState(true);

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    if (newAccount) {
      const res = await fetch("api/auth/createAccount", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      console.log(data);
    } else {
    }

    setEmail("");
    setPassword("");
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
        <input type="submit" value={newAccount ? "Sign In" : "Login"} />
      </form>
      <div>
        <button>Continue with Google</button>
        <button>Continue with Github</button>
      </div>
    </>
  );
};

export default Auth;
