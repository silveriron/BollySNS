import React, { useState } from "react";
import AuthForm from "./AuthForm";
import Social from "./Social";
import logo from "../../public/favicon.ico";
import Image from "next/image";
import styles from "./Auth.module.css";

const Auth = () => {
  const [error, setError] = useState("");

  const errorHandler = (error) => {
    let message = error.message;
    const n = error.message.indexOf(" ");
    message = message.slice(n);
    setError(message);
  };

  return (
    <div className={styles.authMainContainer}>
      <div className={styles.imgDiv}></div>
      <section className={styles.container}>
        <Image src={logo} alt="bolly logo" />
        <h1>지금 하고 싶은 이야기</h1>
        <p>오늘 여기에 가입하세요.</p>
        <Social errorHandler={errorHandler} />
        <div className={styles.lineBox}>
          <div className={styles.line}> 또는 </div>
        </div>
        <AuthForm error={error} errorHandler={errorHandler} />
      </section>
    </div>
  );
};

export default Auth;
