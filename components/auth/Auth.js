import React from "react";
import useInput from "../../hooks/useInput";

const Auth = () => {
  const [email, onChangeEmail, setEmail] = useInput();
  const [password, onChangePassword, setPassword] = useInput();

  const onSubmitHandler = (e) => {
    e.preventDefault();
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
        <input type="submit" value="Login" />
      </form>
      <div>
        <button>Continue with Google</button>
        <button>Continue with Github</button>
      </div>
    </>
  );
};

export default Auth;
